'use strict';

import React from 'react';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

// CM App UI Components
import Checkbox from 'components/UI/Elements/Checkbox.react';
import Card from 'components/UI/Views/Card.react';
import Header from 'components/UI/Elements/Header.react';
import HeaderSubheader from 'components/UI/Elements/HeaderSubheader.react';
import TitleBar from 'components/UI/Views/TitleBar.react';

const checkboxSample = `import React from 'react';

import Checkbox from 'components/UI/Elements/Checkbox.react';

export default class CheckboxSample extends React.Component {

    render() {
        return (
            <Checkbox />
        );
    }

}`;

const labelSample = `import React from 'react';

import Checkbox from 'components/UI/Elements/Checkbox.react';

export default class LabelSample extends React.Component {

    render() {
        return (
            <Checkbox label="Do you want to check the box?" />
        );
    }

}`;

const alignSample = `import React from 'react';

import Checkbox from 'components/UI/Elements/Checkbox.react';

export default class AlignSample extends React.Component {

    render() {
        return (
            <Checkbox align="left" label="Do you want to check the box?" /><br /><br />
            <Checkbox align="right" label="You know you want too, don't you?" />
        );
    }

}`;

const checkedSample = `import React from 'react';

import Checkbox from 'components/UI/Elements/Checkbox.react';

export default class CheckedSample extends React.Component {

    render() {
        return (
            <Checkbox checked={true} label="Do you want to check the box?" />
        );
    }

}`;

const disabledSample = `import React from 'react';

import Checkbox from 'components/UI/Elements/Checkbox.react';

export default class DisabledSample extends React.Component {

    render() {
        return (
            <Checkbox disabled={true} label="This checkbox has been disabled, true or false?" />
        );
    }

}`;

const fluidSample = `import React from 'react';

import Checkbox from 'components/UI/Elements/Checkbox.react';

export default class FluidSample extends React.Component {

    render() {
        return (
            <Checkbox align="left" fluid={true} label="It's better on the right, yeah?" />
            <Checkbox align="right" fluid={true} label="It's better on the right, yeah?" />
        );
    }

}`;

const labelClickSample = `import React from 'react';

import Checkbox from 'components/UI/Elements/Checkbox.react';

export default class LabelClickSample extends React.Component {

    render() {
        return (
            <Checkbox labelClick={false} label="Sorry, you can no longer click here to check the box." />
        );
    }

}`;

const onChangeSample = `import React from 'react';

import Checkbox from 'components/UI/Elements/Checkbox.react';

export default class OnChangeSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { onChangeSample: false };
    }

    render() {
        return (
            <Checkbox
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

const toggleSample = `import React from 'react';

import Checkbox from 'components/UI/Elements/Checkbox.react';

export default class ToggleSample extends React.Component {

    render() {
        return (
            <Checkbox toggle={true} /><br /><br />
            <Checkbox label="Give me the sweet checkbox!" toggle={true} /><br /><br />
            <Checkbox align="right" label="It's better on the right, yeah?" toggle={true} /><br /><br />
            <Checkbox align="left" fluid={true} label="It's better on the right, yeah?" toggle={true} />
            <Checkbox align="right" fluid={true} label="It's better on the right, yeah?" toggle={true} />
        );
    }

}`;

export default class ElementsCheckbox extends React.Component {

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
                description: 'Indicates whether a checkbox is checked or not.',
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
                description: 'Indicates that the checkbox is not available for interaction.',
                allowedTypes: ''
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'A checkbox can take on the size of its container.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give a checkbox an id.',
                allowedTypes: ''
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional label to display with the checkbox.',
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
                description: 'Supply any inline styles to the checkbox\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'toggle',
                type: 'bool',
                default: '',
                description: 'Styles a checkbox to look like a toggle.',
                allowedTypes: ''
            }, {
                name: 'value',
                type: 'string',
                default: '',
                description: 'Checkbox value.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Checkbox" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Checkbox */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Checkbox
                    <HeaderSubheader>
                        A standard checkbox.
                    </HeaderSubheader>
                </Header>

                <Checkbox />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {checkboxSample}
                </Highlighter>

                {/* Label */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Label
                    <HeaderSubheader>
                        A checkbox can have a label defined.
                    </HeaderSubheader>
                </Header>

                <Checkbox label="Do you want to check the box?" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {labelSample}
                </Highlighter>

                {/* Align */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Align
                    <HeaderSubheader>
                        A label definition can sit on the right or left side of the checkbox.
                    </HeaderSubheader>
                </Header>

                <Checkbox align="left" label="Do you want to check the box?" /><br /><br />
                <Checkbox align="right" label="You know you want too, don't you?" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {alignSample}
                </Highlighter>

                {/* Checked */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Checked
                    <HeaderSubheader>
                        A checkbox can be checked from it's parent.
                    </HeaderSubheader>
                </Header>

                <Checkbox checked={true} label="Do you want to check the box?" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {checkedSample}
                </Highlighter>

                {/* Disabled */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Disabled
                    <HeaderSubheader>
                        Disable a checkbox.
                    </HeaderSubheader>
                </Header>

                <Checkbox disabled={true} label="This checkbox has been disabled, true or false?" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disabledSample}
                </Highlighter>

                {/* Fluid */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Fluid
                    <HeaderSubheader>
                        A checkbox can stretch as wide as the parent container.
                    </HeaderSubheader>
                </Header>

                <Block style={{ maxWidth: '400px' }}>
                    <Checkbox align="left" fluid={true} label="It's better on the right, yeah?" />
                </Block><br />

                <Block style={{ maxWidth: '400px' }}>
                    <Checkbox align="right" fluid={true} label="It's better on the right, yeah?" />
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fluidSample}
                </Highlighter>

                {/* Label Click */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Label Click
                    <HeaderSubheader>
                        Sometimes you may want to disable a checkbox from being checked by clicking it's label definition.
                    </HeaderSubheader>
                </Header>

                <Checkbox labelClick={false} label="Sorry, you can no longer click here to check the box." />

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

                <Checkbox
                    checked={this.state.onChangeSample}
                    label="on change question."
                    onChange={this._onChange.bind(this)}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onChangeSample}
                </Highlighter>

                {/* Toggle */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Toggle
                    <HeaderSubheader>
                        A checkbox can be transformed into a toggle switch.
                    </HeaderSubheader>
                </Header>

                <Checkbox toggle={true} /><br /><br />
                <Checkbox label="Give me the sweet checkbox!" toggle={true} /><br /><br />
                <Checkbox align="right" label="It's better on the right, yeah?" toggle={true} /><br /><br />

                <Block style={{ maxWidth: '400px' }}>
                    <Checkbox align="left" fluid={true} label="It's better on the right, yeah?" toggle={true} />
                </Block><br />

                <Block style={{ maxWidth: '400px' }}>
                    <Checkbox align="right" fluid={true} label="It's better on the right, yeah?" toggle={true} />
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {toggleSample}
                </Highlighter>
            </Main>
        );
    }

    _onChange(id, checked) {
        this.setState({ onChangeSample: checked });
    }

}
