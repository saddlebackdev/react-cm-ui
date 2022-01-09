import React from 'react';

export interface DrawerDataGridPropTypes {
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
     dataTestId?: string;
     id?: string;
}

declare const DrawerDataGrid: React.ComponentType<DrawerDataGridPropTypes>;

export default DrawerDataGrid;
