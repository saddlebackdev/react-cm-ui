import { number, string } from 'prop-types';
import React from 'react';

export interface DrawerDataGridPropTypes {
    bleed?: boolean;
    classes?: {
        bleed?: string;
        root?: string;
    };
    className?: string;
    columns: {}[];
    data: {}[] | {};
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId?: string;
    fontSize?: string;
    id?: string;
    minWidth?: number;
    moduleType?: 'drawer' | 'page';
    resizableColumnWidthPercentage?: number;
    rowProps?: Function;
    size?: 'small' | 'medium';
    sortable?: {
        disabled?: boolean;
        filter?: string;
        group?: string;
        handle?: boolean;
        onChange?: Function;
        sort?: boolean;
    }[];
    small?: boolean;
    stickyColumnWidth?: number;
    stickyColumns?: number;
    stretch?: 'very' | boolean;
    style?: {};
}

declare const DrawerDataGrid: React.ComponentType<DrawerDataGridPropTypes>;

export default DrawerDataGrid;
