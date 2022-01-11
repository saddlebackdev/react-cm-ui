import { DatePickerInput } from 'react-cm-ui';
import React from 'react';

function ExampleDatePickerInputFluid() {
    return (
        <div
            style={{
                backgroundColor: '#f6f7f8',
                border: 'solid 1px #dbe0e3',
                padding: '11px 22px 22px',
                width: '33.33%',
            }}
        >
            <p
                style={{
                    color: '#97a4ab',
                    marginTop: 0,
                }}
            >
                Some Container
            </p>

            <DatePickerInput
                label="Regular"
            />

            <DatePickerInput
                fluid
                label="Fluid"
                style={{ marginTop: 22 }}
            />
        </div>
    );
}

export default ExampleDatePickerInputFluid;
