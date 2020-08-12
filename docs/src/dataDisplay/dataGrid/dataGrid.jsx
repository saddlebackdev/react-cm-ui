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
import { default as dataGridDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/dataGrid/dataGrid';
/* eslint-enable import/no-named-default, import/extensions */

function DocsDataGrid() {
    const descriptionCopy = dataGridDoc.description;

    return (
        <Main page="data_grid">
            <TitleBar title="Data Grid" />

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
                        dataGridDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsDataGrid;
