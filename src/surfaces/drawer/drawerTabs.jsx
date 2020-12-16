import PropTypes from 'prop-types';
import React from 'react';
import {
    PROP_TYPES_ITEMS,
    PROP_TYPES_SELECTED_TAB_KEY,
} from '../../navigation/tabs/constants';
import makeStyles from '../../styles/makeStyles';
import Tabs from '../../navigation/tabs';

const propTypes = {
    /**
     * Custom classes to override the default styling
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    /**
     * List of the tabs objects
     */
    items: PROP_TYPES_ITEMS,
    /**
     * Use this prop to programatically change the selected tab
     */
    selectedTabKey: PROP_TYPES_SELECTED_TAB_KEY,
};

const defaultProps = {
    classes: null,
    items: [],
    selectedTabKey: null,
};

const useStyles = makeStyles(() => ({
    root: {
        bottom: 5,
        left: 0,
        position: 'absolute',
        right: 0,
    },
}));

function DrawerTabs(props) {
    const {
        items,
        selectedTabKey,
    } = props;

    const classes = useStyles(props);

    return (
        <Tabs
            classes={{
                root: classes.root,
            }}
            items={items}
            selectedTabKey={selectedTabKey}
        />
    );
}

DrawerTabs.propTypes = propTypes;
DrawerTabs.defaultProps = defaultProps;

export default DrawerTabs;
