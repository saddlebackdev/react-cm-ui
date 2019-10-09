import _ from 'lodash';
import ClassNames from 'classnames';
import Button from '../elements/button.js';
import Header from '../elements/header.js';
import Icon from '../elements/icon.js';
import InfoBar from '../views/infoBar.js';
import PropTypes from 'prop-types';
import React from 'react';

class DetailsColumn extends React.PureComponent {
    render() {
        const { column, columnProps, moduleType } = this.props;

        if (!column.accessor && column.columns && _.isArray(column.columns)) {
            const containerClasses = ClassNames(`${moduleType}--details-column`, {
                'divide': column.divide,
            });

            let innerContainerKeyNum = 1;

            return (
                <div
                    className={containerClasses}
                    style={Object.assign({}, {
                        flexBasis: column.flexBasis || 'auto',
                        flexGrow: column.flexGrow || 0,
                        flexShrink: column.flexShrink || 0,
                        paddingLeft: columnProps && columnProps.horizontalSpacing ? `${columnProps.horizontalSpacing}px` : null,
                        paddingRight: columnProps && columnProps.horizontalSpacing ? `${columnProps.horizontalSpacing}px` : null,
                        width: column.width,
                    }, column.style)}
                >
                    {_.map(column.columns, (column, index) => {
                        return this._renderColumn(column, innerContainerKeyNum++);
                    })}
                </div>
            );
        }

        return this._renderColumn(column);
    }

    _renderColumn(column, innerContainerKeyNum) {
        const { columnProps, data, moduleType } = this.props;
        const containerClasses = ClassNames(`${moduleType}--details-column${!!innerContainerKeyNum ? '-inner' : ''}`, {
            'divide-left': column.divide || column.divide === 'left',
            'divide-right': column.divide === 'right',
        });
        const accessorClasses = ClassNames(`${moduleType}--details-column-accessor`, {
            'font-size-large': column.fontSize === 'large',
            'font-size-medium': column.fontSize === 'medium',
            'font-size-small': !column.fontSize || column.fontSize === 'small',
            'font-weight-bold': !column.fontWeight || column.fontWeight === 'bold',
            'font-weight-normal': column.fontWeight === 'normal',
            'font-weight-semibold': column.fontWeight === 'semibold',
        });
        let accessor, flexBasisInlineStyle, flexGrowInlineStyle, flexShrinkInlineStyle, horizontalSpacingInlineStyle;

        if (_.isString(column.accessor)) {
            accessor = _.get(data, column.accessor);
        } else if (_.isFunction(column.accessor)) {
            accessor = column.accessor(data);
        }

        if (!!innerContainerKeyNum) {
            flexBasisInlineStyle = column.flexBasis || 'auto';
            flexGrowInlineStyle = column.flexGrow || 0;
            flexShrinkInlineStyle = column.flexShrink || 0;
            horizontalSpacingInlineStyle = columnProps && columnProps.horizontalSpacing ? `${columnProps.horizontalSpacing}px` : null;
        }

        return (
            <div
                className={containerClasses}
                key={`${moduleType}-details-column-key-${innerContainerKeyNum || 0}`}
                style={Object.assign({}, {
                    flexBasis: flexBasisInlineStyle,
                    flexGrow: flexGrowInlineStyle,
                    flexShrink: flexShrinkInlineStyle,
                    paddingLeft: horizontalSpacingInlineStyle,
                    paddingRight: horizontalSpacingInlineStyle,
                    width: column.width,
                }, column.style)}
            >
                {column.header &&
                    <Header size="xsmall" style={{ margin: 0 }}>
                        {column.header}
                    </Header>
                }

                <div className={accessorClasses}>
                    {accessor}
                </div>
            </div>
        );
    }
}

DetailsColumn.propTypes = {
    column: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    columnProps: PropTypes.object,
    data: PropTypes.object.isRequired,
    moduleType: PropTypes.string,
};

class Details extends React.PureComponent {
    constructor() {
        super();
        this.onInfoBarExpandToggle = this.onInfoBarExpandToggle.bind(this);
        this.state = {
            isInfoBarExpanded: false,
        };
    }

    onInfoBarExpandToggle() {
        this.setState(prev => ({
            isInfoBarExpanded: !prev.isInfoBarExpanded,
        }));
    }

    render() {
        const {
            bleed,
            className,
            color,
            columnProps,
            columns,
            data,
            style,
            moduleType,
        } = this.props;
        const { isInfoBarExpanded } = this.state;
        const containerClasses = ClassNames('ui', `${moduleType}--details`, className, {
            'page--details-bleed' : bleed && moduleType=='page',
            'drawer--details-bleed' : bleed && moduleType=='drawer',
        });
        let detailsColumnKeyNum = 1;

        return (
            <div
                className={containerClasses}
                style={style}
            >
                <InfoBar color={color}>
                    <div
                        className={`${moduleType}--details-columns-container`}
                        style={{
                            marginLeft: columnProps && columnProps.horizontalSpacing ? `-${columnProps.horizontalSpacing}px` : null,
                            marginRight: columnProps && columnProps.horizontalSpacing ? `-${columnProps.horizontalSpacing}px` : null,
                        }}
                    >
                        {_.map(columns, (column, index) => {
                            return (
                                <DetailsColumn
                                    column={column}
                                    columnProps={columnProps}
                                    data={data}
                                    key={`${moduleType}DetailsColumn-${detailsColumnKeyNum++}`}
                                    moduleType={moduleType}
                                />
                            );
                        })}
                        <Button
                            className={`${moduleType}--expand-button`}
                            color="light"
                            icon
                            onClick={this.onInfoBarExpandToggle}
                            outlined
                        >
                            <Icon
                                compact
                                rotate={isInfoBarExpanded ? 180 : null}
                                title={isInfoBarExpanded ? 'Collapse' : 'Expand'}
                                type="chevron-down"
                            />
                        </Button>
                    </div>
                </InfoBar>
            </div>
        );
    }
}

Details.defaultProps = {
    bleed: true,
};

Details.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]),
    columnProps: PropTypes.object,
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    moduleType: PropTypes.string,
    style: PropTypes.object,
};

export default Details;
