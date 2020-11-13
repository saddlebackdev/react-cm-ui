import React, {
    useState,
} from 'react';
import { Radio } from 'react-cm-ui';

function ExamplePill() {
    const [pillValue, setPillValue] = useState(0);

    return (
        <Radio
            checked={pillValue}
            id="block_name--element_name"
            name="pillSample"
            onChange={(id, value) => {
                setPillValue(value);
            }}
            pill
        >
            <Radio.Item
                id="block_name--element_name-1"
                label="Option 01"
                tabIndex={0}
            />

            <Radio.Item
                id="block_name--element_name-2"
                label="Option 02"
                tabIndex={0}
            />

            <Radio.Item
                id="block_name--element_name-3"
                label="Option 03"
                tabIndex={0}
            />
        </Radio>
    );
}

export default ExamplePill;
