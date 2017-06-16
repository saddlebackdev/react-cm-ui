'use strict';

import 'Modules/DatePickerMonth.scss';

import ClassNames from 'classnames';
import React from 'react';

import DatePickerWeek from 'Modules/DatePickerWeek.react';

export default class DatePickerMonth extends React.Component {
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

    _onDayClick(day) {
        if (this.props.onDayClick) {
            this.props.onDayClick(day);
        }
    }

    _renderWeeks() {
        const startOfMonth = this.props.dateInView.clone().startOf('month').startOf('week');

        return [0, 1, 2, 3, 4, 5]
        .map(offset => startOfMonth.clone().add(offset, 'weeks'))
        .filter(startOfWeek => this._isWeekInMonth(startOfWeek))
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
                onDayClick={this._onDayClick.bind(this)}
                excludeDates={this.props.excludeDates}
                filterDates={this.props.filterDates}
                includeDates={this.props.includeDates}
                type={this.props.type}
                uxMode={this.props.uxMode}
            />
        );
    }
}

DatePickerMonth.propTypes = {
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
    onDayClick: React.PropTypes.func,
    type: React.PropTypes.string,
    uxMode: React.PropTypes.string
};
