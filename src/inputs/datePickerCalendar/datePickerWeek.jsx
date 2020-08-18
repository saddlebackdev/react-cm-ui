import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DatePickerDay from './datePickerDay';

const propTypes = {
    date: PropTypes.shape({}),
    dateEnd: PropTypes.shape({}),
    dateInView: PropTypes.shape({}).isRequired,
    dateTo: PropTypes.shape({}),
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    includeDates: PropTypes.array,
    maxDate: PropTypes.shape({}),
    minDate: PropTypes.shape({}),
    mode: PropTypes.string,
    month: PropTypes.number,
    onDayClick: PropTypes.func,
    range: PropTypes.bool,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
};

class DatePickerWeek extends React.PureComponent {
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

    renderDays() {
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
            month,
            range,
            rangeFrom,
            rangeTo,
        } = this.props;
        const startOfWeek = dateInView.clone().startOf('week');

        return _.map([ 0, 1, 2, 3, 4, 5, 6 ], day => {
            const dateInView = startOfWeek.clone().add(day, 'days');

            return (
                <DatePickerDay
                    date={date}
                    dateFrom={dateFrom}
                    dateInView={dateInView}
                    dateTo={dateTo}
                    events={events}
                    excludeDates={excludeDates}
                    filterDates={filterDates}
                    includeDates={includeDates}
                    key={day}
                    maxDate={maxDate}
                    minDate={minDate}
                    mode={mode}
                    month={month}
                    onDayClick={this.onDayClick}
                    range={range}
                    rangeFrom={rangeFrom}
                    rangeTo={rangeTo}
                />
            );
        });
    }

    render() {
        const containerClasses = ClassNames('ui', 'date-picker-week');

        return (
            <div className={containerClasses}>
                {this.renderDays()}
            </div>
        );
    }
}

DatePickerWeek.propTypes = propTypes;

export default DatePickerWeek;
