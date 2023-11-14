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
import { InputScreenGuard } from '../greyScreenGuard';
import Icon from '../../dataDisplay/icon';
import KeyCode from '../../global/keyCode';

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
     * Forces the Input component to always show the required indicator
     * next to the label. The default behavior (if this prop is omitted or false) is for
     * the required field indicator to disappear once a value has been entered.
     */
    alwaysShowRequiredIndicator: PropTypes.bool,
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
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }), // eslint-disable-line react/forbid-prop-types
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
     * To prevent sensitive data from being read, we need to be able to block the contents of the
     * control with a gray placeholder. This flag triggers this kind of display instead of the usual one.
     */
    isRedacted: PropTypes.bool,

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
    type: PropTypes.oneOf(['email', 'file', 'number', 'password', 'tel', 'text']),
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
    alwaysShowRequiredIndicator: false,
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
    isRedacted: false,
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
                        const newValueAsNumber = +newValue;

                        if (isNumber(max)) {
                            newValue = Math.min(max, newValueAsNumber);
                        }

                        if (isNumber(min)) {
                            newValue = Math.max(min, newValueAsNumber);
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
            let shouldAllowCharacter = false;

            switch (event.keyCode) {
                // allow backspace, arrow keys and positioning keys
                case KeyCode.Backspace:
                case KeyCode.LeftArrow:
                case KeyCode.RightArrow:
                case KeyCode.Tab:
                case KeyCode.Home:
                case KeyCode.End:
                    shouldAllowCharacter = true;
                    break;

                // allow dot as the decimal separator if `allowDecimals` is `true` / TODO/FIXME: some locales use comma instead of dot!
                case KeyCode.Dot:
                case KeyCode.NumberPad_Dot:
                    shouldAllowCharacter = allowDecimals;
                    break;

                // allow minus sign if `allowNegativeNumbers` is true
                case KeyCode.Minus:
                case KeyCode.NumberPad_Minus:
                    shouldAllowCharacter = allowNegativeNumbers;
                    break;

                // allow CTRL keyboard gestures for select all, copy and paste, undo and redo
                case KeyCode.Letter_A:
                case KeyCode.Letter_C:
                case KeyCode.Letter_V:
                case KeyCode.Letter_X:
                case KeyCode.Letter_Y:
                case KeyCode.Letter_Z: {
                    const isCtrlKey = event.metaKey || // detects Apple Command key - https://stackoverflow.com/a/3922353/7415670 | https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey
                        event.ctrlKey || // CTRL key modifier flag
                        event.keyCode === KeyCode.Ctrl; // key code signifies the CTRL key

                    shouldAllowCharacter = isCtrlKey;
                    break;
                }

                // allow digits
                default:
                    /* eslint-disable max-len */
                    shouldAllowCharacter = (event.keyCode >= KeyCode.NormalNumber_0 && event.keyCode <= KeyCode.NormalNumber_9) ||
                        (event.keyCode >= KeyCode.NumberPad_0 && event.keyCode <= KeyCode.NumberPad_9);
                    /* eslint-enable max-len */
            }

            // prevent the keystroke if it's a character we don't want to allow for numbers
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
            case 'file':
                newType = 'file';
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
            alwaysShowRequiredIndicator,
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
            isRedacted,
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
        const isDisabled = disable || disabled || isRedacted;

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
            'input-type-file': type === 'file',
        });

        const labelContainerClassNames = ClassNames('label', {
            'label-bottom': newLabelPosition === 'bottom',
            'label-top': newLabelPosition === 'top',
        });

        const renderLabel = () => {
            if (!label) {
                return null;
            }

            const shouldShowRequiredIndicator = required && (alwaysShowRequiredIndicator || !value);

            return (
                <label className={labelContainerClassNames} htmlFor={id} style={labelStyle}>
                    {label}

                    {shouldShowRequiredIndicator && (
                        <span className="input-required-indicator">*</span>
                    )}
                </label>
            );
        };

        if (type === 'file') {
            return (
                <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...this.props}
                    ref={this.input}
                />
            );
        }

        return (
            <div
                className={containerClasses}
                style={style}
            >
                {isRedacted && <InputScreenGuard hasLabel={!isEmpty(label)} />}

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
                        value={isRedacted ? '' : value}
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
                        value={isRedacted ? '' : value}
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
