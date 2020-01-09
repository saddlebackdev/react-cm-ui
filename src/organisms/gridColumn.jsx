
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Utils from '../global/utils';

class GridColumn extends Component {
    render() {
        const {
            align, className, desktop, desktopLarge,
            floated, laptop, mobile,
            mobileLarge, mobileMedium, style,
            tablet, textAlign, verticalAlign, width,
        } = this.props;
        const colPrefix = 'grid-col';
        const containerClasses = ClassNames(
            'ui',
            'grid-col',
            _.isNumber(width) ? `${colPrefix}-${Utils.numberToWord(width)}` : width === 'auto' ? `${colPrefix}-auto` : null,
            _.isNumber(mobile) ? `${colPrefix}-mobile-${Utils.numberToWord(mobile)}` : mobile === 'auto' ? `${colPrefix}-mobile-auto` : null,
            _.isNumber(mobileMedium) ? `${colPrefix}-mobile-medium-${Utils.numberToWord(mobileMedium)}` : mobileMedium === 'auto' ? `${colPrefix}-mobile-medium-auto` : null,
            _.isNumber(mobileLarge) ? `${colPrefix}-mobile-large-${Utils.numberToWord(mobileLarge)}` : mobileLarge === 'auto' ? `${colPrefix}-mobile-large-auto` : null,
            _.isNumber(tablet) ? `${colPrefix}-tablet-${Utils.numberToWord(tablet)}` : tablet === 'auto' ? `${colPrefix}-tablet-auto` : null,
            _.isNumber(laptop) ? `${colPrefix}-laptop-${Utils.numberToWord(laptop)}` : laptop === 'auto' ? `${colPrefix}-laptop-auto` : null,
            _.isNumber(desktop) ? `${colPrefix}-desktop-${Utils.numberToWord(desktop)}` : desktop === 'auto' ? `${colPrefix}-desktop-auto` : null,
            _.isNumber(desktopLarge) ? `${colPrefix}-desktop-${Utils.numberToWord(desktopLarge)}` : desktopLarge === 'auto' ? `${colPrefix}-desktop-auto` : null, {
                'grid-col-floated-left': floated === 'left',
                'grid-col-floated-right': floated === 'right',
                'grid-col-align-stretch': align === 'stretch',
                'grid-col-text-align-center': textAlign === 'center',
                'grid-col-text-align-left': textAlign === 'left',
                'grid-col-text-align-right': textAlign === 'right',
                'grid-col-vertical-align-bottom': verticalAlign === 'bottom',
                'grid-col-vertical-align-center': verticalAlign === 'center',
                'grid-col-vertical-align-top': verticalAlign === 'top',
            },
            className,
        );

        return (
            <div className={containerClasses} style={style}>
                {this.props.children}
            </div>
        );
    }
}

const alignEnums = ['stretch'];
const columnEnums = ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const floatedEnums = ['left', 'right'];
const onlyEnums = ['desktop', 'desktopLarge', 'laptop', 'mobile', 'mobileLarge', 'mobileMedium', 'tablet'];
const textAlignEnums = ['center', 'left', 'right'];
const verticalAlignEnums = ['bottom', 'middle', 'top'];

GridColumn.propTypes = {
    align: PropTypes.oneOf(alignEnums),
    className: PropTypes.string,
    desktop: PropTypes.oneOf(columnEnums),
    desktopLarge: PropTypes.oneOf(columnEnums),
    floated: PropTypes.oneOf(floatedEnums),
    laptop: PropTypes.oneOf(columnEnums),
    mobile: PropTypes.oneOf(columnEnums),
    mobileLarge: PropTypes.oneOf(columnEnums),
    mobileMedium: PropTypes.oneOf(columnEnums),
    only: PropTypes.oneOf(onlyEnums),
    style: PropTypes.object,
    tablet: PropTypes.oneOf(columnEnums),
    textAlign: PropTypes.oneOf(textAlignEnums),
    verticalAlign: PropTypes.oneOf(verticalAlignEnums),
    width: PropTypes.oneOf(columnEnums),
};

export default GridColumn;
