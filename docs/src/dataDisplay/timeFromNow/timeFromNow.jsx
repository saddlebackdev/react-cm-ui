import React from 'react';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';

function DocsTimeFromNow() {
    return (
        <Main page="time_from_now">
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

export default DocsTimeFromNow;
