import React from 'react';
import SubNavigation from '../../global/subNavigation';

function DrawerSubNavigation() {
    return (
        <SubNavigation
            firstLevelPath="components"
            secondLevelPath="surfaces"
            thirdLevelLabel="Drawer"
            thirdLevelPath="drawer"
        />
    );
}

export default DrawerSubNavigation;
