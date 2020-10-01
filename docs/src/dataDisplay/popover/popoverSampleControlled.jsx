import React, {
    useState,
} from 'react';
import {
    Button,
    Popover,
} from 'react-cm-ui';

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
            <div>
                <Button onClick={toggleOpenTooltip}>Click to Open/Close popover</Button>
            </div>
        </Popover>
    );
}

export default PopoverSample;
