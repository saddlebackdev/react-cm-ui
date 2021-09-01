import {
    Button,
    Popover,
} from 'react-cm-ui';
import React from 'react';

function PopoverSample() {
    return (
        <Popover
            content="Some Popover Content"
        >
            <Button designVersion={2}>
                Open Popover
            </Button>
        </Popover>
    );
}

export default PopoverSample;
