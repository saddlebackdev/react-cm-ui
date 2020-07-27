import {
    isFunction,
    map,
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
        PropTypes.shape({}),
    ).isRequired,
    dropShadow: PropTypes.bool,
    fontSize: PropTypes.string,
    handle: PropTypes.bool,
    id: PropTypes.string.isRequired,
    idPrefix: PropTypes.string,
    onChange: PropTypes.func,
    resizableColumnWidthPercentage: PropTypes.number,
    rowProps: PropTypes.func,
    size: PropTypes.oneOf([
        'small',
        'medium',
    ]),
    sortable: PropTypes.bool,
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
    onChange: undefined,
    resizableColumnWidthPercentage: undefined,
    rowProps: () => ({
        className: null,
        id: null,
        onClick: null,
        selected: null,
        style: null,
    }),
    size: 'small',
    sortable: false,
    stickyColumns: undefined,
    stretch: false,
    style: undefined,
};

class DataGridTable extends React.PureComponent {
    constructor(props) {
        super(props);

        this.setSortableList = this.setSortableList.bind(this);
    }

    setSortableList(newData) {
        const {
            onChange,
        } = this.props;

        if (isFunction(onChange)) {
            onChange(newData);
        }
    }

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
            sortable,
            stickyColumns,
            stretch,
            style,
        } = this.props;

        const isSelectable = isFunction(rowProps().onClick);

        let rowKeyNum = 1;

        const tableRows = map(data, (row) => {
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

        if (sortable) {
            tableBody = (
                <ReactSortable
                    className={bodyClasses}
                    list={data}
                    setList={this.setSortableList}
                    tag={Table.Body}
                >
                    {tableRows}
                </ReactSortable>
            );
        } else {
            tableBody = (
                <Table.Body
                    className={bodyClasses}
                >
                    {tableRows}
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
