import React from 'react';
import { NavigationTabs } from 'react-cm-ui';

const items = [
    {
        key: 'exampleTab1',
        title: 'Example Tab 1',
        getContent: () => 'Example Tab 1 content',
        onClick: (clickedTab) => { console.log('Example Tab 1 clicked', clickedTab) },
    },
    {
        key: 'exampleTab2',
        title: 'Example Tab 2',
        getContent: () => 'Example Tab 2 content',
        onClick: (clickedTab) => { console.log('Example Tab 2 clicked', clickedTab); },
    },
    {
        key: 'exampleTab3',
        title: 'Example Tab 3',
        getContent: () => 'Example Tab 3 content',
        onClick: (clickedTab) => { console.log('Example Tab 3 clicked', clickedTab); },
    },
    {
        key: 'exampleTab4',
        title: 'Example Tab 4',
        getContent: () => 'Example Tab 4 content',
        onClick: (clickedTab) => { console.log('Example Tab 4 clicked', clickedTab); },
    },
    {
        key: 'exampleTab5',
        title: 'Example Tab 5',
        getContent: () => 'Example Tab 5 content',
        onClick: (clickedTab) => { console.log('Example Tab 5 clicked', clickedTab); },
    },
    {
        key: 'exampleTab6',
        title: 'Example Tab 6',
        getContent: () => 'Example Tab 6 content',
        onClick: (clickedTab) => { console.log('Example Tab 6 clicked', clickedTab); },
    },
    {
        key: 'exampleTab7',
        title: 'Example Tab 7',
        getContent: () => 'Example Tab 7 content',
        onClick: (clickedTab) => { console.log('Example Tab 7 clicked', clickedTab); },
    },
    {
        key: 'exampleTab8',
        title: 'Example Tab 8',
        getContent: () => 'Example Tab 8 content',
        onClick: (clickedTab) => { console.log('Example Tab 8 clicked', clickedTab); },
    },
];

function NavigationTabsSample() {
    return (
        <NavigationTabs items={items} />
    );
}

export default NavigationTabsSample;
