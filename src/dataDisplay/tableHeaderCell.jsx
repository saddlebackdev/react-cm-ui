import ClassNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Resizable } from 'react-resizable';
import Utils from '../utils/utils';
import Icon from './icon';
import { values as breakPoints } from '../styles/breakpointsConstants';

const columnNumberEnums = ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const propTypes = {
    adjacentStickyColumnsTotalWidth: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    collapsing: PropTypes.bool,
    desktop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    desktopLarge: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    forceTableUpdate: PropTypes.func,
    id: PropTypes.string,
    isResizable: PropTypes.bool,
    laptop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    mobile: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    mobileLarge: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    mobileMedium: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    onClick: PropTypes.func,
    resizableColumnWidthPercentage: PropTypes.number,
    setResizableCellsWordWrapping: PropTypes.func,
    shouldResetWhiteSpaceStyle: PropTypes.bool,
    sticky: PropTypes.bool,
    stickyColumnCount: PropTypes.number,
    stickyTableContainerWidth: PropTypes.number,
    style: PropTypes.object,
    tablet: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    textAlign: PropTypes.oneOf(['center', 'left', 'right']),
    width: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
};

const defaultProps = {
    adjacentStickyColumnsTotalWidth: 0,
    forceTableUpdate: undefined,
    isResizable: false,
    resizableColumnWidthPercentage: undefined,
    stickyColumnCount: undefined,
    setResizableCellsWordWrapping: undefined,
    shouldResetWhiteSpaceStyle: true,
    stickyTableContainerWidth: 0,
};

const HEADER_CELL_WIDTH_OFFSET = 10;
const DEBOUNCE_WAIT_TIME = 50;
export const MAX_WIDTH_PERCENTAGE_DESKTOP = 0.5;
export const MAX_WIDTH_PERCENTAGE_MOBILE = 0.8;

