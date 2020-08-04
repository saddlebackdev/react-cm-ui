import { isNumber } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../../utils/utils';

const alignEnums = ['stretch'];
const columnEnums = ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const floatedEnums = ['left', 'right'];
const textAlignEnums = ['center', 'left', 'right'];
const verticalAlignEnums = ['bottom', 'middle', 'top'];

const propTypes = {
    align: PropTypes.oneOf(alignEnums),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    desktop: PropTypes.oneOf(columnEnums),
    desktopLarge: PropTypes.oneOf(columnEnums),
    fieldType: PropTypes.oneOf(['checkbox', 'legend', 'radio']),
    floated: PropTypes.oneOf(floatedEnums),
    id: PropTypes.string,
    laptop: PropTypes.oneOf(columnEnums),
    mobile: PropTypes.oneOf(columnEnums),
    mobileLarge: PropTypes.oneOf(columnEnums),
    mobileMedium: PropTypes.oneOf(columnEnums),
    style: PropTypes.shape({}),
    tablet: PropTypes.oneOf(columnEnums),
    textAlign: PropTypes.oneOf(textAlignEnums),
    verticalAlign: PropTypes.oneOf(verticalAlignEnums),
    width: PropTypes.oneOf(columnEnums),
};

const defaultProps = {
    align: undefined,
    className: undefined,
    desktop: undefined,
    desktopLarge: undefined,
    fieldType: undefined,
    floated: undefined,
    id: undefined,
    laptop: undefined,
    mobile: undefined,
    mobileLarge: undefined,
    mobileMedium: undefined,
    style: {},
    tablet: undefined,
    textAlign: undefined,
    verticalAlign: undefined,
    width: undefined,
};

const GridColumn = React.forwardRef((props, ref) => {
    const {
        align,
        children,
        className,
        desktop,
        desktopLarge,
        fieldType,
        floated,
        id,
        laptop,
        mobile,
        mobileLarge,
        mobileMedium,
        style,
        tablet,
        textAlign,
        verticalAlign,
        width,
    } = props;
    const colPrefix = 'grid-col';

    const containerClasses = ClassNames('ui', colPrefix, className, {
        [`${colPrefix}-desktop-${Utils.numberToWord(desktop)}`]: isNumber(desktop),
        [`${colPrefix}-desktop-${Utils.numberToWord(desktopLarge)}`]: isNumber(desktopLarge),
        [`${colPrefix}-laptop-${Utils.numberToWord(laptop)}`]: isNumber(laptop),
        [`${colPrefix}-mobile-${Utils.numberToWord(mobile)}`]: isNumber(mobile),
        [`${colPrefix}-mobile-large-${Utils.numberToWord(mobileLarge)}`]: isNumber(mobileLarge),
        [`${colPrefix}-mobile-medium-${Utils.numberToWord(mobileMedium)}`]: isNumber(mobileMedium),
        [`${colPrefix}-tablet-${Utils.numberToWord(tablet)}`]: isNumber(tablet),
        [`${colPrefix}-${Utils.numberToWord(width)}`]: isNumber(width),
        [`${colPrefix}-desktop-auto`]: desktop === 'auto',
        [`${colPrefix}-desktop-large-auto`]: desktopLarge === 'auto',
        [`${colPrefix}-laptop-auto`]: laptop === 'auto',
        [`${colPrefix}-mobile-auto`]: mobile === 'auto',
        [`${colPrefix}-mobile-large-auto`]: mobileLarge === 'auto',
        [`${colPrefix}-mobile-medium-auto`]: mobileMedium === 'auto',
        [`${colPrefix}-tablet-auto`]: tablet === 'auto',
        [`${colPrefix}-auto`]: width === 'auto',
        'grid-col-floated-left': floated === 'left',
        'grid-col-floated-right': floated === 'right',
        'grid-col-align-stretch': align === 'stretch',
        'grid-col-text-align-center': textAlign === 'center',
        'grid-col-text-align-left': textAlign === 'left',
        'grid-col-text-align-right': textAlign === 'right',
        'grid-col-vertical-align-bottom': verticalAlign === 'bottom',
        'grid-col-vertical-align-center': verticalAlign === 'center',
        'grid-col-vertical-align-top': verticalAlign === 'top',
        'grid-col-form_field_checkbox': fieldType === 'checkbox',
        'grid-col-form_field_legend': fieldType === 'legend',
        'grid-col-form_field_radio': fieldType === 'radio',
    });

    return (
        <div
            className={containerClasses}
            id={id}
            ref={ref}
            style={style}
        >
            {children}
        </div>
    );
});

GridColumn.propTypes = propTypes;
GridColumn.defaultProps = defaultProps;

export default GridColumn;
