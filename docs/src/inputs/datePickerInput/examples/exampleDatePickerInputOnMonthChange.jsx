import { DatePickerInput } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

function onMonthChanged(month, year) {
    const newMonth = moment()
        .month(month)
        .year(year)
        .format('MMMM YYYY');

    window.alert(`The month was changed!  Now it is ${newMonth}.`);
}

function ExampleDatePickerInputOnMonthChange() {
    return (
        <DatePickerInput
            onMonthChange={onMonthChanged}
        />
    );
}

export default ExampleDatePickerInputOnMonthChange;
