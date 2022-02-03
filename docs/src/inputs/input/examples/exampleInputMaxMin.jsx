import { Input } from 'react-cm-ui';
import React from 'react';

function ExampleInputMaxMin() {
    return (
        <>
            <Input label="How many years has it been since the Reformation?" max={510} type="number" /><br /><br />
            <Input label="Age" max={99} min={0} type="number" value={0} /><br /><br />
            <Input label="Age without spinners" max={99} min={0} type="number" showSpinners={false} value={0} />
        </>
    );
}

export default ExampleInputMaxMin;
