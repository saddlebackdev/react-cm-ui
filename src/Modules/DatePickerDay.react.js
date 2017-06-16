'use strict';

import 'Collections//Modules/DatePickerDay.scss';

import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import React from 'react';

import DatePickerUtils from 'utils/DatePickerUtils.js';

export default class DatePickerDay extends React.Component {
    render() {
        const containerClasses = ClassNames('ui', 'date-picker-day', {
            'date-picker-day-disabled': this._isDisabled(),
            'date-picker-day-end-selected': this._isDayEndSelected(),
            'date-picker-day-has-event': this._hasEvent(),
            'date-picker-day-in-range': this._isInRange(),
            'date-picker-day-no-end-day-selected': this._isDayStartSelected() && !this.props.dateEnd,
            'date-picker-day-outside-month': this._isOutsideMonth(),
            'date-picker-day-selected': this._isDaySelected(),
            'date-picker-day-start-selected': this._isDayStartSelected(),
            'date-picker-day-today': this._isToday(),
            'date-picker-day-weekend': this._isWeekend()
        });

        return (
            <div className={containerClasses} onClick={this._onClick.bind(this)}>
                <span>
                    {moment(this.props.dateInView).format('DD')}
                </span>
            </div>
        );
    }

    _hasEvent() {
        return _.some(this.props.events, event => moment.unix(event).utc().isSame(this.props.dateInView, 'day'));
    }

    _isDaySelected() {
        if (this.props.type !== 'dateRange' ||
            this.props.type !== 'servicePeriod' ||
            this.props.type !== 'servicePeriodRange' ||
            this.props.type !== 'servicePeriodRangeEnd' ||
            this.props.type !== 'servicePeriodRangeStart'
        ) {
            return DatePickerUtils.isSameDay(this.props.dateInView, this.props.date);
        }
    }

    _isDayStartSelected() {
        const { dateSecondaryStart, dateStart } = this.props;

        if (this.props.type === 'dateRange' ||
            this.props.type === 'servicePeriod' ||
            this.props.type === 'servicePeriodRange' ||
            this.props.type === 'servicePeriodRangeEnd' ||
            this.props.type === 'servicePeriodRangeStart'
        ) {
            return DatePickerUtils.isSameDay(this.props.dateInView, dateStart) ||
                DatePickerUtils.isSameDay(this.props.dateInView, dateSecondaryStart);
        }
    }

    _isDisabled() {
        return DatePickerUtils.isDayDisabled(this.props.dateInView, this.props);
    }

    _isDayEndSelected() {
        const { dateEnd, dateSecondaryEnd } = this.props;
        if (this.props.type === 'dateRange' ||
            this.props.type === 'servicePeriod' ||
            this.props.type === 'servicePeriodRange' ||
            this.props.type === 'servicePeriodRangeEnd' ||
            this.props.type === 'servicePeriodRangeStart'
        ) {
            return DatePickerUtils.isSameDay(this.props.dateInView, dateEnd) ||
                DatePickerUtils.isSameDay(this.props.dateInView, dateSecondaryEnd);
        }
    }

    _isInRange() {
        const { dateEnd, dateInView, dateSecondaryEnd, dateSecondaryStart, dateStart, type } = this.props;
        const newDateInView = dateInView.clone().startOf('day');

        if (!dateStart || !dateEnd) {
            return false;
        }

        const newDateStart = dateStart.clone().startOf('day');
        const newDateEnd = dateEnd.clone().startOf('day');

        if (type === 'servicePeriodRangeEnd' && dateSecondaryStart || dateSecondaryEnd) {
            const newDateSecondaryStart = dateSecondaryStart.clone().startOf('day');
            const newDateSecondaryEnd = dateSecondaryEnd.clone().startOf('day');

            return newDateInView.isBetween(newDateStart, newDateEnd) ||
                newDateInView.isBetween(newDateEnd, newDateSecondaryStart) ||
                newDateInView.isBetween(newDateSecondaryStart, newDateSecondaryEnd);
        } else {
            return newDateInView.isBetween(newDateStart, newDateEnd);
        }
    }

    _isOutsideMonth() {
        const { month } = this.props;

        return !_.isUndefined(month) && month !== this.props.dateInView.month();
    }

    _isToday() {
        return this.props.dateInView.format('MM/DD/YYYY') === moment().format('MM/DD/YYYY');
    }

    _isWeekend() {
        const weekday = this.props.dateInView.day();

        return weekday === 0 || weekday === 6;
    }

    _onClick(event) {
        if (!this._isOutsideMonth() && !this._isDisabled() && _.isFunction(this.props.onClick)) {
            this.props.onClick(event);
        }
    }
}

DatePickerDay.propTypes = {
    date: React.PropTypes.object,
    dateEnd: React.PropTypes.object,
    dateInView: React.PropTypes.object.isRequired,
    dateSecondaryEnd: React.PropTypes.object,
    dateSecondaryStart: React.PropTypes.object,
    dateStart: React.PropTypes.object,
    events: React.PropTypes.array,
    excludeDates: React.PropTypes.array,
    filterDates: React.PropTypes.func,
    includeDates: React.PropTypes.array,
    maxDate: React.PropTypes.object,
    minDate: React.PropTypes.object,
    month: React.PropTypes.number,
    onDayClick: React.PropTypes.func,
    type: React.PropTypes.string,
    uxMode: React.PropTypes.string
};
