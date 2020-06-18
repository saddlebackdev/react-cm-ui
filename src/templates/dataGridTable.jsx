import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DataGridTableRow from './dataGridTableRow';
import Table from '../dataDisplay/table';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    classNamePrefix: PropTypes.oneOf(['drawer--data_grid', 'page--data_grid']).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        className: PropTypes.string,
        id: PropTypes.string,
        style: PropTypes.shape({}),
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    dropShadow: PropTypes.bool,
    fontSize: PropTypes.string,
    handle: PropTypes.bool,
    id: PropTypes.string.isRequired,
    idPrefix: PropTypes.string,
    resizableColumnWidthPercentage: PropTypes.number,
    rowProps: PropTypes.func,
    size: PropTypes.oneOf([
        'small',
        'medium',
    ]),
    stickyColumns: PropTypes.number,
    stretch: PropTypes.oneOfType([
        PropTypes.oneOf(['very']),
        PropTypes.bool,
    ]),
    style: PropTypes.shape({}),
};

const defaultProps = {
    bleed: true,
    className: undefined,
    dropShadow: false,
    fontSize: 'xsmall',
    handle: false,
    idPrefix: 'base',
    resizableColumnWidthPercentage: undefined,
    rowProps: undefined,
    size: 'small',
    stickyColumns: undefined,
    stretch: false,
    style: undefined,
};

class DataGridTable extends React.PureComponent {
    render() {
        const {
            classNamePrefix,
            bleed: bleedProp,
            className,
            columns,
            data,
            dropShadow,
            fontSize,
            handle,
            id,
            idPrefix,
            rowProps,
            resizableColumnWidthPercentage,
            size,
            stickyColumns,
            stretch,
            style,
        } = this.props;
        const bleed = bleedProp ? 'very' : stretch;
        const containerClasses = ClassNames('ui', `${classNamePrefix}_table`, className);
        const bodyClasses = ClassNames({ [`${classNamePrefix}_drop_shadow`]: dropShadow });
        const isSelectable =
            !_.isUndefined(rowProps) && _.isFunction(rowProps().onClick);

        return (
            <div
                className={containerClasses}
                style={style}
            >
                <Table
                    basic
                    className={`${classNamePrefix}_table_component`}
                    fontSize={fontSize}
                    selectable={isSelectable}
                    size={size}
                    stretch={bleed}
                    stickyColumnCount={stickyColumns}
                    resizableColumnWidthPercentage={resizableColumnWidthPercentage}
                >
                    <Table.Header>
                        <Table.Row>
                            {_.map(columns, (column, index) => {
                                const headerCellClasses = ClassNames(
                                    `${classNamePrefix}_table_header_cell`,
                                    column.className,
                                );
                                const cellId = column.id || `${classNamePrefix}_table_${id}_header_${idPrefix}-${index}`;
                                return (
                                    <Table.HeaderCell
                                        className={headerCellClasses}
                                        id={cellId}
                                        key={`tableBodyRow-${index}`}
                                        style={column.style}
                                    >
                                        {column.header}
                                    </Table.HeaderCell>
                                );
                            })}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body className={bodyClasses}>
                        {_.map(data, (row, index) => (
                            <DataGridTableRow
                                classNamePrefix={classNamePrefix}
                                columns={columns}
                                handle={handle}
                                id={id}
                                idPrefix={idPrefix}
                                isClickable={isSelectable}
                                key={`tableBodyRow-${row.id || index}`}
                                row={row}
                                rowIndex={index}
                                rowProps={rowProps(row)}
                            />
                        ))}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

DataGridTable.propTypes = propTypes;
DataGridTable.defaultProps = defaultProps;

export default DataGridTable;
