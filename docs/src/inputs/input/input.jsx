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
import ExampleButtonInput from './examples/exampleButtonInput';
import ExampleDisabledButtonInput from './examples/exampleDisabledButtonInput';
import ExampleDefaultInput from './examples/exampleDefaultInput';
import ExampleDisabledInput from './examples/exampleDisabledInput';
import ExampleRequiredInput from './examples/exampleRequiredInput';
import ExampleThemeActiveConstrastInput from './examples/exampleThemeActiveConstrastInput';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
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

                    <Heading
                        anchorLink="standar-single-line-input"
                        variant="h2"
                    >
                        Standard Single Line Input
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Default
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleDefaultInput').default}
                    >
                        <ExampleDefaultInput />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Disabled
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleDisabledInput').default}
                    >
                        <ExampleDisabledInput />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Theme - Active Constrast
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleThemeActiveConstrastInput').default}
                    >
                        <ExampleThemeActiveConstrastInput />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Required
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleRequiredInput').default}
                    >
                        <ExampleRequiredInput />
                    </Example>

                    <Heading
                        anchorLink="standar-single-line-input"
                        variant="h2"
                    >
                        Button &amp; Single Line Input
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Default
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleButtonInput').default}
                    >
                        <ExampleButtonInput />
                    </Example>

                    <Typography
                        variant="body1"
                    >
                        Disabled
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleDisabledButtonInput').default}
                    >
                        <ExampleDisabledButtonInput />
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