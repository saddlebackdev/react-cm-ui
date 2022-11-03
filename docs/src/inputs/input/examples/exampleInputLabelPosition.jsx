import { Input } from '@saddleback/react-cm-ui';
import React from 'react';

function ExampleInputLabelPosition() {

    return (
        <>
            <Input label="Bottom Label" labelPosition="bottom" /><br /><br />
            <Input label="Top Label" labelPosition="top" />
        </>
    );
}

export default ExampleInputLabelPosition;
