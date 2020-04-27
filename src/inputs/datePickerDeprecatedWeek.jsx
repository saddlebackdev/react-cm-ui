import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import DatePickerDay from './datePickerDeprecatedDay';

const propTypes = {
    date: PropTypes.shape({}),
    dateEnd: PropTypes.shape({}),
    dateInView: PropTypes.object.isRequired,
    dateSecondaryEnd: PropTypes.shape({}),
    dateSecondaryStart: PropTypes.shape({}),
    dateStart: PropTypes.shape({}),
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    includeDates: PropTypes.array,
    maxDate: PropTypes.shape({}),
    minDate: PropTypes.shape({}),
    month: PropTypes.number,
    onDayClick: PropTypes.func,
    type: PropTypes.string,
    uxMode: PropTypes.string,
};

class DatePickerWeek extends React.Component {
    onDayClick(day) {
        if (this.props.onDayClick) {
            this.props.onDayClick(day);
        }
    }

    renderDays() {
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
                    key={offset}
                    maxDate={this.props.maxDate}
                    minDate={this.props.minDate}
                    month={this.props.month}
                    onClick={this.onDayClick.bind(this, dateInView)}
                    type={this.props.type}
                    uxMode={this.props.uxMode}
                />
            );
        });
    }

    render() {
        const containerClasses = ClassNames('ui', 'date-picker-deprecated-week');

        return (
            <div className={containerClasses}>
                {this.renderDays()}
            </div>
        );
    }
}

DatePickerWeek.propTypes = propTypes;

export default DatePickerWeek;
