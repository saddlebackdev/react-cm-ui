import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
import ExampleDefaultInput from './examples/exampleDefaultInput';
import ExampleRequiredInput from './examples/exampleRequiredInput';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/input/input';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsInput(props) {
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
                        Standard Single Line Input
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Text Only
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleDefaultInput').default}
                    >
                        <ExampleDefaultInput />
                    </Example>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleRequiredInput').default}
                    >
                        <ExampleRequiredInput />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsInput.propTypes = propTypes;

export default DocsInput;