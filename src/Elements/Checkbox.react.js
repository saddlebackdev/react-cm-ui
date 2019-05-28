'use strict';

import React, { Component } from 'react';
import _ from 'lodash';
import ClassNames from 'classnames';
import Icon from '../Elements/Icon.react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = { isChecked: props.checked || false };

        this._onClick = this._onClick.bind(this);
        this._onLabelClick = this._onLabelClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { checked, onChange } = this.props;

        if (_.isFunction(onChange) && prevProps.checked !== checked) {
            this.setState({
                isChecked: checked,
            }, () => {
                this._inputRef.checked = checked;
            });
        }
    }

    render() {
        const { align, className, disabled, fluid, id, inverse,
            label, labelClassName, labelClick, labelStyle, labelWeight,
            name, size, style, toggle, value } = this.props;
        const { isChecked } = this.state;
        const newDisabled = disabled || false;
        const newValue = value || '';
        const containerClasses = ClassNames('ui', 'checkbox', className, {
            'checkbox-align-left': align === 'left',
            'checkbox-align-right': align === 'right',
            'checkbox-disabled': disabled,
            'checkbox-full-width': fluid,
            'checkbox-inverse': inverse,
            'checkbox-is-checked': isChecked,
            'checkbox-size-small': size === 'small',
            'checkbox-toggle': toggle,
        });
        const labelClasses = ClassNames('checkbox-label', {
            'label-not-clickable': !_.isUndefined(labelClick) && labelClick === false,
        });
        const labelTextClasses = ClassNames('checkbox-label-text', labelClassName, {
            'checkbox-label-text-weight-bold': labelWeight == 'bold',
            'checkbox-label-text-weight-normal': !labelWeight || labelWeight === 'normal',
            'checkbox-label-text-weight-semibold': labelWeight == 'semibold',
        });
        const checkSize = size === 'small' ? 8 : 10;
        const inputId = id ? `${id}_hidden_input` : null;

        return (
            <div
                className={containerClasses}
                id={id}
                onClick={this._onClick}
                style={style}
            >
                <input
                    className="input"
                    disabled={newDisabled}
                    id={inputId}
                    name={name}
                    readOnly
                    ref={ref => this._inputRef = ref}
                    type="checkbox"
                    value={newValue}
                />

                <label className={labelClasses}>
                    {label ? (
                        <span
                            className={labelTextClasses}
                            onClick={this._onLabelClick}
                            style={labelStyle}
                        >
                            {label}
                        </span>
                    ) : null}

                    {toggle ? (
                        <div className="checkbox-toggle-text">
                            <span className="checkbox-toggle-text-on">On</span>
                            <span className="checkbox-toggle-text-off">Off</span>
                        </div>
                    ) : null}

                    <Icon compact inverse size={checkSize} type="check" />
                </label>
            </div>
        );
    }

    componentDidMount() {
        const { checked } = this.props;

        if (checked) {
            // isChecked is already set by the props.checked in the constructor.
            this._inputRef.checked = checked;
        }
    }

    _onClick(event) {
        const { disabled, id, onChange } = this.props;
        const { isChecked } = this.state;

        if (!disabled) {
            if (!_.isUndefined(onChange)) {
                onChange(id, !isChecked, event);
            } else {
                this.setState({
                    isChecked: !isChecked,
                }, () => {
                    this._inputRef.checked = !isChecked;
                });
            }
        } else {
            event.stopPropagation();
        }
    }

    _onLabelClick(event) {
        const { labelClick } = this.props;

        if (!_.isUndefined(labelClick) && labelClick === false) {
            event.stopPropagation();
        }
    }
}

const alignEnums = [ 'left', 'right' ];
const labelWeightEnums = [ 'bold', 'normal', 'semibold' ];
const sizeEnums = [ 'small', 'large' ];

Checkbox.propTypes = {
    align: PropTypes.oneOf(alignEnums),
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),
    labelClassName: PropTypes.string,
    labelClick: PropTypes.bool,
    labelStyle: PropTypes.object,
    labelWeight: PropTypes.oneOf(labelWeightEnums),
    name: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(sizeEnums),
    style: PropTypes.object,
    toggle: PropTypes.bool,
    value: PropTypes.string,
};

export default Checkbox;
