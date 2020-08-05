import PropTypes from 'prop-types';
import React from 'react';
import DataCards from '../../dataDisplay/dataCards';

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
    const {
        cardProps,
        className,
        columns,
        data,
        style,
    } = props;

    return (
        <DataCards
            cardProps={cardProps}
            className={className}
            columns={columns}
            data={data}
            moduleType="page"
            style={style}
        />
    );
}

PageDataCards.propTypes = propTypes;
PageDataCards.defaultProps = defaultProps;

export default PageDataCards;
