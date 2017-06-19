'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import onClickOutside from 'react-onclickoutside';
import React, { Component } from 'react';

import Button from '../Elements/Button.react';
import DatePickerMonth from './DatePickerMonth.react';
import DatePickerDropdownMonth from './DatePickerDropdownMonth.react';
import DatePickerDropdownYear from './DatePickerDropdownYear.react';
import Grid from '../Collections/Grid.react';
import Icon from '../Elements/Icon.react';

import DatePickerUtils from '../utils/DatePickerUtils.js';

class DatePickerCalendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateInView: this._localizeMoment(
                this._getDateInView(
                    props.date,
                    props.dateStart,
                    props.dateSecondaryStart,
                    props.maxDate,
                    props.minDate
                )
            ),
            showDropdownMonth: false,
            showDropdownYear: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (!DatePickerUtils.isSameDay(nextProps.date, this.props.date) ||
            !DatePickerUtils.isSameDay(nextProps.dateStart, this.props.dateStart)
        ) {
            this.setState({
                dateInView: this._localizeMoment(
                    this._getDateInView(
                        nextProps.date,
                        nextProps.dateStart,
                        nextProps.dateSecondaryStart,
                        nextProps.maxDate,
                        nextProps.minDate
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

    render() {
        const { buttonClear, date, dateEnd, dateStart, dateSecondaryEnd, dateSecondaryStart, onApplyClick, type, uxMode } = this.props;
        const dateInView = this.state.dateInView;
        const containerClasses = ClassNames('ui', 'date-picker-calendar', {
            'date-picker-calendar-uxmode-input': uxMode === 'input',
            'date-picker-calendar-uxmode-calendar': uxMode === 'calendar',
            'date-picker-calendar-date-range': type === 'dateRange',
            'date-picker-calendar-service-period': type === 'servicePeriod',
            'date-picker-calendar-service-period-range': type === 'servicePeriodRange' ||
                type === 'servicePeriodRangeEnd' ||
                type === 'servicePeriodRangeStart',
            'date-picker-calendar-single-date': type === 'singleDate'
        });

        return (
            <div className={containerClasses}>
                {uxMode === 'input' ? (
                    <div className="date-picker-pointer" />
                ) : null}

                <div className="date-picker-selected-month-year">
                    <div className="date-picker-selected-month" onClick={this._onDropdownMonthClick.bind(this)}>
                        <span>
                            {dateInView.format('MMMM')}
                            <Icon align="right" size="xxsmall" type="caret-down" />
                        </span>

                        {this.state.showDropdownMonth ? (
                            <DatePickerDropdownMonth
                                month={dateInView.month()}
                                onChange={this._onChangeMonth.bind(this)}
                                onClose={this._onDropdownMonthClick.bind(this)}
                            />
                        ) : null}
                    </div>

                    <div className="date-picker-selected-year" onClick={this._onDropdownYearClick.bind(this)}>
                        <span>
                            {dateInView.format('YYYY')}
                            <Icon align="right" size="xxsmall" type="caret-down" />
                        </span>

                        {this.state.showDropdownYear ? (
                            <DatePickerDropdownYear
                                onChange={this._onChangeYear.bind(this)}
                                onClose={this._onDropdownYearClick.bind(this)}
                                year={dateInView.year()}
                            />
                        ) : null}
                    </div>
                </div>

                <div className="date-picker-month-container">
                    <div className="ui date-picker-header-days">
                        {this._headerDays()}
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
                        onDayClick={this._onDayClick.bind(this)}
                        type={this.props.type}
                        uxMode={this.props.uxMode}
                    />
                </div>

                {buttonClear === true || _.isFunction(onApplyClick) ? (
                    <Grid columns={2} style={{ marginTop: '11px' }} verticalAlign="middle">
                        <Grid.Row>
                            {buttonClear === true && dateStart || dateSecondaryStart ? (
                                <Grid.Column floated="left">
                                    <a className="font-size-xsmall color-alert" onClick={this._onClearClick.bind(this)}>Clear</a>
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
                                        onClick={date || dateStart && dateEnd || dateSecondaryStart && dateSecondaryEnd ? this._onApplyClick.bind(this) : null}
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

    _getDateInView(date, dateStart, dateSecondaryStart, maxDate, minDate) {
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

    _headerDays() {
        const startOfWeek = this.state.dateInView.clone().startOf('week');

        return [0, 1, 2, 3, 4, 5, 6].map(offset => {
            const day = startOfWeek.clone().add(offset, 'days');

            return (
                <div className="ui date-picker-day" key={offset} >
                    {day.localeData().weekdaysMin(day)}
                </div>
            );
        })
    }

    _localizeMoment(date) {
        return date.clone().locale(this.props.locale || moment.locale());
    }

    _onApplyClick() {
        if (_.isFunction(this.props.onApplyClick)) {
            this.props.onApplyClick();
        }
    }

    _onChangeMonth(month) {
        if (typeof this.props.onMonthChange === 'function')
            this.props.onMonthChange(month, this.state.dateInView.year());

        this.setState({
            dateInView: this.state.dateInView.clone().set('month', month),
            showDropdownMonth: false
        });
    }

    _onChangeYear(year) {
        this.setState({
            dateInView: this.state.dateInView.clone().set('year', year),
            showDropdownYear: false
        });
    }

    _onClearClick() {
        this.props.onClearClick();
    }

    _onDayClick(day) {
        if (_.isFunction(this.props.onSelect)) {
            this.props.onSelect(day);
        }
    }

    _onDropdownMonthClick() {
        this.setState({ showDropdownMonth: !this.state.showDropdownMonth });
    }

    _onDropdownYearClick() {
        this.setState({ showDropdownYear: !this.state.showDropdownYear });
    }
}

DatePickerCalendar.propTypes = {
    buttonClear: React.PropTypes.bool,
    date: React.PropTypes.object, // Single date moment object. Coverted from timestamp in parent component.
    dateEnd: React.PropTypes.object, // Range end date moment object. Coverted from timestamp in parent component.
    dateSecondaryEnd: React.PropTypes.object, // Range start date moment object. Coverted from timestamp in parent component.
    dateSecondaryStart: React.PropTypes.object, // Range start date moment object. Coverted from timestamp in parent component.
    dateStart: React.PropTypes.object, // Range start date moment object. Coverted from timestamp in parent component.
    events: React.PropTypes.array,
    excludeDates: React.PropTypes.array,
    filterDate: React.PropTypes.func,
    includeDates: React.PropTypes.array,
    locale: React.PropTypes.string,
    maxDate: React.PropTypes.object,
    minDate: React.PropTypes.object,
    onApplyClick: React.PropTypes.func,
    onClearClick: React.PropTypes.func,
    onClose: React.PropTypes.func,
    onMonthChange: React.PropTypes.func,
    onSelect: React.PropTypes.func.isRequired,
    type: React.PropTypes.string,
    uxMode: React.PropTypes.string
};

export default onClickOutside(DatePickerCalendar);
