import {
    Grid,
    TimePicker,
} from 'react-cm-ui';
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

            <Grid spacing={1} style={{ marginTop: 22 }}>
                <Grid.Column sm={2} style={{ fontWeight: 'bold' }}>
                    Time Zone:
                </Grid.Column>
                <Grid.Column sm={10}>
                    {rangeValue?.timeZone?.label ?? '<NULL>'}
                </Grid.Column>

                <Grid.Column sm={2} style={{ fontWeight: 'bold' }}>
                    Time From:
                </Grid.Column>
                <Grid.Column sm={10}>
                    {rangeValue?.timeFrom ?? '<NULL>'}
                </Grid.Column>

                <Grid.Column sm={2} style={{ fontWeight: 'bold' }}>
                    Time To:
                </Grid.Column>
                <Grid.Column sm={10}>
                    {rangeValue?.timeTo ?? '<NULL>'}
                </Grid.Column>
            </Grid>
        </React.Fragment>
    );
}

export default ExampleDefaultTimePicker;
