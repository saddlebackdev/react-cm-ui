import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../elements/header.js';
import Icon from '../elements/icon';
import Utils from '../utils/utils.js';

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
                            <Header
                                className={`${bemClassName}_header`}
                                size="medium"
                                style={{
                                    margin: 0,
                                    lineHeight: '16px',
                                }}
                                weight="semibold"
                            >
                                {header}
                            </Header>
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

                    <Header
                        className={`${bemClassName}_field_name`}
                        color="static"
                        size="xxsmall"
                        style={{ margin: 0 }}
                    >
                        {fieldName}
                    </Header>
                </React.Fragment>
            )}
        </div>
    );
}

DataGroupRow.propTypes = {
    bemClassName: PropTypes.string.isRequired,
    data: PropTypes.shape({}).isRequired,
    row: PropTypes.shape({
        accessor: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]).isRequired,
        className: PropTypes.string,
        fieldName: PropTypes.string.isRequired,
        id: PropTypes.string,
        header: PropTypes.string,
        iconType: PropTypes.string,
        iconColor: PropTypes.string,
        iconSize: PropTypes.oneOfType([
            PropTypes.oneOf(Utils.sizeEnums()),
            PropTypes.number,
        ]),
        style: PropTypes.shape({}),
    }),
};

DataGroupRow.defaultProps = {
    row: {
        className: undefined,
        id: undefined,
        header: undefined,
        iconType: undefined,
        iconColor: undefined,
        iconSize: 22,
        style: {},
    },
};

export default DataGroupRow;
