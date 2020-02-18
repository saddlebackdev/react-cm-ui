import _ from 'lodash';
import ClassNames from 'classnames';
import React from 'react';
import { buttonPropTypes, buttonDefaultProps } from './buttonConstants';
import Utils from '../global/utils/utils';

const propTypes = {
    ...buttonPropTypes,
};
const defaultProps = {
    ...buttonDefaultProps,
};

class Button extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        const { onClick } = this.props;

        if (_.isFunction(onClick)) {
            onClick(event);
        }
    }

    render() {
        const {
            as,
            children,
            className,
            color,
            compact,
            disable: disableProp,
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
            title,
            width,
        } = this.props;
        const disable = disableProp || disabled;

        if (disabled) {
            // eslint-disable-next-line no-console
            console.warn('Button (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }

        const ElementType = Utils.getElementType(as, this.props);
        const containerClasses = ClassNames('ui', 'button', className, {
            'button-inverse': inverse,
            'button-color-alert': !disable && color === 'alert',
            'button-color-alternate': !disable && color === 'alternate',
            'button-color-disable': disable || color === 'disable',
            'button-color-inverse': !disable && color === 'inverse',
            'button-color-light': !disable && color === 'light',
            'button-color-outline': !disable && color === 'outline',
            'button-color-primary': !disable && (!color || color === 'primary'),
            'button-color-secondary': !disable && color === 'secondary',
            'button-color-success': !disable && color === 'success',
            'button-color-transparent': !disable && color === 'transparent',
            'button-color-warning': !disable && color === 'warning',
            'button-compact': compact,
            'button-fluid': fluid,
            'button-icon': icon,
            'button-fixed-width': width,
            'button-outlined': outlined,
            'button-relax': relax,
        });

        return (
            <ElementType
                className={containerClasses}
                disabled={disable}
                id={id}
                href={href}
                onClick={this.onClick}
                style={{
                    width: _.isNumber(width) ? `${width}px` : width,
                    ...style,
                }}
                target={target}
                title={title}
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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
