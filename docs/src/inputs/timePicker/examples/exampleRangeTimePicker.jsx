import { TimePicker } from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleDefaultTimePicker() {
    const [rangeValue, setRangeValue] = useState(null);

    const onTimePickerChange = (updatedValue) => {
        setRangeValue(updatedValue);
    };

    return (
        <React.Fragment>
            <TimePicker
                onChange={onTimePickerChange}
                range
                value={rangeValue}
            />

            <dl>
                <dt>Time Zone:</dt>
                <dd>{rangeValue?.timeZone?.label ?? '<NULL>'}</dd>

                <dt>Time From:</dt>
                <dd>{rangeValue?.timeFrom ?? '<NULL>'}</dd>

                <dt>Time To:</dt>
                <dd>{rangeValue?.timeTo ?? '<NULL>'}</dd>
            </dl>
        </React.Fragment>
    );
}

export default ExampleDefaultTimePicker;
