import {
    camelCase,
} from 'lodash';
import React from 'react';
import {
    Typography,
} from 'react-cm-ui';
import Example from '../../../global/example';
import Heading from '../../../global/heading';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
import RadioSampleAlign from './examples/exampleAlign';
import RadioSampleChecked from './examples/exampleChecked';
import RadioSampleDisable from './examples/exampleDisable';
import RadioSampleFluid from './examples/exampleFluid';
import RadioSampleGroup from './examples/exampleGroup';
import RadioSampleLabel from './examples/exampleLabel';
import RadioSampleLabelClick from './examples/exampleLabelClick';
import RadioSampleOnChange from './examples/exampleOnChange';
import ExamplePill from './examples/examplePill';
import ExamplePillDisable from './examples/examplePillDisable';
import ExamplePillMulti from './examples/examplePillMulti';
import RadioSample from './examples/exampleStandard';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/radio/radio';
/* eslint-enable import/no-named-default, import/extensions */

export default function ElementsRadio() {
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

                    <Heading anchorLink="children" variant="h2">
                        Radio
                    </Heading>

                    <Typography variant="body1">
                        A standard radio input.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleStandard').default}>
                    <RadioSample />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Label
                    </Heading>

                    <Typography variant="body1">
                        A radio input can have a label defined.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleLabel').default}>
                    <RadioSampleLabel />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Align
                    </Heading>

                    <Typography variant="body1">
                        A label definition can sit on the right or left side of the radio input.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleAlign').default}>
                    <RadioSampleAlign />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Checked
                    </Heading>

                    <Typography variant="body1">
                        A radio input can be checked from it&apos;s parent.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleChecked').default}>
                    <RadioSampleChecked />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Disable
                    </Heading>

                    <Typography variant="body1">
                        Disable a radio input.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleDisable').default}>
                    <RadioSampleDisable />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Fluid
                    </Heading>

                    <Typography variant="body1">
                        A radio input can stretch as wide as the parent container.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleFluid').default}>
                    <RadioSampleFluid />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Label Click
                    </Heading>

                    <Typography variant="body1">
                        Sometimes you may want to disable a radio from being checked by clicking
                        &nbsp;it&apos;s label definition.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleLabelClick').default}>
                    <RadioSampleLabelClick />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        OnChange
                    </Heading>

                    <Typography variant="body1">
                        {/* eslint-disable react/jsx-one-expression-per-line */}
                        Can handle an <code>onChange</code> event from parent. The
                        <code>checked</code> prop is required along with this handler.
                        {/* eslint-disable react/jsx-one-expression-per-line */}
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleOnChange').default}>
                    <RadioSampleOnChange />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Radio Group
                    </Heading>

                    <Typography variant="body1">
                        Group radio buttons together.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleGroup').default}>
                    <RadioSampleGroup />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Radio Pill Group
                    </Heading>

                    <Typography variant="body1">
                        Group Radio buttons together in a pill container.
                        <br />
                        <a
                            className="font-size-xsmall"
                            href="https://www.youtube.com/watch?v=xT4ksAgQouc"
                            rel="noreferrer"
                            target="_blank"
                        >
                            https://www.youtube.com/watch?v=xT4ksAgQouc
                        </a>
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/examplePill').default}>
                    <ExamplePill />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Multiple Selection
                    </Heading>

                    <Typography variant="body1">
                        Radio Pill can have multiple selections.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/examplePillMulti').default}>
                    <ExamplePillMulti />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Radio Pills Disabled
                    </Heading>

                    <Typography variant="body1">
                        Radio Pills can be disabled.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/examplePillDisable').default}>
                    <ExamplePillDisable />
                </Example>
            </Main.Content>
        </Main>
    );
}
