import _ from 'lodash';
import ClassNames from 'classnames';
import Icon from '../elements/icon';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../elements/header.js';
import Utils from '../utils/utils.js';

class DataGroupRow extends React.PureComponent {
    constructor() {
        super();
    }

    render() {
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
        } = this.props;

        const containerClasses = ClassNames('list--item_section', {
            'header_icon': iconType || header,
        });

        let accessedData;

        if (_.isString(accessor)) {
            accessedData = _.get(data, accessor);
        }
        return (
            <div className={containerClasses}>
                {(header || iconType) ?
                    <React.Fragment>
                        {iconType && (
                            <Icon
                                type={iconType}
                                color={iconColor ? iconColor : 'primary'}
                                size={iconSize ? iconSize : 16}
                                style={{
                                    marginRight: '11px'
                                }}
                            />
                        )}
                        <div className="list--item_body_section">
                            {header && (
                                <Header
                                    weight="semibold"
                                    size="medium"
                                    style={{
                                        margin: 0,
                                        lineHeight: '16px'
                                    }}
                                >
                                    {header}
                                </Header>
                            )}
                            <div className="list--item_data_fieldname font-size-xsmall">
                                {accessedData} | {fieldName}
                            </div>
                        </div>
                    </React.Fragment> :
                    <React.Fragment>
                        <div className="list--item_data font-size-xsmall">
                            {accessedData}
                        </div>
                        <Header className="list--item_fieldname" color="static" size="xxsmall" style={{ margin: 0 }}>
                            {fieldName}
                        </Header>
                    </React.Fragment>
                }
            </div>
        );
    }
}

DataGroupRow.propTypes = {
    data: PropTypes.object.isRequired,
    row: PropTypes.object.isRequired,
    header: PropTypes.string,
    iconColor: PropTypes.string,
    iconType: PropTypes.string,
    iconSize: PropTypes.oneOfType([
        PropTypes.oneOf(Utils.sizeEnums()),
        PropTypes.number,
    ]),
};

export default DataGroupRow;
