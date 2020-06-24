import PropTypes from 'prop-types';
import React from 'react';
import DataGroups from '../dataDisplay/dataGroups';
import { groupPropTypes } from '../dataDisplay/dataGroupsPropTypes';

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
    const {
        bleed,
        className,
        columns,
        data,
        style,
    } = props;

    return (
        <DataGroups
            bleed={bleed}
            className={className}
            columns={columns}
            data={data}
            moduleType="drawer"
            style={style}
        />
    );
}

DrawerDataGroups.propTypes = propTypes;
DrawerDataGroups.defaultProps = defaultProps;

export default DrawerDataGroups;
