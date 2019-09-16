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
            isClickable,
            row,
            rowIndex,
            splitter,
        } = this.props;
        const sizes = this.props.sizes || [];

        return (
            <Table.Row onClick={isClickable ? this._onClick : null}>
                {_.map(columns, (column, index) => {
                    let accessor = null;

                    if (_.isString(column.accessor)) {
                        accessor = _.get(row, column.accessor);
                    } else if (_.isFunction(column.accessor)) {
                        accessor = column.accessor(row);
                    }

                    const style = {};

                    if (idPrefix === 'column') {
                        const size = (sizes[rowIndex] || [])[index];

                        if (size) {
                            style.height = `${size.h}px`;
                            style.width = `${size.w}px`;
                        }

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
        const { isClickable, row, rowProps } = this.props;
        const isTextSelect = window.getSelection().toString();

        if (isClickable && !isTextSelect) {
            rowProps().onClick(row);
        }
    }
}

PageTableRow.propTypes = {
    columns: PropTypes.array.isRequired,
    idPrefix: PropTypes.string.isRequired,
    isClickable: PropTypes.bool,
    row: PropTypes.object.isRequired,
    rowIndex: PropTypes.number.isRequired,
    rowProps: PropTypes.func,
    sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
    splitter: PropTypes.bool,
};

class PageTable extends React.PureComponent {
    constructor() {
        super();
        this._onResize = this._onResize.bind(this);
        this.state = {
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
        const {
            bleed,
            className,
            columns,
            data,
            fontSize,
            idPrefix,
            rowProps,
            small,
            splitter,
            style,
        } = this.props;
        const { sizes } = this.state;
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
                                const hasSplitter = idPrefix === 'column' &&
                                    splitter && _.last(columns) === column;
                                return (
                                    <Table.HeaderCell
                                        className="page--table_header_cell"
                                        key={`tableBodyRow-${index}`}
                                    >
                                        {column.header}
                                        {hasSplitter && <img className="table-header-splitter" src={SplitterSvg}/>}
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

    _onResize() {
        const { columns, data } = this.props;
        const sizes = [];

        for (let i = 0; i < data.length; i++) {
            const row = [];

            for (let j = 0; j < columns.length; j++) {
                const el = document.querySelector(`#tableCell-body-${i}-${j}`);
                row.push({ h: el.clientHeight, w: el.clientWidth });
            }

            sizes.push(row);
        }

        this.setState({ sizes });
    }
}

PageTable.defaultProps = {
    bleed: true,
    fontSize: 'xsmall',
    idPrefix: 'body',
    small: true,
    splitter: false,
};

PageTable.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    fontSize: PropTypes.string,
    idPrefix: PropTypes.string,
    rowProps: PropTypes.func,
    small: PropTypes.bool,
    splitter: PropTypes.bool,
    style: PropTypes.object,
};

const PageTableContainer = props => {
    if (props.stickyColumns > 0) {
        return (
            <div className="ui page--table_container">
                <div className="page--table_fixed_body">
                    <PageTable
                        {...props}
                        idPrefix="body"
                        style={{ minWidth: props.minWidth }}
                    />
                </div>
                <div className="page--table_fixed_column">
                    <PageTable
                        {...props}
                        columns={_.slice(props.columns, 0, props.stickyColumns)}
                        idPrefix="column"
                    />
                </div>
            </div>
        );
    } else {
        return <PageTable {...props} />;
    }
};

PageTableContainer.defaultProps = {
    minWidth: 800,
    splitter: false,
    stickyColumns: 0,
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
    stickyColumns: PropTypes.number,
    style: PropTypes.object,
};

export default PageTableContainer;
