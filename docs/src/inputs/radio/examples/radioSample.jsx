import React from 'react';
import { Radio } from 'react-cm-ui';

function RadioSample() {
    return (
        <React.Fragment>
            <Radio
                label="Unselected"
                checked
            />

            <Radio
                label="Selected"
            />

            <Radio
                disable
                label="Disabled Unselected"
            />

            <Radio
                checked
                disable
                label="Disabled Selected"
            />
        </React.Fragment>
    );
}

export default RadioSample;
