'use strict';

import 'Collections/Grid.scss';

import ClassNames from 'classnames';
import React from 'react';

import GridColumn from 'Collections/GridColumn.react';
import GridRow from 'Collections/GridRow.react';

import UIUtils from 'utils/Utils.js';

export default class Grid extends React.Component {

    render() {
        const { className, columns, horizontalAlign, relaxed, stressed, style, textAlign, verticalAlign } = this.props;
        const containerClasses = ClassNames(
            'ui',
            'grid',
            columns ? `grid-columns-${UIUtils.numberToWord(columns)}` : null,
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
    className: React.PropTypes.string,
    columns: React.PropTypes.oneOf(columnNumberEnums),
    horizontalAlign: React.PropTypes.oneOf(xAlignEnums),
    relaxed: React.PropTypes.bool,
    stressed: React.PropTypes.bool,
    style: React.PropTypes.object,
    textAlign: React.PropTypes.oneOf(xAlignEnums),
    verticalAlign: React.PropTypes.oneOf(yAlignEnums)
};
