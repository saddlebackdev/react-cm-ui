import { DurationPicker } from 'react-cm-ui';
import React, { useState } from 'react';

function DurationPickerRequiredExample() {
    const [durationPickerValue, onDurationPickerChange] = useState(null);

    return (
        <DurationPicker
            label="Tasks due after:"
            onChange={onDurationPickerChange}
            required
            showMinutes
            value={durationPickerValue}
        />
    );
}

export default DurationPickerRequiredExample;
