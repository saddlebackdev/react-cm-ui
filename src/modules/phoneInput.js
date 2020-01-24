import ReactPhoneInput, {
    formatPhoneNumberIntl,
    isValidPhoneNumber,
    parsePhoneNumber,
} from 'react-phone-number-input/max';
import _ from 'lodash';
import ClassNames from 'classnames';
import Divider from '../elements/divider';
import Dropdown from './dropdown';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    className: PropTypes.string,
    country: PropTypes.string,
    countryOptions: PropTypes.array,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    fluid: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

const defaultProps = {
    country: 'US',
    countryOptions: [ 'US', '|' ],
};

class CountryDropdownItem extends React.Component {
    constructor() {
        super();

        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { option } = this.props;

        return option.value !== nextProps.option.value;
    }

    render() {
        const { option } = this.props;
        const isDivider = option && option.divider;

        if (isDivider) {
            return (
                <Divider />
            );
        }

        const {
            icon: FlagIcon,
            label: title,
            value: countryCode,
        } = option;
        const containerClasses = ClassNames('Select-option');

        return (
            <div
                className={containerClasses}
                onMouseDown={this._onMouseDown}
                onMouseEnter={this._onMouseEnter}
                onMouseMove={this._onMouseMove}
                style={{ padding: '7px 11px' }}
                title={title}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}
                >
                    <FlagIcon value={countryCode} />

                    <span
                        className="country-name"
                        style={{ display: 'inline-block', flex: '0 1 auto', margin: '0 11px' }}
                    >
                        {title}
                    </span>

                    <span
                        className="phone color-static"
                        style={{ display: 'inline-block', flex: '0 1 1px' }}
                    >
                        {/*{`+${option.dialCode}`}*/}
                    </span>
                </div>
            </div>
        );
    }

    _onMouseDown(event) {
        const { onSelect, option } = this.props;

        event.preventDefault();
        event.stopPropagation();

        onSelect(option, event);
    }

    _onMouseEnter(event) {
        const { onFocus, option } = this.props;

        onFocus(option, event);
    }

    _onMouseMove(event) {
        const { onFocus, option } = this.props;

        onFocus(option, event);
    }
}

CountryDropdownItem.propTypes = {
    onFocus: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    option: PropTypes.object.isRequired,
};

const CountryDropdownValue = (selectedOption) => {
    const containerClasses = ClassNames('Select-value');
    const countryCode = selectedOption.value;
    const FlagIcon = selectedOption.icon;

    return (
        <div
            className={containerClasses}
            title={selectedOption.label}
        >
            <FlagIcon value={countryCode} />
        </div>
    );
};

class CountryDropdown extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: _.find(props.options, o => !o.divider && o.value === props.value),
        };

        this._onChange = this._onChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { onChange, options, value } = this.props;

        if (prevProps.value !== value && prevState.selectedOption.value !== value) {
            this.setState({
                selectedOption: _.find(options, o => !o.divider && o.value === value),
            }, () => {
                onChange(value);
            });
        }
    }

    render() {
        const {
            disabled,
            options,
        } = this.props;
        const { selectedOption } = this.state;

        return (
            <Dropdown
                clearable={false}
                disable={disabled}
                iconSize={10}
                iconType="caret-down"
                onChange={this._onChange}
                options={options}
                selection
                selectionMenuContainerStyle={{ width: 'auto' }}
                selectionOptionComponent={CountryDropdownItem}
                selectionValueComponent={() => CountryDropdownValue(selectedOption)}
                value={selectedOption}
            />
        );
    }

    _onChange(selectedOption) {
        const { onChange } = this.props;

        this.setState({
            selectedOption,
        }, () => {
            onChange(selectedOption.value);
        });
    }
}

class PhoneInput extends React.PureComponent {
    constructor() {
        super();

        this._onChange = this._onChange.bind(this);
    }

    render() {
        const {
            className,
            countryOptions,
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
            'phone-input--disabled': disabled,
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
                    {...this.props}
                    className=""
                    countryOptions={countryOptions}
                    countrySelectComponent={CountryDropdown}
                    fluid=""
                    onChange={this._onChange}
                    style={{}}
                />

                {error && _.isString(error) ? (
                    <p className="input-error-message">{error}</p>
                ) : null}
            </div>
        );
    }

    _onChange(value) {
        const { onChange } = this.props;
        const number = value || '';
        const phoneNumberObj = number && parsePhoneNumber(number);
        const countryCode = phoneNumberObj && phoneNumberObj.country || '';
        const dialCode = phoneNumberObj && phoneNumberObj.countryCallingCode;
        const formattedNumber = number && formatPhoneNumberIntl(number) || '';
        const isValid = number && isValidPhoneNumber(number) || false;

        onChange(number, formattedNumber, dialCode, countryCode, isValid);
    }
}

PhoneInput.propTypes = propTypes;
PhoneInput.defaultProps = defaultProps;

export default PhoneInput;
