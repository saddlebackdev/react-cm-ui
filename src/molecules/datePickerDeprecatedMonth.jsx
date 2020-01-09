
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import DatePickerWeek from './datePickerDeprecatedWeek';

class DatePickerMonth extends Component {
    render() {
        const containerClasses = ClassNames('ui', 'date-picker-deprecated-month');

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

    _onDayClick(day) {
        if (this.props.onDayClick) {
            this.props.onDayClick(day);
        }
    }

    _renderWeeks() {
        const startOfMonth = this.props.dateInView.clone().startOf('month').startOf('week');

        return [0, 1, 2, 3, 4, 5]
            .map((offset) => startOfMonth.clone().add(offset, 'weeks'))
            .filter((startOfWeek) => this._isWeekInMonth(startOfWeek))
            .map((startOfWeek, offset) => (
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
                    onDayClick={this._onDayClick.bind(this)}
                    excludeDates={this.props.excludeDates}
                    filterDates={this.props.filterDates}
                    includeDates={this.props.includeDates}
                    type={this.props.type}
                    uxMode={this.props.uxMode}
                />
            ));
    }
}

DatePickerMonth.propTypes = {
    date: PropTypes.shape({}),
    dateEnd: PropTypes.shape({}),
    dateInView: PropTypes.object.isRequired,
    dateSecondaryEnd: PropTypes.shape({}),
    dateSecondaryStart: PropTypes.shape({}),
    dateStart: PropTypes.shape({}),
    events: PropTypes.arrayOf(PropTypes.shape({})),
    excludeDates: PropTypes.arrayOf(PropTypes.shape({})),
    filterDates: PropTypes.func,
    includeDates: PropTypes.arrayOf(PropTypes.shape({})),
    maxDate: PropTypes.shape({}),
    minDate: PropTypes.shape({}),
    onDayClick: PropTypes.func,
    type: PropTypes.string,
    uxMode: PropTypes.string,
};

export default DatePickerMonth;
