import _ from 'lodash';
import ClassNames from 'classnames';
import Header from '../elements/header.js';
import InfoBar from '../views/infoBar.js';
import PropTypes from 'prop-types';
import React from 'react';

class PageDetailsColumn extends React.PureComponent {
    render() {
        const { column, columnProps } = this.props;

        if (!column.accessor && column.columns && _.isArray(column.columns)) {
            const containerClasses = ClassNames('page--details-column', {
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
        const { columnProps, data } = this.props;
        const containerClasses = ClassNames(`page--details-column${!!innerContainerKeyNum ? '-inner' : ''}`, {
            'divide-left': column.divide || column.divide === 'left',
            'divide-right': column.divide === 'right',
        });
        const accessorClasses = ClassNames('page--details-column-accessor', {
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
                key={`page-details-column-key-${innerContainerKeyNum || 0}`}
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

PageDetailsColumn.propTypes = {
    column: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]).isRequired,
    columnProps: PropTypes.object,
    data: PropTypes.object.isRequired,
};

class PageDetails extends React.PureComponent {
    render() {
        const {
            bleed,
            className,
            color,
            columnProps,
            columns,
            data,
            style,
        } = this.props;
        const containerClasses = ClassNames('ui', 'page--details', className, {
            'page--details-bleed': bleed,
        });
        let pageDetailsColumnKeyNum = 1;

        return (
            <div
                className={containerClasses}
                style={style}
            >
                <InfoBar color={color}>
                    <div
                        className="page--details-columns-container"
                        style={{
                            marginLeft: columnProps && columnProps.horizontalSpacing ? `-${columnProps.horizontalSpacing}px` : null,
                            marginRight: columnProps && columnProps.horizontalSpacing ? `-${columnProps.horizontalSpacing}px` : null,
                        }}
                    >
                        {_.map(columns, (column, index) => {
                            return (
                                <PageDetailsColumn
                                    column={column}
                                    columnProps={columnProps}
                                    data={data}
                                    key={`pageDetailsColumn-${pageDetailsColumnKeyNum++}`}
                                />
                            );
                        })}
                    </div>
                </InfoBar>
            </div>
        );
    }
}

PageDetails.defaultProps = {
    bleed: true,
};

PageDetails.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]),
    columnProps: PropTypes.object,
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    style: PropTypes.object,
};

export default PageDetails;
