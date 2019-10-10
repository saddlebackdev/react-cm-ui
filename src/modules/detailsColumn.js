import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../elements/button.js';
import Header from '../elements/header.js';
import Icon from '../elements/icon.js';

const nop = () => {};

const columnPropTypesShape = PropTypes.shape({
    accessor: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
    ]),
    divide: PropTypes.bool,
    expandedButton: PropTypes.bool,
    expandedButtonId: PropTypes.string,
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

class DetailsColumn extends React.PureComponent {
    componentDidMount() {
        const { setColumnContainerHeight } = this.props;

        if (this.columnRef && _.isFunction(setColumnContainerHeight)) {
            setColumnContainerHeight(this.columnRef.offsetHeight);
        }
    }

    render() {
        const {
            column: {
                accessor,
                divide,
                expandedButton,
                expandedButtonId,
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
            isExpanded,
            onExpandButtonToggle,
            moduleType,
        } = this.props;
        const containerClasses = ClassNames(`${moduleType}_details--column${columnNumber ? '_inner' : ''}`, {
            'divide-left': divide || divide === 'left',
            'divide-right': divide === 'right',
        });
        const accessorClasses = ClassNames(`${moduleType}_details--column_accessor`, {
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
                ref={(ref) => { this.columnRef = ref; }}
            >
                {expandedButton && (
                    <Button
                        className={`${moduleType}_details--expandable_toggle_button`}
                        color="light"
                        icon
                        id={expandedButtonId}
                        onClick={onExpandButtonToggle || nop}
                        outlined
                    >
                        <Icon
                            compact
                            rotate={isExpanded ? 180 : null}
                            title={isExpanded ? 'Collapse' : 'Expand'}
                            type="chevron-down"
                        />
                    </Button>
                )}

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
}

DetailsColumn.propTypes = {
    column: columnPropTypesShape.isRequired,
    columnNumber: PropTypes.number,
    columnProps: columnPropsPropTypesShape,
    data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    isExpanded: PropTypes.bool,
    onExpandButtonToggle: PropTypes.func,
    moduleType: PropTypes.string,
    setColumnContainerHeight: PropTypes.func,
};

DetailsColumn.defaultProps = {
    columnNumber: undefined,
    columnProps: undefined,
    isExpanded: false,
    moduleType: undefined,
    onExpandButtonToggle: undefined,
    setColumnContainerHeight: undefined,
};

export default DetailsColumn;
