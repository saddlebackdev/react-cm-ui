import { DatePickerInput } from '@saddlebackchurch/react-cm-ui';
import moment from 'moment-timezone';
import React, {
    useCallback,
    useState,
} from 'react';

function ExampleDatePickerInputRange() {
    const [dateRangeFrom, setDateRangeFrom] = useState(moment());
    const [dateRangeTo, setDateRangeTo] = useState(moment());

    const onDatePickerInputChange = useCallback(({ dateFrom, dateTo }) => {
        setDateRangeFrom(dateFrom);
        setDateRangeTo(dateTo);
    }, [
        setDateRangeFrom,
        setDateRangeTo,
    ]);

    return (
        <React.Fragment>
            <DatePickerInput
                dateFrom={dateRangeFrom}
                dateTo={dateRangeTo}
                label="From"
                onChange={onDatePickerInputChange}
                rangeFrom
            />

            <DatePickerInput
                dateFrom={dateRangeFrom}
                dateTo={dateRangeTo}
                label="To"
                onChange={onDatePickerInputChange}
                rangeTo
                style={{ marginLeft: 22 }}
            />
        </React.Fragment>
    );
}

export default ExampleDatePickerInputRange;
