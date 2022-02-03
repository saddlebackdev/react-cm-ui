import { Input } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleDefaultInput() {
    const [basicValue, setBasicValue] = useState('');

    const onBasicChange = (value) => {
        setBasicValue(value);
    };

    return (
        <Input
            label="Label"
            onChange={onBasicChange}
            placeholder="Placeholder"
            value={basicValue}
        />
    );
}

export default ExampleDefaultInput;
