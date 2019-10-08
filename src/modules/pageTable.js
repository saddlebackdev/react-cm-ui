import _ from 'lodash';
import ClassNames from 'classnames';
import DragListener from '../utils/dragListener.js';
import Icon from '../elements/icon';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../collections/table.js';

class PageTableRow extends React.PureComponent {
    constructor() {
        super();
        this._onClick = this._onClick.bind(this);
    }

    render() {
        const {
            columns,
            handle,
            idPrefix,
            isClickable,
            row,
            rowIndex,
            sizes,
        } = this.props;

        return (
            <Table.Row
                onClick={isClickable ? this._onClick : null}
            >
                {_.map(columns, (column, index) => {
                    let accessor = null;

                    if (_.isString(column.accessor)) {
                        accessor = _.get(row, column.accessor);
                    } else if (_.isFunction(column.accessor)) {
                        accessor = column.accessor(row);
                    }

                    const style = {};
                    const size = _.isEmpty(sizes) ? null : sizes[rowIndex][index];

                    if (size) {
                        style.height = size.h;
                        style.width = size.w;
                    }

                    if (idPrefix === 'column') {
                        if (handle && _.last(columns) === column) {
                            style.borderRight = '1px solid #edf1f5';
                        }
                    }

                    const id = `table--table_cell-${idPrefix}-${rowIndex}-${index}`;

                    return (
                        <Table.Cell
                            id={id}
                            key={id}
                            textAlign={column.textAlign}
                            style={style}
                        >
                            {accessor}
                        </Table.Cell>
                    );
                })}
            </Table.Row>
        );
    }

    _onClick() {
        const { isClickable, row, rowProps } = this.props;
        const isTextSelect = window.getSelection().toString();

        if (isClickable && !isTextSelect) {
            rowProps().onClick(row);
        }
    }
}

PageTableRow.propTypes = {
    columns: PropTypes.array.isRequired,
    handle: PropTypes.bool,
    idPrefix: PropTypes.string.isRequired,
    isClickable: PropTypes.bool,
    row: PropTypes.object.isRequired,
    rowIndex: PropTypes.number.isRequired,
    rowProps: PropTypes.func,
    sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
};

class PageTable extends React.PureComponent {
    constructor() {
        super();
        this._onSplitterClick = this._onSplitterClick.bind(this);
        this._onSplitterDrag = this._onSplitterDrag.bind(this);
        this._onSplitterDragEnd = this._onSplitterDragEnd.bind(this);
    }

    render() {
        const {
            bleed,
            className,
            columns,
            data,
            dropShadow,
            fontSize,
            handle,
            idPrefix,
            rowProps,
            sizes,
            small,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'page--table', className);
        const bodyClasses = ClassNames({'drop-shadow': dropShadow});
        const isSelectable =
            _.isFunction(rowProps) && _.isFunction(rowProps().onClick);

        return (
            <div
                className={containerClasses}
                style={style}
            >
                <Table
                    basic
                    className="page--table_component"
                    fontSize={fontSize}
                    selectable={isSelectable}
                    small={small}
                    stretch={bleed ? 'very' : null}
                >
                    <Table.Header>
                        <Table.Row>
                            {_.map(columns, (column, index) => {
                                const hasSplitter =
                                    idPrefix === 'column' &&
                                    handle &&
                                    _.last(columns) === column;
                                return (
                                    <Table.HeaderCell
                                        className="page--table_header_cell"
                                        key={`tableBodyRow-${index}`}
                                    >
                                        {column.header}
                                        {hasSplitter && (
                                            <DragListener
                                                className="table-header-handle"
                                                onClick={this._onSplitterClick}
                                                onDrag={this._onSplitterDrag}
                                                onDragEnd={this._onSplitterDragEnd}
                                                ref={ref => this._handle = ref}
                                            >
                                                <Icon
                                                    color="static"
                                                    compact
                                                    size="small"
                                                    type="splitter"
                                                />
                                            </DragListener>
                                        )}
                                    </Table.HeaderCell>
                                );
                            })}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body className={bodyClasses}>
                        {_.map(data, (row, index) => {
                            return (
                                <PageTableRow
                                    columns={columns}
                                    handle={handle}
                                    idPrefix={idPrefix}
                                    isClickable={isSelectable}
                                    key={`tableBodyRow-${row.id || index}`}
                                    row={row}
                                    rowIndex={index}
                                    rowProps={rowProps}
                                    sizes={sizes}
                                />
                            );
                        })}
                    </Table.Body>
                </Table>
            </div>
        );
    }

