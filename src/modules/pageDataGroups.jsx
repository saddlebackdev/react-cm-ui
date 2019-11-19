import PropTypes from 'prop-types';
import React from 'react';
import DataGroups from './dataGroups';
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

function PageDataGroups(props) {
    return (
        <DataGroups
            {...props}
            moduleType="page"
        />
    );
}

PageDataGroups.propTypes = propTypes;
PageDataGroups.defaultProps = defaultProps;

export default PageDataGroups;
