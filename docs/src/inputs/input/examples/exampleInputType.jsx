import { Input } from '@saddleback/react-cm-ui';
import React from 'react';

function ExampleInputType() {

    return (
        <>
            <Input label="Email" type="email" /><br /><br />
            <Input label="Number" type="number" allowNegativeNumbers={false} style={{ width: 75 }} /><span>Don't Allow Negative Numbers</span><br /><br />
            <Input label="Number" type="number" min={25} max={99} style={{ width: 75 }} /> <span>Min: 25, Max: 99</span><br /><br />
            <Input label="Number" type="number" required min={25} max={99} style={{ width: 75 }} /> <span>Min: 25, Max: 99</span><br /><br />
            <Input label="Number" type="number" allowDecimals={false} required style={{ width: 75 }} /> <span>Don't Allow Decimals</span><br /><br />
            <Input label="Password" type="password" /><br /><br />
            <Input label="Telephone" type="tel" /><br /><br />
            <Input label="Text" type="text" />
        </>
    );
}

export default ExampleInputType;
