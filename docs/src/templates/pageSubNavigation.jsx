import { browserHistory } from 'react-router';
import React from 'react';
import { SubNavigation } from 'react-cm-ui';

class ModulesPageSubNavigation extends React.PureComponent {
    static onSubNavClick(index) {
        const pageLocation = '/components/templates/page'; // here

        switch (index) {
            case 0:
                browserHistory.push(`${pageLocation}/`);

                break;

            case 1:
                browserHistory.push(`${pageLocation}/action-bar`);

                break;
            case 2:
                browserHistory.push(`${pageLocation}/container`);

                break;
            case 3:
                browserHistory.push(`${pageLocation}/content`);

                break;
            case 4:
                browserHistory.push(`${pageLocation}/data-cards`);

                break;
            case 5:
                browserHistory.push(`${pageLocation}/data-grid`);

                break;
            case 6:
                browserHistory.push(`${pageLocation}/data-groups`);

                break;
            case 7:
                browserHistory.push(`${pageLocation}/details-window`);

                break;
            case 8:
                browserHistory.push(`${pageLocation}/filters-drawer`);

                break;
            case 9:
                browserHistory.push(`${pageLocation}/filters-rail`);

                break;
            default:
        }
    }

    render() {
        const {
            location: {
                pathname,
            },
        } = window;
        const pathnameSegments = pathname.split('/');
        const pathnameThirdSegment = pathnameSegments[3];
        let itemSelected;

        switch (pathnameThirdSegment) {
            case 'action-bar':
                itemSelected = 1;

                break;
            case 'container':
                itemSelected = 2;

                break;
            case 'content':
                itemSelected = 3;

                break;
            case 'data-cards':
                itemSelected = 4;

                break;
            case 'data-grid':
                itemSelected = 5;

                break;
            case 'data-groups':
                itemSelected = 6;

                break;
            case 'details-window':
                itemSelected = 7;

                break;
            case 'filters-drawer':
                itemSelected = 8;

                break;
            case 'filters-rail':
                itemSelected = 9;

                break;
            default:
                itemSelected = 0;
        }

        return (
            <SubNavigation
                onClick={ModulesPageSubNavigation.onSubNavClick}
                selected={itemSelected}
                style={{ marginBottom: '33px' }}
            >
                <SubNavigation.Item label="Page" />
                <SubNavigation.Item label="Action Bar" />
                <SubNavigation.Item label="Container" />
                <SubNavigation.Item label="Content" />
                <SubNavigation.Item label="Data Cards" />
                <SubNavigation.Item label="Data Grid" />
                <SubNavigation.Item label="Data Groups" />
                <SubNavigation.Item label="Details Window" />
                <SubNavigation.Item label="Filters Drawer" />
                <SubNavigation.Item label="Filters Rail" />
            </SubNavigation>
        );
    }
}

export default ModulesPageSubNavigation;
