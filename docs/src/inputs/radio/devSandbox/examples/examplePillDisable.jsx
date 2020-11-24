import React from 'react';
import { Radio } from 'react-cm-ui';

function ExamplePillMulti() {
    return (
        <Radio
            checked={2}
            disable
            name="pillDisabledSample"
            pill
        >
            <Radio.Item label="Option 01" />
            <Radio.Item label="Option 02" />
            <Radio.Item label="Option 03" />
        </Radio>
    );
}

export default ExamplePillMulti;
