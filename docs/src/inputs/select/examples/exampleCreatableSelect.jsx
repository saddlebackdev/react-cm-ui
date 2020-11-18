import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from 'react-cm-ui';
import { options } from '../constants';

function ExampleCreatableSelect() {
    const [selectedValue, setOption] = useState({});

    function onSelect(selectedOption) {
        setOption(selectedOption);
    }

    return (
        <div>
            <Select
                clearable
                creatable
                id="block--creatable_select_id"
                options={options}
                onChange={onSelect}
                placeholder="Select Option"
                searchable
                selection
                value={!isEmpty(selectedValue) ? selectedValue : null}
            />
        </div>
    );
}

export default ExampleCreatableSelect;
