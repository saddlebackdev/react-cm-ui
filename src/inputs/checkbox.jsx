import {
    isFunction,
} from 'lodash';
import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../dataDisplay/icon';

const propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    checked: false,
    className: PropTypes.string,
    /**
     * A TableRow can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    labelClassName: PropTypes.string,
    labelClick: PropTypes.bool,
    labelStyle: PropTypes.shape({}),
    labelWeight: PropTypes.oneOf(['bold', 'normal', 'semibold']),
    name: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['small', 'large']),
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
    toggle: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    align: null,
    checked: false,
    className: PropTypes.string,
    disable: false,
    disabled: false,
    fluid: false,
    id: null,
    inverse: null,
    label: null,
    labelClassName: null,
    labelClick: null,
    labelStyle: null,
    labelWeight: null,
    name: null,
    onChange: null,
    size: null,
    style: null,
    tabIndex: -1,
    toggle: null,
    value: null,
};

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isChecked: props.checked || false };

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onLabelClick = this.onLabelClick.bind(this);
        this.onLabelKeyDown = this.onLabelKeyDown.bind(this);
    }

    componentDidMount() {
        const { checked } = this.props;

        if (checked) {
            // isChecked is already set by the props.checked in the constructor.
            // eslint-disable-next-line no-underscore-dangle
            this._inputRef.checked = checked;
        }
    }

    componentDidUpdate(prevProps) {
        const {
            disabled: prevDisabled,
        } = prevProps;
        const {
            checked,
            disabled,
            onChange,
        } = this.props;

        if (prevDisabled !== disabled && disabled) {
            // eslint-disable-next-line no-console
            console.warn('Checkbox (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }

        if (isFunction(onChange) && prevProps.checked !== checked) {
            this.setState({
                isChecked: checked,
            }, () => {
                // eslint-disable-next-line no-underscore-dangle
                this._inputRef.checked = checked;
            });
        }
    }

    onClick(event) {
        const { disabled, id, onChange } = this.props;
        const { isChecked } = this.state;

        if (!disabled) {
            if (isFunction(onChange)) {
                onChange(id, !isChecked, event);
            } else {
                this.setState({
                    isChecked: !isChecked,
                }, () => {
                    // eslint-disable-next-line no-underscore-dangle
                    this._inputRef.checked = !isChecked;
                });
            }
        } else {
            event.stopPropagation();
        }
    }

    onKeyDown() {
        /**
         * NOTE: Need to use a prop function here someday.
         */
    }

    onLabelClick(event) {
        const { labelClick } = this.props;

        if (isFunction(labelClick) && labelClick === false) {
            event.stopPropagation();
        }
    }

    onLabelKeyDown() {
        /**
         * NOTE: Need to use a prop function here someday
         */
    }

    render() {
        const {
            align,
            className,
            disable,
            disabled,
            fluid,
            id,
            inverse,
            label,
            labelClassName,
            labelClick,
            labelStyle,
            labelWeight,
            name,
            size,
            style,
            tabIndex,
            toggle,
            value,
        } = this.props;
        const { isChecked } = this.state;
        const isDisabled = disable || disabled;
        const newValue = value || '';
        const containerClasses = ClassNames('ui', 'checkbox', className, {
            'checkbox-align-left': align === 'left',
            'checkbox-align-right': align === 'right',
            'checkbox-disabled': isDisabled,
            'checkbox-full-width': fluid,
            'checkbox-inverse': inverse,
            'checkbox-is-checked': isChecked,
            'checkbox-size-small': size === 'small',
            'checkbox-toggle': toggle,
        });
        const labelClasses = ClassNames('checkbox-label', {
            'label-not-clickable': isFunction(labelClick) && labelClick === false,
        });
        const labelTextClasses = ClassNames('checkbox-label-text', labelClassName, {
            'checkbox-label-text-weight-bold': labelWeight === 'bold',
            'checkbox-label-text-weight-normal': !labelWeight || labelWeight === 'normal',
            'checkbox-label-text-weight-semibold': labelWeight === 'semibold',
        });
        const checkSize = size === 'small' ? 8 : 10;
        const inputId = id ? `${id}_hidden_input` : null;

        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
                className={containerClasses}
                id={id}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                style={style}
                tabIndex={tabIndex}
            >
                <input
                    checked={isChecked}
                    className="input"
                    disabled={isDisabled}
                    id={inputId}
                    name={name}
                    readOnly
                    // eslint-disable-next-line no-underscore-dangle
                    ref={(ref) => { this._inputRef = ref; }}
                    type="checkbox"
                    value={newValue}
                />

                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                    className={labelClasses}
                >
                    {label && (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <span
                            className={labelTextClasses}
                            onClick={this.onLabelClick}
                            onKeyDown={this.onLabelKeyDown}
                            style={labelStyle}
                        >
                            {label}
                        </span>
                    )}

                    {toggle ? (
                        <div className="checkbox-toggle-text">
                            <span className="checkbox-toggle-text-on">On</span>
                            <span className="checkbox-toggle-text-off">Off</span>
                        </div>
                    ) : null}

                    <Icon
                        color={isDisabled ? 'static' : 'primary'}
                        compact
                        inverse
                        size={checkSize}
                        type="check"
                    />
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
