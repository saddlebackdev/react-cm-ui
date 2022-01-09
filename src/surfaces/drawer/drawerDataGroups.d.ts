import { string } from 'prop-types';
import React from 'react';

export interface DrawerDataGroupsPropTypes {
    bleed?: boolean;
    className?: string;
    columns: {
        className?: string;
        expandableSections: {
            header?: string;
            iconType?: string;
            iconColor?: string;
            rows: {
                header?: string;
                rows: {
                    accessor: React.ReactNode | string;
                    className?: string;
                    fieldName: string;
                    id?: string;
                    header?: string;
                    iconType?: string;
                    iconColor?: string;
                    iconSize: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall' | number;
                    style?: {};
                }[];
            }[];
        }[];
        id?: string;
        isExpandable?: boolean;
        header?: string;
        rows: {
            accessor: React.ReactNode | string;
            className?: string;
            fieldName: string;
            id?: string;
            header?: string;
            iconType?: string;
            iconColor?: string;
            iconSize: 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall' | number;
            style?: {};
        }[];
        style?: {};
    };
    data: {};
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId?: string;
    style?: {};
}

declare const DrawerDataGroups: React.ComponentType<DrawerDataGroupsPropTypes>;

export default DrawerDataGroups;
