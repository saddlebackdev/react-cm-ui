import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';
import Typography from '../typography';

const propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        style: PropTypes.shape({}),
    })).isRequired,
    data: PropTypes.shape({}).isRequired,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
};

const defaultProps = {
    classes: null,
};

const useStyles = makeStyles(({ palette, typography }) => ({
    heading: {
        color: palette.text.secondary,
        fontSize: typography.pxToRem(12),
        margin: 0,
    },
}));

function DataCardColumn(props) {
    const {
        columns,
        data,
        moduleType,
    } = props;

    const classes = useStyles(props);
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
                    ...(column.style || {}),
                }}
            >
                {column.header && (
                    <Typography
                        classes={{
                            root: classes.heading,
                        }}
                    >
                        {column.header}
                    </Typography>
                )}

                <span className={accessorClasses}>
                    {accessor}
                </span>
            </div>
        );
    });
}

DataCardColumn.propTypes = propTypes;
DataCardColumn.defaultProps = defaultProps;

export default DataCardColumn;
