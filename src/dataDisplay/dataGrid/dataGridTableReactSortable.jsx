import {
    isFunction,
    isNil,
} from 'lodash';
import { ReactSortable } from 'react-sortablejs';
import PropTypes from 'prop-types';
import React from 'react';
import { SORTABLE_PROP_TYPES } from './dataGridConstants';
import Table from '../table';

const propTypes = {
    arrayIndex: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({})),
    sortable: SORTABLE_PROP_TYPES,
};

const defaultProps = {
    list: null,
    sortable: null,
};

function DataGridTableReactSortable(props) {
    const {
        arrayIndex,
        children,
        className,
        list,
        sortable,
    } = props;

    const onSortableChange = (newData) => {
        if (sortable && sortable[arrayIndex] && isFunction(sortable[arrayIndex].onChange)) {
            sortable[arrayIndex].onChange(newData, arrayIndex);
        }
    };

    const isDisabled = sortable && sortable[arrayIndex] && !!sortable[arrayIndex].disabled;
    const isSortable = sortable && sortable[arrayIndex] && !isNil(sortable[arrayIndex].sort) ?
        sortable[arrayIndex].sort :
        true;

    return (
        <ReactSortable
            className={className}
            disabled={isDisabled}
            filter={sortable[arrayIndex].filter}
            list={list}
            setList={onSortableChange}
            sort={isSortable}
            tag={Table.Body}
        >
            {children}
        </ReactSortable>
    );
}

DataGridTableReactSortable.propTypes = propTypes;
DataGridTableReactSortable.defaultProps = defaultProps;

export default DataGridTableReactSortable;
