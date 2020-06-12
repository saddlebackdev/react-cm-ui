import ClassNames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Resizable } from 'react-resizable';
import Utils from '../utils/utils';
import Icon from './icon';

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
    setResizableCellsWordWrapping: PropTypes.func,
    shouldResetWhiteSpaceStyle: PropTypes.bool,
    sticky: PropTypes.bool,
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
    setResizableCellsWordWrapping: undefined,
    shouldResetWhiteSpaceStyle: true,
    stickyTableContainerWidth: 0,
};


const MAX_WIDTH_PERCENTAGE = 0.8;
const DEBOUNCE_WAIT_TIME = 50;

class TableHeaderCell extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            minWidth: 0,
            expandedWidth: 0,
            hasExpandedWidthBeenSet: false,
        };
        this.header = React.createRef();
        this.debouncedUpdateExpandedWidth = null;
        this.debouncedUpdateMaxWidth = null;
        this.onClick = this.onClick.bind(this);
        this.canCellKeepExpanding = this.canCellKeepExpanding.bind(this);
        this.onResizeColumn = this.onResizeColumn.bind(this);
        this.getResizingHandler = this.getResizingHandler.bind(this);
    }

    componentDidMount() {
        this.debouncedUpdateExpandedWidth = _.debounce(
            () => {
                const {
                    shouldResetWhiteSpaceStyle,
                    setResizableCellsWordWrapping,
                } = this.props;
                const {
                    expandedWidth: currentExpandedWidth,
                } = this.state;
                const updatedExpandedWidth = _.get(this, 'header.current.clientWidth');
                // eslint-disable-next-line max-len
                const shouldUpdateExpandedWidth = updatedExpandedWidth > currentExpandedWidth && shouldResetWhiteSpaceStyle;
                if (shouldUpdateExpandedWidth) {
                    this.setState({
                        expandedWidth: updatedExpandedWidth,
                        hasExpandedWidthBeenSet: true,
                    }, () => {
                        setResizableCellsWordWrapping(true);
                    });
                }
            },
            DEBOUNCE_WAIT_TIME,
        );

        this.debouncedUpdateMaxWidth = _.debounce(
            () => {
                const {
                    stickyTableContainerWidth,
                    adjacentStickyColumnsTotalWidth,
                } = this.props;
                const {
                    minWidth,
                } = this.state;
                const maxWidth = stickyTableContainerWidth * MAX_WIDTH_PERCENTAGE;
                const totalStickyCellsWidth = adjacentStickyColumnsTotalWidth + minWidth;
                const widthOverFlow = totalStickyCellsWidth - maxWidth;
                const updatedWidth = maxWidth - adjacentStickyColumnsTotalWidth;
                const shouldUpdateWidth = widthOverFlow > 0 && updatedWidth > 0;
                if (shouldUpdateWidth) {
                    this.setState({
                        minWidth: updatedWidth,
                    });
                }
            },
            DEBOUNCE_WAIT_TIME,
        );
    }

    componentDidUpdate() {
        const {
            isResizable,
            stickyTableContainerWidth,
        } = this.props;
        const {
            minWidth,
            hasExpandedWidthBeenSet,
        } = this.state;
        const isThereEnoguhInfoToUpdateMaxWIdth = stickyTableContainerWidth > 0 && minWidth > 0;
        if (isThereEnoguhInfoToUpdateMaxWIdth) {
            const canKeepExpanding = this.canCellKeepExpanding(minWidth);
            if (!canKeepExpanding) {
                this.debouncedUpdateMaxWidth();
            }
        }
        if (isResizable && !hasExpandedWidthBeenSet) {
            this.debouncedUpdateExpandedWidth();
        }
    }

    onClick() {
        const { onClick } = this.props;
        if (_.isFunction(onClick)) {
            onClick();
        }
    }

    onResizeColumn(event, node) {
        const {
            size,
        } = node;
        const canKeepExpanding = this.canCellKeepExpanding(size.width);
        if (canKeepExpanding) {
            this.setState({
                minWidth: node.size.width,
            });
        }
    }

    getResizingHandler() {
        const {
            expandedWidth,
        } = this.state;
        return (
            <div
                role="presentation"
                className="react-resizable-handle"
                onClick={(e) => e.stopPropagation()}
                onDoubleClick={() => {
                    this.setState({
                        minWidth: expandedWidth,
                    });
                }}
                style={{
                    position: 'absolute',
                    width: 10,
                    right: 2,
                    top: '50%',
                    cursor: 'col-resize',
                    transform: 'translateY(-50%)',
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
        // eslint-disable-next-line max-len
        const currentWidth = currentMinWidth || minWidth;
        const stickyColumnsTotalWidth = adjacentStickyColumnsTotalWidth + currentWidth;
        const maxResizingWidth = stickyTableContainerWidth * MAX_WIDTH_PERCENTAGE;
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
            forceTableUpdate,
        } = this.props;
        const {
            minWidth,
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
        const updatedStyle = {
            ...style,
            ...(shouldUseMinWidth && { minWidth: `${minWidth}px` }),
        };
        const tableHeaderCell = (
            <th
                className={containerClasses}
                id={id}
                onClick={this.onClick}
                style={updatedStyle}
                ref={this.header}
            >
                <span>{children}</span>
            </th>
        );
        const resizableTableHeaderCell = isResizable && (
            <Resizable
                width={minWidth}
                height={0}
                handle={this.getResizingHandler}
                onResize={this.onResizeColumn}
                onResizeStop={forceTableUpdate}
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
