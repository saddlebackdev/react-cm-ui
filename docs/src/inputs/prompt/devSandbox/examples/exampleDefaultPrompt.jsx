import {
    A,
    Button,
    Prompt,
} from 'react-cm-ui';
import {
    noop,
} from 'lodash';
import React from 'react';

function ExampleDefaultPrompt() {
    return (
        <div>
            <Prompt inline>
                <Button
                    color="success"
                    tabIndex={0}
                >
                    Save Me!
                </Button>
            </Prompt>

            <br />
            <br />

            <Prompt
                inline
            >
                <A
                    onClick={noop}
                    tabIndex={0}
                >
                    Link
                </A>
            </Prompt>
        </div>
    );
}

export default ExampleDefaultPrompt;
