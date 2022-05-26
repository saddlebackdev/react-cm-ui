import React from 'react';
import DrawerActionBar from './drawerActionBar';
import DrawerContainer from './drawerContainer';
import DrawerContent from './drawerContent';
import DrawerDataCards from './drawerDataCards';
import DrawerDataGrid from './drawerDataGrid';
import DrawerDataGroups from './drawerDataGroups';
import DrawerDeprecatedFiltersDrawer from '../drawerDeprecated/drawerDeprecatedFiltersDrawer';
import DrawerDetailsWindow from './drawerDetailsWindow';
import DrawerFiltersDrawer from './drawerFiltersDrawer';
import DrawerFiltersRail from './drawerFiltersRail';
import DrawerNavigation from './drawerNavigation';
import DrawerTitleBar from './drawerTitleBar';
import DrawerWing from './drawerWing';

export interface DrawerPropTypes {
    /**
     * The content of the Drawer.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the Drawer.
     */
    classes?: {
        root: string;
    };
    /**
     * Add additional classes to the Drawer.
     */
    className?: string;
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId?: string;
    dimmer?: boolean;
    isOpen: boolean;
    isModal?: boolean;
    maxHeight?: number;
    maxWidth?: number | string;
    onClose?: Function;
    onCloseComplete?: Function;
    onOpenComplete?: Function;
    positionX?: 'left' | 'right';
    positionY?: 'bottom' | 'top';
    positionYOffset?: number;
    shadowSize?: 'large' | 'small' | 'xsmall';
    /**
     * If `true`, Drawer will close if user clicks on the outside it.
     */
    shouldCloseOnClickOutside?: boolean;
    /**
     * Supply any inline styles to the Drawer.
     */
    style?: React.CSSProperties;
    theme?: {
        zIndex: {
            drawer: number;
        };
    };
    wing?: React.ReactNode;
}

export interface DrawerComponent extends React.FC<DrawerPropTypes> {
    ActionBar: typeof DrawerActionBar
    Container: typeof DrawerContainer
    Content: typeof DrawerContent
    DataCards: typeof DrawerDataCards
    DataGrid: typeof DrawerDataGrid
    DataGroups: typeof DrawerDataGroups
    DeprecatedFiltersDrawer: typeof DrawerDeprecatedFiltersDrawer
    DetailsWindow: typeof DrawerDetailsWindow
    FiltersDrawer: typeof DrawerFiltersDrawer
    FiltersRail: typeof DrawerFiltersRail
    Navigation: typeof DrawerNavigation
    TitleBar: typeof DrawerTitleBar
    Wing: typeof DrawerWing
}

declare const Drawer: DrawerComponent;

export default Drawer;
