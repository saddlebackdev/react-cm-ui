import _ from 'lodash';
import Card from '../views/card.js';
import ClassNames from 'classnames';
import Header from '../elements/header';
import PropTypes from 'prop-types';
import React from 'react';

class DrawerGridColumn extends React.PureComponent {
    render() {
        const { columns, data } = this.props;

        return _.map(columns, (column, index) => {
            const accessorClasses = ClassNames('drawer-card-column-accessor', {
                'font-size-medium': column.fontSize === 'medium',
                'font-size-small': !column.fontSize || column.fontSize === 'small',
                'font-weight-bold': column.fontWeight === 'bold',
                'font-weight-normal': !column.fontWeight || column.fontWeight === 'normal',
                'font-weight-semibold': column.fontWeight === 'semibold',
            });
            let accessor = null;

            if (_.isString(column.accessor)) {
                accessor = _.get(data, column.accessor);
            } else if (_.isFunction(column.accessor)) {
                accessor = column.accessor(data);
            }

            return (
                <div
                    className="drawer--card-column"
                    key={`drawerCardColumn-${index}`}
                    style={{
                        marginBottom: column.width ? '11px' : null,
                        width: column.width,
                    }}
                >
                    {column.header &&
                        <Header color="static" size="xsmall" style={{ margin: 0 }}>
                            {column.header}
                        </Header>
                    }

                    <span className={accessorClasses}>
                        {accessor}
                    </span>
                </div>
            );
        });
    }
}

DrawerGridColumn.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
};

class DrawerGridItem extends React.PureComponent {
    constructor() {
        super();

        this._onClick = this._onClick.bind(this);
    }

    render() {
        const { cardProps, columns, data } = this.props;

        return (
            <Card
                nest
                onClick={_.isFunction(cardProps().onClick) ? this._onClick : null}
            >
                <div
                    className="drawer--card-container"
                >
                    <DrawerGridColumn
                        columns={columns}
                        data={data}
                    />
                </div>
            </Card>
        );
    }

    _onClick() {
        const { cardProps, data } = this.props;
        const isTextSelect = window.getSelection().toString();

        if (!isTextSelect && _.isFunction(cardProps().onClick)) {
            cardProps().onClick(data);
        }
    }
}

DrawerGridItem.propTypes = {
    cardProps: PropTypes.func,
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
};

class DrawerGrid extends React.PureComponent {
    render() {
        const {
            cardProps,
            className,
            columns,
            data,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'drawer--grid', className);

        return (
            <div
                className={containerClasses}
                style={style}
            >
                {_.map(data, (d, index) => {
                    const id = d.id ? _.kebabCase(d.id) : index;

                    return (
                        <DrawerGridItem
                            cardProps={cardProps}
                            columns={columns}
                            data={d}
                            key={`drawerCardItem-${id}`}
                        />
                    );
                })}
            </div>
        );
    }
}

DrawerGrid.propTypes = {
    cardProps: PropTypes.func,
    className: PropTypes.string,
    columns: PropTypes.array,
    data: PropTypes.array,
    style: PropTypes.object,
};

export default DrawerGrid;
