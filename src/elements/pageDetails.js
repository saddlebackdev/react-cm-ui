import _ from 'lodash';
import ClassNames from 'classnames';
import Header from './header.js';
import InfoBar from '../views/infoBar.js';
import PropTypes from 'prop-types';
import React from 'react';

class PageDetailsColumn extends React.PureComponent {
    render() {
        const { column } = this.props;

        if (!column.accessor && column.columns && _.isArray(column.columns)) {
            const containerClasses = ClassNames('page--details-column', {
                'divide': column.divide,
            });

            return (
                <div
                    className={containerClasses}
                    style={Object.assign({}, column.style, {
                        width: column.width,
                    })}
                >
                    {_.map(column.columns, (column, index) => {
                        return this._renderColumn(column);
                    })}
                </div>
            );
        }

        return this._renderColumn(column);
    }

    _renderColumn(column) {
        const { data } = this.props;
        const containerClasses = ClassNames('page--details-column', {
            'divide-left': column.divide || column.divide === 'left',
            'divide-right': column.divide === 'right',
        });
        const accessorClasses = ClassNames('page--details-column-accessor', {
            'font-size-large': column.fontSize === 'large',
            'font-size-medium': column.fontSize === 'medium',
            'font-size-small': !column.fontSize || column.fontSize === 'small',
            'font-weight-bold': !column.fontWeight || column.fontWeight === 'bold',
            'font-weight-normal': column.fontWeight === 'normal',
            'font-weight-semibold': column.fontWeight === 'semibold',
        });
        let accessor;

        if (_.isString(column.accessor)) {
            accessor = _.get(data, column.accessor);
        } else if (_.isFunction(column.accessor)) {
            accessor = column.accessor(data);
        }

        return (
            <div
                className={containerClasses}
                style={Object.assign({}, column.style, {
                    width: column.width,
                })}
            >
                {column.header &&
                    <Header size="xsmall" style={{ margin: 0 }}>
                        {column.header}
                    </Header>
                }

                <span className={accessorClasses}>
                    {accessor}
                </span>
            </div>
        );
    }
}

PageDetailsColumn.propTypes = {
    column: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    data: PropTypes.object.isRequired,
};

class PageDetails extends React.PureComponent {
    render() {
        const {
            bleed,
            className,
            color,
            columns,
            data,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'page--details', className);

        return (
            <div
                className={containerClasses}
                style={Object.assign({}, style, {
                    margin: bleed ? '0 -22px' : null,
                })}
            >
                <InfoBar
                    color={color}
                    style={{
                        padding: '22px',
                    }}
                >
                    <div
                        className="page--details-columns-container"
                    >
                        {_.map(columns, (column, index) => {
                            return (
                                <PageDetailsColumn
                                    column={column}
                                    data={data}
                                    key={`pageDetailsColumn-${index}`}
                                />
                            );
                        })}
                    </div>
                </InfoBar>
            </div>
        );
    }
}

PageDetails.defaultProps = {
    bleed: true,
};

PageDetails.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]),
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    style: PropTypes.object,
};

export default PageDetails;
