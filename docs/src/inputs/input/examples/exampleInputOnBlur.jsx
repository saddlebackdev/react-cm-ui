import { Input } from 'react-cm-ui';
import React from 'react';

function ExampleInputOnBlur() {
    const onInputBlur = () => {
        window.alert('Are you sure you are done?');
    };

    return (
        <Input label="Check It!" onBlur={onInputBlur} />
    );
}

export default ExampleInputOnBlur;
