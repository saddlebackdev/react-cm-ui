import {
    camelCase,
} from 'lodash';
import {
    Header,
} from 'react-cm-ui';
import React from 'react';
import Highlighter from '../../../global/highlighter';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
import ExampleDefaultBanner from '../examples/exampleDefaultBanner';
import ExampleOnAfterCloseBanner from '../examples/exampleOnAfterCloseBanner';
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
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Banner
                        <Header.Subheader>
                            A standard Banner.
                        </Header.Subheader>
                    </Header>

                    <ExampleDefaultBanner />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {require('!!raw-loader!../examples/exampleDefaultBanner').default}
                    </Highlighter>

                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        On After Close
                        <Header.Subheader>
                            After a Banner's close animation handler.
                        </Header.Subheader>
                    </Header>

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
