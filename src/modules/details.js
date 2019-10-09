import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../elements/button.js';
import Header from '../elements/header.js';
import Icon from '../elements/icon.js';
import InfoBar from '../views/infoBar.js';

const columnPropTypesShape = PropTypes.shape({
    accessor: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    divide: PropTypes.bool,
    flexBasis: PropTypes.string,
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    fontSize: PropTypes.oneOf(['large', 'medium', 'small']),
    fontWeight: PropTypes.oneOf(['bold', 'normal', 'semibold']),
    header: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
});
const columnPropsPropTypesShape = PropTypes.shape({
    horizontalSpacing: PropTypes.number,
});

function ColumnContainer(props) {
    const {
        column: {
            accessor,
            divide,
            flexBasis,
            flexGrow,
            flexShrink,
            fontSize,
            fontWeight,
            header,
            style,
            width,
        },
        columnNumber,
        columnProps,
        data,
        moduleType,
    } = props;
    const containerClasses = ClassNames(`${moduleType}--details-column${columnNumber ? '-inner' : ''}`, {
        'divide-left': divide || divide === 'left',
        'divide-right': divide === 'right',
    });
    const accessorClasses = ClassNames(`${moduleType}--details-column-accessor`, {
        'font-size-large': fontSize === 'large',
        'font-size-medium': fontSize === 'medium',
        'font-size-small': !fontSize || fontSize === 'small',
        'font-weight-bold': !fontWeight || fontWeight === 'bold',
        'font-weight-normal': fontWeight === 'normal',
        'font-weight-semibold': fontWeight === 'semibold',
    });
    let horizontalSpacing;

    if (columnProps) {
        horizontalSpacing = columnProps.horizontalSpacing;
    }

    let newAccessor;
    let flexBasisInlineStyleValue;
    let flexGrowInlineStyleValue;
    let flexShrinkInlineStyleValue;
    let horizontalSpacingInlineStyleValue;

    if (_.isString(accessor)) {
        newAccessor = _.get(data, accessor);
    } else if (_.isFunction(accessor)) {
        newAccessor = accessor(data);
    }

    if (columnNumber) {
        flexBasisInlineStyleValue = flexBasis || 'auto';
        flexGrowInlineStyleValue = flexGrow || 0;
        flexShrinkInlineStyleValue = flexShrink || 0;
        horizontalSpacingInlineStyleValue = horizontalSpacing ?
            `${horizontalSpacing}px` :
            null;
    }

    return (
        <div
            className={containerClasses}
            style={({
                flexBasis: flexBasisInlineStyleValue,
                flexGrow: flexGrowInlineStyleValue,
                flexShrink: flexShrinkInlineStyleValue,
                paddingLeft: horizontalSpacingInlineStyleValue,
                paddingRight: horizontalSpacingInlineStyleValue,
                width: `${width}`,
                ...style,
            })}
        >
            {header && (
                <Header size="xsmall" style={{ margin: 0 }}>
                    {header}
                </Header>
            )}

            <div className={accessorClasses}>
                {newAccessor}
            </div>
        </div>
    );
}

ColumnContainer.propTypes = {
    column: columnPropTypesShape.isRequired,
    columnNumber: PropTypes.number,
    columnProps: columnPropsPropTypesShape,
    data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    moduleType: PropTypes.string,
};

ColumnContainer.defaultProps = {
    columnNumber: undefined,
    columnProps: undefined,
    moduleType: undefined,
};

function DetailsColumn(props) {
    const {
        column,
        column: {
            accessor,
            columns,
            divide: isDivided,
            flexBasis,
            flexGrow,
            flexShrink,
            style,
            width,
        },
        columnProps,
        data,
        moduleType,
    } = props;
    let horizontalSpacing;

    if (columnProps) {
        horizontalSpacing = columnProps.horizontalSpacing;
    }

    if (!accessor && columns && _.isArray(columns)) {
        const containerClasses = ClassNames(`${moduleType}--details-column`, {
            divide: isDivided,
        });
        let innerColumnKeyNum = 1;

        return (
            <div
                className={containerClasses}
                style={({
                    flexBasis: flexBasis || 'auto',
                    flexGrow: flexGrow || 0,
                    flexShrink: flexShrink || 0,
                    paddingLeft: horizontalSpacing ? `${horizontalSpacing}px` : null,
                    paddingRight: horizontalSpacing ? `${horizontalSpacing}px` : null,
                    width: `${width}`,
                    ...style,
                })}
            >
                {_.map(columns, (innerColumn) => {
                    innerColumnKeyNum += 1;

                    return (
                        <ColumnContainer
                            column={innerColumn}
                            columnNumber={innerColumnKeyNum}
                            columnProps={columnProps}
                            data={data}
                            key={innerColumnKeyNum}
                            moduleType={moduleType}
                        />
                    );
                })}
            </div>
        );
    }

    return (
        <ColumnContainer
            column={column}
            data={data}
            moduleType={moduleType}
        />
    );
}

DetailsColumn.propTypes = {
    column: PropTypes.oneOfType([
        PropTypes.arrayOf(columnPropTypesShape),
        columnPropTypesShape,
    ]).isRequired,
    columnProps: columnPropsPropTypesShape,
    data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    moduleType: PropTypes.string,
};

DetailsColumn.defaultProps = {
    columnProps: undefined,
    moduleType: undefined,
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
        this.setState((prevState) => ({
            isInfoBarExpanded: !prevState.isInfoBarExpanded,
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
            detailedColumns,
            style,
            moduleType,
        } = this.props;
        const { isInfoBarExpanded } = this.state;
        const hasDetailedColumns = !_.isEmpty(detailedColumns);
        const newColumns = isInfoBarExpanded && hasDetailedColumns ? detailedColumns : columns;
        const containerClasses = ClassNames('ui', `${moduleType}--details`, className, {
            'page--details-bleed': bleed && moduleType === 'page',
            'drawer--details-bleed': bleed && moduleType === 'drawer',
        });

        let detailsColumnKeyNum = 1;
        let horizontalSpacing;

        if (columnProps) {
            horizontalSpacing = columnProps.horizontalSpacing;
        }

        return (
            <div
                className={containerClasses}
                style={style}
            >
                <InfoBar color={color}>
                    <div
                        className={`${moduleType}--details-columns-container`}
                        style={{
                            marginLeft: horizontalSpacing ? `-${horizontalSpacing}px` : null,
                            marginRight: horizontalSpacing ? `-${horizontalSpacing}px` : null,
                        }}
                    >
                        {_.map(newColumns, (column) => {
                            detailsColumnKeyNum += 1;

                            return (
                                <DetailsColumn
                                    column={column}
                                    columnProps={columnProps}
                                    data={data}
                                    key={`${moduleType}DetailsColumn-${detailsColumnKeyNum}`}
                                    moduleType={moduleType}
                                />
                            );
                        })}
                    </div>

                    {hasDetailedColumns && (
                        <Button
                            color="light"
                            icon
                            id={`${moduleType}--details_expand_toggle_button`}
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
                    )}
                </InfoBar>
            </div>
        );
    }
}

Details.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    columnProps: columnPropsPropTypesShape,
    columns: PropTypes.arrayOf(columnPropTypesShape).isRequired,
    data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    detailedColumns: PropTypes.arrayOf(columnPropTypesShape),
    moduleType: PropTypes.string,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Details.defaultProps = {
    bleed: true,
    className: undefined,
    color: undefined,
    columnProps: undefined,
    detailedColumns: undefined,
    moduleType: undefined,
    style: {},
};

export default Details;
