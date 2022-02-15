import {
    Typography,
} from 'react-cm-ui'; // eslint-disable-line import/no-unresolved
import {
    camelCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier.jsx';
import Example from '../../global/example.jsx';
import ExampleOutline from './examples/exampleButtonOutline.jsx';
import ExamplePill from './examples/exampleButtonPill.jsx';
import ExamplePillOutline from './examples/exampleButtonPillOutline.jsx';
import ExampleSolid from './examples/exampleButtonSolid.jsx';
import ExampleTextExample from './examples/exampleButtonText.jsx';
import ExampleTransparentButton from './examples/exampleTransparentButton.jsx';
import Heading from '../../global/heading.jsx';
import Main from '../../global/main.jsx';
import MarkdownContainer from '../../global/markdownContainer.jsx';
/* eslint-disable import/no-named-default, import/extensions, import/no-unresolved */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/button/button';
/* eslint-enable import/no-named-default, import/extensions, import/no-unresolved */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsButton(props) {
    const {
        location: {
            pathname,
        },
    } = props;

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
                        Solid Button
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Types
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleButtonSolid').default}
                    >
                        <ExampleSolid />
                    </Example>

                    {/**
                      * Outline Button
                      */}
                    <Heading
                        anchorLink="outline-button"
                        variant="h2"
                    >
                        Outline Button
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Types
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleButtonOutline').default}
                    >
                        <ExampleOutline />
                    </Example>

                    {/**
                      * Transparent Button
                      */}
                    <Heading
                        anchorLink="transparent-button"
                        variant="h2"
                    >
                        Transparent Button
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Types
                    </Typography>

                    <Example
                        inverse
                        rawCode={require('!!raw-loader!./examples/exampleTransparentButton').default}
                    >
                        <ExampleTransparentButton />
                    </Example>

                    {/**
                      * Pill Button
                      */}
                    <Heading
                        anchorLink="pill-button"
                        variant="h2"
                    >
                        Pill Button
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Types
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleButtonPill').default}
                    >
                        <ExamplePill />
                    </Example>

                    {/**
                      * Pill & Outline Button
                      */}
                    <Heading
                        anchorLink="pill-outline-button"
                        variant="h2"
                    >
                        Pill &amp; Outline Button
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Types
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleButtonPillOutline').default}
                    >
                        <ExamplePillOutline />
                    </Example>

                    {/**
                      * Text Button
                      */}
                    <Heading
                        anchorLink="pill-outline-button"
                        variant="h2"
                    >
                        Text Button
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleButtonText').default}
                    >
                        <ExampleTextExample />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsButton.propTypes = propTypes;

export default DocsButton;
