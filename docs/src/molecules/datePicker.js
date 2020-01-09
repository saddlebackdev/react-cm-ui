'use strict';

import { Link } from 'react-router';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, DatePicker, Header, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps.js';

const singleDateInputSample = `import React from 'react';

import DatePicker from '../app/Modules/DatePicker.react';

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

const dateRangeInputSample = `import React from 'react';

import DatePicker from '../app/Modules/DatePicker.react';

export default class DateRangeInputSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputDateRange: {
                dateEnd: null,
                dateStart: null
            }
        };
    }

    render() {
        return (
            <DatePicker
                dateEnd={this.state.inputDateRange.dateEnd}
                dateStart={this.state.inputDateRange.dateStart}
                onChange={this._onChange.bind(this, 'inputDateRange')}
                type="dateRange"
                uxMode="input"
            />
        );
    }

    _onChange(field, date) {
        if (field == 'inputDateRange') {
            this.setState({
                inputDateRange: {
                    dateEnd: date.dateEnd,
                    dateStart: date.dateStart
                }
            });
        }
    }

}`;

const servicePeriodInputSample = `import moment from 'moment-timezone';
import React from 'react';

import DatePicker from '../app/Modules/DatePicker.react';

export default class ServicePeriodInputSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputServicePeriod: {
                dateEnd: null,
                dateStart: null
            }
        };
    }

    render() {
        return (
            <DatePicker
                dateEnd={this.state.inputServicePeriod.dateEnd}
                dateStart={this.state.inputServicePeriod.dateStart}
                onChange={this._onChange.bind(this, 'inputServicePeriod')}
                type="servicePeriod"
                uxMode="input"
            />
        );
    }

    _onChange(field, date) {
        if (field == 'inputServicePeriod') {
            const dateMoment = moment.unix(date).utc();
            // 7 Day Period
            const dateStart = dateMoment.clone().startOf('week');
            const dateEnd = dateMoment.clone().endOf('week');

            this.setState({
                inputServicePeriod: {
                    dateEnd: dateEnd.unix(),
                    dateStart: dateStart.unix()
                }
            });
        }
    }

}`;

const servicePeriodRangeInputSample = `import moment from 'moment-timezone';
import React from 'react';

import DatePicker from '../app/Modules/DatePicker.react';

export default class ServicePeriodRangeInputSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputServicePeriodRange: {
                dateEnd: null,
                dateSecondaryEnd: null,
                dateSecondaryStart: null,
                dateStart: null
            }
        };
    }

    render() {
        return (
            <DatePicker
                dateEnd={this.state.inputServicePeriodRange.dateEnd}
                dateSecondaryEnd={this.state.inputServicePeriodRange.dateSecondaryEnd}
                dateSecondaryStart={this.state.inputServicePeriodRange.dateSecondaryStart}
                dateStart={this.state.inputServicePeriodRange.dateStart}
                onChange={this._onChange.bind(this, 'inputServicePeriodRange')}
                type="servicePeriodRangeStart"
                uxMode="input"
            /><br /><br />

            <DatePicker
                dateEnd={this.state.inputServicePeriodRange.dateEnd}
                dateSecondaryEnd={this.state.inputServicePeriodRange.dateSecondaryEnd}
                dateSecondaryStart={this.state.inputServicePeriodRange.dateSecondaryStart}
                dateStart={this.state.inputServicePeriodRange.dateStart}
                onChange={this._onChange.bind(this, 'inputServicePeriodRange')}
                type="servicePeriodRangeEnd"
                uxMode="input"
            />
        );
    }

    _onChange(field, date) {
        if (field == 'inputServicePeriodRange') {
            this.setState({
                inputServicePeriodRange: {
                    dateEnd: moment.unix(date.dateFirstChoice).utc().clone().endOf('week').unix(),
                    dateSecondaryEnd: moment.unix(date.dateSecondChoice).utc().clone().endOf('week').unix(),
                    dateSecondaryStart: moment.unix(date.dateSecondChoice).utc().clone().startOf('week').unix(),
                    dateStart: moment.unix(date.dateFirstChoice).utc().clone().startOf('week').unix()
                }
            });
        }
    }

}`;

const singleDateCalendarSample = `import React from 'react';

