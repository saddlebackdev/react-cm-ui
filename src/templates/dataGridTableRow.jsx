import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Table from '../dataDisplay/table';

const propTypes = {
    classNamePrefix: PropTypes.oneOf(['drawer--data_grid', 'page--data_grid']).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        className: PropTypes.string,
        id: PropTypes.string,
        style: PropTypes.shape({}),
    })).isRequired,
    handle: PropTypes.bool,
    id: PropTypes.string.isRequired,
    idPrefix: PropTypes.string.isRequired,
    isClickable: PropTypes.bool,
    row: PropTypes.shape({}).isRequired,
    rowIndex: PropTypes.number.isRequired,
    rowProps: PropTypes.shape({
        className: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func,
        selected: PropTypes.bool,
        style: PropTypes.shape({}),
    }),
};

const defaultProps = {
    handle: undefined,
    isClickable: undefined,
    rowProps: undefined,
};

class DataGridTableRow extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { isClickable, row, rowProps } = this.props;
        const { onClick } = rowProps;
        const isTextSelect = window.getSelection().toString();

        if (isClickable && !isTextSelect && !_.isUndefined(onClick)) {
            onClick(row);
        }
    }

    render() {
        const {
            classNamePrefix,
            columns,
            handle,
            id: tableId,
            idPrefix,
            isClickable,
            row,
            rowIndex,
            rowProps,
        } = this.props;
        const {
            className: rowClassName,
            id: rowId,
            selected: rowSelected,
            style: rowStyle,
        } = rowProps;
        const containerClasses = ClassNames(`${classNamePrefix}_row`, rowClassName, {
            [`${classNamePrefix}_row-selected`]: rowSelected,
        });

        return (
            <Table.Row
                className={containerClasses}
                id={rowId}
                onClick={isClickable ? this.onClick : null}
                style={rowStyle}
            >
                {_.map(columns, (column, index) => {
                    let accessor = null;
                    if (_.isString(column.accessor)) {
                        accessor = _.get(row, column.accessor);
                    } else if (_.isFunction(column.accessor)) {
                        accessor = column.accessor(row);
                    }
                    let cellStyle = {};
                    if (idPrefix === 'column') {
                        if (handle && _.last(columns) === column) {
                            cellStyle.borderRight = '1px solid #edf1f5';
                        }
                    }
                    cellStyle = {
                        ...cellStyle,
                        ...column.style,
                    };
                    const cellId = column.id || `${classNamePrefix}_table_${tableId}_cell_${idPrefix}-${rowIndex}_${index}`;

                    return (
                        <Table.Cell
                            className={column.className}
                            id={cellId}
                            key={cellId}
                            textAlign={column.textAlign}
                            style={cellStyle}
                        >
                            {accessor}
                        </Table.Cell>
                    );
                })}
            </Table.Row>
        );
    }
}

DataGridTableRow.propTypes = propTypes;
DataGridTableRow.defaultProps = defaultProps;

export default DataGridTableRow;
