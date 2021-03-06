import {
    Card,
    Typography,
    Icon,
} from 'react-cm-ui';
import React from 'react';
import Block from '../../global/block';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

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
        return (
            <Main page="headers">
                <Main.Content>
                    {/* Icon */}
                    <Heading variant="h2">
                        Icon
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A standard icon. The
                        {' '}
                        <code>type</code>
                        {' '}
                        prop is required.
                    </Typography>

                    <Icon type="activity" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {iconSample}
                    </Highlighter>

                    {/* Align */}
                    <Heading variant="h2">
                        Align
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icons can change the side the margin is positioned on.
                    </Typography>

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
                    <Heading variant="h2">
                        Color
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icons can be formatted with different colors.
                    </Typography>

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
                    <Heading variant="h2">
                        Inverse
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icon colors can be inverted to appear on darker backgrounds better.
                    </Typography>

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
                    <Heading variant="h2">
                        Compact
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icons can appear without space to left or right.
                    </Typography>

                    <Icon compact type="activity" />
                    <Icon compact type="calendar" />
                    <Icon compact type="cards" />
                    <Icon compact type="time" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {compactSample}
                    </Highlighter>

                    {/* onClick Event Handler */}
                    <Heading variant="h2">
                        onClick Event Handler
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icons can handle an onClick event.
                    </Typography>

                    <Icon type="activity" onClick={onIconClick} tabIndex={0} />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onClickSample}
                    </Highlighter>

                    {/* Rotate */}
                    <Heading variant="h2">
                        Rotate
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icons can be rotated.
                    </Typography>

                    <Icon rotate={-90} type="heart" />
                    <Icon rotate={180} type="chevron-wh-up" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {rotateSample}
                    </Highlighter>

                    {/* Size */}
                    <Heading variant="h2">
                        Size
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icons can have different sizes.
                    </Typography>

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
                    <Heading variant="h2">
                        Spin
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icons can spin clockwise.
                    </Typography>

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
                    <Heading variant="h2">
                        Title
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icons can have a
                        {' '}
                        <code>title</code>
                        {' '}
                        prop that gives them a &ldquo;tooltip&rdquo;.
                    </Typography>

                    <Icon type="activity" title="I am an Activity Icon!" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {titleSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}

export default ElementsIconExamples;
