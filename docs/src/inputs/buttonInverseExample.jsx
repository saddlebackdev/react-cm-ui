import { Button } from 'react-cm-ui';
import React from 'react';
import Block from '../global/block';

function ButtonInverseExample() {
    return (
        <Block inverse style={{ marginTop: '33px' }}>
            <Button color="alert" inverse>Alert</Button>
            <Button color="alternate" inverse>Alternate</Button>
            <Button color="disable" inverse>Disable</Button>
            <Button color="light" inverse>Light</Button>
            <Button color="outline" inverse>Outline</Button>
            <Button color="primary" inverse>Primary</Button>
            <Button color="secondary" inverse>Secondary</Button>
            <Button color="success" inverse>Success</Button>
            <Button color="transparent" inverse>Transparent</Button>
            <Button color="warning" inverse>Warning</Button>
        </Block>
    );
}

export default ButtonInverseExample;
