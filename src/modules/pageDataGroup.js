import DataGroups from './dataGroup.js';
import PropTypes from 'prop-types';
import React from 'react';

const PageDataGroup = (props) => {
    return (
        <DataGroups
            {...props}
            moduleType="page"
        />
    );
};

PageDataGroup.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    header: PropTypes.string,
    rows: PropTypes.array.isRequired,
    style: PropTypes.object,
};

export default PageDataGroup;
