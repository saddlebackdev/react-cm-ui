import { Input } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleDisabledInput() {
    const [value, setValue] = useState('');

    const onChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Input
            disable
            fluid
            label="Label"
            onChange={onChange}
            placeholder="Placeholder"
            value={value}
        />
    );
}

export default ExampleDisabledInput;
