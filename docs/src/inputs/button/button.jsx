import {
    TitleBar,
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
    startCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonSubNavigation from './buttonSubNavigation';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import ExampleOutline from './examples/buttonOutlineExample';
import ExamplePill from './examples/buttonPillExample';
import ExamplePillOutline from './examples/buttonPillOutlineExample';
import ExampleSolid from './examples/buttonSolidExample';
import ExampleTextExample from './examples/buttonTextExample';
import ExampleTransparentExample from './examples/buttonTransparentButtonExample';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/button/button';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsActionBar(props) {
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
            <TitleBar title={startCase(displayName)} />

            <ButtonSubNavigation />

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
                        rawCode={require('!!raw-loader!./examples/buttonSolidExample').default}
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
                        rawCode={require('!!raw-loader!./examples/buttonOutlineExample').default}
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
                        rawCode={require('!!raw-loader!./examples/buttonTransparentButtonExample').default}
                    >
                        <ExampleTransparentExample />
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
                        rawCode={require('!!raw-loader!./examples/buttonPillExample').default}
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
                        rawCode={require('!!raw-loader!./examples/buttonPillOutlineExample').default}
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
                        rawCode={require('!!raw-loader!./examples/buttonTextExample').default}
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

DocsActionBar.propTypes = propTypes;

export default DocsActionBar;
