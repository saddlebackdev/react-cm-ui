import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SplitterSvg from './splitter.svg';
import Table from '../collections/table.js';

class PageTableRow extends React.PureComponent {
    constructor() {
        super();

        this._onClick = this._onClick.bind(this);
    }

    render() {
        const {
            columns,
            idPrefix,
            row,
            rowIndex,
            splitter,
        } = this.props;
        const sizes = this.props.sizes || [];

        return (
            <Table.Row onClick={this._onClick}>
                {_.map(columns, (column, index) => {
                    let accessor = null;

                    if (_.isString(column.accessor)) {
                        accessor = _.get(row, column.accessor);
                    } else if (_.isFunction(column.accessor)) {
                        accessor = column.accessor(row);
                    }

                    const style = {};
                    const size = (sizes[rowIndex] || [])[index];

                    if (size) {
                        style.height = size.h;
                        style.width = size.w;
                    }

                    if (idPrefix === 'column') {
                        if (splitter && _.last(columns) === column) {
                            style.borderRight = '1px solid #edf1f5';
                        }
                    }

                    return (
                        <Table.Cell
                            id={`tableCell-${idPrefix}-${rowIndex}-${index}`}
                            key={`tableCell-${index}`}
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
        const { isClickable, onClick, row, rowProps } = this.props;
        const isTextSelect = window.getSelection().toString();

        if (_.isFunction(onClick)) {
            onClick();
        } else if (isClickable && !isTextSelect) {
            rowProps().onClick(row);
        }
    }
}

PageTableRow.propTypes = {
    columns: PropTypes.array.isRequired,
    idPrefix: PropTypes.string.isRequired,
    isClickable: PropTypes.bool,
    onClick: PropTypes.func,
    row: PropTypes.object.isRequired,
    rowIndex: PropTypes.number.isRequired,
    rowProps: PropTypes.func,
    sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
    splitter: PropTypes.bool,
};

class PageTable extends React.PureComponent {
    constructor() {
        super();
        this._onSplitterClick = this._onSplitterClick.bind(this);
    }

    render() {
        const {
            bleed,
            className,
            columns,
            data,
            fontSize,
            idPrefix,
            onScrollColumn,
            rowProps,
            sizes,
            small,
            splitter,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'page--table', className);
        const isSelectable =
            _.isFunction(rowProps) && _.isFunction(rowProps().onClick);

        return (
            <div
                className={containerClasses}
                style={Object.assign({}, style, {
                    margin: bleed ? '0 -22px' : null,
                })}
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
                                    splitter &&
                                    _.last(columns) === column;
                                return (
                                    <Table.HeaderCell
                                        className="page--table_header_cell"
                                        key={`tableBodyRow-${index}`}
                                    >
                                        {column.header}
                                        {hasSplitter && (
                                            <img
                                                className="table-header-splitter"
                                                onClick={this._onSplitterClick}
                                                src={SplitterSvg}
                                            />
                                        )}
                                    </Table.HeaderCell>
                                );
                            })}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {_.map(data, (row, index) => {
                            return (
                                <PageTableRow
                                    columns={columns}
                                    idPrefix={idPrefix}
                                    isClickable={isSelectable}
                                    key={`tableBodyRow-${row.id || index}`}
                                    onClick={idPrefix === 'body' ? onScrollColumn : null}
                                    row={row}
                                    rowIndex={index}
                                    rowProps={rowProps}
                                    sizes={sizes}
                                    splitter={splitter}
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
        onSplitter();
    }
}

PageTable.defaultProps = {
    bleed: true,
    fontSize: 'xsmall',
    idPrefix: 'base',
    small: true,
    splitter: false,
};

PageTable.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    collapsed: PropTypes.bool,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    fontSize: PropTypes.string,
    idPrefix: PropTypes.string,
    onScrollColumn: PropTypes.func,
    onSplitter: PropTypes.func,
    rowProps: PropTypes.func,
    sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
    small: PropTypes.bool,
    splitter: PropTypes.bool,
    style: PropTypes.object,
};

class PageTableContainer extends React.Component {
    constructor() {
        super();
        this._onResize = this._onResize.bind(this);
        this._onScrollColumn = this._onScrollColumn.bind(this);
        this._onSplitterClick = this._onSplitterClick.bind(this);
        this.state = {
            collapsed: null,
            sizes: [],
        };
    }

    componentDidMount() {
        this._onResize();
        window.addEventListener('resize', this._onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._onResize);
    }

    render() {
        const { columns, minWidth, stickyColumns } = this.props;
        const { collapsed, sizes } = this.state;

        if (stickyColumns > 0) {
            return (
                <div className="ui page--table_container">
                    <div className="page--table_fixed_body">
                        <PageTable
                            {...this.props}
                            collapsed={collapsed}
                            idPrefix="body"
                            onScrollColumn={this._onScrollColumn}
                            sizes={sizes}
                            style={{ minWidth }}
                        />
                    </div>
                    <div className="page--table_fixed_column">
                        <PageTable
                            {...this.props}
                            columns={_.slice(columns, 0, stickyColumns)}
                            idPrefix="column"
                            sizes={sizes}
                            onSplitter={this._onSplitterClick}
                        />
                    </div>
                </div>
            );
        } else {
            return <PageTable {...this.props} />;
        }
    }

    _onResize() {
        const { data, splitter, stickyColumns, stickyColumnWidth } = this.props;
        const { collapsed } = this.state;
        const sizes = [];

        const elContainer = document.querySelector('.ui.page--table_container');
        const totalWidth = elContainer.clientWidth;

        for (let i = 0; i < data.length; i++) {
            const row = [];
            let rowWidth = 0;

            for (let j = 0; j < stickyColumns; j++) {
                const el = document.querySelector(`#tableCell-body-${i}-${j}`);
                const size = {
                    h: `${el.clientHeight}px`,
                    w: `${el.clientWidth}px`,
                };

                if (splitter && j === stickyColumns - 1) {
                    if (collapsed === true) {
                        size.w = `${Math.min(stickyColumnWidth, totalWidth)}px`;
                    } else if (collapsed === false) {
                        size.w = `${Math.max(stickyColumnWidth, totalWidth - stickyColumnWidth - rowWidth)}px`;
                    }
                }

                rowWidth += el.clientHeight;
                row.push(size);
            }

            sizes.push(row);
        }

        this.setState({ sizes });
    }

    _onScrollColumn() {
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
}

PageTableContainer.defaultProps = {
    minWidth: 800,
    splitter: false,
    stickyColumns: 0,
    stickyColumnWidth: 30,
};

PageTableContainer.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    fontSize: PropTypes.string,
    minWidth: PropTypes.number,
    rowProps: PropTypes.func,
    small: PropTypes.bool,
    splitter: PropTypes.bool,
    stickyColumnWidth: PropTypes.number,
    stickyColumns: PropTypes.number,
    style: PropTypes.object,
};

export default PageTableContainer;
