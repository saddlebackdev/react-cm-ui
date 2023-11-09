import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import FiltersRail from '../filtersRail';

const propTypes = {
    breakpointUp: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    /**
     * Used for enabling Clear All & Apply Filters action buttons
     */
    filterOptions: PropTypes.shape({
        /**
         * If `true`, filters are applied
         */
        isDirty: PropTypes.bool.isRequired,
        /**
         * Apply filters Button onClick event handler
         */
        onApply: PropTypes.func.isRequired,
        /**
         * Clear All Link onClick event handler
         */
        onClear: PropTypes.func.isRequired,
    }),
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    isScrollable: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    breakpointUp: undefined,
    children: undefined,
    className: undefined,
    dataTestId: `${UI_CLASS_NAME}-drawer_filters_rail`,
    filterOptions: undefined,
    id: undefined,
    isOpen: undefined,
    isScrollable: false,
    style: {},
};

function DrawerFiltersRail(props) {
    const {
        breakpointUp,
        children,
        className,
        dataTestId,
        filterOptions,
        id,
        isOpen,
        isScrollable,
        style,
    } = props;

    return (
        <FiltersRail
            breakpointUp={breakpointUp}
            className={className}
            data-testid={dataTestId}
            filterOptions={filterOptions}
            id={id}
            isOpen={isOpen}
            isScrollable={isScrollable}
            moduleType="drawer"
            style={style}
        >
            {children}
        </FiltersRail>
    );
}

DrawerFiltersRail.propTypes = propTypes;
DrawerFiltersRail.defaultProps = defaultProps;

export default DrawerFiltersRail;
