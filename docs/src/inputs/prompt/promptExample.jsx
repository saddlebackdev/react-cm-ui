import {
    A,
    Button,
    Prompt,
} from 'react-cm-ui';
import React from 'react';

function PromptExample() {
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

export default PromptExample;
