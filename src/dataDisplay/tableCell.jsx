import {
    isNumber,
} from 'lodash';
import React, { useEffect } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Utils from '../utils/utils';

const columnNumberEnums = [
    'auto',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
];

const propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    collapsing: PropTypes.bool,
    desktop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    desktopLarge: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    /**
     * A TableCell can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    fontSize: PropTypes.oneOf([
        'large',
        'medium',
        'small',
        'xsmall',
    ]),
    id: PropTypes.string,
    laptop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    mobile: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    mobileLarge: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    mobileMedium: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    selectable: PropTypes.bool,
    singleLine: PropTypes.bool,
    sticky: PropTypes.bool,
    style: PropTypes.shape({}),
    tablet: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    textAlign: PropTypes.oneOf([
        'center',
        'left',
        'right',
    ]),
    verticalAlign: PropTypes.oneOf([
        'bottom',
        'middle',
        'top',
    ]),
    width: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
};

const defaultProps = {
    active: false,
    children: null,
    className: null,
    collapsing: false,
    desktop: null,
    desktopLarge: null,
    disable: false,
    disabled: false,
    fontSize: null,
    id: null,
    laptop: null,
    mobile: null,
    mobileLarge: null,
    mobileMedium: null,
    selectable: false,
    singleLine: false,
    style: null,
    tablet: null,
    textAlign: null,
    verticalAlign: null,
    width: null,
};

function TableCell(props) {
    const {
        active,
        children,
        className,
        collapsing,
        desktop,
        desktopLarge,
        disable,
        disabled,
        fontSize,
        id,
        mobile,
        mobileMedium,
        mobileLarge,
        laptop,
        selectable,
        singleLine,
        sticky,
        style,
        tablet,
        textAlign,
        verticalAlign,
        width,
    } = props;

    useEffect(() => {
        if (disabled) {
            // eslint-disable-next-line no-console
            console.warn('TableCell (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }
    }, [disabled]);

    const cellPrefix = 'table-cell';

    const containerClasses = ClassNames(
        'table-cell',
        {
            'table-cell-active': active,
            'table-cell-collapsing': collapsing,
            'table-cell-disabled': disable || disabled,
            'table-cell-font-size-large': fontSize === 'large',
            'table-cell-font-size-medium': fontSize === 'medium',
            'table-cell-font-size-small': fontSize === 'small',
            'table-cell-font-size-xsmall': fontSize === 'xsmall',
            'table-cell-selectable': selectable,
            'table-cell-single-line': singleLine,
            'table-cell-text-align-center': textAlign === 'center',
            'table-cell-text-align-left': textAlign === 'left',
            'table-cell-text-align-right': textAlign === 'right',
            'table-cell-vertical-align-bottom': verticalAlign === 'bottom',
            'table-cell-vertical-align-middle': verticalAlign === 'middle',
            'table-cell-vertical-align-top': verticalAlign === 'top',
            'table-cell-sticky': sticky,
            [`${cellPrefix}-${Utils.numberToWord(width)}`]: isNumber(width),
            [`${cellPrefix}-show`]: width === true || width === 'auto',
            [`${cellPrefix}-hide`]: width === false,
            [`${cellPrefix}-mobile-${Utils.numberToWord(mobile)}`]: isNumber(mobile),
            [`${cellPrefix}-mobile-show`]: mobile === true || mobile === 'auto',
            [`${cellPrefix}-mobile-hide`]: mobile === false,
            [`${cellPrefix}-mobile-medium-${Utils.numberToWord(mobileMedium)}`]: isNumber(mobileMedium),
            [`${cellPrefix}-mobile-medium-show`]: mobileMedium === true || mobileMedium === 'auto',
            [`${cellPrefix}-mobile-medium-hide`]: mobileMedium === false,
            [`${cellPrefix}-mobile-large-${Utils.numberToWord(mobileLarge)}`]: isNumber(mobileLarge),
            [`${cellPrefix}-mobile-large-show`]: mobileLarge === true || mobileLarge === 'auto',
            [`${cellPrefix}-mobile-large-hide`]: mobileLarge === false,
            [`${cellPrefix}-tablet-${Utils.numberToWord(tablet)}`]: isNumber(tablet),
            [`${cellPrefix}-tablet-show`]: tablet === true || tablet === 'auto',
            [`${cellPrefix}-tablet-hide`]: tablet === false,
            [`${cellPrefix}-laptop-${Utils.numberToWord(laptop)}`]: isNumber(laptop),
            [`${cellPrefix}-laptop-show`]: laptop === true || laptop === 'auto',
            [`${cellPrefix}-laptop-hide`]: laptop === false,
            [`${cellPrefix}-desktop-${Utils.numberToWord(desktop)}`]: isNumber(desktop),
            [`${cellPrefix}-desktop-show`]: desktop === true || desktop === 'auto',
            [`${cellPrefix}-desktop-hide`]: desktop === false,
            [`${cellPrefix}-desktop-${Utils.numberToWord(desktopLarge)}`]: isNumber(desktopLarge),
            [`${cellPrefix}-desktop-show`]: desktopLarge === true || desktopLarge === 'auto',
            [`${cellPrefix}-desktop-hide`]: desktopLarge === false,

        },
        className,
    );

    return (
        <td
            className={containerClasses}
            id={id}
            style={style}
        >
            {children}
        </td>
    );
}

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
