import React, {
    useState,
} from 'react';
import {
    Button,
    Popover,
} from '@saddlebackchurch/react-cm-ui';

function PopoverSample() {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    function toggleOpenTooltip() {
        setIsTooltipOpen((prevIsTooltipOpen) => !prevIsTooltipOpen);
    }

    return (
        <Popover
            content={(
                <div>
                    Some cool tooltip content
                </div>
            )}
            open={isTooltipOpen}
        >
            <Button onClick={toggleOpenTooltip} designVersion={2}>
                Click to Open/Close popover
            </Button>
        </Popover>
    );
}

export default PopoverSample;
