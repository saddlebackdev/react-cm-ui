import { Input } from 'react-cm-ui';
import React from 'react';

function ExampleInputOnKeyDown() {
    const onInputKeyDown = (event) => {
        window.alert('You just pressed the ' + event.key + ' key');
    };

    return (
        <Input label="Check It!" onKeyDown={onInputKeyDown} />
    );
}

export default ExampleInputOnKeyDown;
