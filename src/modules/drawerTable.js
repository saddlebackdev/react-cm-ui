import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Table from '../collections/table.js';

class DrawerTableRow extends React.PureComponent {
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

DrawerTableRow.propTypes = {
    columns: PropTypes.array.isRequired,
    isClickable: PropTypes.bool,
    row: PropTypes.object.isRequired,
    rowProps: PropTypes.func,
};

class DrawerTable extends React.PureComponent {
    render() {
        const {
            bleed,
            className,
            columns,
            data,
            fontSize,
            rowProps,
            size,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'drawer--table', className);
        const isSelectable = _.isFunction(rowProps) && _.isFunction(rowProps().onClick);

        return (
            <div
                className={containerClasses}
                style={Object.assign({}, style, {
                    margin: bleed ? '-33px -22px 0' : null,
                })}
            >
                <Table
                    basic
                    fontSize={fontSize}
                    selectable={isSelectable}
                    size={size}
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
                                <DrawerTableRow
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

DrawerTable.defaultProps = {
    bleed: true,
    fontSize: 'xsmall',
    size: 'small',
};

DrawerTable.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    fontSize: PropTypes.oneOf([ 'large', 'medium', 'small', 'xlarge', 'xsmall', 'xxsmall' ]),
    rowProps: PropTypes.func,
    size: PropTypes.oneOf([ 'large', 'medium', 'small' ]),
    style: PropTypes.object,
};

export default DrawerTable;
