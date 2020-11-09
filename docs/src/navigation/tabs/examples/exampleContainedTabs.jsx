import {
    Tabs,
} from 'react-cm-ui';
import React from 'react';

function ExampleContainedTabs() {
    return (
        <Tabs
            contained
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

export default ExampleContainedTabs;
