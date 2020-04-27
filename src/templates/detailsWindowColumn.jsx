import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { columnPropTypesShape, columnPropsPropTypesShape } from './detailsWindowPropTypes';
import Button from '../inputs/button';
import Header from '../atoms/header';
import Icon from '../dataDisplay/icon';

const propTypes = {
    column: columnPropTypesShape.isRequired,
    columnNumber: PropTypes.number,
    columnProps: columnPropsPropTypesShape,
    data: PropTypes.shape({}).isRequired,
    isExpanded: PropTypes.bool,
    onExpandButtonToggle: PropTypes.func,
    moduleType: PropTypes.string,
    setColumnContainerHeight: PropTypes.func,
};

const defaultProps = {
    columnNumber: undefined,
    columnProps: undefined,
    isExpanded: false,
    moduleType: undefined,
    onExpandButtonToggle: undefined,
    setColumnContainerHeight: undefined,
};

const nop = () => {};

class DetailsWindowColumn extends React.PureComponent {
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
        const bemClassName = `${moduleType}--details_window_column`;
        const containerClassName = `${bemClassName}${columnNumber ? '_inner' : ''}`;
        const containerClasses = ClassNames(
            containerClassName,
            {
                [`${containerClassName}-divide_left`]: divide === true || divide === 'left',
                [`${containerClassName}-divide_right`]: divide === 'right',
            },
        );
        const accessorClasses = ClassNames(`${bemClassName}_accessor`, {
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

        let accessedData;
        let flexBasisInlineStyleValue;
        let flexGrowInlineStyleValue;
        let flexShrinkInlineStyleValue;
        let horizontalSpacingInlineStyleValue;

        if (_.isString(accessor)) {
            accessedData = _.get(data, accessor);
        } else if (_.isFunction(accessor)) {
            accessedData = accessor(data);
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
                        className={`${bemClassName}_expandable_toggle_button`}
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
                    {accessedData}
                </div>
            </div>
        );
    }
}

DetailsWindowColumn.propTypes = propTypes;
DetailsWindowColumn.defaultProps = defaultProps;

export default DetailsWindowColumn;
