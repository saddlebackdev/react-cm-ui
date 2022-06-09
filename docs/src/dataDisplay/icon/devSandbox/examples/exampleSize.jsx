import {
    Icon,
} from 'react-cm-ui';
import React from 'react';

function ExampleSize() {
    return (
        <div>
            <Icon size={64} type="cloud-upload" />
            <Icon size={32} type="heart" />
            <Icon size="xlarge" type="activity" />
            <Icon size="large" type="award" />
            <Icon size="medium" type="book-open" />
            <Icon size="small" type="user" />
            <Icon size="xsmall" type="time" />
            <Icon size="xxsmall" type="check" />
        </div>
    );
}

export default ExampleSize;
