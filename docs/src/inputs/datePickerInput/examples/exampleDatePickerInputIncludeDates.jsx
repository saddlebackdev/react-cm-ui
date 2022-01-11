import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

function ExampleDatePickerInputIncludeDates() {
    return (
        <DatePickerInput
            includeDates={[
                moment().subtract(1, 'days'),
                moment().subtract(2, 'days'),
                moment().subtract(3, 'days'),
                moment().subtract(4, 'days'),
            ]}
        />
    );
}

export default ExampleDatePickerInputIncludeDates;
