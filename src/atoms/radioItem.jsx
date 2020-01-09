import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class RadioItem extends Component {
    onClick() {
        const { id, index, onClick } = this.props;

        onClick(id || index);
    }

    render() {
        const { checked, className, id, label, name } = this.props;
        const containerClasses = ClassNames('radio-item', className, {
            'radio-item-is-checked': checked,
        });

        return (
            <div className={containerClasses} onClick={this.onClick.bind(this)}>
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

export default RadioItem;
