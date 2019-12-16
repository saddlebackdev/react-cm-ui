import PropTypes from 'prop-types';
import React from 'react';
import DataGrid from './dataGrid';

const propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fontSize: PropTypes.string,
    handle: PropTypes.bool,
    minWidth: PropTypes.number,
    rowProps: PropTypes.func,
    small: PropTypes.bool,
    stickyColumnWidth: PropTypes.number,
    stickyColumns: PropTypes.number,
    style: PropTypes.shape({}),
};

const defaultProps = {
    bleed: true,
    className: undefined,
    fontSize: undefined,
    handle: true,
    minWidth: 800,
    rowProps: undefined,
    small: undefined,
    stickyColumns: 0,
    stickyColumnWidth: 30,
    style: {},
};

function DrawerDataGrid(props) {
    return (
        <DataGrid
            {...props}
            moduleType="drawer"
        />
    );
}

DrawerDataGrid.propTypes = propTypes;
DrawerDataGrid.defaultProps = defaultProps;

export default DrawerDataGrid;
