'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import React, { Component } from 'react';

class Radio extends Component {

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
        const { align, className, disabled, fluid, id, label, labelClick, name, style, value } = this.props;
        const isChecked = this.state.isChecked;
        const containerClasses = ClassNames('ui', 'radio', className, {
            'radio-align-left': align === 'left',
            'radio-align-right': align === 'right',
            'radio-disabled': disabled,
            'radio-full-width': fluid,
            'radio-is-checked': isChecked,
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
                    type="radio"
                    value={value}
                />

                <label className={labelClasses}>
                    {label ? (
                        <span onClick={this._onLabelClick.bind(this)}>{label}</span>
                    ) : null}
                </label>
            </div>
        );
    }

    _onClick() {
        const { disabled, id, onChange } = this.props;
        const isChecked = this.state.isChecked;

        if (!_.isUndefined(onChange)) {
            onChange(id, !isChecked);
        } else if (!disabled) {
            this.setState({ isChecked: isChecked || true });
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

Radio.propTypes = {
    align: React.PropTypes.oneOf(alignEnums),
    checked: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    fluid: React.PropTypes.bool,
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    labelClick: React.PropTypes.bool,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    style: React.PropTypes.object,
    value: React.PropTypes.string
}

export default Radio;
