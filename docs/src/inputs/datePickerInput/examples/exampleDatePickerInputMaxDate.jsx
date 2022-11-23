import { DatePickerInput } from '@saddlebackchurch/react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

function ExampleDatePickerInputMaxDate() {
    return (
        <DatePickerInput
            maxDate={moment()}
        />
    );
}

export default ExampleDatePickerInputMaxDate;
