import { Input } from '@saddlebackchurch/react-cm-ui';
import React from 'react';

function ExampleInputType() {
    return (
        <React.Fragment>
            <Input label="Email" type="email" />
            <br />
            <br />
            <Input label="Number: No Negative Numbers" type="number" allowNegativeNumbers={false} style={{ width: 235 }} />
            <br />
            <br />
            <Input label="Number: Min: 25, Max: 99" type="number" min={25} max={99} style={{ width: 235 }} />
            <br />
            <br />
            <Input label="Number: Min: 25, Max: 99, Required" type="number" min={25} max={99} required style={{ width: 235 }} />
            <br />
            <br />
            <Input label="Number: Min: 25, Max: 99, Allow empty value, Required" allowEmptyValueWithRequired type="number" min={25} max={99} required style={{ width: 235 }} />
            <br />
            <br />
            <Input label="Number: No Decimals, Required" type="number" allowDecimals={false} required style={{ width: 235 }} />
            <br />
            <br />
            <Input label="Password" type="password" />
            <br />
            <br />
            <Input label="Telephone" type="tel" />
            <br />
            <br />
            <Input label="Text" type="text" />
        </React.Fragment>
    );
}

export default ExampleInputType;
