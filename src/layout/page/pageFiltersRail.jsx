import PropTypes from 'prop-types';
import React from 'react';
import FiltersRail from '../../surfaces/filtersRail';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    isScrollable: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    id: undefined,
    isOpen: undefined,
    isScrollable: false,
    style: {},
};

function PageFiltersRail(props) {
    const {
        children,
        className,
        id,
        isOpen,
        isScrollable,
        style,
    } = props;

    return (
        <FiltersRail
            className={className}
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
