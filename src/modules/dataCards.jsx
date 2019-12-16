import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DataCard from './dataCard';

const propTypes = {
    cardProps: PropTypes.func,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    cardProps: undefined,
    className: undefined,
    style: {},
};

function DataCards(props) {
    const {
        cardProps,
        className,
        columns,
        data,
        moduleType,
        style,
    } = props;
    const containerClasses = ClassNames('ui', `${moduleType}--data_cards`, className);

    return (
        <div
            className={containerClasses}
            style={style}
        >
            {_.map(data, (d, index) => {
                const id = d.id ? _.kebabCase(d.id) : index;

                return (
                    <DataCard
                        cardProps={cardProps}
                        columns={columns}
                        data={d}
                        key={`${moduleType}CardItem-${id}`}
                        moduleType={moduleType}
                    />
                );
            })}
        </div>
    );
}

DataCards.propTypes = propTypes;
DataCards.defaultProps = defaultProps;

export default DataCards;
