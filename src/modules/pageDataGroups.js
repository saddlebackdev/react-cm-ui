import DataGroups from './dataGroups.js';
import PropTypes from 'prop-types';
import React from 'react';

const PageDataGroups = (props) => {
    return (
        <DataGroups
            {...props}
            moduleType="page"
        />
    );
};

PageDataGroups.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    header: PropTypes.string,
    rows: PropTypes.array.isRequired,
    style: PropTypes.object,
};

export default PageDataGroups;
