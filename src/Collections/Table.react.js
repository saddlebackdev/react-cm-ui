'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TableBody from './TableBody.react';
import TableCell from './TableCell.react';
import TableHeader from './TableHeader.react';
import TableHeaderCell from './TableHeaderCell.react';
import TableRow from './TableRow.react';

import Utils from '../utils/Utils.js';

class Table extends Component {

    render() {
        const { basic, celled, className,
            collapsing, definition, fixed, fontSize, fullWidth, selectable, singleLine, stretch, style, stackable, striped } = this.props;
        const containerClasses = ClassNames(
            'ui',
            'table', {
                'table-basic': basic,
                'table-celled': celled,
                'table-collapsing': collapsing,
                'table-definition': definition,
                'table-fixed': fixed,
                'table-font-size-large': fontSize === 'large',
                'table-font-size-medium': fontSize === 'medium',
                'table-font-size-small': fontSize === 'small',
                'table-font-size-xlarge': fontSize === 'xlarge',
                'table-font-size-xsmall': fontSize === 'xsmall',
                'table-font-size-xxsmall': fontSize === 'xxsmall',
                'table-full-width': fullWidth,
                'table-selectable': selectable,
                'table-single-line': singleLine,
                'table-stretch': stretch && stretch !== 'very',
                'table-stretch-very': stretch === 'very',
                'table-striped': striped,
                'table-stackable': stackable,
                'table-unstackable': stackable === false
            },
            className
        );

        return (
            <table className={containerClasses} style={style}>
                {this.props.children}
            </table>
        );
    }

}

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;

const colorEnums = [ 'bottom', 'middle', 'top' ];

Table.propTypes = {
    basic: PropTypes.bool,
    celled: PropTypes.bool,
    className: PropTypes.string,
    collapsing: PropTypes.bool,
    color: PropTypes.oneOf(colorEnums),
    definition: PropTypes.bool,
    fixed: PropTypes.bool,
    fontSize: PropTypes.oneOf(Utils.sizeEnums()),
    fullWidth: PropTypes.bool,
    selectable: PropTypes.bool,
    singleLine: PropTypes.bool,
    stackable: PropTypes.bool,
    stretch: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['very'])
    ]),
    striped: PropTypes.bool,
    style: PropTypes.object
};

export default Table;
