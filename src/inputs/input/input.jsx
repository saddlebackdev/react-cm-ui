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
import withStyles from '../../styles/withStyles';

const propTypes = {
    actions: PropTypes.node,
    autoComplete: PropTypes.oneOf(['off', 'on']),
    autoFocus: PropTypes.bool,
    /**
     * Override or extend the styles applied to Input.
     */
    classes: PropTypes.shape({
        actions: PropTypes.string,
        root: PropTypes.string,
        hasError: PropTypes.string,
        hasActions: PropTypes.string,
        hasValue: PropTypes.string,
        inputContainer: PropTypes.string,
        isDisabled: PropTypes.string,
        isFluid: PropTypes.string,
        isFocused: PropTypes.string,
        isNumberType: PropTypes.string,
        isRequired: PropTypes.string,
        isRequirementComplete: PropTypes.string,
        isRequirementIncomplete: PropTypes.string,
        isThemeActiveConstrast: PropTypes.string,
    }).isRequired,
    className: PropTypes.string,
    /**
     * An Input can be disabled.
     */
    disable: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    fluid: PropTypes.bool,
    guide: PropTypes.bool,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    keepCharPositions: PropTypes.bool,
    label: PropTypes.string,
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
    /**
     * Indicates whether or not the Input can be focused and where it participates in
     * sequential keyboard navigation.
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
     */
    tabIndex: PropTypes.number,
    theme: PropTypes.oneOf(['activeContrast', 'default']),
    type: PropTypes.oneOf([
        'email',
        'number',
        'password',
        'tel',
        'text',
    ]),
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    actions: null,
    autoComplete: null,
    autoFocus: null,
    className: null,
    disable: false,
    error: null,
    fluid: false,
    guide: false,
    id: null,
    inverse: false,
    keepCharPositions: false,
    label: null,
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
    tabIndex: -1,
    theme: 'default',
    type: null,
    value: null,
};

const REQUIREMENT_FULLFILLMENT_COMPLETE = 'complete';
const REQUIREMENT_FULLFILLMENT_INCOMPLETE = 'incomplete';

const styles = (theme) => ({
    hasError: {},
    hasActions: {},
    hasValue: {},
    inputContainer: {
        position: 'relative',
    },
    isDisabled: {},
    isFluid: {},
    isFocused: {},
    isNumberType: {},
    isRequired: {},
    isRequirementComplete: {},
    isRequirementIncomplete: {},
    isThemeActiveConstrast: {},
    actions: {
        alignItems: 'center',
        display: 'flex',
        height: 44,
        paddingRight: 6,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    root: {
        color: theme.palette.text.primary,
        display: 'inline-block',
        fontSize: theme.typography.htmlFontSize,
        position: 'relative',
        '& .label': {
            marginBottom: 8,
        },
        '& .input-required-indicator': {
            color: theme.palette.error.main,
            display: 'inline-block',
            fontSize: theme.typography.fontSize,
            marginLeft: 3,
        },
        '& input': {
            WebkitAppearance: 'none',
            backgroundColor: theme.palette.background.primary,
            borderRadius: 3,
            border: `1px solid ${theme.palette.border.primary}`,
            lineHeight: '42px',
            margin: 0,
            outline: 'none',
            padding: [[0, 11]],
            textAlign: 'left',
            transition: 'border-color 150ms ease-out',
            width: '100%',
            '&::placeholder': {
                color: theme.palette.text.secondary,
            },
        },

        '&$isDisabled': {
            '&.input-icon': {
                color: theme.palette.text.secondary,
            },
            '& input': {
                backgroundColor: theme.palette.background.secondary,
                color: theme.palette.text.primary,
            },
        },
        '&$hasError': {
            '& input': {
                borderColor: `${theme.palette.error.main} !important`,
            },
            '&.input-error-message': {
                color: theme.palette.error.main,
                fontSize: theme.typography.fontSize,
            },
        },
        '&$isFluid': {
            display: 'block',
        },
        '&$hasActions': {
            '& input': {
                paddingRight: 43,
            },
        },
        '&$isRequired:not($isFocused)': {
            '&$isRequirementComplete input': {
                borderColor: theme.palette.success.main,
            },
            '&$isRequirementIncomplete input': {
                borderColor: theme.palette.error.main,
            },
        },
        '&$isFocused': {
            '& input': {
                borderColor: theme.palette.active.main,
            },
            '&$isThemeActiveConstrast$hasValue input': {
                borderColor: theme.palette.background.contrastPrimary,
                backgroundColor: theme.palette.background.contrastPrimary,
                color: theme.palette.text.contrastText,
            },
        },
        '&$isNumberType': {
            '& input': {
                MozAppearance: 'textfield',
                '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                    margin: 0,
                },
            },
            '& .input-number-controls': {
                marginTop: -13,
                position: 'absolute',
                right: 11,
                top: '50%',
                '& button': {
                    backgroundColor: 'transparent',
                    border: 0,
                    display: 'block',
                    padding: 0,
                    outline: 'none',
                    '&:last-child': {
                        marginTop: 2,
                    },
                },
                '& svg': {
                    display: 'block',
                },
            },
        },
        '& + *': {
            marginTop: theme.spacing(2),
        },
    },
});

