import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../elements/button';
import Header from '../elements/header';
import Icon from '../elements/icon';
import { rowPropTypes } from './dataGroupsPropTypes';

const propTypes = {
    bemClassName: PropTypes.string.isRequired,
    data: PropTypes.shape({}).isRequired,
    row: rowPropTypes.isRequired,
};

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
    const containerClasses = ClassNames(`${bemClassName}`, className, {
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
            className={containerClasses}
            id={id}
            style={style}
        >
            <React.Fragment>
                {
                    iconType && (
                        <Button
                            color={iconColor || 'primary'}
                            className={`${bemClassName}_button`}
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
                        <Header
                            className={`${bemClassName}_header`}
                            size="xsmall"
                            style={{
                                margin: 0,
                                lineHeight: '14px',
                            }}
                        >
                            {fieldName}
                        </Header>
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

export default DataGroupExpandedRow;
