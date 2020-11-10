import {
    Tabs,
} from 'react-cm-ui';
import React from 'react';

function ExampleWithContentTabs() {
    return (
        <Tabs
            items={[
                {
                    getContent: () => 'Example Tab 1 content',
                    key: '0',
                    title: 'Label',
                },
                {
                    getContent: () => 'Example Tab 2 content',
                    key: '1',
                    title: 'Label',
                },
                {
                    getContent: () => 'Example Tab 3 content',
                    key: '2',
                    title: 'Label',
                },
            ]}
            withContent
        />
    );
}

export default ExampleWithContentTabs;
