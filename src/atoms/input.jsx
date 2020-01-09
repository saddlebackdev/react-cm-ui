import _ from 'lodash';
import ClassNames from 'classnames';
import InputMasked from 'react-text-mask';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React from 'react';

import Icon from './icon';

class Input extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isFocused: false,
            inputActionsTopPosition: 0,
            showRequiredIndicator: props.required,
            // value: props.value || props.value === 0 ? props.value : ''
        };

        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onNumberToggleDownClick = this.onNumberToggleDownClick.bind(this);
        this.onNumberToggleUpClick = this.onNumberToggleUpClick.bind(this);

        this.inputTimer = null;
        this.previousInputValue = '';
    }

    componentDidMount() {
        const { autoFocus, icon, loading } = this.props;
        const type = this.getType();

        if (_.isString(icon) || _.isObject(icon) || loading || type === 'number') {
            const inputTop = ReactDOM.findDOMNode(this._input).offsetTop;

            if (inputTop > 0) {
                this.setState({ inputActionsTopPosition: inputTop });
            }
        }

        if (autoFocus) {
            ReactDOM.findDOMNode(this._input).focus();

            this.setState({
                isFocused: true,
            });
        }
    }

    onBlur(event) {
        if (!_.isUndefined(this.props.onBlur)) {
            this.props.onBlur(event.target.value);
        }

        this.setState({ isFocused: false });
    }

    getType() {
        const { type } = this.props;
        let newType;

        switch (type) {
            case 'email':
                newType = 'email';
                break;
            case 'number':
                newType = 'number';
                break;
            case 'password':
                newType = 'password';
                break;
            case 'telephone':
            case 'tel':
            case 'phone':
                newType = 'tel';
                break;
            case 'text':
            default:
                newType = 'text';
                break;
        }

        return newType;
    }

    onChange(event) {
        const {
            disabled, max, min, onChange,
        } = this.props;

        if (!disabled) {
            const type = this.getType();
            let newValue = event.target.value;

            if (type === 'number') {
                if (this.inputTimer) {
                    clearTimeout(this.inputTimer);
                }

                this.inputTimer = setTimeout(() => {
                    if (_.isEmpty(newValue)) {
                        if (required) {
                            newValue = _.isNumber(min) ? min : (_.isNumber(max) ? max : 0);
                        }
                    } else {
                        newValue = +newValue;
                        if (_.isNumber(max)) {
                            newValue = Math.min(max, newValue);
                        }
                        if (_.isNumber(min)) {
                            newValue = Math.max(min, newValue);
                        }
                    }

                    if (_.isUndefined(onChange)) {
                        this._input.value = newValue;
                    } else {
                        onChange(newValue);
                    }
                }, 500);

                if (_.isUndefined(onChange)) {
                    this._input.value = newValue;
                } else {
                    onChange(newValue);
                }
            } else if (_.isUndefined(onChange)) {
                this._input.value = newValue;
            } else {
                onChange(newValue);
            }

            this.shouldShowRequiredIndicator(newValue);
        }
    }

    onClick(event) {
        if (!_.isUndefined(this.props.onClick)) {
            this.props.onClick(event.target.value);
        }
    }

    onFocus(event) {
        if (!_.isUndefined(this.props.onFocus)) {
            this.props.onFocus(event);
        }

        this.setState({ isFocused: !this.state.isFocused });
    }

    onKeyDown(event) {
        if (!_.isUndefined(this.props.onKeyDown)) {
            this.props.onKeyDown(event);
        }
    }

    onNumberToggleClick(action) {
        const {
            disabled, max, min, type, onChange,
        } = this.props;
        const { value } = this._input;

        if (!disabled) {
            let newValue = value || 0;

            switch (action) {
                case 'down':
                    newValue = type === 'number' && _.isNumber(min) && value * 1 - 1 < min ? !newValue ? max : newValue : --newValue;
                    break;
                case 'up':
                    newValue = type === 'number' && _.isNumber(max) && value * 1 + 1 > max ? newValue : newValue < min ? min : ++newValue;
                    break;
            }

            if (_.isUndefined(onChange)) {
                this._input.value = newValue;
            } else {
                onChange(newValue);
            }

            this.shouldShowRequiredIndicator(newValue);
        }
    }

    onNumberToggleDownClick(event) {
        this.onNumberToggleClick('down');
    }

    onNumberToggleUpClick(event) {
        this.onNumberToggleClick('up');
    }

    shouldShowRequiredIndicator(value) {
        const { required } = this.props;

        if (required && this.previousInputValue !== value) {
            this.previousInputValue = value;

            this.setState({
                showRequiredIndicator: required && !value,
            });
        }
    }

    render() {
        const {
            autoComplete, className, disabled,
            error, fluid, guide,
            icon, id, inverse,
            keepCharPositions, label, labelStyle, loading,
            mask, max, maxLength,
            min, minLength, name,
            placeholder, required, style,
            tabIndex, showSpinners, value,
        } = this.props;
        const { inputActionsTopPosition, showRequiredIndicator } = this.state;
        const type = this.getType();
        const labelPosition = this.props.labelPosition || 'top';
        const containerClasses = ClassNames('ui', 'input', className, {
            'input-disabled': disabled,
            'input-error': error,
            'input-fluid': fluid,
            'input-has-value': this.state.value,
            'input-icon': icon,
            'input-focused': this.state.isFocused,
            'input-inverse': inverse,
            'input-loading': loading,
            'input-type-email': type === 'email',
            'input-type-number': type === 'number',
            'input-type-password': type === 'password',
            'input-type-tel': type === 'tel',
            'input-type-text': type === 'text',
        });
        const labelContainerClassNames = ClassNames('label', {
            'label-bottom': labelPosition === 'bottom',
            'label-top': labelPosition === 'top',
        });
        const renderLabel = () => {
            if (label) {
                return (
                    <label className={labelContainerClassNames} htmlFor={id} style={labelStyle}>
                        {label}

                        {showRequiredIndicator ? (
                            <span className="input-required-indicator">*</span>
                        ) : null}
                    </label>
                );
            }
        };

        return (
            <div className={containerClasses} style={style}>
                {labelPosition === 'top' ? renderLabel() : null}

                {mask ? (
                    <InputMasked
                        autoComplete={autoComplete}
                        disabled={disabled}
                        guide={guide}
                        id={id}
                        keepCharPositions={keepCharPositions}
                        name={name}
                        mask={mask}
                        maxLength={maxLength}
                        minLength={minLength}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                        onClick={this.onClick}
                        onFocus={this.onFocus}
                        onKeyDown={this.onKeyDown}
                        placeholder={placeholder}
                        ref={(ref) => { this._input = ref; }}
                        required={required}
                        tabIndex={tabIndex}
                        type={type}
                        value={value}
                    />
                ) : (
                    <input
                        autoComplete={autoComplete}
                        disabled={disabled}
                        id={id}
                        name={name}
                        max={max}
                        maxLength={maxLength}
                        min={min}
                        minLength={minLength}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                        onClick={this.onClick}
                        onFocus={this.onFocus}
                        onKeyDown={this.onKeyDown}
                        placeholder={placeholder}
                        ref={(ref) => { this._input = ref; }}
                        required={required}
                        tabIndex={tabIndex}
                        type={type}
                        value={value}
                    />
                )}

                {labelPosition === 'bottom' ? renderLabel() : null}

                {_.isString(icon) || _.isObject(icon) || loading || type === 'number' ? (
                    <div
                        className="input-actions"
                        ref={(ref) => { this._inputActions = ref; }}
                        style={{
                            pointerEvents: 'none',
                            top: inputActionsTopPosition,
                        }}
                    >
                        {_.isString(icon) || loading ? (
                            <Icon compact spin={loading} type={loading ? 'spinner' : icon} />
                        ) : _.isObject(icon) ? (
                            <div className="input-icon-custom" style={{ pointerEvents: 'auto' }}>
                                {icon}
                            </div>
                        ) : null}

                        {type === 'number' && showSpinners ? (
                            <div className="input-number-controls" style={{ pointerEvents: disabled ? 'none' : 'auto' }}>
                                <Icon
                                    compact
                                    onClick={this.onNumberToggleUpClick}
                                    size="xsmall"
                                    title="Increase"
                                    type="caret-up"
                                />

                                <Icon
                                    compact
                                    onClick={this.onNumberToggleDownClick}
                                    size="xsmall"
                                    title="Decrease"
                                    type="caret-down"
                                />
                            </div>
                        ) : null}
                    </div>
                ) : null}

                {error && _.isString(error) ? (
                    <p className="input-error-message">{error}</p>
                ) : null}
            </div>
        );
    }
}

const autoCompleteEnums = ['off', 'on'];
const labelPosition = ['bottom', 'top'];
const typeEnums = ['email', 'number', 'password', 'tel', 'text'];

Input.defaultProps = {
    showSpinners: true,
};

Input.propTypes = {
    autoComplete: PropTypes.oneOf(autoCompleteEnums),
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    fluid: PropTypes.bool,
    guide: PropTypes.bool,
    icon: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),
    id: PropTypes.string,
    inverse: PropTypes.bool,
    keepCharPositions: PropTypes.bool,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(labelPosition),
    labelStyle: PropTypes.object,
    loading: PropTypes.bool,
    mask: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func,
    ]),
    max: PropTypes.number,
    maxLength: PropTypes.number,
    min: PropTypes.number,
    minLength: PropTypes.number,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    showSpinners: PropTypes.bool,
    style: PropTypes.object,
    tabIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    type: PropTypes.oneOf(typeEnums),
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export default Input;
