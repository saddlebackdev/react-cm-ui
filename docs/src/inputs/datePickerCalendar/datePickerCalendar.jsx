import {
    Card,
    DatePickerCalendar,
    Typography,
} from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

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

        this._onChange = this._onChange.bind(this);
    }

    render() {
        return (
            <DatePickerCalendar
                dateFrom={dateRangeFrom}
                dateTo={dateRangeTo}
                onChange={this._onChange}
                range
            />
        );
    }

    _onChange({ date, dateFrom, dateTo }) {
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
            // onChangeDate: moment(),
            onChangeDate: null,
        };

        this._isWeekday = this._isWeekday.bind(this);
        this._onChange = this._onChange.bind(this);
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
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the DatePickerCalendar\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            },
        ];
        const { onChangeDate } = this.state;

        return (
            <Main page="headers">
                <Main.Content>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Date Picker Calendar */}
                    <Typography anchor="date-picker-calendar" variant="h2" style={{ marginTop: '55px' }}>
                        Date Picker Calendar
                    </Typography>

                    <DatePickerCalendar />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {datePickerSample}
                    </Highlighter>

                    {/* Events */}
                    <Typography anchor="events" variant="h2" style={{ marginTop: '55px' }}>
                        Events
                    </Typography>

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
                    <Typography anchor="filter-dates" variant="h2" style={{ marginTop: '55px' }}>
                        Filter Dates
                    </Typography>

                    <DatePickerCalendar
                        filterDates={this._isWeekday}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {filterDatesSample}
                    </Highlighter>

                    {/* Locale */}
                    <Typography anchor="locale" variant="h2" style={{ marginTop: '55px' }}>
                        Locale
                    </Typography>

                    <DatePickerCalendar
                        locale={moment().locale()}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {localeSample}
                    </Highlighter>

                    {/* Max Date */}
                    <Typography anchor="max-dates" variant="h2" style={{ marginTop: '55px' }}>
                        Max Date
                    </Typography>

                    <DatePickerCalendar
                        maxDate={moment()}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {maxDateSample}
                    </Highlighter>

                    {/* Min Date */}
                    <Typography anchor="min-dates" variant="h2" style={{ marginTop: '55px' }}>
                        Min Date
                    </Typography>

                    <DatePickerCalendar
                        minDate={moment().subtract(10, 'years')}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {minDateSample}
                    </Highlighter>

                    {/* onChange Event Handler */}
                    <Typography anchor="on-change" variant="h2" style={{ marginTop: '55px' }}>
                        onChange Event Handler
                    </Typography>

                    <DatePickerCalendar
                        date={onChangeDate}
                        onChange={this._onChange}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onChangeSample}
                    </Highlighter>

                    {/* onMonthChange */}
                    <Typography anchor="on-month-change" variant="h2" style={{ marginTop: '55px' }}>
                        onMonthChange Event Handler
                    </Typography>

                    <DatePickerCalendar
                        onMonthChange={() => window.alert('The month was changed!') }
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onMonthChangeSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }

    _isWeekday(date) {
        const day = date.day();

        return day !== 0 && day !== 6;
    }

    _onChange({ date, dateFrom, dateTo }) {
        this.setState({
            onChangeDate: date,
        });
    }
}
