import React from 'react';
import {
    Button,
    Popover,
} from 'react-cm-ui';

function PopoverSample() {
    return (
        <Popover
            content="Some Popover content"
        >
            <Button>
                Some JXS Children
            </Button>
        </Popover>
    );
}

export default PopoverSample;
