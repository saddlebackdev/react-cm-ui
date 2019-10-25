import PropTypes from 'prop-types';
import React from 'react';
import DataCard from './dataCard.js';

function DrawerDataCard(props) {
    return (
        <DataCard
            {...props}
            moduleType="drawer"
        />
    );
}

DrawerDataCard.propTypes = {
    cardProps: PropTypes.func,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    style: PropTypes.shape({}),
};

DrawerDataCard.defaultProps = {
    cardProps: undefined,
    className: undefined,
    style: {},
};

export default DrawerDataCard;
