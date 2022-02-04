import { Input } from 'react-cm-ui';
import React from 'react';

function ExampleInputOnClick() {
    const onInputClick = () => {
        // eslint-disable-next-line no-alert
        window.alert('You did it! You clicked the input.');
    };

    return (
        <Input label="Check It!" onClick={onInputClick} />
    );
}

export default ExampleInputOnClick;
