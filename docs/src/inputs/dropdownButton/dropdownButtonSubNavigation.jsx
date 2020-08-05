import { browserHistory } from 'react-router';
import { last } from 'lodash';
import { SubNavigation } from 'react-cm-ui';
import React from 'react';

function DocsDropdownButtonSubNavigation() {
    function onSubNavClick(index) {
        const drawerLocation = '/components/inputs/dropdown-button';

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
    const pathSegments = pathname.split('/');
    const lastPathSegment = last(pathSegments);
    const isExamplesPage = lastPathSegment === 'option';
    const selectedIndex = isExamplesPage ? 1 : 0;

    return (
        <SubNavigation
            onClick={onSubNavClick}
            selected={selectedIndex}
            style={{ marginBottom: '33px' }}
        >
            <SubNavigation.Item label="Dropdown Button" />
            <SubNavigation.Item label="Option" />
        </SubNavigation>
    );
}

export default DocsDropdownButtonSubNavigation;
