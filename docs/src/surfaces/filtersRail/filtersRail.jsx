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
import { default as filtersRailDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/filtersRail/filtersRail';
/* eslint-enable import/no-named-default, import/extensions */

function DocsFiltersRail() {
    const descriptionCopy = filtersRailDoc.description;

    return (
        <Main page="filters_rail">
            <TitleBar title="Filters Rail" />

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
                        filtersRailDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsFiltersRail;
