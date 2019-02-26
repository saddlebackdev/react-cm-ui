'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Card, Header, Icon, Input, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const inputSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class InputSample extends React.Component {

    render() {
        return (
            <Input />
        );
    }

}`;

const autoCompleteSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class AutoCompleteSample extends React.Component {

    render() {
        return (
            <Input autoComplete="off" />
        );
    }

}`;

const autoFocusSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class AutoCompleteSample extends React.Component {

    render() {
        return (
            <Input autoFocus={true} />
        );
    }

}`;

const disabledSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class DisabledSample extends React.Component {

    render() {
        return (
            <Input disabled={true} value="So cool!" />
        );
    }

}`;

const errorSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class ErrorSample extends React.Component {

    render() {
        return (
            <Input error={true} value="No, you did it wrong!" /><br /><br />

            <Input error="The worst." value="Totally wrong value ..." />
        );
    }

}`;

const fluidSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class FluidSample extends React.Component {

    render() {
        return (
            <Input fluid={true} value="I'm totally the longest string you have ever seen. Ship it!" />
        );
    }

}`;

const iconSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class IconSample extends React.Component {

    render() {
        return (
            <Input icon="calendar" /><br /><br />

            <Input
                icon={(
                    <Icon fitted={true} type="calendar" onClick={this._onIconClick.bind(this)} />
                )}
            />
        );
    }

    _onIconClick() {
        window.alert('Look at my action.');
    }

}`;

const inverseSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class InverseSample extends React.Component {

    render() {
        return (
            <Input inverse={true} />
        );
    }

}`;

const labelSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class LabelSample extends React.Component {

    render() {
        return (
            <Input label="Name" />
        );
    }

}`;

const labelPositionSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class LabelPositionSample extends React.Component {

    render() {
        return (
            <div>
                <Input label="Bottom Label" labelPosition="bottom" /><br /><br />

                <Input label="Top Label" labelPosition="top" />
            </div>
        );
    }

}`;

const loadingSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class LoadingSample extends React.Component {

    render() {
        return (
            <Input icon="search" label="Search" loading={true} />
        );
    }

}`;

const maxminSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class MaxMinSample extends React.Component {

    render() {
        return (
            <div>
                <Input label="How many years has it been since the Reformation?" max={510} type="number" /><br /><br />
                <Input label="Age" max={99} min={0} type="number" value={0} />
                <Input label="Age without spinners" max={99} min={0} type="number" showSpinners={false} value={0} />
            </div>
        );
    }

}`;

const maxLengthSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class MaxLengthSample extends React.Component {

    render() {
        return (
            <Input label="Maximum Characters Is 2" maxLength={2} />
        );
    }

}`;

const minLengthSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class MinLengthSample extends React.Component {

    render() {
        return (
            <Input label="Minimum Characters Is 2" maxLength={2} />
        );
    }

}`;

const onBlurSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class OnBlurSample extends React.Component {

    render() {
        return (
            <Input label="Check It!" onBlur={this._onBlur.bind(this)} />
        );
    }

    _onBlur() {
        window.alert('Are you sure you are done?');
    }

}`;

const onChangeSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class OnChangeSample extends React.Component {

    render() {
        return (
            <Input label="Check It!" onChange={this._onChange.bind(this)} value={this.state.onChangeValue} />
        );
    }

    _onChange(value) {
        this.setState({ onChangeValue: value });
    }

}`;

const onClickSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class OnClickSample extends React.Component {

    render() {
        return (
            <Input label="Check It!" onClick={this._onClick.bind(this)} />
        );
    }

    _onClick() {
        window.alert('You did it! You clicked the input.');
    }

}`;

const onFocusSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class OnFocusSample extends React.Component {

    render() {
        return (
            <Input label="Check It!" onFocus={this._onFocus.bind(this)} />
        );
    }

    _onFocus() {
        console.log('Your focus determins your reality.');
    }

}`;

const onKeyDownSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class OnKeyDownSample extends React.Component {

    render() {
        return (
            <Input label="Check It!" onKeyDown={this._onKeyDown.bind(this)} />
        );
    }

    _onKeyDown(event) {
        window.alert('You just pressed the ' + event.key + ' key');
    }

}`;

const placeholderSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class PlaceholderSample extends React.Component {

    render() {
        return (
            <Input label="Name" placeholder="First & Last Name" />
        );
    }

}`;

const requiredSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class RequiredSample extends React.Component {

    render() {
        return (
            <Input label="Name" placeholder="First & Last Name" required={true} />
        );
    }

}`;

const typeSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class TypeSample extends React.Component {

    render() {
        return (
            <Input label="Email" type="email" /><br /><br />
            <Input label="Number" type="number" min={25} max={99}/> <span>Min: 25, Max: 99</span><br /><br />
            <Input label="Number" type="number" required={true} min={25} max={99}/> <span>Min: 25, Max: 99</span><br /><br />
            <Input label="Password" type="password" /><br /><br />
            <Input label="Telephone" type="tel" /><br /><br />
            <Input label="Text" type="text" />
        );
    }

}`;

