import PropTypes from 'prop-types';
import React from 'react';
import DataCards from './dataCards.js';

function DrawerDataCards(props) {
    return (
        <DataCards
            {...props}
            moduleType="drawer"
        />
    );
}

DrawerDataCards.propTypes = {
    cardProps: PropTypes.func,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    style: PropTypes.shape({}),
};

DrawerDataCards.defaultProps = {
    cardProps: undefined,
    className: undefined,
    style: {},
};

export default DrawerDataCards;
