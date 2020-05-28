import { browserHistory } from 'react-router';
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
        const pathnameSegments = pathname.split('/');
        const pathnameThirdSegment = pathnameSegments[3];
        let itemSelected;

        switch (pathnameThirdSegment) {
            case 'examples':
                itemSelected = 1;

                break;
            default:
                itemSelected = 0;
        }

        return (
            <SubNavigation
                onClick={ModulesIconSubNavigation.onSubNavClick}
                selected={itemSelected}
                style={{ marginBottom: '33px' }}
            >
                <SubNavigation.Item label="Set" />
                <SubNavigation.Item label="Examples" />
            </SubNavigation>
        );
    }
}

export default ModulesIconSubNavigation;
