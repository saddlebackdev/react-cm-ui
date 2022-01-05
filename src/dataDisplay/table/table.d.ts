import React from 'react';

export interface TablePropTypes {
    /**
     * Basic (default) styling.
     */
    basic?: boolean;
    /**
     * If `true`, all columns will be divided.
     */
    celled?: boolean;
    /**
     * The content of the Table.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the Table.
     */
    classes?: {
        root: string;
        tableSticky: string;
        tableStickyColumns: string;
    };
    /**
     * Add additional classes to the Table.
     */
    className?: string;
    /**
     * If `true`, applies `width: auto` to the Table.
     */
    collapsing?: boolean;
    /**
     * If `true`, the far left column is divided from the rest of the columns.
     */
    definition?: boolean;
    /**
     * If `true`, columns will be evenly spaced.
     */
    fixed?: boolean;
    /**
     * Change the font size of text in the Table.
     */
    fontSize?: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall';
    /**
     * Deprecated prop.
     */
    fullWidth?: boolean;
    /**
     * Add an id to the Table.
     */
    id?: string;
    /**
     * Table rows and cells can be highlighted as if they have been selected.
     */
    selectable?: boolean;
    /**
     * Truncate copy within cells in the Table
     */
    singleLine?: boolean;
    /**
     * Change the cells vertical size in the Table.
     */
    size?: 'l' | 'large' | 'm' | 'medium' | 's' | 'small';
    /**
     * Deprecated prop.
     */
    stackable?: boolean;
    /**
     * A table can have one or more columns defined as 'sticky' so that they stay fixed while the
     * user horizontally scrolls to see the remaining columns.
     */
    stickyColumnCount?: number;
    /**
     * Resizable cell default percentage width related to the Table container size.
     */
    resizableColumnWidthPercentage?: number | null;
    /**
     * If `true` or `very`, the Table will bleed off the edge.
     */
    stretch?: boolean | 'very';
    /**
     * Supply any inline styles to the Table.
     */
    style: {};
    theme: {
        palette: {};
    };
}

declare const Table: React.ComponentType<TablePropTypes>;

export default Table;
