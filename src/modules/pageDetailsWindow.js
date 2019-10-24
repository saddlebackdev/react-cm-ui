import PropTypes from 'prop-types';
import React from 'react';
import DetailsWindow from './detailsWindow.js';

function PageDetailsWindow(props) {
    return (
        <DetailsWindow
            {...props}
            moduleType="page"
        />
    );
}

PageDetailsWindow.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    columnProps: PropTypes.shape({}),
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.shape({}).isRequired,
    style: PropTypes.shape({}),
};

PageDetailsWindow.defaultProps = {
    bleed: undefined,
    className: undefined,
    color: undefined,
    columnProps: undefined,
    style: {},
};

export default PageDetailsWindow;
