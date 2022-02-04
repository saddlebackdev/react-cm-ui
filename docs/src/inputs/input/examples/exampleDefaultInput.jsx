import { Input } from 'react-cm-ui';
import React, { useRef, useState } from 'react';

function ExampleDefaultInput() {
    const [basicValue, setBasicValue] = useState('');
    const basicInputRef = useRef();

    const onBasicChange = (value) => {
        setBasicValue(value);
    };

    return (
        <Input
            label="Label"
            onChange={onBasicChange}
            placeholder="Placeholder"
            ref={basicInputRef}
            value={basicValue}
        />
    );
}

export default ExampleDefaultInput;
