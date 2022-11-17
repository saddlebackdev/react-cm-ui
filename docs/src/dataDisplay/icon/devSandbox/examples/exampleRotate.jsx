import {
    Icon,
} from '@saddlebackchurch/react-cm-ui';
import React from 'react';

function ExampleRotate() {
    return (
        <div>
            <Icon rotate={-90} type="heart" />
            <Icon rotate={180} type="chevron-wh-up" />
        </div>
    );
}

export default ExampleRotate;
