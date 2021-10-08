/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
import React, {
    useState,
} from 'react';
import { SectionalTabs } from 'react-cm-ui';

const items = [1, 2, 3, 4, 5, 6, 7, 8].map((tabNumber) => ({
    getContent: () => `Example Tab ${tabNumber} content`,
    key: `exampleTab${tabNumber}`,
    // eslint-disable-next-line no-console
    onClick: (tabObject) => { console.log(`Example Tab ${tabNumber} clicked`, tabObject); },
    title: `Example Tab ${tabNumber}`,
}));

function SectionalTabsSample() {

    const [i, si] = useState(items);

    return (
        <div style={{ border: '1px solid red' }}>
            <button
                onClick={() => {
                    console.log('aaaa');
                    const newI = i.map((item) => ({
                        ...item,
                        title: `${item.title} - ${item.title}`,
                    })).reverse();
                    si(newI);
                }}
            >
                change items
            </button>
            <SectionalTabs items={i} />
        </div>
    );
}

export default SectionalTabsSample;