import DatePicker from '../app/Modules/DatePicker.react';

export default class SingleDateCalendarSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { calendarSingleDate: null };
    }

    render() {
        return (
            <DatePicker
                date={this.state.calendarSingleDate}
                onChange={this._onChange.bind(this, 'calendarSingleDate')}
                uxMode="calendar"
            />
        );
    }

    _onChange(field, date) {
        if (field === 'calendarSingleDate') {
            this.setState({ calendarSingleDate: date });
        }
    }

}`;

const dateRangeCalendarSample = `import React from 'react';

import DatePicker from '../app/Modules/DatePicker.react';

export default class DateRangeCalendarSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarDateRange: {
                dateEnd: null,
                dateStart: null
            }
        };
    }

    render() {
        return (
            <DatePicker
                buttonClear={true}
                dateEnd={this.state.calendarDateRange.dateEnd}
                dateStart={this.state.calendarDateRange.dateStart}
                onApplyClick={this._onApplyClick.bind(this)}
                onChange={this._onChange.bind(this, 'calendarDateRange')}
                type="dateRange"
                uxMode="calendar"
            />
        );
    }

    _onChange(field, date) {
        if (field === 'calendarDateRange') {
            this.setState({
                calendarDateRange: {
                    dateEnd: date.dateEnd,
                    dateStart: date.dateStart
                }
            });
        }
    }

}`;

const servicePeriodCalendarSample = `import moment from 'moment-timezone';
import React from 'react';

import DatePicker from '../app/Modules/DatePicker.react';

export default class ServicePeriodCalendarSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarServicePeriod: {
                dateEnd: null,
                dateStart: null
            }
        };
    }

    render() {
        return (
            <DatePicker
                dateEnd={this.state.calendarServicePeriod.dateEnd}
                dateStart={this.state.calendarServicePeriod.dateStart}
                onChange={this._onChange.bind(this, 'calendarServicePeriod')}
                type="servicePeriod"
                uxMode="calendar"
            />
        );
    }

    _onChange(field, date) {
        if (field === 'calendarServicePeriod') {
            const dateMoment = moment.unix(date).utc();
            // 7 Day Period
            const dateStart = dateMoment.clone().startOf('week');
            const dateEnd = dateMoment.clone().endOf('week');

            this.setState({
                calendarServicePeriod: {
                    dateEnd: dateEnd.unix(),
                    dateStart: dateStart.unix()
                }
            });
        }
    }

}`;

const servicePeriodRangeCalendarSample = `import moment from 'moment-timezone';
import React from 'react';

import DatePicker from '../app/Modules/DatePicker.react';

export default class ServicePeriodRangeCalendarSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarServicePeriodRange: {
                dateEnd: null,
                dateSecondaryEnd: null,
                dateSecondaryStart: null,
                dateStart: null
            }
        };
    }

    render() {
        return (
            <DatePicker
                buttonClear={true}
                dateEnd={this.state.calendarServicePeriodRange.dateEnd}
                dateSecondaryEnd={this.state.calendarServicePeriodRange.dateSecondaryEnd}
                dateSecondaryStart={this.state.calendarServicePeriodRange.dateSecondaryStart}
                dateStart={this.state.calendarServicePeriodRange.dateStart}
                onApplyClick={this._onApplyClick.bind(this)}
                onChange={this._onChange.bind(this, 'calendarServicePeriodRange')}
                type="servicePeriodRange"
                uxMode="calendar"
            />
        );
    }

    _onChange(field, date) {
        if (field === 'calendarServicePeriodRange') {
            this.setState({
                calendarServicePeriodRange: {
                    dateEnd: !_.isNull(date.dateFirstChoice) ? moment.unix(date.dateFirstChoice).utc().clone().endOf('week').unix() : null,
                    dateSecondaryEnd: !_.isNull(date.dateSecondChoice) ? moment.unix(date.dateSecondChoice).utc().clone().endOf('week').unix() : null,
                    dateSecondaryStart: !_.isNull(date.dateSecondChoice) ? moment.unix(date.dateSecondChoice).utc().clone().startOf('week').unix() : null,
                    dateStart: !_.isNull(date.dateFirstChoice) ? moment.unix(date.dateFirstChoice).utc().clone().startOf('week').unix() : null
                }
            });
        }
    }

}`;

const eventsCalendarSample = `import moment from 'moment-timezone';
import React from 'react';

