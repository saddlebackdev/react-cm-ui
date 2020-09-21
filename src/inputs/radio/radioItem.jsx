import { isFunction } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    checked: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    index: PropTypes.number,
    label: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
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
};

class RadioItem extends React.Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    onClick() {
        const { id, index, onClick } = this.props;

        onClick(id || index);
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
            checked,
            className,
            id,
            label,
            name,
            tabIndex,
        } = this.props;

        const rootClasses = ClassNames('radio-item', className, {
            'radio-item-is-checked': checked,
        });

        return (
            <div
                aria-checked="false"
                className={rootClasses}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                onMouseDown={this.onMouseDown}
                role="radio"
                tabIndex={tabIndex}
            >
                <input
                    checked={checked}
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
