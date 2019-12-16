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

function DrawerDataCards(props) {
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
            moduleType="drawer"
            style={style}
        />
    );
}

DrawerDataCards.propTypes = propTypes;
DrawerDataCards.defaultProps = defaultProps;

export default DrawerDataCards;
