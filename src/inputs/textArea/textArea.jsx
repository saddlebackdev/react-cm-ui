import {
    isFunction,
    isString,
    isUndefined,
    get,
} from 'lodash';
import autosize from 'autosize';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
    autoFocus: PropTypes.bool,
    autoHeight: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.number,
    /**
     * A TextArea can be disabled.
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
    id: PropTypes.string,
    inverse: PropTypes.bool,
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
    autoFocus: false,
    autoHeight: false,
    className: null,
    columns: null,
    disable: false,
    disabled: false,
    error: null,
    fluid: false,
    id: null,
    inverse: false,
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
    }

    componentDidMount() {
        const {
            autoFocus,
            autoHeight,
            onAutoHeightResized,
            value,
        } = this.props;

        if (autoHeight && this.textArea) {
            // eslint-disable-next-line react/no-find-dom-node
            const textArea = ReactDOM.findDOMNode(this.textArea);

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

        if (autoFocus && this.textArea) {
            // eslint-disable-next-line react/no-find-dom-node
            ReactDOM.findDOMNode(this.textArea).focus();

            this.setState({
                isFocused: true,
            });
        }
    }

    componentDidUpdate(prevProps) {
        const {
            disabled: prevDisabled,
        } = prevProps;
        const {
            disabled,
        } = this.props;

        if (prevDisabled !== disabled && disabled) {
            // eslint-disable-next-line no-console
            console.warn('TextArea (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }
    }

    componentWillUnmount() {
        const {
            autoHeight,
            onAutoHeightResized,
        } = this.props;

        if (autoHeight && isFunction(onAutoHeightResized)) {
            // eslint-disable-next-line react/no-find-dom-node
            const textArea = ReactDOM.findDOMNode(this.textArea);

            textArea.removeEventListener('autosize:resized', this.onAutoHeightResized);
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
            this.textArea.value = valueEvent;
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
            autoHeight,
            className,
            columns,
            disable,
            disabled,
            error,
            fluid,
            id,
            inverse,
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
        const isDisabled = disable || disabled;
        const containerClasses = ClassNames('ui', 'text-area', className, {
            'text-area-auto-height': autoHeight,
            'text-area-disabled': isDisabled,
            'text-area-error': error,
            'text-area-fluid': fluid,
            'text-area-has-value': value,
            'text-area-focused': isFocused,
            'text-area-inverse': inverse,
        });

        return (
            <div className={containerClasses} style={style}>
                {label && (
                    <label className="label" htmlFor={id} style={labelStyle}>
                        {label}

                        {required && !value ? (
                            <span className="text-area-required-indicator">*</span>
                        ) : null}
                    </label>
                )}

                <div className="text-area-container">
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
                        ref={(ref) => { this.textArea = ref; }}
                        required={required}
                        rows={rows}
                        style={{
                            maxHeight,
                            minHeight,
                            resize: !isUndefined(resize) && !resize ? 'none' : 'auto',
                        }}
                        value={value}
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

export default TextArea;
