import { Input } from '@saddleback/react-cm-ui';
import React from 'react';

function ExampleInputOnFocus() {
    const onInputFocus = () => {
        // eslint-disable-next-line no-console
        console.log('Your focus determines your reality.');
    };

    return (
        <Input label="Check It!" onFocus={onInputFocus} />
    );
}

export default ExampleInputOnFocus;
