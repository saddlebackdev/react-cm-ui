'use strict';

import _ from 'lodash';
import autosize from 'autosize';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TextArea extends Component {
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
        const { autoHeight, className, columns,
            disabled, error, fluid,
            id, inverse, label, labelStyle,
            maxHeight, maxLength, minHeight, minLength, name,
            placeholder, required, resize, rows, style } = this.props;
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
                    <label className="label" htmlFor={id} style={labelStyle}>
                        {label}

                        {required && !this.state.value ? (
                            <span className="text-area-required-indicator">*</span>
                        ) : null}
                    </label>
                ) : null}

                <div className="text-area-container">
                    <textarea
                        disabled={disabled}
                        cols={columns}
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
                        rows={rows}
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
                if (this.state.value) {
                    autosize(ReactDOM.findDOMNode(this.refs.textArea));
                    clearInterval(autoResize);
                }
            }, 150);
        }

        if (this.props.autoFocus) {
            ReactDOM.findDOMNode(this.refs.textArea).focus();

            this.setState({
                isFocused: true
            })
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
    autoFocus: PropTypes.bool,
    autoHeight: PropTypes.bool,
    className: PropTypes.string,
    columns: PropTypes.number,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    fluid: PropTypes.bool,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    maxHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    maxLength: PropTypes.number,
    minHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    minLength: PropTypes.number,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    resize: PropTypes.bool,
    rows: PropTypes.number,
    style: PropTypes.object,
    value: PropTypes.string
};

export default TextArea;
