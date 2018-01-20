'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class RadioItem extends Component {

    render() {
        const { checked, className, id, label, name } = this.props;
        const containerClasses = ClassNames('radio-item', className, {
            'radio-item-is-checked': checked
        });

        return (
            <div className={containerClasses} onClick={this._onClick.bind(this)}>
                <input
                    checked={checked}
                    className="input"
                    id={id}
                    name={name}
                    readOnly={true}
                    type="radio"
                />

                <label className="label">{label}</label>
            </div>
        );
    }

    _onClick() {
        const { id, index, onClick } = this.props;

        onClick(id || index);
    }

}

RadioItem.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    index: PropTypes.number,
    label: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
};

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
        const { align, children, className, disabled, fluid, id, label, labelClick, name, pill, style, value } = this.props;
        const isChecked = this.state.isChecked;
        const containerClasses = ClassNames('ui', 'radio', className, {
            'radio-align-left': align === 'left',
            'radio-align-right': align === 'right',
            'radio-disabled': disabled,
            'radio-full-width': fluid,
            'radio-is-checked': isChecked && !pill,
            'radio-pill': pill
        });
        const labelClasses = ClassNames('label', {
            'label-not-clickable': !_.isUndefined(labelClick) && labelClick === false
        });

        if (pill) {
            return (
                <div className={containerClasses} style={style}>
                    {React.Children.map(children, (c, i) => React.cloneElement(c, {
                        index: i,
                        checked: c.id ? c.id === isChecked : i === isChecked,
                        name: name,
                        onClick: this._onClick.bind(this)
                    }))}
                </div>
            );
        } else {
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
    }

    _onClick(idArg) {
        const { disabled, id, onChange, pill } = this.props;
        const { isChecked } = this.state;

        if (!_.isUndefined(onChange)) {
            onChange(pill ? idArg : id, !isChecked);
        } else if (!disabled && !pill) {
            this.setState({ isChecked: isChecked || true });
        } else if (!disabled && pill) {
            this.setState({ isChecked: idArg });
        }
    }

    _onLabelClick(event) {
        const { labelClick } = this.props;

        if (!_.isUndefined(labelClick) && labelClick === false) {
            event.stopPropagation();
        }
    }

}

Radio.Item = RadioItem;

const alignEnums = [ 'left', 'right' ];

Radio.propTypes = {
    align: PropTypes.oneOf(alignEnums),
    checked: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    labelClick: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    pill: PropTypes.bool,
    style: PropTypes.object,
    value: PropTypes.string
}

export default Radio;