    _onSplitterClick() {
        const { onSplitter } = this.props;
        requestAnimationFrame(() => {
            const handle = ReactDOM.findDOMNode(this._handle);
            handle.style.left = 0;
        });
        if (_.isFunction(onSplitter)) {
            onSplitter();
        }
    }

    _onSplitterDrag({ deltaX }) {
        const { onSplitterDragEnd } = this.props;
        requestAnimationFrame(() => {
            const handle = ReactDOM.findDOMNode(this._handle);
            handle.style.left = 0;
        });
        onSplitterDragEnd(deltaX);
    }

    _onSplitterDragEnd({ deltaX }) {
        const { onSplitterDragEnd } = this.props;
        requestAnimationFrame(() => {
            const handle = ReactDOM.findDOMNode(this._handle);
            handle.style.left = 0;
        });
        if (_.isFunction(onSplitterDragEnd)) {
            onSplitterDragEnd(deltaX);
        }
    }
}

PageTable.defaultProps = {
    bleed: true,
    dropShadow: false,
    fontSize: 'xsmall',
    handle: false,
    idPrefix: 'base',
    small: true,
};

PageTable.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    collapsed: PropTypes.bool,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    dropShadow: PropTypes.bool,
    fontSize: PropTypes.string,
    handle: PropTypes.bool,
    idPrefix: PropTypes.string,
    onSplitter: PropTypes.func,
    onSplitterDragEnd: PropTypes.func,
    rowProps: PropTypes.func,
    sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
    small: PropTypes.bool,
    style: PropTypes.object,
};

class PageTableContainer extends React.Component {
    constructor(props) {
        super(props);
        this._onResizeDebounce = _.debounce(() => this._onResizeWindow(), 80);
        this._onScroll = this._onScroll.bind(this);
        this._onSplitterClick = this._onSplitterClick.bind(this);
        this._onSplitterDragEnd = this._onSplitterDragEnd.bind(this);
        this.state = {
            collapsed: null,
            minWidth: props.minWidth,
            scrolledRight: false,
            sizes: [],
            currentStickyColumnWidth: null,
        };
    }

