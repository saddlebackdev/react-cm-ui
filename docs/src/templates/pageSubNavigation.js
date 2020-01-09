'use strict';

import { browserHistory } from 'react-router';
import React from 'react';
import { SubNavigation } from 'react-cm-ui';

class ModulesPageSubNavigation extends React.Component {
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
            default:
                itemSelected = 0;
        }

        return (
            <SubNavigation
                onClick={this._onSubNavClick}
                selected={itemSelected}
                style={{ marginBottom: '33px' }}
            >
                <SubNavigation.Item label="Page" />
                {/*<SubNavigation.Item label="Action Bar" />
                <SubNavigation.Item label="Container" />
                <SubNavigation.Item label="Content" />
                <SubNavigation.Item label="Filters Drawer" />
                <SubNavigation.Item label="Grid" />
                <SubNavigation.Item label="Table" />
                <SubNavigation.Item label="Details" />*/}
            </SubNavigation>
        );
    }

    _onSubNavClick(index) {
        const pageLocation = '/modules/page';

        switch (index) {
            case 0:
                browserHistory.push(`${pageLocation}/`);

                break;

            case 1:
                browserHistory.push(`${pageLocation}/action-bar`);

                break;
            case 2:
                browserHistory.push(`${pageLocation}/content`);

                break;
            case 3:
                browserHistory.push(`${pageLocation}/filters-drawer`);

                break;
            case 4:
                browserHistory.push(`${pageLocation}/grid`);

                break;
            case 5:
                browserHistory.push(`${pageLocation}/navigation`);

                break;
            case 6:
                browserHistory.push(`${pageLocation}/table`);

                break;
            case 7:
                browserHistory.push(`${pageLocation}/title-bar`);

                break;
            case 8:
                browserHistory.push(`${pageLocation}/wing`);

                break;
            case 9:
                browserHistory.push(`${pageLocation}/details`);

                break;
        }
    }
}

export default ModulesPageSubNavigation;
