import PropTypes from 'prop-types';
import React from 'react';
import DataCard from './dataCard.js';

function PageDataCard(props) {
    return (
        <DataCard
            {...props}
            moduleType="page"
        />
    );
}

PageDataCard.propTypes = {
    cardProps: PropTypes.func,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    style: PropTypes.shape({}),
};

PageDataCard.defaultProps = {
    cardProps: undefined,
    className: undefined,
    style: {},
};

export default PageDataCard;
