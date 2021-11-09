import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { rowPropTypes } from './dataGroupsPropTypes';
import Button from '../../inputs/button';
import Typography from '../typography';
import Icon from '../icon';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    bemClassName: PropTypes.string.isRequired,
    classes: PropTypes.shape({
        heading: PropTypes.string,
    }),
    data: PropTypes.shape({}).isRequired,
    row: rowPropTypes.isRequired,
};

const defaultProps = {
    classes: null,
};

const useStyles = makeStyles(({ typography }) => ({
    heading: {
        fontSize: typography.pxToRem(12),
        lineHeight: '14px',
        margin: 0,
    },
}));

function DataGroupExpandedRow(props) {
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
            iconType,
            style,
        },
    } = props;

    const bemClassName = `${parentBemClassName}_row`;

    const rootClasses = ClassNames(`${bemClassName}`, className, {
        [`${bemClassName}-header_icon`]: iconType || header,
    });

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
            <React.Fragment>
                {
                    iconType && (
                        <Button
                            color={iconColor || 'primary'}
                            className={`${bemClassName}_button`}
                            designVersion={2}
                            icon
                            style={{
                                height: '38px',
                                marginRight: '11px',
                                width: '38px',
                            }}
                        >
                            <Icon
                                className={`${bemClassName}_icon`}
                                color="inverse"
                                type={iconType}
                            />
                        </Button>
                    )
                }

                <div
                    className={`${bemClassName}_data`}
                    style={{
                        marginLeft: !_.isEmpty(iconType) ? 0 : '49px',
                    }}
                >
                    {fieldName && (
                        <Typography
                            classes={{
                                root: classes.heading,
                            }}
                            className={`${bemClassName}_header`}
                        >
                            {fieldName}
                        </Typography>
                    )}

                    <div
                        className={`${bemClassName}_field_value`}
                    >
                        {accessedData}
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}

DataGroupExpandedRow.propTypes = propTypes;
DataGroupExpandedRow.defaultProps = defaultProps;

export default DataGroupExpandedRow;
