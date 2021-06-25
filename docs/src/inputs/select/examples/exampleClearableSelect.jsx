import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from 'react-cm-ui';
import { options } from '../constants';

function ExampleClearableSelect() {
    const [selectedValue, setOption] = useState({});

    const onSelect = (selectedOption) => {
        setOption(selectedOption);
    };

    return (
        <Select
            clearable
            id="block--clearable_select_id"
            options={options}
            onChange={onSelect}
            placeholder="Select Option"
            value={!isEmpty(selectedValue) ? selectedValue : null}
        />
    );
}

export default ExampleClearableSelect;
