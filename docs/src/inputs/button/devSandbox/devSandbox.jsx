import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import React from 'react';
import Example from '../../../global/example';
import ExampleOutlineColors from './examples/exampleOutlineColors';
import ExampleOutlineInverseColors from './examples/exampleOutlineInverseColors';
import ExamplePillColors from './examples/examplePillColors';
import ExamplePillOutlineColors from './examples/examplePillOutlineColors';
import ExamplePillOutlineInverseColors from './examples/examplePillOutlineInverseColors';
import ExampleSolidColors from './examples/exampleSolidColors';
import ExampleTextColors from './examples/exampleTextColors';
import Heading from '../../../global/heading';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/button/button';
/* eslint-enable import/no-named-default, import/extensions */

function DocsButtonSandbox() {
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

                    {/**
                     * Solid Button
                     */}
                    <Heading
                        anchorLink="solid-button"
                        variant="h2"
                    >
                        Solid Button Colors
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleSolidColors').default}
                    >
                        <ExampleSolidColors />
                    </Example>

                    {/**
                      * Outline Button
                      */}
                    <Heading
                        anchorLink="outline-button"
                        variant="h2"
                    >
                        Outline Button Colors
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleOutlineColors').default}
                    >
                        <ExampleOutlineColors />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Inverse Colors
                    </Typography>

                    <Example
                        inverse
                        rawCode={require('!!raw-loader!./examples/exampleOutlineInverseColors').default}
                    >
                        <ExampleOutlineInverseColors />
                    </Example>

                    {/**
                      * Transparent Button
                      */}
                    <Heading
                        anchorLink="transparent-button"
                        variant="h2"
                    >
                        Transparent Button Colors
                    </Heading>

                    {/**
                      * Pill Button
                      */}
                    <Heading
                        anchorLink="pill-button"
                        variant="h2"
                    >
                        Pill Button Colors
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/examplePillColors').default}
                    >
                        <ExamplePillColors />
                    </Example>

                    {/**
                      * Pill & Outline Button
                      */}
                    <Heading
                        anchorLink="pill-outline-button"
                        variant="h2"
                    >
                        Pill &amp; Outline Button Colors
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/examplePillOutlineColors').default}
                    >
                        <ExamplePillOutlineColors />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Inverse Colors
                    </Typography>

                    <Example
                        inverse
                        rawCode={require('!!raw-loader!./examples/examplePillOutlineInverseColors').default}
                    >
                        <ExamplePillOutlineInverseColors />
                    </Example>

                    {/**
                      * Text Button
                      */}
                    <Heading
                        anchorLink="pill-outline-button"
                        variant="h2"
                    >
                        Text Button Colors
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleTextColors').default}
                    >
                        <ExampleTextColors />
                    </Example>
                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default DocsButtonSandbox;
