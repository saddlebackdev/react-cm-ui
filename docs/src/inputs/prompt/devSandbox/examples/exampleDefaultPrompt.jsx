import React from 'react';
import {
    A,
    Button,
    Prompt,
} from 'react-cm-ui';

function ExampleDefaultPrompt() {
    return (
        <div>
            <Prompt inline>
                <Button color="success">Save Me!</Button>
            </Prompt>

            <br />
            <br />

            <Prompt inline>
                <A>Link</A>
            </Prompt>
        </div>
    );
}

export default ExampleDefaultPrompt;
