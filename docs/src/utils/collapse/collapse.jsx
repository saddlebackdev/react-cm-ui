import {
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';

function DocsCollapse() {
    return (
        <Main page="collapse">
            <TitleBar title="Collapse" />

            <Main.Content>
                <MarkdownContainer>
                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Coming soon.
                    </Heading>
                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default DocsCollapse;
