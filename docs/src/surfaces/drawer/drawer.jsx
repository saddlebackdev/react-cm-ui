import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import React from 'react';
import Example from '../../global/example';
import ExampleDrawer from './examples/exampleDrawer';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
import Heading from '../../global/heading';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/button/button';
/* eslint-enable import/no-named-default, import/extensions */

function DocsDrawer() {
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
                        Basic Drawer
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!./examples/exampleDrawer').default}
                    >
                        <ExampleDrawer />
                    </Example>
                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default DocsDrawer;
