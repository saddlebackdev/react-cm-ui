import React, { Component } from 'react';
import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../dataDisplay/icon';

const propTypes = {
    align: PropTypes.oneOf([ 'left', 'right' ]),
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),
    labelClassName: PropTypes.string,
    labelClick: PropTypes.bool,
    labelStyle: PropTypes.object,
    labelWeight: PropTypes.oneOf([ 'bold', 'normal', 'semibold' ]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf([ 'small', 'large' ]),
    style: PropTypes.object,
    toggle: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = { isChecked: props.checked || false };

        this.onClick = this.onClick.bind(this);
        this.onLabelClick = this.onLabelClick.bind(this);
    }

    componentDidMount() {
        const { checked } = this.props;

        if (checked) {
            // isChecked is already set by the props.checked in the constructor.
            this._inputRef.checked = checked;
        }
    }

    componentDidUpdate(prevProps) {
        const { checked, onChange } = this.props;

        if (_.isFunction(onChange) && prevProps.checked !== checked) {
            this.setState({
                isChecked: checked,
            }, () => {
                this._inputRef.checked = checked;
            });
        }
    }

    onClick(event) {
        const { disabled, id, onChange } = this.props;
        const { isChecked } = this.state;

        if (!disabled) {
            if (!_.isUndefined(onChange)) {
                onChange(id, !isChecked, event);
            } else {
                this.setState({
                    isChecked: !isChecked,
                }, () => {
                    this._inputRef.checked = !isChecked;
                });
            }
        } else {
            event.stopPropagation();
        }
    }

    onLabelClick(event) {
        const { labelClick } = this.props;

        if (!_.isUndefined(labelClick) && labelClick === false) {
            event.stopPropagation();
        }
    }

    render() {
        const {
            align,
            className,
            disabled,
            fluid,
            id,
            inverse,
            label,
            labelClassName,
            labelClick,
            labelStyle,
            labelWeight,
            name,
            size,
            style,
            toggle,
            value,
        } = this.props;
        const { isChecked } = this.state;
        const newDisabled = disabled || false;
        const newValue = value || '';
        const containerClasses = ClassNames('ui', 'checkbox', className, {
            'checkbox-align-left': align === 'left',
            'checkbox-align-right': align === 'right',
            'checkbox-disabled': disabled,
            'checkbox-full-width': fluid,
            'checkbox-inverse': inverse,
            'checkbox-is-checked': isChecked,
            'checkbox-size-small': size === 'small',
            'checkbox-toggle': toggle,
        });
        const labelClasses = ClassNames('checkbox-label', {
            'label-not-clickable': !_.isUndefined(labelClick) && labelClick === false,
        });
        const labelTextClasses = ClassNames('checkbox-label-text', labelClassName, {
            'checkbox-label-text-weight-bold': labelWeight === 'bold',
            'checkbox-label-text-weight-normal': !labelWeight || labelWeight === 'normal',
            'checkbox-label-text-weight-semibold': labelWeight === 'semibold',
        });
        const checkSize = size === 'small' ? 8 : 10;
        const inputId = id ? `${id}_hidden_input` : null;

        return (
            <div
                className={containerClasses}
                id={id}
                onClick={this.onClick}
                style={style}
            >
                <input
                    checked={isChecked}
                    className="input"
                    disabled={newDisabled}
                    id={inputId}
                    name={name}
                    readOnly
                    ref={(ref) => { this._inputRef = ref; }}
                    type="checkbox"
                    value={newValue}
                />

                <label className={labelClasses}>
                    {label ? (
                        <span
                            className={labelTextClasses}
                            onClick={this.onLabelClick}
                            style={labelStyle}
                        >
                            {label}
                        </span>
                    ) : null}

                    {toggle ? (
                        <div className="checkbox-toggle-text">
                            <span className="checkbox-toggle-text-on">On</span>
                            <span className="checkbox-toggle-text-off">Off</span>
                        </div>
                    ) : null}

                    <Icon
                        color={disabled ? 'static' : 'primary'}
                        compact
                        inverse
                        size={checkSize}
                        type="check"
                    />
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = propTypes;

export default Checkbox;
