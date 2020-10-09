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
import ButtonOutlineColorsExample from './buttonOutlineColorsExample';
import ButtonOutlineExample from './buttonOutlineExample';
import ButtonOutlineInverseColorsExample from './buttonOutlineInverseColorsExample';
import ButtonPillColorsExample from './buttonPillColorsExample';
import ButtonPillExample from './buttonPillExample';
import ButtonPillOutlineColorsExample from './buttonPillOutlineColorsExample';
import ButtonPillOutlineExample from './buttonPillOutlineExample';
import ButtonPillOutlineInverseColorsExample from './buttonPillOutlineInverseColorsExample';
import ButtonSolidColorsExample from './buttonSolidColorsExample';
import ButtonSolidExample from './buttonSolidExample';
import ButtonTextExample from './buttonTextExample';
import ButtonTransparentExample from './buttonTransparentButtonExample';
import ComponentApi from '../../global/componentApi';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
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
                        rawCode={require('!!raw-loader!./buttonSolidExample').default}
                    >
                        <ButtonSolidExample />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Colors
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./buttonSolidColorsExample').default}
                    >
                        <ButtonSolidColorsExample />
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
                        rawCode={require('!!raw-loader!./buttonOutlineExample').default}
                    >
                        <ButtonOutlineExample />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Colors
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./buttonOutlineColorsExample').default}
                    >
                        <ButtonOutlineColorsExample />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Inverse Colors
                    </Typography>

                    <Example
                        inverse
                        rawCode={require('!!raw-loader!./buttonOutlineInverseColorsExample').default}
                    >
                        <ButtonOutlineInverseColorsExample />
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
                        rawCode={require('!!raw-loader!./buttonTransparentButtonExample').default}
                    >
                        <ButtonTransparentExample />
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
                        rawCode={require('!!raw-loader!./buttonPillExample').default}
                    >
                        <ButtonPillExample />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Colors
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./buttonPillColorsExample').default}
                    >
                        <ButtonPillColorsExample />
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
                        rawCode={require('!!raw-loader!./buttonPillOutlineExample').default}
                    >
                        <ButtonPillOutlineExample />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Colors
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./buttonPillOutlineColorsExample').default}
                    >
                        <ButtonPillOutlineColorsExample />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Inverse Colors
                    </Typography>

                    <Example
                        inverse
                        rawCode={require('!!raw-loader!./buttonPillOutlineInverseColorsExample').default}
                    >
                        <ButtonPillOutlineInverseColorsExample />
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
                        rawCode={require('!!raw-loader!./buttonTextExample').default}
                    >
                        <ButtonTextExample />
                    </Example>
                </MarkdownContainer>

                <ComponentApi
                    docs={[
                        rootDoc,
                    ]}
                />

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsActionBar.propTypes = propTypes;

export default DocsActionBar;
