/* eslint-disable linebreak-style */
import React from 'react';
import { Radio } from 'react-cm-ui';

function RadioSample() {
    return (
        <React.Fragment>
            <Radio
                name="a"
                label="Unselected"
                checked
            />

            <Radio
                name="b"
                label="Selected"
            />

            <Radio
                name="c"
                disable
                label="Disabled Unselected"
            />

            <Radio
                name="d"
                checked
                disable
                label="Disabled Selected"
            />
        </React.Fragment>
    );
};

export default RadioSample;