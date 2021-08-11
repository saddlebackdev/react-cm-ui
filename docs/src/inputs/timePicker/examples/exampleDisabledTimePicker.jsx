import { TimePicker } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleDisabledTimePicker() {
    const [value, setValue] = useState(null);

    const onTimePickerChange = (updatedValue) => {
        setValue(updatedValue);
    };

    return (
        <TimePicker
            disable
            onChange={onTimePickerChange}
            value={value}
        />
    );
}

export default ExampleDisabledTimePicker;
