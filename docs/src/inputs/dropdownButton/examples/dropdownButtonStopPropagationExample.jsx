/* eslint-disable import/no-unresolved */
import {
    Card,
    DropdownButton,
} from '@saddlebackchurch/react-cm-ui';
import React, { useState } from 'react';

function DropdownButtonStopPropagationExample() {
    const [counter, setCounter] = useState(0);

    const updateColor = () => {
        setCounter((value) => value + 1);
    };

    return (
        <Card onClick={updateColor}>
            <div style={{ userSelect: 'none', marginBottom: '15px' }}>
                <span>Click on the card! Clicked:</span>
                <span>{counter}</span>
            </div>
            <DropdownButton stopPropagation color="success" label="Stop Propagation" designVersion={2}>
                <DropdownButton.Option>Option 01</DropdownButton.Option>
                <DropdownButton.Option>Option 02</DropdownButton.Option>
            </DropdownButton>
            <p />
            <DropdownButton color="success" label="Regular Dropdown" designVersion={2}>
                <DropdownButton.Option>Option 01</DropdownButton.Option>
                <DropdownButton.Option>Option 02</DropdownButton.Option>
            </DropdownButton>
        </Card>
    );
}

export default DropdownButtonStopPropagationExample;
