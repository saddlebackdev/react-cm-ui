import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DatePickerWeek from './datePickerDeprecatedWeek';

const propTypes = {
    date: PropTypes.object,
    dateEnd: PropTypes.object,
    dateInView: PropTypes.object.isRequired,
    dateSecondaryEnd: PropTypes.object,
    dateSecondaryStart: PropTypes.object,
    dateStart: PropTypes.object,
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    includeDates: PropTypes.array,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onDayClick: PropTypes.func,
    type: PropTypes.string,
    uxMode: PropTypes.string,
};

class DatePickerMonth extends React.Component {
    isWeekInMonth(startOfWeek) {
        const { dateInView } = this.props;
        const endOfWeek = startOfWeek.clone().add(6, 'days');

        return startOfWeek.isSame(dateInView, 'month') || endOfWeek.isSame(dateInView, 'month');
    }

    onDayClick(day) {
        if (this.props.onDayClick) {
            this.props.onDayClick(day);
        }
    }

    renderWeeks() {
        const startOfMonth = this.props.dateInView.clone().startOf('month').startOf('week');

        return [0, 1, 2, 3, 4, 5]
        .map(offset => startOfMonth.clone().add(offset, 'weeks'))
        .filter(startOfWeek => this.isWeekInMonth(startOfWeek))
        .map((startOfWeek, offset) =>
            <DatePickerWeek
                date={this.props.date}
                dateEnd={this.props.dateEnd}
                dateInView={startOfWeek}
                dateSecondaryEnd={this.props.dateSecondaryEnd}
                dateSecondaryStart={this.props.dateSecondaryStart}
                dateStart={this.props.dateStart}
                events={this.props.events}
                key={offset}
                maxDate={this.props.maxDate}
                minDate={this.props.minDate}
                month={this.props.dateInView.month()}
                onDayClick={this.onDayClick.bind(this)}
                excludeDates={this.props.excludeDates}
                filterDates={this.props.filterDates}
                includeDates={this.props.includeDates}
                type={this.props.type}
                uxMode={this.props.uxMode}
            />
        );
    }

    render() {
        const containerClasses = ClassNames('ui', 'date-picker-deprecated-month');

        return (
            <div className={containerClasses}>
                {this.renderWeeks()}
            </div>
        );
    }
}

DatePickerMonth.propTypes = propTypes;

export default DatePickerMonth;
