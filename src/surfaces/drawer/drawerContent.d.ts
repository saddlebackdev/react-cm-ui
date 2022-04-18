import React from 'react';

export interface DrawerContentPropTypes {
    as?: 'div' | 'header' | 'main' | 'section';
    /**
     * The content of the ActionBar.
     */
    children?: React.ReactNode;
    /**
     * Add additional classes to the Content.
     */
    className?: string;
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId?: string;
    id?: string;
    isFiltersRailOpen?: boolean;
    scrollable?: boolean;
    style?: React.CSSProperties;
}

declare const DrawerContent: React.ComponentType<DrawerContentPropTypes>;

export default DrawerContent;
