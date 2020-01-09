import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from './icon';

import Utils from '../global/utils';

class Label extends React.PureComponent {
    onClearClick() {
        if (_.isFunction(this.props.onClearClick)) {
            this.props.onClearClick();
        }
    }

    onClick() {
        if (_.isFunction(this.props.onClick)) {
            this.props.onClick();
        }
    }

    render() {
        const { children, className, color, disabled, fluid, inverse, onClick, onClearClick, style } = this.props;
        const containerClasses = ClassNames('ui', 'label', className, {
            'label-clickable': onClick,
            'label-color-alert': color === 'alert',
            'label-color-highlight': color === 'highlight',
            'label-color-primary': color === 'primary',
            'label-color-success': color === 'success',
            'label-color-transparent': color === 'transparent',
            'label-color-warning': color === 'warning',
            'label-fluid': fluid,
            'label-inverse': inverse,
            'label-clearable': onClearClick,
        });

        return (
            <div
                className={containerClasses}
                onClick={this.onClick.bind(this)}
                disabled={disabled}
                style={style}
            >
                <span className="label-inner-container">
                    {children}

                    {onClearClick ? (
                        <span className="label-clearable-button" onClick={this.onClearClick.bind(this)}>
                            <Icon
                                compact
                                inverse
                                size="xxsmall"
                                type="times"
                            />
                        </span>
                    ) : null}
                </span>
            </div>
        );
    }
}

Label.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    fluid: PropTypes.bool,
    onClearClick: PropTypes.func,
    onClick: PropTypes.func,
    style: PropTypes.object,
};

export default Label;
