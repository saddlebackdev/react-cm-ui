import {
    Grid,
    TimePicker,
} from 'react-cm-ui';
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

            <Grid spacing={1} style={{ marginTop: 22 }}>
                <Grid.Column sm={2} style={{ fontWeight: 'bold' }}>
                    Time:
                </Grid.Column>
                <Grid.Column sm={10}>
                    {value?.timeFrom ?? '<NULL>'}
                </Grid.Column>

                <Grid.Column sm={2} style={{ fontWeight: 'bold' }}>
                    Time Zone:
                </Grid.Column>
                <Grid.Column sm={10}>
                    {value?.timeZone?.label ?? '<NULL>'}
                </Grid.Column>
            </Grid>
        </React.Fragment>
    );
}

export default ExampleTimePickerWithZoneMatchProp;
