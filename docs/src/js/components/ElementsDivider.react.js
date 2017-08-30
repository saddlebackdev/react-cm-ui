'use strict';

import React from 'react';
import { Card, Divider, Header, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const dividerSample = `import React from 'react';

import Divider from 'components/UI/Elements/Divider.react';

export default class TextAreaSample extends React.Component {

    render() {
        return (
            <Divider />
        );
    }

}`;

const colorSample = `import React from 'react';

import Divider from 'components/UI/Elements/Divider.react';

export default class ColorSample extends React.Component {

    render() {
        return (
            <div>
                <Divider color="alternate" />
                <Divider color="highlight" />
                <Divider color="inverse" />
                <Divider color="inverse-alternate" />
                <Divider color="primary" />
            </div>
        );
    }

}`;

const inverseSample = `import React from 'react';

import Divider from 'components/UI/Elements/Divider.react';

export default class InverseSample extends React.Component {

    render() {
        return (
            <div>
                <Divider color="alternate" inverse={true} />
                <Divider color="highlight" inverse={true} />
                <Divider color="inverse" inverse={true} />
                <Divider color="inverse-alternate" inverse={true} />
                <Divider color="primary" inverse={true} />
            </div>
        );
    }

}`;

const compactSample = `import React from 'react';

import Divider from 'components/UI/Elements/Divider.react';

export default class CompactSample extends React.Component {

    render() {
        return (
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
                <Divider compact={true} />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
            </div>
        );
    }

}`;

const hiddenSample = `import React from 'react';

import Divider from 'components/UI/Elements/Divider.react';

export default class HiddenSample extends React.Component {

    render() {
        return (
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
                <Divider hidden={true} />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
            </div>
        );
    }

}`;

const relaxedSample = `import React from 'react';

import Divider from 'components/UI/Elements/Divider.react';

export default class RelaxedSample extends React.Component {

    render() {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.</p>
                <Divider relaxed={true} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.</p>
                <Divider relaxed="very" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.</p>
            </div>
        );
    }

}`;

export default class ElementsDivider extends React.Component {

    render() {

        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'color',
                type: 'enum',
                default: '',
                description: 'A Divider\'s color can be changed.',
                allowedTypes: ''
            }, {
                name: 'compact',
                type: 'bool',
                default: 'false',
                description: 'A Divider can be compact, not having any margin above or below.',
                allowedTypes: ''
            }, {
                name: 'hidden',
                type: 'bool',
                default: 'false',
                description: 'A Divider can divide content without a line.',
                allowedTypes: ''
            }, {
                name: 'inverse',
                type: 'bool',
                default: 'false',
                description: 'A Divider\'s color can be set to the appropriate color when on a dark background.',
                allowedTypes: ''
            }, {
                name: 'relaxed',
                type: 'bool',
                default: 'false',
                description: 'A Divider can increase it\'s margin above and below.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Divider\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Divider" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Divider */}
                <Header anchor="divider" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Divider
                    <Header.Subheader>
                        A basic divider.
                    </Header.Subheader>
                </Header>

                <Divider />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {dividerSample}
                </Highlighter>

                {/* Color */}
                <Header anchor="color" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Color
                    <Header.Subheader>
                        A Divider's color can be changed.
                    </Header.Subheader>
                </Header>

                <Divider color="alternate" />
                <Divider color="highlight" />
                <Divider color="inverse" />
                <Divider color="inverse-alternate" />
                <Divider color="primary" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {colorSample}
                </Highlighter>

                {/* Inverse */}
                <Header anchor="inverse" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Inverse
                    <Header.Subheader>
                        A Divider's color can be set to the appropriate color when on a dark background.
                    </Header.Subheader>
                </Header>

                <Block inverse={true}>
                    <Divider color="alternate" inverse={true} />
                    <Divider color="highlight" inverse={true} />
                    <Divider color="inverse" inverse={true} />
                    <Divider color="inverse-alternate" inverse={true} />
                    <Divider color="primary" inverse={true} />
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {inverseSample}
                </Highlighter>

                {/* Compact */}
                <Header anchor="compact" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Compact
                    <Header.Subheader>
                        A Divider can be compact, not having any margin above or below.
                    </Header.Subheader>
                </Header>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
                <Divider compact={true} />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {compactSample}
                </Highlighter>

                {/* Hidden */}
                <Header anchor="hidden" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Hidden
                    <Header.Subheader>
                        A Divider can divide content without a line.
                    </Header.Subheader>
                </Header>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
                <Divider hidden={true} />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {hiddenSample}
                </Highlighter>

                {/* Relaxed */}
                <Header anchor="relaxed" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Relaxed
                    <Header.Subheader>
                        A Divider can increase it's margin above and below.
                    </Header.Subheader>
                </Header>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.</p>
                <Divider relaxed={true} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.</p>
                <Divider relaxed="very" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.</p>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {relaxedSample}
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
