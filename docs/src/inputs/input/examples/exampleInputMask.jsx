import { Input } from '@saddleback/react-cm-ui';
import React from 'react';

function ExampleInputMask() {

    return (
        <Input
            guide={true}
            keepCharPositions={true}
            label="Phone Number"
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholder="(555) 495-3947"
        />
    );
}

export default ExampleInputMask;
