/* eslint-disable linebreak-style */
import React, {
    Component,
} from 'react';
import Classnames from 'classnames';
import {
    find,
    findIndex,
    isFunction,
    isEqual,
    sortBy,
    throttle,
} from 'lodash';
import PropTypes from 'prop-types';
import ResizeDetector from 'react-resize-detector';
import {
    BEM_NAVIGATION_TABS,
    BEM_NAVIGATION_TAB_ROOT_CLASS,
} from '../../global/constants';
import {
    PROP_TYPES_ITEMS,
    PROP_TYPES_SELECTED_TAB_KEY,
} from './constants';
import DropdownButton from '../../inputs/dropdownButton';
import TabsTab from './tabsTab';
import TabsContent from './tabsContent';
import withStyles from '../../styles/withStyles';

const PREFIX_TAB = 'tab-';
const CONTENT_PREFIX = 'content-';
const HIDDEN_TABS_ICON_WIDTH = 30;
const WIDTH_OFFSET = 5; // it ain't neccesary to be too precise when resizing and calculating hidden tabs

const propTypes = {
    /**
     * beforeChange callback: return false to prevent tab change
     */
    beforeChange: PropTypes.func,
    /**
     * Custom classes to override the default styling
     */
    classes: PropTypes.shape({
        inverse: PropTypes.string,
        label: PropTypes.string,
        mobile: PropTypes.string,
        moreButton: PropTypes.string,
        moreButtonInnerContainer: PropTypes.string,
        root: PropTypes.string,
        selected: PropTypes.string,
        tab: PropTypes.string,
        tabsPanel: PropTypes.string,
        tabsPanelContent: PropTypes.string,
        withContent: PropTypes.string,
    }),
    /**
     * If `true`, Tabs will be formatted to appear on dark backgrounds.
     */
    inverse: PropTypes.bool,
    /**
     * List of the tabs objects
     */
    items: PROP_TYPES_ITEMS,
    /**
     * If `true`, Tabs will look more like actionable buttons.
     */
    mobile: PropTypes.bool,
    /**
     * onChange active tab callback
     */
    onChange: PropTypes.func,
    /**
     * Resize recalculation frecuency in milliseconds
     */
    resizeThrottle: PropTypes.number,
    /**
     * Use this prop to programatically change the selected tab
     */
    selectedTabKey: PROP_TYPES_SELECTED_TAB_KEY,
    /**
     * Renders the content set inside the item object under the tabs panel
     */
    withContent: PropTypes.bool,
};

const defaultProps = {
    beforeChange: undefined,
    classes: null,
    inverse: false,
    items: [],
    mobile: false,
    onChange: undefined,
    resizeThrottle: 100,
    selectedTabKey: undefined,
    withContent: false,
};

const styles = ({ palette, spacing }) => ({
    mobile: {},
    moreButton: {
        height: '26px !important',
        margin: 0,
        minHeight: '26px !important',
        padding: 0,
        '&.button_dropdown-open': {
            '& .icon-use-path': {
                fill: `${palette.cyan[500]} !important`,
            },
        },
        '& .ui.icon': {
            marginTop: '-4px !important',
        },
    },
    moreButtonInnerContainer: {
        minHeight: 26,
    },
    root: {
        margin: [[0, -spacing(1)]],
        position: 'relative',
        '&$mobile': {
            margin: [[0, -4]],
        },
    },
    tabsPanel: {
        display: 'flex',
        flexWrap: 'wrap',
        '&$withContent': {
            marginBottom: -1,
            position: 'relative',
            zIndex: 5,
        },
    },
    withContent: {},
});

/**
 * Component capable to hide/show its tabs under a drop down button according to the container size.
 * It swipes the hidden tabs on click making them visible.
 */
