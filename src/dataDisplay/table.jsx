import ClassNames from 'classnames';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import {
    backgroundColor,
    borderColor,
} from '../colors';
import { withStyles } from '../styles';
import Utils from '../utils/utils';
import TableBody from './tableBody';
import TableCell from './tableCell';
import TableHeader from './tableHeader';
import TableHeaderCell, {
    MAX_WIDTH_PERCENTAGE_DESKTOP,
} from './tableHeaderCell';
import TableRow from './tableRow';

const propTypes = {
    basic: PropTypes.bool,
    celled: PropTypes.bool,
    children: PropTypes.node,
    classes: PropTypes.shape({
        table_sticky_columns: PropTypes.shape({}),
    }),
    className: PropTypes.string,
    collapsing: PropTypes.bool,
    definition: PropTypes.bool,
    fixed: PropTypes.bool,
    fontSize: PropTypes.oneOf(Utils.sizeEnums()),
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    selectable: PropTypes.bool,
    singleLine: PropTypes.bool,
    size: PropTypes.oneOf(['l', 'large', 'm', 'medium', 's', 'small']),
    stackable: PropTypes.bool,
    stickyColumnCount: PropTypes.number,
    resizableColumnWidthPercentage: (props, propName, componentName) => {
        const {
            [propName]: propValue,
        } = props;
        const isValid = propValue > 0 &&
            propValue <= parseInt(MAX_WIDTH_PERCENTAGE_DESKTOP * 100, 10);
        if (!isValid) {
            return new Error(
                `Invalid prop value for ${propName} (${propValue}) supplied to ${componentName}. Validation failed.`,
            );
        }
        return null;
    },
    stretch: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['very']),
    ]),
    striped: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    basic: undefined,
    celled: undefined,
    children: undefined,
    classes: undefined,
    className: undefined,
    collapsing: undefined,
    definition: undefined,
    fixed: undefined,
    fontSize: undefined,
    fullWidth: undefined,
    id: undefined,
    selectable: undefined,
    singleLine: undefined,
    size: undefined,
    stackable: undefined,
    stickyColumnCount: 0,
    resizableColumnWidthPercentage: undefined,
    stretch: undefined,
    striped: undefined,
    style: undefined,
};

const DEBOUNCE_WAIT_TIME = 50;
const TABLE_HEADER_TYPE = 'TableHeader';
const STICKY_CELL_CLASS = 'sticky-cell';
const STICKY_CELL_RESIZABLE_CLASS = 'sticky-cell-resizable';
const STICKY_CELL_FIRST_OF_ROW_CLASS = 'sticky-cell-first-of-row';
const STICKY_CELL_LAST_OF_COLUMN_CLASS = 'sticky-cell-last-of-column';
const STICKY_CELL_BORDER_STYLE = `1px solid ${borderColor.default}`;

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
    }

    componentDidMount() {
        this.setStickyColumnPositions();
        this.applyStickyClassesToCells();
        this.delayedSetStickyTableContainerWidth = debounce(() => {
            // eslint-disable-next-line max-len
            this.setState({
                stickyTableContainerWidth: this.tableStickyContainer.clientWidth,
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
            children: nextChildren,
            stickyColumnCount: nextStickyColumnCount,
        } = this.props;
        if (prevChildren !== nextChildren || prevStickyColumnCount !== nextStickyColumnCount) {
            this.setStickyColumnPositions();
            this.applyStickyClassesToCells();
        }
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
        } = this.props;

        if (stickyColumnCount > 0 && this.tableRef) {
            const stickyCells = this.tableRef.querySelectorAll(`.table--cell:nth-child(-n+${stickyColumnCount})`);
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
                    stickyCells[rootIndex].style.backgroundColor = backgroundColor.default;
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
                        // eslint-disable-next-line max-len
                        cellWidths -= leftOverFloatSpace + (cellCount >= 3 ? auxLeftOverFloatSpace : 0);
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
        const stickyCells = this.tableRef.querySelectorAll(`.table--cell:nth-child(${stickyColumnCount})`);
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
        } = this.props;
        const stickyCellsFirstOfRow = this.tableRef.querySelectorAll(`.${STICKY_CELL_FIRST_OF_ROW_CLASS}`);
        const stickyCellBorderLeftStyle = scrollLeft > 0 && !basic ? STICKY_CELL_BORDER_STYLE : '';
        for (let i = 0; i < stickyCellsFirstOfRow.length; i += 1) {
            stickyCellsFirstOfRow[i].style.borderLeft = stickyCellBorderLeftStyle;
            const isInitalDefinitionCell = definition && !fullWidth && i === 0;
            if (isInitalDefinitionCell) {
                stickyCellsFirstOfRow[i].style.borderTop = backgroundColor.default;
                stickyCellsFirstOfRow[i].style.boxShadow = '';
                stickyCellsFirstOfRow[i].style.borderLeft = '';
                stickyCellsFirstOfRow[i].style.borderRight = STICKY_CELL_BORDER_STYLE;
            }
        }
    }

    parseChildren(children) {
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
                                    // eslint-disable-next-line max-len
                                    setResizableCellsWordWrapping: this.setResizableCellsWordWrapping,
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

        const stickyCells = this.tableRef.querySelectorAll(`.table--cell:nth-child(-n+${stickyColumnCount})`);

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
            stickyColumnCount,
            stretch,
            style,
            stackable,
            striped,
            classes,
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
                'table-sticky': stickyColumnCount,
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
                    className={classes.table_sticky_columns}
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

const useStyles = {
    table_sticky_columns: {
        '& .table-sticky': {
            marginBottom: '10px !important',
        },
        '& .table-cell': {
            backgroundColor: '#fff',
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
            backgroundColor: ({ basic }) => !basic && backgroundColor.nutrualTwo,
        },
        '& .sticky-cell-resizable': {
            borderRight: STICKY_CELL_BORDER_STYLE,
        },
    },
};

export default withStyles(useStyles)(Table);
