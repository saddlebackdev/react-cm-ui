import { Input } from '@saddleback/react-cm-ui';
import React, { useState, useCallback } from 'react';

function ExampleInputOnChange() {
    const [inputValue, setInput] = useState('');

    const onInputChange = useCallback((value) => {
        setInput(value);
    }, [setInput]);

    return (
        <Input
            label="Name"
            onChange={onInputChange}
            value={inputValue}
        />
    );
}

export default ExampleInputOnChange;
