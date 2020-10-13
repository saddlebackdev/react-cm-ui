import PropTypes from 'prop-types';
import React from 'react';
import FiltersRail from '../filtersRail';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    id: undefined,
    isOpen: false,
    style: {},
};

function DrawerFiltersRail(props) {
    const {
        children,
        className,
        id,
        isOpen,
        style,
    } = props;

    return (
        <FiltersRail
            className={className}
            id={id}
            isOpen={isOpen}
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
