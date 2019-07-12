import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Table } from 'react-cm-ui';

class PageTableRow extends React.PureComponent {
    constructor() {
        super();

        this._onClick = this._onClick.bind(this);
    }

    render() {
        const { columns, isClickable, row } = this.props;

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

                    return (
                        <Table.Cell
                            key={`tableCell-${index}`}
                            textAlign={column.textAlign}
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
    isClickable: PropTypes.bool,
    row: PropTypes.object.isRequired,
    rowProps: PropTypes.func,
};

class PageTable extends React.PureComponent {
    render() {
        const {
            bleed,
            className,
            columns,
            data,
            fontSize,
            rowProps,
            small,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'page--table', className);
        const isSelectable = _.isFunction(rowProps) && _.isFunction(rowProps().onClick);

        return (
            <div
                className={containerClasses}
                style={Object.assign({}, style, {
                    margin: bleed ? '0 -22px' : null,
                })}
            >
                <Table
                    basic
                    fontSize={fontSize}
                    selectable={isSelectable}
                    small={small}
                    stretch={bleed ? 'very' : null}
                >
                    <Table.Header>
                        <Table.Row>
                            {_.map(columns, (column, index) => {
                                return (
                                    <Table.HeaderCell
                                        key={`tableBodyRow-${column.header ? _.kebabCase(column.header) : index}`}
                                    >
                                        {column.header}
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
                                    isClickable={isSelectable}
                                    key={`tableBodyRow-${row.id || index}`}
                                    row={row}
                                    rowProps={rowProps}
                                />
                            );
                        })}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

PageTable.defaultProps = {
    bleed: true,
    fontSize: 'xsmall',
    small: true,
};

PageTable.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    fontSize: PropTypes.string,
    rowProps: PropTypes.func,
    small: PropTypes.bool,
    style: PropTypes.object,
};

export default PageTable;
