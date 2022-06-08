import {
    Icon,
} from 'react-cm-ui';
import React from 'react';

function ExampleOnClick() {
    return (
        <Icon type="activity" onClick={() => console.log('clicked!')} tabIndex={0} />
    );
}

export default ExampleOnClick;
