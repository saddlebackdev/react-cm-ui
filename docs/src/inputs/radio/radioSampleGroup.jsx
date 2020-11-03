/* eslint-disable linebreak-style */
import React from 'react';
import { Radio } from 'react-cm-ui';

function RadioSampleGroup() {
    return (
        <React.Fragment>
            <Radio label="Choose me!" name="group-sample" />
            <br />
            <br />
            <Radio label="No choose me!" name="group-sample" />
        </React.Fragment>
    );
}

export default RadioSampleGroup;
