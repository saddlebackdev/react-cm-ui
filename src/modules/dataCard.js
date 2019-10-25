import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../views/card.js';
import DataCardColumn from './dataCardColumn.js';

class DataCard extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { cardProps, data } = this.props;
        const isTextSelect = window.getSelection().toString();

        if (!isTextSelect && _.isFunction(cardProps().onClick)) {
            cardProps().onClick(data);
        }
    }

    render() {
        const {
            cardProps,
            columns,
            data,
            moduleType,
        } = this.props;
        const elementClassName = `${moduleType}--data_card`;

        return (
            <Card
                className={`${elementClassName}`}
                nest
                onClick={_.isFunction(cardProps().onClick) ? this.onClick : null}
            >
                <div
                    className={`${elementClassName}_inner_container`}
                >
                    <DataCardColumn
                        columns={columns}
                        data={data}
                        moduleType={moduleType}
                    />
                </div>
            </Card>
        );
    }
}

DataCard.propTypes = {
    cardProps: PropTypes.func,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.shape({}).isRequired,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
};

DataCard.defaultProps = {
    cardProps: undefined,
};

export default DataCard;
