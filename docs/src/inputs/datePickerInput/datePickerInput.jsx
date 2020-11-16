import {
    Card,
    DatePickerInput,
    Grid,
    Typography,
} from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

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

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <DatePickerInput
                date={dateOnChange}
                disable
                onChange={this.onChange}
            />
        );
    }

    onChange({ date, dateFrom, dateTo }) {
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
                filterDates={this.isWeekend}
            />
        );
    }

    isWeekend(date) {
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

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <DatePickerInput
                date={dateOnChange}
                onChange={this.onChange}
            />
        );
    }

    onChange({ date, dateFrom, dateTo }) {
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

        this.onRangeChange = this.onRangeChange.bind(this);
    }

    render() {
        return (
            <div>
                <DatePickerInput
                    dateFrom={dateRangeFrom}
                    dateTo={dateRangeTo}
                    onChange={this.onRangeChange}
                    rangeFrom
                    label="From"
                />
                <DatePickerInput
                    dateFrom={dateRangeFrom}
                    dateTo={dateRangeTo}
                    onChange={this.onRangeChange}
                    rangeTo
                    label="To"
                />
            </div>
        );
    }

    onRangeChange({ date, dateFrom, dateTo }) {
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

        this.isWeekend = this.isWeekend.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);
    }

    onChange({ date }) {
        this.setState({
            dateOnChange: date,
        });
    }

    onRangeChange({ dateFrom, dateTo }) {
        this.setState({
            dateRangeFrom: dateFrom,
            dateRangeTo: dateTo,
        });
    }

    isWeekend(date) {
        const day = date.day();

        return day === 0 || day === 6;
    }

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'date',
                type: 'object',
                default: '',
                description: 'Single date timestamp.',
                allowedTypes: '',
            }, {
                name: 'dateFrom',
                type: 'object',
                default: '',
                description: 'Moment object for date range',
                allowedTypes: '',
            }, {
                name: 'dateTo',
                type: 'object',
                default: '',
                description: 'Moment object for date range',
                allowedTypes: '',
            }, {
                name: 'disable',
                type: 'bool',
                default: '',
                description: 'Indicates that the date input is not available for interaction.',
                allowedTypes: '',
            }, {
                name: 'events',
                type: 'array',
                default: '',
                description: 'Accepts an array of moment objects.',
                allowedTypes: '',
            }, {
                name: 'excludeDates',
                type: 'array',
                default: '',
                description: 'Sets a range of dates that are not selectable.',
                allowedTypes: '',
            }, {
                name: 'filterDates',
                type: 'func',
                default: '',
                description: 'Filters out dates that are to not be selectable.',
                allowedTypes: '',
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give an input an id.',
                allowedTypes: '',
            }, {
                name: 'includeDates',
                type: 'array',
                default: '',
                description: 'Sets a range of dates that are selectable.',
                allowedTypes: '',
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional Label to display with the Input.',
                allowedTypes: '',
            }, {
                name: 'locale',
                type: 'string',
                default: '',
                description: 'Custom locale.',
                allowedTypes: '',
            }, {
                name: 'maxDate',
                type: 'object',
                default: '',
                description: 'Maxium date\'s in range that are selectable.',
                allowedTypes: '',
            }, {
                name: 'minDate',
                type: 'object',
                default: '',
                description: 'Minumum date\'s in range that are selectable.',
                allowedTypes: '',
            }, {
                name: 'onBlur',
                type: 'func',
                default: '',
                description: 'Can handle an onBlur event from parent.',
                allowedTypes: '',
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent.',
                allowedTypes: '',
            }, {
                name: 'onFocus',
                type: 'func',
                default: '',
                description: 'Can handle an onFocus event from parent.',
                allowedTypes: '',
            }, {
                name: 'rangeFrom',
                type: 'bool',
                default: '',
                description: 'Specifies whether the input is the from in the date range or not.',
                allowedTypes: '',
            }, {
                name: 'rangeTo',
                type: 'bool',
                default: '',
                description: 'Specifies whether the input is the to in the date range or not.',
                allowedTypes: '',
            }, {
                name: 'required',
                type: 'bool',
                default: '',
                description: 'Specifies that the user must fill in a value before submitting a form.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the DatePickerInput\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'tabIndex',
                type: 'number',
                default: '',
                description: 'An Input can receive focus.',
                allowedTypes: '',
            },
        ];
        const {
            dateOnChange,
            dateRangeFrom,
            dateRangeTo,
        } = this.state;

        return (
            <Main page="headers">
                <Main.Content>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Date Picker Input */}
                    <Typography anchor="date-picker-input" size="large" style={{ marginTop: '55px' }}>
                        Date Picker Input
                    </Typography>

                    <DatePickerInput />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {datePickerSample}
                    </Highlighter>

                    {/* Disable */}
                    <Typography anchor="disable" size="large" style={{ marginTop: '55px' }}>
                        Disable
                    </Typography>

                    <DatePickerInput
                        date={dateOnChange}
                        disable
                        onChange={this.onChange}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {disabledSample}
                    </Highlighter>

                    {/* Events */}
                    <Typography anchor="events" size="large" style={{ marginTop: '55px' }}>
                        Events
                    </Typography>

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
                    <Typography anchor="exclude-dates" size="large" style={{ marginTop: '55px' }}>
                        Exclude Dates
                    </Typography>

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
                    <Typography anchor="filter-dates" size="large" style={{ marginTop: '55px' }}>
                        Filter Dates
                    </Typography>

                    <DatePickerInput
                        filterDates={this.isWeekend}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {filterDatesSample}
                    </Highlighter>

                    {/* Include Dates */}
                    <Typography anchor="include-dates" size="large" style={{ marginTop: '55px' }}>
                        Include Dates
                    </Typography>

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
                    <Typography anchor="locale" size="large" style={{ marginTop: '55px' }}>
                        Label
                    </Typography>

                    <DatePickerInput label="The Coolest Label Ever"/>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {labelSample}
                    </Highlighter>

                    {/* Locale */}
                    <Typography anchor="locale" size="large" style={{ marginTop: '55px' }}>
                        Locale
                    </Typography>

                    <DatePickerInput
                        locale={moment().locale()}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {localeSample}
                    </Highlighter>

                    {/* Max Date */}
                    <Typography anchor="max-dates" size="large" style={{ marginTop: '55px' }}>
                        Max Date
                    </Typography>

                    <DatePickerInput
                        maxDate={moment()}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {maxDateSample}
                    </Highlighter>

                    {/* Min Date */}
                    <Typography anchor="min-dates" size="large" style={{ marginTop: '55px' }}>
                        Min Date
                    </Typography>

                    <DatePickerInput
                        minDate={moment().subtract(10, 'years')}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {minDateSample}
                    </Highlighter>

                    {/* onChange Event Handler */}
                    <Typography anchor="on-change" size="large" style={{ marginTop: '55px' }}>
                        onChange Event Handler
                    </Typography>

                    <DatePickerInput
                        date={dateOnChange}
                        onChange={this.onChange}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onChangeSample}
                    </Highlighter>

                    {/* onMonthChange */}
                    <Typography anchor="on-month-change" size="large" style={{ marginTop: '55px' }}>
                        onMonthChange Event Handler
                    </Typography>

                    <DatePickerInput
                        onMonthChange={() => window.alert('The month was changed!') }
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onMonthChangeSample}
                    </Highlighter>

                    {/* Range */}
                    <Typography anchor="range" size="large" style={{ marginTop: '55px' }}>
                        Range
                    </Typography>

                    <Grid spacing={2}>
                        <Grid.Column
                            md="auto"
                            sm={12}
                        >
                            <DatePickerInput
                                dateFrom={dateRangeFrom}
                                dateTo={dateRangeTo}
                                onChange={this.onRangeChange}
                                rangeFrom
                                label="From"
                            />
                        </Grid.Column>

                        <Grid.Column
                            md="auto"
                            sm={12}
                        >
                            <DatePickerInput
                                dateFrom={dateRangeFrom}
                                dateTo={dateRangeTo}
                                onChange={this.onRangeChange}
                                rangeTo
                                label="To"
                            />
                        </Grid.Column>
                    </Grid>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {rangeSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}
