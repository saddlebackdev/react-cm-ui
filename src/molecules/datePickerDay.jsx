
import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import DatePickerUtils from '../global/utils/datePickerUtils';

class DatePickerDay extends React.PureComponent {
    constructor(props) {
        super(props);

        this._isDateRange = props.rangeFrom || props.rangeTo || props.range;

        this._onDayClick = this._onDayClick.bind(this);
    }

    render() {
        const { dateInView, dateTo } = this.props;
        const containerClasses = ClassNames('ui', 'date-picker-day', `date-picker-day-${moment(dateInView).format('DD')}`, {
            'date-picker-day-disabled': this._isDisabled(),
            'date-picker-day-end-selected': this._isDayEndSelected(),
            'date-picker-day-has-event': this._hasEvent(),
            'date-picker-day-in-range': this._isInRange(),
            'date-picker-day-no-end-day-selected': this._isDayStartSelected() && !dateTo,
            'date-picker-day-outside-month': this._isOutsideMonth(),
            'date-picker-day-selected': this._isDaySelected(),
            'date-picker-day-start-selected': this._isDayStartSelected(),
            'date-picker-day-today': this._isToday(),
            'date-picker-day-weekend': this._isWeekend(),
        });

        return (
            <div
                className={containerClasses}
                onClick={this._onDayClick}
            >
                <span>
                    {moment(dateInView).format('D')}
                </span>
            </div>
        );
    }

    _hasEvent() {
        const { dateInView, events } = this.props;

        return _.some(events, (event) => event.isSame(dateInView, 'day'));
    }

    _isDaySelected() {
        const { date, dateInView } = this.props;

        if (!this._isDateRange) {
            return DatePickerUtils.isSameDay(dateInView, date);
        }
    }

    _isDayStartSelected() {
        const { dateFrom, dateInView } = this.props;

        if (this._isDateRange) {
            return DatePickerUtils.isSameDay(dateInView, dateFrom);
        }
    }

    _isDisabled() {
        const { dateInView } = this.props;

        return DatePickerUtils.isDayDisabled(dateInView, this.props);
    }

    _isDayEndSelected() {
        const { dateInView, dateTo } = this.props;

        if (this._isDateRange) {
            return DatePickerUtils.isSameDay(dateInView, dateTo);
        }
    }

    _isInRange() {
        const { dateTo, dateInView, dateFrom } = this.props;
        const newDateInView = dateInView.clone().startOf('day');

        if (!dateFrom || !dateTo) {
            return false;
        }

        const newDateFrom = dateFrom.clone().startOf('day');
        const newDateTo = dateTo.clone().startOf('day');

        return newDateInView.isBetween(newDateFrom, newDateTo);
    }

    _isOutsideMonth() {
        const { dateInView, month } = this.props;

        return !_.isUndefined(month) && month !== dateInView.month();
    }

    _isToday() {
        const { dateInView } = this.props;

        return dateInView.format('MM/DD/YYYY') === moment().format('MM/DD/YYYY');
    }

    _isWeekend() {
        const weekday = this.props.dateInView.day();

        return weekday === 0 || weekday === 6;
    }

    _onDayClick() {
        const { dateInView, onDayClick } = this.props;

        if (!this._isOutsideMonth() && !this._isDisabled() && !_.isUndefined(onDayClick)) {
            onDayClick(dateInView);
        }
    }
}

DatePickerDay.propTypes = {
    date: PropTypes.object,
    dateFrom: PropTypes.object,
    dateInView: PropTypes.object.isRequired,
    dateTo: PropTypes.object,
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    includeDates: PropTypes.array,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    month: PropTypes.number,
    onDayClick: PropTypes.func,
    range: PropTypes.bool,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
    type: PropTypes.string,
};

export default DatePickerDay;
