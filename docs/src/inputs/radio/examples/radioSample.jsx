import React from 'react';
import {
    Grid,
    Radio,
} from 'react-cm-ui';

function RadioSample() {
    return (
        <Grid
            spacing={4}
        >
            <Grid.Column sm="auto">
                <Radio
                    label="Unselected"
                    checked
                />
            </Grid.Column>

            <Grid.Column sm="auto">
                <Radio
                    label="Selected"
                />
            </Grid.Column>

            <Grid.Column sm="auto">
                <Radio
                    disable
                    label="Disabled Unselected"
                />
            </Grid.Column>

            <Grid.Column sm="auto">
                <Radio
                    checked
                    disable
                    label="Disabled Selected"
                />
            </Grid.Column>
        </Grid>
    );
}

export default RadioSample;
