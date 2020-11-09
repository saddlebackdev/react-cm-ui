import React, {
    useState,
} from 'react';
import {
    Input,
    Tabs,
} from 'react-cm-ui';

const items = [1, 2, 3, 4, 5, 6, 7, 8].map((tabNumber) => ({
    getContent: () => `Example Tab ${tabNumber} content`,
    key: `exampleTab${tabNumber}`,
    // eslint-disable-next-line no-console
    onClick: (clickedTab) => { console.log(`Example Tab ${tabNumber} clicked`, clickedTab); },
    title: `Example Tab ${tabNumber}`,
}));

function ExampleSelectedTabKey() {
    const [selectedTabKey, setSelectedTabKey] = useState(1);
    const selectedTabKeyMaxInput = items.length;

    return (
        <React.Fragment>
            <Tabs
                items={items}
                selectedTabKey={`exampleTab${selectedTabKey}`}
            />
            <Input
                label="Selected Tab"
                min={0}
                max={selectedTabKeyMaxInput}
                type="number"
                value={selectedTabKey}
                onChange={setSelectedTabKey}
            />
        </React.Fragment>
    );
}

export default ExampleSelectedTabKey;
