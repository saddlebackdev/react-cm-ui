import { Input } from 'react-cm-ui';
import React from 'react';

function ExampleInputOnBlur() {
    const onInputBlur = () => {
        // eslint-disable-next-line no-alert
        window.alert('Are you sure you are done?');
    };

    return (
        <Input label="Check It!" onBlur={onInputBlur} />
    );
}

export default ExampleInputOnBlur;