class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blockWidth: 0,
            items: props.items || [],
            selectedTabKey: props.selectedTabKey,
            tabDimensions: {},
            tabsTotalWidth: 0,
        };

        this.getClassNamesFor = this.getClassNamesFor.bind(this);
        this.getExpandedTabs = this.getExpandedTabs.bind(this);
        this.getPanelProps = this.getPanelProps.bind(this);
        this.getSelectedTabKey = this.getSelectedTabKey.bind(this);
        this.getTabs = this.getTabs.bind(this);
        this.getTabProps = this.getTabProps.bind(this);
        this.onChangeTab = this.onChangeTab.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onResizeThrottled = throttle(this.onResize, props.resizeThrottle, { trailing: true });
        this.selectedTabKeyProp = props.selectedTabKey;
        this.setTabsDimensions = this.setTabsDimensions.bind(this);
        this.tabRefs = {};
    }

    componentDidMount() {
        this.setTabsDimensions();
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {
            items,
        } = this.props;

        const {
            blockWidth,
            selectedTabKey,
            tabsTotalWidth,
            items: itemsState,
        } = this.state;

        const shouldUpdate = (
            !isEqual(nextProps.items, items) ||
            nextState.tabsTotalWidth !== tabsTotalWidth ||
            nextState.blockWidth !== blockWidth ||
            nextProps.selectedTabKey !== this.selectedTabKeyProp ||
            nextState.selectedTabKey !== selectedTabKey ||
            !isEqual(itemsState, nextState.items)
        );

        return shouldUpdate;
    }

    componentDidUpdate(prevProps) {
        const {
            items,
            selectedTabKey,
        } = this.props;

        const {
            items: prevItems,
        } = prevProps;

        const didPropsItemsChange = !isEqual(prevItems, items);
        const didSelectedTabKeyChange = this.selectedTabKeyProp !== selectedTabKey;
        const shouldUpdateState = didPropsItemsChange || didSelectedTabKeyChange;

        if (shouldUpdateState) {
            const newState = {
                ...(didSelectedTabKeyChange && {
                    selectedTabKey,
                }),
                ...(didPropsItemsChange && {
                    items,
                    selectedTabKey,
                }),
            };

            this.setState(newState);
        }

        if (didPropsItemsChange) {
            this.setTabsDimensions();
        }

        this.selectedTabKeyProp = selectedTabKey;
    }

    onResize() {
        if (this.tabsWrapper) {
            this.setState({ blockWidth: this.tabsWrapper.offsetWidth });
        }
    }

    onChangeTab(nextTabKey, evt) {
        const {
            beforeChange,
            onChange,
        } = this.props;

        const {
            selectedTabKey,
        } = this.state;

        if (isFunction(beforeChange)) {
            const beforeChangeRes = beforeChange({ selectedTabKey, nextTabKey });

            if (beforeChangeRes === false) {
                if (evt) {
                    evt.preventDefault();
                }

                return null;
            }
        }

        this.setState({ selectedTabKey: nextTabKey });

        if (isFunction(onChange)) {
            onChange(nextTabKey);
        }

        return null;
    }

    setTabsDimensions() {
        if (!this.tabsWrapper) {
            return null;
        }

        const blockWidth = this.tabsWrapper.offsetWidth;
        let updatedTabsTotalWidth = 0;
        const updatedTabDimensions = {};
        const tabRefsKeys = Object.keys(this.tabRefs);

        tabRefsKeys.forEach((key) => {
            if (this.tabRefs[key]) {
                const width = this.tabRefs[key].tab.offsetWidth;

                updatedTabDimensions[key.replace(PREFIX_TAB, '')] = {
                    width,
                    offset: updatedTabsTotalWidth,
                };

                updatedTabsTotalWidth += width;
            }
        });

        this.setState({
            tabDimensions: updatedTabDimensions,
            tabsTotalWidth: updatedTabsTotalWidth,
            blockWidth,
        });

        return null;
    }

    getTabs() {
        const {
            blockWidth,
            items,
            tabDimensions,
            tabsTotalWidth,
        } = this.state;

        const selectedTabKey = this.getSelectedTabKey();

        let tabIndex = 0;

        let availableWidth = blockWidth - (
            tabsTotalWidth > blockWidth ?
                HIDDEN_TABS_ICON_WIDTH :
                0
        );

        let reducedItems = items.reduce(
            (result, item, index) => {
                const {
                    content,
                    disabled,
                    getContent,
                    key = index,
                    onClick,
                    panelClassName,
                    tabClassName,
                    title,
                } = item;

                // eslint-disable-next-line eqeqeq
                const selected = selectedTabKey == key;

                const payload = {
                    disabled,
                    key,
                    selected,
                    tabIndex,
                };

                const tabPayload = {
                    ...payload,
                    className: tabClassName,
                    onClick,
                    title,
                };
                const panelPayload = {
                    ...payload,
                    className: panelClassName,
                    content,
                    getContent,
                };

                const tabWidth = tabDimensions[key] ? tabDimensions[key].width : 0;
                tabIndex += 1;

                const isTabVisible = // initial call
                                    !blockWidth ||
                                    tabsTotalWidth === 0 ||
                                    tabWidth === 0 || // posibily re render from a items.prop change
                                    // all tabs are fit into the block
                                    (tabWidth > 0 && blockWidth > tabsTotalWidth + WIDTH_OFFSET) ||
                                    // current tab fit into the block
                                    (tabWidth > 0 && availableWidth - tabWidth > WIDTH_OFFSET);

                if (isTabVisible) {
                    result.tabsVisible.push(tabPayload);
                } else {
                    result.tabsHidden.push(tabPayload);

                    if (selected && tabWidth > 0) {
                        // eslint-disable-next-line no-param-reassign
                        result.isSelectedTabHidden = true;
                    }
                }

                // eslint-disable-next-line no-param-reassign
                result.panels[key] = panelPayload;
                availableWidth -= tabWidth;

                return result;
            },
            {
                isSelectedTabHidden: false,
                panels: {},
                tabsHidden: [],
                tabsVisible: [],
            },
        );

        let sortedHiddenTabs = sortBy(reducedItems.tabsHidden, ['key']);
        let sortedVisibleTabs = sortBy(reducedItems.tabsVisible, ['key']);

        if (reducedItems.isSelectedTabHidden) {
            const lastVisibleTab = reducedItems.tabsVisible[reducedItems.tabsVisible.length - 1];
            const hiddenSelectedTab = find(reducedItems.tabsHidden, { selected: true });
            const hiddenSelectedTabIndex = findIndex(reducedItems.tabsHidden, { selected: true });

            reducedItems.tabsVisible.splice(
                reducedItems.tabsVisible.length - 1,
                1,
                hiddenSelectedTab,
            );

            reducedItems.tabsHidden.splice(hiddenSelectedTabIndex, 1, lastVisibleTab);
            sortedHiddenTabs = sortBy(reducedItems.tabsHidden, ['key']);
            sortedVisibleTabs = sortBy(reducedItems.tabsVisible, ['key']);

            const reSortedItems = [
                ...reducedItems.tabsVisible,
                ...sortedHiddenTabs,
            ]
                .filter((tab) => !!tab) // makes sure there's no undefined tab when several resize events happen rapidly
                .map((tab) => find(items, { key: tab.key }));

            this.setState({
                items: reSortedItems,
            });
        }

        reducedItems = {
            ...reducedItems,
            isSelectedTabHidden: false,
            tabsHidden: sortedHiddenTabs,
            tabsVisible: sortedVisibleTabs,
        };

        return reducedItems;
    }

    getTabProps(tab = {}) {
        const {
            classes,
            mobile,
            inverse,
            withContent,
        } = this.props;

        const {
            className,
            collapsed,
            disabled,
            key,
            onClick,
            selected,
            tabIndex,
            title,
        } = tab;

        return {
            children: title,
            classes: {
                label: classes.label,
                mobile: classes.mobile,
                selected: classes.selected,
                withContent: classes.withContent,
            },
            classNames: this.getClassNamesFor('tab', {
                className,
                collapsed,
                disabled,
                selected,
                tabIndex,
            }),
            id: PREFIX_TAB + key,
            inverse,
            key: PREFIX_TAB + key,
            mobile,
            originalKey: key,
            onClick,
            onChange: this.onChangeTab,
            ref: (ref) => { this.tabRefs[PREFIX_TAB + key] = ref; },
            selected,
            withContent,
        };
    }

    getPanelProps(panel, isHidden) {
        const {
            className,
            content,
            getContent,
            key,
        } = panel;

        return {
            getContent,
            children: content,
            key: CONTENT_PREFIX + key,
            id: CONTENT_PREFIX + key,
            tabId: PREFIX_TAB + key,
            classNames: this.getClassNamesFor('content', { className, isHidden }),
            isHidden,
        };
    }

    getClassNamesFor(type, itemStates) {
        const {
            classes,
        } = this.props;

        const {
            className = '',
            disabled,
            selected,
            tabIndex,
        } = itemStates;

        switch (type) {
            case 'tab':
                return Classnames(
                    classes.tab,
                    BEM_NAVIGATION_TAB_ROOT_CLASS,
                    className,
                    {
                        [`${BEM_NAVIGATION_TAB_ROOT_CLASS}--first`]: !tabIndex,
                        [`${BEM_NAVIGATION_TAB_ROOT_CLASS}--selected`]: selected,
                        [`${BEM_NAVIGATION_TAB_ROOT_CLASS}--disabled`]: disabled,
                    },
                );
            case 'content':
                return Classnames(
                    classes.tabsPanelContent,
                    `${BEM_NAVIGATION_TABS}--content`,
                    className,
                );
            default:
                return '';
        }
    }

    getSelectedTabKey() {
        const {
            items,
        } = this.props;

        const {
            selectedTabKey,
        } = this.state;

        if (!selectedTabKey) {
            if (!items[0]) {
                return undefined;
            }

            return items[0].key;
        }

        return selectedTabKey;
    }

    getExpandedTabs(panels, selectedTabKey) {
        if (panels[selectedTabKey]) {
            const {
                withContent,
            } = this.props;

            return (
                <TabsContent
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...this.getPanelProps(panels[selectedTabKey])}
                    withContent={withContent}
                />
            );
        }

        return null;
    }

    render() {
        const {
            classes,
            mobile,
            withContent,
        } = this.props;

        const {
            panels,
            tabsHidden,
            tabsVisible,
        } = this.getTabs();

        const selectedTabKey = this.getSelectedTabKey();

        const rootClasses = Classnames(
            classes.root,
            `${BEM_NAVIGATION_TABS}--container`,
            {
                [classes.mobile]: mobile,
            },
        );

        const tabsClasses = Classnames(
            classes.tabsPanel,
            `${BEM_NAVIGATION_TABS}--panel`,
            {
                [classes.withContent]: classes.withContent,
            },
        );

        const hiddenTabsDropDown = tabsHidden.length > 0 && (
            <DropdownButton
                classes={{
                    root: classes.moreButton,
                    innerContainer: classes.moreButtonInnerContainer,
                }}
                compact
                icon
                iconType="ellipsis-h"
                optionsTheme="light"
                text
            >
                {tabsHidden.map((tab) => {
                    const {
                        children,
                        onClick,
                        originalKey,
                    } = this.getTabProps(tab);

                    return (
                        <DropdownButton.Option
                            id={originalKey}
                            key={originalKey}
                            label={children}
                            onClick={(event, clickedTabKey) => {
                                if (isFunction(onClick)) {
                                    onClick(tab);
                                }

                                this.onChangeTab(clickedTabKey);
                            }}
                        >
                            {children}
                        </DropdownButton.Option>
                    );
                })}
            </DropdownButton>
        );

        return (
            <div
                className={rootClasses}
                ref={(ref) => { this.tabsWrapper = ref; }}
                role="presentation"
            >
                <div className={tabsClasses}>
                    {tabsVisible.reduce((result, tab) => {
                        result.push(
                            <TabsTab
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...this.getTabProps(tab)}
                            />,
                        );

                        return result;
                    }, [])}

                    {hiddenTabsDropDown}
                </div>

                {withContent && this.getExpandedTabs(panels, selectedTabKey)}

                <ResizeDetector
                    handleWidth
                    onResize={this.onResizeThrottled}
                />
            </div>
        );
    }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

const TabsWithStyles = withStyles(styles, { withTheme: true })(Tabs);

export default TabsWithStyles;
