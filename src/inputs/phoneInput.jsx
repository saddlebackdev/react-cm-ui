import ReactPhoneInput, {
    formatPhoneNumberIntl,
    isValidPhoneNumber,
    parsePhoneNumber,
} from 'react-phone-number-input/max';
import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import PhoneInputCountryDropdown from './phoneInputCountryDropdown';

const propTypes = {
    className: PropTypes.string,
    country: PropTypes.string,
    countryOptions: PropTypes.arrayOf(PropTypes.string),
    /**
     * A DatePickerInput can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    fluid: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    labelStyle: PropTypes.shape({}),
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    style: PropTypes.shape({}),
    value: PropTypes.string.isRequired,
};

const defaultProps = {
    className: undefined,
    country: 'US',
    countryOptions: ['US', '|'],
    disable: false,
    disabled: false,
    error: false,
    fluid: false,
    id: undefined,
    label: undefined,
    labelStyle: undefined,
    required: false,
    style: undefined,
};

class PhoneInput extends React.PureComponent {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            disabled: prevDisabled,
        } = prevProps;
        const {
            disabled,
        } = this.props;

        if (prevDisabled !== disabled && disabled) {
            // eslint-disable-next-line no-console
            console.warn('PhoneInput (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }
    }

    onChange(value) {
        const { onChange } = this.props;
        const number = value || '';
        const phoneNumberObj = number && parsePhoneNumber(number);
        const countryCode = (phoneNumberObj && phoneNumberObj.country) || '';
        const dialCode = phoneNumberObj && phoneNumberObj.countryCallingCode;
        const formattedNumber = (number && formatPhoneNumberIntl(number)) || '';
        const isValid = (number && isValidPhoneNumber(number)) || false;

        onChange(number, formattedNumber, dialCode, countryCode, isValid);
    }

    render() {
        const {
            className,
            countryOptions,
            disable,
            disabled,
            error,
            fluid,
            id,
            label,
            labelStyle,
            required,
            style,
            value,
        } = this.props;
        const containerClasses = ClassNames('ui', 'phone-input', className, {
            'phone-input--disabled': disable || disabled,
            'phone-input--error': error,
            'phone-input--fluid': fluid,
        });

        return (
            <div
                className={containerClasses}
                id={id}
                style={style}
            >
                {label ? (
                    <label className="label" htmlFor={id} style={labelStyle}>
                        {label}

                        {required && !value ? (
                            <span className="phone-input--required_indicator">*</span>
                        ) : null}
                    </label>
                ) : null}

                <ReactPhoneInput
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...this.props}
                    className=""
                    countryOptions={countryOptions}
                    countrySelectComponent={PhoneInputCountryDropdown}
                    fluid=""
                    onChange={this.onChange}
                    style={{}}
                />

                {error && _.isString(error) ? (
                    <p className="input-error-message">{error}</p>
                ) : null}
            </div>
        );
    }
}

PhoneInput.propTypes = propTypes;
PhoneInput.defaultProps = defaultProps;

export default PhoneInput;
