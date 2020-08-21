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
import { default as aDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/a/a';
/* eslint-enable import/no-named-default, import/extensions */

function DocsA() {
    const descriptionCopy = aDoc.description;

    return (
        <Main page="a">
            <TitleBar title="A" />

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
                        aDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsA;
