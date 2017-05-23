'use strict';

import React from 'react';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

// CM App UI Components
import Radio from 'components/UI/Elements/Radio.react';
import Card from 'components/UI/Views/Card.react';
import Header from 'components/UI/Elements/Header.react';
import HeaderSubheader from 'components/UI/Elements/HeaderSubheader.react';
import TitleBar from 'components/UI/Views/TitleBar.react';

const radioSample = `import React from 'react';

import Radio from 'components/UI/Elements/Radio.react';

export default class RadioSample extends React.Component {

    render() {
        return (
            <Radio />
        );
    }

}`;

const labelSample = `import React from 'react';

import Radio from 'components/UI/Elements/Radio.react';

export default class LabelSample extends React.Component {

    render() {
        return (
            <Radio label="Do you want to check the box?" />
        );
    }

}`;

const alignSample = `import React from 'react';

import Radio from 'components/UI/Elements/Radio.react';

export default class AlignSample extends React.Component {

    render() {
        return (
            <Radio align="left" label="Do you want to check the box?" /><br /><br />
            <Radio align="right" label="You know you want too, don't you?" />
        );
    }

}`;

const checkedSample = `import React from 'react';

import Radio from 'components/UI/Elements/Radio.react';

export default class CheckedSample extends React.Component {

    render() {
        return (
            <Radio checked={true} label="Do you want to check the box?" />
        );
    }

}`;

const disabledSample = `import React from 'react';

import Radio from 'components/UI/Elements/Radio.react';

export default class DisabledSample extends React.Component {

    render() {
        return (
            <Radio disabled={true} label="This radio input has been disabled, true or false?" />
        );
    }

}`;

const fluidSample = `import React from 'react';

import Radio from 'components/UI/Elements/Radio.react';

export default class FluidSample extends React.Component {

    render() {
        return (
            <Radio align="left" fluid={true} label="It's better on the right, yeah?" />
            <Radio align="right" fluid={true} label="It's better on the right, yeah?" />
        );
    }

}`;

const labelClickSample = `import React from 'react';

import Radio from 'components/UI/Elements/Radio.react';

export default class LabelClickSample extends React.Component {

    render() {
        return (
            <Radio labelClick={false} label="Sorry, you can no longer click here to check the box." />
        );
    }

}`;

const onChangeSample = `import React from 'react';

import Radio from 'components/UI/Elements/Radio.react';

export default class OnChangeSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { onChangeSample: false };
    }

    render() {
        return (
            <Radio
                checked={this.state.onChangeSample}
                label="on change question."
                onChange={this._onChange.bind(this)}
            />
        );
    }

    _onChange(id, checked) {
        this.setState({ onChangeSample: checked });
    }

}`;

const radioGroupSample = `import React from 'react';

import Radio from 'components/UI/Elements/Radio.react';

export default class RadioGroupSample extends React.Component {

    render() {
        return (
            <Radio label="Choose me!" name="group-sample" /><br /><br />
            <Radio label="No choose me!" name="group-sample" />
        );
    }

}`;

export default class ElementsRadio extends React.Component {

    constructor(props) {
        super(props);

        this.state = { onChangeSample: false };
    }

    render() {

        const props = [
            {
                name: 'align',
                type: 'enum',
                default: '',
                description: 'Aligns the label\'s definition to the left or right.',
                allowedTypes: 'left, right'
            }, {
                name: 'checked',
                type: 'bool',
                default: '',
                description: 'Indicates whether a radio input is checked or not.',
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
                default: '',
                description: 'Indicates that the radio input is not available for interaction.',
                allowedTypes: ''
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'A radio input can take on the size of its container.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give a radio input an id.',
                allowedTypes: ''
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional label to display with the radio input.',
                allowedTypes: ''
            }, {
                name: 'labelClick',
                type: 'bool',
                default: '',
                description: 'Disable the label\'s definition onClick handler.',
                allowedTypes: ''
            }, {
                name: 'name',
                type: 'string',
                default: '',
                description: 'Radio input\'s name.',
                allowedTypes: ''
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the radio input\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'value',
                type: 'string',
                default: '',
                description: 'Radio input\'s value.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Radio" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Radio */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Radio
                    <HeaderSubheader>
                        A standard radio input.
                    </HeaderSubheader>
                </Header>

                <Radio />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {radioSample}
                </Highlighter>

                {/* Label */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Label
                    <HeaderSubheader>
                        A radio input can have a label defined.
                    </HeaderSubheader>
                </Header>

                <Radio label="Do you want to check the box?" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {labelSample}
                </Highlighter>

                {/* Align */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Align
                    <HeaderSubheader>
                        A label definition can sit on the right or left side of the radio input.
                    </HeaderSubheader>
                </Header>

                <Radio align="left" label="Do you want to check the box?" /><br /><br />
                <Radio align="right" label="You know you want too, don't you?" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {alignSample}
                </Highlighter>

                {/* Checked */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Checked
                    <HeaderSubheader>
                        A radio input can be checked from it's parent.
                    </HeaderSubheader>
                </Header>

                <Radio checked={true} label="Do you want to check the box?" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {checkedSample}
                </Highlighter>

                {/* Disabled */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Disabled
                    <HeaderSubheader>
                        Disable a radio input.
                    </HeaderSubheader>
                </Header>

                <Radio disabled={true} label="This radio input has been disabled, true or false?" /><br /><br />
                <Radio checked={true} disabled={true} label="This radio input has been disabled and is checked, true or false?" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disabledSample}
                </Highlighter>

                {/* Fluid */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Fluid
                    <HeaderSubheader>
                        A radio input can stretch as wide as the parent container.
                    </HeaderSubheader>
                </Header>

                <Block style={{ maxWidth: '400px' }}>
                    <Radio align="left" fluid={true} label="It's better on the right, yeah?" />
                </Block><br />

                <Block style={{ maxWidth: '400px' }}>
                    <Radio align="right" fluid={true} label="It's better on the right, yeah?" />
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fluidSample}
                </Highlighter>

                {/* Label Click */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Label Click
                    <HeaderSubheader>
                        Sometimes you may want to disable a radio from being checked by clicking it's label definition.
                    </HeaderSubheader>
                </Header>

                <Radio labelClick={false} label="Sorry, you can no longer click here to check the box." />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {labelClickSample}
                </Highlighter>

                {/* OnChange */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    OnChange
                    <HeaderSubheader>
                        Can handle an <code>onChange</code> event from parent. The <code>checked</code> prop is required along with this handler.
                    </HeaderSubheader>
                </Header>

                <Radio
                    checked={this.state.onChangeSample}
                    label="on change question."
                    onChange={this._onChange.bind(this)}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onChangeSample}
                </Highlighter>

                {/* Radio Group */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Radio Group
                    <HeaderSubheader>
                        Sometimes you may want to disable a radio input from being checked by clicking it's label definition.
                    </HeaderSubheader>
                </Header>

                <Radio label="Choose me!" name="group-sample" /><br /><br />
                <Radio label="No choose me!" name="group-sample" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {radioGroupSample}
                </Highlighter>
            </Main>
        );
    }

    _onChange(id, checked) {
        this.setState({ onChangeSample: checked });
    }

}
