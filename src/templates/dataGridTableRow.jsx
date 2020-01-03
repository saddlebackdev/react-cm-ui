import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Table from '../collections/table';

const propTypes = {
    classNamePrefix: PropTypes.oneOf(['drawer--data_grid', 'page--data_grid']).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handle: PropTypes.bool,
    id: PropTypes.string.isRequired,
    idPrefix: PropTypes.string.isRequired,
    isClickable: PropTypes.bool,
    row: PropTypes.shape({}).isRequired,
    rowIndex: PropTypes.number.isRequired,
    rowProps: PropTypes.func,
    sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

const defaultProps = {
    handle: undefined,
    isClickable: undefined,
    rowProps: undefined,
    sizes: undefined,
};

class DataGridTableRow extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { isClickable, row, rowProps } = this.props;
        const isTextSelect = window.getSelection().toString();

        if (isClickable && !isTextSelect) {
            rowProps().onClick(row);
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
            sizes,
        } = this.props;

        return (
            <Table.Row
                onClick={isClickable ? this.onClick : null}
            >
                {_.map(columns, (column, index) => {
                    let accessor = null;

                    if (_.isString(column.accessor)) {
                        accessor = _.get(row, column.accessor);
                    } else if (_.isFunction(column.accessor)) {
                        accessor = column.accessor(row);
                    }

                    const style = {};
                    const size =
                        _.isEmpty(sizes) || _.isEmpty(sizes[rowIndex]) ?
                            null :
                            sizes[rowIndex][index];

                    if (size) {
                        style.height = size.h;
                        style.width = size.w;
                    }

                    if (idPrefix === 'column') {
                        if (handle && _.last(columns) === column) {
                            style.borderRight = '1px solid #edf1f5';
                        }
                    }

                    const id = `${classNamePrefix}_table_${tableId}_cell_${idPrefix}-${rowIndex}_${index}`;

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
}

DataGridTableRow.propTypes = propTypes;
DataGridTableRow.defaultProps = defaultProps;

export default DataGridTableRow;
