import {
    Icon,
    Input,
} from '@saddlebackchurch/react-cm-ui';
import React from 'react';

function ExampleInputIconCustom() {
    const onIconClick = () => {
        window.alert('Look at my action.');
    };

    return (
        <Input
            icon={(
                <Icon
                    fitted
                    type="calendar"
                    onClick={onIconClick}
                />
            )}
        />
    );
}

export default ExampleInputIconCustom;
