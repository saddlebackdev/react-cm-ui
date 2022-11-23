import {
    Typography,
} from '@saddlebackchurch/react-cm-ui';
import {
    camelCase,
} from 'lodash';
import React from 'react';
import Example from '../../../global/example';
import ExampleAlign from './examples/exampleAlign';
import ExampleColor from './examples/exampleColor';
import ExampleCompact from './examples/exampleCompact';
import ExampleGradient from './examples/exampleGradient';
import ExampleInverseColor from './examples/exampleInverseColor';
import ExampleOnClick from './examples/exampleOnClick';
import ExampleRotate from './examples/exampleRotate';
import ExampleSize from './examples/exampleSize';
import ExampleSpin from './examples/exampleSpin';
import ExampleStandard from './examples/exampleStandard';
import ExampleTitle from './examples/exampleTitle';
import Heading from '../../../global/heading';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/dataDisplay/icon/icon';
/* eslint-enable import/no-named-default, import/extensions */

function DocsIconSandbox() {
    const {
        description,
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {description}
                    </Typography>

                    <Heading
                        anchorLink="icon"
                        variant="h2"
                    >
                        Icon
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleStandard').default}
                    >
                        <ExampleStandard />
                    </Example>

                    <Heading
                        anchorLink="align"
                        variant="h2"
                    >
                        Align
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icons can change the side the margin is positioned on.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleAlign').default}
                    >
                        <ExampleAlign />
                    </Example>

                    <Heading
                        anchorLink="colors"
                        variant="h2"
                    >
                        Colors
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleColor').default}
                    >
                        <ExampleColor />
                    </Example>

                    <Heading
                        anchorLink="inverse-color"
                        variant="h2"
                    >
                        Inverse Colors
                    </Heading>

                    <Example
                        inverse
                        rawCode={require('!!raw-loader!./examples/exampleInverseColor').default}
                    >
                        <ExampleInverseColor />
                    </Example>

                    <Heading
                        anchorLink="compact"
                        variant="h2"
                    >
                        Compact
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleCompact').default}
                    >
                        <ExampleCompact />
                    </Example>

                    <Heading
                        anchorLink="custom-gradient"
                        variant="h2"
                    >
                        Custom Gradient
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        <code>id</code> is required on the <code>linearGradient</code> element.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleGradient').default}
                    >
                        <ExampleGradient />
                    </Example>

                    <Heading
                        anchorLink="onclick"
                        variant="h2"
                    >
                        onClick
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleOnClick').default}
                    >
                        <ExampleOnClick />
                    </Example>

                    <Heading
                        anchorLink="rotate"
                        variant="h2"
                    >
                        Rotate
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleRotate').default}
                    >
                        <ExampleRotate />
                    </Example>

                    <Heading
                        anchorLink="size"
                        variant="h2"
                    >
                        Size
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleSize').default}
                    >
                        <ExampleSize />
                    </Example>

                    <Heading
                        anchorLink="spin"
                        variant="h2"
                    >
                        Spin
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleSpin').default}
                    >
                        <ExampleSpin />
                    </Example>

                    <Heading
                        anchorLink="title"
                        variant="h2"
                    >
                        Title
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Icons can have a
                        {' '}
                        <code>title</code>
                        {' '}
                        prop that gives them a &ldquo;tooltip&rdquo;.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleTitle').default}
                    >
                        <ExampleTitle />
                    </Example>
                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default DocsIconSandbox;
