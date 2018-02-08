'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
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
            'icon-color-highlight': color === 'highlight',
            'icon-color-primary': _.isUndefined(color) && !disable || color === 'primary',
            'icon-color-static': color === 'static',
            'icon-color-success': color === 'success',
            'icon-color-warning': color === 'warning',
            'icon-compact': compact,
            'icon-disable': disable,
            'icon-inverse': inverse,
            'icon-size-large': size === 'large',
            'icon-size-medium': size === 'medium',
            'icon-size-small': size === 'small',
            'icon-size-xlarge': size === 'xlarge',
            'icon-size-xsmall': size === 'xsmall',
            'icon-size-xxsmall': size === 'xxsmall',
            'icon-spin': spin || type === 'spinner'
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
    align: PropTypes.oneOf(alignEnums),
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    compact: PropTypes.bool,
    disable: PropTypes.bool,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    onClick: PropTypes.func,
    rotate: PropTypes.number,
    size: PropTypes.oneOf(Utils.sizeEnums()),
    spin: PropTypes.bool,
    style: PropTypes.object,
    type: PropTypes.string.isRequired
};

export default Icon;
