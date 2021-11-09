import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import FiltersDrawer from '../../surfaces/filtersDrawer'; // eslint-disable-line import/no-cycle

const propTypes = {
    breakpointDown: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
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
    breakpointDown: undefined,
    children: undefined,
    className: undefined,
    dataTestId: `${UI_CLASS_NAME}-drawer_filters_drawer`,
    id: undefined,
    rows: undefined,
    style: {},
};

function DrawerFiltersDrawer(props) {
    const {
        breakpointDown,
        children,
        className,
        dataTestId,
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
            breakpointDown={breakpointDown}
            className={className}
            data-testid={dataTestId}
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
