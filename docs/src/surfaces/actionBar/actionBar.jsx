import {
    TitleBar,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as actionBarDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/actionBar/actionBar';
/* eslint-enable import/no-named-default, import/extensions */

function DocsActionBar() {
    const descriptionCopy = actionBarDoc.description;

    return (
        <Main page="action_bar">
            <TitleBar title="Action Bar" />

            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {descriptionCopy}
                    </Typography>

                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Coming soon.
                    </Heading>
                </MarkdownContainer>

                <ComponentApi
                    docs={[
                        actionBarDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsActionBar;