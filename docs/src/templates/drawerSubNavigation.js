import { browserHistory } from 'react-router';
import React from 'react';
import { SubNavigation } from 'react-cm-ui';

class ModulesDrawerSubNavigation extends React.PureComponent {
    static onSubNavClick(index) {
        const drawerLocation = '/templates/drawer';

        switch (index) {
            case 1:
                browserHistory.push(`${drawerLocation}/action-bar`);

                break;
            case 2:
                browserHistory.push(`${drawerLocation}/content`);

                break;
            case 3:
                browserHistory.push(`${drawerLocation}/data-cards`);

                break;
            case 4:
                browserHistory.push(`${drawerLocation}/data-grid`);

                break;
            case 5:
                browserHistory.push(`${drawerLocation}/data-groups`);

                break;
            case 6:
                browserHistory.push(`${drawerLocation}/details-window`);

                break;
            case 7:
                browserHistory.push(`${drawerLocation}/filters-drawer`);

                break;
            case 8:
                browserHistory.push(`${drawerLocation}/navigation`);

                break;
            case 9:
                browserHistory.push(`${drawerLocation}/sticky`);

                break;
            case 10:
                browserHistory.push(`${drawerLocation}/title-bar`);

                break;
            case 11:
                browserHistory.push(`${drawerLocation}/wing`);

                break;
            default:
                browserHistory.push(`${drawerLocation}/`);

                break;
        }
    }

    render() {
        const { pathname } = window.location;
        const pathnameSegments = pathname.split('/');
        const pathnameThirdSegment = pathnameSegments[3];
        let itemSelected;

        switch (pathnameThirdSegment) {
            case 'action-bar':
                itemSelected = 1;

                break;
            case 'content':
                itemSelected = 2;

                break;
            case 'data-cards':
                itemSelected = 3;

                break;
            case 'data-grid':
                itemSelected = 4;

                break;
            case 'data-groups':
                itemSelected = 5;

                break;
            case 'details-window':
                itemSelected = 6;

                break;
            case 'filters-drawer':
                itemSelected = 7;

                break;
            case 'navigation':
                itemSelected = 8;

                break;
            case 'sticky':
                itemSelected = 9;

                break;
            case 'title-bar':
                itemSelected = 10;

                break;
            case 'wing':
                itemSelected = 11;

                break;
            default:
                itemSelected = 0;
        }

        return (
            <SubNavigation
                onClick={ModulesDrawerSubNavigation.onSubNavClick}
                selected={itemSelected}
                style={{ marginBottom: '33px' }}
            >
                <SubNavigation.Item label="Drawer" />
                <SubNavigation.Item label="Action Bar" />
                <SubNavigation.Item label="Content" />
                <SubNavigation.Item label="Data Cards" />
                <SubNavigation.Item label="Data Grid" />
                <SubNavigation.Item label="Data Groups" />
                <SubNavigation.Item label="Details Window" />
                <SubNavigation.Item label="Filters Drawer" />
                <SubNavigation.Item label="Navigation" />
                <SubNavigation.Item label="Sticky" />
                <SubNavigation.Item label="Title Bar" />
                <SubNavigation.Item label="Wing" />
            </SubNavigation>
        );
    }
}

export default ModulesDrawerSubNavigation;
