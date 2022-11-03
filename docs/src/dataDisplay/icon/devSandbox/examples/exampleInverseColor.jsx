import {
    Icon,
} from '@saddleback/react-cm-ui';
import React from 'react';

function ExampleInverseColor() {
    return (
        <div>
            <Icon color="alert" inverse type="activity" />
            <Icon color="disable" inverse type="heart" />
            <Icon color="highlight" inverse type="caret-down" />
            <Icon color="primary" inverse type="calendar" />
            <Icon color="static" inverse type="cards" />
            <Icon color="success" inverse type="time" />
            <Icon color="warning" inverse type="exclamation" />
            <br />
            <br />

            <Icon color="action" inverse type="circle-filled" />
            <Icon color="condition" inverse type="time" />
            <Icon color="configuration" inverse type="comment" />
            <Icon color="subject" inverse type="heart" />
        </div>
    );
}

export default ExampleInverseColor;
