import PropTypes from 'prop-types';
import React from 'react';
import DataCards from './dataCards';

const propTypes = {
    cardProps: PropTypes.func,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    cardProps: undefined,
    className: undefined,
    style: {},
};

function PageDataCards(props) {
    return (
        <DataCards
            {...props}
            moduleType="page"
        />
    );
}

PageDataCards.propTypes = propTypes;
PageDataCards.defaultProps = defaultProps;

export default PageDataCards;