    componentDidMount() {
        this._onResize();
        window.addEventListener('resize', this._onResizeDebounce);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResizeDebounce);
    }

    render() {
        const { bleed, className, columns, stickyColumns, style } = this.props;
        const { collapsed, minWidth, scrolledRight, sizes } = this.state;

        const isStickyColumns = stickyColumns > 0;
        const containerClasses = ClassNames('ui', 'page--table', className, {
            'page--table-sticky_columns': isStickyColumns,
            'page--table-bleed': bleed,
        });

        if (isStickyColumns) {
            return (
                <div
                    className={containerClasses}
                    style={style}
                >
                    <div
                        className="page--table_fixed_body"
                        onScroll={this._onScroll}
                    >
                        <PageTable
                            {...this.props}
                            collapsed={collapsed}
                            idPrefix="body"
                            ref={ref => this._bodyTable = ref}
                            sizes={sizes}
                            style={{ minWidth }}
                        />
                    </div>
                    <div className="page--table_fixed_column">
                        <PageTable
                            {...this.props}
                            columns={_.slice(columns, 0, stickyColumns)}
                            dropShadow={scrolledRight}
                            idPrefix="column"
                            onSplitter={this._onSplitterClick}
                            onSplitterDragEnd={this._onSplitterDragEnd}
                            sizes={sizes}
                        />
                    </div>
                    <div className="page--table_fixed_bottom" />
                </div>
            );
        } else {
            return (
                <div
                    className={containerClasses}
                    style={style}
                >
                    <PageTable {...this.props} />
                </div>
            );
        }
    }

    _onResize() {
        const { data, handle, minWidth, stickyColumns, stickyColumnWidth } = this.props;
        const { collapsed } = this.state;
        const sizes = [];
        const elContainer = document.querySelector('.ui.page--table-sticky_columns');

        if (!elContainer) {
            return;
        }

        const totalWidth = elContainer.clientWidth;
        let { currentStickyColumnWidth } = this.state;
        let width = currentStickyColumnWidth;

        if (collapsed === true) {
            width = Math.min(stickyColumnWidth, totalWidth);
        } else if (collapsed === false) {
            width = Math.max(stickyColumnWidth, totalWidth - stickyColumnWidth);
        } else if (!_.isFinite(currentStickyColumnWidth)) {
            width = currentStickyColumnWidth = totalWidth/2;
        }

        for (let i = 0; i < data.length; i++) {
            const row = [];

            for (let j = 0; j < stickyColumns; j++) {
                const el = document.querySelector(`#table--table_cell-body-${i}-${j}`);
                const size = {
                    h: `${el.clientHeight}px`,
                    w: `${el.clientWidth}px`,
                };

                if (handle && j === stickyColumns - 1) {
                    size.w = `${width}px`;
                }

                row.push(size);
            }

            sizes.push(row);
        }

        const newState = { currentStickyColumnWidth, sizes };

        if (collapsed === true) {
            newState.minWidth = minWidth;
        } else if (collapsed === false) {
            const diff = totalWidth - stickyColumnWidth;

            if (diff > 0) {
                newState.minWidth = minWidth + diff;
            }
        } else { 
            const diff = (totalWidth - width)/2;

            if (diff > 0) {
                newState.minWidth = minWidth + diff;
            }
        }

        this.setState(newState);
    }

    _onResizeWindow() {
        this.setState({ collapsed: null, currentStickyColumnWidth: null }, () => {
            this._onResize();
        });
    }

    _onScroll(e) {
        this.setState({ scrolledRight: e.nativeEvent.target.scrollLeft > 0 });
    }

    _onSplitterClick() {
        this.setState(
            prev => ({
                collapsed:
                    prev.collapsed === true ?
                        false :
                        prev.collapsed === false ?
                            null :
                            true,
            }),
            () => {
                this._onResize();
            }
        );
    }

    _onSplitterDragEnd(dx) {
        this.setState((prevState, prevProps) => {
            const elContainer = document.querySelector('.ui.page--table-sticky_columns');

            if (!elContainer) {
                return;
            }

            const totalWidth = elContainer.clientWidth;
            const { stickyColumnWidth } = prevProps;
            const { collapsed, currentStickyColumnWidth } = prevState;
            let width = currentStickyColumnWidth;

            if (collapsed === true) {
                width = Math.min(stickyColumnWidth, totalWidth);
            } else if (collapsed === false) {
                width = Math.max(stickyColumnWidth, totalWidth - stickyColumnWidth);
            } else if (!_.isFinite(currentStickyColumnWidth)) {
                width = totalWidth/2;
            }

            return {
                collapsed: null,
                currentStickyColumnWidth: width + dx,
            };
        }, () => {
            this._onResize();
        });
    }
}

PageTableContainer.defaultProps = {
    handle: true,
    minWidth: 800,
    stickyColumns: 0,
    stickyColumnWidth: 30,
};

PageTableContainer.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    fontSize: PropTypes.string,
    handle: PropTypes.bool,
    minWidth: PropTypes.number,
    rowProps: PropTypes.func,
    small: PropTypes.bool,
    stickyColumnWidth: PropTypes.number,
    stickyColumns: PropTypes.number,
    style: PropTypes.object,
};

export default PageTableContainer;
