import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../global/utils';

class Button extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        if (_.isFunction(this.props.onClick)) {
            this.props.onClick(event);
        }
    }

    render() {
        const {
            as,
            children,
            className,
            color,
            compact,
            disabled,
            fluid,
            href,
            icon,
            id,
            innerStyle,
            inverse,
            outlined,
            relax,
            style,
            target,
            width,
        } = this.props;

        const ElementType = Utils.getElementType(as, this.props);
        const containerClasses = ClassNames('ui', 'button', className, {
            'button-inverse': inverse,
            'button-color-alert': !disabled && color === 'alert',
            'button-color-alternate': !disabled && color === 'alternate',
            'button-color-disable': disabled || color === 'disable',
            'button-color-inverse': !disabled && color === 'inverse',
            'button-color-light': !disabled && color === 'light',
            'button-color-outline': !disabled && color === 'outline',
            'button-color-primary': !disabled && (!color || color === 'primary'),
            'button-color-secondary': !disabled && color === 'secondary',
            'button-color-success': !disabled && color === 'success',
            'button-color-transparent': !disabled && color === 'transparent',
            'button-color-warning': !disabled && color === 'warning',
            'button-compact': compact,
            'button-fluid': fluid,
            'button-icon': icon,
            'button-fixed-width': width,
            'button-outlined': outlined,
            'button-relax': relax,
        });
        const containerStyle = Object.assign({}, {
            width: _.isNumber(width) ? `${width}px` : _.isString(width) ? width : null,
        }, style);

        return (
            <ElementType
                className={containerClasses}
                disabled={disabled}
                id={id}
                href={href}
                onClick={this.onClick}
                style={containerStyle}
                target={target}
            >
                <span
                    className="button-inner-container"
                    style={innerStyle}
                >
                    {children}
                </span>
            </ElementType>
        );
    }
}

const asEnums = [ 'a', 'button' ];

Button.propTypes = {
    as: PropTypes.oneOf(asEnums),
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.bool,
    id: PropTypes.string,
    innerStyle: PropTypes.object,
    inverse: PropTypes.bool,
    onClick: PropTypes.func,
    outlined: PropTypes.bool,
    relax: PropTypes.bool,
    square: PropTypes.bool,
    style: PropTypes.object,
    target: PropTypes.oneOf([ '_blank' ]),
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

Button.defaultProps = {
    as: 'button',
    className: undefined,
    color: 'primary',
    compact: false,
    disabled: false,
    fluid: false,
    href: undefined,
    icon: false,
    id: undefined,
    innerStyle: {},
    inverse: false,
    onClick: undefined,
    outlined: false,
    relax: false,
    square: false,
    style: {},
    target: undefined,
    width: undefined,
};

export default Button;
