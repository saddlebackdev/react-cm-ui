'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import DatePickerDay from './DatePickerDeprecatedDay.react';

class DatePickerWeek extends Component {
    render() {
        const containerClasses = ClassNames('ui', 'date-picker-deprecated-week');

        return (
            <div className={containerClasses}>
                {this._renderDays()}
            </div>
        );
    }

    _onDayClick(day) {
        if (this.props.onDayClick) {
            this.props.onDayClick(day);
        }
    }

    _renderDays() {
        const startOfWeek = this.props.dateInView.clone().startOf('week');

        return [0, 1, 2, 3, 4, 5, 6].map(offset => {
            let dateInView = startOfWeek.clone().add(offset, 'days');

            return (
                <DatePickerDay
                    date={this.props.date}
                    dateEnd={this.props.dateEnd}
                    dateInView={dateInView}
                    dateSecondaryEnd={this.props.dateSecondaryEnd}
                    dateSecondaryStart={this.props.dateSecondaryStart}
                    dateStart={this.props.dateStart}
                    events={this.props.events}
                    excludeDates={this.props.excludeDates}
                    filterDate={this.props.filterDate}
                    includeDates={this.props.includeDates}
                    filterDate={this.props.filterDate}
                    key={offset}
                    maxDate={this.props.maxDate}
                    minDate={this.props.minDate}
                    month={this.props.month}
                    onClick={this._onDayClick.bind(this, dateInView)}
                    type={this.props.type}
                    uxMode={this.props.uxMode}
                />
            );
        });
    }
}

DatePickerWeek.propTypes = {
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
    month: PropTypes.number,
    onDayClick: PropTypes.func,
    type: PropTypes.string,
    uxMode: PropTypes.string
};

export default DatePickerWeek;
