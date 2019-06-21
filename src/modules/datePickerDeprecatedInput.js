'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Grid from '../collections/grid';
import GridColumn from '../collections/GridColumn';
import Icon from '../elements/icon';
import Input from '../elements/input';

import DatePickerUtils from '../utils/DatePickerUtils.js';
import DateUtils from '../utils/DateUtils.js';

class DatePickerInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasAnError: false,
            listensForErrors: !_.isUndefined(props.required),
            maybeDate: this._safeDateFormat(props.date, props.locale),
            maybeDateRange: {
                dateEnd: this._safeDateFormat(props.dateEnd, props.locale),
                dateSecondaryEnd: this._safeDateFormat(props.dateSecondaryEnd, props.locale),
                dateSecondaryStart: this._safeDateFormat(props.dateSecondaryStart, props.locale),
                dateStart: this._safeDateFormat(props.dateStart, props.locale)
            }
        };

        this._onErrorRef = this._onError.bind(this);
        this._dateFormats = this._getAllowedDateFormats('MM/DD/YYYY');

        this._onBlur = this._onBlur.bind(this);
        this._onClick = this._onClick.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { date, dateStart, dateEnd, dateSecondaryStart, dateSecondaryEnd, locale } = this.props;

        if (!DatePickerUtils.isSameDay(date, prevProps.date) ||
            !DatePickerUtils.isSameDay(dateStart, prevProps.dateStart) ||
            !DatePickerUtils.isSameDay(dateEnd, prevProps.dateEnd) ||
            !DatePickerUtils.isSameDay(dateSecondaryStart, prevProps.dateSecondaryStart) ||
            !DatePickerUtils.isSameDay(dateSecondaryEnd, prevProps.dateSecondaryEnd) ||
            !_.isEqual(locale, prevProps.locale)
        ) {
            this.setState({
                maybeDate: this._safeDateFormat(date, locale),
                maybeDateRange: {
                    dateEnd: this._safeDateFormat(dateEnd, locale),
                    dateSecondaryEnd: this._safeDateFormat(dateSecondaryEnd, locale),
                    dateSecondaryStart: this._safeDateFormat(dateSecondaryStart, locale),
                    dateStart: this._safeDateFormat(dateStart, locale)
                }
            });
        }
    }

    render() {
        const { className, open, type, uxMode } = this.props;
        const disabled = this.props.disabled ||
            type === 'servicePeriod' ||
            type === 'servicePeriodRangeEnd' ||
            type === 'servicePeriodRangeStart';
        const containerClasses = ClassNames('date-picker-deprecated-input', {
            'date-picker-input-disabled': disabled,
            'date-picker-input-type-date-range': type === 'dateRange',
            'date-picker-input-type-service-period': type === 'servicePeriod',
            'date-picker-input-type-service-period-range': type === 'servicePeriodRange',
            'date-picker-input-type-single-date': type === 'singleDate',
            'ignore-react-onclickoutside': open
        }, className);
        let mask, placeholder, value;

        if (uxMode === 'input' &&
            type === 'dateRange' ||
            type === 'servicePeriod' ||
            type === 'servicePeriodRangeEnd' ||
            type === 'servicePeriodRangeStart'
        ) {
            mask = [
                /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,
                ' ', '-', ' ',
                /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/
            ];
            placeholder = 'mm/dd/yyyy - mm/dd/yyyy';

            if (type === 'servicePeriodRangeEnd') {
                value = `${this.state.maybeDateRange.dateSecondaryStart} - ${this.state.maybeDateRange.dateSecondaryEnd}`;
            } else {
                value = `${this.state.maybeDateRange.dateStart} - ${this.state.maybeDateRange.dateEnd}`;
            }
        } else {
            mask = [
                /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/
            ];
            placeholder = 'mm/dd/yyyy';
            value = this.state.maybeDate;
        }

        if (uxMode === 'input') {
            return (
                <Input
                    autoComplete="off"
                    className={containerClasses}
                    data-parsley-error-message={this.props.errorMessage}
                    disabled={disabled}
                    guide={true}
                    icon={(
                        <Icon
                            color={open ? 'highlight' : null}
                            compact={true}
                            onClick={this._onClick}
                            type="calendar"
                        />
                    )}
                    id={this.props.id}
                    keepCharPositions
                    mask={mask}
                    onBlur={this._onBlur}
                    onChange={this._onChange.bind(this, 'date')}
                    onClick={this._onClick}
                    onFocus={this._onFocus}
                    onKeyDown={this._onKeyDown}
                    placeholder={placeholder}
                    ref="input"
                    required={this.props.required}
                    tabIndex={this.props.tabIndex}
                    type="text"
                    value={value}
                />
            );
        } else if (uxMode === 'calendar') {
            return (
                <Grid columns={2} style={{ marginBottom: '5px', marginTop: '7px' }}>
                    <Grid.Column>
                        <Input
                            autoComplete="off"
                            className={containerClasses}
                            data-parsley-error-message={this.props.errorMessage}
                            disabled={disabled}
                            guide={true}
                            id={this.props.id}
                            keepCharPositions={true}
                            label="From"
                            mask={mask}
                            onBlur={this._onBlur}
                            onChange={this._onChange.bind(this, 'dateStart')}
                            onClick={this._onClick}
                            onFocus={this._onFocus}
                            placeholder={placeholder}
                            ref="inputStart"
                            required={this.props.required}
                            tabIndex={this.props.tabIndex}
                            type="text"
                            value={this.state.maybeDateRange.dateStart}
                        />
                    </Grid.Column>

                    <Grid.Column>
                        <Input
                            autoComplete="off"
                            className={containerClasses}
                            data-parsley-error-message={this.props.errorMessage}
                            disabled={disabled}
                            guide={true}
                            id={this.props.id}
                            keepCharPositions={true}
                            label="To"
                            mask={mask}
                            onBlur={this._onBlur}
                            onChange={this._onChange.bind(this, 'dateEnd')}
                            onClick={this._onClick}
                            onFocus={this._onFocus}
                            placeholder={placeholder}
                            ref="inputEnd"
                            required={this.props.required}
                            tabIndex={this.props.tabIndex}
                            type="text"
                            value={this.state.maybeDateRange.dateEnd}
                        />
                    </Grid.Column>
                </Grid>
            );
        }
    }

    componentDidMount() {
        if (this.state.listensForErrors) {
            ParsleyFormStore.addChangeListener(this._onErrorRef);
        }
    }

    componentWillUnmount() {
        if (this.state.listensForErrors) {
            ParsleyFormStore.removeChangeListener(this._onErrorRef);
        }
    }

    _onBlur(value) {
        const { date, dateEnd, dateStart, locale, type } = this.props;
        const isSingleDateOrServicePeriod = type === 'singleDate' || type === 'servicePeriod';
        const isDateRange = type === 'dateRange';

        if (!_.isUndefined(this.props.onBlur)) {
            this.props.onBlur(event);
        }

        this.props.hasValue(value);

        this.setState({
            maybeDate: isSingleDateOrServicePeriod ? this._safeDateFormat(date, locale) : this.state.maybeDate,
            maybeDateRange: isDateRange ? {
                dateEnd: this._safeDateFormat(dateEnd, locale),
                dateStart: this._safeDateFormat(dateStart, locale)
            } : this.state.maybeDateRange
        });
    }

    _onChange(dateType, value) {
        const { type, locale, uxMode } = this.props;
        const newLocale = locale || moment.locale();

        if (uxMode === 'input' && type === 'dateRange') {
            const datesArray = value ? value.split('-') : '';

            if (value !== '' && value !== '__/__/____ - __/__/____') {
                _.map(datesArray, (date, index) => {
                    const newDate = moment(date.trim(), this._dateFormats, newLocale, true);
                    const dateType = index === 0 ? 'dateStart' : index === 1 ? 'dateEnd' : null;

                    if (newDate.isValid() &&
                        (!DatePickerUtils.isDayDisabled(newDate, this.props) &&
                        (index === 0 && !DatePickerUtils.isSameDay(this.props.dateStart, newDate)) ||
                        (index === 1 && !DatePickerUtils.isSameDay(this.props.dateEnd, newDate)))
                    ) {
                        this.props.onSelect(newDate, dateType);
                    }
                });
            } else {
                this.props.onSelect(null, null, true);
            }

            this.setState({
                maybeDateRange: {
                    dateEnd: value ? datesArray[1].trim() : '',
                    dateStart: value ? datesArray[0].trim() : ''
                }
            });
        } else if (uxMode === 'calendar' || uxMode === 'input' && type === 'singleDate') {
            const date = moment(value, this._dateFormats, newLocale, true);

            if (date.isValid() && !DatePickerUtils.isDayDisabled(date, this.props)) {
                this.props.onSelect(date);
            } else if (value === '' || value === '__/__/____') {
                this.props.onSelect(null, null, true);
            }

            if (uxMode === 'input') {
                this.setState({ maybeDate: value });
            }

            if (uxMode === 'calendar') {
                this.setState({
                    maybeDateRange: {
                        dateEnd: dateType === 'dateEnd' ? value : this.state.maybeDateRange.dateEnd,
                        dateStart: dateType === 'dateStart' ? value : this.state.maybeDateRange.dateStart
                    }
                });
            }
        }

        this.props.hasValue(value);
    }

    _onClick(dateField) {
        if (_.isFunction(this.props.onClick)) {
            this.props.onClick();
        }
    }

    _onError() {
        this.setState({ 'hasAnError': ParsleyFormStore.inputHasError(this.props.id) });
    }

    _onFocus() {
        if (_.isFunction(this.props.onFocus)) {
            this.props.onFocus();
        }
    }

    _onKeyDown(event) {
        if (event.keyCode === 9 || event.keyCode === 13) {
            this.props.onDone();
        }
    }

    _safeDateFormat(date, locale) {
        if (date && date.isValid()) {
            return date.clone().locale(locale || moment.locale()).format('MM/DD/YYYY');
        }

        if (_.isNull(date)) {
            return null;
        }
    }

    _getAllowedDateFormats(specifiedFormat) {
        const formats = DateUtils.getAllowedDateFormats();

        if (_.indexOf(formats, specifiedFormat) < 0) {
            formats.unshift(specifiedFormat);
        }

        return formats;
    }
}

DatePickerInput.propTypes = {
    className: PropTypes.string,
    date: PropTypes.object,
    dateEnd: PropTypes.object,
    dateFormat: PropTypes.string,
    dateSecondaryEnd: PropTypes.object,
    dateSecondaryStart: PropTypes.object,
    dateStart: PropTypes.object,
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    hasValue: PropTypes.func.isRequired,
    id: PropTypes.string,
    includeDates: PropTypes.array,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    mode: PropTypes.string,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onDone: PropTypes.func,
    onFocus: PropTypes.func,
    onSelect: PropTypes.func,
    open: PropTypes.bool,
    required: PropTypes.bool,
    tabIndex: PropTypes.number,
    type: PropTypes.string,
    uxMode: PropTypes.string
};

export default DatePickerInput;
