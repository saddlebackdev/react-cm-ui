import { DurationPicker } from 'react-cm-ui';
import React, { useState } from 'react';

function DurationPickerDaysHoursMinutesSecondsExample() {
    const [durationPickerValue, onDurationPickerChange] = useState(null);

    return (
        <DurationPicker
            onChange={onDurationPickerChange}
            showMinutes
            showSeconds
            value={durationPickerValue}
        />
    );
}

export default DurationPickerDaysHoursMinutesSecondsExample;
