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
import { default as filtersDrawerDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/filtersDrawer/filtersDrawer';
/* eslint-enable import/no-named-default, import/extensions */

function DocsFiltersDrawer() {
    const descriptionCopy = filtersDrawerDoc.description;

    return (
        <Main page="filters_drawer">
            <TitleBar title="Filters Drawer" />

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
                        filtersDrawerDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsFiltersDrawer;
