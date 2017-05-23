'use strict';

import ClassNames from 'classnames';
import React from 'react';

import UIUtils from 'utils/UI/Utils.js';

export default class GridColumn extends React.Component {

    render() {
        const { align, className, desktop, desktopLarge,
            floated, laptop, mobile,
            mobileLarge, mobileMedium, style,
            tablet, textAlign, verticalAlign, width } = this.props;
        const colPrefix = 'grid-col';
        const containerClasses = ClassNames(
            'ui',
            'grid-col',
            _.isNumber(width) ? `${colPrefix}-${UIUtils.numberToWord(width)}` : width === 'auto' ? `${colPrefix}-auto` : null,
            _.isNumber(mobile) ? `${colPrefix}-mobile-${UIUtils.numberToWord(mobile)}` : mobile === 'auto' ? `${colPrefix}-mobile-auto` : null,
            _.isNumber(mobileMedium) ? `${colPrefix}-mobile-medium-${UIUtils.numberToWord(mobileMedium)}` : mobileMedium === 'auto' ? `${colPrefix}-mobile-medium-auto` : null,
            _.isNumber(mobileLarge) ? `${colPrefix}-mobile-large-${UIUtils.numberToWord(mobileLarge)}` : mobileLarge === 'auto' ? `${colPrefix}-mobile-large-auto` : null,
            _.isNumber(tablet) ? `${colPrefix}-tablet-${UIUtils.numberToWord(tablet)}` : tablet === 'auto' ? `${colPrefix}-tablet-auto` : null,
            _.isNumber(laptop) ? `${colPrefix}-laptop-${UIUtils.numberToWord(laptop)}` : laptop === 'auto' ? `${colPrefix}-laptop-auto` : null,
            _.isNumber(desktop) ? `${colPrefix}-desktop-${UIUtils.numberToWord(desktop)}` : desktop === 'auto' ? `${colPrefix}-desktop-auto` : null,
            _.isNumber(desktopLarge) ? `${colPrefix}-desktop-${UIUtils.numberToWord(desktopLarge)}` : desktopLarge === 'auto' ? `${colPrefix}-desktop-auto` : null, {
                'grid-col-floated-left': floated === 'left',
                'grid-col-floated-right': floated === 'right',
                'grid-col-align-stretch': align === 'stretch',
                'grid-col-text-align-center': textAlign === 'center',
                'grid-col-text-align-left': textAlign === 'left',
                'grid-col-text-align-right': textAlign === 'right',
                'grid-col-vertical-align-bottom': verticalAlign === 'bottom',
                'grid-col-vertical-align-center': verticalAlign === 'center',
                'grid-col-vertical-align-top': verticalAlign === 'top'
            },
            className
        );

        return (
            <div className={containerClasses} style={style}>
                {this.props.children}
            </div>
        );
    }

}

const alignEnums = [ 'stretch' ];
const columnEnums = [ 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
const floatedEnums = [ 'left', 'right' ];
const onlyEnums = [ 'desktop', 'desktopLarge', 'laptop', 'mobile', 'mobileLarge', 'mobileMedium', 'tablet'];
const textAlignEnums = [ 'center', 'left', 'right' ];
const verticalAlignEnums = [ 'bottom', 'center', 'top' ];

GridColumn.propTypes = {
    align: React.PropTypes.oneOf(alignEnums),
    className: React.PropTypes.string,
    desktop: React.PropTypes.oneOf(columnEnums),
    desktopLarge: React.PropTypes.oneOf(columnEnums),
    floated: React.PropTypes.oneOf(floatedEnums),
    laptop: React.PropTypes.oneOf(columnEnums),
    mobile: React.PropTypes.oneOf(columnEnums),
    mobileLarge: React.PropTypes.oneOf(columnEnums),
    mobileMedium: React.PropTypes.oneOf(columnEnums),
    only: React.PropTypes.oneOf(onlyEnums),
    style: React.PropTypes.object,
    tablet: React.PropTypes.oneOf(columnEnums),
    textAlign: React.PropTypes.oneOf(textAlignEnums),
    verticalAlign: React.PropTypes.oneOf(verticalAlignEnums),
    width: React.PropTypes.oneOf(columnEnums)
};
