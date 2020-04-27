import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import React from 'react';
import Button from './button';
import DatePickerDropdownMonth from './datePickerDropdownMonth';
import DatePickerDropdownYear from './datePickerDropdownYear';
import DatePickerMonth from './datePickerDeprecatedMonth';
import DatePickerUtils from '../utils/datePickerUtils';
import Grid from '../organisms/grid';
import Icon from '../dataDisplay/icon';

const propTypes = {
    buttonClear: PropTypes.bool,
    date: PropTypes.object, // Single date moment object. Coverted from timestamp in parent component.
    dateEnd: PropTypes.object, // Range end date moment object. Coverted from timestamp in parent component.
    dateSecondaryEnd: PropTypes.object, // Range start date moment object. Coverted from timestamp in parent component.
    dateSecondaryStart: PropTypes.object, // Range start date moment object. Coverted from timestamp in parent component.
    dateStart: PropTypes.object, // Range start date moment object. Coverted from timestamp in parent component.
    events: PropTypes.array,
    excludeDates: PropTypes.array,
    filterDate: PropTypes.func,
    includeDates: PropTypes.array,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onApplyClick: PropTypes.func,
    onClearClick: PropTypes.func,
    onClose: PropTypes.func,
    onMonthChange: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    type: PropTypes.string,
    uxMode: PropTypes.string,
};

class DatePickerCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateInView: this.localizeMoment(
                this.getDateInView(
                    props.date,
                    props.dateStart,
                    props.dateSecondaryStart,
                    props.maxDate,
                    props.minDate,
                ),
            ),
            showDropdownMonth: false,
            showDropdownYear: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (!DatePickerUtils.isSameDay(prevProps.date, this.props.date) ||
            !DatePickerUtils.isSameDay(prevProps.dateStart, this.props.dateStart)
        ) {
            this.setState({
                dateInView: this.localizeMoment(
                    this.getDateInView(
                        this.props.date,
                        this.props.dateStart,
                        this.props.dateSecondaryStart,
                        this.props.maxDate,
                        this.props.minDate
                    )
                )
            });
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // issue onMonthChange() call when month changes due to a user selection of the date
        // (as opposed to via the month dropdown)
        if (this.state.dateInView &&
            nextState.dateInView &&
            (nextState.dateInView.month() !== this.state.dateInView.month()) &&
            (typeof this.props.onMonthChange === 'function')) {
            this.props.onMonthChange(nextState.dateInView.month(), nextState.dateInView.year());
        }
    }

    getDateInView(date, dateStart, dateSecondaryStart, maxDate, minDate) {
        const today = moment();

        if (date) {
            return date;
        } else if (dateStart /*&& (_.isNull(dateSecondaryStart) || dateSecondaryStart)*/) { // I'm 99.9% certain that portion is useless ... it should ALWAYS be either NULL OR truthy, right...?
            return dateStart;
        } else if (!dateStart && dateSecondaryStart) {
            return dateSecondaryStart;
        }

        if (minDate && minDate.isAfter(today)) {
            return minDate;
        } else if (maxDate && maxDate.isBefore(today)) {
            return maxDate;
        } else {
            return today;
        }
    }

    handleClickOutside() {
        this.props.onClose();
    }

    headerDays() {
        const startOfWeek = this.state.dateInView.clone().startOf('week');

        return [0, 1, 2, 3, 4, 5, 6].map(offset => {
            const day = startOfWeek.clone().add(offset, 'days');

            return (
                <div className="ui date-picker-deprecated-day" key={offset} >
                    {day.localeData().weekdaysMin(day)}
                </div>
            );
        })
    }

    localizeMoment(date) {
        return date.clone().locale(this.props.locale || moment.locale());
    }

    onApplyClick() {
        if (_.isFunction(this.props.onApplyClick)) {
            this.props.onApplyClick();
        }
    }

    onChangeMonth(month) {
        if (typeof this.props.onMonthChange === 'function')
            this.props.onMonthChange(month, this.state.dateInView.year());

        this.setState({
            dateInView: this.state.dateInView.clone().set('month', month),
            showDropdownMonth: false
        });
    }

    onChangeYear(year) {
        this.setState({
            dateInView: this.state.dateInView.clone().set('year', year),
            showDropdownYear: false
        });
    }

    onClearClick() {
        this.props.onClearClick();
    }

    onDayClick(day) {
        if (_.isFunction(this.props.onSelect)) {
            this.props.onSelect(day);
        }
    }

    onDropdownMonthClick() {
        this.setState({ showDropdownMonth: !this.state.showDropdownMonth });
    }

    onDropdownYearClick() {
        this.setState({ showDropdownYear: !this.state.showDropdownYear });
    }

    render() {
        const {
            buttonClear,
            date,
            dateEnd,
            dateStart,
            dateSecondaryEnd,
            dateSecondaryStart,
            onApplyClick,
            type,
            uxMode,
        } = this.props;
        const dateInView = this.state.dateInView;
        const containerClasses = ClassNames('ui', 'date-picker-deprecated-calendar', {
            'date-picker-deprecated-calendar-uxmode-input': uxMode === 'input',
            'date-picker-deprecated-calendar-uxmode-calendar': uxMode === 'calendar',
            'date-picker-deprecated-calendar-date-range': type === 'dateRange',
            'date-picker-deprecated-calendar-service-period': type === 'servicePeriod',
            'date-picker-deprecated-calendar-service-period-range': type === 'servicePeriodRange' ||
                type === 'servicePeriodRangeEnd' ||
                type === 'servicePeriodRangeStart',
            'date-picker-deprecated-calendar-single-date': type === 'singleDate'
        });

        return (
            <div className={containerClasses}>
                {uxMode === 'input' ? (
                    <div className="date-picker-pointer" />
                ) : null}

                <div className="date-picker-selected-month-year">
                    <div className="date-picker-selected-month" onClick={this.onDropdownMonthClick.bind(this)}>
                        <span>
                            {dateInView.format('MMMM')}
                            <Icon align="right" size="xxsmall" type="caret-down" />
                        </span>

                        {this.state.showDropdownMonth ? (
                            <DatePickerDropdownMonth
                                month={dateInView.month()}
                                onChange={this.onChangeMonth.bind(this)}
                                onClose={this.onDropdownMonthClick.bind(this)}
                            />
                        ) : null}
                    </div>

                    <div className="date-picker-selected-year" onClick={this.onDropdownYearClick.bind(this)}>
                        <span>
                            {dateInView.format('YYYY')}
                            <Icon align="right" size="xxsmall" type="caret-down" />
                        </span>

                        {this.state.showDropdownYear ? (
                            <DatePickerDropdownYear
                                onChange={this.onChangeYear.bind(this)}
                                onClose={this.onDropdownYearClick.bind(this)}
                                year={dateInView.year()}
                            />
                        ) : null}
                    </div>
                </div>

                <div className="date-picker-month-container">
                    <div className="ui date-picker-header-days">
                        {this.headerDays()}
                    </div>

                    <DatePickerMonth
                        dateInView={dateInView}
                        date={date}
                        dateEnd={dateEnd}
                        dateSecondaryEnd={dateSecondaryEnd}
                        dateSecondaryStart={dateSecondaryStart}
                        dateStart={dateStart}
                        events={this.props.events}
                        excludeDates={this.props.excludeDates}
                        filterDates={this.props.filterDates}
                        includeDates={this.props.includeDates}
                        key="datepicker-month"
                        maxDate={this.props.maxDate}
                        minDate={this.props.minDate}
                        onDayClick={this.onDayClick.bind(this)}
                        type={this.props.type}
                        uxMode={this.props.uxMode}
                    />
                </div>

                {buttonClear === true || _.isFunction(onApplyClick) ? (
                    <Grid columns={2} style={{ marginTop: '11px' }} verticalAlign="middle">
                        <Grid.Row>
                            {buttonClear === true && dateStart || dateSecondaryStart ? (
                                <Grid.Column floated="left">
                                    <a className="font-size-xsmall color-alert" onClick={this.onClearClick.bind(this)}>Clear</a>
                                </Grid.Column>
                            ) : null}

                            {_.isFunction(onApplyClick) ? (
                                <Grid.Column floated="right" textAlign="right">
                                    <Button
                                        color={
                                            (type === 'singleDate' && date) ||
                                            ((type === 'dateRange' || type === 'servicePeriod') && dateStart && dateEnd) ||
                                            (type === 'servicePeriodRange' && dateStart && dateEnd && dateSecondaryStart && dateSecondaryEnd) ?
                                                'primary' : 'disable'
                                        }
                                        onClick={date || dateStart && dateEnd || dateSecondaryStart && dateSecondaryEnd ? this.onApplyClick.bind(this) : null}
                                    >
                                        {(type === 'singleDate' && date) ||
                                        ((type === 'dateRange' || type === 'servicePeriod') && dateStart && dateEnd) ||
                                        (type === 'servicePeriodRange' && dateStart && dateEnd && dateSecondaryStart && dateSecondaryEnd) ?
                                            'Apply' :
                                            'Select'
                                        }
                                    </Button>
                                </Grid.Column>
                            ) : null}
                        </Grid.Row>
                    </Grid>
                ) : null}
            </div>
        );
    }
}

DatePickerCalendar.propTypes = propTypes;

export default onClickOutside(DatePickerCalendar);
