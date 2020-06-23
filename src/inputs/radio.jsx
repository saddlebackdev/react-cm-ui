import {
    clone,
    includes,
    isArray,
    isEqual,
    isFunction,
    remove,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import RadioItem from './radioItem';

const propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    checked: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * A DatePickerInput can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    labelClick: PropTypes.bool,
    multi: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    pill: PropTypes.bool,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
    value: PropTypes.string,
};

const defaultProps = {
    align: null,
    checked: null,
    children: null,
    className: null,
    disable: false,
    disabled: false,
    fluid: false,
    id: null,
    label: null,
    labelClick: false,
    multi: false,
    name: null,
    onChange: null,
    pill: false,
    style: null,
    tabIndex: -1,
    value: null,
};

const isCheckedSingle = (c, i, isChecked) => (
    c.id ? c.id === isChecked : i === isChecked
);

const isCheckedMulti = (c, i, isChecked) => {
    const id = c.id ? c.id : i;
    return includes(isChecked, id);
};

class Radio extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isChecked: props.checked };

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onLabelClick = this.onLabelClick.bind(this);
        this.onLabelKeyDown = this.onLabelKeyDown.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            checked: prevChecked,
            disabled: prevDisabled,
        } = prevProps;
        const {
            checked,
            disabled,
        } = this.props;

        if (!isEqual(checked, prevChecked)) {
            this.setState({ isChecked: checked });
        }

        if (prevDisabled !== disabled && disabled) {
            // eslint-disable-next-line no-console
            console.warn('Radio (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }
    }

    onClick(idArg) {
        const {
            disable,
            disabled,
            id,
            onChange,
            pill,
            multi,
        } = this.props;
        const {
            isChecked,
        } = this.state;
        let newValue = clone(isChecked);

        if (multi) {
            if (includes(newValue, idArg)) {
                remove(newValue, (v) => v === idArg);
            }

            if (!includes(newValue, idArg) && isArray(newValue)) {
                newValue.push(idArg);
            } else {
                newValue = [idArg];
            }
        } else if (pill) {
            newValue = idArg;
        } else {
            newValue = true;
        }

        if (!disable && !disabled) {
            if (isFunction(onChange)) {
                onChange(pill ? idArg : id, newValue);
            } else {
                this.setState({ isChecked: newValue });
            }
        }
    }

    onKeyDown() {
        /**
         * NOTE: Need to use a prop function here someday.
         */

        return null;
    }

    onLabelClick(event) {
        const { labelClick } = this.props;

        if (labelClick === false) {
            event.stopPropagation();
        }
    }

    onLabelKeyDown() {
        /**
         * NOTE: Need to use a prop function here someday.
         */

        return null;
    }

    render() {
        const {
            align,
            children,
            className,
            disable,
            disabled,
            fluid,
            id,
            label,
            labelClick,
            multi,
            name,
            pill,
            style,
            tabIndex,
            value,
        } = this.props;
        const { isChecked } = this.state;
        const isDisabled = disable || disabled;
        const containerClasses = ClassNames('ui', 'radio', className, {
            'radio-align-left': align === 'left',
            'radio-align-right': align === 'right',
            'radio-disabled': isDisabled,
            'radio-full-width': fluid,
            'radio-is-checked': isChecked && !pill,
            'radio-pill': pill,
        });
        const labelClasses = ClassNames('label', {
            'label-not-clickable': labelClick === false,
        });

        if (pill) {
            const isCheckedItem = multi ? isCheckedMulti : isCheckedSingle;
            return (
                <div className={containerClasses} style={style}>
                    {React.Children.map(children, (c, i) => React.cloneElement(c, {
                        index: i,
                        checked: isCheckedItem(c, i, isChecked),
                        name: multi ? null : name,
                        onClick: this.onClick,
                    }))}
                </div>
            );
        }

        return (
            <div
                aria-checked={isChecked}
                aria-labelledby={id}
                className={containerClasses}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                role="radio"
                style={style}
                tabIndex={tabIndex}
            >
                <input
                    checked={isChecked}
                    className="input"
                    disabled={isDisabled}
                    id={id}
                    name={name}
                    readOnly
                    type="radio"
                    value={value}
                />

                <span className={labelClasses}>
                    {label && (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <span
                            onClick={this.onLabelClick}
                            onKeyDown={this.onLabelKeyDown}
                        >
                            {label}
                        </span>
                    )}
                </span>
            </div>
        );
    }
}

Radio.Item = RadioItem;

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
