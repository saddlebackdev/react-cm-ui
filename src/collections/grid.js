'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import GridColumn from './gridColumn';
import GridRow from './gridRow';

import Utils from '../utils/utils.js';

class Grid extends Component {

    render() {
        const { className, columns, horizontalAlign, relaxed, stressed, style, textAlign, verticalAlign } = this.props;
        const containerClasses = ClassNames(
            'ui',
            'grid',
            columns ? `grid-columns-${Utils.numberToWord(columns)}` : null,
            {
                'grid-relaxed': relaxed,
                'grid-stressed': stressed,
                'grid-horizontal-center': horizontalAlign === 'center',
                'grid-horizontal-left': horizontalAlign === 'left',
                'grid-horizontal-right': horizontalAlign === 'right',
                'grid-text-align-center': textAlign === 'center',
                'grid-text-align-left': textAlign === 'left',
                'grid-text-align-right': textAlign === 'right',
                'grid-vertical-bottom': verticalAlign === 'bottom',
                'grid-vertical-middle': verticalAlign === 'middle',
                'grid-vertical-top': verticalAlign === 'top'
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

Grid.Column = GridColumn;
Grid.Row = GridRow;

const columnNumberEnums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
const xAlignEnums = [ 'center', 'left', 'right' ];
const yAlignEnums = [ 'bottom', 'middle', 'top' ];

Grid.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.oneOf(columnNumberEnums),
    horizontalAlign: PropTypes.oneOf(xAlignEnums),
    relaxed: PropTypes.bool,
    stressed: PropTypes.bool,
    style: PropTypes.object,
    textAlign: PropTypes.oneOf(xAlignEnums),
    verticalAlign: PropTypes.oneOf(yAlignEnums)
};

export default Grid;
