'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Card, Header, TitleBar, TimePicker } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const timePickerSample = `import React from 'react';

import Drawer from 'components/UI/Modules/Drawer.react';

export default class TimePickerSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: null };
    }

    render() {
        return (
            <TimePicker
                onChange={this._onTimePickerChange.bind(this)}
                value={this.state.value}
            />
        );
    }

    _onTimePickerChange(value) {
        this.setState({ value: value });
    }

}`;

const disableSample = `import React from 'react';

import Drawer from 'components/UI/Modules/Drawer.react';

export default class DisableSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: null };
    }

    render() {
        return (
            <TimePicker
                disable={true}
                onChange={this._onTimePickerChange.bind(this)}
                value={this.state.value}
            />
        );
    }

    _onTimePickerChange(value) {
        this.setState({ value: value });
    }

}`;

const nestSample = `import React from 'react';

import Drawer from 'components/UI/Modules/Drawer.react';

export default class NestSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { nestValue: null };
    }

    render() {
        return (
            <TimePicker
                nest={true}
                onChange={this._onNestChange.bind(this)}
                value={this.state.nestValue}
            />
        );
    }

    _onNestChange(value) {
        this.setState({ nestValue: value });
    }

}`;

const rangeSample = `import React from 'react';

import Drawer from 'components/UI/Modules/Drawer.react';

export default class RangeSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { rangeValue: null };
    }

    render() {
        return (
            <TimePicker
                onChange={this._onRangeChange.bind(this)}
                range={true}
                value={this.state.rangeValue}
            />
        );
    }

    _onRangeChange(value) {
        this.setState({ rangeValue: value });
    }

}`;

export default class ModulesTimePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nestValue: null,
            rangeValue: null,
            value: null
        };
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
                name: 'disabled',
                type: 'bool',
                default: '',
                description: 'Indicates that the Time Picker is not available for interaction.',
                allowedTypes: ''
            }, {
                name: 'error',
                type: 'bool || string',
                default: '',
                description: 'Indicates that the Time Picker has an error.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give the Time Picker input an id.',
                allowedTypes: ''
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional Label to display on top of the Time Picker.',
                allowedTypes: ''
            }, {
                name: 'nest',
                type: 'bool',
                default: '',
                description: 'Time Picker may be placed in a nested background color.',
                allowedTypes: ''
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent.',
                allowedTypes: ''
            }, {
                name: 'value',
                type: 'object',
                default: '',
                description: 'The initial value of the control.',
                allowedTypes: ''
            }, {
                name: 'required',
                type: 'bool',
                default: '',
                description: 'Specifies that the user must fill in a value before submitting a form.',
                allowedTypes: ''
            }, {
                name: 'zoneOptions',
                type: 'array',
                default: '',
                description: 'Prodive a custom list of timezones to the Time Picker.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Time Picker" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Time Picker */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Time Picker
                    <Header.Subheader>
                        A basic Time Picker.
                    </Header.Subheader>
                </Header>

                <TimePicker
                    onChange={this._onTimePickerChange.bind(this)}
                    value={this.state.value}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {timePickerSample}
                </Highlighter>

                {/* Disable */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Disable
                    <Header.Subheader>
                        Indicates that the Time Picker is not available for interaction.
                    </Header.Subheader>
                </Header>

                <TimePicker
                    disable={true}
                    onChange={this._onTimePickerChange.bind(this)}
                    value={this.state.value}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disableSample}
                </Highlighter>

                {/* Nest */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Nest
                    <Header.Subheader>
                        A Time Picker can give the appearance of being nested. The parent's background color needs to be set to <code>$bkgd-nest</code>.
                    </Header.Subheader>
                </Header>

                <Block
                    nest={true}
                    style={{ height: '175px', padding: '22px' }}
                >
                    <TimePicker
                        nest={true}
                        onChange={this._onNestChange.bind(this)}
                        value={this.state.nestValue}
                    />
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {nestSample}
                </Highlighter>

                {/* Range */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Range
                    <Header.Subheader>
                        A Time Picker can give the appearance of being nested. The parent's background color needs to be set to <code>$bkgd-nest</code>.
                    </Header.Subheader>
                </Header>

                <Block
                    nest={true}
                    style={{ height: '175px', padding: '22px' }}
                >
                    <TimePicker
                        onChange={this._onRangeChange.bind(this)}
                        range={true}
                        value={this.state.rangeValue}
                    />
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {rangeSample}
                </Highlighter>
            </Main>
        );
    }

    _onTimePickerChange(value) {
        this.setState({ value: value });
    }

    _onNestChange(value) {
        this.setState({ nestValue: value });
    }

    _onRangeChange(value) {
        this.setState({ rangeValue: value });
    }

}
