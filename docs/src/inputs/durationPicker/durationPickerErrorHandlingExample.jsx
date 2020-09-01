import { isNil } from 'lodash';
import { DurationPicker } from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

const ERROR_MESSAGE = 'This value is required';

class DurationPickerErrorHandlingExample extends React.PureComponent {
    constructor() {
        super();

        this.onDurationPickerChange = this.onDurationPickerChange.bind(this);

        this.state = {
            durationPickerValue: null,
            errorMessage: ERROR_MESSAGE,
        };
    }

    onDurationPickerChange(value) {
        const hasError = isNil(value) ||
            !moment.isDuration(value) ||
            value.valueOf() === moment.duration().valueOf();

        this.setState({
            durationPickerValue: value,
            errorMessage: hasError ? ERROR_MESSAGE : null,
        });
    }

    render() {
        const {
            durationPickerValue,
            errorMessage,
        } = this.state;

        return (
            <DurationPicker
                error={errorMessage}
                label="Tasks due after:"
                onChange={this.onDurationPickerChange}
                required
                showMinutes
                value={durationPickerValue}
            />
        );
    }
}

export default DurationPickerErrorHandlingExample;
