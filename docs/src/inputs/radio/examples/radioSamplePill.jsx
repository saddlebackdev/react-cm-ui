import React from 'react';
import { Radio } from 'react-cm-ui';

function RadioSample() {
    return (
        <React.Fragment>
            <Radio
                checked={0}
                pill
                onChange={() => false}
            >
                <Radio.Item label="Selected" />
                <Radio.Item label="Unselected" />
                <Radio.Item label="Unselected" />
            </Radio>

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
        </React.Fragment>
    );
}

export default RadioSample;
