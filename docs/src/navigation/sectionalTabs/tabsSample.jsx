import React from 'react';
import { Tabs } from 'react-cm-ui';

const items = [1, 2, 3, 4, 5, 6, 7, 8].map((tabNumber) => ({
    getContent: () => `Example Tab ${tabNumber} content`,
    key: `exampleTab${tabNumber}`,
    // eslint-disable-next-line no-console
    onClick: (tabObject) => { console.log(`Example Tab ${tabNumber} clicked`, tabObject); },
    title: `Example Tab ${tabNumber}`,
}));

function TabsSample() {
    return (
        <Tabs items={items} />
    );
}

export default TabsSample;
