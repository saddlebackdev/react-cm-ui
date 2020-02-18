import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Card from '../organisms/card';
import DataCardColumn from './dataCardColumn';

const propTypes = {
    cardProps: PropTypes.func,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.shape({}).isRequired,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    cardProps: undefined,
    style: {},
};

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

DataCard.propTypes = propTypes;
DataCard.defaultProps = defaultProps;

export default DataCard;
