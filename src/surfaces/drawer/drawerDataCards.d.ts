import React from 'react';

export interface DrawerDataCardPropTypes {
    cardProps?: Function;
    className?: string;
    columns: {}[],
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId?: string;
    data: {}[],
    style?: {};
}

declare const DrawerDataCard: React.ComponentType<DrawerDataCardPropTypes>;

export default DrawerDataCard;
