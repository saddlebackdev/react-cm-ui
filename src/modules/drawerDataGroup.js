import DataGroup from './dataGroup.js';
import PropTypes from 'prop-types';
import React from 'react';

const DrawerDataGroup = (props) => {
    return (
        <DataGroup
            {...props}
            moduleType="drawer"
        />
    );
};

DrawerDataGroup.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    header: PropTypes.string,
    rows: PropTypes.array.isRequired,
    style: PropTypes.object,
};

export default DrawerDataGroup;
