'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Icon from '../Elements/Icon.react';

class Checkbox extends Component {

    constructor(props) {
        super(props);

        this.state = { isChecked: props.checked }
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.checked, nextProps.checked)) {
            this.setState({ isChecked: nextProps.checked });
        }
    }

    render() {
        const { align, className, disabled, fluid, id, inverse,
            label, labelClick, labelStyle, name, style, toggle, value } = this.props;
        const isChecked = this.state.isChecked;
        const containerClasses = ClassNames('ui', 'checkbox', className, {
            'checkbox-align-left': align === 'left',
            'checkbox-align-right': align === 'right',
            'checkbox-disabled': disabled,
            'checkbox-full-width': fluid,
            'checkbox-inverse': inverse,
            'checkbox-is-checked': isChecked,
            'checkbox-toggle': toggle
        });
        const labelClasses = ClassNames('label', {
            'label-not-clickable': !_.isUndefined(labelClick) && labelClick === false
        });

        return (
            <div
                className={containerClasses}
                onClick={this._onClick.bind(this)}
                style={style}
            >
                <input
                    checked={isChecked}
                    className="input"
                    disabled={disabled}
                    id={id}
                    name={name}
                    readOnly={true}
                    type="checkbox"
                    value={value}
                />

                <label className={labelClasses}>
                    {label ? (
                        <span onClick={this._onLabelClick.bind(this)} style={labelStyle}>{label}</span>
                    ) : null}

                    {toggle ? (
                        <div className="checkbox-toggle-text">
                            <span className="checkbox-toggle-text-on">On</span>
                            <span className="checkbox-toggle-text-off">Off</span>
                        </div>
                    ) : null}

                    <Icon compact inverse size={16} type="check" />
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
    style: PropTypes.object,
    toggle: PropTypes.bool,
    value: PropTypes.string
}

export default Checkbox;
