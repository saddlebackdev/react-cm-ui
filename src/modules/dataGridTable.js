import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import DataGridTableRow from './dataGridTableRow.js';
import DragListener from '../utils/dragListener.js';
import Icon from '../elements/icon';
import Table from '../collections/table.js';

class DataTable extends React.PureComponent {
    constructor() {
        super();

        this.onSplitterClick = this.onSplitterClick.bind(this);
        this.onSplitterDrag = this.onSplitterDrag.bind(this);
        this.onSplitterDragEnd = this.onSplitterDragEnd.bind(this);
    }

    onSplitterClick() {
        const { onSplitter } = this.props;

        requestAnimationFrame(() => {
            const handle = ReactDOM.findDOMNode(this.handle);
            handle.style.left = 0;
        });

        if (_.isFunction(onSplitter)) {
            onSplitter();
        }
    }

    onSplitterDrag({ deltaX }) {
        const { onSplitterDragEnd } = this.props;

        requestAnimationFrame(() => {
            const handle = ReactDOM.findDOMNode(this.handle);
            handle.style.left = 0;
        });

        onSplitterDragEnd(deltaX);
    }

    onSplitterDragEnd({ deltaX }) {
        const { onSplitterDragEnd } = this.props;

        requestAnimationFrame(() => {
            const handle = ReactDOM.findDOMNode(this.handle);
            handle.style.left = 0;
        });

        if (_.isFunction(onSplitterDragEnd)) {
            onSplitterDragEnd(deltaX);
        }
    }

    render() {
        const {
            classNamePrefix,
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
        const containerClasses = ClassNames('ui', `${classNamePrefix}_table`, className);
        const bodyClasses = ClassNames({ [`${classNamePrefix}_drop_shadow`]: dropShadow });
        const isSelectable =
            _.isFunction(rowProps) && _.isFunction(rowProps().onClick);

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
                                        className={`${classNamePrefix}_table_header_cell`}
                                        key={`tableBodyRow-${index}`}
                                    >
                                        {column.header}
                                        {hasSplitter && (
                                            <DragListener
                                                className={`${classNamePrefix}_table_header_handle`}
                                                onClick={this.onSplitterClick}
                                                onDrag={this.onSplitterDrag}
                                                onDragEnd={this.onSplitterDragEnd}
                                                ref={(ref) => { this.handle = ref; }}
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
                        {_.map(data, (row, index) => (
                            <DataGridTableRow
                                classNamePrefix={classNamePrefix}
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
                        ))}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

DataTable.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    classNamePrefix: PropTypes.oneOf(['drawer--data_grid', 'page--data_grid']).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    dropShadow: PropTypes.bool,
    fontSize: PropTypes.string,
    handle: PropTypes.bool,
    idPrefix: PropTypes.string,
    onSplitter: PropTypes.func,
    onSplitterDragEnd: PropTypes.func,
    rowProps: PropTypes.func,
    sizes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    small: PropTypes.bool,
    style: PropTypes.shape({}),
};

DataTable.defaultProps = {
    bleed: true,
    className: undefined,
    dropShadow: false,
    fontSize: 'xsmall',
    handle: false,
    idPrefix: 'base',
    onSplitter: undefined,
    onSplitterDragEnd: undefined,
    rowProps: undefined,
    sizes: undefined,
    small: true,
    style: undefined,
};

export default DataTable;
