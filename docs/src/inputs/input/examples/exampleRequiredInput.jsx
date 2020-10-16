import { Input } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleDefaultInput() {
    const [value, setValue] = useState('');

    const onChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Input
            fluid
            label="Label"
            onChange={onChange}
            placeholder="Placeholder"
            required
            value={value}
        />
    );
}

export default ExampleDefaultInput;
