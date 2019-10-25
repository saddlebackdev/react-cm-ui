import PropTypes from 'prop-types';
import React from 'react';
import DataCards from './dataCards.js';

function PageDataCards(props) {
    return (
        <DataCards
            {...props}
            moduleType="page"
        />
    );
}

PageDataCards.propTypes = {
    cardProps: PropTypes.func,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    style: PropTypes.shape({}),
};

PageDataCards.defaultProps = {
    cardProps: undefined,
    className: undefined,
    style: {},
};

export default PageDataCards;
