import _ from 'lodash';
import ClassNames from 'classnames';
import DatePickerWeek from './datePickerWeek';
import PropTypes from 'prop-types';
import React from 'react';

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
    mode: PropTypes.oneOf([ 'calendar', 'input' ]),
    onDayClick: PropTypes.func.isRequired,
    range: PropTypes.bool,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
};

class DatePickerMonth extends React.PureComponent {
    constructor() {
        super();

        this.onDayClick = this.onDayClick.bind(this);
    }

    onDayClick(date) {
        const { onDayClick } = this.props;

        if (!_.isUndefined(onDayClick)) {
            onDayClick(date);
        }
    }

    isWeekInMonth(startOfWeek) {
        const { dateInView } = this.props;
        const endOfWeek = startOfWeek.clone().add(6, 'days');

        return startOfWeek.isSame(dateInView, 'month') || endOfWeek.isSame(dateInView, 'month');
    }

    renderWeeks() {
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
                    filterDates={filterDates}
                    includeDates={includeDates}
                    key={week}
                    maxDate={maxDate}
                    minDate={minDate}
                    month={dateInView.month()}
                    onDayClick={this.onDayClick}
                    mode={mode}
                    range={range}
                    rangeFrom={rangeFrom}
                    rangeTo={rangeTo}
                />
            );
        });
    }

    render() {
        const containerClasses = ClassNames('ui', 'date-picker-month');

        return (
            <div className={containerClasses}>
                {this.renderWeeks()}
            </div>
        );
    }
}

DatePickerMonth.propTypes = propTypes;

export default DatePickerMonth;
