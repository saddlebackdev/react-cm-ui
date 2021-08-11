import { TimePicker } from 'react-cm-ui';
import React, { useState } from 'react';
import { CUSTOM_TIME_ZONE_SELECT_OPTIONS } from '../constants';

function ExampleTimePickerWithZoneMatchProp() {
    const [value, setValue] = useState(null);

    const onTimePickerChange = (updatedValue) => {
        setValue(updatedValue);
    };

    return (
        <React.Fragment>
            <TimePicker
                onChange={onTimePickerChange}
                value={value}
                zoneMatchProp="label"
                zoneOptions={CUSTOM_TIME_ZONE_SELECT_OPTIONS}
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

export default ExampleTimePickerWithZoneMatchProp;
