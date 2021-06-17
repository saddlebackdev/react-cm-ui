import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import DataCards from '../../dataDisplay/dataCards';

const propTypes = {
    cardProps: PropTypes.func,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    cardProps: undefined,
    className: undefined,
    dataTestId: `${UI_CLASS_NAME}-drawer_data_cards`,
    style: {},
};

function DrawerDataCards(props) {
    const {
        cardProps,
        className,
        columns,
        data,
        dataTestId,
        style,
    } = props;

    return (
        <DataCards
            cardProps={cardProps}
            className={className}
            columns={columns}
            data={data}
            data-testid={dataTestId}
            moduleType="drawer"
            style={style}
        />
    );
}

DrawerDataCards.propTypes = propTypes;
DrawerDataCards.defaultProps = defaultProps;

export default DrawerDataCards;
