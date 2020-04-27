import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import DatePickerUtils from '../utils/datePickerUtils.js';

const propTypes = {
    date: PropTypes.shape({}),
    dateFrom: PropTypes.shape({}),
    dateInView: PropTypes.shape({}).isRequired,
    dateTo: PropTypes.shape({}),
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    includeDates: PropTypes.array,
    maxDate: PropTypes.shape({}),
    minDate: PropTypes.shape({}),
    month: PropTypes.number,
    onDayClick: PropTypes.func,
    range: PropTypes.bool,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
    type: PropTypes.string,
};

class DatePickerDay extends React.PureComponent {
    constructor(props) {
        super(props);

        this.isDateRange = props.rangeFrom || props.rangeTo || props.range;

        this.onDayClick = this.onDayClick.bind(this);
    }

    onDayClick() {
        const { dateInView, onDayClick } = this.props;

        if (!this.isOutsideMonth() && !this.isDisabled() && !_.isUndefined(onDayClick)) {
            onDayClick(dateInView);
        }
    }

    isDaySelected() {
        const { date, dateInView } = this.props;

        return !this.isDateRange && DatePickerUtils.isSameDay(dateInView, date);
    }

    isDayStartSelected() {
        const { dateFrom, dateInView } = this.props;

        return this.isDateRange && DatePickerUtils.isSameDay(dateInView, dateFrom);
    }

    isDisabled() {
        const { dateInView } = this.props;

        return DatePickerUtils.isDayDisabled(dateInView, this.props);
    }

    isDayEndSelected() {
        const { dateInView, dateTo } = this.props;

        return this.isDateRange && DatePickerUtils.isSameDay(dateInView, dateTo);
    }

    isInRange() {
        const { dateTo, dateInView, dateFrom } = this.props;
        const newDateInView = dateInView.clone().startOf('day');

        if (!dateFrom || !dateTo) {
            return false;
        }

        const newDateFrom = dateFrom.clone().startOf('day');
        const newDateTo = dateTo.clone().startOf('day');

        return newDateInView.isBetween(newDateFrom, newDateTo);
    }

    isOutsideMonth() {
        const { dateInView, month } = this.props;

        return !_.isUndefined(month) && month !== dateInView.month();
    }

    isToday() {
        const { dateInView } = this.props;

        return dateInView.format('MM/DD/YYYY') === moment().format('MM/DD/YYYY');
    }

    isWeekend() {
        const {
            dateInView,
        } = this.props;
        const weekday = dateInView.day();

        return weekday === 0 || weekday === 6;
    }

    hasEvent() {
        const { dateInView, events } = this.props;

        return _.some(events, (event) => event.isSame(dateInView, 'day'));
    }

    render() {
        const { dateInView, dateTo } = this.props;
        const containerClasses = ClassNames('ui', 'date-picker-day', `date-picker-day-${moment(dateInView).format('DD')}`, {
            'date-picker-day-disabled': this.isDisabled(),
            'date-picker-day-end-selected': this.isDayEndSelected(),
            'date-picker-day-has-event': this.hasEvent(),
            'date-picker-day-in-range': this.isInRange(),
            'date-picker-day-no-end-day-selected': this.isDayStartSelected() && !dateTo,
            'date-picker-day-outside-month': this.isOutsideMonth(),
            'date-picker-day-selected': this.isDaySelected(),
            'date-picker-day-start-selected': this.isDayStartSelected(),
            'date-picker-day-today': this.isToday(),
            'date-picker-day-weekend': this.isWeekend(),
        });

        return (
            <div
                className={containerClasses}
                onClick={this.onDayClick}
                onKeyDown={() => {}}
                role="button"
                tabIndex={-1}
            >
                <span>
                    {moment(dateInView).format('D')}
                </span>
            </div>
        );
    }
}

DatePickerDay.propTypes = propTypes;

export default DatePickerDay;
