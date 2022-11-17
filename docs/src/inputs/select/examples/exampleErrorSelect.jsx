import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from '@saddlebackchurch/react-cm-ui';
import { options } from '../constants';

function ExampleErrorSelect() {
    const [selectedValue, setOption] = useState({});

    return (
        <Select
            error="This is a validation error message"
            id="block--select_id"
            label="Select Option"
            onChange={setOption}
            options={options}
            placeholder="Select"
            required
            tabIndex={0}
            value={!isEmpty(selectedValue) ? selectedValue : null}
        />
    );
}

export default ExampleErrorSelect;
