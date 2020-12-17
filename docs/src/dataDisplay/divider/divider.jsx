import React from 'react';
import {
    Card,
    Divider,
    Typography,
} from 'react-cm-ui';

// Docs UI Components
import Block from '../../global/block';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const dividerSample = `import React from 'react';

import Divider from '../app/Elements/Divider.react';

export default class TextAreaSample extends React.Component {

    render() {
        return (
            <Divider />
        );
    }

}`;

const colorSample = `import React from 'react';

import Divider from '../app/Elements/Divider.react';

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

import Divider from '../app/Elements/Divider.react';

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

import Divider from '../app/Elements/Divider.react';

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

import Divider from '../app/Elements/Divider.react';

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

import Divider from '../app/Elements/Divider.react';

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

export default class DocsDivider extends React.Component {
    onBlur() {
        // eslint-disable-next-line no-console
        console.log('Are you sure you are done?');
    }

    onChange(value) {
        this.setState({ onChangeValue: value });
    }

    onClick() {
        // eslint-disable-next-line no-alert
        window.alert('You did it! You clicked the text area.');
    }

    onFocus() {
        // eslint-disable-next-line no-console
        console.log('Your focus determines your reality.');
    }

    onKeyDown(event) {
        // eslint-disable-next-line no-alert
        window.alert(`You just pressed the ${event.key} key`);
    }

    onIconClick() {
        // eslint-disable-next-line no-alert
        window.alert('Look at my action.');
    }

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'color',
                type: 'enum',
                default: '',
                description: 'A Divider\'s color can be changed.',
                allowedTypes: '',
            }, {
                name: 'compact',
                type: 'bool',
                default: 'false',
                description: 'A Divider can be compact, not having any margin above or below.',
                allowedTypes: '',
            }, {
                name: 'hidden',
                type: 'bool',
                default: 'false',
                description: 'A Divider can divide content without a line.',
                allowedTypes: '',
            }, {
                name: 'inverse',
                type: 'bool',
                default: 'false',
                description: 'A Divider\'s color can be set to the appropriate color when on a dark background.',
                allowedTypes: '',
            }, {
                name: 'relaxed',
                type: 'bool',
                default: 'false',
                description: 'A Divider can increase it\'s margin above and below.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Divider\'s container. Mainly used for padding and margins.',
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

                    {/* Divider */}
                    <Typography anchor="divider" variant="h2" style={{ marginTop: '55px' }}>
                        Divider
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A basic divider.
                    </Typography>

                    <Divider />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {dividerSample}
                    </Highlighter>

                    {/* Color */}
                    <Typography anchor="color" variant="h2" style={{ marginTop: '55px' }}>
                        Color
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A Divider's color can be changed.
                    </Typography>

                    <Divider color="alternate" />
                    <Divider color="highlight" />
                    <Divider color="inverse" />
                    <Divider color="inverse-alternate" />
                    <Divider color="primary" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {colorSample}
                    </Highlighter>

                    {/* Inverse */}
                    <Typography anchor="inverse" variant="h2" style={{ marginTop: '55px' }}>
                        Inverse
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A Divider's color can be set to the appropriate color when on a dark background.
                    </Typography>

                    <Block inverse>
                        <Divider color="alternate" inverse />
                        <Divider color="highlight" inverse />
                        <Divider color="inverse" inverse />
                        <Divider color="inverse-alternate" inverse />
                        <Divider color="primary" inverse />
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {inverseSample}
                    </Highlighter>

                    {/* Compact */}
                    <Typography anchor="compact" variant="h2" style={{ marginTop: '55px' }}>
                        Compact
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A Divider can be compact, not having any margin above or below.
                    </Typography>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
                    <Divider compact />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {compactSample}
                    </Highlighter>

                    {/* Hidden */}
                    <Typography anchor="hidden" variant="h2" style={{ marginTop: '55px' }}>
                        Hidden
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A Divider can divide content without a line.
                    </Typography>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
                    <Divider hidden />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {hiddenSample}
                    </Highlighter>

                    {/* Relaxed */}
                    <Typography anchor="relaxed" variant="h2" style={{ marginTop: '55px' }}>
                        Relaxed
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A Divider can increase it's margin above and below.
                    </Typography>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.</p>
                    <Divider relaxed />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.
                    </p>
                    <Divider relaxed="very" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem.</p>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {relaxedSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}
