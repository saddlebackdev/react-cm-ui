import { Input } from '@saddlebackchurch/react-cm-ui';
import React from 'react';

function ExampleInputIsRedacted() {
    return (
        <Input isRedacted label="Label" value="Sensitive data" />
    );
}

export default ExampleInputIsRedacted;
