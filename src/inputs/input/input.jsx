import {
    isEmpty,
    isFunction,
    isNumber,
    isObject,
    isString,
    toNumber,
} from 'lodash';
import ClassNames from 'classnames';
import InputMasked from 'react-text-mask';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../dataDisplay/icon';

const propTypes = {
    autoComplete: PropTypes.oneOf(['off', 'on']),
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    /**
     * An Input can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    fluid: PropTypes.bool,
    guide: PropTypes.bool,
    icon: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    id: PropTypes.string,
    inverse: PropTypes.bool,
    keepCharPositions: PropTypes.bool,
    label: PropTypes.string,
    labelPosition: PropTypes.oneOf(['bottom', 'top']),
    labelStyle: PropTypes.shape({}),
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
    style: PropTypes.shape({}),
    tabIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    type: PropTypes.oneOf(['email', 'number', 'password', 'tel', 'text']),
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    autoComplete: null,
    autoFocus: null,
    className: null,
    disable: false,
    disabled: false,
    error: null,
    fluid: false,
    guide: false,
    icon: null,
    id: null,
    inverse: false,
    keepCharPositions: false,
    label: null,
    labelPosition: null,
    labelStyle: null,
    loading: false,
    mask: null,
    max: null,
    maxLength: null,
    min: null,
    minLength: null,
    name: null,
    onBlur: null,
    onChange: null,
    onClick: null,
    onFocus: null,
    onKeyDown: null,
    placeholder: null,
    required: false,
    showSpinners: true,
    style: null,
    tabIndex: null,
    type: null,
};

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

        if (isString(icon) || isObject(icon) || loading || type === 'number') {
            // eslint-disable-next-line react/no-find-dom-node, no-underscore-dangle
            const inputTop = ReactDOM.findDOMNode(this._input).offsetTop;

            if (inputTop > 0) {
                this.setState({ inputActionsTopPosition: inputTop });
            }
        }

        if (autoFocus) {
            // eslint-disable-next-line react/no-find-dom-node, no-underscore-dangle
            ReactDOM.findDOMNode(this._input).focus();

            this.setState({
                isFocused: true,
            });
        }
    }

    componentDidUpdate(prevProps) {
        const {
            required: prevRequired,
        } = prevProps;
        const {
            required: nextRequired,
            value: nextValue,
        } = this.props;

        if (prevRequired !== nextRequired) {
            this.setState({
                showRequiredIndicator: nextRequired && !nextValue,
            });
        }
    }

    onBlur(event) {
        const {
            onBlur,
        } = this.props;

        if (isFunction(onBlur)) {
            onBlur(event.target.value);
        }

        this.setState({ isFocused: false });
    }

    onChange(event) {
        const {
            disable,
            disabled,
            max,
            min,
            required,
        } = this.props;
        const isDisabled = disable || disabled;

        if (!isDisabled) {
            const type = this.getType();
            let newValue = event.target.value;

            if (type === 'number') {
                if (this.inputTimer) {
                    clearTimeout(this.inputTimer);
                }

                this.inputTimer = setTimeout(() => {
                    if (isEmpty(newValue)) {
                        if (required) {
                            if (isNumber(min)) {
                                newValue = min;
                            } else if (isNumber(max)) {
                                newValue = max;
                            } else {
                                newValue = 0;
                            }
                        }
                    } else {
                        newValue = +newValue;

                        if (isNumber(max)) {
                            newValue = Math.min(max, newValue);
                        }

                        if (isNumber(min)) {
                            newValue = Math.max(min, newValue);
                        }
                    }

                    this.setNewValue(newValue);
                }, 500);
            }

            this.setNewValue(newValue);

            this.shouldShowRequiredIndicator(newValue);
        }
    }

    onClick(event) {
        const {
            onClick,
        } = this.props;

        if (isFunction(onClick)) {
            onClick(event.target.value);
        }
    }

    onFocus(event) {
        const {
            onFocus,
        } = this.props;

        if (isFunction(onFocus)) {
            onFocus(event);
        }

        this.setState((prevState) => ({
            isFocused: !prevState.isFocused,
        }));
    }

    onKeyDown(event) {
        const {
            onKeyDown,
        } = this.props;

        if (isFunction(onKeyDown)) {
            onKeyDown(event);
        }
    }

    onNumberToggleClick(action) {
        const {
            disable,
            disabled,
            max,
            min,
            type,
            onChange,
        } = this.props;
        const isDisabled = disable || disabled;
        // eslint-disable-next-line no-underscore-dangle
        const { value } = this._input;

        if (!isDisabled) {
            let newValue = value ? toNumber(value) : 0;

            switch (action) {
                case 'down':
                    if (type === 'number' && isNumber(min) && newValue - 1 < min) {
                        if (!newValue) {
                            newValue = min;
                        }
                    } else {
                        newValue -= 1;
                    }

                    break;
                case 'up':
                    if (type === 'number' && isNumber(max) && newValue + 1 > max) {
                        newValue = max;
                    } else {
                        newValue += 1;
                    }

                    break;
                default:
            }

            this.setNewValue(newValue);

            this.shouldShowRequiredIndicator(newValue);
        }
    }

    onNumberToggleDownClick() {
        this.onNumberToggleClick('down');
    }

    onNumberToggleUpClick() {
        this.onNumberToggleClick('up');
    }

    getType() {
        const {
            type,
        } = this.props;
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

    setNewValue(value) {
        const {
            onChange,
        } = this.props;

        if (isFunction(onChange)) {
            onChange(value);
        } else {
            // eslint-disable-next-line no-underscore-dangle
            this._input.value = value;
        }
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
            autoComplete,
            className,
            disable,
            disabled,
            error,
            fluid,
            guide,
            icon,
            id,
            inverse,
            keepCharPositions,
            label,
            labelPosition,
            labelStyle,
            loading,
            mask,
            max,
            maxLength,
            min,
            minLength,
            name,
            placeholder,
            required,
            style,
            tabIndex,
            showSpinners,
            value,
        } = this.props;
        const {
            isFocused,
            inputActionsTopPosition,
            showRequiredIndicator,
        } = this.state;
        const type = this.getType();
        const newLabelPosition = labelPosition || 'top';
        const isDisabled = disable || disabled;
        const containerClasses = ClassNames('ui', 'input', className, {
            'input-disabled': isDisabled,
            'input-error': error,
            'input-fluid': fluid,
            'input-has-value': value,
            'input-icon': icon,
            'input-focused': isFocused,
            'input-inverse': inverse,
            'input-loading': loading,
            'input-type-email': type === 'email',
            'input-type-number': type === 'number',
            'input-type-password': type === 'password',
            'input-type-tel': type === 'tel',
            'input-type-text': type === 'text',
        });
        const labelContainerClassNames = ClassNames('label', {
            'label-bottom': newLabelPosition === 'bottom',
            'label-top': newLabelPosition === 'top',
        });
        const renderLabel = () => {
            if (!label) {
                return null;
            }

            return (
                <label className={labelContainerClassNames} htmlFor={id} style={labelStyle}>
                    {label}

                    {showRequiredIndicator && (
                        <span className="input-required-indicator">*</span>
                    )}
                </label>
            );
        };

        return (
            <div className={containerClasses} style={style}>
                {newLabelPosition === 'top' && renderLabel()}

                {mask ? (
                    <InputMasked
                        autoComplete={autoComplete}
                        disabled={isDisabled}
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
                        // eslint-disable-next-line no-underscore-dangle
                        ref={(ref) => { this._input = ref; }}
                        required={required}
                        tabIndex={tabIndex}
                        type={type}
                        value={value}
                    />
                ) : (
                    <input
                        autoComplete={autoComplete}
                        disabled={isDisabled}
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
                        // eslint-disable-next-line no-underscore-dangle
                        ref={(ref) => { this._input = ref; }}
                        required={required}
                        tabIndex={tabIndex}
                        type={type}
                        value={value}
                    />
                )}

                {newLabelPosition === 'bottom' && renderLabel()}

                {(isString(icon) || isObject(icon) || loading || type === 'number') && (
                    <div
                        className="input-actions"
                        // eslint-disable-next-line no-underscore-dangle
                        ref={(ref) => { this._inputActions = ref; }}
                        style={{
                            pointerEvents: 'none',
                            top: inputActionsTopPosition,
                        }}
                    >
                        {(isString(icon) || loading) && (
                            <Icon compact spin={loading} type={loading ? 'spinner' : icon} />
                        )}

                        {isObject(icon) && (
                            <div className="input-icon-custom" style={{ pointerEvents: 'auto' }}>
                                {icon}
                            </div>
                        )}

                        {type === 'number' && showSpinners && (
                            <div className="input-number-controls" style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>
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
                        )}
                    </div>
                )}

                {error && isString(error) && (
                    <p className="input-error-message">{error}</p>
                )}
            </div>
        );
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
