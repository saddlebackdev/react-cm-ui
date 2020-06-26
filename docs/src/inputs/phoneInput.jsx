import {
    Card, Header, PhoneInput, TitleBar,
} from 'react-cm-ui';
import React from 'react';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

const basicSample = `import React from 'react';
import { PhoneInput } from 'react-cm-ui';

export default class BasicSample extends React.Component {
    constructor() {
        super();

        this.state = {
            number: '',
        };

        this._onBasicChange = this._onBasicChange.bind(this);
    }

    render() {
        const { number } = this.state;

        return (
            <PhoneInput
                onChange={this._onBasicChange}
                value={number}
            />
        );
    }

    _onBasicChange(number, formattedNumber, dialCode, countryCode, isValid) {
        this.setState({
            number,
        });
    }
}`;

export default class ModulesPhoneInput extends React.Component {
    constructor() {
        super();

        this.state = {
            number: '',
            formattedNumber: '',
            dialCode: null,
            countryCode: '',
            isValid: false,
        };

        this._onBasicChange = this._onBasicChange.bind(this);
    }

    render() {
        const {
            number,
            formattedNumber,
            dialCode,
            countryCode,
            isValid,
        } = this.state;
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes. This will be applied to the outter container not to react-phone-number-input.',
                allowedTypes: '',
            }, {
                name: 'country',
                type: 'string',
                default: 'US',
                description: 'Defaults to specified country..',
                allowedTypes: '',
            }, {
                name: 'countryOptions',
                type: 'string',
                default: '[ \'US\', \'|\' ]',
                description: 'Moves specified countries to the top of the options. \'|\' Seperates the top from the remaining with a divider.',
                allowedTypes: '',
            }, {
                name: 'disable',
                type: 'bool',
                default: 'false',
                description: 'Indicates that the Phone Input is not available for interaction.',
                allowedTypes: '',
            }, {
                name: 'error',
                type: 'bool || string',
                default: '',
                description: 'Indicates that the Phone Input has an error.',
                allowedTypes: '',
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'An Phone Input can take on the size of its container.',
                allowedTypes: '',
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give an Phone Input an id.',
                allowedTypes: '',
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional Label to display on top of the Phone Input.',
                allowedTypes: '',
            }, {
                name: 'labelStyle',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the label container.',
                allowedTypes: '',
            }, {
                name: '*onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent. Required.',
                allowedTypes: '',
            },{
                name: 'required',
                type: 'bool',
                default: '',
                description: 'Specifies that the user must fill in a value before submitting a form.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Phone Input\'s container. Mainly used for padding and margins. This will be applied to the outter container not to react-phone-number-input.',
                allowedTypes: '',
            }, {
                name: '*value',
                type: 'string',
                default: '',
                description: 'The initial value of the control. Required.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <TitleBar title="Phone Input" />

                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Phone Input */}
                    <Header size="large" style={{ margin: '55px 0 0' }} sub>
                        Phone Input
                        <Header.Subheader>
                            We use <a href="https://github.com/catamphetamine/react-phone-number-input" target="_blank">
                            react-phone-number-input</a> and wrap it in our own component.
                        </Header.Subheader>
                    </Header>

                    <div style={{ margin: '22px 0 22px' }}>
                        <Header size="small" style={{ margin: 0 }} weight="bold">Props Overwritten:</Header>

                        <div>
                            <code>className</code>, <code>countryOptions</code>, <code>countrySelectComponent</code>,
                            <code>onChange</code>, and <code>style</code>.
                        </div>
                    </div>

                    <div style={{ margin: '0 0 33px' }}>
                        <Header size="small" style={{ margin: 0 }} weight="bold">Fake Test Numbers:</Header>

                        <div className="color-static"><span className="font-weight-bold">Canada:</span> +16135550162</div>

                        <div className="color-static"><span className="font-weight-bold">Philippines:</span> +639176299773</div>

                        <div className="color-static"><span className="font-weight-bold">United State:</span> +12025550104</div>
                    </div>

                    <PhoneInput
                        onChange={this._onBasicChange}
                        value={number}
                    />

                    <p>
                        <span className="font-weight-bold">Number:</span> {`${number ? `"${number}"` : number}`}<br/ >
                        <span className="font-weight-bold">Formatted Number:</span> {`${formattedNumber ? `"${formattedNumber}"` : formattedNumber}`}<br/ >
                        <span className="font-weight-bold">Dial Code:</span> {dialCode}<br/ >
                        <span className="font-weight-bold">Country Code:</span> {`${countryCode ? `"${countryCode}"` : countryCode}`}<br/ >
                        <span className="font-weight-bold">isValid:</span> {`${isValid}`}<br/ >
                    </p>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {basicSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }

    _onBasicChange(number, formattedNumber, dialCode, countryCode, isValid) {
        this.setState({
            number,
            formattedNumber,
            dialCode,
            countryCode,
            isValid,
        });
    }
}
