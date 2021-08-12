import { TimePicker } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleNestedTimePicker() {
    const [value, setValue] = useState(null);

    const onTimePickerChange = (updatedValue) => {
        setValue(updatedValue);
    };

    return (
        <TimePicker
            nest
            onChange={onTimePickerChange}
            value={value}
        />
    );
}

export default ExampleNestedTimePicker;
