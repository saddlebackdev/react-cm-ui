import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Grid,
    Select,
    SelectNext,
} from '@saddlebackchurch/react-cm-ui';
import { options } from '../constants';

function ExampleDefaultSelect() {
    const [selectedValue, setOption] = useState({});
    const [selectedNextValue, setNextOption] = useState({});

    return (
        <Grid spacing={2}>
            <Grid.Column>
                <Select
                    id="block--select_id"
                    onChange={setOption}
                    options={options}
                    placeholder="Select"
                    tabIndex={0}
                    value={!isEmpty(selectedValue) ? selectedValue : null}
                />
            </Grid.Column>

            <Grid.Column>
                aaaaaaaaaaaaaaaaaaaaaaaaaa
                <SelectNext
                    error="This is a validation error message"
                    id="block--select_next_id"
                    label="Select Option"
                    name="select_next_example"
                    onChange={setNextOption}
                    options={options}
                    placeholder="Select"
                    required
                    tabIndex={0}
                    value={!isEmpty(selectedNextValue) ? selectedNextValue : null}
                    dropdownMenuMaxHeight="unset"
                />
            </Grid.Column>
            <Grid.Column>
                bbbbbbbbbbbbbbbbbbbbbbbbbb
                <SelectNext
                    disabled
                    id="block--select_next_id"
                    label="Select Option"
                    name="select_next_example"
                    onChange={setNextOption}
                    options={options}
                    placeholder="Select"
                    tabIndex={0}
                    value={!isEmpty(selectedNextValue) ? selectedNextValue : null}
                    dropdownMenuMaxHeight="unset"
                />
            </Grid.Column>
        </Grid>
    );
}

export default ExampleDefaultSelect;
