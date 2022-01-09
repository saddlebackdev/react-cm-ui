import React from 'react';

export interface DrawerActionBarPropTypes {
    /**
     * The content of the ActionBar.
     */
    children?: React.ReactNode;
    /**
     * Add additional classes to the TitleBar.
     */
    className?: string;
    columns: {}[],
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId?: string;
    id?: string;
    style?: {};
}

declare const DrawerActionBar: React.ComponentType<DrawerActionBarPropTypes>;

export default DrawerActionBar;
