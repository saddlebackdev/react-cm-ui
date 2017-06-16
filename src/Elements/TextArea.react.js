'use strict';

import 'Collections//Elements/TextArea.scss';

import _ from 'lodash';
import autosize from 'autosize';
import ClassNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

export default class TextArea extends React.Component {
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
        const { autoHeight, className,
            disabled, error, fluid,
            id, inverse, label,
            maxHeight, maxLength, minHeight, minLength, name,
            placeholder, required, resize, style } = this.props;
        const containerClasses = ClassNames('ui', 'text-area', className, {
            'text-area-auto-height': autoHeight,
            'text-area-disabled': disabled,
            'text-area-error': error,
            'text-area-fluid': fluid,
            'text-area-has-value': this.state.value,
            'text-area-focused': this.state.isFocused,
            'text-area-inverse': inverse,
        });

        return (
            <div className={containerClasses} style={style}>
                {label ? (
                    <label className="label" htmlFor={id}>
                        {required && !this.state.value ? (
                            <span className="text-area-required-indicator">*</span>
                        ) : null}

                        {label}
                    </label>
                ) : null}

                <div className="text-area-container">
                    <textarea
                        disabled={disabled}
                        id={id}
                        name={name}
                        maxLength={maxLength}
                        minLength={minLength}
                        onBlur={this._onBlur.bind(this)}
                        onChange={this._onChange.bind(this)}
                        onClick={this._onClick.bind(this)}
                        onFocus={this._onFocus.bind(this)}
                        onKeyDown={this._onKeyDown.bind(this)}
                        placeholder={placeholder}
                        ref="textArea"
                        required={required}
                        style={{
                            maxHeight: _.isNumber(maxHeight) ? `${maxHeight}px` : _.isString(maxHeight) ? maxHeight : null,
                            minHeight: _.isNumber(minHeight) ? `${minHeight}px` : _.isString(minHeight) ? minHeight : '88px',
                            resize: !_.isUndefined(resize) && !resize ? 'none' : 'auto'
                        }}
                        value={this.state.value}
                    />

                    {error && _.isString(error) ? (
                        <p className="text-area-error-message">{error}</p>
                    ) : null}
                </div>
            </div>
        );
    }

    componentDidMount() {
        let autoResize;

        if (this.props.autoHeight) {
            autoResize = setInterval(() => {
                if (this.props.value) {
                    autosize(ReactDOM.findDOMNode(this.refs.textArea));
                    clearInterval(autoResize);
                }
            }, 150);
        }
    }

    _onBlur(event) {
        if (!_.isUndefined(this.props.onBlur)) {
            this.props.onBlur(event.target.value);
        }

        this.setState({ isFocused: false });
    }

    _onChange(event) {
        const value = event.target.value;

        if (!_.isUndefined(this.props.onChange)) {
            this.props.onChange(value);
        } else {
            this.setState({ value: value });
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
}

TextArea.propTypes = {
    autoHeight: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    error: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.string
    ]),
    fluid: React.PropTypes.bool,
    id: React.PropTypes.string,
    inverse: React.PropTypes.bool,
    label: React.PropTypes.string,
    maxHeight: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    maxLength: React.PropTypes.number,
    minHeight: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    minLength: React.PropTypes.number,
    name: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onClick: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    resize: React.PropTypes.bool,
    style: React.PropTypes.object,
    value: React.PropTypes.string
};
