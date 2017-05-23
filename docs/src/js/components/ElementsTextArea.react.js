'use strict';

import React from 'react';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

// CM App UI Components
import Card from 'components/UI/Views/Card.react';
import Header from 'components/UI/Elements/Header.react';
import HeaderSubheader from 'components/UI/Elements/HeaderSubheader.react';
import TextArea from 'components/UI/Elements/TextArea.react';
import TitleBar from 'components/UI/Views/TitleBar.react';

const textAreaSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class TextAreaSample extends React.Component {

    render() {
        return (
            <TextArea />
        );
    }

}`;

const autoHeightSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class AutoHeightSample extends React.Component {

    render() {
        return (
            <TextArea autoHeight={true} />
        );
    }

}`;

const disabledSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class DisabledSample extends React.Component {

    render() {
        return (
            <TextArea disabled={true} value="So cool!" />
        );
    }

}`;

const errorSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class ErrorSample extends React.Component {

    render() {
        return (
            <TextArea error={true} value="No, you did it wrong!" /><br /><br />

            <TextArea error="The worst." value="Totally wrong value ..." />
        );
    }

}`;

const fluidSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class FluidSample extends React.Component {

    render() {
        return (
            <TextArea fluid={true} value="I'm totally the longest string you have ever seen. Ship it!" />
        );
    }

}`;

const inverseSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class InverseSample extends React.Component {

    render() {
        return (
            <TextArea inverse={true} />
        );
    }

}`;

const labelSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class LabelSample extends React.Component {

    render() {
        return (
            <TextArea label="Name" />
        );
    }

}`;

const maxHeightSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class MaxHeightSample extends React.Component {

    render() {
        return (
            <TextArea maxHeight={101} />
        );
    }

}`;

const maxLengthSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class MaxLengthSample extends React.Component {

    render() {
        return (
            <TextArea label="Maximum Characters Is 2" maxLength={2} />
        );
    }

}`;

const minHeightSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class MinHeightSample extends React.Component {

    render() {
        return (
            <TextArea minHeight={300} />
        );
    }

}`;

const minLengthSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class MinLengthSample extends React.Component {

    render() {
        return (
            <TextArea label="Minimum Characters Is 2" maxLength={2} />
        );
    }

}`;

const onBlurSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class OnBlurSample extends React.Component {

    render() {
        return (
            <TextArea label="Check It!" onBlur={this._onBlur.bind(this)} />
        );
    }

    _onBlur() {
        console.log('Are you sure you are done?');
    }

}`;

const onChangeSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class OnChangeSample extends React.Component {

    render() {
        return (
            <TextArea label="Check It!" onChange={this._onChange.bind(this)} value={this.state.onChangeValue} />
        );
    }

    _onChange(value) {
        this.setState({ onChangeValue: value });
    }

}`;

const onClickSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class OnClickSample extends React.Component {

    render() {
        return (
            <TextArea label="Check It!" onClick={this._onClick.bind(this)} />
        );
    }

    _onClick() {
        window.alert('You did it! You clicked the text area.');
    }

}`;

const onFocusSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class OnFocusSample extends React.Component {

    render() {
        return (
            <TextArea label="Check It!" onFocus={this._onFocus.bind(this)} />
        );
    }

    _onFocus() {
        console.log('Your focus determins your reality.');
    }

}`;

const onKeyDownSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class OnKeyDownSample extends React.Component {

    render() {
        return (
            <TextArea label="Check It!" onKeyDown={this._onKeyDown.bind(this)} />
        );
    }

    _onKeyDown(event) {
        window.alert('You just pressed the ___ key');
    }

}`;

const placeholderSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class PlaceholderSample extends React.Component {

    render() {
        return (
            <TextArea label="Name" placeholder="First & Last Name" />
        );
    }

}`;

const requiredSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class RequiredSample extends React.Component {

    render() {
        return (
            <TextArea label="Name" placeholder="First & Last Name" required={true} />
        );
    }

}`;

