import React from 'react';
import { NavigationTabs } from 'react-cm-ui';
import { items } from '../../../../src/navigation/navigationTabs/__test__/navigationTabsMockUps';

function NavigationTabsSample() {
    return (
        <NavigationTabs items={items} />
    );
}

export default NavigationTabsSample;
