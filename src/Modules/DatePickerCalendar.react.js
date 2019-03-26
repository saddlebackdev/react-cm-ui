'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import DatePickerDropdownMonth from './DatePickerDropdownMonth.react';
import DatePickerDropdownYear from './DatePickerDropdownYear.react';
import DatePickerMonth from './DatePickerMonth.react';
import DatePickerUtils from '../utils/DatePickerUtils.js';
import Icon from '../Elements/Icon.react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';

class DatePickerCalendar extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            date: props.date,
            dateFrom: props.dateFrom,
            dateTo: props.dateTo,
            dateInView: this._localizeMoment(
                this._getDateInView(
                    props.date,
                    props.dateFrom,
                    props.maxDate,
                    props.minDate
                )
            ),
            showDropdownMonth: false,
            showDropdownYear: false,
        };

        this._onChangeMonth = this._onChangeMonth.bind(this);
        this._onChangeYear = this._onChangeYear.bind(this);
        this._onDayClick = this._onDayClick.bind(this);
        this._onDropdownMonthClick = this._onDropdownMonthClick.bind(this);
        this._onDropdownYearClick = this._onDropdownYearClick.bind(this);
        this._onPreviousMonthChange = this._onPreviousMonthChange.bind(this);
        this._onNextMonthChange = this._onNextMonthChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            date,
            dateFrom,
            dateTo,
            maxDate,
            minDate,
        } = this.props;

        if (!DatePickerUtils.isSameDay(prevProps.date, date) ||
            !DatePickerUtils.isSameDay(prevProps.dateFrom, dateFrom) ||
            !DatePickerUtils.isSameDay(prevProps.dateTo, dateTo)
        ) {
            this.setState({
                date,
                dateFrom,
                dateTo,
                dateInView: this._localizeMoment(
                    this._getDateInView(
                        date,
                        dateFrom,
                        maxDate,
                        minDate
                    )
                )
            });
        }
    }

    render() {
        const {
            events,
            excludeDates,
            filterDates,
            id,
            includeDates,
            maxDate,
            minDate,
            mode,
            range,
            rangeFrom,
            rangeTo,
        } = this.props;
        const { date, dateFrom, dateTo, dateInView } = this.state;
        const containerClasses = ClassNames('ui', 'date-picker-calendar', {
            'date-picker-calendar-mode-input': mode === 'input',
            'date-picker-calendar-mode-calendar': mode === 'calendar',
            'date-picker-calendar-date-range': !_.isEmpty(dateFrom) || !_.isEmpty(dateTo),
            'date-picker-calendar-single-date': _.isEmpty(dateFrom) && _.isEmpty(dateTo),
        });

        return (
            <div className={containerClasses} id={id}>
                {mode === 'input' ? (
                    <div className="date-picker-pointer" />
                ) : null}

                {this._renderControls()}

                <div className="date-picker-month-container">
                    {this._renderHeaderDays()}

                    <DatePickerMonth
                        date={date}
                        dateFrom={dateFrom}
                        dateInView={dateInView}
                        dateTo={dateTo}
                        events={events}
                        excludeDates={excludeDates}
                        filterDates={filterDates}
                        includeDates={includeDates}
                        maxDate={maxDate}
                        minDate={minDate}
                        onDayClick={this._onDayClick}
                        mode={mode}
                        range={range}
                        rangeFrom={rangeFrom}
                        rangeTo={rangeTo}
                    />
                </div>
            </div>
        );
    }

    _getDateInView(date, dateFrom, maxDate, minDate) {
        const today = moment();

        if (!_.isUndefined(date)) {
            return date;
        } else if (!_.isEmpty(dateFrom)) {
            return dateFrom;
        }

        if (!_.isEmpty(minDate) && minDate.isAfter(today)) {
            return minDate;
        } else if (!_.isEmpty(maxDate) && maxDate.isBefore(today)) {
            return maxDate;
        } else {
            return today;
        }
    }

    _localizeMoment(value) {
        const { locale } = this.props;

        return moment.isMoment(value) && value.clone().locale(locale || moment.locale());
    }

    _onChangeMonth(month) {
        const { onMonthChange } = this.props;
        const { dateInView } = this.state;

        if (!_.isUndefined(onMonthChange)) {
            onMonthChange(month, dateInView.year());
        }

        this.setState({
            dateInView: dateInView.clone().set('month', month),
            showDropdownMonth: false,
        });
    }

    _onChangeYear(year) {
        const { dateInView } = this.state;

        this.setState({
            dateInView: dateInView.clone().set('year', year),
            showDropdownYear: false,
        });
    }

    _onDayClick(date) {
        const { onChange, range, rangeFrom, rangeTo } = this.props;
        const { dateFrom, dateTo } = this.state;
        const isDateBeforeFrom = !_.isUndefined(dateFrom) && date.isBefore(dateFrom);
        const isDateBetweenToAndFrom = date.isAfter(dateFrom) && date.isBefore(dateTo);
        const isDateAfterTo = !_.isUndefined(dateTo) && date.isAfter(dateTo);
        const isDateSameAsFrom = DatePickerUtils.isSameDay(date, dateFrom);
        const isDateSameAsTo = DatePickerUtils.isSameDay(date, dateTo);
        const isFromAndToSame = DatePickerUtils.isSameDay(dateFrom, dateTo);
        const isDateSameAsFromAndTo = isDateSameAsFrom && isDateSameAsTo && isFromAndToSame;

        if (range) {
            if (isDateBeforeFrom) {
                if (!_.isUndefined(onChange)) {
                    onChange({ date: undefined, dateFrom: date, dateTo: dateTo });
                } else {
                    this.setState({ dateFrom: date });
                }
            }

            if (isDateSameAsTo || isDateSameAsFrom || _.isUndefined(dateFrom) && _.isUndefined(dateTo)) {
                if (!_.isUndefined(onChange)) {
                    onChange({ date: undefined, dateFrom: date, dateTo: date });
                } else {
                    this.setState({
                        dateFrom: date,
                        dateTo: date,
                    });
                }
            }

            if (isDateAfterTo || isDateBetweenToAndFrom) {
                if (!_.isUndefined(onChange)) {
                    onChange({ date: undefined, dateFrom: dateFrom, dateTo: date });
                } else {
                    this.setState({ dateTo: date });
                }
            }

            if (isDateSameAsFromAndTo) {
                if (!_.isUndefined(onChange)) {
                    onChange({ date: undefined, dateFrom: undefined, dateTo: undefined });
                } else {
                    this.setState({
                        dateFrom: undefined,
                        dateTo: undefined,
                    });
                }
            }
        } else if (rangeFrom || rangeTo) {
            if (rangeFrom) {
                if (isDateSameAsTo || isDateAfterTo) {
                    onChange({ date: undefined, dateFrom: date, dateTo: date });
                } else {
                    onChange({ date: undefined, dateFrom: date, dateTo: dateTo });
                }
            } else if (rangeTo) {
                if (isDateSameAsFrom || isDateBeforeFrom) {
                    onChange({ date: undefined, dateFrom: date, dateTo: date });
                } else {
                    onChange({ date: undefined, dateFrom: dateFrom, dateTo: date });
                }
            }
        } else {
            if (!_.isUndefined(onChange)) {
                onChange({ date: date, dateFrom: undefined, dateTo: undefined });
            } else {
                this.setState({ date });
            }
        }
    }

    _onDropdownMonthClick() {
        const { showDropdownMonth } = this.state;

        this.setState({ showDropdownMonth: !showDropdownMonth });
    }

    _onDropdownYearClick() {
        const { showDropdownYear } = this.state;

        this.setState({ showDropdownYear: !showDropdownYear });
    }

    _onPreviousMonthChange() {
        const { dateInView } = this.state;
        const currentMonth = dateInView.month();

        this._onChangeMonth(currentMonth - 1);
    }

    _onNextMonthChange() {
        const { dateInView } = this.state;
        const currentMonth = dateInView.month();

        this._onChangeMonth(currentMonth + 1);
    }

    _renderControls() {
        const { controls } = this.props;
        const {
            dateInView,
            showDropdownMonth,
            showDropdownYear,
        } = this.state;

        if (controls === 'arrows') {
            return (
                <div className="date-picker-selected-month-year-arrows">
                    <Icon
                        align="left"
                        onClick={this._onPreviousMonthChange}
                        size="medium"
                        type="chevron-left"
                    />

                    <div className="title">
                        {dateInView.format('MMMM YYYY')}
                    </div>

                    <Icon
                        align="right"
                        onClick={this._onNextMonthChange}
                        size="medium"
                        type="chevron-right"
                    />
                </div>
            );
        } else {
            return (
                <div className="date-picker-selected-month-year-dropdowns">
                    <div
                        className="date-picker-selected-month"
                        onClick={this._onDropdownMonthClick}
                    >
                        <span>
                            {dateInView.format('MMMM')}

                            <Icon align="right" size="xxsmall" type="caret-down" />
                        </span>

                        {showDropdownMonth ? (
                            <DatePickerDropdownMonth
                                month={dateInView.month()}
                                onChange={this._onChangeMonth}
                                onClose={this._onDropdownMonthClick}
                            />
                        ) : null}
                    </div>

                    <div
                        className="date-picker-selected-year"
                        onClick={this._onDropdownYearClick}
                    >
                        <span>
                            {dateInView.format('YYYY')}

                            <Icon align="right" size="xxsmall" type="caret-down" />
                        </span>

                        {showDropdownYear ? (
                            <DatePickerDropdownYear
                                onChange={this._onChangeYear}
                                onClose={this._onDropdownYearClick}
                                year={dateInView.year()}
                            />
                        ) : null}
                    </div>
                </div>
            );
        }
    }

    _renderHeaderDays() {
        const { dateInView } = this.state;
        const startOfWeek = dateInView.clone().startOf('week');
        const days = [ 0, 1, 2, 3, 4, 5, 6 ].map(offset => {
            const day = startOfWeek.clone().add(offset, 'days');

            return (
                <div className="ui date-picker-day" key={offset} >
                    {day.localeData().weekdaysMin(day)}
                </div>
            );
        });

        return (
            <div className="ui date-picker-header-days">
                {days}
            </div>
        );
    }
}

DatePickerCalendar.defaultProps = {
    className: '',
    controls: 'arrows',
    date: moment(),
    dateFrom: undefined,
    dateTo: undefined,
    events: undefined,
    excludeDates: undefined,
    filterDates: undefined,
    id: undefined,
    includeDates: undefined,
    locale: '',
    maxDate: undefined,
    minDate: undefined,
    mode: 'calendar',
    onChange: undefined,
    onMonthChange: undefined,
    rangeFrom: false,
    rangeTo: false,
};

DatePickerCalendar.propTypes = {
    className: PropTypes.string,
    controls: PropTypes.oneOf([ 'dropdowns', 'arrows' ]),
    date: PropTypes.object,
    dateFrom: PropTypes.object,
    dateTo: PropTypes.object,
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    includeDates: PropTypes.array,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    mode: PropTypes.oneOf([ 'calendar', 'input' ]),
    onChange: PropTypes.func,
    onMonthChange: PropTypes.func,
    range: PropTypes.bool,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
};

export default DatePickerCalendar;
