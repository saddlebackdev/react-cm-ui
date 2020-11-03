/* eslint-disable linebreak-style */
import { isFunction } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_RADIO_ITEM,
    BEM_RADIO,
} from '../../global/constants';

const propTypes = {
    checked: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    index: PropTypes.number,
    label: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
};

const defaultProps = {
    checked: false,
    className: null,
    id: null,
    index: null,
    label: null,
    name: null,
    onClick: null,
    onKeyDown: null,
    style: null,
    tabIndex: -1,
    value: undefined,
};

class RadioItem extends React.Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    onClick() {
        const {
            id,
            index,
            onClick,
            value: customValue,
        } = this.props;

        onClick(id || index, customValue);
    }

    onKeyDown(event) {
        const {
            id,
            index,
            onKeyDown,
        } = this.props;

        if (isFunction(onKeyDown)) {
            onKeyDown(event, id || index);
        }
    }

    onMouseDown(event) {
        event.preventDefault();
    }

    render() {
        const {
            checked: isChecked,
            className,
            id,
            label,
            name,
            tabIndex,
            disable,
        } = this.props;

        const rootClasses = ClassNames(
            BEM_RADIO,
            BEM_RADIO_ITEM,
            className,
            {
                [`${BEM_RADIO_ITEM}-is-checked`]: isChecked,
                // 'radio-item-is-checked': isChecked,
                [`${BEM_RADIO_ITEM}-is-disabled`]: disable,
                // 'radio-item-is-disabled': disable,
            },
        );

        return (
            <div
                aria-checked={isChecked}
                className={rootClasses}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                onMouseDown={this.onMouseDown}
                role="radio"
                tabIndex={tabIndex}
            >
                <input
                    checked={isChecked}
                    className="input"
                    id={id}
                    name={name}
                    readOnly
                    type="radio"
                />

                <label
                    className="label"
                    htmlFor={id}
                >
                    {label}
                </label>
            </div>
        );
    }
}

RadioItem.propTypes = propTypes;
RadioItem.defaultProps = defaultProps;

export default RadioItem;
