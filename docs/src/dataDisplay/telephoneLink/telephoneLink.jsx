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
import { default as telephoneLinkDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/telephoneLink/telephoneLink';
/* eslint-enable import/no-named-default, import/extensions */

function DocsTelephoneLink() {
    const descriptionCopy = telephoneLinkDoc.description;

    return (
        <Main page="telephone-link">
            <TitleBar title="Telephone Link" />

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
                        telephoneLinkDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsTelephoneLink;
