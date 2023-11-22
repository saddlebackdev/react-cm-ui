import PropTypes from 'prop-types';
import React from 'react';
import FiltersRail from '../../surfaces/filtersRail';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Used for enabling Clear All & Apply Filters action buttons
     */
    filterOptions: PropTypes.shape({
        /**
         * If `true`, filters are applied
         */
        isDirty: PropTypes.bool.isRequired,
        /**
         * If `true`, filters are applied
         */
        isFiltering: PropTypes.bool.isRequired,
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
    children: undefined,
    className: undefined,
    filterOptions: undefined,
    id: undefined,
    isOpen: undefined,
    isScrollable: false,
    style: {},
};

function PageFiltersRail(props) {
    const {
        children,
        className,
        filterOptions,
        id,
        isOpen,
        isScrollable,
        style,
    } = props;

    return (
        <FiltersRail
            className={className}
            filterOptions={filterOptions}
            id={id}
            isOpen={isOpen}
            isScrollable={isScrollable}
            moduleType="page"
            style={style}
        >
            {children}
        </FiltersRail>
    );
}

PageFiltersRail.propTypes = propTypes;
PageFiltersRail.defaultProps = defaultProps;

export default PageFiltersRail;
