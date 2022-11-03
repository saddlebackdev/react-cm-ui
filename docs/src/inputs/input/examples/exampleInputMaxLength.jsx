import { Input } from '@saddleback/react-cm-ui';
import React from 'react';

function ExampleInputMaxLength() {
    return (
        <Input label="Maximum Characters Is 2" maxLength={2} />
    );
}

export default ExampleInputMaxLength;
