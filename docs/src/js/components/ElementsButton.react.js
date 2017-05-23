'use strict';

import React from 'react';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

// CM App UI Components
import Button from 'components/UI/Elements/Button.react';
import Card from 'components/UI/Views/Card.react';
import Header from 'components/UI/Elements/Header.react';
import HeaderSubheader from 'components/UI/Elements/HeaderSubheader.react';
import Icon from 'components/UI/Elements/Icon.react';
import TitleBar from 'components/UI/Views/TitleBar.react';

const buttonSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class ButtonSample extends React.Component {

    render() {
        return (
            <Button>Button</Button>
        );
    }

}`;

const disabledSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class DisabledSample extends React.Component {

    render() {
        return (
            <Button disabled={true}>Disabled Button</Button>
        );
    }

}`;

const compactSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class ButtonSample extends React.Component {

    render() {
        return (
            <Button compact={true}>Compact</Button>
            <Button>Normal</Button>
        );
    }

}`;

const widthSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class WidthSample extends React.Component {

    render() {
        return (
            <Button width={170}>Fixed Width Number</Button><br /><br />
            <Button width="170px">Whoa! Button</Button>
        );
    }

}`;

const fluidSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class ButtonSample extends React.Component {

    render() {
        return (
            <Button fluid={true}>Fluid Button</Button>
        );
    }

}`;

const iconSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class IconSample extends React.Component {

    render() {
        return (
            <div>
                <Button icon={true}>
                    <Icon color="inverse" type="plus" />
                </Button>

                <Button icon={true}>
                    <Icon color="inverse" size="medium" type="times" />
                </Button>

                <Button>
                    <Icon color="inverse" type="cards" />
                    Icon On The Left
                </Button>

                <Button>
                    Icon On The Right
                    <Icon color="inverse" type="cards" />
                </Button>
            </div>
        );
    }

}`;

const colorSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class ButtonSample extends React.Component {

    render() {
        return (
            <Button color="alert">Alert</Button>
            <Button color="alternate">Alternate</Button>
            <Button color="disable">Disable</Button>
            <Button color="primary">Primary</Button>
            <Button color="success">Success</Button>
        );
    }

}`;

const colorsInvertedSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class ButtonSample extends React.Component {

    render() {
        return (
            <Button color="alert" inverse={true}>Alert</Button>
            <Button color="alternate" inverse={true}>Alternate</Button>
            <Button color="disable" inverse={true}>Disable</Button>
            <Button color="primary" inverse={true}>Primary</Button>
            <Button color="success" inverse={true}>Success</Button>
        );
    }

}`;

export default class ElementsButton extends React.Component {

    render() {

        const props = [
            {
                name: 'as',
                type: 'enum',
                default: '',
                description: 'An element type to render as.',
                allowedTypes: 'a, button'
            }, {
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
                allowedTypes: ''
            }, {
                name: 'color',
                type: 'enum',
                default: '',
                description: 'Color of the button.',
                allowedTypes: 'primary, static'
            }, {
                name: 'compact',
                type: 'bool',
                default: 'false',
                description: 'A button can reduce its padding.',
                allowedTypes: ''
            }, {
                name: 'disabled',
                type: 'bool',
                default: 'false',
                description: 'A button can be disabled.',
                allowedTypes: ''
            }, {
                name: 'fluid',
                type: 'bool',
                default: 'false',
                description: 'A button can stretch the width of it\'s container.',
                allowedTypes: ''
            }, {
                name: 'href',
                type: 'string',
                default: '',
                description: 'A button can be a simple link.',
                allowedTypes: ''
            }, {
                name: 'icon',
                type: 'bool',
                default: 'false',
                description: 'A button can be fixed height and width with an icon in the center.',
                allowedTypes: ''
            }, {
                name: 'inverse',
                type: 'bool',
                default: 'false',
                description: 'A button can be formatted to appear on dark backgrounds better.',
                allowedTypes: ''
            }, {
                name: 'onClick',
                type: 'function',
                default: '',
                description: 'Called after the end-user\'s click.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Header\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'width',
                type: 'number, string',
                default: '',
                description: 'Set a fixed width.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Button" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Button */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Button
                    <HeaderSubheader>
                        A standard button.
                    </HeaderSubheader>
                </Header>

                <Button>Button</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {buttonSample}
                </Highlighter>

                {/* Compact */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Compact
                    <HeaderSubheader>
                        A button can have reduced padding.
                    </HeaderSubheader>
                </Header>

                <Button compact={true}>Compact</Button>
                <Button>Normal</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {compactSample}
                </Highlighter>

                {/* Disabled */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Disabled
                    <HeaderSubheader>
                        A disabled Button.
                    </HeaderSubheader>
                </Header>

                <Button disabled={true}>Disabled Button</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disabledSample}
                </Highlighter>

                {/* Width */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Width
                    <HeaderSubheader>
                        A button can have a fixed width.
                    </HeaderSubheader>
                </Header>

                <Button width={170}>Fixed Width Number</Button><br /><br />
                <Button width="170px">Whoa! Button</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {widthSample}
                </Highlighter>

                {/* Fluid */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Fluid
                    <HeaderSubheader>
                        A button can take on the width of the container.
                    </HeaderSubheader>
                </Header>

                <Button fluid={true}>Fluid Button</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fluidSample}
                </Highlighter>

                {/* Icon */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Icon
                    <HeaderSubheader>
                        A button can contain an icon.
                    </HeaderSubheader>
                </Header>

                <Button icon={true}>
                    <Icon color="inverse" type="plus" />
                </Button>

                <Button icon={true}>
                    <Icon color="inverse" size="medium" type="times" />
                </Button>

                <Button>
                    <Icon color="inverse" type="cards" />
                    Icon On The Left
                </Button>

                <Button>
                    Icon On The Right
                    <Icon color="inverse" type="cards" />
                </Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {iconSample}
                </Highlighter>

                {/* Color */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Color
                    <HeaderSubheader>
                        Buttons can have different colors.
                    </HeaderSubheader>
                </Header>

                <Button color="alert">Alert</Button>
                <Button color="alternate">Alternate</Button>
                <Button color="disable">Disable</Button>
                <Button color="light">Light</Button>
                <Button color="outline">Outline</Button>
                <Button color="primary">Primary</Button>
                <Button color="success">Success</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {colorSample}
                </Highlighter>

                {/* Color Inverted */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Colors Inverted
                    <HeaderSubheader>
                        Button colors can be inverted.
                    </HeaderSubheader>
                </Header>

                <Block inverse={true} style={{ marginTop: '33px' }}>
                    <Button color="alert" inverse={true}>Alert</Button>
                    <Button color="alternate" inverse={true}>Alternate</Button>
                    <Button color="disable" inverse={true}>Disable</Button>
                    <Button color="light" inverse={true}>Light</Button>
                    <Button color="outline" inverse={true}>Outline</Button>
                    <Button color="primary" inverse={true}>Primary</Button>
                    <Button color="success" inverse={true}>Success</Button>
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {colorsInvertedSample}
                </Highlighter>
            </Main>
        );
    }

    _onClick() {
        return false;
    }

}
