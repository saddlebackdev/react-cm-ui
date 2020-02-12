import {
    A,
    Button,
    DropdownButton,
    Prompt,
} from 'react-cm-ui';
import React from 'react';

function PrompExample() {
    return (
        <div>
            <Prompt inline>
                <Button color="success">Save Me!</Button>
            </Prompt>

            <br />
            <br />

            <Prompt inline>
                <A>asdf</A>
            </Prompt>
        </div>
    );
}

export default PrompExample;
