import {
    Grid,
    TimePicker,
} from 'react-cm-ui';
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

            <Grid spacing={1} style={{ marginTop: 22 }}>
                <Grid.Column sm={2} style={{ fontWeight: 'bold' }}>
                    Time:
                </Grid.Column>
                <Grid.Column sm={10}>
                    {value?.timeFrom ?? '<NULL>'}
                </Grid.Column>
            </Grid>
        </React.Fragment>
    );
}

export default ExampleTimePickerWithoutTimeZoneSelect;
