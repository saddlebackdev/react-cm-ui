import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from 'react-cm-ui';
import { options } from '../constants';

function ExampleLabelSelect() {
    const [selectedValue, setOption] = useState({});
    function onSelect(selectedOption) {
        setOption(selectedOption);
    }

    return (
        <div>
            <Select
                id="block--label_select_id"
                label="Select User"
                options={options}
                onChange={onSelect}
                placeholder="Select Option"
                value={!isEmpty(selectedValue) ? selectedValue : null}
            />
        </div>
    );
}

export default ExampleLabelSelect;