class TableHeaderCell extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            minWidth: 0,
            expandedWidthPercentage: 0,
            haveExpandedMeasuresBeenSet: false,
            widthPercentage: 0,
            shouldDisableResizeHandler: false,

        };
        this.header = React.createRef();
        this.debouncedUpdateExpandedWidth = null;
        this.onClick = this.onClick.bind(this);
        this.canCellKeepExpanding = this.canCellKeepExpanding.bind(this);
        this.onDoubleClick = this.onDoubleClick.bind(this);
        this.onResizeColumn = this.onResizeColumn.bind(this);
        this.onResizeStop = this.onResizeStop.bind(this);
        this.getResizingHandler = this.getResizingHandler.bind(this);
        this.getMaxWidthPercentages = this.getMaxWidthPercentages.bind(this);
    }

    componentDidMount() {
        const {
            isResizable,
        } = this.props;
        if (isResizable) {
            const currentWidth = _.get(this, 'header.current.clientWidth');
            this.setState({
                minWidth: currentWidth,
            });
        }
        this.debouncedUpdateExpandedWidth = _.debounce(
            (initialLoad) => {
                const {
                    shouldResetWhiteSpaceStyle,
                    setResizableCellsWordWrapping,
                    stickyTableContainerWidth,
                    resizableColumnWidthPercentage,
                    adjacentStickyColumnsTotalWidth,
                    forceTableUpdate,
                    stickyColumnCount,
                } = this.props;
                const {
                    widthPercentage: currentWidthPercentage,
                    minWidth,
                } = this.state;
                // eslint-disable-next-line max-len
                const shouldUpdateExpandedWidth = isResizable && minWidth > 0 && shouldResetWhiteSpaceStyle;
                if (shouldUpdateExpandedWidth) {
                    // eslint-disable-next-line max-len
                    const maxWidthPercentages = this.getMaxWidthPercentages(stickyTableContainerWidth);
                    setResizableCellsWordWrapping(false);
                    // This ensures the header will re adjust accordint to the content
                    // in case the column and browser have been already resized
                    this.header.current.style.width = '1%';
                    this.header.current.style.minWidth = '';
                    const updatedExpandedWidth = _.get(this, 'header.current.clientWidth', 0) + HEADER_CELL_WIDTH_OFFSET;
                    // eslint-disable-next-line max-len
                    const adjustedAdjacentPercentage = (adjacentStickyColumnsTotalWidth / stickyTableContainerWidth) * 100;
                    const shouldDisableResizeHandler = stickyColumnCount > 1 &&
                        // eslint-disable-next-line max-len
                        updatedExpandedWidth + adjacentStickyColumnsTotalWidth > stickyTableContainerWidth * maxWidthPercentages[0];
                    // eslint-disable-next-line max-len
                    let expandedWidthPercentage = (updatedExpandedWidth / stickyTableContainerWidth) * 100;
                    let widthPercentage;
                    if (initialLoad) {
                        if (resizableColumnWidthPercentage) {
                            // eslint-disable-next-line max-len
                            widthPercentage = resizableColumnWidthPercentage - adjustedAdjacentPercentage;
                        } else {
                            widthPercentage = ((minWidth / stickyTableContainerWidth) * 100);
                        }
                    } else {
                        widthPercentage = currentWidthPercentage;
                    }
                    // it never goes further than maximun allowed
                    const adjustedMaxWIdth = maxWidthPercentages[1] - adjustedAdjacentPercentage;
                    // eslint-disable-next-line max-len
                    expandedWidthPercentage = parseInt(Math.min(expandedWidthPercentage, adjustedMaxWIdth), 10);
                    widthPercentage = parseInt(Math.min(widthPercentage, adjustedMaxWIdth), 10);
                    const updatedMinWidth = ((stickyTableContainerWidth * widthPercentage) / 100);
                    this.header.current.style.width = `${widthPercentage}%`;
                    this.header.current.style.minWidth = updatedMinWidth;
                    this.setState({
                        haveExpandedMeasuresBeenSet: true,
                        // expandedWidth is calculated with this variable on double click
                        expandedWidthPercentage,
                        widthPercentage,
                        minWidth: updatedMinWidth,
                        shouldDisableResizeHandler: !!shouldDisableResizeHandler,
                    }, () => {
                        setResizableCellsWordWrapping(true);
                        forceTableUpdate();
                    });
                }
            },
            DEBOUNCE_WAIT_TIME,
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            stickyTableContainerWidth: prevStickyTableContainerWidth,
        } = prevProps;
        const {
            isResizable,
            stickyTableContainerWidth,
        } = this.props;
        const {
            shouldDisableResizeHandler: prevShouldDisableResizeHandler,
        } = prevState;
        const {
            haveExpandedMeasuresBeenSet,
            shouldDisableResizeHandler,
        } = this.state;
        const enoughInfoToSetExpandedMeasures = isResizable &&
            !haveExpandedMeasuresBeenSet && stickyTableContainerWidth > 0;
        if (enoughInfoToSetExpandedMeasures) {
            this.debouncedUpdateExpandedWidth(true);
        }
        // mantains the expanded measures when table container size changes
        const shouldUpdatePercentageWidth = isResizable &&
            prevStickyTableContainerWidth > 0 && stickyTableContainerWidth > 0 &&
            prevStickyTableContainerWidth !== stickyTableContainerWidth;
        // eslint-disable-next-line max-len
        const shouldCellUpdateAsInitial = prevShouldDisableResizeHandler && !shouldDisableResizeHandler;
        if (shouldUpdatePercentageWidth) {
            this.setState({
                shouldDisableResizeHandler: false,
            }, () => {
                // let's refresh the header cell expanded measures
                this.debouncedUpdateExpandedWidth(shouldCellUpdateAsInitial);
            });
        }
    }

    onClick() {
        const { onClick } = this.props;
        if (_.isFunction(onClick)) {
            onClick();
        }
    }

    onDoubleClick() {
        const {
            expandedWidthPercentage: currentExpandedWidthPercentage,
        } = this.state;
        const {
            stickyTableContainerWidth,
        } = this.props;
        const maxWidthPercentages = this.getMaxWidthPercentages(stickyTableContainerWidth);
        // eslint-disable-next-line max-len
        const expandedWidthPercentage = Math.min(currentExpandedWidthPercentage, maxWidthPercentages[1]);
        // eslint-disable-next-line max-len
        const currentWidth = parseInt((expandedWidthPercentage * stickyTableContainerWidth) / 100, 10);
        this.setState({
            minWidth: currentWidth,
            widthPercentage: expandedWidthPercentage,
        });
    }

    onResizeColumn(event, node) {
        const {
            stickyTableContainerWidth,
        } = this.props;
        const {
            size,
        } = node;
        const {
            minWidth,
        } = this.state;
        const canKeepExpanding = this.canCellKeepExpanding(size.width) || size.width <= minWidth;
        if (canKeepExpanding) {
            const widthPercentage = parseInt((minWidth / stickyTableContainerWidth) * 100, 10);
            this.setState({
                minWidth: node.size.width,
                widthPercentage,
            });
        }
    }

    onResizeStop() {
        const {
            forceTableUpdate,
        } = this.props;
        const currentWidth = _.get(this, 'header.current.clientWidth', 20);
        this.setState({
            minWidth: currentWidth,
        });
        forceTableUpdate();
    }

    getMaxWidthPercentages(stickyTableContainerWidth) {
        const maxWidth = stickyTableContainerWidth >= breakPoints.md ?
            MAX_WIDTH_PERCENTAGE_DESKTOP :
            MAX_WIDTH_PERCENTAGE_MOBILE;
        const adjustedMaxWidth = parseInt(maxWidth * 100, 10);
        return [maxWidth, adjustedMaxWidth];
    }

    getResizingHandler() {
        const {
            shouldDisableResizeHandler,
        } = this.state;

        return (
            <div
                role="presentation"
                className="react-resizable-handle"
                onClick={(e) => e.stopPropagation()}
                onDoubleClick={this.onDoubleClick}
                style={{
                    position: 'absolute',
                    width: 10,
                    right: 2,
                    top: '50%',
                    cursor: 'col-resize',
                    transform: 'translateY(-50%)',
                    ...(shouldDisableResizeHandler && {
                        display: 'none',
                    }),
                }}
            >
                <Icon
                    color="static"
                    compact
                    size="small"
                    type="splitter"
                />
            </div>
        );
    }

    canCellKeepExpanding(currentMinWidth) {
        const {
            stickyTableContainerWidth,
            adjacentStickyColumnsTotalWidth,
        } = this.props;
        const {
            minWidth,
        } = this.state;
        const maxWidthPercentages = this.getMaxWidthPercentages(stickyTableContainerWidth);
        // eslint-disable-next-line max-len
        const currentWidth = currentMinWidth || minWidth;
        const stickyColumnsTotalWidth = adjacentStickyColumnsTotalWidth + currentWidth;
        const maxResizingWidth = stickyTableContainerWidth * maxWidthPercentages[0];
        const canKeepExpanding = stickyColumnsTotalWidth < maxResizingWidth;
        return canKeepExpanding;
    }

    render() {
        const {
            children,
            className,
            collapsing,
            desktop,
            desktopLarge,
            id,
            isResizable,
            laptop,
            mobile,
            mobileLarge,
            mobileMedium,
            onClick,
            sticky,
            style,
            tablet,
            textAlign,
            width,
        } = this.props;
        const {
            minWidth,
            widthPercentage,
        } = this.state;
        const cellPrefix = 'table-header-cell';
        const containerClasses = ClassNames(
            'table-header-cell',
            'table--cell',
            _.isNumber(width) ?
                `${cellPrefix}-${Utils.numberToWord(width)}` :
                width === true || width === 'auto' ?
                    `${cellPrefix}-show` :
                    width === false ?
                        `${cellPrefix}-hide` :
                        null,
            _.isNumber(mobile) ?
                `${cellPrefix}-mobile-${Utils.numberToWord(mobile)}` :
                mobile === true || mobile === 'auto' ?
                    `${cellPrefix}-mobile-show` :
                    mobile === false ?
                        `${cellPrefix}-mobile-hide` :
                        null,
            _.isNumber(mobileMedium) ?
                `${cellPrefix}-mobile-medium-${Utils.numberToWord(mobileMedium)}` :
                mobileMedium === true || mobileMedium === 'auto' ?
                    `${cellPrefix}-mobile-medium-show` :
                    mobileMedium === false ?
                        `${cellPrefix}-mobile-medium-hide` :
                        null,
            _.isNumber(mobileLarge) ?
                `${cellPrefix}-mobile-large-${Utils.numberToWord(mobileLarge)}` :
                mobileLarge === true || mobileLarge === 'auto' ?
                    `${cellPrefix}-mobile-large-show` :
                    mobileLarge === false ?
                        `${cellPrefix}-mobile-large-hide` :
                        null,
            _.isNumber(tablet) ?
                `${cellPrefix}-tablet-${Utils.numberToWord(tablet)}` :
                tablet === true || tablet === 'auto' ?
                    `${cellPrefix}-tablet-show` :
                    tablet === false ?
                        `${cellPrefix}-tablet-hide` :
                        null,
            _.isNumber(laptop) ?
                `${cellPrefix}-laptop-${Utils.numberToWord(laptop)}` :
                laptop === true || laptop === 'auto' ?
                    `${cellPrefix}-laptop-show` :
                    laptop === false ?
                        `${cellPrefix}-laptop-hide` :
                        null,
            _.isNumber(desktop) ?
                `${cellPrefix}-desktop-${Utils.numberToWord(desktop)}` :
                desktop === true || desktop === 'auto' ?
                    `${cellPrefix}-desktop-show` :
                    desktop === false ?
                        `${cellPrefix}-desktop-hide` :
                        null,
            _.isNumber(desktopLarge) ?
                `${cellPrefix}-desktop-${Utils.numberToWord(desktopLarge)}` :
                desktopLarge === true || desktopLarge === 'auto' ?
                    `${cellPrefix}-desktop-show` :
                    desktopLarge === false ?
                        `${cellPrefix}-desktop-hide` :
                        null,
            {
                'table-header-cell-clickable': onClick,
                'table-cell-collapsing': collapsing,
                'table-header-cell-text-align-center': textAlign === 'center',
                'table-header-cell-text-align-left': textAlign === 'left',
                'table-header-cell-text-align-right': textAlign === 'right',
                'table-header-cell-sticky': sticky,
            },
            className,
        );
        const shouldUseMinWidth = isResizable && minWidth > 0;
        const shouldUseWidthPercentage = isResizable && widthPercentage > 0;
        const updatedStyle = {
            ...style,
            ...(shouldUseMinWidth && { minWidth: `${minWidth}px` }),
            ...(shouldUseWidthPercentage && { width: `${widthPercentage}%` }),
        };
        const tableHeaderCell = (
            <th
                className={containerClasses}
                id={id}
                onClick={this.onClick}
                style={updatedStyle}
                ref={(ref) => { this.header.current = ref; }}
            >
                <span>{children}</span>
            </th>
        );
        const resizableTableHeaderCell = isResizable && (
            <Resizable
                width={minWidth}
                handle={this.getResizingHandler}
                onResize={this.onResizeColumn}
                onResizeStop={this.onResizeStop}
                draggableOpts={{ enableUserSelectHack: false }}
            >
                {tableHeaderCell}
            </Resizable>
        );
        return isResizable ? resizableTableHeaderCell : tableHeaderCell;
    }
}

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
