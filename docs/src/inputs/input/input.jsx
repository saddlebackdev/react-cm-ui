import {
    Typography,
} from '@saddlebackchurch/react-cm-ui';
import {
    camelCase,
} from 'lodash';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import ExampleDefaultInput from './examples/exampleDefaultInput';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as componentDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/input/input';
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
        description: componentDescription,
        displayName: componentName,
    } = componentDoc;

    return (
        <Main page={camelCase(componentName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {componentDescription}
                    </Typography>

                    <Heading
                        anchorLink="default-input"
                        variant="h2"
                    >
                        Default Input
                    </Heading>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleDefaultInput').default}
                >
                    <ExampleDefaultInput />
                </Example>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsInput.propTypes = propTypes;

export default withRouter(DocsInput);

