'use strict';

import 'Modules/DatePickerWeek.scss';

import ClassNames from 'classnames';
import React from 'react';

import DatePickerDay from 'Modules/DatePickerDay.react';

export default class DatePickerWeek extends React.Component {
    render() {
        const containerClasses = ClassNames('ui', 'date-picker-week');

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
    month: React.PropTypes.number,
    onDayClick: React.PropTypes.func,
    type: React.PropTypes.string,
    uxMode: React.PropTypes.string
};
