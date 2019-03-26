import { Card, DatePickerCalendar, Header, TitleBar } from 'react-cm-ui';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import moment from 'moment-timezone';
import React from 'react';
import TableProps from 'components/UI/TableProps.react';

const datePickerSample = `import { DatePickerCalendar } from 'react-cm-ui';
import React from 'react';

export default class DatePickerSample extends React.Component {
    render() {
        return (
            <DatePickerCalendar />
        );
    }
}`;

const eventsSample = `import { DatePickerCalendar } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class EventsSample extends React.Component {
    render() {
        return (
            <DatePickerCalendar
                events={[
                    moment().subtract(1, 'days'),
                    moment().subtract(2, 'days'),
                    moment().subtract(3, 'days'),
                    moment().subtract(4, 'days'),
                ]}
            />
        );
    }
}`;

const filterDatesSample = `import { DatePickerCalendar } from 'react-cm-ui';
import React from 'react';

export default class FilterDatesSample extends React.Component {
    render() {
        return (
            <DatePickerCalendar
                filterDates={this._isWeekday}
            />
        );
    }

    _isWeekday(date) {
        const day = date.day();

        return day !== 0 && day !== 6;
    }
}`;

const localeSample = `import { DatePickerCalendar } from 'react-cm-ui';
import React from 'react';

export default class LocaleSample extends React.Component {
    render() {
        return (
            <DatePickerCalendar
                locale={moment().locale()}
            />
        );
    }
}`;

const maxDateSample = `import { DatePickerCalendar } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class MaxDateSample extends React.Component {
    render() {
        return (
            <DatePickerCalendar
                maxDate={moment()}
            />
        );
    }
}`;

const minDateSample = `import { DatePickerCalendar } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class MinDateSample extends React.Component {
    render() {
        return (
            <DatePickerCalendar
                minDate={moment().subtract(10, 'years')}
            />
        );
    }
}`;

const onChangeSample = `import { DatePickerCalendar } from 'react-cm-ui';
import React from 'react';

export default class OnChangeSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateRangeFrom: moment(),
            dateRangeTo: moment(),
        };

        this._onDateRangeChange = this._onDateRangeChange.bind(this);
    }

    render() {
        return (
            <DatePickerCalendar
                dateFrom={dateRangeFrom}
                dateTo={dateRangeTo}
                onChange={this._onDateRangeChange}
                range
            />
        );
    }

    _onDateRangeChange({ date, dateFrom, dateTo }) {
        this.setState({
            dateRangeFrom: dateFrom,
            dateRangeTo: dateTo,
        });
    }
}`;

const onMonthChangeSample = `import { DatePickerCalendar } from 'react-cm-ui';
import React from 'react';

export default class OnMonthChangeSample extends React.Component {
    render() {
        return (
            <DatePickerCalendar
                onMonthChange={() => window.alert('The month was changed!') }
            />
        );
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

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {datePickerSample}
                </Highlighter>

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

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {eventsSample}
                </Highlighter>

                {/* Filter Dates */}
                <Header anchor="filter-dates" size="large" style={{ marginTop: '55px' }}>
                    Filter Dates
                </Header>

                <DatePickerCalendar
                    filterDates={this._isWeekday}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {filterDatesSample}
                </Highlighter>

                {/* Locale */}
                <Header anchor="locale" size="large" style={{ marginTop: '55px' }}>
                    Locale
                </Header>

                <DatePickerCalendar
                    locale={moment().locale()}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {localeSample}
                </Highlighter>

                {/* Max Date */}
                <Header anchor="max-dates" size="large" style={{ marginTop: '55px' }}>
                    Max Date
                </Header>

                <DatePickerCalendar
                    maxDate={moment()}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {maxDateSample}
                </Highlighter>

                {/* Min Date */}
                <Header anchor="min-dates" size="large" style={{ marginTop: '55px' }}>
                    Min Date
                </Header>

                <DatePickerCalendar
                    minDate={moment().subtract(10, 'years')}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {minDateSample}
                </Highlighter>

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

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onChangeSample}
                </Highlighter>

                {/* onMonthChange */}
                <Header anchor="on-month-change" size="large" style={{ marginTop: '55px' }}>
                    onMonthChange Event Handler
                </Header>

                <DatePickerCalendar
                    onMonthChange={() => window.alert('The month was changed!') }
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onMonthChangeSample}
                </Highlighter>
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
