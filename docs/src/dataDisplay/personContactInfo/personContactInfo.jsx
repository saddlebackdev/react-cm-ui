import {
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as personContactInfoDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/personContactInfo/personContactInfo';
/* eslint-enable import/no-named-default, import/extensions */

function DocsPersonContactInfo() {
    const descriptionCopy = personContactInfoDoc.description;

    return (
        <Main page="person_contact_info">
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
                        personContactInfoDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsPersonContactInfo;
