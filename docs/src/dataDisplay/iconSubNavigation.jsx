import { browserHistory } from 'react-router';
import { last } from 'lodash';
import React from 'react';
import { SubNavigation } from 'react-cm-ui';

class ModulesIconSubNavigation extends React.PureComponent {
    static onSubNavClick(index) {
        const drawerLocation = '/components/data-display/icon';

        switch (index) {
            case 1:
                browserHistory.push(`${drawerLocation}/examples`);

                break;
            case 0:
            default:
                browserHistory.push(`${drawerLocation}/`);

                break;
        }
    }

    render() {
        const { pathname } = window.location;
        const pathSegments = pathname.split('/');
        const lastPathSegment = last(pathSegments);
        const isExamplesPage = lastPathSegment === 'examples';
        const selectedIndex = isExamplesPage ? 1 : 0;

        return (
            <SubNavigation
                onClick={ModulesIconSubNavigation.onSubNavClick}
                selected={selectedIndex}
                style={{ marginBottom: '33px' }}
            >
                <SubNavigation.Item label="Set" />
                <SubNavigation.Item label="Examples" />
            </SubNavigation>
        );
    }
}

export default ModulesIconSubNavigation;
