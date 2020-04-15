'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import DatePickerDropdownMonth from './datePickerDropdownMonth';
import DatePickerDropdownYear from './datePickerDropdownYear';
import DatePickerMonth from './datePickerMonth';
import DatePickerUtils from '../utils/datePickerUtils.js';
import Icon from '../dataDisplay/icon';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';

class DatePickerCalendar extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            date: _.cloneDeep(props.date),
            dateFrom: _.cloneDeep(props.dateFrom),
            dateTo: _.cloneDeep(props.dateTo),
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

        this._onMonthChange = this._onMonthChange.bind(this);
        this._onYearChange = this._onYearChange.bind(this);
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
            style,
        } = this.props;
        const { date, dateFrom, dateTo, dateInView } = this.state;
        const containerClasses = ClassNames('ui', 'date-picker-calendar', {
            'date-picker-calendar-mode-input': mode === 'input',
            'date-picker-calendar-mode-calendar': mode === 'calendar',
            'date-picker-calendar-date-range': !_.isEmpty(dateFrom) || !_.isEmpty(dateTo),
            'date-picker-calendar-single-date': _.isEmpty(dateFrom) && _.isEmpty(dateTo),
        });

        return (
            <div className={containerClasses} id={id} style={style}>
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

        if (moment.isMoment(date)) {
            return date;
        } else if (moment.isMoment(dateFrom)) {
            return dateFrom;
        }

        if (moment.isMoment(minDate) && minDate.isAfter(today)) {
            return minDate;
        } else if (moment.isMoment(maxDate) && maxDate.isBefore(today)) {
            return maxDate;
        } else {
            return today;
        }
    }

    _localizeMoment(value) {
        const { locale } = this.props;

        return moment.isMoment(value) && value.clone().locale(locale || moment.locale());
    }

    _onMonthChange(month) {
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

    _onYearChange(year) {
        const { dateInView } = this.state;

        this.setState({
            dateInView: dateInView.clone().set('year', year),
            showDropdownYear: false,
        });
    }

    _onDayClick(date) {
        const { onChange, range, rangeFrom, rangeTo } = this.props;
        const { dateFrom, dateTo } = this.state;
        const isDateSame = DatePickerUtils.isSameDay(this.state.date, date);
        const isDateBeforeFrom = !_.isUndefined(dateFrom) && date.isBefore(dateFrom);
        const isDateBetweenToAndFrom = date.isAfter(dateFrom) && date.isBefore(dateTo);
        const isDateAfterTo = !_.isUndefined(dateTo) && date.isAfter(dateTo);
        const isDateSameAsFrom = DatePickerUtils.isSameDay(date, dateFrom);
        const isDateSameAsTo = DatePickerUtils.isSameDay(date, dateTo);
        const isDateSameAsFromAndTo = isDateSameAsFrom && isDateSameAsTo;

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
                    onChange({ date: undefined, dateFrom: null, dateTo: null });
                } else {
                    this.setState({
                        dateFrom: null,
                        dateTo: null,
                    });
                }
            }
        } else if (rangeFrom || rangeTo) {
            let newDateFrom, newDateTo;

            if (rangeFrom && isDateSameAsTo || isDateAfterTo) {
                newDateFrom = !isDateSameAsFromAndTo ? date : null;
                newDateTo = !isDateSameAsFromAndTo ? date : null;
            } else if (rangeFrom && !isDateSameAsTo && !isDateAfterTo) {
                newDateFrom = date;
                newDateTo = dateTo;
            }

            if (rangeTo && isDateSameAsFrom || isDateBeforeFrom) {
                newDateFrom = !isDateSameAsFromAndTo ? date : null;
                newDateTo = !isDateSameAsFromAndTo ? date : null;
            } else if (rangeTo && !isDateSameAsFrom && !isDateBeforeFrom) {
                newDateFrom = dateFrom;
                newDateTo = date;
            }

            onChange({ date: undefined, dateFrom: newDateFrom, dateTo: newDateTo });
        } else {
            if (!_.isUndefined(onChange)) {
                onChange({
                    date: !isDateSame ? date : null,
                    dateFrom: undefined,
                    dateTo: undefined,
                });
            } else {
                this.setState({ date: !isDateSame ? date : null });
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

        this._onMonthChange(currentMonth - 1);
    }

    _onNextMonthChange() {
        const { dateInView } = this.state;
        const currentMonth = dateInView.month();

        this._onMonthChange(currentMonth + 1);
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
                                onChange={this._onMonthChange}
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
                                onChange={this._onYearChange}
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
    locale: 'en-US',
    mode: 'calendar',
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
    style: PropTypes.object,
};

export default DatePickerCalendar;
