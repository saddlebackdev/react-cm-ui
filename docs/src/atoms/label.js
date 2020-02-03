'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Card, Header, Label, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from '../global/block.js';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

const labelSample = `import React from 'react';

import Label from '../app/Elements/Label.react';

export default class InputSample extends React.Component {

    render() {
        return (
            <Label>Label</Label>
        );
    }

}`;

const colorSample = `import React from 'react';

import Label from '../app/Elements/Label.react';

export default class ColorSample extends React.Component {

    render() {
        return (
            <div>
                <Label color="alert">Alert</Label>
                <Label color="highlight">Highlight</Label>
                <Label color="success">Success</Label>
                <Label color="primary">Primary</Label>
                <Label color="transparent">Transparent</Label>
                <Label color="warning">Warning</Label>
            </div>
        );
    }

}`;

const fluidSample = `import React from 'react';

import Label from '../app/Elements/Label.react';

export default class FluidSample extends React.Component {

    render() {
        return (
            <Label fluid={true}>A Fluid Label</Label>
        );
    }

}`;

const inverseSample = `import React from 'react';

import Label from '../app/Elements/Label.react';

export default class InverseSample extends React.Component {

    render() {
        return (
            <div>
                <Label color="alert" inverse={true}>Alert</Label>
                <Label color="highlight" inverse={true}>Highlight</Label>
                <Label color="success" inverse={true}>Success</Label>
                <Label color="primary" inverse={true}>Primary</Label>
                <Label color="transparent" inverse={true}>Transparent</Label>
                <Label color="warning" inverse={true}>Warning</Label>
            </div>
        );
    }

}`;

const onClickSample = `import React from 'react';

import Label from '../app/Elements/Label.react';

export default class OnClickSample extends React.Component {

    render() {
        return (
            <Label onClick={this._onClick.bind(this)}>Click Me</Label>
        );
    }

    _onClick() {
        console.log('Label has been clicked!');
    }

}`;

const onClearClickSample = `import React from 'react';

import Label from '../app/Elements/Label.react';

export default class OnClearClickSample extends React.Component {

    render() {
        return (
            <Label color="alert" onClearClick={this._onClearClick.bind(this)}>Alert</Label>
            <Label color="highlight" onClearClick={this._onClearClick.bind(this)}>Highlight</Label>
            <Label color="success" onClearClick={this._onClearClick.bind(this)}>Success</Label>
            <Label color="primary" onClearClick={this._onClearClick.bind(this)}>Primary</Label>
            <Label color="transparent" onClearClick={this._onClearClick.bind(this)}>Transparent</Label>
            <Label color="warning" onClearClick={this._onClearClick.bind(this)}>Warning</Label>
        );
    }

    _onClearClick() {
        console.log('Label removed.');
    }

}`;

export default class ElementsLabel extends React.Component {

    render() {

        const props = [
            {
                name: 'children',
                type: 'node',
                default: '',
                description: 'Primary content.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'color',
                type: 'enum',
                default: '',
                description: 'Color of the Label.',
                allowedTypes: 'alert, highlight, primary, success, transparent, warning'
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'Label\'s can take on the size of its container.',
                allowedTypes: ''
            }, {
                name: 'inverse',
                type: 'bool',
                default: 'false',
                description: 'A Label can be formatted to appear on dark backgrounds better.',
                allowedTypes: ''
            }, {
                name: 'onClick',
                type: 'function',
                default: '',
                description: 'Called after the end-user\'s click.',
                allowedTypes: ''
            }, {
                name: 'onClearClick',
                type: 'function',
                default: '',
                description: 'Called after the end-user\'s click.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Label\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Label" />

                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Label */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Label
                        <Header.Subheader>
                            A standard label that can be attached to something, giving information about it.
                        </Header.Subheader>
                    </Header>

                    <Label>Label</Label>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {labelSample}
                    </Highlighter>

                    {/* Color */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Color
                        <Header.Subheader>
                            Labels can have different colors.
                        </Header.Subheader>
                    </Header>

                    <Label color="alert">Alert</Label>
                    <Label color="highlight">Highlight</Label>
                    <Label color="success">Success</Label>
                    <Label color="primary">Primary</Label>
                    <Label color="transparent">Transparent</Label>
                    <Label color="warning">Warning</Label>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {colorSample}
                    </Highlighter>

                    {/* Fluid */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Fluid
                        <Header.Subheader>
                            A Label's container can take on the size of its parent container.
                        </Header.Subheader>
                    </Header>

                    <Label fluid={true}>A Fluid Label</Label>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {fluidSample}
                    </Highlighter>

                    {/* Inverse */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Inverse
                        <Header.Subheader>
                            Labels can have different colors.
                        </Header.Subheader>
                    </Header>

                    <Block inverse={true} style={{ marginTop: '33px' }}>
                        <Label color="alert" inverse={true}>Alert</Label>
                        <Label color="highlight" inverse={true}>Highlight</Label>
                        <Label color="success" inverse={true}>Success</Label>
                        <Label color="primary" inverse={true}>Primary</Label>
                        <Label color="transparent" inverse={true}>Transparent</Label>
                        <Label color="warning" inverse={true}>Warning</Label>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {inverseSample}
                    </Highlighter>

                    {/* onClick */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        onClick Handler
                        <Header.Subheader>
                            A Label can be have a onClick handler.
                        </Header.Subheader>
                    </Header>

                    <Label onClick={this._onClick.bind(this)}>Click Me</Label>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onClickSample}
                    </Highlighter>

                    {/* onClearClick */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        onClearClick Handler
                        <Header.Subheader>
                            A Label can be removed using the onClearClick handler.
                        </Header.Subheader>
                    </Header>

                    <Label color="alert" onClearClick={this._onClearClick.bind(this)}>Alert</Label>
                    <Label color="highlight" onClearClick={this._onClearClick.bind(this)}>Highlight</Label>
                    <Label color="success" onClearClick={this._onClearClick.bind(this)}>Success</Label>
                    <Label color="primary" onClearClick={this._onClearClick.bind(this)}>Primary</Label>
                    <Label color="transparent" onClearClick={this._onClearClick.bind(this)}>Transparent</Label>
                    <Label color="warning" onClearClick={this._onClearClick.bind(this)}>Warning</Label>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onClearClickSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }

    _onClick() {
        console.log('Label has been clicked!');
    }

    _onClearClick() {
        console.log('Label removed.');
    }

}
