import {
    Icon,
} from '@saddleback/react-cm-ui';
import React from 'react';

function ExampleColor() {
    return (
        <div>
            <Icon color="alert" type="activity" />
            <Icon color="disable" type="heart" />
            <Icon color="highlight" type="caret-down" />
            <Icon color="primary" type="calendar" />
            <Icon color="static" type="cards" />
            <Icon color="success" type="time" />
            <Icon color="warning" type="exclamation" />
            <br />
            <br />

            <Icon color="action" type="circle-filled" />
            <Icon color="condition" type="time" />
            <Icon color="configuration" type="comment" />
            <Icon color="subject" type="heart" />
        </div>
    );
}

export default ExampleColor;
