import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from 'react-cm-ui';
import React from 'react';

function ExampleTimeline() {
    return (
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    Eat
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                    Code
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>

                <TimelineContent>
                    Sleep
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default ExampleTimeline;
