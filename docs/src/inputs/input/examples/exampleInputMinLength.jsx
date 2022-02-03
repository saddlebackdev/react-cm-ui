import { Input } from 'react-cm-ui';
import React from 'react';

function ExampleInputMinLength() {
    return (
        <Input label="Minimum Characters Is 2" minLength={2} />
    );
}

export default ExampleInputMinLength;
