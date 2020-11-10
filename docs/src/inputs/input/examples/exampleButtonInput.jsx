import {
    Button,
    Icon,
    Input,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleButtonInput() {
    const [value, setValue] = useState('');

    const onChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Input
            actions={(
                <Button
                    color="primary"
                    icon
                >
                    <Icon
                        compact
                        type="placeholder"
                    />
                </Button>
            )}
            fluid
            label="Label"
            onChange={onChange}
            placeholder="Placeholder"
            value={value}
        />
    );
}

export default ExampleButtonInput;
