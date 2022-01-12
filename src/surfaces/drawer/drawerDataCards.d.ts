import React from 'react';

export interface DrawerDataCardPropTypes {
    cardProps?: Function;
    className?: string;
    columns: object[],
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId?: string;
    data: object[],
    style?: React.CSSProperties;
}

declare const DrawerDataCard: React.ComponentType<DrawerDataCardPropTypes>;

export default DrawerDataCard;
