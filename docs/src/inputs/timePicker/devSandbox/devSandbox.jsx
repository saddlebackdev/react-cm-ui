import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import React from 'react';
import Example from '../../../global/example';
import ExampleDisabledTimePicker from '../examples/exampleDisabledTimePicker';
import ExampleNestedTimePicker from '../examples/exampleNestedTimePicker';
import ExampleRangeTimePicker from '../examples/exampleRangeTimePicker';
import ExampleTimePickerWithCustomTimeZoneOptions from '../examples/exampleTimePickerWithCustomTimeZoneOptions';
import ExampleTimePickerWithoutTimeZoneSelect from '../examples/exampleTimePickerWithoutTimeZoneSelect';
import ExampleTimePickerWithZoneMatchProp from '../examples/exampleTimePickerWithZoneMatchProp';
import Heading from '../../../global/heading';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/select/select';
/* eslint-enable import/no-named-default, import/extensions */

function TimePickerDevSandbox() {
    const {
        description,
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {description}
                    </Typography>

                    <Heading
                        anchorLink="time-picker-disabled"
                        variant="h2"
                    >
                        Disabled Time Picker
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleDisabledTimePicker').default}
                    >
                        <ExampleDisabledTimePicker />
                    </Example>

                    <Heading
                        anchorLink="time-picker-nested"
                        variant="h2"
                    >
                        Nested Time Picker
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleNestedTimePicker').default}
                    >
                        <ExampleNestedTimePicker />
                    </Example>

                    <Heading
                        anchorLink="time-picker-range"
                        variant="h2"
                    >
                        Time Range
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleRangeTimePicker').default}
                    >
                        <ExampleRangeTimePicker />
                    </Example>

                    <Heading
                        anchorLink="time-picker-custom-time-zone-options"
                        variant="h2"
                    >
                        Custom Time Zone Options
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleTimePickerWithCustomTimeZoneOptions').default}
                    >
                        <ExampleTimePickerWithCustomTimeZoneOptions />
                    </Example>

                    <Heading
                        anchorLink="time-picker-zone-match-prop"
                        variant="h2"
                    >
                        Zone Match Prop
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleTimePickerWithZoneMatchProp').default}
                    >
                        <ExampleTimePickerWithZoneMatchProp />
                    </Example>

                    <Heading
                        anchorLink="time-picker-suppress-time-zone-select"
                        variant="h2"
                    >
                        Suppress Time Zone Select
                    </Heading>

                    <Example
                        rawCode={require('!!raw-loader!../examples/exampleTimePickerWithoutTimeZoneSelect').default}
                    >
                        <ExampleTimePickerWithoutTimeZoneSelect />
                    </Example>

                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default TimePickerDevSandbox;
