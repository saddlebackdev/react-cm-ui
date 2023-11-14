import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Select,
} from '@saddlebackchurch/react-cm-ui';
import { options } from '../constants';

function ExampleIsRedactedSelect() {
    const [selectedValue, setOption] = useState({});

    const onSelect = (selectedOption) => {
        setOption(selectedOption);
    };

    return (
        <div>
            <Select
                id="block--is_redacted_select_id"
                isRedacted
                label="Select User"
                onChange={onSelect}
                options={options}
                placeholder="Select Option"
                value={!isEmpty(selectedValue) ? selectedValue : null}
            />
        </div>
    );
}

export default ExampleIsRedactedSelect;
