'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Dropdown, Grid, Header, PhoneInput, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const basicSample = `import React from 'react';
import { PhoneInput } from 'react-cm-ui';

export default class BasicSample extends React.Component {
    render() {
        return (
            <PhoneInput />
        );
    }
}`;

const disableSample = `import React from 'react';
import { PhoneInput } from 'react-cm-ui';

export default class DisableSample extends React.Component {
    render() {
        return (
            <PhoneInput disable={true} />
        );
    }
}`;

const iso2Sample = `import React from 'react';
import { PhoneInput } from 'react-cm-ui';

export default class ISO2Sample extends React.Component {
    render() {
        return (
            <PhoneInput iso2="cn" />
        );
    }
}`;

const labelSample = `import React from 'react';
import { PhoneInput } from 'react-cm-ui';

export default class LabelSample extends React.Component {
    render() {
        return (
            <PhoneInput label="Phone Number" />
        );
    }
}`;

const onChangeSample = `import React from 'react';
import { PhoneInput } from 'react-cm-ui';

export default class OnChangeSample extends React.Component {
    constructor() {
        super();

        this.state = { onChangeValue: '' };

        this._onChangeSample = this._onChangeSample.bind(this);
    }

    render() {
        return (
            <PhoneInput onChange={this._onChangeSample} value={this.state.onChangeValue} />
        );
    }

    _onChangeSample(value) {
        this.setState({ onChangeValue: value });
    }
}`;

const valueSample = `import React from 'react';
import { PhoneInput } from 'react-cm-ui';

export default class ValueSample extends React.Component {
    render() {
        return (
            <div>
                <PhoneInput value={9497777777} /><br /><br />

                <PhoneInput value={'9497777777'} /><br /><br />

                <PhoneInput value={'+1 (949) 777-7777'} />
            </div>
        );
    }
}`;

export default class ModulesPhoneInput extends React.Component {
    constructor() {
        super();

        this.state = { onChangeValue: '' };

        this._onChangeSample = this._onChangeSample.bind(this);
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
                name: 'disable',
                type: 'bool',
                default: 'false',
                description: 'Indicates that the Phone Input is not available for interaction.',
                allowedTypes: ''
            }, {
                name: 'error',
                type: 'bool || string',
                default: '',
                description: 'Indicates that the Phone Input has an error.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give an Phone Input an id.',
                allowedTypes: ''
            }, {
                name: 'iso2',
                type: 'string',
                default: '',
                description: 'Two letter country code.',
                allowedTypes: ''
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional Label to display on top of the Phone Input.',
                allowedTypes: ''
            }, {
                name: 'labelStyle',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the label container.',
                allowedTypes: ''
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent.',
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
                description: 'Supply any inline styles to the Phone Input\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'tabIndex',
                type: 'number',
                default: '',
                description: 'An Phone Input can receive focus.',
                allowedTypes: ''
            }, {
                name: 'value',
                type: 'string',
                default: '',
                description: 'The initial value of the control. This attribute is optional.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Phone Input" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Phone Input */}
                <Header anchor="phone-input" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Phone Input
                    <Header.Subheader>
                        A basic phone input.
                    </Header.Subheader>
                </Header>

                <PhoneInput />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {basicSample}
                </Highlighter>

                {/* Disable */}
                <Header anchor="disable" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Disable
                    <Header.Subheader>
                        Disable the fields.
                    </Header.Subheader>
                </Header>

                <PhoneInput disable={true} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disableSample}
                </Highlighter>

                {/* ISO2 */}
                <Header anchor="iso2" size="large" style={{ marginTop: '55px' }} sub={true}>
                    ISO2
                    <Header.Subheader>
                        Change the default ISO2.
                    </Header.Subheader>
                </Header>

                <PhoneInput iso2="cn" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {iso2Sample}
                </Highlighter>

                {/* Label */}
                <Header anchor="label" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Label
                    <Header.Subheader>
                        Label the Phone Input field.
                    </Header.Subheader>
                </Header>

                <PhoneInput label="Phone Number" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {labelSample}
                </Highlighter>

                {/* onChange Event Handler */}
                <Header anchor="onchange" size="large" style={{ marginTop: '55px' }} sub={true}>
                    onChange Event Handler
                    <Header.Subheader>
                        Can handle an <code>onChange</code> event from parent. The <code>value</code> prop is required along with this handler.
                    </Header.Subheader>
                </Header>

                <PhoneInput onChange={this._onChangeSample} value={this.state.onChangeValue} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onChangeSample}
                </Highlighter>

                {/* Value */}
                <Header anchor="value" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Value
                    <Header.Subheader>
                        Passing a phone number value is cake!
                    </Header.Subheader>
                </Header>

                <PhoneInput value={9497777777} /><br /><br />

                <PhoneInput value={'9497777777'} /><br /><br />

                <PhoneInput value={'+1 (949) 777-7777'} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {valueSample}
                </Highlighter>
            </Main>
        );
    }

    _onChangeSample(value, iso2, format, dialCode) {
        console.log('_onChangeSample');
        console.log('value', value);
        console.log('iso2', iso2);
        console.log('format', format);
        console.log('dialCode', dialCode);

        this.setState({ onChangeValue: value });
    }

}
