import { DatePickerInput } from '@saddlebackchurch/react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

function ExampleDatePickerInputMinDate() {
    return (
        <DatePickerInput
            minDate={moment().subtract(7, 'days')}
        />
    );
}

export default ExampleDatePickerInputMinDate;
