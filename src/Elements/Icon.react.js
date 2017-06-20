'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import React, { Component } from 'react';

import Utils from '../utils/Utils.js';

class Icon extends Component {

    render() {
        const { align, color, compact, disable, id, inverse, onClick, rotate, size, spin, style, type } = this.props;

        const containerClasses = ClassNames('ui', 'icon', `i-${type}`, this.props.className, {
            'icon-align-left': !align && !compact || align === 'left',
            'icon-align-right': !compact && align === 'right',
            'icon-clickable': onClick,
            'icon-color-alert': color === 'alert',
            'icon-color-warning': color === 'warning',
            'icon-color-highlight': color === 'highlight',
            'icon-color-primary': _.isUndefined(color) && !disable || color === 'primary',
            'icon-color-static': color === 'static',
            'icon-color-success': color === 'success',
            'icon-compact': compact,
            'icon-disable': disable,
            'icon-inverse': inverse,
            'icon-size-large': size === 'large',
            'icon-size-medium': size === 'medium',
            'icon-size-small': size === 'small',
            'icon-size-xlarge': size === 'xlarge',
            'icon-size-xsmall': size === 'xsmall',
            'icon-size-xxsmall': size === 'xxsmall',
            'icon-spin': spin || type === 'check-circle' // need to change type to "loader"
        });
        const containerStyle = _.merge(style, {
            transform: _.isNumber(rotate) ? `rotate(${rotate}deg)` : null
        });

        return (
            <i className={containerClasses} id={id} onClick={this._onClick.bind(this)} style={containerStyle} />
        );
    }

    _onClick() {
        if (!_.isUndefined(this.props.onClick) && !this.props.disable) {
            this.props.onClick();
        }
    }

}

const alignEnums = [ 'left', 'right' ];

Icon.propTypes = {
    align: React.PropTypes.oneOf(alignEnums),
    className: React.PropTypes.string,
    color: React.PropTypes.oneOf(Utils.colorEnums()),
    compact: React.PropTypes.bool,
    disable: React.PropTypes.bool,
    id: React.PropTypes.string,
    inverse: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    rotate: React.PropTypes.number,
    size: React.PropTypes.oneOf(Utils.sizeEnums()),
    spin: React.PropTypes.bool,
    style: React.PropTypes.object,
    type: React.PropTypes.string.isRequired
};

export default Icon;
