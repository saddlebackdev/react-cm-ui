'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Utils from '../utils/Utils.js';

class GridRow extends Component {

    render() {
        const { className, columns, horizontalAlign, stressed, style, textAlign, verticalAlign } = this.props;
        const containerClasses = ClassNames(
            'ui',
            'grid-row',
            columns ? `grid-row-columns-${Utils.numberToWord(columns)}` : null, {
                'grid-row-horizontal-center': horizontalAlign === 'center',
                'grid-row-horizontal-left': horizontalAlign === 'left',
                'grid-row-horizontal-right': horizontalAlign === 'right',
                'grid-row-stressed': stressed,
                'grid-row-text-align-center': textAlign === 'center',
                'grid-row-text-align-left': textAlign === 'left',
                'grid-row-text-align-right': textAlign === 'right',
                'grid-row-vertical-bottom': verticalAlign === 'bottom',
                'grid-row-vertical-middle': verticalAlign === 'middle',
                'grid-row-vertical-top': verticalAlign === 'top'
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

const columnNumberEnums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
const xAlignEnums = [ 'center', 'left', 'right' ];
const verticalAlignEnums = [ 'bottom', 'middle', 'top' ];

GridRow.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.oneOf(columnNumberEnums),
    horizontalAlign: PropTypes.oneOf(xAlignEnums),
    stressed: PropTypes.bool,
    style: PropTypes.object,
    textAlign: PropTypes.oneOf(xAlignEnums),
    verticalAlign: PropTypes.oneOf(verticalAlignEnums)
};

export default GridRow;
