'use strict';

import 'Collections//Collections/TableCell.scss';

import ClassNames from 'classnames';
import React from 'react';

import UIUtils from 'utils/Utils.js';

export default class TableCell extends React.Component {

    render() {
        const { active, className, collapsing,
            desktop, desktopLarge, disabled,
            fontSize, mobile, mobileMedium,
            mobileLarge, laptop, selectable,
            singleLine, style, tablet,
            textAlign, verticalAlign, width } = this.props;
        const cellPrefix = 'table-cell';
        const containerClasses = ClassNames(
            'ui',
            'table-cell',
            _.isNumber(width) ?
                    `${cellPrefix}-${UIUtils.numberToWord(width)}` :
                width === true || width === 'auto' ?
                    `${cellPrefix}-show` :
                width === false ?
                    `${cellPrefix}-hide` :
                null,
            _.isNumber(mobile) ?
                    `${cellPrefix}-mobile-${UIUtils.numberToWord(mobile)}` :
                mobile === true || mobile === 'auto' ?
                    `${cellPrefix}-mobile-show` :
                mobile === false ?
                    `${cellPrefix}-mobile-hide` :
                null,
            _.isNumber(mobileMedium) ?
                    `${cellPrefix}-mobile-medium-${UIUtils.numberToWord(mobileMedium)}` :
                mobileMedium === true || mobileMedium === 'auto' ?
                    `${cellPrefix}-mobile-medium-show` :
                mobileMedium === false ?
                    `${cellPrefix}-mobile-medium-hide` :
                null,
            _.isNumber(mobileLarge) ?
                    `${cellPrefix}-mobile-large-${UIUtils.numberToWord(mobileLarge)}` :
                mobileLarge === true || mobileLarge === 'auto' ?
                    `${cellPrefix}-mobile-large-show` :
                mobileLarge === false ?
                    `${cellPrefix}-mobile-large-hide` :
                null,
            _.isNumber(tablet) ?
                    `${cellPrefix}-tablet-${UIUtils.numberToWord(tablet)}` :
                tablet === true || tablet === 'auto' ?
                    `${cellPrefix}-tablet-show` :
                tablet === false ?
                    `${cellPrefix}-tablet-hide` :
                null,
            _.isNumber(laptop) ?
                    `${cellPrefix}-laptop-${UIUtils.numberToWord(laptop)}` :
                laptop === true || laptop === 'auto' ?
                    `${cellPrefix}-laptop-show` :
                laptop === false ?
                    `${cellPrefix}-laptop-hide` :
                null,
            _.isNumber(desktop) ?
                    `${cellPrefix}-desktop-${UIUtils.numberToWord(desktop)}` :
                desktop === true || desktop === 'auto' ?
                    `${cellPrefix}-desktop-show` :
                desktop === false ?
                    `${cellPrefix}-desktop-hide` :
                null,
            _.isNumber(desktopLarge) ?
                    `${cellPrefix}-desktop-${UIUtils.numberToWord(desktopLarge)}` :
                desktopLarge === true || desktopLarge === 'auto' ?
                    `${cellPrefix}-desktop-show` :
                desktopLarge === false ?
                    `${cellPrefix}-desktop-hide` :
                null,
            {
                'table-cell-active': active,
                'table-cell-collapsing': collapsing,
                'table-cell-disabled': disabled,
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
                'table-cell-vertical-align-top': verticalAlign === 'top'
            },
            className
        );

        return (
            <td className={containerClasses} style={style}>
                {this.props.children}
            </td>
        );
    }

}

const columnNumberEnums = [ 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
const fontSizeEnums = [ 'large', 'medium', 'small', 'xsmall' ];
const textAlignEnums = [ 'center', 'left', 'right' ];
const verticalAlignEnums = [ 'bottom', 'middle', 'top' ];

TableCell.propTypes = {
    active: React.PropTypes.bool,
    className: React.PropTypes.string,
    collapsing: React.PropTypes.bool,
    desktop: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(columnNumberEnums)
    ]),
    desktopLarge: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(columnNumberEnums)
    ]),
    disabled: React.PropTypes.bool,
    fontSize: React.PropTypes.oneOf(fontSizeEnums),
    laptop: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(columnNumberEnums)
    ]),
    mobile: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(columnNumberEnums)
    ]),
    mobileLarge: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(columnNumberEnums)
    ]),
    mobileMedium: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(columnNumberEnums)
    ]),
    selectable: React.PropTypes.bool,
    singleLine: React.PropTypes.bool,
    style: React.PropTypes.object,
    tablet: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(columnNumberEnums)
    ]),
    textAlign: React.PropTypes.oneOf(textAlignEnums),
    verticalAlign: React.PropTypes.oneOf(verticalAlignEnums),
    width: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(columnNumberEnums)
    ]),
};
