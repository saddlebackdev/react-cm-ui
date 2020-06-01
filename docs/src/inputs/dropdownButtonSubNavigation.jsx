import { browserHistory } from 'react-router';
import React from 'react';
import { SubNavigation } from 'react-cm-ui';

function DocsDropdownButtonSubNavigation() {
    function onSubNavClick(index) {
        const drawerLocation = '/molecules/dropdown-button';

        switch (index) {
            case 1:
                browserHistory.push(`${drawerLocation}/option`);

                break;
            default:
                browserHistory.push(`${drawerLocation}/`);

                break;
        }
    }

    const { pathname } = window.location;
    const pathnameSegments = pathname.split('/');
    const pathnameThirdSegment = pathnameSegments[3];
    let itemSelected;

    switch (pathnameThirdSegment) {
        case 'option':
            itemSelected = 1;

            break;
        default:
            itemSelected = 0;
    }

    return (
        <SubNavigation
            onClick={onSubNavClick}
            selected={itemSelected}
            style={{ marginBottom: '33px' }}
        >
            <SubNavigation.Item label="Dropdown Button" />
            <SubNavigation.Item label="Option" />
        </SubNavigation>
    );
}

export default DocsDropdownButtonSubNavigation;
