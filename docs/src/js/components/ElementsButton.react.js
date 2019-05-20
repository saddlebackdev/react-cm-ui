'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Header, Icon, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const buttonSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class ButtonSample extends React.Component {

    render() {
        return (
            <Button id="ui-button--demo_button">Button</Button>
        );
    }

}`;

const disabledSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class DisabledSample extends React.Component {
   constructor(props) {
       super(props);
       this._onClick = this._onClick.bind(this);
   }

    render() {
        return (
            <Button
                disabled
                onClick={this._onClick}
            >
                Disabled Button
            </Button>
        );
    }

    _onClick() {
        console.log('Button was clicked (but shouldn\\'t have been if it was disabled)'); // eslint-disable-line no-console
    }
}`;

const compactSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class CompactSample extends React.Component {

    render() {
        return (
            <Button compact>Compact</Button>
            <Button>Normal</Button>
        );
    }

}`;

const relaxSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class RelaxSample extends React.Component {

    render() {
        return (
            <Button relax>Relax</Button>
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
            <Button fluid>Fluid Button</Button>
        );
    }

}`;

const iconSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class IconSample extends React.Component {

    render() {
        return (
            <div>
                <Button icon>
                    <Icon color="inverse" type="plus" />
                </Button>

                <Button icon>
                    <Icon color="inverse" size="medium" type="times" />
                </Button>

                <Button>
                    <Icon color="inverse" type="cards" />
                    <span>Icon On The Left</span>
                </Button>

                <Button>
                    <span>Icon On The Right</span>
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
            <div>
                <Button color="alert">Alert</Button>
                <Button color="alternate">Alternate</Button>
                <Button color="disable">Disable</Button>
                <Button color="light">Light</Button>
                <Button color="outline">Outline</Button>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
            </div>
        );
    }

}`;

const outlinedSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class ButtonSample extends React.Component {

    render() {
        return (
            <div>
                <Button color="alert" outlined>Alert</Button>
                <Button color="alternate" outlined>Alternate</Button>
                <Button color="disable" outlined>Disable</Button>
                <Button color="light" outlined>Light</Button>
                <Button color="outline" outlined>Outline</Button>
                <Button color="primary" outlined>Primary</Button>
                <Button color="secondary" outlined>Secondary</Button>
                <Button color="success" outlined>Success</Button>
                <Button color="warning" outlined>Warning</Button>
            </div>
        );
    }

}`;

const colorsInvertedSample = `import React from 'react';

import Button from 'components/UI/Elements/Button.react';

export default class ButtonSample extends React.Component {

    render() {
        return (
            <div>
                <Button color="alert" inverse>Alert</Button>
                <Button color="alternate" inverse>Alternate</Button>
                <Button color="disable" inverse>Disable</Button>
                <Button color="light" inverse>Light</Button>
                <Button color="outline" inverse>Outline</Button>
                <Button color="primary" inverse>Primary</Button>
                <Button color="secondary" inverse>Secondary</Button>
                <Button color="success" inverse>Success</Button>
                <Button color="warning" inverse>Warning</Button>
            </div>
        );
    }

}`;

