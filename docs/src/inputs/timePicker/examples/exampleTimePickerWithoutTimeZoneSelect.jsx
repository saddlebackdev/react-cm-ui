import { TimePicker } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleTimePickerWithoutTimeZoneSelect() {
    const [value, setValue] = useState(null);

    const onTimePickerChange = (updatedValue) => {
        setValue(updatedValue);
    };

    return (
        <React.Fragment>
            <TimePicker
                onChange={onTimePickerChange}
                showTimezone={false}
                value={value}
            />

            <dl>
                <dt>Time:</dt>
                <dd>{value?.timeFrom ?? '<NULL>'}</dd>
            </dl>
        </React.Fragment>
    );
}

export default ExampleTimePickerWithoutTimeZoneSelect;
