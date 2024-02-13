import {
    isFunction,
    noop,
} from 'lodash';
import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { CheckboxScreenGuard } from '../greyScreenGuard';
import Icon from '../../dataDisplay/icon';

const propTypes = {
    /**
     * Forces the Checkbox component to always show the required indicator
     * next to the label. The default behavior (if this prop is omitted or false) is for
     * the required field indicator to disappear once the Checkbox is checked.
     */
    alwaysShowRequiredIndicator: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'right']),
    checked: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Deprecated prop. Please use `disabled` instead.
     */
    disable: PropTypes.bool,
    /**
     * A Checkbox can be disabled.
     */
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    /**
     * Forwarded Ref
     */
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }), // eslint-disable-line react/forbid-prop-types
    ]),
    id: PropTypes.string,
    /**
     * To prevent sensitive data from being read, we need to be able to block the contents of the
     * control with a gray placeholder. This flag triggers this kind of display instead of the usual one.
     */
    isRedacted: PropTypes.bool,
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
    required: PropTypes.bool,
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
    alwaysShowRequiredIndicator: false,
    checked: false,
    className: null,
    disable: false,
    disabled: false,
    fluid: false,
    forwardedRef: undefined,
    id: null,
    isRedacted: false,
    inverse: null,
    label: null,
    labelClassName: null,
    labelClick: null,
    labelStyle: null,
    labelWeight: null,
    name: null,
    onChange: null,
    required: false,
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

        this.checkbox = props.forwardedRef ?? React.createRef();
    }

    componentDidMount() {
        const { checked } = this.props;

        if (checked) {
            // isChecked is already set by the props.checked in the constructor.
            // eslint-disable-next-line no-underscore-dangle
            this.checkbox.current.checked = checked;
        }
    }

    componentDidUpdate(prevProps) {
        const {
            checked,
            onChange,
        } = this.props;

        if (isFunction(onChange) && prevProps.checked !== checked) {
            this.setState({
                isChecked: checked,
            }, () => {
                // eslint-disable-next-line no-underscore-dangle
                this.checkbox.current.checked = checked;
            });
        }
    }

    onClick(event) {
        const {
            disable,
            disabled,
            id,
            onChange,
        } = this.props;

        const { isChecked } = this.state;

        const isDisabled = disabled || disable;

        if (!isDisabled) {
            if (isFunction(onChange)) {
                onChange(id, !isChecked, event);
            } else {
                this.setState({
                    isChecked: !isChecked,
                }, () => {
                    this.checkbox.current.checked = !isChecked;
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
            alwaysShowRequiredIndicator,
            className,
            disable,
            disabled,
            fluid,
            id,
            isRedacted,
            inverse,
            label,
            labelClassName,
            labelClick,
            labelStyle,
            labelWeight,
            name,
            required,
            size,
            style,
            tabIndex,
            toggle,
            value,
        } = this.props;

        let { isChecked } = this.state;
        isChecked = isRedacted ? false : isChecked;
        const isDisabled = disable || disabled || isRedacted;
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

        const shouldShowRequiredIndicator = required && (alwaysShowRequiredIndicator || !isChecked);

        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
                className={containerClasses}
                id={id}
                onClick={isRedacted ? noop : this.onClick}
                onKeyDown={isRedacted ? noop : this.onKeyDown}
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
                    ref={this.checkbox}
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

                            {isRedacted && <CheckboxScreenGuard />}
                        </span>
                    )}

                    {shouldShowRequiredIndicator && (
                        <span className="checkbox-required-indicator">*</span>
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

const CheckboxWrapper = React.forwardRef((props, ref) => ((
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Checkbox {...props} forwardedRef={ref} />
)));

const wrapperPropTypes = { ...propTypes };
delete wrapperPropTypes.forwardedRef;

const wrapperDefaultProps = { ...defaultProps };
delete wrapperDefaultProps.forwardedRef;

CheckboxWrapper.displayName = 'Checkbox';
CheckboxWrapper.propTypes = wrapperPropTypes;
CheckboxWrapper.defaultProps = wrapperDefaultProps;

export default CheckboxWrapper;
