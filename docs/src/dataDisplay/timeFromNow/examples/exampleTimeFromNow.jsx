import {
    TimeFromNow,
} from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';

function ExampleTimeFromNow() {
    return (
        <TimeFromNow
            className="block_name--element_name"
            date={moment(new Date())}
            id="block_name--element_name"
            locale="en"
        />
    );
}

export default ExampleTimeFromNow;
