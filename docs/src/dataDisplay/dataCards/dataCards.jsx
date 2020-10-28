import {
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as dataCardsDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/dataCards/dataCards';
/* eslint-enable import/no-named-default, import/extensions */

function DocsDataCards() {
    const descriptionCopy = dataCardsDoc.description;

    return (
        <Main page="data_cards">
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
                        dataCardsDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsDataCards;
