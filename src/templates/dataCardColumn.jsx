import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../elements/header';

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    data: PropTypes.shape({}).isRequired,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
};

function DataCardColumn(props) {
    const { columns, data, moduleType } = props;
    const elementClassName = `${moduleType}--data_card_column`;

    return _.map(columns, (column, index) => {
        const accessorClasses = ClassNames(`${elementClassName}_accessor`, {
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
                className={elementClassName}
                key={`${elementClassName}-${index}`}
                style={{
                    marginBottom: column.width ? '11px' : null,
                    width: column.width,
                }}
            >
                {column.header && (
                    <Header
                        color="static"
                        size="xsmall"
                        style={{ margin: 0 }}
                    >
                        {column.header}
                    </Header>
                )}

                <span className={accessorClasses}>
                    {accessor}
                </span>
            </div>
        );
    });
}

DataCardColumn.propTypes = propTypes;

export default DataCardColumn;
