import ClassNames from 'classnames';
import {
    debounce,
    get,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import { withStyles } from '../../styles';
import Utils from '../../utils/utils';
import TableBody from './tableBody';
import TableCell from './tableCell';
import {
    DEBOUNCE_WAIT_TIME,
    TH_RESIZABLE_MAX_WIDTH,
} from './tableConstants';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import TableHeaderCell from './tableHeaderCell';

const propTypes = {
    /**
     * Basic (default) styling.
     */
    basic: PropTypes.bool,
    /**
     * If `true`, all columns will be divided.
     */
    celled: PropTypes.bool,
    /**
     * The content of the Table.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the Table.
     */
    classes: PropTypes.shape({
        tableSticky: PropTypes.string,
        tableStickyColumns: PropTypes.string,
    }),
    /**
     * Add additional classes to the Table.
     */
    className: PropTypes.string,
    /**
     * If `true`, applies `width: auto` to the Table.
     */
    collapsing: PropTypes.bool,
    /**
     * If `true`, the far left column is divided from the rest of the columns.
     */
    definition: PropTypes.bool,
    /**
     * If `true`, columns will be evenly spaced.
     */
    fixed: PropTypes.bool,
    /**
     * Change the font size of text in the Table.
     */
    fontSize: PropTypes.oneOf(Utils.sizeEnums()),
    /**
     * Deprecated prop.
     */
    fullWidth: PropTypes.bool,
    /**
     * Add an id to the Table.
     */
    id: PropTypes.string,
    /**
     * Table rows and cells can be highlighted as if they have been selected.
     */
    selectable: PropTypes.bool,
    /**
     * Truncate copy within cells in the Table
     */
    singleLine: PropTypes.bool,
    /**
     * Change the cells vertical size in the Table.
     */
    size: PropTypes.oneOf(['l', 'large', 'm', 'medium', 's', 'small']),
    /**
     * Deprecated prop.
     */
    stackable: PropTypes.bool,
    /**
     * A table can have one or more columns defined as 'sticky' so that they stay fixed while the
     * user horizontally scrolls to see the remaining columns.
     */
    stickyColumnCount: PropTypes.number,
    /**
     * Resizable cell default percentage width related to the Table container size.
     */
    resizableColumnWidthPercentage: (props, propName, componentName) => {
        const {
            [propName]: propValue,
        } = props;

        const isValid = propValue ?
            propValue > 0 && propValue <= parseInt(TH_RESIZABLE_MAX_WIDTH * 100, 10) :
            true;

        if (!isValid) {
            return new Error(
                `Invalid prop value for ${propName} (${propValue}) supplied to ${componentName}. Validation failed.`,
            );
        }

        return null;
    },
    /**
     * If `true` or `very`, the Table will bleed off the edge.
     */
    stretch: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['very']),
    ]),
    /**
     * Deprecated prop.
     */
    striped: PropTypes.bool,
    /**
     * Supply any inline styles to the Table.
     */
    style: PropTypes.shape({}),
    theme: PropTypes.shape({
        palette: PropTypes.shape({}),
    }),
};

const defaultProps = {
    basic: true,
    celled: false,
    children: null,
    classes: null,
    className: null,
    collapsing: false,
    definition: false,
    fixed: false,
    fontSize: null,
    fullWidth: false,
    id: null,
    selectable: false,
    singleLine: false,
    size: null,
    stackable: null,
    stickyColumnCount: 0,
    resizableColumnWidthPercentage: null,
    stretch: false,
    striped: false,
    style: null,
    theme: null,
};

const TABLE_HEADER_TYPE = 'TableHeader';
const STICKY_CELL_CLASS = 'sticky-cell';
const STICKY_CELL_RESIZABLE_CLASS = 'sticky-cell-resizable';
const STICKY_CELL_FIRST_OF_ROW_CLASS = 'sticky-cell-first-of-row';
const STICKY_CELL_LAST_OF_COLUMN_CLASS = 'sticky-cell-last-of-column';

const useStyles = ({ palette }) => ({
    tableStickyColumns: {
        '& .table-cell': {
            backgroundColor: get(palette, 'background.primary'),
        },
        '& .table--scroll_container': {
            position: 'relative',
            overflow: 'auto',
            height: 'auto',
        },
        '& .sticky-cell': {
            position: 'sticky',
            left: 0,
            zIndex: 2,
        },
        '& .table-header > tr': {
            backgroundColor: ({ basic }) => !basic && get(palette, 'background.secondary'),
        },
        '& td.sticky-cell-resizable': {
            borderRight: `1px solid ${get(palette, 'border.primary')}`,
        },
    },
    tableSticky: {
        marginBottom: '10px !important',
    },
});

