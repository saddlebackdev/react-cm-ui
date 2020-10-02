import React from 'react';
import SubNavigation from '../../global/subNavigation';

function CardSubNavigation() {
    return (
        <SubNavigation
            firstLevelPath="components"
            secondLevelPath="surfaces"
            thirdLevelLabel="Card"
            thirdLevelPath="card"
        />
    );
}

export default CardSubNavigation;