const maskSample = `import React from 'react';
import { Input } from 'react-cm-ui';

export default class MaskSample extends React.Component {

    render() {
        return (
            <Input
                guide={true}
                keepCharPositions={true}
                label="Phone Number"
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder="(555) 495-3947"
            />
        );
    }

}`;

export default class ElementsButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = { onChangeValue: '' };
    }

    render() {

        const props = [
            {
                name: 'autoComplete',
                type: 'enum',
                default: '',
                description: 'Indicates whether the value of the control can be automatically completed by the browser.',
                allowedTypes: 'on, off'
            }, {
                name: 'autoFocus',
                type: 'bool',
                default: '',
                description: 'Gives Input immediate focus.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'disabled',
                type: 'bool',
                default: 'false',
                description: 'Indicates that the input is not available for interaction.',
                allowedTypes: ''
            }, {
                name: 'error',
                type: 'bool || string',
                default: '',
                description: 'Indicates that the input has an error.',
                allowedTypes: ''
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'An input can take on the size of its container.',
                allowedTypes: ''
            }, {
                name: 'guide',
                type: 'bool',
                default: '',
                description: 'Tells the component whether to be in guide or no guide mode.',
                allowedTypes: ''
            }, {
                name: 'icon',
                type: 'object || string',
                default: '',
                description: 'Optional icon to display inside the input.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'The id is used for the a label\'s for.',
                allowedTypes: ''
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'Format to appear on dark backgrounds.',
                allowedTypes: ''
            }, {
                name: 'keepCharPositions',
                type: 'bool',
                default: '',
                description: 'Changes the general behavior of the Text Mask component.',
                allowedTypes: ''
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional Label to display with the Input.',
                allowedTypes: ''
            }, {
                name: 'labelPosition',
                type: 'enum',
                default: 'top',
                description: 'Position the label above or below the input.',
                allowedTypes: 'bottom, top'
            }, {
                name: 'labelStyle',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the label.',
                allowedTypes: ''
            }, {
                name: 'loading',
                type: 'string',
                default: '',
                description: 'An icon input field can show that it is currently loading data.',
                allowedTypes: ''
            }, {
                name: 'mask',
                type: 'array',
                default: '',
                description: 'Is an array that defines how the user input is going to be masked.',
                allowedTypes: ''
            }, {
                name: 'max',
                type: 'number',
                default: '',
                description: 'Specifies the maximum value the field can have.',
                allowedTypes: ''
            }, {
                name: 'maxLength',
                type: 'number',
                default: '',
                description: 'Specifies the maximum number of characters that the user can enter.',
                allowedTypes: ''
            }, {
                name: 'min',
                type: 'number',
                default: '',
                description: 'Specifies the minimum value the field can have.',
                allowedTypes: ''
            }, {
                name: 'minLength',
                type: 'number',
                default: '',
                description: 'Specifies the minimum number of characters that the user needs to enter.',
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
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'Can handle an onClick event from parent.',
                allowedTypes: ''
            }, {
                name: 'onFocus',
                type: 'func',
                default: '',
                description: 'Can handle an onFocus event from parent.',
                allowedTypes: ''
            }, {
                name: 'onKeyDown',
                type: 'func',
                default: '',
                description: 'Can handle an onKeyDown event from parent.',
                allowedTypes: ''
            }, {
                name: 'placeholder',
                type: 'string',
                default: '',
                description: 'A hint to the user of what can be entered in the input.',
                allowedTypes: ''
            }, {
                name: 'required',
                type: 'bool',
                default: '',
                description: 'Specifies that the user must fill in a value before submitting a form.',
                allowedTypes: ''
            }, {
                name: 'showSpinners',
                type: 'bool',
                default: 'true',
                description: 'Specifies whether or not to show the spinners for the numeric control. This attribute is optional.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Input\'s container. Mainly used for padding and margins.',
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
                default: 'text',
                description: 'The HTML input type.',
                allowedTypes: 'email, number, password, tel, text'
            }, {
                name: 'value',
                type: 'string || number',
                default: '',
                description: 'The initial value of the control. This attribute is optional.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Input" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Input */}
                <Header anchor="input" size="large" style={{ marginTop: '55px' }} sub >
                    Input
                    <Header.Subheader>
                        A standard input is text input.
                    </Header.Subheader>
                </Header>

                <Input />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {inputSample}
                </Highlighter>

                {/* Auto Complete */}
                <Header anchor="auto-complete" size="large" style={{ marginTop: '55px' }} sub >
                    Auto Complete
                    <Header.Subheader>
                        Indicates whether the value of the control can be automatically completed by the browser.
                    </Header.Subheader>
                </Header>

                <Input autoComplete="off" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {autoCompleteSample}
                </Highlighter>

                {/* Auto Focus */}
                <Header anchor="auto-complete" size="large" style={{ marginTop: '55px' }} sub >
                    Auto Focus
                    <Header.Subheader>
                        Allows the Input to receive focus on load.
                    </Header.Subheader>
                </Header>

                <Input autoFocus={true} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {autoFocusSample}
                </Highlighter>

                {/* Disabled */}
                <Header anchor="disabled" size="large" style={{ marginTop: '55px' }} sub >
                    Disabled
                    <Header.Subheader>
                        Indicates that the input is not available for interaction.
                    </Header.Subheader>
                </Header>

                <Input disabled={true} value="So cool!" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disabledSample}
                </Highlighter>

                {/* Error */}
                <Header anchor="error" size="large" style={{ marginTop: '55px' }} sub >
                    Error
                    <Header.Subheader>
                        Indicates that the input has an error. You can either supply a boolean value or a string with a message.
                    </Header.Subheader>
                </Header>

                <Input error={true} value="No, you did it wrong!" /><br /><br />

                <Input error="The worst." value="Totally wrong value ..." />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {errorSample}
                </Highlighter>

                {/* Fluid */}
                <Header anchor="fluid" size="large" style={{ marginTop: '55px' }} sub >
                    Fluid
                    <Header.Subheader>
                        An input can take on the size of its container.
                    </Header.Subheader>
                </Header>

                <Input fluid={true} value="I'm totally the longest string you have ever seen. Ship it!" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fluidSample}
                </Highlighter>

                {/* Icon */}
                <Header anchor="icon" size="large" style={{ marginTop: '55px' }} sub >
                    Icon
                    <Header.Subheader>
                        An input can be formatted with an icon. You can either supply a string or add a custom icon by passing a node.
                    </Header.Subheader>
                </Header>

                <Input icon="calendar" /><br /><br />

                <Input
                    icon={(
                        <Icon compact={true} type="calendar" onClick={this._onIconClick.bind(this)} />
                    )}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {iconSample}
                </Highlighter>

                {/* Inverse */}
                <Header anchor="inverse" size="large" style={{ marginTop: '55px' }} sub >
                    Inverse
                    <Header.Subheader>
                        Format to appear on dark backgrounds.
                    </Header.Subheader>
                </Header>

                <Block inverse={true}>
                    <Input inverse={true} />
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {inverseSample}
                </Highlighter>

                {/* Label */}
                <Header anchor="label" size="large" style={{ marginTop: '55px' }} sub >
                    Label
                    <Header.Subheader>
                        Optional Label to display on top of the Input.
                    </Header.Subheader>
                </Header>

                <Input label="Name" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {labelSample}
                </Highlighter>

                {/* Label Position */}
                <Header anchor="label-position" size="large" style={{ marginTop: '55px' }} sub >
                    Label Position
                    <Header.Subheader>
                        Position the label above or below the input.
                    </Header.Subheader>
                </Header>

                <Input label="Bottom Label" labelPosition="bottom" /><br /><br />

                <Input label="Top Label" labelPosition="top" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {labelPositionSample}
                </Highlighter>

                {/* Loading */}
                <Header anchor="loading" size="large" style={{ marginTop: '55px' }} sub >
                    Loading
                    <Header.Subheader>
                        An icon input field can show that it is currently loading data.
                    </Header.Subheader>
                </Header>

                <Input icon="search" label="Search" loading={true} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {loadingSample}
                </Highlighter>

                {/* Max & Min */}
                <Header anchor="max-length" size="large" style={{ marginTop: '55px' }} sub >
                    Max & Min
                    <Header.Subheader>
                        Specifies the minimum and maximum value that the field can have.
                    </Header.Subheader>
                </Header>

                <Input label="How many years has it been since the Reformation?" max={510} type="number" /><br /><br />
                <Input label="Age" max={99} min={0} type="number" value={0} /><br /><br />
                <Input label="Age without spinners" max={99} min={0} type="number" showSpinners={false} value={0} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {maxminSample}
                </Highlighter>

                {/* Max Length */}
                <Header anchor="max-length" size="large" style={{ marginTop: '55px' }} sub >
                    Max Length
                    <Header.Subheader>
                        Specifies the maximum number of characters that the user can enter.
                    </Header.Subheader>
                </Header>

                <Input label="Maximum Characters Is 2" maxLength={2} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {maxLengthSample}
                </Highlighter>

                {/* Min Length */}
                <Header anchor="min-length" size="large" style={{ marginTop: '55px' }} sub >
                    Min Length
                    <Header.Subheader>
                        Specifies the minimum number of characters that the user needs to enter.
                    </Header.Subheader>
                </Header>

                <Input label="Minimum Characters Is 2" maxLength={2} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {minLengthSample}
                </Highlighter>

                {/* onBlur Event Handler */}
                <Header anchor="onblur" size="large" style={{ marginTop: '55px' }} sub >
                    onBlur Event Handler
                    <Header.Subheader>
                        Can handle an <code>onBlur</code> event from parent.
                    </Header.Subheader>
                </Header>

                <Input label="Check It!" onBlur={this._onBlur.bind(this)} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onBlurSample}
                </Highlighter>

                {/* onChange Event Handler */}
                <Header anchor="onchange" size="large" style={{ marginTop: '55px' }} sub >
                    onChange Event Handler
                    <Header.Subheader>
                        Can handle an <code>onChange</code> event from parent. The <code>value</code> prop is required along with this handler.
                    </Header.Subheader>
                </Header>

                <Input label="Check It!" onChange={this._onChange.bind(this)} value={this.state.onChangeValue} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onChangeSample}
                </Highlighter>

                {/* onClick Event Handler */}
                <Header anchor="onclick" size="large" style={{ marginTop: '55px' }} sub >
                    onClick Event Handler
                    <Header.Subheader>
                        Can handle an <code>onClick</code> event from parent.
                    </Header.Subheader>
                </Header>

                <Input label="Check It!" onClick={this._onClick.bind(this)} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onClickSample}
                </Highlighter>

                {/* onFocus Event Handler */}
                <Header anchor="onfocus" size="large" style={{ marginTop: '55px' }} sub >
                    onFocus Event Handler
                    <Header.Subheader>
                        Can handle an <code>onFocus</code> event from parent.
                    </Header.Subheader>
                </Header>

                <Input label="Check It!" onFocus={this._onFocus.bind(this)} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onFocusSample}
                </Highlighter>

                {/* onKeyDown Event Handler */}
                <Header anchor="onkeydown" size="large" style={{ marginTop: '55px' }} sub >
                    onKeyDown Event Handler
                    <Header.Subheader>
                        Can handle an <code>onKeyDown</code> event from parent.
                    </Header.Subheader>
                </Header>

                <Input label="Check It!" onKeyDown={this._onKeyDown.bind(this)} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onKeyDownSample}
                </Highlighter>

                {/* Placeholder */}
                <Header anchor="placeholder" size="large" style={{ marginTop: '55px' }} sub >
                    Placeholder
                    <Header.Subheader>
                        A hint to the user of what can be entered in the input.
                    </Header.Subheader>
                </Header>

                <Input label="Name" placeholder="First & Last Name" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {placeholderSample}
                </Highlighter>

                {/* Required */}
                <Header anchor="required" size="large" style={{ marginTop: '55px' }} sub >
                    Required
                    <Header.Subheader>
                        Specifies that the user must fill in a value before submitting a form.
                    </Header.Subheader>
                </Header>

                <Input label="Name" placeholder="First & Last Name" required={true} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {requiredSample}
                </Highlighter>

                {/* Type */}
                <Header anchor="type" size="large" style={{ marginTop: '55px' }} sub >
                    Type
                    <Header.Subheader>
                        The HTML input type.
                    </Header.Subheader>
                </Header>

                <Input label="Email" type="email" /><br /><br />
                <Input label="Number" type="number" min={25} max={99} style={{ width: 75 }} /> <span>Min: 25, Max: 99</span><br /><br />
                <Input label="Number" type="number" required min={25} max={99} style={{ width: 75 }} /> <span>Min: 25, Max: 99</span><br /><br />
                <Input label="Password" type="password" /><br /><br />
                <Input label="Telephone" type="tel" /><br /><br />
                <Input label="Text" type="text" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {typeSample}
                </Highlighter>

                {/* Mask */}
                <Header anchor="mask" size="large" style={{ marginTop: '55px' }} sub >
                    Mask
                    <Header.Subheader>
                        Is an array that defines how the user input is going to be masked.
                    </Header.Subheader>
                </Header>

                <Input
                    guide={true}
                    keepCharPositions={true}
                    label="Phone Number"
                    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    placeholder="(555) 495-3947"
                    type="tel"
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {maskSample}
                </Highlighter>
            </Main>
        );
    }

    _onBlur() {
        window.alert('Are you sure you are done?');
    }

    _onChange(value) {
        this.setState({ onChangeValue: value });
    }

    _onClick() {
        window.alert('You did it! You clicked the input.');
    }

    _onFocus() {
        console.log('Your focus determins your reality.');
    }

    _onKeyDown(event) {
        window.alert('You just pressed the ' + event.key + ' key');
    }

    _onIconClick() {
        window.alert('Look at my action.');
    }

}
