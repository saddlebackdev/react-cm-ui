import {
    camelCase,
} from 'lodash';
import React from 'react';
import ComponentApi from '../../../global/componentApi';
import Main from '../../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawer';
import { default as actionBarDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerActionBar';
import { default as containerDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerContainer';
import { default as contentDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerContent';
import { default as dataCardsDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerDataCards';
import { default as dataGridDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerDataGrid';
import { default as dataGroupsDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerDataGroups';
import { default as detailsWindowDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerDetailsWindow';
import { default as filtersDrawerDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerFiltersDrawer';
import { default as filtersRailDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerFiltersRail';
import { default as tabsDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerTabs';
import { default as titleBarDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerTitleBar';
import { default as wingDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/drawer/drawerWing';
/* eslint-enable import/no-named-default, import/extensions */

function DocsApi() {
    const {
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <ComponentApi
                    docs={[
                        rootDoc,
                        actionBarDoc,
                        containerDoc,
                        contentDoc,
                        dataCardsDoc,
                        dataGridDoc,
                        dataGroupsDoc,
                        detailsWindowDoc,
                        filtersDrawerDoc,
                        filtersRailDoc,
                        tabsDoc,
                        titleBarDoc,
                        wingDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsApi;
