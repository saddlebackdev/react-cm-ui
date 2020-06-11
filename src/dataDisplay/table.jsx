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
import TableHeaderCell from './tableHeaderCell';
import TableRow from './tableRow';

const propTypes = {
    basic: PropTypes.bool,
    celled: PropTypes.bool,
    children: PropTypes.node,
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
    stretch: undefined,
    striped: undefined,
    style: undefined,
};

const TABLE_HEADER_TYPE = 'TableHeader';
const STICKY_CELL_CLASS = 'sticky-cell';
const STICKY_CELL_RESIZABLE_CLASS = 'sticky-cell-resizable';
const STICKY_CELL_FIRST_OF_ROW_CLASS = 'sticky-cell-first-of-row';
const STICKY_CELL_LAST_OF_COLUMN_CLASS = 'sticky-cell-last-of-column';
const STICKY_CELL_BORDER_LEFT = `1px solid ${borderColor.default}`;
const STICKY_CELL_RIGHT_SHADOW = '2px 0px 0.5px 0px rgba(0,0,0,0.1)';

class Table extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            isTableRefDefined: false,
            customScrollBarPosition: 'static',
            adjacentStickyColumnsTotalWidth: 0,
            stickyTableContainerWidth: 0,
        };
        this.setResizableCellsWordWrapping = this.setResizableCellsWordWrapping.bind(this);
        this.applyStickyClassesToCells = this.applyStickyClassesToCells.bind(this);
        this.forceTableUpdate = this.forceTableUpdate.bind(this);
        this.setStickyCellsStylesOnScroll = this.setStickyCellsStylesOnScroll.bind(this);
        this.delayedSetScrollBarPosition = null;
    }


    componentDidMount() {
        // console.log('table didMount', this.tableRef);
        const {
            fixed,
            singleLine,
        } = this.props;
        this.setStickyColumnPositions();
        this.applyStickyClassesToCells();
        const shouldCalculateExpandedWidth = !fixed && !singleLine;
        if (shouldCalculateExpandedWidth) {
            this.setResizableCellsWordWrapping(false);
        }
        this.delayedSetCustomScrollBarPosition = debounce(() => {
            // eslint-disable-next-line max-len
            const shouldScrollBarBeVisible = this.tableRef.clientWidth > this.tableStickyContainer.clientWidth;
            this.setState({
                customScrollBarPosition: shouldScrollBarBeVisible ? 'relative' : 'static',
                stickyTableContainerWidth: this.tableStickyContainer.clientWidth,
            });
        }, 300);
    }

    componentDidUpdate(prevProps) {
        // console.log('table didUpdate', this.tableRef);
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
        const {
            adjacentStickyColumnsTotalWidth, // remove
        } = this.state;
        // console.log('setStickyColumnPositions')
        if (stickyColumnCount > 0 && this.tableRef) {
            const stickyCells = this.tableRef.querySelectorAll(`.table--cell:nth-child(-n+${stickyColumnCount})`);
            let cellWidths = 0;
            let cellCount = 0;
            /**
             * Reducing each left sticky column position will help to not have
             * a separation between them, so the content behind won't be visible when scrolling
             */
            let leftOverFloatSpace = 1;
            let auxLeftOverFloatSpace = 0;
            //     definition && basic ? 6 : 1;
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
            // eslint-disable-next-line no-plusplus
            for (let rootIndex = 0; rootIndex < stickyCells.length; rootIndex++) {
                cellCount += 1;
                // eslint-disable-next-line max-len
                const shouldChangeInitialDefitinionCell = definition && !fullWidth && rootIndex === 0;
                if (shouldChangeInitialDefitinionCell) {
                    stickyCells[rootIndex].style.backgroundColor = '#FFF'; // Get a constant
                }
                if (cellCount <= stickyColumnCount && cellCount > 1) {
                    cellWidths += stickyCells[rootIndex - 1].clientWidth;
                    // console.log('stickyLeft', cellCount, stickyCells[rootIndex-1].clientWidth);
                    /**
                     * This makes definition and definition/fullwidth work
                     * otherwise we'd have big separation space between sticky columns
                     */
                    if (definition && !basic) {
                        const isFirstHeaderColumn = rootIndex > 0 && cellCount > 0 && stickyCells[rootIndex].className.includes('header');
                        const definitionLeftOverflow = isFirstHeaderColumn ? 4 : 3;
                        stickyCells[rootIndex].style.left = `${cellWidths - definitionLeftOverflow}px`;
                    } else {
                        // console.log(cellWidths, leftOverFloatSpace + (cellCount >= 4 ? auxLeftOverFloatSpace : 0));
                        cellWidths -= leftOverFloatSpace + (cellCount >= 3 ? auxLeftOverFloatSpace : 0);
                        // console.log(cellWidths);
                        stickyCells[rootIndex].style.left = `${cellWidths}px`;
                    }
                }
                if (cellCount === stickyColumnCount) {
                    /**
                     * used to determine the max cell resizable width according
                     * to the table container width
                     */
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
        // console.log('setResizableCellsWordWrapping', shouldBreakSpaces);
        const {
            stickyColumnCount,
        } = this.props;
        const stickyCells = this.tableRef.querySelectorAll(`.table--cell:nth-child(${stickyColumnCount})`);
        for (let i = 0; i < stickyCells.length; i += 1) {
            stickyCells[i].style.whiteSpace = shouldBreakSpaces ? 'break-spaces' : 'nowrap';
        }
    }

    setStickyCellsStylesOnScroll({scrollLeft}) {
        const {
            basic,
            definition,
            fullWidth,
            stickyColumnCount, // remove
        } = this.props;
        const stickyCellsAll = this.tableRef.querySelectorAll(`.${STICKY_CELL_RESIZABLE_CLASS}`);
        const stickyCellRightShadow = scrollLeft > 0 ? STICKY_CELL_RIGHT_SHADOW : '';
        for (let i = 0; i < stickyCellsAll.length; i += 1) {
            stickyCellsAll[i].style.boxShadow = stickyCellRightShadow;
        }
        const stickyCellsFirstOfRow = this.tableRef.querySelectorAll(`.${STICKY_CELL_FIRST_OF_ROW_CLASS}`);
        const stickyCellBorderLeftStyle = scrollLeft > 0 && !basic ? STICKY_CELL_BORDER_LEFT : '';
        for (let i = 0; i < stickyCellsFirstOfRow.length; i += 1) {
            stickyCellsFirstOfRow[i].style.borderLeft = stickyCellBorderLeftStyle;
            const isInitalDefinitionCell = definition && !fullWidth && i === 0;
            if (isInitalDefinitionCell) {
                stickyCellsFirstOfRow[i].style.borderTop = '#FFF';
                stickyCellsFirstOfRow[i].style.boxShadow = '';
                stickyCellsFirstOfRow[i].style.borderLeft = '';
                stickyCellsFirstOfRow[i].style.borderRight = STICKY_CELL_BORDER_LEFT; // rename? just as STICKY_CELL_BORDER
            }
        }
        // remove?
        const stickyCellsLastOfColumn = this.tableRef.querySelectorAll(`.${STICKY_CELL_LAST_OF_COLUMN_CLASS}`);
        const stickyCellBorderBottomStyle = scrollLeft === 0 && !basic ? STICKY_CELL_BORDER_LEFT : '';
        // for (let i = 0; i < stickyCellsLastOfColumn.length; i++) {
        //     stickyCellsLastOfColumn[i].style.borderBottom = stickyCellBorderBottomStyle;
        // }
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
        // console.log('forceTableUpdate')
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
        const {
            isTableRefDefined,
            customScrollBarPosition, // remove?
            adjacentStickyColumnsTotalWidth,
            stickyTableContainerWidth,
        } = this.state;
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
        // console.log('table render', classes.table_sticky_columns);
        const parsedChildren = React.Children.map(children, (child) => {
            if (child.type.name === TABLE_HEADER_TYPE) {
                const tableHeaderRow = child.props.children;
                const tableHeaderCells = React.Children.map(tableHeaderRow.props.children, (headerCell, index) => {
                    const isResizable = index === stickyColumnCount - 1 && shouldHandleStickyBehavior;
                    return {
                        ...headerCell,
                        props: {
                            ...headerCell.props,
                            isResizable,
                            ...(isResizable && {
                                adjacentStickyColumnsTotalWidth,
                                stickyTableContainerWidth,
                                shouldResetWhiteSpaceStyle: shouldHandleStickyBehavior, // needed?
                                forceTableUpdate: this.forceTableUpdate,
                                setResizableCellsWordWrapping: this.setResizableCellsWordWrapping,
                            }),
                        }
                    };
                });
                const newTableHeaderRow = {
                    ...tableHeaderRow,
                    props: {
                        ...tableHeaderRow.props,
                        children: tableHeaderCells,
                    },
                };
                return {
                    ...child,
                    props: {
                        ...child.props,
                        children: {
                            ...newTableHeaderRow,
                        },
                    },
                };
            }
            return child;
        });
        // console.log('parsedChildren', parsedChildren);
        const tableJsx = (
            <table
                className={containerClasses}
                id={id}
                ref={(ref) => {
                    this.tableRef = ref;
                    // if we don't force this update
                    // the table ref will be null in resizable header cell
                    if (!isTableRefDefined) {
                        // console.log('SETTING_TABLE_REF')
                        this.setState({isTableRefDefined: true}, () => {
                            this.forceUpdate();
                        });
                    }
                }}
                style={style}
            >
                {stickyColumnCount ? parsedChildren : children}
            </table>
        );
        if (stickyColumnCount.toString()) {
            return (
                <div
                    className={classes.table_sticky_columns} // rename?
                    ref={(ref) => { this.tableStickyContainer = ref; }}
                >
                    <ScrollBar
                        className="table--scroll_container"
                        renderView={(props) => {
                            return (
                                <div
                                    // eslint-disable-next-line react/jsx-props-no-spreading
                                    {...props}
                                    style={{
                                        ...props.style,
                                        // if we don't set this the table doesn't appear
                                        position: 'relative',
                                    }}
                                />
                            );
                        }}
                        onScrollFrame={this.setStickyCellsStylesOnScroll}
                        onUpdate={() => {
                            this.setStickyColumnPositions();
                            this.delayedSetCustomScrollBarPosition();
                        }}
                        style={{
                            // let the scrollbar be visible just when needed
                            // position: customScrollBarPosition,
                        }}
                        renderTrackHorizontal={(props) => {
                            return (
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
                            );
                        }}
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
        marginBottom: 20,
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
    },
};

export default withStyles(useStyles)(Table);
