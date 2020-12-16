import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from 'react-cm-ui';
import { options } from '../constants';

function ExampleMultipleSelect() {
    const [selectedValue, setOption] = useState({});

    function onSelect(selectedOption) {
        setOption(selectedOption);
    }

    return (
        <div>
            <Select
                id="block--multiple_select_id"
                multiple
                options={options}
                placeholder="Select Option"
                onChange={onSelect}
                value={!isEmpty(selectedValue) ? selectedValue : null}
            />
        </div>
    );
}

export default ExampleMultipleSelect;
