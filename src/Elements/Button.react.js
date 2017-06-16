'use strict';

import 'Elements/Button.scss';

import _ from 'lodash';
import ClassNames from 'classnames';
import React from 'react';

import UIUtils from 'utils/Utils.js';

export default class Button extends React.Component {

    render() {
        const { as, children, className, color, compact, disabled, fluid, href, icon, inverse, style, width } = this.props;
        const newAs = as || 'button';
        const ElementType = UIUtils.getElementType(newAs, this.props);
        const containerClasses = ClassNames('ui', 'button', className, {
            'button-inverse': inverse,
            'button-color-alert': !disabled && color === 'alert',
            'button-color-alternate': !disabled && color === 'alternate',
            'button-color-disable': disabled || color === 'disable',
            'button-color-inverse': !disabled && color === 'inverse',
            'button-color-light': !disabled && color === 'light',
            'button-color-outline': !disabled && color === 'outline',
            'button-color-primary': !disabled && (!color || color === 'primary'),
            'button-color-success': !disabled && color === 'success',
            'button-color-transparent': !disabled && color === 'transparent',
            'button-compact': compact,
            'button-fluid': fluid,
            'button-icon': icon,
            'button-fixed-width': width
        });
        const containerStyle = _.merge(style, {
            width: _.isNumber(width) ? `${width}px` : _.isString(width) ? width : null
        });

        return (
            <ElementType
                className={containerClasses}
                href={href}
                onClick={this._onClick.bind(this)}
                style={containerStyle}
                disabled={disabled}
            >
                <span className="button-inner-container">{children}</span>
            </ElementType>
        );
    }

    _onClick() {
        if(_.isFunction(this.props.onClick)) {
            this.props.onClick();
        }
    }

}

const asEnums = [ 'button', 'a' ];

Button.propTypes = {
    as: React.PropTypes.oneOf(asEnums),
    circle: React.PropTypes.bool,
    className: React.PropTypes.string,
    color: React.PropTypes.oneOf(UIUtils.colorEnums()),
    compact: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    fluid: React.PropTypes.bool,
    href: React.PropTypes.string,
    icon: React.PropTypes.bool,
    inverse: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    square: React.PropTypes.bool,
    style: React.PropTypes.object,
    width: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ])
}
