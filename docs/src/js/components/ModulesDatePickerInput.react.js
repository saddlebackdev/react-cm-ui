'use strict';

import { Card, DatePickerInput, Header, TitleBar } from 'react-cm-ui';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import moment from 'moment-timezone';
import React from 'react';
import TableProps from 'components/UI/TableProps.react';

const datePickerSample = `import { DatePickerInput } from 'react-cm-ui';
import React from 'react';

export default class DatePickerSample extends React.Component {
    render() {
        return (
            <DatePickerInput />
        );
    }
}`;

const disabledSample = `import { DatePickerInput } from 'react-cm-ui';
import React from 'react';

export default class DisabledSample extends React.Component {
    constructor() {
        super();

        this.state = {
            dateOnChange: moment(),
        };

        this._onChange = this._onChange.bind(this);
    }

    render() {
        return (
            <DatePickerInput
                date={dateOnChange}
                disabled
                onChange={this._onChange}
            />
        );
    }

    _onChange({ date, dateFrom, dateTo }) {
        this.setState({
            dateOnChange: date,
        });
    }
}`;

const eventsSample = `import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class EventsSample extends React.Component {
    render() {
        return (
            <DatePickerInput
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

const excludeDatesSample = `import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class ExcludeDatesSample extends React.Component {
    render() {
        return (
            <DatePickerInput
                excludeDates={[
                    moment().subtract(1, 'days'),
                    moment().subtract(2, 'days'),
                    moment().subtract(3, 'days'),
                    moment().subtract(4, 'days'),
                ]}
            />
        );
    }
}`;

const filterDatesSample = `import { DatePickerInput } from 'react-cm-ui';
import React from 'react';

export default class FilterDatesSample extends React.Component {
    render() {
        return (
            <DatePickerInput
                filterDates={this._isWeekend}
            />
        );
    }

    _isWeekend(date) {
        const day = date.day();

        return day === 0 || day === 6;
    }
}`;

const includeDatesSample = `import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class IncludeDatesSample extends React.Component {
    render() {
        return (
            <DatePickerInput
                includeDates={[
                    moment(),
                    moment().subtract(1, 'days'),
                ]}
            />
        );
    }
}`;

const labelSample = `import { DatePickerInput } from 'react-cm-ui';
import React from 'react';

export default class LabelSample extends React.Component {
    render() {
        return (
            <DatePickerInput label="The Coolest Label Ever"/>
        );
    }
}`;

const localeSample = `import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class LocaleSample extends React.Component {
    render() {
        return (
            <DatePickerInput
                locale={moment().locale()}
            />
        );
    }
}`;

const maxDateSample = `import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class MaxDateSample extends React.Component {
    render() {
        return (
            <DatePickerInput
                maxDate={moment()}
            />
        );
    }
}`;

const minDateSample = `import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class MinDateSample extends React.Component {
    render() {
        return (
            <DatePickerInput
                minDate={moment().subtract(10, 'years')}
            />
        );
    }
}`;

const onChangeSample = `import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class OnChangeSample extends React.Component {
    constructor() {
        super();

        this.state = {
            dateOnChange: moment(),
        };

        this._onChange = this._onChange.bind(this);
    }

    render() {
        return (
            <DatePickerInput
                date={dateOnChange}
                onChange={this._onChange}
            />
        );
    }

    _onChange({ date, dateFrom, dateTo }) {
        this.setState({
            dateOnChange: date,
        });
    }
}`;

const onMonthChangeSample = `import { DatePickerInput } from 'react-cm-ui';
import React from 'react';

export default class OnMonthChangeSample extends React.Component {
    render() {
        return (
            <DatePickerInput
                onMonthChange={() => window.alert('The month was changed!') }
            />
        );
    }
}`;

const rangeSample = `import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

export default class RangeSample extends React.Component {
    constructor() {
        super();

        this.state = {
            dateRangeFrom: moment(),
            dateRangeTo: moment(),
        };

        this._onRangeChange = this._onRangeChange.bind(this);
    }

    render() {
        return (
            <div>
                <DatePickerInput
                    dateFrom={dateRangeFrom}
                    dateTo={dateRangeTo}
                    onChange={this._onRangeChange}
                    rangeFrom
                    label="From"
                />
                <DatePickerInput
                    dateFrom={dateRangeFrom}
                    dateTo={dateRangeTo}
                    onChange={this._onRangeChange}
                    rangeTo
                    label="To"
                />
            </div>
        );
    }

