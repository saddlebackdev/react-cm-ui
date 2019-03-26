'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import DatePickerWeek from './DatePickerWeek.react';
import PropTypes from 'prop-types';
import React from 'react';

class DatePickerMonth extends React.PureComponent {
    constructor() {
        super();

        this._onDayClick = this._onDayClick.bind(this);
    }

    render() {
        const containerClasses = ClassNames('ui', 'date-picker-month');

        return (
            <div className={containerClasses}>
                {this._renderWeeks()}
            </div>
        );
    }

    _isWeekInMonth(startOfWeek) {
        const { dateInView } = this.props;
        const endOfWeek = startOfWeek.clone().add(6, 'days');

        return startOfWeek.isSame(dateInView, 'month') || endOfWeek.isSame(dateInView, 'month');
    }

    _onDayClick(date) {
        console.log('DatePickerMonth _onDayClick');
        const { onDayClick } = this.props;

        if (!_.isUndefined(onDayClick)) {
            onDayClick(date);
        }
    }

    _renderWeeks() {
        const {
            date,
            dateFrom,
            dateInView,
            dateTo,
            events,
            excludeDates,
            filterDate,
            includeDates,
            maxDate,
            minDate,
            mode,
            range,
            rangeFrom,
            rangeTo,
        } = this.props;
        const startOfMonth = dateInView.clone().startOf('month').startOf('week');

        return _.map([ 0, 1, 2, 3, 4, 5 ], week => {
            const startOfWeek = startOfMonth.clone().add(week, 'weeks');

            return (
                <DatePickerWeek
                    date={date}
                    dateFrom={dateFrom}
                    dateInView={startOfWeek}
                    dateTo={dateTo}
                    events={events}
                    excludeDates={excludeDates}
                    filterDate={filterDate}
                    includeDates={includeDates}
                    key={week}
                    maxDate={maxDate}
                    minDate={minDate}
                    month={dateInView.month()}
                    onDayClick={this._onDayClick}
                    mode={mode}
                    range={range}
                    rangeFrom={rangeFrom}
                    rangeTo={rangeTo}
                />
            );
        });
    }
}

DatePickerMonth.propTypes = {
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
    mode: PropTypes.oneOf([ 'calendar', 'input' ]),
    onDayClick: PropTypes.func.isRequired,
    range: PropTypes.bool,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
};

export default DatePickerMonth;
