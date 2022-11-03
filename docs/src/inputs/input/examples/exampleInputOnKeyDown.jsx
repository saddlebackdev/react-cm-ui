import { Input } from '@saddleback/react-cm-ui';
import React from 'react';

function ExampleInputOnKeyDown() {
    const onInputKeyDown = (event) => {
        // eslint-disable-next-line no-alert
        window.alert('You just pressed the ' + event.key + ' key');
    };

    return (
        <Input label="Check It!" onKeyDown={onInputKeyDown} />
    );
}

export default ExampleInputOnKeyDown;
