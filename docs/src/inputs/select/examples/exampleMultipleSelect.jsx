import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Box,
    Select,
} from '@saddleback/react-cm-ui';
import { options } from '../constants';

function ExampleMultipleSelect() {
    const [selectedValue, setOption] = useState({});

    const onSelect = (selectedOption) => {
        setOption(selectedOption);
    };

    return (
        <Box sx={{ width: '500px' }}>
            <Select
                id="block--multiple_select_id"
                fluid
                multiple
                options={options}
                placeholder="Select multiple options"
                onChange={onSelect}
                value={!isEmpty(selectedValue) ? selectedValue : null}
            />
        </Box>
    );
}

export default ExampleMultipleSelect;
