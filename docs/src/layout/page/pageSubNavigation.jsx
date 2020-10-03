import React from 'react';
import SubNavigation from '../../global/subNavigation';

function PageSubNavigation() {
    return (
        <SubNavigation
            firstLevelPath="components"
            secondLevelPath="layout"
            thirdLevelLabel="Page"
            thirdLevelPath="page"
        />
    );
}

export default PageSubNavigation;
