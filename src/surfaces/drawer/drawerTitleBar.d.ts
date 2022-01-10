import React from 'react';

export interface DrawerTitleBarPropTypes {
    /**
     * Add additional classes to the TitleBar.
     */
    className?: string;
    closeButton?: React.ReactNode;
    /**
     * Supply any inline styles to the Close Button.
     */
    closeButtonStyle?: object;
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId?: string;
    style?: React.CSSProperties;
    title?: React.ReactNode | string;
    titleStyle?: object;
}

declare const DrawerTitleBar: React.ComponentType<DrawerTitleBarPropTypes>;

export default DrawerTitleBar;
