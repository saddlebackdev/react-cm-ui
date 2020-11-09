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
                    checked={0}
                    pill
                    onChange={() => false}
                >
                    <Radio.Item label="Selected" />
                    <Radio.Item label="Unselected" />
                    <Radio.Item label="Unselected" />
                </Radio>
            </Grid.Column>

            <Grid.Column sm="auto">
                <Radio
                    checked={0}
                    pill
                    onChange={() => false}
                    disable
                >
                    <Radio.Item label="Disabled Selected" />
                    <Radio.Item label="Disabled Unselected" />
                    <Radio.Item label="Disabled Unselected" />
                </Radio>
            </Grid.Column>
        </Grid>
    );
}

export default RadioSample;
