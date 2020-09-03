import { DurationPicker } from 'react-cm-ui';
import React, { useState } from 'react';

function DurationPickerYearsMonthsDaysExample() {
    const [durationPickerValue, onDurationPickerChange] = useState(null);

    return (
        <DurationPicker
            onChange={onDurationPickerChange}
            maxYears={10}
            showHours={false}
            showMonths
            showYears
            value={durationPickerValue}
        />
    );
}

export default DurationPickerYearsMonthsDaysExample;
