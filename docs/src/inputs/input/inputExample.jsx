import { Input } from 'react-cm-ui';
import React, { useState } from 'react';

function InputExample() {
    const [basicValue, setBasicValue] = useState('');
    const [requiredValue, setRequiredValue] = useState('');

    const onBasicChange = (value) => {
        setBasicValue(value);
    };

    const onRequiredChange = (value) => {
        setRequiredValue(value);
    };

    return (
        <div>
            <Input
                fluid
                label="Basic"
                onRequiredChange={onBasicChange}
                placeholder="Placeholder"
                value={basicValue}
            />

            <Input
                fluid
                label="Required"
                onRequiredChange={onRequiredChange}
                placeholder="Placeholder"
                required
                value={requiredValue}
            />
        </div>
    );
}

export default InputExample;
