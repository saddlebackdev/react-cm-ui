import {
    Icon,
} from 'react-cm-ui';
import React from 'react';

function ExampleAlign() {
    return (
        <div>
            <Icon align="left" type="activity" />
            <Icon align="left" type="award" />
            <Icon align="left" type="user" />
            <br />
            <br />

            <div style={{ textAlign: 'right' }}>
                <Icon align="right" type="activity" />
                <Icon align="right" type="award" />
                <Icon align="right" type="user" />
            </div>
        </div>
    );
}

export default ExampleAlign;
