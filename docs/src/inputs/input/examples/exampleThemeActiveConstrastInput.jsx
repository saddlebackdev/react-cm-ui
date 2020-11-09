import { Input } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleThemeActiveConstrastInput() {
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
            theme="activeContrast"
            value={value}
        />
    );
}

export default ExampleThemeActiveConstrastInput;