class Input extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hasValue: !!props.value,
            isFocused: false,
            requirementFullfillment: null,
        };

        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onNumberToggleDownClick = this.onNumberToggleDownClick.bind(this);
        this.onNumberToggleUpClick = this.onNumberToggleUpClick.bind(this);

        this.inputRef = React.createRef();
        this.inputTimer = null;
        this.previousInputValue = '';
    }

    componentDidMount() {
        const { autoFocus } = this.props;

        if (autoFocus) {
            // eslint-disable-next-line react/no-find-dom-node, no-underscore-dangle
            // ReactDOM.findDOMNode(this.inputRef).focus();

            this.setState({
                isFocused: true,
            });
        }
    }

    onBlur(event) {
        const {
            onBlur,
        } = this.props;

        const newValue = event.target.value;

        if (isFunction(onBlur)) {
            onBlur(newValue);
        }
        this.setState({
            isFocused: false,
        });
    }

    onChange(event) {
        const {
            disable: isDisabled,
            max,
            min,
            required,
        } = this.props;

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
            onKeyDown,
        } = this.props;

        if (isFunction(onKeyDown)) {
            onKeyDown(event);
        }
    }

    onNumberToggleClick(action) {
        const {
            disable: isDisabled,
            max,
            min,
            type,
        } = this.props;

        const { value } = this.inputRef;

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
            onChange,
        } = this.props;

        if (isFunction(onChange)) {
            onChange(value);
        } else {
            this.inputRef.current.value = value;
        }

        this.setState({
            hasValue: !!value,
            requirementFullfillment: value ?
                REQUIREMENT_FULLFILLMENT_COMPLETE :
                REQUIREMENT_FULLFILLMENT_INCOMPLETE,
        });
    }

    render() {
        const {
            actions,
            autoComplete,
            classes,
            className,
            disable: isDisabled,
            error,
            fluid,
            guide,
            id,
            inverse,
            keepCharPositions,
            label,
            mask,
            max,
            maxLength,
            min,
            minLength,
            name,
            placeholder,
            required: isRequired,
            showSpinners,
            tabIndex,
            theme,
            value,
        } = this.props;

        const {
            hasValue,
            isFocused,
            requirementFullfillment,
        } = this.state;

        const type = this.getType();

        const containerClasses = ClassNames(
            'ui',
            'input',
            classes.root,
            className,
            {
                'input-has-value': value,
                'input-inverse': inverse,
                'input-type-email': type === 'email',
                'input-type-password': type === 'password',
                'input-type-tel': type === 'tel',
                'input-type-text': type === 'text',
                [classes.hasError]: error,
                [classes.hasActions]: actions,
                [classes.hasValue]: hasValue,
                [classes.isDisabled]: isDisabled,
                [classes.isFluid]: fluid,
                [classes.isFocused]: isFocused,
                [classes.isNumberType]: type === 'number',
                [classes.isRequired]: isRequired,
                [classes.isRequirementComplete]:
                    requirementFullfillment === REQUIREMENT_FULLFILLMENT_COMPLETE,
                [classes.isRequirementIncomplete]:
                    requirementFullfillment === REQUIREMENT_FULLFILLMENT_INCOMPLETE,
                [classes.isThemeActiveConstrast]: theme === 'activeContrast',
            },
        );

        return (
            <div className={containerClasses}>
                {label && (
                    <label className="label" htmlFor={id}>
                        {label}

                        {isRequired && (
                            <span className="input-required-indicator">*</span>
                        )}
                    </label>
                )}

                <div
                    className={classes.inputContainer}
                >
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
                            ref={this.inputRef}
                            required={isRequired}
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
                            ref={this.inputRef}
                            required={isRequired}
                            tabIndex={tabIndex}
                            type={type}
                            value={value}
                        />
                    )}

                    {(isObject(actions) || type === 'number') && (
                        <div
                            className="input--actions"
                            ref={(ref) => { this.inputActionsRef = ref; }}
                        >
                            {isObject(actions) && (
                                <div className={classes.actions}>
                                    {actions}
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
                </div>

                {error && isString(error) && (
                    <p className="input-error-message">{error}</p>
                )}
            </div>
        );
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default withStyles(styles)(Input);
