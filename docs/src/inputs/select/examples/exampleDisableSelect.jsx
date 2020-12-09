import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from 'react-cm-ui';
import { options } from '../constants';

function ExampleDisableSelect() {
    const [selectedValue, setOption] = useState({});

    function onSelect(selectedOption) {
        setOption(selectedOption);
    }

    return (
        <div>
            <Select
                disable
                id="block--select_id"
                options={options}
                onChange={onSelect}
                placeholder="Select Option"
                value={!isEmpty(selectedValue) ? selectedValue : null}
            />
        </div>
    );
}

export default ExampleDisableSelect;
