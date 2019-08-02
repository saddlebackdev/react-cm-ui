'use strict';

import { TitleBar } from 'react-cm-ui';
import DrawerSubNavigation from './DrawerSubNavigation.js';
import Main from '../app/main.js';
import React from 'react';

class ModulesDrawerFiltersDrawer extends React.Component {
    render() {
        return (
            <Main page="headers">
                <TitleBar title="Drawer" />

                <DrawerSubNavigation />

            </Main>
        );
    }
}

export default ModulesDrawerFiltersDrawer;
