import { DurationPicker } from 'react-cm-ui';
import React, { useState } from 'react';

function DurationPickerLabelExample() {
    const [durationPickerValue, onDurationPickerChange] = useState(null);

    return (
        <DurationPicker
            label="Tasks due after:"
            onChange={onDurationPickerChange}
            showMinutes
            value={durationPickerValue}
        />
    );
}

export default DurationPickerLabelExample;
