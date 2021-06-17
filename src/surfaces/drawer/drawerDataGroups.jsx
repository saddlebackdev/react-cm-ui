import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import { groupPropTypes } from '../../dataDisplay/dataGroups/dataGroupsPropTypes';
import DataGroups from '../../dataDisplay/dataGroups';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(groupPropTypes).isRequired,
    data: PropTypes.shape({}).isRequired,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    bleed: false,
    className: '',
    dataTestId: `${UI_CLASS_NAME}-drawer_data_groups`,
    style: {},
};

function DrawerDataGroups(props) {
    const {
        bleed,
        className,
        columns,
        data,
        dataTestId,
        style,
    } = props;

    return (
        <DataGroups
            bleed={bleed}
            className={className}
            columns={columns}
            data={data}
            data-testid={dataTestId}
            moduleType="drawer"
            style={style}
        />
    );
}

DrawerDataGroups.propTypes = propTypes;
DrawerDataGroups.defaultProps = defaultProps;

export default DrawerDataGroups;
