import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { groupPropTypes } from './dataGroupsPropTypes';
import ActivityIndicator from '../../feedback/activityIndicator';
import DataGroupExpandedRow from './dataGroupExpandedRow';
import DataGroupRow from './dataGroupRow';
import Icon from '../icon';
import List from '../list';
import Typography from '../typography';
import withStyles from '../../styles/withStyles';

const propTypes = {
    classes: PropTypes.shape({
        heading: PropTypes.string,
        expandRowHeading: PropTypes.string,
    }),
    group: groupPropTypes.isRequired,
    data: PropTypes.shape({}).isRequired,
    moduleType: PropTypes.string.isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    classes: null,
    style: {},
};

const styles = () => ({
    heading: {
        margin: 0,
        lineHeight: '16px',
    },
    expandRowHeading: {
        marginBottom: 22,
        lineHeight: '16px',
    },
});

class DataGroup extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
        };

        this.onToggleExpandClick = this.onToggleExpandClick.bind(this);
    }

    onToggleExpandClick() {
        const isElementHighlighted = window.getSelection().toString();

        if (!isElementHighlighted) {
            this.setState((prevState) => ({
                isExpanded: !prevState.isExpanded,
            }));
        }
    }

    render() {
        const {
            classes,
            group: {
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
            [`${bemClassName}-is_expandable`]: isExpandable,
            [`${bemClassName}-expanded`]: isExpandable && isExpanded,
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
                            {expandRow.header && (
                                <Typography
                                    classes={{
                                        root: classes.expandRowHeading,
                                    }}
                                    className={`${bemClassName}_header`}
                                    variant="h3"
                                >
                                    {expandRow.header}
                                </Typography>
                            )}

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
                onClick={this.onToggleExpandClick}
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
                            <Typography
                                classes={{
                                    root: classes.heading,
                                }}
                                className={`${bemClassName}_header_title`}
                                variant="h2"
                            >
                                {header}
                            </Typography>
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

DataGroup.propTypes = propTypes;
DataGroup.defaultProps = defaultProps;

export default withStyles(styles)(DataGroup);
