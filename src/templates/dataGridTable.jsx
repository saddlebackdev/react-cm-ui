import {
    flatMap,
    isFunction,
    map,
    isArray,
    isNil,
} from 'lodash';
import { ReactSortable } from 'react-sortablejs';
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
    data: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.shape({})),
            PropTypes.shape({}),
        ]),
    ).isRequired,
    dropShadow: PropTypes.bool,
    fontSize: PropTypes.string,
    id: PropTypes.string.isRequired,
    idPrefix: PropTypes.string,
    resizableColumnWidthPercentage: PropTypes.number,
    rowProps: PropTypes.func,
    size: PropTypes.oneOf([
        'small',
        'medium',
    ]),
    sortable: PropTypes.arrayOf(
        PropTypes.shape({
            disabled: PropTypes.bool,
            filter: PropTypes.string,
            group: PropTypes.string,
            handle: PropTypes.bool,
            onChange: PropTypes.func,
            sort: PropTypes.bool,
        }),
    ),
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
    idPrefix: 'base',
    resizableColumnWidthPercentage: undefined,
    rowProps: () => ({
        className: null,
        id: null,
        onClick: null,
        selected: null,
        style: null,
    }),
    size: 'small',
    sortable: null,
    stickyColumns: undefined,
    stretch: false,
    style: undefined,
};

class DataGridTable extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onSortableChange = this.onSortableChange.bind(this);
    }

    onSortableChange(newData, index) {
        const {
            sortable,
        } = this.props;

        if (isFunction(sortable[index].onChange)) {
            sortable[index].onChange(newData, index);
        }
    }

    render() {
        const {
            classNamePrefix,
            bleed: bleedProp,
            className,
            columns,
            data: dataProp,
            dropShadow,
            fontSize,
            id,
            idPrefix,
            rowProps,
            resizableColumnWidthPercentage,
            size,
            sortable,
            stickyColumns,
            stretch,
            style,
        } = this.props;

        const isSelectable = isFunction(rowProps().onClick);

        let rowKeyNum = 1;

        const tableRows = (data, handle) => flatMap(data, (row) => {
            rowKeyNum += 1;

            return (
                <DataGridTableRow
                    classNamePrefix={classNamePrefix}
                    columns={columns}
                    handle={handle}
                    id={id}
                    idPrefix={idPrefix}
                    isClickable={isSelectable}
                    key={`tableBodyRow-${row.id || rowKeyNum}`}
                    row={row}
                    rowIndex={rowKeyNum}
                    rowProps={rowProps(row)}
                />
            );
        });

        let tableBody;
        const bodyClasses = ClassNames({ [`${classNamePrefix}_drop_shadow`]: dropShadow });

        if (sortable === true) {
            tableBody = (
                <ReactSortable
                    className={bodyClasses}
                    filter={`${classNamePrefix}-filter`}
                    list={dataProp}
                    setList={(newData) => this.onSortableChange(newData, 0)}
                    sort={!isNil(sortable[0].sort) ? sortable[0].sort : true}
                    tag={Table.Body}
                >
                    {tableRows(
                        dataProp,
                        !isNil(sortable[0].handle) ? sortable[0].handle : true,
                    )}
                </ReactSortable>
            );
        } else if (isArray(sortable) && isArray(dataProp[0])) {
            let tBodyKeyNum = 1;

            tableBody = map(dataProp, (arrayOfData, index) => {
                const isDisabled = !!sortable[index].disabled;
                const isSortable = !isNil(sortable[index].sort) ? sortable[index].sort : true;
                const hasHandle = !isNil(sortable[index].handle) ? sortable[index].handle : true;

                tBodyKeyNum += 1;

                return (
                    <ReactSortable
                        className={bodyClasses}
                        disabled={isDisabled}
                        filter={`${classNamePrefix}-filter`}
                        key={`tbody--${tBodyKeyNum}`}
                        list={arrayOfData}
                        setList={(newData) => this.onSortableChange(newData, index)}
                        sort={isSortable}
                        tag={Table.Body}
                    >
                        {tableRows(
                            arrayOfData,
                            hasHandle,
                        )}
                    </ReactSortable>
                );
            });
        } else {
            tableBody = (
                <Table.Body
                    className={bodyClasses}
                >
                    {tableRows(dataProp)}
                </Table.Body>
            );
        }

        const rootClasses = ClassNames('ui', `${classNamePrefix}_table`, className);
        const bleed = bleedProp ? 'very' : stretch;

        return (
            <div
                className={rootClasses}
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
                            {map(columns, (column, index) => {
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

                    {tableBody}
                </Table>
            </div>
        );
    }
}

DataGridTable.propTypes = propTypes;
DataGridTable.defaultProps = defaultProps;

export default DataGridTable;
