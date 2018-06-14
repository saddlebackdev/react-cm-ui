'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Icon from '../Elements/Icon.react';

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = { isChecked: props.checked || false }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.checked, nextProps.checked)) {
            this.setState({ isChecked: nextProps.checked });
        }
    }

    render() {
        const { align, className, disabled, fluid, id, inverse,
            label, labelClick, labelStyle, name, size, style, toggle, value } = this.props;
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
            'checkbox-toggle': toggle
        });
        const labelClasses = ClassNames('checkbox-label', {
            'label-not-clickable': !_.isUndefined(labelClick) && labelClick === false
        });
        const checkSize = size === 'small' ? 8 : 10;

        return (
            <div
                className={containerClasses}
                onClick={this._onClick.bind(this)}
                style={style}
            >
                <input
                    checked={isChecked}
                    className="input"
                    disabled={newDisabled}
                    id={id}
                    name={name}
                    readOnly
                    type="checkbox"
                    value={newValue}
                />

                <label className={labelClasses}>
                    {label ? (
                        <span
                            className="checkbox-label-text"
                            onClick={this._onLabelClick.bind(this)}
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

    _onClick(event) {
        const { disabled, id, onChange } = this.props;
        const isChecked = this.state.isChecked;

        if (!_.isUndefined(onChange)) {
            onChange(id, !isChecked, event);
        } else if (!disabled) {
            this.setState({ isChecked: !isChecked });
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
const sizeEnums = [ 'small', 'large' ];

Checkbox.propTypes = {
    align: PropTypes.oneOf(alignEnums),
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    label: PropTypes.string,
    labelClick: PropTypes.bool,
    labelStyle: PropTypes.object,
    name: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(sizeEnums),
    style: PropTypes.object,
    toggle: PropTypes.bool,
    value: PropTypes.string
}

export default Checkbox;
