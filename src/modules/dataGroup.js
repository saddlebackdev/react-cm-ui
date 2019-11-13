import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../elements/header.js';
import Icon from '../elements/icon.js';
import List from '../elements/list.js';
import ActivityIndicator from '../elements/activityIndicator.js';
import DataGroupRow from './dataGroupRow.js';
import Utils from '../utils/utils.js';
import DataGroupExpandedRow from './dataGroupExpandedRow.js';

class DataGroup extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
        };

        this.onToggleExpand = this.onToggleExpand.bind(this);
    }

    onToggleExpand() {
        this.setState((prevState) => ({
            isExpanded: !prevState.isExpanded,
        }));
    }

    render() {
        const {
            column: {
                className,
                expandableSections,
                id,
                isExpandable,
                header,
                rows,
                style,
            },
            data,
            moduleType,
        } = this.props;
        const { isExpanded } = this.state;
        const bemClassName = `${moduleType}--data_group`;
        const containerClasses = ClassNames(bemClassName, className, {
            expanded: isExpandable && isExpanded,
        });

        let expandableJSX;

        const rowJSX = (
            <div className={`${bemClassName}_contract_section`}>
                <List
                    className={`${bemClassName}_list`}
                    divide
                >
                    {_.map(rows, (row, index) => (
                        <List.Item
                            key={`${bemClassName}_list_item-${index}`}
                        >
                            <DataGroupRow
                                bemClassName={bemClassName}
                                data={data}
                                row={row}
                            />
                        </List.Item>
                    ))}
                </List>
            </div>
        );

        if (isExpandable && !_.isEmpty(expandableSections)) {
            expandableJSX = (
                <div
                    className={`${bemClassName}_expand_section`}
                >
                    {_.map(expandableSections, (expandRow, expandIndex) => (
                        <div
                            className={`${bemClassName}_expand_section_list`}
                            key={`${bemClassName}_expand_section_list-${expandIndex}`}
                        >
                            {
                                expandRow.header && (
                                    <Header
                                        className={`${bemClassName}_header`}
                                        size="medium"
                                        style={{
                                            marginBottom: '22px',
                                            lineHeight: '16px',
                                        }}
                                        weight="semibold"
                                    >
                                        {expandRow.header}
                                    </Header>
                                )
                            }
                            <List
                                className={`${bemClassName}_list`}
                            >
                                {_.map(expandRow.rows, (row, index) => (
                                    <List.Item
                                        key={`${bemClassName}_list_item-${index}`}
                                    >
                                        <DataGroupExpandedRow
                                            bemClassName={bemClassName}
                                            data={data}
                                            row={row}
                                        />
                                    </List.Item>
                                ))}
                            </List>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div
                className={containerClasses}
                id={id}
                onClick={this.onToggleExpand}
                role="presentation"
                style={style}
            >
                {isExpandable && isExpanded && !_.isEmpty(expandableSections) && (
                    <div className={`${bemClassName}_inner_container_loader`}>
                        <ActivityIndicator
                            color="backgroundColorStatic"
                            size={32}
                        />
                    </div>
                )}
                <div
                    className={`${bemClassName}_inner_container`}
                >
                    <div
                        className={`${bemClassName}_header_section`}
                        style={{
                            marginBottom: '33px',
                        }}
                    >
                        {header && (
                            <Header
                                className={`${bemClassName}_header_title`}
                                weight="bold"
                                size="large"
                                style={{
                                    margin: '0',
                                    lineHeight: '16px',
                                }}
                            >
                                {header}
                            </Header>
                        )}

                        {isExpandable && !_.isEmpty(expandableSections) && (
                            <div
                                className={`${bemClassName}_header_icon_section`}
                            >
                                <Icon
                                    className={`${bemClassName}_header_icon`}
                                    type={isExpanded ? 'contract' : 'expand'}
                                />
                            </div>
                        )}
                    </div>
                    {rowJSX}
                    {isExpandable && !_.isEmpty(expandableSections) && (
                        expandableJSX
                    )}
                </div>
            </div>
        );
    }
}

DataGroup.propTypes = {
    column: PropTypes.shape({
        className: PropTypes.string,
        expandableSections: PropTypes.arrayOf(
            PropTypes.shape({
                header: PropTypes.string,
                iconType: PropTypes.string,
                iconColor: PropTypes.string,
                rows: PropTypes.arrayOf(
                    PropTypes.shape({}),
                ),
            }),
        ),
        id: PropTypes.string,
        isExpandable: PropTypes.bool,
        header: PropTypes.string,
        rows: PropTypes.arrayOf(
            PropTypes.shape({
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
        ).isRequired,
        style: PropTypes.shape({}),
    }).isRequired,
    data: PropTypes.shape({}).isRequired,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
    style: PropTypes.shape({}),
};

DataGroup.defaultProps = {
    style: {},
};

export default DataGroup;
