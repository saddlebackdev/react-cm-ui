import { DatePickerInput } from '@saddleback/react-cm-ui';
import moment from 'moment-timezone';
import React, {
    useCallback,
    useState,
} from 'react';

function ExampleDatePickerInputDisabled() {
    const [dateValue, setDateValue] = useState(moment());

    const onDatePickerInputChange = useCallback(({ date }) => {
        setDateValue(date);
    }, [
        setDateValue,
    ]);

    return (
        <DatePickerInput
            date={dateValue}
            disable
            onChange={onDatePickerInputChange}
        />
    );
}

export default ExampleDatePickerInputDisabled;
