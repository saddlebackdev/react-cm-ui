import React from 'react';
import { Radio } from 'react-cm-ui';

function ExampleDisable() {
    return (
        <React.Fragment>
            <Radio disable label="This radio input has been disabled, true or false?" />
            <br />
            <br />
            <Radio checked disable label="This radio input has been disabled and is checked, true or false?" />
        </React.Fragment>
    );
}

export default ExampleDisable;
