import PropTypes from 'prop-types';
import React from 'react';
import FiltersDrawer from './filtersDrawer'; // eslint-disable-line import/no-cycle

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isDirty: PropTypes.bool.isRequired,
    isFiltering: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onApply: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    rows: PropTypes.arrayOf(PropTypes.shape({})),
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    id: undefined,
    rows: undefined,
    style: {},
};

function DrawerFiltersDrawer(props) {
    const {
        children,
        className,
        id,
        isDirty,
        isFiltering,
        isOpen,
        onApply,
        onClear,
        onClose,
        rows,
        style,
    } = props;

    return (
        <FiltersDrawer
            className={className}
            id={id}
            isDirty={isDirty}
            isFiltering={isFiltering}
            isOpen={isOpen}
            moduleType="drawer"
            onApply={onApply}
            onClear={onClear}
            onClose={onClose}
            rows={rows}
            style={style}
        >
            {children}
        </FiltersDrawer>
    );
}

DrawerFiltersDrawer.propTypes = propTypes;
DrawerFiltersDrawer.defaultProps = defaultProps;

export default DrawerFiltersDrawer;
