import {
    Button,
    Popover,
} from 'react-cm-ui';
import React from 'react';

function PopoverSample() {
    return (
        <Popover
            content="Wow! Slick Mouse Events"
            mouseEvent="onMouseEnter"
        >
            <Button>
                Hover With A Popover
            </Button>
        </Popover>
    );
}

export default PopoverSample;
