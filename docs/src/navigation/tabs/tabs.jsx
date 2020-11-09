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
import ExampleContainedTabs from './examples/exampleContainedTabs';
import ExampleStandardTabs from './examples/exampleStandardTabs';
import ExampleStandardTabsDarkBackground from './examples/exampleStandardTabsDarkBackground';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/tabs/tabs';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsTabs(props) {
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
                        anchorLink="solid-button"
                        variant="h2"
                    >
                        Standard Tabs
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Light background.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleStandardTabs').default}
                    >
                        <ExampleStandardTabs />
                    </Example>

                    <Heading
                        anchorLink="solid-button"
                        variant="h2"
                    >
                        Standard Tabs
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Dark background.
                    </Typography>

                    <Example
                        inverse
                        rawCode={require('!!raw-loader!./examples/exampleStandardTabsDarkBackground').default}
                    >
                        <ExampleStandardTabsDarkBackground />
                    </Example>

                    <Heading
                        anchorLink="solid-button"
                        variant="h2"
                    >
                        Contained Tabs
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Dark background.
                    </Typography>

                    <Example
                        inverse
                        rawCode={require('!!raw-loader!./examples/exampleContainedTabs').default}
                    >
                        <ExampleContainedTabs />
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsTabs.propTypes = propTypes;

export default DocsTabs;
