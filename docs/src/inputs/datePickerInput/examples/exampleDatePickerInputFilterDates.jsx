import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

function isWeekend(date) {
    const day = date.day();
    return day === 0 || day === 6;
}

function ExampleDatePickerInputFilterDates() {
    return (
        <DatePickerInput
            filterDates={isWeekend}
        />
    );
}

export default ExampleDatePickerInputFilterDates;
