import {
    Icon,
} from '@saddlebackchurch/react-cm-ui';
import React from 'react';

function ExampleTitle() {
    return (
        <div>
            <Icon type="activity" title="I am an Activity Icon!" />
            <Icon type="activity" title={false} />
        </div>
    );
}

export default ExampleTitle;
