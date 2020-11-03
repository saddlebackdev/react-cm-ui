import { Input } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleDefaultInput() {
    const [requiredValue, setRequiredValue] = useState('');

    const onRequiredChange = (value) => {
        setRequiredValue(value);
    };

    return (
        <Input
            fluid
            label="Label"
            onRequiredChange={onRequiredChange}
            placeholder="Placeholder"
            required
            value={requiredValue}
        />
    );
}

export default ExampleDefaultInput;
