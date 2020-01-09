import {
    Card,
    Grid,
    Header,
    Icon,
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import Block from '../app/block.js';
import Highlighter from '../app/highlighter.js';
import IconSubNavigation from './iconSubNavigation.js';
import Main from '../app/main.js';
import TableProps from '../app/tableProps.js';

const iconSample = `import React from 'react';
import { Icon } from 'react-cm-ui';

export default class IconSample extends React.Component {

    render() {
        return (
            <Icon type="activity" />
        );
    }

}`;

const alignSample = `import React from 'react';
import { Icon } from 'react-cm-ui';

export default class AlignSample extends React.Component {

    render() {
        return (
            <Icon align="left" type="activity" />
            <Icon align="left" type="award" />
            <Icon align="left" type="user" /><br /><br />

            <div style={{ textAlign: 'right' }}>
                <Icon align="right" type="activity" />
                <Icon align="right" type="award" />
                <Icon align="right" type="user" />
            </div>
        );
    }

}`;

const colorSample = `import React from 'react';
import { Icon } from 'react-cm-ui';

export default class ColorSample extends React.Component {

    render() {
        return (
            <div>
                <Icon color="alert" type="activity" />
                <Icon color="highlight" type="caret-down" />
                <Icon color="primary" type="calendar" />
                <Icon color="static" type="cards" />
                <Icon color="success" type="time" />
                <Icon color="warning" type="exclamation" /><br /><br />

                <Icon color="action" type="circle-filled" />
                <Icon color="condition" type="time" />
                <Icon color="configuration" type="comment" />
                <Icon color="subject" type="heart" />
            </div>
        );
    }

}`;

const inverseSample = `import React from 'react';
import { Icon } from 'react-cm-ui';

export default class InverseSample extends React.Component {

    render() {
        return (
            <div>
                <Icon color="alert" inverse type="activity" />
                <Icon color="highlight" inverse type="caret-down" />
                <Icon color="primary" inverse type="calendar" />
                <Icon color="static" inverse type="cards" />
                <Icon color="success" inverse type="time" />
                <Icon color="warning" inverse type="exclamation" /><br /><br />

                <Icon color="action" inverse type="circle-filled" />
                <Icon color="condition" inverse type="time" />
                <Icon color="configuration" inverse type="comment" />
                <Icon color="subject" inverse type="heart" />
            </div>
        );
    }

}`;

const compactSample = `import React from 'react';
import { Icon } from 'react-cm-ui';

export default class CompactSample extends React.Component {

    render() {
        return (
            <Icon compact type="activity" />
            <Icon compact type="calendar" />
            <Icon compact type="cards" />
            <Icon compact type="time" />
        );
    }

}`;

const onClickSample = `import React from 'react';
import { Icon } from 'react-cm-ui';

export default class OnClickSample extends React.Component {

    render() {
        return (
            <Icon type="activity" onClick={this.onIconClick.bind(this)} />
        );
    }

    onIconClick() {
        window.alert('Look at my action.');
    }

}`;

const rotateSample = `import React from 'react';
import { Icon } from 'react-cm-ui';

export default class RotateSample extends React.Component {

    render() {
        return (
            <Icon rotate={-90} type="heart" />
            <Icon rotate={180} type="chevron-wh-up" />
        );
    }

}`;

const sizeSample = `import React from 'react';
import { Icon } from 'react-cm-ui';

export default class SizeSample extends React.Component {

    render() {
        return (
            <div>
                <Icon size={64} type="cloud-upload" />
                <Icon size={32} type="heart" />
                <Icon size="xlarge" type="activity" />
                <Icon size="large" type="award" />
                <Icon size="medium" type="book-open" />
                <Icon size="small" type="user" />
                <Icon size="xsmall" type="time" />
                <Icon size="xxsmall" type="check" />
            </div>
        );
    }

}`;

const spinSample = `import React from 'react';
import { Icon } from 'react-cm-ui';

export default class SpinSample extends React.Component {

    render() {
        return (
            <Icon spin type="activity" />
            <Icon spin type="award" />
            <Icon spin type="book-open" />
            <Icon spin type="user" />
            <Icon spin type="time" />
            <Icon spin type="check" />
        );
    }

}`;

const titleSample = `import React from 'react';
import { Icon } from 'react-cm-ui';

export default class IconSample extends React.Component {

    render() {
        return (
            <Icon type="activity" title={'I am an Activity Icon!'} />
        );
    }

}`;

function onIconClick() {
    window.alert('Look at my action.'); // eslint-disable-line no-alert
}

class ElementsIconExamples extends React.PureComponent {
    render() {
        const props = [
            {
                name: 'align',
                type: 'enum',
                default: '',
                description: 'Icons can change the side the margin is positioned on.',
                allowedTypes: 'left, right',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'color',
                type: 'string',
                default: '',
                description: 'Color of the icon.',
                allowedTypes: 'alert, primary, static, success',
            }, {
                name: 'compact',
                type: 'bool',
                default: '',
                description: 'Icons can appear without space to left or right.',
                allowedTypes: '',
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'A icon can be formatted to appear on dark backgrounds better.',
                allowedTypes: '',
            }, {
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'Called after the end-user\'s click.',
                allowedTypes: '',
            }, {
                name: 'size',
                type: 'enum || number',
                default: '',
                description: 'Size of icon.',
                allowedTypes: 'xlarge, large, medium, small, xsmall, xxsmall',
            }, {
                name: 'spin',
                type: 'bool',
                default: '',
                description: 'Spins the icon clockwise.',
                allowedTypes: '',
            }, {
                name: 'type',
                type: 'string',
                default: '',
                description: 'Type of icon.',
                allowedTypes: '',
            }, {
                name: 'title',
                type: 'string',
                default: '',
                description: 'Title (tooltip) of icon.',
                allowedTypes: '',
            },
        ];
        const iconCompact = true;
        const iconSize = 'xlarge';

        return (
            <Main page="headers">
                <TitleBar title="Icon" />

                <IconSubNavigation />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Icon */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Icon
                    <Header.Subheader>
                        A standard icon. The
                        {' '}
                        <code>type</code>
                        {' '}
prop is required.
                    </Header.Subheader>
                </Header>

                <Icon type="activity" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {iconSample}
                </Highlighter>

                {/* Align */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Align
                    <Header.Subheader>
                        Icons can change the side the margin is positioned on.
                    </Header.Subheader>
                </Header>

                <Icon align="left" type="activity" />
                <Icon align="left" type="award" />
                <Icon align="left" type="user" />
                <br />
                <br />

                <div style={{ textAlign: 'right' }}>
                    <Icon align="right" type="activity" />
                    <Icon align="right" type="award" />
                    <Icon align="right" type="user" />
                </div>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {alignSample}
                </Highlighter>

                {/* Color */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Color
                    <Header.Subheader>
                        Icons can be formatted with different colors.
                    </Header.Subheader>
                </Header>

                <Icon color="alert" type="activity" />
                <Icon color="disable" type="heart" />
                <Icon color="highlight" type="caret-down" />
                <Icon color="primary" type="calendar" />
                <Icon color="static" type="cards" />
                <Icon color="success" type="time" />
                <Icon color="warning" type="exclamation" />
                <br />
                <br />

                <Icon color="action" type="circle-filled" />
                <Icon color="condition" type="time" />
                <Icon color="configuration" type="comment" />
                <Icon color="subject" type="heart" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {colorSample}
                </Highlighter>

                {/* Inverse */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Inverse
                    <Header.Subheader>
                        Icon colors can be inverted to appear on darker backgrounds better.
                    </Header.Subheader>
                </Header>

                <Block inverse>
                    <Icon color="alert" inverse type="activity" />
                    <Icon color="disable" inverse type="heart" />
                    <Icon color="highlight" inverse type="caret-down" />
                    <Icon color="primary" inverse type="calendar" />
                    <Icon color="static" inverse type="cards" />
                    <Icon color="success" inverse type="time" />
                    <Icon color="warning" inverse type="exclamation" />
                    <br />
                    <br />

                    <Icon color="action" inverse type="circle-filled" />
                    <Icon color="condition" inverse type="time" />
                    <Icon color="configuration" inverse type="comment" />
                    <Icon color="subject" inverse type="heart" />
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {inverseSample}
                </Highlighter>

                {/* Compact */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Compact
                    <Header.Subheader>
                        Icons can appear without space to left or right.
                    </Header.Subheader>
                </Header>

                <Icon compact type="activity" />
                <Icon compact type="calendar" />
                <Icon compact type="cards" />
                <Icon compact type="time" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {compactSample}
                </Highlighter>

                {/* onClick Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    onClick Event Handler
                    <Header.Subheader>
                        Icons can handle an onClick event.
                    </Header.Subheader>
                </Header>

                <Icon type="activity" onClick={onIconClick} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onClickSample}
                </Highlighter>

                {/* Rotate */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Rotate
                    <Header.Subheader>
                        Icons can be rotated.
                    </Header.Subheader>
                </Header>

                <Icon rotate={-90} type="heart" />
                <Icon rotate={180} type="chevron-wh-up" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {rotateSample}
                </Highlighter>

                {/* Size */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Size
                    <Header.Subheader>
                        Icons can have different sizes.
                    </Header.Subheader>
                </Header>

                <Icon size={64} type="cloud-upload" />
                <Icon size={32} type="heart" />
                <Icon size="xlarge" type="activity" />
                <Icon size="large" type="award" />
                <Icon size="medium" type="book-open" />
                <Icon size="small" type="user" />
                <Icon size="xsmall" type="time" />
                <Icon size="xxsmall" type="check" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {sizeSample}
                </Highlighter>

                {/* Spin */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Spin
                    <Header.Subheader>
                        Icons can spin clockwise.
                    </Header.Subheader>
                </Header>

                <Icon spin type="activity" />
                <Icon spin type="award" />
                <Icon spin type="book-open" />
                <Icon spin type="user" />
                <Icon spin type="time" />
                <Icon spin type="check" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {spinSample}
                </Highlighter>

                {/* Title */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Title
                    <Header.Subheader>
                        Icons can have a
                        {' '}
                        <code>title</code>
                        {' '}
prop that gives them a &ldquo;tooltip&rdquo;.
                    </Header.Subheader>
                </Header>

                <Icon type="activity" title="I am an Activity Icon!" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {titleSample}
                </Highlighter>
            </Main>
        );
    }
}

export default ElementsIconExamples;
