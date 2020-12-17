import {
    camelCase,
} from 'lodash';
import {
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ExampleDefaultBanner from '../examples/exampleDefaultBanner';
import ExampleOnAfterCloseBanner from '../examples/exampleOnAfterCloseBanner';
import Heading from '../../../global/heading';
import Highlighter from '../../../global/highlighter';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/banner/banner';
/* eslint-enable import/no-named-default, import/extensions */

function ElementsBanner() {
    const {
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Heading
                        anchorLink="banner"
                        variant="h2"
                    >
                        Banner
                    </Heading>

                    <Typography>
                        A standard Banner.
                    </Typography>

                    <ExampleDefaultBanner />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {require('!!raw-loader!../examples/exampleDefaultBanner').default}
                    </Highlighter>

                    <Heading
                        anchorLink="on-after-close"
                        variant="h2"
                    >
                        On After Close
                    </Heading>

                    <Typography>
                        After a Banner's close animation handler.
                    </Typography>

                    <ExampleOnAfterCloseBanner />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {require('!!raw-loader!../examples/exampleOnAfterCloseBanner').default}
                    </Highlighter>
                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default ElementsBanner;
