import React from 'react';
import {
    Card,
    Typography,
    Label,
} from 'react-cm-ui';
import Block from '../../global/block';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

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
                allowedTypes: '',
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
                allowedTypes: 'alert, highlight, primary, success, transparent, warning',
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'Label\'s can take on the size of its container.',
                allowedTypes: '',
            }, {
                name: 'inverse',
                type: 'bool',
                default: 'false',
                description: 'A Label can be formatted to appear on dark backgrounds better.',
                allowedTypes: '',
            }, {
                name: 'onClick',
                type: 'function',
                default: '',
                description: 'Called after the end-user\'s click.',
                allowedTypes: '',
            }, {
                name: 'onClearClick',
                type: 'function',
                default: '',
                description: 'Called after the end-user\'s click.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Label\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <Main.Content>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Label */}
                    <Heading variant="h2">
                        Label
                    </Heading>

                    <Typography variant="body1">
                        A standard label that can be attached to something, giving information about it.
                    </Typography>

                    <Label>Label</Label>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {labelSample}
                    </Highlighter>

                    {/* Color */}
                    <Heading variant="h2">
                        Color
                    </Heading>

                    <Typography variant="body1">
                        Labels can have different colors.
                    </Typography>

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
                    <Heading variant="h2">
                        Fluid
                    </Heading>

                    <Typography variant="body1">
                        A Label's container can take on the size of its parent container.
                    </Typography>

                    <Label fluid>A Fluid Label</Label>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {fluidSample}
                    </Highlighter>

                    {/* Inverse */}
                    <Heading variant="h2">
                        Inverse
                    </Heading>

                    <Typography variant="body1">
                        Labels can have different colors.
                    </Typography>

                    <Block inverse style={{ marginTop: '33px' }}>
                        <Label color="alert" inverse>Alert</Label>
                        <Label color="highlight" inverse>Highlight</Label>
                        <Label color="success" inverse>Success</Label>
                        <Label color="primary" inverse>Primary</Label>
                        <Label color="transparent" inverse>Transparent</Label>
                        <Label color="warning" inverse>Warning</Label>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {inverseSample}
                    </Highlighter>

                    {/* onClick */}
                    <Heading variant="h2">
                        onClick Handler
                    </Heading>

                    <Typography variant="body1">
                        A Label can be have a onClick handler.
                    </Typography>

                    <Label onClick={this._onClick.bind(this)}>Click Me</Label>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onClickSample}
                    </Highlighter>

                    {/* onClearClick */}
                    <Heading variant="h2">
                        onClearClick Handler
                    </Heading>

                    <Typography variant="body1">
                        A Label can be removed using the onClearClick handler.
                    </Typography>

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
