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
import { default as dropdownMenuDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/dropdownMenu/dropdownMenu';
/* eslint-enable import/no-named-default, import/extensions */

function DocsDropdownMenu() {
    const descriptionCopy = dropdownMenuDoc.description;

    return (
        <Main page="dropdown_menu">
            <TitleBar title="Dropdown Menu" />

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
                        dropdownMenuDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsDropdownMenu;
