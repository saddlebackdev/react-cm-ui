import MuiTimeline from '@material-ui/lab/Timeline';
import React from 'react';

/**
 * The timeline displays a list of events in chronological order.
 */
function Timeline(props) {
    return (
        <MuiTimeline
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
}

export default Timeline;
