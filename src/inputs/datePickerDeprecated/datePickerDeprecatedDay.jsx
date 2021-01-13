import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import React from 'react';
import DatePickerUtils from '../../utils/datePickerUtils';

const propTypes = {
    date: PropTypes.shape({}),
    dateEnd: PropTypes.shape({}),
    dateInView: PropTypes.shape({}).isRequired,
    dateSecondaryEnd: PropTypes.shape({}),
    dateSecondaryStart: PropTypes.shape({}),
    dateStart: PropTypes.shape({}),
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    includeDates: PropTypes.array,
    maxDate: PropTypes.shape({}),
    minDate: PropTypes.shape({}),
    month: PropTypes.number,
    onClick: PropTypes.func,
    type: PropTypes.string,
    uxMode: PropTypes.string,
};

class DatePickerDay extends React.Component {
    hasEvent() {
        return _.some(this.props.events, event => moment.unix(event).utc().isSame(this.props.dateInView, 'day'));
    }

    isDaySelected() {
        if (this.props.type !== 'dateRange' ||
            this.props.type !== 'servicePeriod' ||
            this.props.type !== 'servicePeriodRange' ||
            this.props.type !== 'servicePeriodRangeEnd' ||
            this.props.type !== 'servicePeriodRangeStart'
        ) {
            return DatePickerUtils.isSameDay(this.props.dateInView, this.props.date);
        }
    }

    isDayStartSelected() {
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

    isDisabled() {
        return DatePickerUtils.isDayDisabled(this.props.dateInView, this.props);
    }

    isDayEndSelected() {
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

    isInRange() {
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

    isOutsideMonth() {
        const { month } = this.props;

        return !_.isUndefined(month) && month !== this.props.dateInView.month();
    }

    isToday() {
        return this.props.dateInView.format('MM/DD/YYYY') === moment().format('MM/DD/YYYY');
    }

    isWeekend() {
        const weekday = this.props.dateInView.day();

        return weekday === 0 || weekday === 6;
    }

    onClick(event) {
        if (!this.isOutsideMonth() && !this.isDisabled() && _.isFunction(this.props.onClick)) {
            this.props.onClick(event);
        }
    }

    render() {
        const containerClasses = ClassNames('ui', 'date-picker-deprecated-day', {
            'date-picker-deprecated-day-disabled': this.isDisabled(),
            'date-picker-deprecated-day-end-selected': this.isDayEndSelected(),
            'date-picker-deprecated-day-has-event': this.hasEvent(),
            'date-picker-deprecated-day-in-range': this.isInRange(),
            'date-picker-deprecated-day-no-end-day-selected': this.isDayStartSelected() && !this.props.dateEnd,
            'date-picker-deprecated-day-outside-month': this.isOutsideMonth(),
            'date-picker-deprecated-day-selected': this.isDaySelected(),
            'date-picker-deprecated-day-start-selected': this.isDayStartSelected(),
            'date-picker-deprecated-day-today': this.isToday(),
            'date-picker-deprecated-day-weekend': this.isWeekend(),
        });

        return (
            <div className={containerClasses} onClick={this.onClick.bind(this)}>
                <span>
                    {moment(this.props.dateInView).format('DD')}
                </span>
            </div>
        );
    }
}

DatePickerDay.propTypes = propTypes;

export default DatePickerDay;
