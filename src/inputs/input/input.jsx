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
import Icon from '../../dataDisplay/icon';
import KeyCode from '../../global/keyCode.js';

const propTypes = {
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    autoComplete: PropTypes.oneOf(['off', 'on']),
    /**
     * Indicates whether or not the field allows decimal values (or just whole numbers)
     * for Input of type "number".
     */
    allowDecimals: PropTypes.bool,
    /**
     * Gives Input immediate focus.
     */
    autoFocus: PropTypes.bool,
    /**
     * Indicates whether or not the field allows negative numbers (or just positive numbers)
     * for Input of type "number".
     */
    allowNegativeNumbers: PropTypes.bool,
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    /**
     * Deprecated prop. Please use `disabled` instead.
     */
    disable: PropTypes.bool,
    /**
     * An Input can be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Indicates that the input has an error.
     */
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    /**
     * An input can take on the size of its container.
     */
    fluid: PropTypes.bool,
    /**
     * Forwarded Ref
     */
    forwardedRef: PropTypes.oneOfType([
        // Either a function
        PropTypes.func,
        // Or the instance of a DOM native element (see the note about SSR)
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    /**
     * Indicates whether or not the Input should be in guide mode.
     */
    guide: PropTypes.bool,
    /**
     * Optional icon to display inside the input.
     */
    icon: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    /**
     * Assign an element ID to the Input.
     */
    id: PropTypes.string,
    /**
     * It provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents.
     * Values include none, text, tel, url, email, numeric, decimal, and search.
     */
    inputMode: PropTypes.oneOf([
        'none',
        'text',
        'tel',
        'url',
        'email',
        'numeric',
        'decimal',
        'search',
    ]),
    /**
     * Format to appear on dark backgrounds.
     */
    inverse: PropTypes.bool,
    /**
     * Changes the general behavior of the Text Mask component.
     */
    keepCharPositions: PropTypes.bool,
    /**
     * Optional Label to display with the Input.
     */
    label: PropTypes.string,
    /**
     * Position the label above or below the input.
     */
    labelPosition: PropTypes.oneOf(['bottom', 'top']),
    /**
     * Supply any inline styles to the Input.
     */
    labelStyle: PropTypes.shape({}),
    /**
     * An icon input field can show that it is currently loading data.
     */
    loading: PropTypes.bool,
    /**
     * Define an input mask to aid the user in inputting specific kinds of values
     * (e.g. phone numbers and the like) by providing either an array of characters
     * or a function.
     */
    mask: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func,
    ]),
    /**
     * Specifies the maximum value the field can have.
     */
    max: PropTypes.number,
    /**
     * Specifies the maximum number of characters that the user can enter.
     */
    maxLength: PropTypes.number,
    /**
     * Specifies the minimum value the field can have.
     */
    min: PropTypes.number,
    /**
     * Specifies the minimum number of characters that the user needs to enter.
     */
    minLength: PropTypes.number,
    /**
     * Specifies name of the field
     */
    name: PropTypes.string,
    /**
     * Specify an event handler function to be called in response to `onBlur` event.
     */
    onBlur: PropTypes.func,
    /**
     * Specify an event handler functionto be called to handle `onChange` event.
     * Necessary for using the Input as a controlled component, in conjunction with
     * the `value` prop.
     */
    onChange: PropTypes.func,
    /**
     * Specify an event handler function to be called in response to `onClick` event.
     */
    onClick: PropTypes.func,
    /**
     * Specify an event handler function to be called in response to `onFocus` event.
     */
    onFocus: PropTypes.func,
    /**
     * Specify an event handler function to be called in response to `onKeyDown` event.
     */
    onKeyDown: PropTypes.func,
    /**
     * A hint to the user of what can be entered in the input.
     */
    placeholder: PropTypes.string,
    /**
     * Specifies that the user must fill in a value before submitting a form.
     */
    required: PropTypes.bool,
    /**
     * Specifies whether or not to show the spinners for the numeric control. This attribute is optional.
     */
    showSpinners: PropTypes.bool,
    /**
     * Supply any inline styles to the Input\'s container. Mainly used for padding and margins.
     */
    style: PropTypes.shape({}),
    /**
     * An Input can receive focus.
     */
    tabIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /**
     * The HTML input type.
     */
    type: PropTypes.oneOf(['email', 'number', 'password', 'tel', 'text']),
    /**
     * The initial value of the control. This attribute is optional; however, you must use it
     * if using `onChange` prop and using the Input as a controlled component.
     */
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    autoComplete: null,
    allowDecimals: true,
    allowNegativeNumbers: true,
    autoFocus: null,
    className: null,
    dataTestId: undefined,
    disable: false,
    disabled: false,
    error: null,
    fluid: false,
    forwardedRef: undefined,
    guide: false,
    icon: null,
    id: null,
    inputMode: null,
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
    value: undefined,
};

/**
 * The Input represents a field for storing a value.
 */
