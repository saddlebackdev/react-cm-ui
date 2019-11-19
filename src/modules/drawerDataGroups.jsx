import PropTypes from 'prop-types';
import React from 'react';
import DataGroups from './dataGroups.jsx';
import { groupPropTypes } from './dataGroupsPropTypes.js';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(groupPropTypes).isRequired,
    data: PropTypes.shape({}).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    bleed: false,
    className: '',
    style: {},
};

function DrawerDataGroups(props) {
    return (
        <DataGroups
            {...props}
            moduleType="drawer"
        />
    );
}

DrawerDataGroups.propTypes = propTypes;
DrawerDataGroups.defaultProps = defaultProps;

export default DrawerDataGroups;
