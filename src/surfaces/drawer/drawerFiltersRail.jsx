import PropTypes from 'prop-types';
import React from 'react';
import FiltersRail from '../filtersRail';

const propTypes = {
    breakpointUp: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    isScrollable: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    breakpointUp: undefined,
    children: undefined,
    className: undefined,
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
        id,
        isOpen,
        isScrollable,
        style,
    } = props;

    return (
        <FiltersRail
            breakpointUp={breakpointUp}
            className={className}
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
