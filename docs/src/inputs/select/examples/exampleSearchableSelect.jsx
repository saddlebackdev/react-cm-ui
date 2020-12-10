import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from 'react-cm-ui';
import { options } from '../constants';

function ExampleSearchableSelect() {
    const [selectedValue, setOption] = useState({});

    function onSelect(selectedOption) {
        setOption(selectedOption);
    }

    return (
        <div>
            <Select
                id="block--searchable_select_id"
                options={options}
                onChange={onSelect}
                placeholder="Select Option"
                searchable
                value={!isEmpty(selectedValue) ? selectedValue : null}
            />
        </div>
    );
}

export default ExampleSearchableSelect;
