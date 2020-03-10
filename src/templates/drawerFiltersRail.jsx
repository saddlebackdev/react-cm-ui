import PropTypes from 'prop-types';
import React from 'react';
import FiltersRail from './filtersRail';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    mobileMaxWidth: PropTypes.number,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    id: undefined,
    isOpen: undefined,
    mobileMaxWidth: undefined,
    style: {},
};

function DrawerFiltersRail(props) {
    const {
        children,
        className,
        id,
        isOpen,
        mobileMaxWidth,
        style,
    } = props;

    return (
        <FiltersRail
            className={className}
            id={id}
            isOpen={isOpen}
            mobileMaxWidth={mobileMaxWidth}
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
