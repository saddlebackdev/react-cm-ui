
import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DatePickerWeek from './datePickerWeek';

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
            filterDates,
            includeDates,
            maxDate,
            minDate,
            mode,
            range,
            rangeFrom,
            rangeTo,
        } = this.props;
        const startOfMonth = dateInView.clone().startOf('month').startOf('week');

        return _.map([0, 1, 2, 3, 4, 5], (week) => {
            const startOfWeek = startOfMonth.clone().add(week, 'weeks');

            return (
                <DatePickerWeek
                    date={date}
                    dateFrom={dateFrom}
                    dateInView={startOfWeek}
                    dateTo={dateTo}
                    events={events}
                    excludeDates={excludeDates}
                    filterDates={filterDates}
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
    date: PropTypes.shape({}),
    dateFrom: PropTypes.shape({}),
    dateInView: PropTypes.object.isRequired,
    dateTo: PropTypes.shape({}),
    events: PropTypes.arrayOf(PropTypes.shape({})),
    excludeDates: PropTypes.arrayOf(PropTypes.shape({})),
    filterDates: PropTypes.func,
    includeDates: PropTypes.arrayOf(PropTypes.shape({})),
    maxDate: PropTypes.shape({}),
    minDate: PropTypes.shape({}),
    mode: PropTypes.oneOf(['calendar', 'input']),
    onDayClick: PropTypes.func.isRequired,
    range: PropTypes.bool,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
};

export default DatePickerMonth;
