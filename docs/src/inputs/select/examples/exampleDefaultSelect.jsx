import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import {
    Grid,
    Select,
    SelectNext,
} from '@saddlebackchurch/react-cm-ui';
import { options } from '../constants';
import { Box } from '../../../../../src';

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
            <Grid.Column>
                cccccccccccccccccccccccccc
                <SelectNext
                    clearable
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
            <Grid.Column>
                dddddddddddddddddddddddddd
                <SelectNext
                    id="block--select_next_id"
                    label="Select Option"
                    name="select_next_example"
                    onChange={setNextOption}
                    options={options}
                    placeholder="Select"
                    searchable
                    tabIndex={0}
                    value={!isEmpty(selectedNextValue) ? selectedNextValue : null}
                    dropdownMenuMaxHeight="unset"
                />
            </Grid.Column>
            <br />
            <Grid.Column>
                eeeeeeeeeeeeeeeeeeeeeeeeee
                <Box sx={{ width: '500px' }}>
                    <SelectNext
                        id="block--select_next_id"
                        label="Select Option"
                        name="select_next_example"
                        disabled
                        onChange={setNextOption}
                        options={options}
                        placeholder="Select"
                        fluid
                        multiple
                        tabIndex={0}
                        underline
                        value={!isEmpty(selectedNextValue) ? selectedNextValue : null}
                        dropdownMenuMaxHeight="unset"
                    />
                </Box>
            </Grid.Column>
            <Grid.Column>
                eeeeeeeeeeeeeeeeeeeeeeeeee
                <Box sx={{ width: '500px' }}>
                    <Select
                        id="block--multiple_select_id"
                        fluid
                        multiple
                        underline
                        options={options}
                        placeholder="Select multiple options"
                        onChange={setOption}
                        value={!isEmpty(selectedValue) ? selectedValue : null}
                    />
                </Box>
            </Grid.Column>
            <Grid.Column>
                ffffffffffffffffffffffffff
                <SelectNext
                    creatable
                    searchable
                    clearable
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
            <Grid.Column>
                gggggggggggggggggggggggggg
                <SelectNext
                    id="block--select_next_id"
                    isRedacted
                    label="Select Option"
                    name="select_next_example"
                    onChange={setNextOption}
                    options={options}
                    placeholder="Select"
                    tabIndex={0}
                    underline
                    value={!isEmpty(selectedNextValue) ? selectedNextValue : null}
                    dropdownMenuMaxHeight="unset"
                />
            </Grid.Column>
        </Grid>
    );
}

export default ExampleDefaultSelect;
