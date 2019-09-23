'use strict';

import { browserHistory } from 'react-router';
import React from 'react';
import { SubNavigation } from 'react-cm-ui';

class ModulesDrawerSubNavigation extends React.Component {
    constructor(props) {
        super(props);

        this._onSubNavClick = this._onSubNavClick.bind(this);
    }

    render() {
        const pathname = window.location.pathname;
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
            case 'filters-drawer':
                itemSelected = 3;

                break;
            case 'grid':
                itemSelected = 4;

                break;
            case 'navigation':
                itemSelected = 5;

                break;
            case 'table':
                itemSelected = 6;

                break;
            case 'title-bar':
                itemSelected = 7;

                break;
            case 'wing':
                itemSelected = 8;

                break;
            case 'details':
                itemSelected = 9;

                break;
            case 'sticky':
                itemSelected = 10;

                break;
            default:
                itemSelected = 0;
        }

        return (
            <SubNavigation
                onClick={this._onSubNavClick}
                selected={itemSelected}
                style={{ marginBottom: '33px' }}
            >
                <SubNavigation.Item label="Drawer" />
                <SubNavigation.Item label="Action Bar" />
                <SubNavigation.Item label="Content" />
                <SubNavigation.Item label="Filters Drawer" />
                <SubNavigation.Item label="Grid" />
                <SubNavigation.Item label="Navigation" />
                <SubNavigation.Item label="Table" />
                <SubNavigation.Item label="Title Bar" />
                <SubNavigation.Item label="Wing" />
                <SubNavigation.Item label="Details" />
                <SubNavigation.Item label="Sticky" />
            </SubNavigation>
        );
    }

    _onSubNavClick(index) {
        const drawerLocation = '/modules/drawer';

        switch (index) {
            case 0:
                browserHistory.push(`${drawerLocation}/`);

                break;

            case 1:
                browserHistory.push(`${drawerLocation}/action-bar`);

                break;
            case 2:
                browserHistory.push(`${drawerLocation}/content`);

                break;
            case 3:
                browserHistory.push(`${drawerLocation}/filters-drawer`);

                break;
            case 4:
                browserHistory.push(`${drawerLocation}/grid`);

                break;
            case 5:
                browserHistory.push(`${drawerLocation}/navigation`);

                break;
            case 6:
                browserHistory.push(`${drawerLocation}/table`);

                break;
            case 7:
                browserHistory.push(`${drawerLocation}/title-bar`);

                break;
            case 8:
                browserHistory.push(`${drawerLocation}/wing`);

                break;
            case 9:
                browserHistory.push(`${drawerLocation}/details`);

                break;
            case 10:
                browserHistory.push(`${drawerLocation}/sticky`);

                break;
        }
    }
}

export default ModulesDrawerSubNavigation;
