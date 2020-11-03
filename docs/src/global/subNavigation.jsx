import { browserHistory, withRouter } from 'react-router';
import {
    find,
    flatMap,
    kebabCase,
    filter,
    remove,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { SubNavigation as SubNav } from 'react-cm-ui';
import { navigationItems } from '../app/navigationConstants';

const propTypes = {
    firstLevelPath: PropTypes.string.isRequired,
    secondLevelPath: PropTypes.string.isRequired,
    thirdLevelLabel: PropTypes.string.isRequired,
    thirdLevelPath: PropTypes.string.isRequired,
    router: PropTypes.shape({
        location: PropTypes.shape({
            pathname: PropTypes.string,
        }),
    }).isRequired,
};

function SubNavigation(props) {
    const {
        firstLevelPath,
        secondLevelPath,
        thirdLevelLabel,
        thirdLevelPath,
        router,
    } = props;

    const firstLevelItems = find(navigationItems, ['path', firstLevelPath]);
    const secondLevelItems = find(firstLevelItems?.levelTwo, ['path', secondLevelPath]);
    const thirdLevelItems = find(secondLevelItems?.levelThree, ['path', thirdLevelPath]);
    const fourthLevelItems = thirdLevelItems?.levelFour;

    if (!fourthLevelItems) {
        return null;
    }

    remove(fourthLevelItems, ['omit', true]);

    const onSubNavItemClick = (path) => {
        const pageLocation = `/${firstLevelPath}/${secondLevelPath}/${thirdLevelPath}`;

        if (!path) {
            browserHistory.push(pageLocation);
        } else {
            browserHistory.push(`${pageLocation}/${path}`);
        }
    };

    const pathnameSegments = router.location.pathname.split('/');
    const pathnameFourthSegment = pathnameSegments[4];

    let itemSelected;

    const subNavItems = flatMap(fourthLevelItems, (item, index) => {
        if (!pathnameFourthSegment) {
            itemSelected = 0;
        } else if (pathnameFourthSegment === item.path) {
            itemSelected = index + 1;
        }

        if (index === 0) {
            return [
                <SubNav.Item
                    key="sub_nav_items-third_level"
                    label={thirdLevelLabel}
                    onClick={() => onSubNavItemClick('')}
                />,
                <SubNav.Item
                    key={`sub_nav_items-${index}`}
                    label={item.label}
                    onClick={() => onSubNavItemClick(item.path)}
                />,
            ];
        }

        return (
            <SubNav.Item
                key={`sub_nav_items-${index}`}
                label={item.label}
                onClick={() => onSubNavItemClick(item.path)}
            />
        );
    });

    return (
        <SubNav
            selected={itemSelected}
            style={{ marginBottom: '33px' }}
        >
            {subNavItems}
        </SubNav>
    );
}

SubNavigation.propTypes = propTypes;

export default withRouter(SubNavigation);
