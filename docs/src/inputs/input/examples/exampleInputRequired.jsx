import { Input } from 'react-cm-ui';
import React from 'react';

function ExampleInputRequired() {

    return (
        <Input label="Name" placeholder="First & Last Name" required={true} />
    );
}

export default ExampleInputRequired;
