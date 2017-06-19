'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import React, { Component } from 'react';

import Utils from '../utils/Utils.js';

class TableHeaderCell extends Component {

    render() {
        const { className, collapsing, desktop, desktopLarge, laptop, mobile, mobileLarge, mobileMedium, onClick, style, tablet, textAlign, width } = this.props;
        const cellPrefix = 'table-header-cell';
        const containerClasses = ClassNames(
            'ui',
            'table-header-cell',
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
                'table-header-cell-clickable': onClick,
                'table-cell-collapsing': collapsing,
                'table-header-cell-text-align-center': textAlign === 'center',
                'table-header-cell-text-align-left': textAlign === 'left',
                'table-header-cell-text-align-right': textAlign === 'right'
            },
            className
        );

        return (
            <th className={containerClasses} onClick={this._onClick.bind(this)} style={style}>
                <span>{this.props.children}</span>
            </th>
        );
    }

    _onClick() {
        if (_.isFunction(this.props.onClick)) {
            this.props.onClick();
        }
    }

}

const columnNumberEnums = [ 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
const textAlignEnums = [ 'center', 'left', 'right' ];

TableHeaderCell.propTypes = {
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
    onClick: React.PropTypes.func,
    style: React.PropTypes.object,
    tablet: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(columnNumberEnums)
    ]),
    textAlign: React.PropTypes.oneOf(textAlignEnums),
    width: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.oneOf(columnNumberEnums)
    ]),
};

export default TableHeaderCell;
