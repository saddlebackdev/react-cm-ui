'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Utils from '../utils/Utils.js';

class TableRow extends Component {

    constructor(props) {
        super(props);

        this.state = { selected: props.selected }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.setState({ selected: nextProps.selected });
        }
    }

    render() {
        const { active, className, disabled,
            fontSize, onClick, style,
            textAlign, verticalAlign } = this.props;
        const containerClasses = ClassNames(
            'table-row',
            {
                'table-row-active': active,
                'table-row-disabled': disabled,
                'table-row-clickable': onClick,
                'table-row-font-size-large': fontSize === 'large',
                'table-row-font-size-medium': fontSize === 'medium',
                'table-row-font-size-small': fontSize === 'small',
                'table-row-font-size-xlarge': fontSize === 'xlarge',
                'table-row-font-size-xsmall': fontSize === 'xsmall',
                'table-row-font-size-xxsmall': fontSize === 'xxsmall',
                'table-row-selected': this.state.selected,
                'table-row-text-align-center': textAlign === 'center',
                'table-row-text-align-left': textAlign === 'left',
                'table-row-text-align-right': textAlign === 'right',
                'table-row-vertical-align-bottom': verticalAlign === 'bottom',
                'table-row-vertical-align-middle': verticalAlign === 'middle',
                'table-row-vertical-align-top': verticalAlign === 'top'
            },
            className
        );

        return (
            <tr
                className={containerClasses}
                onClick={this._onClick.bind(this)}
                style={style}
            >
                {this.props.children}
            </tr>
        );
    }

    _onClick() {
        if (_.isFunction(this.props.onClick)) {
            this.props.onClick();
        }
    }

}

const textAlignEnums = [ 'center', 'left', 'right' ];
const verticalAlignEnums = [ 'bottom', 'middle', 'top' ];

TableRow.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fontSize: PropTypes.oneOf(Utils.sizeEnums()),
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    style: PropTypes.object,
    textAlign: PropTypes.oneOf(textAlignEnums),
    verticalAlign: PropTypes.oneOf(verticalAlignEnums)
};

export default TableRow;
