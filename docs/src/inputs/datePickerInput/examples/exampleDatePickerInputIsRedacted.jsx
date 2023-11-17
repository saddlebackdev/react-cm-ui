import { DatePickerInput } from '@saddlebackchurch/react-cm-ui';
import React from 'react';

function ExampleDatePickerInputIsRedacted() {
    return (
        <DatePickerInput
            isRedacted
            label="Sensitive data"
        />
    );
}

export default ExampleDatePickerInputIsRedacted;
