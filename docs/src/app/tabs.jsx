import {
    browserHistory,
    withRouter,
} from 'react-router';
import {
    findIndex,
    map,
    remove,
} from 'lodash';
import { Tabs as TabsUI } from 'react-cm-ui';
import PropTypes from 'prop-types';
import React, {
    useCallback,
    useEffect,
    useState,
} from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({}),
    ),
    router: PropTypes.shape({
        routes: PropTypes.arrayOf(PropTypes.shape({
            path: PropTypes.string,
        })),
    }).isRequired,
};

const defaultProps = {
    items: null,
};

const useStyles = makeStyles(() => ({
    root: {
        marginTop: -4,
    },
}));

function Tabs(props) {
    const {
        items,
        router,
    } = props;

    const [tabsItems, setTabsItems] = useState([]);

    const classes = useStyles();

    const {
        routes,
    } = router;

    const onTabClick = useCallback((path) => {
        const beginningOfPathname = `/${routes[1].path}/${routes[2].path}`;

        if (path === routes[3].path) {
            browserHistory.push(`${beginningOfPathname}/${path}`);
        } else {
            browserHistory.push(`${beginningOfPathname}/${routes[3].path}/${path}`);
        }
    }, [routes]);

    useEffect(() => {
        remove(items, ['omit', true]);

        setTabsItems(
            // eslint-disable-next-line consistent-return
            map(items, (item, index) => {
                if (!item.omit) {
                    return {
                        key: `${index}`,
                        onClick: () => onTabClick(item.path, index),
                        title: item.label,
                    };
                }
            }),
        );
    }, [items, onTabClick]);

    if (!items) {
        return null;
    }

    const lastPathname = routes[4]?.path || routes[3]?.path;
    const selectedTabKey = findIndex(items, (item) => item.path === lastPathname);

    return (
        <TabsUI
            classes={{
                root: classes.root,
            }}
            items={tabsItems}
            selectedTabKey={selectedTabKey}
        />
    );
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default withRouter(Tabs);
