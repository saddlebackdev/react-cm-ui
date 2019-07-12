
import _ from 'lodash';
import Card from '../views/card.js';
import ClassNames from 'classnames';
import Header from './header.js';
import PropTypes from 'prop-types';
import React from 'react';

class PageGridColumn extends React.PureComponent {
    render() {
        const { columns, data } = this.props;

        return _.map(columns, (column, index) => {
            const accessorClasses = ClassNames('page-card-column-accessor', {
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
                    className="page--card-column"
                    key={`pageCardColumn-${index}`}
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

PageGridColumn.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
};

class PageGridItem extends React.PureComponent {
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
                    className="page--card-container"
                >
                    <PageGridColumn
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

PageGridItem.propTypes = {
    cardProps: PropTypes.func,
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
};

class PageGrid extends React.PureComponent {
    render() {
        const {
            cardProps,
            className,
            columns,
            data,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'page--grid', className);

        return (
            <div
                className={containerClasses}
                style={style}
            >
                {_.map(data, (d, index) => {
                    const id = d.id ? _.kebabCase(d.id) : index;

                    return (
                        <PageGridItem
                            cardProps={cardProps}
                            columns={columns}
                            data={d}
                            key={`pageCardItem-${id}`}
                        />
                    );
                })}
            </div>
        );
    }
}

PageGrid.propTypes = {
    cardProps: PropTypes.func,
    className: PropTypes.string,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    style: PropTypes.object,
};

export default PageGrid;
