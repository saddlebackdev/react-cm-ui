import PropTypes from 'prop-types';
import React from 'react';
import DataGrid from './dataGrid';

const propTypes = {
    id: PropTypes.string,
};

const defaultProps = {
    id: 'drawer',
};

function DrawerDataGrid(props) {
    return (
        <DataGrid
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            moduleType="drawer"
        />
    );
}

DrawerDataGrid.propTypes = propTypes;
DrawerDataGrid.defaultProps = defaultProps;

export default DrawerDataGrid;
