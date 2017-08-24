'use strict';

import ClassNames from 'classnames';
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
    checked: React.PropTypes.bool,
    className: React.PropTypes.string,
    id: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    index: React.PropTypes.number,
    label: React.PropTypes.string,
    onClick: React.PropTypes.func,
    style: React.PropTypes.object
};

export default RadioItem;
