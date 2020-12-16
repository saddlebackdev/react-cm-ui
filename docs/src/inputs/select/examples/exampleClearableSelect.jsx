import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from 'react-cm-ui';
import { options } from '../constants';

function ExampleClearableSelect() {
    const [selectedValue, setOption] = useState({});

    function onSelect(selectedOption) {
        setOption(selectedOption);
    }

    return (
        <div>
            <Select
                clearable
                id="block--clearable_select_id"
                options={options}
                onChange={onSelect}
                placeholder="Select Option"
                value={!isEmpty(selectedValue) ? selectedValue : null}
            />
        </div>
    );
}

export default ExampleClearableSelect;
