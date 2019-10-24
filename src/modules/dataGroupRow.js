import _ from 'lodash';
import ClassNames from 'classnames';
import Icon from '../elements/icon';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../elements/header.js';
import Utils from '../utils/utils.js';

function DataGroupRow(props) {
    const {
        row: {
            accessor,
            fieldName,
            header,
            iconColor,
            iconSize,
            iconType,
        },
        data,
    } = props;

    const containerClasses = ClassNames('data_group--row', {
        'data_group--row-header_icon': iconType || header,
    });

    let accessedData;

    if (_.isString(accessor)) {
        accessedData = _.get(data, accessor);
    }

    return (
        <div className={containerClasses}>
            {(header || iconType) ?
                (
                    <React.Fragment>
                        {iconType && (
                            <Icon
                                color={iconColor ? iconColor : 'primary'}
                                className="data_group--icon"
                                size={iconSize ? iconSize : 16}
                                style={{
                                    marginRight: '11px'
                                }}
                                type={iconType}
                            />
                        )}
                        <div className="data_group-data">
                            {header && (
                                <Header
                                    className="data_group--row_header"
                                    size="medium"
                                    style={{
                                        margin: 0,
                                        lineHeight: '16px'
                                    }}
                                    weight="semibold"
                                >
                                    {header}
                                </Header>
                            )}
                            <div className="data_group--field_name_and_value font-size-xsmall">
                                {accessedData} | {fieldName}
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <div className="data_group--value font-size-xsmall">
                            {accessedData}
                        </div>
                        <Header className="data_group-field_name" color="static" size="xxsmall" style={{ margin: 0 }}>
                            {fieldName}
                        </Header>
                    </React.Fragment>
                )}
        </div>
    );
}

DataGroupRow.defaultProps = {
    header: '',
    iconColor: '',
    iconSize: 22,
    iconType: '',
};

DataGroupRow.propTypes = {
    data: PropTypes.shape({}).isRequired,
    row: PropTypes.shape({}).isRequired,
    header: PropTypes.string,
    iconColor: PropTypes.string,
    iconType: PropTypes.string,
    iconSize: PropTypes.oneOfType([
        PropTypes.oneOf(Utils.sizeEnums()),
        PropTypes.number,
    ]),
};

export default DataGroupRow;
