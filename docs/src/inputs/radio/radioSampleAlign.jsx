/* eslint-disable linebreak-style */
import React from 'react';
import { Radio } from 'react-cm-ui';

function RadioSampleAlign() {
    return (
        <React.Fragment>
            <Radio align="left" label="Do you want to check the box?" />
            <br />
            <br />
            <Radio align="right" label="You know you want too, don't you?" />
        </React.Fragment>
    );
}

export default RadioSampleAlign;
