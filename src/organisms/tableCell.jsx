
import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Utils from '../global/utils';

class TableCell extends Component {
    render() {
        const {
            active,
            className,
            collapsing,
            desktop,
            desktopLarge,
            disabled,
            fontSize,
            id,
            mobile,
            mobileMedium,
            mobileLarge,
            laptop,
            selectable,
            singleLine,
            style,
            tablet,
            textAlign,
            verticalAlign,
            width,
        } = this.props;
        const cellPrefix = 'table-cell';
        const containerClasses = ClassNames(
            'table-cell',
            _.isNumber(width) ?
                `${cellPrefix}-${Utils.numberToWord(width)}` :
                width === true || width === 'auto' ?
                    `${cellPrefix}-show` :
                    width === false ?
                        `${cellPrefix}-hide` :
                        null,
            _.isNumber(mobile) ?
                `${cellPrefix}-mobile-${Utils.numberToWord(mobile)}` :
                mobile === true || mobile === 'auto' ?
                    `${cellPrefix}-mobile-show` :
                    mobile === false ?
                        `${cellPrefix}-mobile-hide` :
                        null,
            _.isNumber(mobileMedium) ?
                `${cellPrefix}-mobile-medium-${Utils.numberToWord(mobileMedium)}` :
                mobileMedium === true || mobileMedium === 'auto' ?
                    `${cellPrefix}-mobile-medium-show` :
                    mobileMedium === false ?
                        `${cellPrefix}-mobile-medium-hide` :
                        null,
            _.isNumber(mobileLarge) ?
                `${cellPrefix}-mobile-large-${Utils.numberToWord(mobileLarge)}` :
                mobileLarge === true || mobileLarge === 'auto' ?
                    `${cellPrefix}-mobile-large-show` :
                    mobileLarge === false ?
                        `${cellPrefix}-mobile-large-hide` :
                        null,
            _.isNumber(tablet) ?
                `${cellPrefix}-tablet-${Utils.numberToWord(tablet)}` :
                tablet === true || tablet === 'auto' ?
                    `${cellPrefix}-tablet-show` :
                    tablet === false ?
                        `${cellPrefix}-tablet-hide` :
                        null,
            _.isNumber(laptop) ?
                `${cellPrefix}-laptop-${Utils.numberToWord(laptop)}` :
                laptop === true || laptop === 'auto' ?
                    `${cellPrefix}-laptop-show` :
                    laptop === false ?
                        `${cellPrefix}-laptop-hide` :
                        null,
            _.isNumber(desktop) ?
                `${cellPrefix}-desktop-${Utils.numberToWord(desktop)}` :
                desktop === true || desktop === 'auto' ?
                    `${cellPrefix}-desktop-show` :
                    desktop === false ?
                        `${cellPrefix}-desktop-hide` :
                        null,
            _.isNumber(desktopLarge) ?
                `${cellPrefix}-desktop-${Utils.numberToWord(desktopLarge)}` :
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
                'table-cell-vertical-align-top': verticalAlign === 'top',
            },
            className,
        );

        return (
            <td
                className={containerClasses}
                id={id}
                style={style}
            >
                {this.props.children}
            </td>
        );
    }
}

const columnNumberEnums = ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const fontSizeEnums = ['large', 'medium', 'small', 'xsmall'];
const textAlignEnums = ['center', 'left', 'right'];
const verticalAlignEnums = ['bottom', 'middle', 'top'];

TableCell.propTypes = {
    active: PropTypes.bool,
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
    disabled: PropTypes.bool,
    fontSize: PropTypes.oneOf(fontSizeEnums),
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
    style: PropTypes.shape({}),
    tablet: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
    textAlign: PropTypes.oneOf(textAlignEnums),
    verticalAlign: PropTypes.oneOf(verticalAlignEnums),
    width: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(columnNumberEnums),
    ]),
};

export default TableCell;
