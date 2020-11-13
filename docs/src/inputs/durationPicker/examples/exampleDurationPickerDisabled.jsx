import { DurationPicker } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleDurationPickerDisabled() {
    const [durationPickerValue, onDurationPickerChange] = useState(null);

    return (
        <DurationPicker
            disable
            label="Tasks due after:"
            onChange={onDurationPickerChange}
            showMinutes
            value={durationPickerValue}
        />
    );
}

export default ExampleDurationPickerDisabled;