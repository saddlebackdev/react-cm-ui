import {
    A,
} from 'react-cm-ui';
import React from 'react';

function ExampleA() {
    return (
        <A
            id="block_name--element_name"
            // eslint-disable-next-line no-console
            onClick={() => { console.log('Click!'); }}
            disable={false}
            // eslint-disable-next-line no-console
            onKeyDown={() => { console.log('keyDown!'); }}
        >
            Example Link
        </A>
    );
}

export default ExampleA;
