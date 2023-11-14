import {
    isEmpty,
    isFunction,
    isString,
    isUndefined,
    get,
} from 'lodash';
import autosize from 'autosize';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { InputScreenGuard } from '../greyScreenGuard';

const propTypes = {
    /**
     * Forces the TextArea component to always show the required indicator
     * next to the label. The default behavior (if this prop is omitted or false) is for
     * the required field indicator to disappear once a value has been entered.
     */
    alwaysShowRequiredIndicator: PropTypes.bool,
    autoFocus: PropTypes.bool,
    autoHeight: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.number,
    /**
     * Deprecated prop. Please use `disabled` instead.
     */
    disable: PropTypes.bool,
    /**
     * A TextArea can be disabled.
     */
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    fluid: PropTypes.bool,
    /**
     * Forwarded Ref
     */
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }), // eslint-disable-line react/forbid-prop-types
    ]),
    id: PropTypes.string,
    inverse: PropTypes.bool,
    /**
     * To prevent sensitive data from being read, we need to be able to block the contents of the
     * control with a gray placeholder. This flag triggers this kind of display instead of the usual one.
     */
    isRedacted: PropTypes.bool,
    label: PropTypes.string,
    labelStyle: PropTypes.shape({}),
    maxHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    maxLength: PropTypes.number,
    minHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    minLength: PropTypes.number,
    name: PropTypes.string,
    onAutoHeightResized: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    resize: PropTypes.bool,
    rows: PropTypes.number,
    style: PropTypes.shape({}),
    value: PropTypes.string,
};

const defaultProps = {
    alwaysShowRequiredIndicator: false,
    autoFocus: false,
    autoHeight: false,
    className: null,
    columns: null,
    disable: false,
    disabled: false,
    error: null,
    fluid: false,
    forwardedRef: undefined,
    id: null,
    inverse: false,
    isRedacted: false,
    label: null,
    labelStyle: null,
    maxHeight: null,
    maxLength: null,
    minHeight: 88,
    minLength: null,
    name: null,
    onAutoHeightResized: null,
    onBlur: null,
    onChange: null,
    onClick: null,
    onFocus: null,
    onKeyDown: null,
    placeholder: null,
    required: false,
    resize: false,
    rows: null,
    style: null,
    value: undefined,
};

class TextArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFocused: false,
        };

        this.onAutoHeightResized = this.onAutoHeightResized.bind(this);

        this.textArea = props.forwardedRef ?? React.createRef();
    }

    componentDidMount() {
        const {
            autoFocus,
            autoHeight,
            onAutoHeightResized,
            value,
        } = this.props;

        if (autoHeight && this.textArea.current) {
            const textArea = this.textArea.current;

            const autoResize = setInterval(() => {
                if (value || get(this, 'textArea.value')) {
                    clearInterval(autoResize);
                    autosize(textArea);

                    if (isFunction(onAutoHeightResized)) {
                        textArea.addEventListener('autosize:resized', this.onAutoHeightResized);
                    }
                }
            }, 150);
        }

        if (autoFocus && this.textArea.current) {
            this.textArea.current.focus();

            this.setState({
                isFocused: true,
            });
        }
    }

    componentWillUnmount() {
        const {
            autoHeight,
            onAutoHeightResized,
        } = this.props;

        if (autoHeight && isFunction(onAutoHeightResized)) {
            const textAreaElement = this.textArea.current;

            textAreaElement.removeEventListener('autosize:resized', this.onAutoHeightResized);
        }
    }

    onAutoHeightResized() {
        const {
            onAutoHeightResized,
        } = this.props;

        if (isFunction(onAutoHeightResized)) {
            onAutoHeightResized();
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
            onChange,
        } = this.props;

        const valueEvent = event.target.value;

        if (isFunction(onChange)) {
            onChange(valueEvent);
        } else {
            this.textArea.current.value = valueEvent;
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

        const {
            isFocused,
        } = this.state;

        if (isFunction(onFocus)) {
            onFocus(event);
        }

        this.setState({ isFocused: !isFocused });
    }

    onKeyDown(event) {
        const {
            onKeyDown,
        } = this.props;

        if (isFunction(onKeyDown)) {
            onKeyDown(event);
        }
    }

    render() {
        const {
            alwaysShowRequiredIndicator,
            autoHeight,
            className,
            columns,
            disable,
            disabled,
            error,
            fluid,
            id,
            inverse,
            isRedacted,
            label,
            labelStyle,
            maxHeight,
            maxLength,
            minHeight,
            minLength,
            name,
            placeholder,
            required,
            resize,
            rows,
            style,
            value,
        } = this.props;

        const {
            isFocused,
        } = this.state;

        const isDisabled = disable || disabled || isRedacted;

        const rootClasses = ClassNames('ui', 'text-area', className, {
            'text-area-auto-height': autoHeight,
            'text-area-disabled': isDisabled,
            'text-area-error': error,
            'text-area-fluid': fluid,
            'text-area-has-value': value,
            'text-area-focused': isFocused,
            'text-area-inverse': inverse,
        });

        return (
            <div className={rootClasses} style={style}>
                {label && (
                    <label className="label" htmlFor={id} style={labelStyle}>
                        {label}

                        {required && (alwaysShowRequiredIndicator || !value) ? (
                            <span className="text-area-required-indicator">*</span>
                        ) : null}
                    </label>
                )}

                <div className="text-area-container">
                    {isRedacted && <InputScreenGuard hasLabel={!isEmpty(label)} />}

                    <textarea
                        disabled={isDisabled}
                        cols={columns}
                        id={id}
                        name={name}
                        maxLength={maxLength}
                        minLength={minLength}
                        onBlur={this.onBlur.bind(this)}
                        onChange={this.onChange.bind(this)}
                        onClick={this.onClick.bind(this)}
                        onFocus={this.onFocus.bind(this)}
                        onKeyDown={this.onKeyDown.bind(this)}
                        placeholder={placeholder}
                        ref={this.textArea}
                        required={required}
                        rows={rows}
                        style={{
                            maxHeight,
                            minHeight,
                            resize: !isUndefined(resize) && !resize ? 'none' : 'auto',
                        }}
                        value={isRedacted ? '' : value}
                    />

                    {error && isString(error) && (
                        <p className="text-area-error-message">{error}</p>
                    )}
                </div>
            </div>
        );
    }
}

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

const TextAreaWrapper = React.forwardRef((props, ref) => ((
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextArea {...props} forwardedRef={ref} />
)));

const wrapperPropTypes = { ...propTypes };
delete wrapperPropTypes.forwardedRef;

const wrapperDefaultProps = { ...defaultProps };
delete wrapperDefaultProps.forwardedRef;

TextAreaWrapper.displayName = 'TextArea';
TextAreaWrapper.propTypes = wrapperPropTypes;
TextAreaWrapper.defaultProps = wrapperDefaultProps;

export default TextAreaWrapper;
