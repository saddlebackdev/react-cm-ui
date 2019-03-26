import { Card, DatePickerCalendar, Header, TitleBar } from 'react-cm-ui';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import moment from 'moment-timezone';
import React from 'react';
import TableProps from 'components/UI/TableProps.react';

const singleDateInputSample = `import React from 'react';

import DatePicker from 'components/UI/Modules/DatePicker.react';

export default class SingleDateInputSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { inputSingleDate: null };
    }

    render() {
        return (
            <DatePicker
                date={this.state.inputSingleDate}
                onChange={this._onChange.bind(this, 'inputSingleDate')}
                uxMode="input"
            />
        );
    }

    _onChange(field, date) {
        if (field === 'inputSingleDate') {
            this.setState({ inputSingleDate: date });
        }
    }

}`;

export default class ModulesDatePickerCalendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateRangeFrom: moment(),
            dateRangeTo: moment(),
        };

        this._isWeekday = this._isWeekday.bind(this);
        this._onDateRangeChange = this._onDateRangeChange.bind(this);
    }

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'controls',
                type: 'enum',
                default: 'dropdowns',
                description: 'Sets the type of prev/next controls months and years',
                allowedTypes: 'arrows, dropdowns'
            }, {
                name: 'date',
                type: 'object',
                default: '',
                description: 'Single date timestamp.',
                allowedTypes: ''
            }, {
                name: 'dateFrom',
                type: 'object',
                default: '',
                description: 'Moment object for date range',
                allowedTypes: ''
            }, {
                name: 'dateTo',
                type: 'object',
                default: '',
                description: 'Moment object for date range',
                allowedTypes: ''
            }, {
                name: 'events',
                type: 'array',
                default: '',
                description: 'Accepts an array of moment objects.',
                allowedTypes: ''
            }, {
                name: 'excludeDates',
                type: 'array',
                default: '',
                description: 'Sets a range of dates that are not selectable.',
                allowedTypes: ''
            }, {
                name: 'filterDates',
                type: 'func',
                default: '',
                description: 'Filters out dates that are to not be selectable.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give an input an id.',
                allowedTypes: ''
            }, {
                name: 'includeDates',
                type: 'array',
                default: '',
                description: 'Sets a range of dates that are selectable.',
                allowedTypes: ''
            }, {
                name: 'locale',
                type: 'string',
                default: '',
                description: 'Custom locale.',
                allowedTypes: ''
            }, {
                name: 'maxDate',
                type: 'object',
                default: '',
                description: 'Maxium date\'s in range that are selectable.',
                allowedTypes: ''
            }, {
                name: 'minDate',
                type: 'object',
                default: '',
                description: 'Minumum date\'s in range that are selectable.',
                allowedTypes: ''
            }, {
                name: 'range',
                type: 'bool',
                default: '',
                description: 'Specifies whether the calendar is going to be a date range or not',
                allowedTypes: ''
            },
        ];
        const { dateRangeFrom, dateRangeTo } = this.state;

        return (
            <Main page="headers">
                <TitleBar title="Date Picker" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Date Picker Calendar */}
                <Header anchor="date-picker-calendar" size="large" style={{ marginTop: '55px' }}>
                    Date Picker Calendar
                </Header>

                <DatePickerCalendar />

                {/* Controls */}
                <Header anchor="controls" size="large" style={{ marginTop: '55px' }}>
                    Controls
                </Header>

                <DatePickerCalendar
                    controls="arrows"
                />

                {/* Events */}
                <Header anchor="events" size="large" style={{ marginTop: '55px' }}>
                    Events
                </Header>

                <DatePickerCalendar
                    events={[
                        moment().subtract(1, 'days'),
                        moment().subtract(2, 'days'),
                        moment().subtract(3, 'days'),
                        moment().subtract(4, 'days'),
                    ]}
                />

                {/* Exclude Dates */}
                <Header anchor="exclude-dates" size="large" style={{ marginTop: '55px' }}>
                    Exclude Dates
                </Header>

                <DatePickerCalendar
                    excludeDates={[
                        moment().subtract(1, 'days'),
                        moment().subtract(2, 'days'),
                        moment().subtract(3, 'days'),
                        moment().subtract(4, 'days'),
                    ]}
                />

                {/* Filter Dates */}
                <Header anchor="filter-dates" size="large" style={{ marginTop: '55px' }}>
                    Filter Dates
                </Header>

                <DatePickerCalendar
                    filterDates={this._isWeekday}
                />

                {/* Include Dates */}
                <Header anchor="include-dates" size="large" style={{ marginTop: '55px' }}>
                    Include Dates
                </Header>

                <DatePickerCalendar
                    includeDates={[
                        moment(),
                        moment().subtract(1, 'days'),
                    ]}
                />

                {/* Locale */}
                <Header anchor="locale" size="large" style={{ marginTop: '55px' }}>
                    Locale
                </Header>

                <DatePickerCalendar
                    locale={moment().locale()}
                />

                {/* Max Date */}
                <Header anchor="max-dates" size="large" style={{ marginTop: '55px' }}>
                    Max Date
                </Header>

                <DatePickerCalendar
                    maxDate={moment()}
                />

                {/* Min Date */}
                <Header anchor="min-dates" size="large" style={{ marginTop: '55px' }}>
                    Min Date
                </Header>

                <DatePickerCalendar
                    minDate={moment().subtract(10, 'years')}
                />

                {/* onChange Event Handler */}
                <Header anchor="on-change" size="large" style={{ marginTop: '55px' }}>
                    onChange Event Handler
                </Header>

                <DatePickerCalendar
                    dateFrom={dateRangeFrom}
                    dateTo={dateRangeTo}
                    onChange={this._onDateRangeChange}
                    range
                />

                {/* onMonthChange */}
                <Header anchor="on-month-change" size="large" style={{ marginTop: '55px' }}>
                    onMonthChange Event Handler
                </Header>

                <DatePickerCalendar
                    onMonthChange={() => window.alert('The month was changed!') }
                />

                {/* Range */}
                <Header anchor="range" size="large" style={{ marginTop: '55px' }}>
                    Range
                </Header>

                <DatePickerCalendar
                    range
                />
            </Main>
        );
    }

    _isWeekday(date) {
        const day = date.day();

        return day !== 0 && day !== 6;
    }

    _onDateRangeChange({ date, dateFrom, dateTo }) {
        this.setState({
            dateRangeFrom: dateFrom,
            dateRangeTo: dateTo,
        });
    }
}