export default class ElementsButton extends React.Component {
    constructor(props) {
        super(props);
        this._onClickDisabledButton = this._onClickDisabledButton.bind(this);
    }

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
                allowedTypes: 'alert, alternate, disable, light, outline, primary, success, warning'
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
                name: 'id',
                type: 'string',
                default: '',
                description: 'Assign the button an id attribute value.',
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
                name: 'outlined',
                type: 'bool',
                default: 'false',
                description: 'A button can be outlined.',
                allowedTypes: ''
            }, {
                name: 'relax',
                type: 'bool',
                default: 'false',
                description: 'A button can relax its padding.',
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
                <Header anchor="button" size="large" style={{ marginTop: '55px' }} sub>
                    Button
                    <Header.Subheader>
                        A standard button.
                    </Header.Subheader>
                </Header>

                <Button id="ui-button--demo_button">Button</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {buttonSample}
                </Highlighter>

                {/* Compact */}
                <Header anchor="compact" size="large" style={{ marginTop: '55px' }} sub>
                    Compact
                    <Header.Subheader>
                        A button can have reduced padding.
                    </Header.Subheader>
                </Header>

                <Button compact>Compact</Button>
                <Button>Normal</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {compactSample}
                </Highlighter>

                {/* Relax */}
                <Header anchor="relax" size="large" style={{ marginTop: '55px' }} sub>
                    Relax
                    <Header.Subheader>
                        A button can have relaxed padding.
                    </Header.Subheader>
                </Header>

                <Button relax>Relax</Button>
                <Button>Normal</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {relaxSample}
                </Highlighter>

                {/* Disabled */}
                <Header anchor="disabled" size="large" style={{ marginTop: '55px' }} sub>
                    Disabled
                    <Header.Subheader>
                        A disabled Button.
                    </Header.Subheader>
                </Header>

                <Button
                    disabled
                    onClick={this._onClickDisabledButton}
                >
                    Disabled Button
                </Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disabledSample}
                </Highlighter>

                {/* Width */}
                <Header anchor="width" size="large" style={{ marginTop: '55px' }} sub>
                    Width
                    <Header.Subheader>
                        A button can have a fixed width.
                    </Header.Subheader>
                </Header>

                <Button width={170}>Fixed Width Number</Button><br /><br />
                <Button width="170px">Whoa! Button</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {widthSample}
                </Highlighter>

                {/* Fluid */}
                <Header anchor="fluid" size="large" style={{ marginTop: '55px' }} sub>
                    Fluid
                    <Header.Subheader>
                        A button can take on the width of the container.
                    </Header.Subheader>
                </Header>

                <Button fluid>Fluid Button</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fluidSample}
                </Highlighter>

                {/* Icon */}
                <Header anchor="icon" size="large" style={{ marginTop: '55px' }} sub>
                    Icon
                    <Header.Subheader>
                        A button can contain an icon.
                    </Header.Subheader>
                </Header>

                <Button icon>
                    <Icon color="inverse" type="plus" />
                </Button>

                <Button icon>
                    <Icon color="inverse" size="medium" type="times" />
                </Button>

                <Button>
                    <Icon color="inverse" type="cards" />
                    <span>Icon On The Left</span>
                </Button>

                <Button>
                    <span>Icon On The Right</span>
                    <Icon color="inverse" type="cards" />
                </Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {iconSample}
                </Highlighter>

                {/* Color */}
                <Header anchor="color" size="large" style={{ marginTop: '55px' }} sub>
                    Color
                    <Header.Subheader>
                        Buttons can have different colors.
                    </Header.Subheader>
                </Header>

                <Button color="alert">Alert</Button>
                <Button color="alternate">Alternate</Button>
                <Button color="disable">Disable</Button>
                <Button color="light">Light</Button>
                <Button color="outline">Outline</Button>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {colorSample}
                </Highlighter>

                {/* Outlined */}
                <Header anchor="color" size="large" style={{ marginTop: '55px' }} sub>
                Outlined
                    <Header.Subheader>
                        Buttons can have different border colors.
                    </Header.Subheader>
                </Header>

                <Button color="alert" outlined>Alert</Button>
                <Button color="alternate" outlined>Alternate</Button>
                <Button color="disable" outlined>Disable</Button>
                <Button color="light" outlined>Light</Button>
                <Button color="outline" outlined>Outline</Button>
                <Button color="primary" outlined>Primary</Button>
                <Button color="secondary" outlined>Secondary</Button>
                <Button color="success" outlined>Success</Button>
                <Button color="warning" outlined>Warning</Button>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    { outlinedSample}
                </Highlighter>

                {/* Color Inverted */}
                <Header anchor="color-inverted" size="large" style={{ marginTop: '55px' }} sub>
                    Colors Inverted
                    <Header.Subheader>
                        Button colors can be inverted.
                    </Header.Subheader>
                </Header>

                <Block inverse style={{ marginTop: '33px' }}>
                    <Button color="alert" inverse>Alert</Button>
                    <Button color="alternate" inverse>Alternate</Button>
                    <Button color="disable" inverse>Disable</Button>
                    <Button color="light" inverse>Light</Button>
                    <Button color="outline" inverse>Outline</Button>
                    <Button color="primary" inverse>Primary</Button>
                    <Button color="secondary" inverse>Secondary</Button>
                    <Button color="success" inverse>Success</Button>
                    <Button color="warning" inverse>Warning</Button>
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {colorsInvertedSample}
                </Highlighter>
            </Main>
        );
    }

    _onClickDisabledButton() {
        console.log('Button was clicked (but shouldn\'t have been if it was disabled)'); // eslint-disable-line no-console
    }

}