import DatePicker from '../app/Modules/DatePicker.react';

export default class EventsCalendarSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { calendarSingleDate: null };
    }

    render() {
        return (
            <DatePicker
                date={this.state.calendarSingleDate}
                events={[
                    moment('02/01/2017', 'MM/DD/YYYY').unix(),
                    moment('02/05/2017', 'MM/DD/YYYY').unix(),
                    moment('02/15/2017', 'MM/DD/YYYY').unix(),
                    moment('02/25/2017', 'MM/DD/YYYY').unix()
                ]}
                onChange={this._onChange.bind(this, 'calendarSingleDate')}
                uxMode="calendar"
            />
        );
    }

    _onChange(field, date) {
        if (field === 'calendarSingleDate') {
            this.setState({ calendarSingleDate: date });
        }
    }

}`;

export default class ModulesDatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarSingleDate: null,
            calendarDateRange: {
                dateEnd: null,
                dateStart: null
            },
            calendarServicePeriod: {
                dateEnd: null,
                dateStart: null
            },
            calendarServicePeriodRange: {
                dateEnd: null,
                dateSecondaryEnd: null,
                dateSecondaryStart: null,
                dateStart: null
            },
            inputDateRange: {
                dateEnd: null,
                dateStart: null
            },
            inputServicePeriod: {
                dateEnd: null,
                dateStart: null
            },
            inputServicePeriodRange: {
                dateEnd: null,
                dateSecondaryEnd: null,
                dateSecondaryStart: null,
                dateStart: null
            },
            inputSingleDate: null
        };
    }

    render() {
        const props = [
            {
                name: 'buttonClear',
                type: 'bool',
                default: '',
                description: 'Shows a clear button.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'date',
                type: 'number',
                default: '',
                description: 'Single date timestamp.',
                allowedTypes: ''
            }, {
                name: 'dateEnd',
                type: 'number',
                default: '',
                description: 'Date timestamp for date range, service period, and service period range.',
                allowedTypes: ''
            }, {
                name: 'dateFormat',
                type: 'number',
                default: '',
                description: 'Custom date format.',
                allowedTypes: ''
            }, {
                name: 'dateSecondaryEnd',
                type: 'number',
                default: '',
                description: 'Date timestamp for service period range.',
                allowedTypes: ''
            }, {
                name: 'dateSecondaryStart',
                type: 'number',
                default: '',
                description: 'Date timestamp for service period range.',
                allowedTypes: ''
            }, {
                name: 'dateStart',
                type: 'number',
                default: '',
                description: 'Date timestamp for date range, service period, and service period range.',
                allowedTypes: ''
            }, {
                name: 'disabled',
                type: 'bool',
                default: '',
                description: 'Indicates that the date input is not available for interaction.',
                allowedTypes: ''
            }, {
                name: 'error',
                type: 'bool || string',
                default: '',
                description: 'Indicates that the date input has an error.',
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
                name: 'onApplyClick',
                type: 'func',
                default: '',
                description: 'Can handle an event from parent',
                allowedTypes: ''
            }, {
                name: 'onBlur',
                type: 'func',
                default: '',
                description: 'Can handle an onBlur event from parent.',
                allowedTypes: ''
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent.',
                allowedTypes: ''
            }, {
                name: 'onFocus',
                type: 'func',
                default: '',
                description: 'Can handle an onFocus event from parent.',
                allowedTypes: ''
            }, {
                name: 'required',
                type: 'bool',
                default: '',
                description: 'Specifies that the user must fill in a value before submitting a form.',
                allowedTypes: ''
            }, {
                name: 'tabIndex',
                type: 'number',
                default: '',
                description: 'An Input can receive focus.',
                allowedTypes: ''
            }, {
                name: 'type',
                type: 'enum',
                default: 'singleDate',
                description: 'The type of the date picker',
                allowedTypes: 'dateRange, servicePeriod, servicePeriodRange, servicePeriodRangeEnd, servicePeriodRangeStart, singleDate'
            }, {
                name: 'uxMode',
                type: 'enum',
                default: '',
                description: 'Tells the component how it is going to be used',
                allowedTypes: 'calendar, input'
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Date Picker" />

                <Header size="large" style={{ marginTop: '55px' }}>
                    This component has been deprecated.<br />
                Please use <Link to={{ pathname: '/modules/date-picker-input' }}>DatePickerInput</Link> or <Link to={{ pathname: '/modules/date-picker-calendar' }}>DatePickerCalendar</Link>
                </Header>

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Single Date Input */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Single Date Input
                </Header>

                <DatePicker
                    date={this.state.inputSingleDate}
                    onChange={this._onChange.bind(this, 'inputSingleDate')}
                    uxMode="input"
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {singleDateInputSample}
                </Highlighter>

                {/* Date Range Input */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Date Range Input
                </Header>

                <DatePicker
                    dateEnd={this.state.inputDateRange.dateEnd}
                    dateStart={this.state.inputDateRange.dateStart}
                    onChange={this._onChange.bind(this, 'inputDateRange')}
                    type="dateRange"
                    uxMode="input"
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {dateRangeInputSample}
                </Highlighter>

                {/* Service Period Input */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Service Period Input
                </Header>

                <DatePicker
                    dateEnd={this.state.inputServicePeriod.dateEnd}
                    dateStart={this.state.inputServicePeriod.dateStart}
                    onChange={this._onChange.bind(this, 'inputServicePeriod')}
                    type="servicePeriod"
                    uxMode="input"
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {servicePeriodInputSample}
                </Highlighter>

                {/* Service Period Range Input */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Service Period Range Input
                </Header>

                <DatePicker
                    dateEnd={this.state.inputServicePeriodRange.dateEnd}
                    dateSecondaryEnd={this.state.inputServicePeriodRange.dateSecondaryEnd}
                    dateSecondaryStart={this.state.inputServicePeriodRange.dateSecondaryStart}
                    dateStart={this.state.inputServicePeriodRange.dateStart}
                    onChange={this._onChange.bind(this, 'inputServicePeriodRange')}
                    type="servicePeriodRangeStart"
                    uxMode="input"
                /><br /><br />

                <DatePicker
                    dateEnd={this.state.inputServicePeriodRange.dateEnd}
                    dateSecondaryEnd={this.state.inputServicePeriodRange.dateSecondaryEnd}
                    dateSecondaryStart={this.state.inputServicePeriodRange.dateSecondaryStart}
                    dateStart={this.state.inputServicePeriodRange.dateStart}
                    onChange={this._onChange.bind(this, 'inputServicePeriodRange')}
                    type="servicePeriodRangeEnd"
                    uxMode="input"
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {servicePeriodRangeInputSample}
                </Highlighter>

                {/* Single Date Calendar */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Single Date Calendar
                </Header>

                <Card style={{ width: '320px' }}>
                    <DatePicker
                        date={this.state.calendarSingleDate}
                        onChange={this._onChange.bind(this, 'calendarSingleDate')}
                        uxMode="calendar"
                    />
                </Card>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {singleDateCalendarSample}
                </Highlighter>

                {/* Date Range Calendar */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Date Range Calendar
                </Header>

                <Card style={{ width: '320px' }}>
                    <DatePicker
                        buttonClear={true}
                        dateEnd={this.state.calendarDateRange.dateEnd}
                        dateStart={this.state.calendarDateRange.dateStart}
                        onApplyClick={this._onApplyClick.bind(this)}
                        onChange={this._onChange.bind(this, 'calendarDateRange')}
                        type="dateRange"
                        uxMode="calendar"
                    />
                </Card>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {dateRangeCalendarSample}
                </Highlighter>

                {/* Service Period Calendar */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Service Period Calendar
                </Header>

                <Card style={{ width: '320px' }}>
                    <DatePicker
                        dateEnd={this.state.calendarServicePeriod.dateEnd}
                        dateStart={this.state.calendarServicePeriod.dateStart}
                        onChange={this._onChange.bind(this, 'calendarServicePeriod')}
                        type="servicePeriod"
                        uxMode="calendar"
                    />
                </Card>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {servicePeriodCalendarSample}
                </Highlighter>

                {/* Service Period Range Calendar */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Service Period Range Calendar
                </Header>

                <Card style={{ width: '320px' }}>
                    <DatePicker
                        buttonClear={true}
                        dateEnd={this.state.calendarServicePeriodRange.dateEnd}
                        dateSecondaryEnd={this.state.calendarServicePeriodRange.dateSecondaryEnd}
                        dateSecondaryStart={this.state.calendarServicePeriodRange.dateSecondaryStart}
                        dateStart={this.state.calendarServicePeriodRange.dateStart}
                        onApplyClick={this._onApplyClick.bind(this)}
                        onChange={this._onChange.bind(this, 'calendarServicePeriodRange')}
                        type="servicePeriodRange"
                        uxMode="calendar"
                    />
                </Card>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {servicePeriodRangeCalendarSample}
                </Highlighter>

                {/* Events */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Events
                </Header>

                <Card style={{ width: '320px' }}>
                    <DatePicker
                        date={this.state.calendarSingleDate}
                        events={[
                            moment('02/01/2017', 'MM/DD/YYYY').unix(),
                            moment('02/05/2017', 'MM/DD/YYYY').unix(),
                            moment('02/15/2017', 'MM/DD/YYYY').unix(),
                            moment('02/25/2017', 'MM/DD/YYYY').unix()
                        ]}
                        onChange={this._onChange.bind(this, 'calendarSingleDate')}
                        uxMode="calendar"
                    />
                </Card>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {eventsCalendarSample}
                </Highlighter>
            </Main>
        );
    }

    _onApplyClick() {
        window.alert('Applied!');
    }

    _onChange(field, date) {
        if (field === 'calendarSingleDate') {
            this.setState({ calendarSingleDate: date });
        } else if (field === 'calendarDateRange') {
            this.setState({
                calendarDateRange: {
                    dateEnd: date.dateEnd,
                    dateStart: date.dateStart
                }
            });
        } else if (field === 'calendarServicePeriod') {
            const dateMoment = moment.unix(date).utc();
            // 7 Day Period
            const dateStart = dateMoment.clone().startOf('week');
            const dateEnd = dateMoment.clone().endOf('week');

            this.setState({
                calendarServicePeriod: {
                    dateEnd: dateEnd.unix(),
                    dateStart: dateStart.unix()
                }
            });
        } else if (field === 'calendarServicePeriodRange') {
            this.setState({
                calendarServicePeriodRange: {
                    dateEnd: !_.isNull(date.dateFirstChoice) ? moment.unix(date.dateFirstChoice).utc().clone().endOf('week').unix() : null,
                    dateSecondaryEnd: !_.isNull(date.dateSecondChoice) ? moment.unix(date.dateSecondChoice).utc().clone().endOf('week').unix() : null,
                    dateSecondaryStart: !_.isNull(date.dateSecondChoice) ? moment.unix(date.dateSecondChoice).utc().clone().startOf('week').unix() : null,
                    dateStart: !_.isNull(date.dateFirstChoice) ? moment.unix(date.dateFirstChoice).utc().clone().startOf('week').unix() : null
                }
            });
        } else if (field == 'inputDateRange') {
            this.setState({
                inputDateRange: {
                    dateEnd: date.dateEnd,
                    dateStart: date.dateStart
                }
            });
        } else if (field == 'inputServicePeriod') {
            const dateMoment = moment.unix(date).utc();
            // 7 Day Period
            const dateStart = dateMoment.clone().startOf('week');
            const dateEnd = dateMoment.clone().endOf('week');

            this.setState({
                inputServicePeriod: {
                    dateEnd: dateEnd.unix(),
                    dateStart: dateStart.unix()
                }
            });
        } else if (field == 'inputServicePeriodRange') {
            this.setState({
                inputServicePeriodRange: {
                    dateEnd: moment.unix(date.dateFirstChoice).utc().clone().endOf('week').unix(),
                    dateSecondaryEnd: moment.unix(date.dateSecondChoice).utc().clone().endOf('week').unix(),
                    dateSecondaryStart: moment.unix(date.dateSecondChoice).utc().clone().startOf('week').unix(),
                    dateStart: moment.unix(date.dateFirstChoice).utc().clone().startOf('week').unix()
                }
            });
        } else if (field === 'inputSingleDate') {
            this.setState({ inputSingleDate: date });
        }
    }

}
