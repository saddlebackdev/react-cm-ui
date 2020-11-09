import {
    Tabs,
} from 'react-cm-ui';
import React from 'react';

function ExampleStandardTabsDarkBackground() {
    return (
        <Tabs
            inverse
            items={[
                {
                    key: '0',
                    title: 'Label',
                },
                {
                    key: '1',
                    title: 'Label',
                },
                {
                    key: '2',
                    title: 'Label',
                },
            ]}
        />
    );
}

export default ExampleStandardTabsDarkBackground;
