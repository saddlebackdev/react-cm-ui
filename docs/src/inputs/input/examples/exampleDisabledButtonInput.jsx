import {
    Button,
    Icon,
    Input,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleDisableButtonInput() {
    const [value, setValue] = useState('');

    const onChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Input
            actions={(
                <Button
                    disable
                    color="primary"
                    icon
                >
                    <Icon
                        compact
                        type="placeholder"
                    />
                </Button>
            )}
            disable
            fluid
            label="Label"
            onChange={onChange}
            placeholder="Placeholder"
            value={value}
        />
    );
}

export default ExampleDisableButtonInput;
