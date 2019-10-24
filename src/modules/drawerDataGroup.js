import DataGroup from './dataGroup.js';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../utils/utils.js';

function DrawerDataGroup(props) {
    return (
        <DataGroup
            {...props}
            moduleType="drawer"
        />
    );
};

DrawerDataGroup.defaultProps = {
    bleed: false,
    className: '',
    header: '',
    style: {},
};

DrawerDataGroup.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    data: PropTypes.shape({}).isRequired,
    header: PropTypes.string,
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            accessor: PropTypes.string.isRequired,
            fieldName: PropTypes.string.isRequired,
            header: PropTypes.string,
            iconType: PropTypes.string,
            iconColor: PropTypes.string,
            iconSize: PropTypes.oneOfType([
                PropTypes.oneOf(Utils.sizeEnums()),
                PropTypes.number,
            ]),
        })
    ).isRequired,
    style: PropTypes.shape({})
};

export default DrawerDataGroup;
