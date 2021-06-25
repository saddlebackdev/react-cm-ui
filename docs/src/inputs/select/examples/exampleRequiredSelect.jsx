import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from 'react-cm-ui';
import { options } from '../constants';

function ExampleRequiredSelect() {
    const [selectedValue, setOption] = useState({});

    const onSelect = (selectedOption) => {
        setOption(selectedOption);
    };

    return (
        <div>
            <Select
                id="block--required_select_id"
                label="Select Option"
                options={options}
                onChange={onSelect}
                placeholder="Select Option"
                required
                value={!isEmpty(selectedValue) ? selectedValue : null}
            />
        </div>
    );
}

export default ExampleRequiredSelect;
