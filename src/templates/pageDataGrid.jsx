import PropTypes from 'prop-types';
import React from 'react';
import DataGrid from './dataGrid';

const propTypes = {
    id: PropTypes.string,
};

const defaultProps = {
    id: 'page',
};

function PageDataGrid(props) {
    return (
        <DataGrid
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            moduleType="page"
        />
    );
}

PageDataGrid.propTypes = propTypes;
PageDataGrid.defaultProps = defaultProps;

export default PageDataGrid;
