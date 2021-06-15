import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import DataGrid from '../../dataDisplay/dataGrid';

const propTypes = {
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    id: PropTypes.string,
};

const defaultProps = {
    dataTestId: `${UI_CLASS_NAME}-drawer_data_grid`,
    id: 'drawer',
};

function DrawerDataGrid(props) {
    const {
        dataTestId,
    } = props;

    return (
        <DataGrid
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            data-testid={dataTestId}
            moduleType="drawer"
        />
    );
}

DrawerDataGrid.propTypes = propTypes;
DrawerDataGrid.defaultProps = defaultProps;

export default DrawerDataGrid;
