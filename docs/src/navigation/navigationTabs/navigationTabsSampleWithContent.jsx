import React from 'react';
import { NavigationTabs } from 'react-cm-ui';

const items = [1, 2, 3, 4, 5, 6, 7, 8].map((tabNumber) => ({
    getContent: () => `Example Tab ${tabNumber} content`,
    key: `exampleTab${tabNumber}`,
    // eslint-disable-next-line no-console
    onClick: (clickedTab) => { console.log(`Example Tab ${tabNumber} clicked`, clickedTab); },
    title: `Example Tab ${tabNumber}`,
}));

function NavigationTabsSample() {
    return (
        <NavigationTabs
            items={items}
            selectedTabKey={items[0].key}
            withContent
        />
    );
}

export default NavigationTabsSample;
