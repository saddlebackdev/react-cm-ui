import { TimePicker } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleDefaultTimePicker() {
    const [value, setValue] = useState(null);

    const onTimePickerChange = (updatedValue) => {
        setValue(updatedValue);
    };

    return (
        <React.Fragment>
            <TimePicker
                onChange={onTimePickerChange}
                value={value}
            />

            <dl>
                <dt>Time:</dt>
                <dd>{value?.timeFrom ?? '<NULL>'}</dd>
                <dt>Time Zone:</dt>
                <dd>{value?.timeZone?.label ?? '<NULL>'}</dd>
            </dl>
        </React.Fragment>
    );
}

export default ExampleDefaultTimePicker;
