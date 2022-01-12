import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

function ExampleDatePickerInputLocale() {
    return (
        <DatePickerInput
            locale={moment().locale()}
        />
    );
}

export default ExampleDatePickerInputLocale;
