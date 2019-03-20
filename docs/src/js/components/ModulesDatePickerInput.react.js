'use strict';

import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, DatePickerCalendar, DatePickerInput, Header, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
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

export default class ModulesDatePickerInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            caledarDate: {},
            inputDate: {},
        };

        this._onInputChange = this._onInputChange.bind(this);
        this._onDateChange = this._onDateChange.bind(this);
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

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Single Date Input */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Single Date Input
                </Header>

                <DatePickerInput
                /><br /><br />

                <DatePickerCalendar
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {singleDateInputSample}
                </Highlighter>
            </Main>
        );
    }

    _onInputChange(field, date) {
        this.setState({ inputDate: date });
    }

    _onDateChange(field, date) {
        this.setState({ calendarDate: date });
    }

}