class Input extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isFocused: false,
            inputActionsTopPosition: 0,
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

        this.input = props.forwardedRef ?? React.createRef();
    }

    componentDidMount() {
        const {
            autoFocus,
            icon,
            loading,
            mask,
        } = this.props;

        const type = this.getType();

        if (isString(icon) || isObject(icon) || loading || type === 'number') {
            const inputTop = mask ?
                this.input.current.inputElement.offsetTop :
                this.input.current.offsetTop;

            if (inputTop > 0) {
                this.setState({ inputActionsTopPosition: inputTop });
            }
        }

        if (autoFocus) {
            if (mask) {
                this.input.current.inputElement.focus();
            } else {
                this.input.current.focus();
            }

            this.setState({
                isFocused: true,
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
            allowDecimals,
            allowNegativeNumbers,
            onKeyDown,
        } = this.props;

        const type = this.getType();

        if (isFunction(onKeyDown)) {
            onKeyDown(event);
        }

        if (type === 'number') {
            const isCtrlKey = event.metaKey || // detects Apple Command key - https://stackoverflow.com/a/3922353/7415670 | https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey
                event.ctrlKey || // CTRL key modifier flag
                event.keyCode === KeyCode.Ctrl; // key code signifies the CTRL key

            const shouldAllowCharacter =
                event.keyCode === KeyCode.Backspace || // allow the backspace key
                event.keyCode === KeyCode.LeftArrow || // allow left arraw
                event.keyCode === KeyCode.RightArrow || // allow right arrow
                event.keyCode === KeyCode.Tab || // allow tab key
                /* eslint-disable max-len */
                (event.keyCode >= KeyCode.NormalNumber_0 && event.keyCode <= KeyCode.NormalNumber_9) || // allow digits 0-9 from the "normal" number keys at the top of the keybaord
                (event.keyCode >= KeyCode.NumberPad_0 && event.keyCode <= KeyCode.NumberPad_9) || // allow digits 0-9 from the numeric keypad to the left of the keyboard - https://stackoverflow.com/a/13196983/7415670
                /* eslint-enable max-len */
                (allowDecimals && event.keyCode === KeyCode.Dot) || // allow dot as the decimal separator if `allowDecimals` is `true` / TODO/FIXME: some locales use comma instead of dot!
                (allowNegativeNumbers && event.keyCode === KeyCode.Minus) || // allow minus sign if `allowNegativeNumbers` is true
                (isCtrlKey && event.keyCode === KeyCode.Letter_A) || // allow CTRL+A for Select All
                (isCtrlKey && event.keyCode === KeyCode.Letter_C) || // allow CTRL+C for Copy
                (isCtrlKey && event.keyCode === KeyCode.Letter_V) || // allow CTRL+V for Paste
                (isCtrlKey && event.keyCode === KeyCode.Letter_X) || // allow CTRL+X for Cut
                (isCtrlKey && event.keyCode === KeyCode.Letter_Y) || // allow CTRL+Y for Redo
                (isCtrlKey && event.keyCode === KeyCode.Letter_Z); // allow CTRL+Z for Undo

            if (!shouldAllowCharacter) {
                event.preventDefault();
            }
        }
    }

    onNumberToggleClick(action) {
        const {
            disable,
            disabled,
            mask,
            max,
            min,
            type,
        } = this.props;

        const isDisabled = disable || disabled;
        let value;

        if (mask) {
            value = this.input.current.inputElement.value;
        } else {
            value = this.input.current.value;
        }

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
            mask,
            onChange,
        } = this.props;

        if (isFunction(onChange)) {
            onChange(value);
        } else if (mask) {
            this.input.current.inputElement.value = value;
        } else {
            this.input.current.value = value;
        }
    }

    render() {
        const {
            autoComplete,
            className,
            dataTestId,
            disable,
            disabled,
            error,
            fluid,
            guide,
            icon,
            id,
            inputMode,
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

            const shouldShowRequiredIndicator = required && !value;

            return (
                <label className={labelContainerClassNames} htmlFor={id} style={labelStyle}>
                    {label}

                    {shouldShowRequiredIndicator && (
                        <span className="input-required-indicator">*</span>
                    )}
                </label>
            );
        };

        return (
            <div
                className={containerClasses}
                style={style}
            >
                {newLabelPosition === 'top' && renderLabel()}

                {mask ? (
                    <InputMasked
                        autoComplete={autoComplete}
                        data-testid={dataTestId}
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
                        ref={this.input}
                        required={required}
                        tabIndex={tabIndex}
                        type={type}
                        value={value}
                    />
                ) : (
                    <input
                        autoComplete={autoComplete}
                        data-testid={dataTestId}
                        disabled={isDisabled}
                        id={id}
                        inputMode={inputMode}
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
                        ref={this.input}
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

const InputWrapper = React.forwardRef((props, ref) => ((
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Input {...props} forwardedRef={ref} />
)));

InputWrapper.displayName = 'Input';

const wrapperPropTypes = { ...propTypes };
delete wrapperPropTypes.forwardedRef;

const wrapperDefaultProps = { ...defaultProps };
delete wrapperDefaultProps.forwardedRef;

InputWrapper.propTypes = wrapperPropTypes;
InputWrapper.defaultProps = wrapperDefaultProps;

export default InputWrapper;
