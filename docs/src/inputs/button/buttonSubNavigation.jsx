import React from 'react';
import SubNavigation from '../../global/subNavigation';

function PageSubNavigation() {
    return (
        <SubNavigation
            firstLevelPath="components"
            secondLevelPath="inputs"
            thirdLevelLabel="Button"
            thirdLevelPath="button"
        />
    );
}

export default PageSubNavigation;
