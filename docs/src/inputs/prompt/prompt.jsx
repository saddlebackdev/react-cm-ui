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
import ExampleAlertPrompt from './examples/exampleAlertPrompt';
import ExampleInformativePrompt from './examples/exampleInformativePrompt';
import ExampleSuccessPrompt from './examples/exampleSuccessPrompt';
import ExampleWarningPrompt from './examples/exampleWarningPrompt';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/prompt/prompt';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsPrompt(props) {
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

                    <Heading
                        anchorLink="alert-button"
                        variant="h2"
                    >
                        Button With Alert Prompt
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleAlertPrompt').default}
                    >
                        <ExampleAlertPrompt />
                    </Example>

                    <Heading
                        anchorLink="warning-button"
                        variant="h2"
                    >
                        Button With Warning Prompt
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleWarningPrompt').default}
                    >
                        <ExampleWarningPrompt />
                    </Example>

                    <Heading
                        anchorLink="info-button"
                        variant="h2"
                    >
                        Button With Informative Prompt
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleInformativePrompt').default}
                    >
                        <ExampleInformativePrompt />
                    </Example>

                    <Heading
                        anchorLink="confirm-button"
                        variant="h2"
                    >
                        Button With Confirming Prompt
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleSuccessPrompt').default}
                    >
                        <ExampleSuccessPrompt />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsPrompt.propTypes = propTypes;

export default DocsPrompt;
