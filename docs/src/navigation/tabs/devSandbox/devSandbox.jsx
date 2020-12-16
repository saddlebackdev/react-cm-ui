import React from 'react';
import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import Main from '../../../global/main';
import Example from '../../../global/example';
import MarkdownContainer from '../../../global/markdownContainer';
import Heading from '../../../global/heading';
import ExampleTabs from './examples/exampleTabs';
import ExampleWithContent from './examples/exampleWithContent';
import ExampleSelectedTabKey from './examples/exampleSelectedTabKey';
// eslint-disable-next-line import/no-named-default, import/extensions
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/tabs/tabs';

function DocsTabsSandbox() {
    const {
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Simple Tabs panel
                    </Heading>

                    <Typography variant="body1">
                        A simple Tabs panel.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleTabs.jsx').default}>
                    <ExampleTabs />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Panel With Content
                    </Heading>

                    <Typography variant="body1">
                        The panel content can be set inside the tab item object.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleWithContent.jsx').default}>
                    <ExampleWithContent />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Selected Tab Key
                    </Heading>

                    <Typography variant="body1">
                        The selected tab can programmatically be changed.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./examples/exampleSelectedTabKey.jsx').default}>
                    <ExampleSelectedTabKey />
                </Example>
            </Main.Content>
        </Main>
    );
}

export default DocsTabsSandbox;
