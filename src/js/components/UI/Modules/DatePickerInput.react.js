'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment';
import React from 'react';

import Grid from 'components/UI/Collections/Grid.react';
import GridColumn from 'components/UI/Collections/GridColumn.react';
import Icon from 'components/UI/Elements/Icon.react';
import Input from 'components/UI/Elements/Input.react';

import DatePickerUtils from 'utils/UI/DatePickerUtils.js';
import DateUtils from 'utils/UI/DateUtils.js';

export default class DatePickerInput extends React.Component {

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
    }

    componentWillReceiveProps(nextProps) {
        if (!DatePickerUtils.isSameDay(nextProps.date, this.props.date) ||
            !DatePickerUtils.isSameDay(nextProps.dateStart, this.props.dateStart) ||
            !DatePickerUtils.isSameDay(nextProps.dateEnd, this.props.dateEnd) ||
            !DatePickerUtils.isSameDay(nextProps.dateSecondaryStart, this.props.dateSecondaryStart) ||
            !DatePickerUtils.isSameDay(nextProps.dateSecondaryEnd, this.props.dateSecondaryEnd) ||
            !_.isEqual(nextProps.locale, this.props.locale)
        ) {
            this.setState({
                maybeDate: this._safeDateFormat(nextProps.date, nextProps.locale),
                maybeDateRange: {
                    dateEnd: this._safeDateFormat(nextProps.dateEnd, nextProps.locale),
                    dateSecondaryEnd: this._safeDateFormat(nextProps.dateSecondaryEnd, nextProps.locale),
                    dateSecondaryStart: this._safeDateFormat(nextProps.dateSecondaryStart, nextProps.locale),
                    dateStart: this._safeDateFormat(nextProps.dateStart, nextProps.locale)
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
        const containerClasses = ClassNames('datepicker-input', {
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
                            onClick={this._onClick.bind(this)}
                            type="calendar"
                        />
                    )}
                    id={this.props.id}
                    keepCharPositions={true}
                    mask={mask}
                    onBlur={this._onBlur.bind(this)}
                    onChange={this._onChange.bind(this, 'date')}
                    onClick={this._onClick.bind(this)}
                    onFocus={this._onFocus.bind(this)}
                    onKeyDown={this._onKeyDown.bind(this)}
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
                    <GridColumn>
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
                            onBlur={this._onBlur.bind(this)}
                            onChange={this._onChange.bind(this, 'dateStart')}
                            onClick={this._onClick.bind(this)}
                            onFocus={this._onFocus.bind(this)}
                            placeholder={placeholder}
                            ref="inputStart"
                            required={this.props.required}
                            tabIndex={this.props.tabIndex}
                            type="text"
                            value={this.state.maybeDateRange.dateStart}
                        />
                    </GridColumn>

                    <GridColumn>
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
                            onBlur={this._onBlur.bind(this)}
                            onChange={this._onChange.bind(this, 'dateEnd')}
                            onClick={this._onClick.bind(this)}
                            onFocus={this._onFocus.bind(this)}
                            placeholder={placeholder}
                            ref="inputEnd"
                            required={this.props.required}
                            tabIndex={this.props.tabIndex}
                            type="text"
                            value={this.state.maybeDateRange.dateEnd}
                        />
                    </GridColumn>
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
    className: React.PropTypes.string,
    date: React.PropTypes.object,
    dateEnd: React.PropTypes.object,
    dateFormat: React.PropTypes.string,
    dateSecondaryEnd: React.PropTypes.object,
    dateSecondaryStart: React.PropTypes.object,
    dateStart: React.PropTypes.object,
    disabled: React.PropTypes.bool,
    errorMessage: React.PropTypes.string,
    excludeDates: React.PropTypes.array,
    filterDates: React.PropTypes.func,
    hasValue: React.PropTypes.func.isRequired,
    id: React.PropTypes.string,
    includeDates: React.PropTypes.array,
    locale: React.PropTypes.string,
    maxDate: React.PropTypes.object,
    minDate: React.PropTypes.object,
    mode: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    onClick: React.PropTypes.func,
    onDone: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    open: React.PropTypes.bool,
    required: React.PropTypes.bool,
    tabIndex: React.PropTypes.number,
    type: React.PropTypes.string,
    uxMode: React.PropTypes.string
};
