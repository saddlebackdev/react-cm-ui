'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import DatePickerDay from './DatePickerDay.react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class DatePickerWeek extends Component {
    constructor() {
        super();

        this._onDayClick = this._onDayClick.bind(this);
    }

    render() {
        const containerClasses = ClassNames('ui', 'date-picker-week');

        return (
            <div className={containerClasses}>
                {this._renderDays()}
            </div>
        );
    }

    _onDayClick(day) {
        console.log('DatePickerWeek _onDayClick');
        const { onDayClick } = this.props;

        if (!_.isUndefined(onDayClick)) {
            onDayClick(day);
        }
    }

    _renderDays() {
        const {
            date,
            dateInView,
            events,
            excludeDates,
            filterDate,
            includeDates,
            maxDate,
            minDate,
            mode,
            month,
        } = this.props;
        const startOfWeek = dateInView.clone().startOf('week');

        return _.map([0, 1, 2, 3, 4, 5, 6], day => {
            const dateInView = startOfWeek.clone().add(day, 'days');

            return (
                <DatePickerDay
                    date={date}
                    dateInView={dateInView}
                    events={events}
                    excludeDates={excludeDates}
                    filterDate={filterDate}
                    includeDates={includeDates}
                    key={day}
                    maxDate={maxDate}
                    minDate={minDate}
                    mode={mode}
                    month={month}
                    onDayClick={this._onDayClick}
                />
            );
        });
    }
}

DatePickerWeek.propTypes = {
    date: PropTypes.object,
    dateEnd: PropTypes.object,
    dateInView: PropTypes.object.isRequired,
    dateTo: PropTypes.object,
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    includeDates: PropTypes.array,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    mode: PropTypes.string,
    month: PropTypes.number,
    onDayClick: PropTypes.func,
};

export default DatePickerWeek;
