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
            dateInView: this._localizeMoment(
                this._getDateInView(
                    props.date,
                    props.dateFrom,
                    props.dateTo,
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
            !DatePickerUtils.isSameDay(prevProps.dateFrom, dateFrom)
        ) {
            this.setState({
                dateInView: this._localizeMoment(
                    this._getDateInView(
                        date,
                        dateFrom,
                        dateTo,
                        maxDate,
                        minDate
                    )
                )
            });
        }
    }

    render() {
        const {
            date,
            dateFrom,
            dateTo,
            events,
            excludeDates,
            filterDate,
            includeDates,
            maxDate,
            minDate,
            mode,
        } = this.props;
        const { dateInView } = this.state;
        const containerClasses = ClassNames('ui', 'date-picker-calendar', {
            'date-picker-calendar-mode-input': mode === 'input',
            'date-picker-calendar-mode-calendar': mode === 'calendar',
            'date-picker-calendar-date-range': !_.isEmpty(dateFrom) || !_.isEmpty(dateTo),
            'date-picker-calendar-single-date': _.isEmpty(dateFrom) && _.isEmpty(dateTo),
        });

        return (
            <div className={containerClasses}>
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
                        filterDate={filterDate}
                        includeDates={includeDates}
                        maxDate={maxDate}
                        minDate={minDate}
                        onDayClick={this._onDayClick}
                        mode={mode}
                    />
                </div>
            </div>
        );
    }

    _getDateInView(date, dateFrom, dateTo, maxDate, minDate) {
        const today = moment();

        if (!_.isEmpty(date)) {
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
        if (typeof this.props.onMonthChange === 'function')
            this.props.onMonthChange(month, this.state.dateInView.year());

        this.setState({
            dateInView: this.state.dateInView.clone().set('month', month),
            showDropdownMonth: false
        });
    }

    _onChangeYear(year) {
        this.setState({
            dateInView: this.state.dateInView.clone().set('year', year),
            showDropdownYear: false,
        });
    }

    _onDayClick(day) {
        console.log('DatePickerCalendar _onDayClick');
        const { onChange } = this.props;

        if (!_.isUndefined(onChange)) {
            onChange(day);
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
                    arrows
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
        const days = [0, 1, 2, 3, 4, 5, 6].map(offset => {
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
    controls: 'dropdowns',
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
};

export default DatePickerCalendar;