/**
 * Tables display sets of data.
 */
class Table extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            adjacentStickyColumnsTotalWidth: 0,
            stickyTableContainerWidth: 0,
        };

        this.applyStickyClassesToCells = this.applyStickyClassesToCells.bind(this);
        this.delayedSetScrollBarPosition = null;
        this.forceTableUpdate = this.forceTableUpdate.bind(this);
        this.parseChildren = this.parseChildren.bind(this);
        this.setResizableCellsWordWrapping = this.setResizableCellsWordWrapping.bind(this);
        this.setStickyCellsStylesOnScroll = this.setStickyCellsStylesOnScroll.bind(this);
        this.getStickyCellBorderStyle = this.getStickyCellBorderStyle.bind(this);
    }

    componentDidMount() {
        const {
            tableStickyContainer,
        } = this;

        const {
            stickyColumnCount,
        } = this.props;

        if (stickyColumnCount > 0) {
            this.setStickyColumnPositions();
            this.applyStickyClassesToCells();

            this.setState({
                stickyTableContainerWidth: tableStickyContainer.clientWidth,
            });
        }

        this.delayedSetStickyTableContainerWidth = stickyColumnCount > 0 &&
            debounce(() => {
                this.setState({
                    stickyTableContainerWidth: tableStickyContainer.clientWidth,
                });

                this.setStickyColumnPositions();
            }, DEBOUNCE_WAIT_TIME);
    }

    componentDidUpdate(prevProps) {
        const {
            children: prevChildren,
            stickyColumnCount: prevStickyColumnCount,
        } = prevProps;

        const {
            children,
            stickyColumnCount,
        } = this.props;

        const shouldRunStickyHelperFunctions = stickyColumnCount > 0 &&
            (prevChildren !== children || prevStickyColumnCount !== stickyColumnCount);

        if (shouldRunStickyHelperFunctions) {
            this.setStickyColumnPositions();
            this.applyStickyClassesToCells();
        }
    }

    getStickyCellBorderStyle() {
        const {
            theme: {
                palette,
            },
        } = this.props;

        const borderStyle = get(palette, 'border.primary');

        return `1px solid ${borderStyle}`;
    }

    setStickyColumnPositions() {
        const {
            stickyColumnCount,
            definition,
            basic,
            fullWidth,
            singleLine,
            celled,
            fixed,
            theme: {
                palette,
            },
        } = this.props;

        if (stickyColumnCount > 0 && this.tableRef) {
            const stickyCells = this.tableRef.querySelectorAll(`.table-cell:nth-child(-n+${stickyColumnCount})`);
            let cellWidths = 0;
            let cellCount = 0;
            /**
             * Reducing each left sticky column position will help to not have a separation
             * between them, so the content behind won't be visible when scrolling
             */
            let leftOverFloatSpace = 1;
            let auxLeftOverFloatSpace = 0;

            if (basic) {
                leftOverFloatSpace = 4;
                auxLeftOverFloatSpace = -1;

                if (celled) {
                    leftOverFloatSpace = 4;
                    auxLeftOverFloatSpace = -1;
                }

                if (fixed || singleLine) {
                    leftOverFloatSpace = 4;
                    auxLeftOverFloatSpace = 1;
                }
            } else {
                leftOverFloatSpace = 2;
                auxLeftOverFloatSpace = 1;

                if (celled) {
                    auxLeftOverFloatSpace = 2;
                }

                if (fixed || singleLine) {
                    leftOverFloatSpace = 3;
                    auxLeftOverFloatSpace = 2;
                }
            }

            for (let rootIndex = 0; rootIndex < stickyCells.length; rootIndex += 1) {
                cellCount += 1;
                const shouldChangeInitialDefinitionCell = definition &&
                    !fullWidth && rootIndex === 0;

                if (shouldChangeInitialDefinitionCell) {
                    stickyCells[rootIndex].style.backgroundColor = get(palette, 'background.primary');
                }

                if (cellCount <= stickyColumnCount && cellCount > 1) {
                    cellWidths += stickyCells[rootIndex - 1].clientWidth;
                    /**
                     * This makes definition/fullwidth work
                     * otherwise we'd have big separation space between sticky columns
                     */
                    if (definition && !basic) {
                        const isFirstHeaderColumn = rootIndex > 0 && cellCount > 0 && stickyCells[rootIndex].className.includes('header');
                        const definitionLeftOverflow = isFirstHeaderColumn ? 4 : 3;
                        stickyCells[rootIndex].style.left = `${cellWidths - definitionLeftOverflow}px`;
                    } else {
                        cellWidths -= leftOverFloatSpace + (
                            cellCount >= 3 ?
                                auxLeftOverFloatSpace :
                                0
                        );
                        stickyCells[rootIndex].style.left = `${cellWidths}px`;
                    }
                }

                if (cellCount === stickyColumnCount) {
                    // used to get the max cell resizable width according to the table container
                    this.setState({
                        adjacentStickyColumnsTotalWidth: cellWidths,
                    });
                    cellCount = 0;
                    cellWidths = 0;
                }
            }
        }
    }

    setResizableCellsWordWrapping(shouldBreakSpaces) {
        const {
            stickyColumnCount,
        } = this.props;

        const stickyCells = this.tableRef.querySelectorAll(`.table-cell:nth-child(${stickyColumnCount})`);

        for (let i = 0; i < stickyCells.length; i += 1) {
            stickyCells[i].style.whiteSpace = shouldBreakSpaces ? 'break-spaces' : 'nowrap';
        }

        this.setStickyColumnPositions();
    }

    setStickyCellsStylesOnScroll({ scrollLeft }) {
        const {
            basic,
            definition,
            fullWidth,
            theme: {
                palette,
            },
        } = this.props;

        const stickyCellsFirstOfRow = this.tableRef.querySelectorAll(`.${STICKY_CELL_FIRST_OF_ROW_CLASS}`);
        const stickyCellBorderStyle = this.getStickyCellBorderStyle();
        const stickyCellBorderLeftStyle = scrollLeft > 0 && !basic ? stickyCellBorderStyle : '';

        for (let i = 0; i < stickyCellsFirstOfRow.length; i += 1) {
            stickyCellsFirstOfRow[i].style.borderLeft = stickyCellBorderLeftStyle;
            const isInitalDefinitionCell = definition && !fullWidth && i === 0;

            if (isInitalDefinitionCell) {
                stickyCellsFirstOfRow[i].style.borderTop = get(palette, 'background.primary');
                stickyCellsFirstOfRow[i].style.boxShadow = '';
                stickyCellsFirstOfRow[i].style.borderLeft = '';
                stickyCellsFirstOfRow[i].style.borderRight = stickyCellBorderStyle;
            }
        }
    }

    parseChildren(children) {
        const {
            setResizableCellsWordWrapping,
        } = this;

        const {
            stickyColumnCount,
            fixed,
            singleLine,
            resizableColumnWidthPercentage,
        } = this.props;

        const {
            adjacentStickyColumnsTotalWidth,
            stickyTableContainerWidth,
        } = this.state;

        const shouldHandleStickyBehavior = !fixed && !singleLine;
        const parsedChildren = React.Children.map(children, (child) => {
            if (child.type.name === TABLE_HEADER_TYPE) {
                const tableHeaderRow = child.props.children;
                const headerCells = tableHeaderRow.props.children;
                const parsedHeaderCells = React.Children.map(
                    headerCells,
                    (headerCell, index) => {
                        const isResizable = shouldHandleStickyBehavior &&
                            (
                                index === stickyColumnCount - 1 &&
                                index !== headerCells.length - 1
                            );
                        return {
                            ...headerCell,
                            props: {
                                ...headerCell.props,
                                isResizable,
                                ...(isResizable && {
                                    adjacentStickyColumnsTotalWidth,
                                    stickyColumnCount,
                                    stickyTableContainerWidth,
                                    shouldResetWhiteSpaceStyle: shouldHandleStickyBehavior,
                                    forceTableUpdate: this.forceTableUpdate,
                                    resizableColumnWidthPercentage,
                                    setResizableCellsWordWrapping,
                                }),
                            },
                        };
                    },
                );
                const parsedTableHeaderRow = {
                    ...tableHeaderRow,
                    props: {
                        ...tableHeaderRow.props,
                        children: parsedHeaderCells,
                    },
                };
                return {
                    ...child,
                    props: {
                        ...child.props,
                        children: {
                            ...parsedTableHeaderRow,
                        },
                    },
                };
            }

            return child;
        });

        return parsedChildren;
    }

    applyStickyClassesToCells() {
        const {
            stickyColumnCount,
            definition,
            fullWidth,
        } = this.props;

        const stickyCells = this.tableRef.querySelectorAll(`.table-cell:nth-child(-n+${stickyColumnCount})`);

        for (let i = 0; i < stickyCells.length; i += 1) {
            const stickyCell = stickyCells[i];
            stickyCell.classList.add(STICKY_CELL_CLASS);
            const isDefinitionInitalCell = definition && !fullWidth && i === 0;

            if (isDefinitionInitalCell) {
                stickyCell.style.boxShadow = '';
            }

            const isFirstRowCell = (stickyColumnCount === 1 || (i + 1) % stickyColumnCount === 1);

            if (isFirstRowCell) {
                stickyCell.classList.add(STICKY_CELL_FIRST_OF_ROW_CLASS);
            }

            const isResizableCell = (i + 1) % stickyColumnCount === 0;

            if (isResizableCell) {
                stickyCell.classList.add(STICKY_CELL_RESIZABLE_CLASS);
            }

            const isLastColumnCell = stickyCells.length - i <= stickyColumnCount;

            if (isLastColumnCell) {
                stickyCell.classList.add(STICKY_CELL_LAST_OF_COLUMN_CLASS);
            }
        }
    }

    forceTableUpdate() {
        this.forceUpdate();
    }

    render() {
        const {
            basic,
            celled,
            children,
            classes,
            className,
            collapsing,
            definition,
            fixed,
            fontSize,
            fullWidth,
            id,
            selectable,
            singleLine,
            size,
            stackable,
            stickyColumnCount,
            stretch,
            striped,
            style,
        } = this.props;

        const shouldHandleStickyBehavior = !fixed && !singleLine;
        const containerClasses = ClassNames(
            'ui',
            'table', {
                'table-basic': basic,
                'table-celled': celled,
                'table-collapsing': collapsing,
                'table-definition': definition,
                'table-fixed': fixed,
                'table-font-size-large': fontSize === 'large',
                'table-font-size-medium': fontSize === 'medium',
                'table-font-size-small': fontSize === 'small',
                'table-font-size-xlarge': fontSize === 'xlarge',
                'table-font-size-xsmall': fontSize === 'xsmall',
                'table-font-size-xxsmall': fontSize === 'xxsmall',
                'table-full-width': fullWidth,
                'table-selectable': selectable,
                'table-single-line': singleLine,
                'table-size-medium': size === 'm' || size === 'medium',
                'table-size-small': size === 's' || size === 'small',
                'table-stretch': stretch && stretch !== 'very',
                'table-stretch-very': stretch === 'very',
                'table-striped': striped,
                'table-stackable': stackable,
                'table-unstackable': stackable === false,
                [classes.tableSticky]: stickyColumnCount,
            },
            className,
        );
        const tableChildren = stickyColumnCount > 0 ? this.parseChildren(children) : children;
        const tableJsx = (
            <table
                className={containerClasses}
                id={id}
                ref={(ref) => { this.tableRef = ref; }}
                style={style}
            >
                {tableChildren}
            </table>
        );

        if (stickyColumnCount > 0) {
            return (
                <div
                    className={classes.tableStickyColumns}
                    ref={(ref) => { this.tableStickyContainer = ref; }}
                >
                    <ScrollBar
                        className="table--scroll_container"
                        onScrollFrame={this.setStickyCellsStylesOnScroll}
                        onUpdate={this.delayedSetStickyTableContainerWidth}
                        renderTrackHorizontal={(props) => (
                            <div
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...props}
                                style={{
                                    position: 'absolute',
                                    height: 6,
                                    right: 2,
                                    bottom: 2,
                                    left: 2,
                                    borderRadius: 3,
                                    ...(!shouldHandleStickyBehavior && {
                                        display: 'none',
                                    }),
                                }}
                            />
                        )}
                        renderView={(props) => (
                            <div
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...props}
                                style={{
                                    ...props.style,
                                    // if we don't set this the table doesn't appear
                                    position: 'relative',
                                }}
                            />
                        )}
                    >
                        {tableJsx}
                    </ScrollBar>
                </div>
            );
        }

        return tableJsx;
    }
}

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default withStyles(useStyles, { withTheme: true })(Table);
