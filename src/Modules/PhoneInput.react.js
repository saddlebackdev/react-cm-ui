'use strict';

import React, { Component } from 'react';
import _ from 'lodash';
import ClassNames from 'classnames';
import CountryTelephoneData from 'country-telephone-data';
import Dropdown from './Dropdown.react';
import Input from '../Elements/Input.react';
import PropTypes from 'prop-types';

class CountrySelectionOption extends Component {
    constructor() {
        super();

        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
    }

    render() {
        const { className, option } = this.props;
        const containerClasses = ClassNames('Select-option', className);

        return (
            <div
                className={containerClasses}
                onMouseDown={this._onMouseDown}
                onMouseEnter={this._onMouseEnter}
                onMouseMove={this._onMouseMove}
                style={{ padding: '7px 11px' }}
                title={option.label}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}
                >
                    <span
                        className={`flag-icon flag-icon-${option.iso2}`}
                        style={{
                            display: 'inline-block',
                            flex: '0 1 20px',
                        }}
                    />
                    <span
                        className="country-name"
                        style={{ display: 'inline-block', flex: '0 1 auto', margin: '0 11px' }}
                    >
                        {option.name}
                    </span>
                    <span
                        className="phone color-static"
                        style={{ display: 'inline-block', flex: '0 1 1px' }}
                    >
                        {`+${option.dialCode}`}
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
        const { isFocused, onFocus, option } = this.props;

        if (isFocused) {
            return;
        }

        onFocus(option, event);
    }
}

CountrySelectionOption.propTypes = {
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
    onFocus: PropTypes.func,
    onSelect: PropTypes.func,
    option: PropTypes.object.isRequired,
};

class CountrySelectionValue extends Component {
    render() {
        const { value } = this.props;
        const containerClasses = ClassNames('Select-value');

        return (
            <div
                className={containerClasses}
                title={value.name}
            >
                <span className={`flag-icon flag-icon-${value.iso2}`} />
            </div>
        );
    }
}

CountrySelectionValue.propTypes = {
    value: PropTypes.object,
};

class PhoneInput extends Component {
    constructor(props) {
        super(props);

        const iso2 = props.iso2 || 'us';
        const countrySelection = _.find(this._getCountriesOptions(), co => co.iso2 === iso2);

        this.state = {
            countriesOptions: this._getCountriesOptions(),
            countrySelection,
            inputMask: this._getCountryInputMask(countrySelection),
            inputPlaceholder: this._getCountryInputPlaceholder(countrySelection),
            inputValue: props.value || '',
        };

        this._onDropdownChange = this._onDropdownChange.bind(this);
        this._onInputChange = this._onInputChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({ inputValue: nextProps.value });
        }
    }

    render() {
        const { disable, dropdownIconType, id, label, labelStyle, required, style, tabIndex } = this.props;
        const { countriesOptions, countrySelection, inputMask, inputPlaceholder } = this.state;
        let { inputValue } = this.state;
        const containerClasses = ClassNames('ui', 'phone-input');

        if (!_.startsWith(inputValue, '+')) {
            inputValue = `+${countrySelection.dialCode}${inputValue}`;
        }

        return (
            <div
                className={containerClasses}
                id={id}
                style={style}
            >
                {label ? (
                    <label className="label" htmlFor={id} style={labelStyle}>
                        {label}

                        {required && !this.state.value ? (
                            <span className="phone-input-required-indicator">*</span>
                        ) : null}
                    </label>
                ) : null}

                <div className="phone-input-fields">
                    <Dropdown
                        clearable={false}
                        disable={disable}
                        iconType={dropdownIconType}
                        onChange={this._onDropdownChange}
                        options={countriesOptions}
                        selection
                        selectionMenuContainerStyle={{ width: 'auto' }}
                        selectionOptionComponent={CountrySelectionOption}
                        selectionValueComponent={CountrySelectionValue}
                        value={countrySelection}
                    />
                    <Input
                        disabled={disable}
                        guide
                        keepCharPositions
                        mask={inputMask}
                        onChange={this._onInputChange}
                        placeholder={inputPlaceholder}
                        required={required}
                        style={{ width: '144px' }}
                        tabIndex={tabIndex}
                        type="tel"
                        value={inputValue}
                    />
                </div>
            </div>
        );
    }

    _getCountriesOptions() {
        return _.map(CountryTelephoneData.allCountries, (c, i) => {
            return {
                dialCode: c.dialCode,
                format: c.format,
                iso2: c.iso2,
                label: `${c.name} (${c.iso2}) (+${c.dialCode})`,
                name: c.name,
                priority: c.priority,
                value: i,
            };
        })
    }

    _getCountryInputMask(selectionOption) {
        let mask = [];

        if (_.isUndefined(selectionOption)) {
            return mask;
        }

        const dialCode = selectionOption.dialCode;
        const format = selectionOption.format;
        const formatArray = format.split('');
        // Sample RegEx Array
        // ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        mask = _.map(formatArray, (fa, i) => {
            if (fa === '+') {
                return '+';
            } else if (i !== 0 && i <= dialCode.length) {
                return dialCode[i - 1];
            } else if (fa === '(') {
                return '(';
            } else if (fa === ')') {
                return ')';
            } else if (fa === ' ') {
                return ' ';
            } else if (fa === '.') {
                return /\d/;
            } else if (fa === '-') {
                return '-';
            }
        });

        return mask;
    }

    _getCountryInputPlaceholder(selectionOption) {
        let placeholder = '';

        if (_.isUndefined(selectionOption)) {
            return placeholder;
        }

        const dialCode = selectionOption.dialCode;
        const format = selectionOption.format;
        const formatArray = format.split('');
        placeholder = _.map(formatArray, (fa, i) => {
            if (i !== 0 && i <= dialCode.length) {
                return dialCode[i - 1];
            } else if (fa === '.') {
                return Math.floor(Math.random() * 10);
            } else {
                return fa;
            }
        });
        const placeholderString = _.join(placeholder, '');

        return placeholderString;
    }

    _onDropdownChange(selectionOption) {
        this.setState({
            countrySelection: selectionOption,
            inputMask: this._getCountryInputMask(selectionOption),
            inputPlaceholder: this._getCountryInputPlaceholder(selectionOption),
        });

        const { onCountryChange } = this.props;

        if (_.isFunction(onCountryChange)) {
            onCountryChange(selectionOption.iso2);
        }
    }

    _onInputChange(value) {
        const { onChange } = this.props;

        if (!_.isUndefined(onChange)) {
            const { countrySelection: { iso2, dialCode } } = this.state;
            const isValueComplete = !_.isEmpty(value) && !_.some(value, c => c === '_');

            onChange(value, iso2, dialCode, isValueComplete);
        } else {
            this.setState({ inputValue: value });
        }
    }
}

PhoneInput.propTypes = {
    className: PropTypes.string,
    disable: PropTypes.bool,
    dropdownIconType: PropTypes.string,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    id: PropTypes.string,
    iso2: PropTypes.string,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    onChange: PropTypes.func,
    onCountryChange: PropTypes.func,
    required: PropTypes.bool,
    style: PropTypes.object,
    tabIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export default PhoneInput;
