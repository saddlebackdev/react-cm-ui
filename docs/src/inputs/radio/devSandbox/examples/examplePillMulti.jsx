import React, {
    useState,
} from 'react';
import { Radio } from 'react-cm-ui';

function ExamplePillMulti() {
    const [pillMultiValues, setPillMultiValues] = useState(0);

    return (
        <Radio
            checked={pillMultiValues}
            name="example-pill-multi"
            onChange={(id, value) => setPillMultiValues(value)}
            pill
            multi
        >
            <Radio.Item label="Option 01" />
            <Radio.Item label="Option 02" />
            <Radio.Item label="Option 03" />
        </Radio>
    );
}

export default ExamplePillMulti;
