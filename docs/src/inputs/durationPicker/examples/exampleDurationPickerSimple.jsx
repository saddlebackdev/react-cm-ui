import { DurationPicker } from 'react-cm-ui';
import moment from 'moment-timezone';
import React, { useState } from 'react';

function ExampleDurationPickerSimple() {
    const [durationPickerValue, onDurationPickerChange] = useState(moment.duration({ hours: 2 }));

    return (
        <DurationPicker
            onChange={onDurationPickerChange}
            value={durationPickerValue}
        />
    );
}

export default ExampleDurationPickerSimple;
