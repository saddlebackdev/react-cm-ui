import {
    A,
    Button,
    Prompt,
} from 'react-cm-ui';
import {
    noop,
} from 'lodash';
import React from 'react';

function PromptExample() {
    return (
        <div>
            <Prompt inline>
                <Button
                    color="success"
                    tabIndex={0}
                    designVersion={2}
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

export default PromptExample;
