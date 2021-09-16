import {
    Button,
    Popover,
} from 'react-cm-ui';
import React from 'react';

function PopoverMouseEnterSample() {
    return (
        <Popover
            content="Wow! Slick Mouse Events"
            mouseEvent="onMouseEnter"
        >
            <Button designVersion={2}>
                Hover With A Popover
            </Button>
        </Popover>
    );
}

export default PopoverMouseEnterSample;
