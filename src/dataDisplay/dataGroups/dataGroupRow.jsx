import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { rowPropTypes } from './dataGroupsPropTypes';
import Typography from '../typography';
import Icon from '../icon';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    bemClassName: PropTypes.string.isRequired,
    data: PropTypes.shape({}).isRequired,
    row: rowPropTypes.isRequired,
};

const useStyles = makeStyles(({ palette, typography }) => ({
    fieldName: {
        color: palette.text.secondary,
        fontSize: typography.pxToRem(12),
        margin: 0,
    },
    heading: {
        margin: 0,
        lineHeight: '16px',
    },
}));

function DataGroupRow(props) {
    const {
        bemClassName: parentBemClassName,
        data,
        row: {
            accessor,
            className,
            fieldName,
            id,
            header,
            iconColor,
            iconSize,
            iconType,
            style,
        },
    } = props;

    const classes = useStyles();
    const bemClassName = `${parentBemClassName}_row`;

    const rootClasses = ClassNames(
        `${bemClassName}`,
        className,
        {
            [`${bemClassName}-header_icon`]: iconType || header,
        },
    );

    let accessedData;

    if (_.isString(accessor)) {
        accessedData = _.get(data, accessor);
    } else if (_.isFunction(accessor)) {
        accessedData = accessor(data);
    }

    return (
        <div
            className={rootClasses}
            id={id}
            style={style}
        >
            {(header || iconType) ? (
                <React.Fragment>
                    {iconType && (
                        <Icon
                            color={iconColor || 'primary'}
                            className={`${bemClassName}_icon`}
                            size={iconSize || 16}
                            style={{
                                marginRight: '11px',
                            }}
                            type={iconType}
                        />
                    )}

                    <div className={`${bemClassName}_data`}>
                        {header && (
                            <Typography
                                classes={{
                                    root: classes.heading,
                                }}
                                className={`${bemClassName}_header`}
                                variant="h3"
                            >
                                {header}
                            </Typography>
                        )}

                        <div
                            className={`${bemClassName}_field_name_and_value`}
                        >
                            {`${accessedData} | ${fieldName}`}
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div
                        className={`${bemClassName}_value`}
                    >
                        {accessedData}
                    </div>

                    <Typography
                        classes={{
                            root: classes.fieldName,
                        }}
                        className={`${bemClassName}_field_name`}
                    >
                        {fieldName}
                    </Typography>
                </React.Fragment>
            )}
        </div>
    );
}

DataGroupRow.propTypes = propTypes;

export default DataGroupRow;
