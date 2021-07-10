import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from 'react-cm-ui';
import { options } from '../constants';

function ExampleDefaultSelect() {
    const [selectedValue, setOption] = useState({});

    return (
        <Select
            id="block--select_id"
            onChange={setOption}
            options={options}
            placeholder="Select"
            tabIndex={0}
            value={!isEmpty(selectedValue) ? selectedValue : null}
        />
    );
}

export default ExampleDefaultSelect;