const resizeSample = `import React from 'react';

import TextArea from 'components/UI/Elements/TextArea.react';

export default class ResizeSample extends React.Component {

    render() {
        return (
            <TextArea
                label="Comment"
                minHeight={200}
                placeholder="Leave a message..."
                resize={false}
            />
        );
    }

}`;

export default class ElementsTextArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = { onChangeValue: '' };
    }

    render() {

        const props = [
            {
                name: 'autoHeight',
                type: 'bool',
                default: '',
                description: 'Indicates whether height of the text area fits the content or not.',
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
                description: 'Indicates that the text area is not available for interaction.',
                allowedTypes: ''
            }, {
                name: 'error',
                type: 'bool || string',
                default: '',
                description: 'Indicates that the text area has an error.',
                allowedTypes: ''
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'An text area can take on the size of its container.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give a text area an id.',
                allowedTypes: ''
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'Format to appear on dark backgrounds.',
                allowedTypes: ''
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional Label to display on top of the text area.',
                allowedTypes: ''
            }, {
                name: 'maxHeight',
                type: 'number || string',
                default: '',
                description: 'Specifies the maximum height the text area can be.',
                allowedTypes: ''
            }, {
                name: 'maxLength',
                type: 'number',
                default: '',
                description: 'Specifies the maximum number of characters that the user can enter.',
                allowedTypes: ''
            }, {
                name: 'minHeight',
                type: 'number || string',
                default: '',
                description: 'Specifies the minimum height the text area needs to be',
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
                description: 'A hint to the user of what can be entered in the text area.',
                allowedTypes: ''
            }, {
                name: 'required',
                type: 'bool',
                default: '',
                description: 'Specifies that the user must fill in a value before submitting a form.',
                allowedTypes: ''
            }, {
                name: 'resize',
                type: 'bool',
                default: '',
                description: 'Specifies if a text area can be resized by the end user.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the text area\'s container. Mainly used for padding and margins.',
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
                <TitleBar title="Text Area" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Text Area */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Text Area
                    <HeaderSubheader>
                        A standard text area.
                    </HeaderSubheader>
                </Header>

                <TextArea />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {textAreaSample}
                </Highlighter>

                {/* Auto Height */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Auto Height
                    <HeaderSubheader>
                        A text area can auto resize based on it's content.
                    </HeaderSubheader>
                </Header>

                <TextArea autoHeight={true} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {autoHeightSample}
                </Highlighter>

                {/* Disabled */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Disabled
                    <HeaderSubheader>
                        Indicates that the text area is not available for interaction.
                    </HeaderSubheader>
                </Header>

                <TextArea disabled={true} value="So cool!" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disabledSample}
                </Highlighter>

                {/* Error */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Error
                    <HeaderSubheader>
                        Indicates that the text area has an error. You can either supply a boolean value or a string with a message.
                    </HeaderSubheader>
                </Header>

                <TextArea error={true} value="No, you did it wrong!" /><br /><br />

                <TextArea error="The worst." value="Totally wrong value ..." />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {errorSample}
                </Highlighter>

                {/* Fluid */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Fluid
                    <HeaderSubheader>
                        A text area can take on the size of its container.
                    </HeaderSubheader>
                </Header>

                <TextArea fluid={true} value="I'm totally the longest string you have ever seen. Ship it!" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fluidSample}
                </Highlighter>

                {/* Inverse */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Inverse
                    <HeaderSubheader>
                        Format to appear on dark backgrounds.
                    </HeaderSubheader>
                </Header>

                <Block inverse={true}>
                    <TextArea inverse={true} />
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {inverseSample}
                </Highlighter>

                {/* Label */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Label
                    <HeaderSubheader>
                        Optional Label to display on top of the text area.
                    </HeaderSubheader>
                </Header>

                <TextArea label="Comment" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {labelSample}
                </Highlighter>

                {/* Max Height */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Max Height
                    <HeaderSubheader>
                        Specifies the maximum number of characters that the user can enter.
                    </HeaderSubheader>
                </Header>

                <TextArea maxHeight={101} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {maxHeightSample}
                </Highlighter>

                {/* Max Length */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Max Length
                    <HeaderSubheader>
                        Specifies the maximum number of characters that the user can enter.
                    </HeaderSubheader>
                </Header>

                <TextArea label="Maximum Characters Is 2" maxLength={2} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {maxLengthSample}
                </Highlighter>

                {/* Min Height */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Min Height
                    <HeaderSubheader>
                        Specifies the minimum number of characters that the user needs to enter.
                    </HeaderSubheader>
                </Header>

                <TextArea minHeight={300} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {minHeightSample}
                </Highlighter>

                {/* Min Length */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Min Length
                    <HeaderSubheader>
                        Specifies the minimum number of characters that the user needs to enter.
                    </HeaderSubheader>
                </Header>

                <TextArea label="Minimum Characters Is 2" minLength={2} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {minLengthSample}
                </Highlighter>

                {/* onBlur Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    onBlur Event Handler
                    <HeaderSubheader>
                        Can handle an <code>onBlur</code> event from parent.
                    </HeaderSubheader>
                </Header>

                <TextArea label="Check It!" onBlur={this._onBlur.bind(this)} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onBlurSample}
                </Highlighter>

                {/* onChange Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    onChange Event Handler
                    <HeaderSubheader>
                        Can handle an <code>onChange</code> event from parent. The <code>value</code> prop is required along with this handler.
                    </HeaderSubheader>
                </Header>

                <TextArea label="Check It!" onChange={this._onChange.bind(this)} value={this.state.onChangeValue} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onChangeSample}
                </Highlighter>

                {/* onClick Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    onClick Event Handler
                    <HeaderSubheader>
                        Can handle an <code>onClick</code> event from parent.
                    </HeaderSubheader>
                </Header>

                <TextArea label="Check It!" onClick={this._onClick.bind(this)} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onClickSample}
                </Highlighter>

                {/* onFocus Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    onFocus Event Handler
                    <HeaderSubheader>
                        Can handle an <code>onFocus</code> event from parent.
                    </HeaderSubheader>
                </Header>

                <TextArea label="Check It!" onFocus={this._onFocus.bind(this)} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onFocusSample}
                </Highlighter>

                {/* onKeyDown Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    onKeyDown Event Handler
                    <HeaderSubheader>
                        Can handle an <code>onKeyDown</code> event from parent.
                    </HeaderSubheader>
                </Header>

                <TextArea label="Check It!" onKeyDown={this._onKeyDown.bind(this)} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onKeyDownSample}
                </Highlighter>

                {/* Placeholder */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Placeholder
                    <HeaderSubheader>
                        A hint to the user of what can be entered in the text area.
                    </HeaderSubheader>
                </Header>

                <TextArea label="Comment" placeholder="Leave a message..." />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {placeholderSample}
                </Highlighter>

                {/* Required */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Required
                    <HeaderSubheader>
                        Specifies that the user must fill in a value before submitting a form.
                    </HeaderSubheader>
                </Header>

                <TextArea label="Comment" placeholder="Leave a message..." required={true} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {requiredSample}
                </Highlighter>

                {/* Resize */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Resize
                    <HeaderSubheader>
                        Specifies that the user must fill in a value before submitting a form.
                    </HeaderSubheader>
                </Header>

                <TextArea
                    label="Comment"
                    minHeight={200}
                    placeholder="Leave a message..."
                    resize={false}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {resizeSample}
                </Highlighter>
            </Main>
        );
    }

    _onBlur() {
        console.log('Are you sure you are done?');
    }

    _onChange(value) {
        this.setState({ onChangeValue: value });
    }

    _onClick() {
        window.alert('You did it! You clicked the text area.');
    }

    _onFocus() {
        console.log('Your focus determins your reality.');
    }

    _onKeyDown(event) {
        window.alert(`You just pressed the ${event.key} key`);
    }

    _onIconClick() {
        window.alert('Look at my action.');
    }

}
