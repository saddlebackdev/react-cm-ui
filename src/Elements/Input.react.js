'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import InputMasked from 'react-text-mask';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import Icon from './Icon.react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFocused: false,
            value: props.value || ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.value, nextProps.value)) {
            this.setState({ value: nextProps.value });
        }
    }

    render() {
        const { autoComplete, className, disabled,
            error, fluid, guide,
            icon, id, inverse,
            keepCharPositions, label, labelStyle, loading,
            mask, max, maxLength,
            min, minLength, name,
            placeholder, required, style,
            tabIndex, type } = this.props;
        let newType;
        switch(type) {
            case 'email':
                newType = 'email';
                break;
            case 'number':
                newType = 'number';
                break;
            case 'password':
                newType = 'password';
                break;
            case 'text':
            default:
                newType = 'text';
                break;
        }
        const containerClasses = ClassNames('ui', 'input', className, {
            'input-disabled': disabled,
            'input-error': error,
            'input-fluid': fluid,
            'input-has-value': this.state.value,
            'input-icon': icon,
            'input-focused': this.state.isFocused,
            'input-inverse': inverse,
            'input-loading': loading,
            'input-type-email': newType === 'email',
            'input-type-number': newType === 'number',
            'input-type-password': newType === 'password',
            'input-type-text': newType === 'text'
        });

        return (
            <div className={containerClasses} style={style}>
                {label ? (
                    <label className="label" htmlFor={id} style={labelStyle}>
                        {label}

                        {required && !this.state.value ? (
                            <span className="input-required-indicator">*</span>
                        ) : null}
                    </label>
                ) : null}

                <div className="input-container">
                    {mask ? (
                        <InputMasked
                            autoComplete={autoComplete}
                            data-parsley-error-message={_.isString(error) ? error : null}
                            disabled={disabled}
                            guide={guide}
                            id={id}
                            keepCharPositions={keepCharPositions}
                            name={name}
                            mask={mask}
                            maxLength={maxLength}
                            minLength={minLength}
                            onBlur={this._onBlur.bind(this)}
                            onChange={this._onChange.bind(this)}
                            onClick={this._onClick.bind(this)}
                            onFocus={this._onFocus.bind(this)}
                            onKeyDown={this._onKeyDown.bind(this)}
                            placeholder={placeholder}
                            required={required}
                            tabIndex={tabIndex}
                            type={newType}
                            value={this.state.value}
                        />
                    ) : (
                        <input
                            autoComplete={autoComplete}
                            data-parsley-error-message={_.isString(error) ? error : null}
                            disabled={disabled}
                            id={id}
                            name={name}
                            max={max}
                            maxLength={maxLength}
                            min={min}
                            minLength={minLength}
                            onBlur={this._onBlur.bind(this)}
                            onChange={this._onChange.bind(this)}
                            onClick={this._onClick.bind(this)}
                            onFocus={this._onFocus.bind(this)}
                            onKeyDown={this._onKeyDown.bind(this)}
                            placeholder={placeholder}
                            ref={input => { this.input = input }}
                            required={required}
                            tabIndex={tabIndex}
                            type={newType}
                            value={this.state.value}
                        />
                    )}

                    {error && _.isString(error) ? (
                        <p className="input-error-message">{error}</p>
                    ) : null}

                    {_.isString(icon) || loading ? (
                        <Icon compact={true} spin={loading} type={loading ? 'spinner-1' : icon} />
                    ) : _.isObject(icon) ? (
                        <div className="input-icon-custom">
                            {icon}
                        </div>
                    ) : null}

                    {newType === 'number' ? (
                        <div className="input-number-controls">
                            <Icon compact={true} onClick={this._onNumberToggleClick.bind(this, 'up')} size="xsmall" type="caret-up" />
                            <Icon compact={true} onClick={this._onNumberToggleClick.bind(this, 'down')} size="xsmall" type="caret-down" />
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }

    _onBlur(event) {
        if (!_.isUndefined(this.props.onBlur)) {
            this.props.onBlur(event.target.value);
        }

        this.setState({ isFocused: false });
    }

    _onChange(event) {
        const { value } = this.state;
        const { max, min, onChange, type } = this.props;
        let newValue = event.target.value;

        if (type === 'number' && _.isNumber(max) || _.isNumber(min)) {
            newValue = newValue > max || newValue < min ? value : newValue;
        }

        if (!_.isUndefined(onChange)) {
            onChange(newValue);
        } else {
            this.setState({ value: newValue });
        }
    }

    _onClick(event) {
        if (!_.isUndefined(this.props.onClick)) {
            this.props.onClick(event.target.value);
        }
    }

    _onFocus(event) {
        if (!_.isUndefined(this.props.onFocus)) {
            this.props.onFocus(event);
        }

        this.setState({ isFocused: !this.state.isFocused });
    }

    _onKeyDown(event) {
        if (!_.isUndefined(this.props.onKeyDown)) {
            this.props.onKeyDown(event);
        }
    }

    _onNumberToggleClick(action) {
        const { value } = this.state;
        const { max, min, type } = this.props;
        let newValue = value || 0;

        switch(action) {
            case 'down':
                newValue = type === 'number' && _.isNumber(min) && value * 1 - 1 < min ? newValue : --newValue;
                break;
            case 'up':
                newValue = type === 'number' && _.isNumber(max) && value * 1 + 1 > max ? newValue : ++newValue;
                break;
        }

        this.setState({ value: newValue });
    }
}

const autoCompleteEnums = [ 'off', 'on' ];
const typeEnums = [ 'email', 'number', 'password', 'tel', 'text' ];

Input.propTypes = {
    autoComplete: React.PropTypes.oneOf(autoCompleteEnums),
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    error: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.string
    ]),
    fluid: React.PropTypes.bool,
    guide: React.PropTypes.bool,
    icon: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.string
    ]),
    id: React.PropTypes.string,
    inverse: React.PropTypes.bool,
    keepCharPositions: React.PropTypes.bool,
    label: React.PropTypes.string,
    labelStyle: React.PropTypes.object,
    loading: React.PropTypes.bool,
    mask: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.func
    ]),
    max: React.PropTypes.number,
    maxLength: React.PropTypes.number,
    min: React.PropTypes.number,
    minLength: React.PropTypes.number,
    name: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onClick: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    style: React.PropTypes.object,
    tabIndex: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    type: React.PropTypes.oneOf(typeEnums),
    value: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ])
};

export default Input;
