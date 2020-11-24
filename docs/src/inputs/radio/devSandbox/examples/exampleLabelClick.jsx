import React from 'react';
import { Radio } from 'react-cm-ui';

function ExampleLabelClick() {
    return (
        <Radio labelClick={false} label="Sorry, you can no longer click here to check the box." />
    );
}

export default ExampleLabelClick;
