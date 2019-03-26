'use strict';

import ClassNames from 'classnames';
import DatePickerCalendar from './DatePickerCalendar.react';
import DatePickerUtils from '../utils/DatePickerUtils.js';
import DateUtils from '../utils/DateUtils.js';
import Icon from '../Elements/Icon.react';
import Input from '../Elements/Input.react';
import moment from 'moment-timezone';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import TetherComponent from 'react-tether';

class Calendar extends React.PureComponent {
    render() {
        return <DatePickerCalendar {...this.props} />;
    }

    handleClickOutside(event) {
        const { onClose } = this.props;

        onClose(event);
    }
}

const CalendarOnClickOutisde = onClickOutside(Calendar);

class DatePickerInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this._isDateRange = props.rangeFrom || props.rangeTo;

        const newDate = DatePickerUtils.getMoment(props.date, this._isDateRange).date;
        const newDateFrom = DatePickerUtils.getMoment(props.dateFrom, this._isDateRange).dateFrom;
        const newDateTo = DatePickerUtils.getMoment(props.dateTo, this._isDateRange).dateTo;
        let inputValue;

        if (props.rangeFrom) {
            inputValue = this._safeDateFormat(newDateFrom, props.locale);
        } else if (props.rangeTo) {
            inputValue = this._safeDateFormat(newDateTo, props.locale);
        } else {
            inputValue = this._safeDateFormat(newDate, props.locale);
        }

        this.state = {
            date: newDate,
            dateFrom: newDateFrom,
            dateTo: newDateTo,
            isCalendarOpen: false,
            inputValue,
        };

        this._dateFormats = this._getAllowedDateFormats('MM/DD/YYYY');

        this._getMaxDate = this._getMaxDate.bind(this);
        this._getMinDate = this._getMinDate.bind(this);
        this._onCalendarChange = this._onCalendarChange.bind(this);
        this._onCalendarClickOutside = this._onCalendarClickOutside.bind(this);
        this._onIconClick = this._onIconClick.bind(this);
        this._onInputBlur = this._onInputBlur.bind(this);
        this._onInputChange = this._onInputChange.bind(this);
        this._onInputFocus = this._onInputFocus.bind(this);
        this._onInputKeyDown = this._onInputKeyDown.bind(this);
        this._onMonthChange = this._onMonthChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { date, dateFrom, dateTo, locale, rangeFrom, rangeTo } = this.props;

        if (!DatePickerUtils.isSameDay(date, prevProps.date) ||
            !DatePickerUtils.isSameDay(dateFrom, prevProps.dateFrom) ||
            !DatePickerUtils.isSameDay(dateTo, prevProps.dateTo) ||
            !_.isEqual(locale, prevProps.locale)
        ) {
            const newDate = DatePickerUtils.getMoment(date, this._isDateRange).date;
            const newDateFrom = DatePickerUtils.getMoment(dateFrom, this._isDateRange).dateFrom;
            const newDateTo = DatePickerUtils.getMoment(dateTo, this._isDateRange).dateTo;
            let inputValue;

            if (rangeFrom) {
                inputValue = this._safeDateFormat(newDateFrom, locale);
            } else if (rangeTo) {
                inputValue = this._safeDateFormat(newDateTo, locale);
            } else {
                inputValue = this._safeDateFormat(newDate, locale);
            }

            this.setState({
                date: newDate,
                dateFrom: newDateFrom,
                dateTo: newDateTo,
                inputValue,
            });
        }
    }

    render() {
        const {
            className,
            errorMessage,
            disabled,
            events,
            excludeDates,
            filterDates,
            id,
            includeDates,
            label,
            locale,
            rangeFrom,
            rangeTo,
            required,
            tabIndex,
        } = this.props;
        const { date, dateFrom, dateTo, isCalendarOpen, inputValue } = this.state;
        const containerClasses = ClassNames('ui', 'date-picker-input', className);

        return (
            <div className={containerClasses} id={id}>
                <TetherComponent
                    attachment={'top left'}
                    classPrefix="date-picker-tether"
                    constraints={[{
                        to: 'window',
                        attachment: 'together'
                    }]}
                    targetAttachment={'bottom left'}
                    targetOffset={'10px 0'}
                >
                    <Input
                        autoComplete="off"
                        data-parsley-error-message={errorMessage}
                        disabled={disabled}
                        guide
                        icon={(
                            <Icon
                                color={isCalendarOpen ? 'highlight' : null}
                                compact
                                onClick={this._onIconClick}
                                type="calendar"
                            />
                        )}
                        keepCharPositions
                        label={label}
                        mask={[ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ ]}
                        onBlur={this._onInputBlur}
                        onChange={this._onInputChange}
                        onFocus={this._onInputFocus}
                        onKeyDown={this._onInputKeyDown}
                        placeholder="mm/dd/yyyy"
                        ref={ref => this._datePickerInput = ref}
                        required={required}
                        tabIndex={tabIndex}
                        type="text"
                        value={inputValue}
                    />

                    {isCalendarOpen ? (
                        <CalendarOnClickOutisde
                            date={date}
                            dateFrom={dateFrom}
                            dateTo={dateTo}
                            events={events}
                            excludeDates={excludeDates}
                            filterDates={filterDates}
                            includeDates={includeDates}
                            locale={locale}
                            maxDate={this._getMaxDate()}
                            minDate={this._getMinDate()}
                            mode="input"
                            onChange={this._onCalendarChange}
                            onClose={this._onCalendarClickOutside}
                            onMonthChange={this._onMonthChange}
                            rangeFrom={rangeFrom}
                            rangeTo={rangeTo}
                        />
                    ) : null}
                </TetherComponent>
            </div>
        );
    }

    componentDidMount() {
        const { onChange, rangeFrom, rangeTo } = this.props;

        if ((rangeFrom || rangeTo) && _.isUndefined(onChange)) {
            console.error('The onChange prop is required when using the rangeFrom or rangeTo props');
        }
    }

    _getAllowedDateFormats(specifiedFormat) {
        const formats = DateUtils.getAllowedDateFormats();

        if (_.indexOf(formats, specifiedFormat) < 0) {
            formats.unshift(specifiedFormat);
        }

        return formats;
    }

    _getMaxDate() {
        const { maxDate } = this.props;

        return maxDate;
    }

    _getMinDate() {
        const { minDate } = this.props;

        return minDate;
    }

    _onCalendarChange({ date, dateFrom, dateTo }) {
        console.log('DatePickerInput _onCalendarChange');
        console.log('date', date);
        const { onChange } = this.props;

        if (!_.isUndefined(onChange)) {
            onChange({ date, dateFrom, dateTo });
        } else {
            const { locale } = this.props;

            this.setState({
                date,
                inputValue: this._safeDateFormat(date, locale),
            });
        }
    }

    _onCalendarClickOutside(event) {
        this._setOpen(false);
    }

    _onIconClick() {
        ReactDOM.findDOMNode(this._datePickerInput._input).focus();
    }

    _onInputBlur(event) {
        const { onBlur } = this.props;

        if (!_.isUndefined(onBlur)) {
            onBlur(event);
        }
    }

    _onInputChange(value) {
        const { locale } = this.props;
        const date = moment(value, this._dateFormats, locale || moment.locale(), true);

        if (date.isValid() && !DatePickerUtils.isDayDisabled(date, this.props)) {
            this._onCalendarChange(date);
        } else if (value === '' || value === '__/__/____') {
            this._onCalendarChange();
        }

        this.setState({ inputValue: value });
    }

    _onInputFocus() {
        this._setOpen(true);
    }

    _onInputKeyDown(event) {
        if (event.keyCode === 9 || event.keyCode === 13) {
            this._setOpen(false);
        }
    }

    _onMonthChange(month, year) {
        const { onMonthChange } = this.props;

        if (!_.isUndefined(onMonthChange)) {
            onMonthChange(month, year);
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

    _setOpen(open) {
        this.setState({ isCalendarOpen: open });
    }
}

DatePickerInput.defaultProps = {
    className: '',
    controls: 'dropdowns',
    date: undefined,
    dateFrom: undefined,
    dateTo: undefined,
    disabled: false,
    disabledDays: undefined,
    events: undefined,
    errorMessage: '',
    excludeDates: undefined,
    filterDates: undefined,
    id: undefined,
    includeDates: undefined,
    label: '',
    locale: '',
    maxDate: undefined,
    minDate: undefined,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    onMonthChange: undefined,
    rangeFrom: false,
    rangeTo: false,
    required: false,
    tabIndex: undefined,
};

DatePickerInput.propTypes = {
    className: PropTypes.string,
    controls: PropTypes.oneOf([ 'dropdowns', 'arrows' ]),
    date: PropTypes.object,
    dateFrom: PropTypes.object,
    dateTo: PropTypes.object,
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    includeDates: PropTypes.array,
    label: PropTypes.string,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onMonthChange: PropTypes.func,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
    required: PropTypes.bool,
    tabIndex: PropTypes.number,
};

export default DatePickerInput;
