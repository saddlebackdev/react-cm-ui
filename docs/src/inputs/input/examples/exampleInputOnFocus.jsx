import { Input } from 'react-cm-ui';
import React from 'react';

function ExampleInputOnFocus() {
    const onInputFocus = () => {
        console.log('Your focus determines your reality.');
    };

    return (
        <Input label="Check It!" onFocus={onInputFocus} />
    );
}

export default ExampleInputOnFocus;
