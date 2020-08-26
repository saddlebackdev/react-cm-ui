import React, {
    useState,
} from 'react';
import {
    Input,
    NavigationTabs,
} from 'react-cm-ui';
import { items } from '../../../../src/navigation/navigationTabs/__test__/navigationTabsMockUps';

function NavigationTabsSample() {
    const [selectedTabKey, setSelectedTabKey] = useState(1);
    const selectedTabKeyMaxInput = items.length;

    return (
        <React.Fragment>
            <NavigationTabs
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

export default NavigationTabsSample;
