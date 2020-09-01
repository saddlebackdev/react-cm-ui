import { DurationPicker } from 'react-cm-ui';
import React, { useState } from 'react';

function DurationPickerDisabledExample() {
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

export default DurationPickerDisabledExample;