    _onRangeChange({ date, dateFrom, dateTo }) {
        this.setState({
            dateRangeFrom: dateFrom,
            dateRangeTo: dateTo,
        });
    }
}`;

export default class ModulesDatePickerInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            caledarDate: {},
            dateOnChange: moment(),
            dateRangeFrom: moment(),
            dateRangeTo: moment(),
            inputDate: {},
        };

        this._isWeekend = this._isWeekend.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onRangeChange = this._onRangeChange.bind(this);
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
                name: 'disabled',
                type: 'bool',
                default: '',
                description: 'Indicates that the date input is not available for interaction.',
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
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional Label to display with the Input.',
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
                name: 'rangeFrom',
                type: 'bool',
                default: '',
                description: 'Specifies whether the input is the from in the date range or not.',
                allowedTypes: ''
            }, {
                name: 'rangeTo',
                type: 'bool',
                default: '',
                description: 'Specifies whether the input is the to in the date range or not.',
                allowedTypes: ''
            }, {
                name: 'required',
                type: 'bool',
                default: '',
                description: 'Specifies that the user must fill in a value before submitting a form.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the DatePickerInput\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'tabIndex',
                type: 'number',
                default: '',
                description: 'An Input can receive focus.',
                allowedTypes: ''
            },
        ];
        const {
            dateOnChange,
            dateRangeFrom,
            dateRangeTo,
        } = this.state;

        return (
            <Main page="headers">
                <TitleBar title="Date Picker" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Date Picker Input */}
                <Header anchor="date-picker-input" size="large" style={{ marginTop: '55px' }}>
                    Date Picker Input
                </Header>

                <DatePickerInput />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {datePickerSample}
                </Highlighter>

                {/* Disabled */}
                <Header anchor="disabled" size="large" style={{ marginTop: '55px' }}>
                    Disabled
                </Header>

                <DatePickerInput
                    date={dateOnChange}
                    disabled
                    onChange={this._onChange}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disabledSample}
                </Highlighter>

                {/* Events */}
                <Header anchor="events" size="large" style={{ marginTop: '55px' }}>
                    Events
                </Header>

                <DatePickerInput
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

                {/* Exclude Dates */}
                <Header anchor="exclude-dates" size="large" style={{ marginTop: '55px' }}>
                    Exclude Dates
                </Header>

                <DatePickerInput
                    excludeDates={[
                        moment().subtract(1, 'days'),
                        moment().subtract(2, 'days'),
                        moment().subtract(3, 'days'),
                        moment().subtract(4, 'days'),
                    ]}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {excludeDatesSample}
                </Highlighter>

                {/* Filter Dates */}
                <Header anchor="filter-dates" size="large" style={{ marginTop: '55px' }}>
                    Filter Dates
                </Header>

                <DatePickerInput
                    filterDates={this._isWeekend}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {filterDatesSample}
                </Highlighter>

                {/* Include Dates */}
                <Header anchor="include-dates" size="large" style={{ marginTop: '55px' }}>
                    Include Dates
                </Header>

                <DatePickerInput
                    includeDates={[
                        moment(),
                        moment().subtract(1, 'days'),
                    ]}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {includeDatesSample}
                </Highlighter>

                {/* Label */}
                <Header anchor="locale" size="large" style={{ marginTop: '55px' }}>
                    Label
                </Header>

                <DatePickerInput label="The Coolest Label Ever"/>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {labelSample}
                </Highlighter>

                {/* Locale */}
                <Header anchor="locale" size="large" style={{ marginTop: '55px' }}>
                    Locale
                </Header>

                <DatePickerInput
                    locale={moment().locale()}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {localeSample}
                </Highlighter>

                {/* Max Date */}
                <Header anchor="max-dates" size="large" style={{ marginTop: '55px' }}>
                    Max Date
                </Header>

                <DatePickerInput
                    maxDate={moment()}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {maxDateSample}
                </Highlighter>

                {/* Min Date */}
                <Header anchor="min-dates" size="large" style={{ marginTop: '55px' }}>
                    Min Date
                </Header>

                <DatePickerInput
                    minDate={moment().subtract(10, 'years')}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {minDateSample}
                </Highlighter>

                {/* onChange Event Handler */}
                <Header anchor="on-change" size="large" style={{ marginTop: '55px' }}>
                    onChange Event Handler
                </Header>

                <DatePickerInput
                    date={dateOnChange}
                    onChange={this._onChange}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onChangeSample}
                </Highlighter>

                {/* onMonthChange */}
                <Header anchor="on-month-change" size="large" style={{ marginTop: '55px' }}>
                    onMonthChange Event Handler
                </Header>

                <DatePickerInput
                    onMonthChange={() => window.alert('The month was changed!') }
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onMonthChangeSample}
                </Highlighter>

                {/* Range */}
                <Header anchor="range" size="large" style={{ marginTop: '55px' }}>
                    Range
                </Header>

                <DatePickerInput
                    dateFrom={dateRangeFrom}
                    dateTo={dateRangeTo}
                    onChange={this._onRangeChange}
                    rangeFrom
                    label="From"
                />
                <DatePickerInput
                    dateFrom={dateRangeFrom}
                    dateTo={dateRangeTo}
                    onChange={this._onRangeChange}
                    rangeTo
                    label="To"
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {rangeSample}
                </Highlighter>
            </Main>
        );
    }

    _isWeekend(date) {
        const day = date.day();

        return day === 0 || day === 6;
    }

    _onChange({ date, dateFrom, dateTo }) {
        this.setState({
            dateOnChange: date,
        });
    }

    _onRangeChange({ date, dateFrom, dateTo }) {
        this.setState({
            dateRangeFrom: dateFrom,
            dateRangeTo: dateTo,
        });
    }
}
