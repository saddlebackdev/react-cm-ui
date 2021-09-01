import React from 'react';
import {
    Button,
    Icon,
    Popover,
} from 'react-cm-ui';

function PopoverSample() {
    return (
        <Popover
            content={(
                <div
                    style={{
                        border: '1px solid red',
                        textAlign: 'center',
                    }}
                >
                    <Icon type="comment" />
                    Some cool tooltip content
                    <Button
                        version={2}
                    >
                        Hi
                    </Button>
                </div>
            )}
        >
            <Button
                version={2}
            >
                Some JSX Children
            </Button>
        </Popover>
    );
}

export default PopoverSample;
