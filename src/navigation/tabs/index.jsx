/* eslint-disable import/extensions */
import cs from 'classnames';
import {
    find,
    findIndex,
    throttle,
    get,
    isFunction,
    isEqual,
    sortBy,
} from 'lodash';
import PropTypes from 'prop-types';
import React, {
    Component,
} from 'react';
import ResizeDetector from 'react-resize-detector';
// import InkBar from './InkBar';
// import ShowMore from './ShowMore';
import Tab from './Tab';
import TabPanel from './TabPanel';
import { getTabsTotalWidth } from './tabsUtils';
import withStyles from '../../styles/withStyles';
import Dropdown from '../../inputs/dropdown';
import {
    BEM_BLOCK_BAME,
    TAB_ROOT_CLASS,
    TAB_CLASS,
} from './tabsConstants';

const tabPrefix = 'tab-';
const panelPrefix = 'panel-';

// const TAB_CLASS = `${BEM_BLOCK_BAME}--${TAB_ROOT_CLASS}`;
const propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    /**
     * List of the tabs objects
     */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            getContent: PropTypes.func,
            onClick: PropTypes.func,
        }),
    ),
    /* eslint-enable react/no-unused-prop-types */
    /**
     * Use this prop to programatically change the selected tab
     */
    selectedTabKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // show 'X' and remove tab
    // allowRemove: PropTypes.bool,
    // show 'X' closing element only for active tab
    // removeActiveOnly: PropTypes.bool,
    // move tabs to the special `Show more` tab if they don't fit into a screen
    // showMore: PropTypes.bool,
    // materialUI-like rail under the selected tab
    // showInkBar: PropTypes.bool,
    // transform to the accordion on small screens
    // transform: PropTypes.bool,
    // tabs will be transformed to accodrion for screen sizes below `transformWidth`px
    // transformWidth: PropTypes.number,
    /**
     * beforeChange callback: return false to prevent tab change
     */
    beforeChange: PropTypes.func,
    /**
     * onChange active tab callback
     */
    onChange: PropTypes.func,
    // onRemove callback
    // onRemove: PropTypes.func,
    /**
     * frequency of onResize recalculation fires
     */
    resizeThrottle: PropTypes.number,
    // unmounts the tab when it gets inactive (unselected)
    // unmountOnExit: PropTypes.bool,
    // classnames
    // containerClass: PropTypes.string,
    // tabsWrapperClass: PropTypes.string,
    // tabClass: PropTypes.string,
    // panelClass: PropTypes.string,
    // optional external id. Force rerender when it changes
    // eslint-disable-next-line react/forbid-prop-types
    // uid: PropTypes.any,
    // labels
    // showMoreLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * Renders the content set inside the item object under the tabs panel
     */
    withContent: PropTypes.bool,
};

const defaultProps = {
    items: [],
    // uid: undefined,
    selectedTabKey: undefined,
    // showMore: true,
    // showInkBar: false,
    // allowRemove: false,
    // removeActiveOnly: false,
    // transform: false,
    // transformWidth: 800,
    resizeThrottle: 100,
    // containerClass: undefined,
    // tabsWrapperClass: undefined,
    // tabClass: undefined,
    // panelClass: undefined,
    // showMoreLabel: '...',
    // unmountOnExit: true,
    beforeChange: undefined,
    onChange: undefined,
    // onRemove: () => null,
    withContent: false,
};

const useStyles = (theme) => {
    // console.log('theme', theme);
    const textColorSecondary = get(theme, 'palette.text.secondary');
    const textColorPrimary = get(theme, 'palette.text.primary');
    const colorActivePrimary = get(theme, 'palette.active.primary');
    const styles = {
        root: {
            [`& .${TAB_CLASS}`]: {
                cursor: 'pointer',
                zIndex: 1,
                whiteSpace: 'nowrap',
                padding: '10px 20px 0 0',
                outline: 'none',
                '&--first': {
                    // borderLeft: '1px solid',
                },
                '&--label': {
                    fontSize: 14,
                    color: textColorSecondary,
                    paddingBottom: 10,
                    transition: 'color 0.1s',
                    '&-selected': {
                        color: `${textColorPrimary} !important`,
                        borderBottom: `2px solid ${colorActivePrimary}`,
                    },
                },
                '&--disabled': {
                    opacity: 0.5,
                    cursor: 'not-allowed',
                },
                '&--selected': {
                    // color: 'red',
                    // border: '0px solid #fff',
                },
                '& .dropdown-menu': {
                    margin: '-15px 0',
                },
            },
        },
    };
    return styles;
};

export class Tabs extends Component {
    constructor(props) {
        super(props);

        this.tabRefs = {};
        this.selectedTabKeyProp = props.selectedTabKey;

        this.state = {
            blockWidth: 0,
            firstTabWidth: 0, // used to detect the font family change
            focusedTabKey: null,
            showMoreWidth: 40,
            selectedTabKey: props.selectedTabKey,
            tabDimensions: {},
            tabsTotalWidth: 0,
            items: props.items || [],
            tabsWrapper: null,
        };

        this.onChangeTab = this.onChangeTab.bind(this);
        this.onChangeTabHidden = this.onChangeTabHidden.bind(this);
        this.onFocusTab = this.onFocusTab.bind(this);
        this.onBlurTab = this.onBlurTab.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.setTabsDimensions = this.setTabsDimensions.bind(this);
        this.getTabs = this.getTabs.bind(this);
        this.getTabProps = this.getTabProps.bind(this);
        this.getPanelProps = this.getPanelProps.bind(this);
        // this.getShowMoreProps = this.getShowMoreProps.bind(this);
        this.getClassNamesFor = this.getClassNamesFor.bind(this);
        this.getSelectedTabKey = this.getSelectedTabKey.bind(this);
        // this.getIsCollapsed = this.getIsCollapsed.bind(this);
        // this.showMoreChanged = this.showMoreChanged.bind(this);
        this.getExpandedTabs = this.getExpandedTabs.bind(this);
        this.onResize = this.onResize.bind(this);

        this.onResizeThrottled = throttle(this.onResize, props.resizeThrottle, { trailing: true });
    }

    componentDidMount() {
        // console.log('componentDidMount', this);
        this.setTabsDimensions();
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {
            items,
            // transform,
            // showMore,
            // showInkBar,
            // allowRemove,
            // removeActiveOnly,
            // uid,
        } = this.props;

        const {
            selectedTabKey,
            tabsTotalWidth,
            blockWidth,
            showMoreWidth,
            firstTabWidth,
            tabDimensions,
            tabsHidden,
            tabsVisible,
        } = this.state;

        const currentFirstTabsWidth = get(this, 'tabRefs[\'tab-0\'].tab.offsetWidth');
        const shouldUpdate = (
            items !== nextProps.items ||
            // nextProps.uid !== uid ||
            // nextProps.transform !== transform ||
            // nextProps.showMore !== showMore ||
            // nextProps.showInkBar !== showInkBar ||
            // nextProps.allowRemove !== allowRemove ||
            // nextProps.removeActiveOnly !== removeActiveOnly ||
            nextState.tabsTotalWidth !== tabsTotalWidth ||
            nextState.blockWidth !== blockWidth ||
            nextState.showMoreWidth !== showMoreWidth ||
            nextProps.selectedTabKey !== this.selectedTabKeyProp ||
            nextState.selectedTabKey !== selectedTabKey ||
            // || firstTabWidth !== currentFirstTabsWidth
            // || !isEqual(tabDimensions, nextState.tabDimensions)
            (!isEqual(nextState.tabsHidden, tabsHidden) ||
                !isEqual(nextState.tabsVisible, tabsVisible))
        );
        // console.log('\n\nshouldUpdate', shouldUpdate, firstTabWidth, currentFirstTabsWidth);
        return shouldUpdate;
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            // uid,
            items,
            selectedTabKey,
        } = this.props;

        const {
            firstTabWidth,
            tabDimensions,
            selectedTabKey: selectedTabKeyState,
        } = this.state;

        const {
            tabsHidden: prevTabsHidden,
            tabsVisible: prevTabsVisible,
        } = prevState;

        // const {
        //     tabsHidden,
        //     tabsVisible,
        //     panels,
        // } = this.getTabs();
        // const shouldUpdateTabs = !isEqual(prevTabsHidden, tabsHidden) ||
        //     !isEqual(prevTabsVisible, tabsVisible);
        // if (shouldUpdateTabs) {
        //     console.log('DID_UPDATE_TABS', selectedTabKeyState, tabsVisible, tabsHidden);
        //     this.setTabsDimensions();
        //     this.setState({
        //         tabsVisible,
        //         tabsHidden,
        //         panels,
        //     });
        // }

        if (this.selectedTabKeyProp !== selectedTabKey) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ selectedTabKey });
        }
        const currentFirstTabsWidth = get(this, 'tabRefs[\'tab-0\'].tab.offsetWidth');
        const fontFamilyCouldHaveChanged = firstTabWidth > 0 && firstTabWidth !== currentFirstTabsWidth;
        // console.log('DID_UPDATE', fontFamilyCouldHaveChanged, firstTabWidth, currentFirstTabsWidth);
        if (
            // uid !== prevProps.uid ||
            items.length !== prevProps.items.length ||
            items.every((item, i) => item !== prevProps.items[i])
            // || fontFamilyCouldHaveChanged
            // || !isEqual(tabDimensions, prevState.tabDimensions)
        ) {
            this.setTabsDimensions();
        }
        // this.setTabsDimensions();
        this.selectedTabKeyProp = selectedTabKey;
    }

    onResize() {
        const {
            items,
        } = this.props;

        const {
            selectedTabKey,
        } = this.state;

        if (this.tabsWrapper) {
            // const currentIsCollapsed = this.getIsCollapsed();

            this.setState({ blockWidth: this.tabsWrapper.offsetWidth },
                // () => {
                //     const nextIsCollapsed = this.getIsCollapsed();
                //     const shouldResetSelectedTab = currentIsCollapsed && !nextIsCollapsed &&
                //         selectedTabKey === -1 && items && items.length;

                //     if (shouldResetSelectedTab) {
                //         const firstTabKey = items[0].key || 0;
                //         this.setState({ selectedTabKey: firstTabKey });
                //     }
                // }
            );
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

        // const isCollapsed = this.getIsCollapsed();

        // if (isCollapsed && selectedTabKey === nextTabKey) {
        //     // hide on mobile
        //     this.setState({ selectedTabKey: -1 });
        // } else {
        //     // change active tab
        this.setState({ selectedTabKey: nextTabKey });
        // }

        if (isFunction(onChange)) {
            onChange(nextTabKey);
        }

        return null;
    }

    onChangeTabHidden(selectedTab) {
        console.log('onHiddenTabChange', selectedTab);
        const onClick = get(selectedTab, 'onClick');
        const selectedTabKey = get(selectedTab, 'value');
        if (typeof onClick === 'function') {
            onClick(selectedTab);
        }
        this.onChangeTab(selectedTabKey);
    }

    onFocusTab(focusedTabKey) {
        // console.log('onFocusTab');
        this.setState({ focusedTabKey });
    }

    onBlurTab() {
        // console.log('onBlurTab');
        this.setState({ focusedTabKey: null });
    }

    onKeyDown(event) {
        // console.log('onKeyDown');
        const { focusedTabKey } = this.state;
        if (event.keyCode === 13 && focusedTabKey !== null) {
            this.setState({ selectedTabKey: focusedTabKey });
        }
    }

    setTabsDimensions() {
        if (!this.tabsWrapper) {
            // it shouldn't happen ever. Just a paranoic check
            return;
        }
        console.log('setTabsDimensions');
        const {
            tabDimensions,
            tabsTotalWidth,
        } = this.state;

        // initial wrapper width calculation
        const blockWidth = this.tabsWrapper.offsetWidth;
        // calculate width and offset for each tab
        let updatedTabsTotalWidth = 0;
        const updatedTabDimensions = {};
        const tabRefsKeys = Object.keys(this.tabRefs);
        let updatedFirstTabWidth = 0;
        tabRefsKeys.forEach((key, index) => {
            if (this.tabRefs[key]) {
                const width = this.tabRefs[key].tab.offsetWidth;
                updatedTabDimensions[key.replace(tabPrefix, '')] = { width, offset: updatedTabsTotalWidth };
                updatedTabsTotalWidth += width;
                // console.log('index', index, width);
                if (index === 0) {
                    updatedFirstTabWidth = width;
                }
            }
        });

        this.setState({
            tabDimensions: updatedTabDimensions,
            tabsTotalWidth: updatedTabsTotalWidth,
            blockWidth,
            firstTabWidth: updatedFirstTabWidth,
        });
        console.log('setTabsDimensions', updatedTabDimensions, updatedTabsTotalWidth);
    }

    getTabs() {
        // const {
        // showMore,
        // transform,
        // transformWidth,
        // items,
        // allowRemove,
        // removeActiveOnly,
        // onRemove,
        // } = this.props;

        const {
            blockWidth,
            tabsTotalWidth,
            tabDimensions,
            showMoreWidth,
            items,
        } = this.state;

        const selectedTabKey = this.getSelectedTabKey();
        // const collapsed = blockWidth && transform && blockWidth < transformWidth;
        let tabIndex = 0;
        let availableWidth = blockWidth - (tabsTotalWidth > blockWidth ? showMoreWidth : 0);

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
                // console.log('REDUCE', onClick);

                const selected = selectedTabKey === key;

                const payload = {
                    tabIndex,
                    // collapsed,
                    selected,
                    disabled,
                    key,
                };

                const tabPayload = {
                    ...payload,
                    title,
                    // onRemove: (evt) => {
                    //     if (typeof onRemove === 'function') {
                    //         onRemove(key, evt);
                    //     }
                    // },
                    // allowRemove: allowRemove && (!removeActiveOnly || selected),
                    className: tabClassName,
                    onClick,
                };

                const panelPayload = {
                    ...payload,
                    content,
                    getContent,
                    className: panelClassName,
                };

                const tabWidth = tabDimensions[key] ? tabDimensions[key].width : 0;

                tabIndex += 1;
                // console.log({
                //     showMore,
                //     blockWidth,
                //     collapsed,
                //     first: (tabWidth > 0 && blockWidth > tabsTotalWidth),
                //     second: (tabWidth > 0 && availableWidth - tabWidth > 0),
                // });
                // console.log('REDUCING', blockWidth, tabsTotalWidth, tabWidth);
                /* eslint-disable no-param-reassign */
                const isTabVisible = // don't need to `Show more` button
                                    // !showMore ||
                                    // initial call
                                    !blockWidth ||
                                    tabsTotalWidth === 0 ||
                                    // collapsed mode
                                    // collapsed ||
                                    // all tabs are fit into the block
                                    (tabWidth > 0 && blockWidth > tabsTotalWidth) ||
                                    // current tab fit into the block
                                    (tabWidth > 0 && availableWidth - tabWidth > 0);
                if (isTabVisible) {
                    // console.log('A', index, availableWidth, tabWidth, availableWidth - tabWidth, blockWidth, tabsTotalWidth);
                    result.tabsVisible.push(tabPayload);
                } else {
                    result.tabsHidden.push(tabPayload);
                    // console.log('B', index, availableWidth, tabWidth, availableWidth - tabWidth);
                    if (selected) result.isSelectedTabHidden = true;
                }
                /* eslint-enable no-param-reassign */

                result.panels[key] = panelPayload; // eslint-disable-line no-param-reassign
                availableWidth -= tabWidth;

                return result;
            },
            { tabsVisible: [], tabsHidden: [], panels: {}, isSelectedTabHidden: false },
        );

        let sortedHiddenTabs = sortBy(reducedItems.tabsHidden, ['key']);
        let sortedVisibleTabs = sortBy(reducedItems.tabsVisible, ['key']);
        // console.log('reducedItems', reducedItems);
        if (reducedItems.isSelectedTabHidden) {
            const lastVisibleTab = reducedItems.tabsVisible[reducedItems.tabsVisible.length - 1];
            const hiddenSelectedTab = find(reducedItems.tabsHidden, { selected: true });
            const hiddenSelectedTabIndex = findIndex(reducedItems.tabsHidden, { selected: true });
            reducedItems.tabsVisible.splice(reducedItems.tabsVisible.length - 1, 1, hiddenSelectedTab);
            reducedItems.tabsHidden.splice(hiddenSelectedTabIndex, 1, lastVisibleTab);
            sortedHiddenTabs = sortBy(reducedItems.tabsHidden, ['key']);
            sortedVisibleTabs = sortBy(reducedItems.tabsVisible, ['key']);
            const reSortedItems = [...reducedItems.tabsVisible, ...sortedHiddenTabs].map((tab) => find(items, { key: tab.key }));
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

        // console.log('REDUCED_ITEM', reducedItems.tabsVisible, '\n\n',reducedItems.tabsHidden);
        return reducedItems;
    }

    getTabProps(tab) {
        // console.log('getTabProps', tab);
        const {
            // allowRemove,
            className,
            collapsed,
            disabled,
            key,
            onClick,
            // onRemove,
            selected,
            tabIndex,
            title,
        } = tab;

        return {
            // allowRemove,
            children: title,
            classNames: this.getClassNamesFor('tab', {
                className,
                collapsed,
                disabled,
                selected,
                tabIndex,
            }),
            id: tabPrefix + key,
            key: tabPrefix + key,
            originalKey: key,
            onClick,
            // onFocus: this.onFocusTab,
            // onBlur: this.onBlurTab,
            onChange: this.onChangeTab,
            // onRemove,
            // panelId: panelPrefix + key,
            ref: (ref) => { this.tabRefs[tabPrefix + key] = ref; },
            selected,
        };
    }

    getPanelProps({
        key, content, getContent, className,
    }, isHidden) {
        // console.log('getPanelProps');
        return {
            getContent,
            children: content,
            key: panelPrefix + key,
            id: panelPrefix + key,
            tabId: tabPrefix + key,
            classNames: this.getClassNamesFor('panel', { className, isHidden }),
            isHidden,
        };
    }

    // getShowMoreProps(isShown, isSelectedTabHidden, showMoreLabel) {
    //     // console.log('getShowMoreProps');
    //     return {
    //         onShowMoreChanged: this.showMoreChanged,
    //         isShown,
    //         label: showMoreLabel,
    //         hasChildSelected: isSelectedTabHidden,
    //     };
    // }

    getClassNamesFor(type, itemStates) {
        // console.log('getClassNamesFor');
        // const {
        //     // tabClass,
        //     panelClass,
        // } = this.props;

        const {
            selected,
            // collapsed,
            tabIndex,
            disabled,
            className = '',
            isHidden,
        } = itemStates;

        switch (type) {
            case 'tab':
                // eslint-disable-next-line no-case-declarations
                const tabClassNames = cs(
                    `${TAB_CLASS}`,
                    // 'RRT__tab',
                    className,
                    // tabClass,
                    {
                        [`${TAB_CLASS}--first`]: !tabIndex,
                        [`${TAB_CLASS}--selected`]: selected,
                        [`${TAB_CLASS}--disabled`]: disabled,
                        // [`${TAB_CLASS}--collapsed`]: collapsed,
                    },
                );
                // console.log(tabClassNames);
                return tabClassNames;
            case 'panel':
                return cs(
                    'RRT__panel',
                    className,
                    // panelClass,
                    { 'RRT__panel--hidden': isHidden },
                );
            default:
                return '';
        }
    }

    getSelectedTabKey() {
        // console.log('getSelectedTabKey');
        const { items } = this.props;
        const { selectedTabKey } = this.state;

        if (typeof selectedTabKey === 'undefined') {
            if (!items[0]) {
                return undefined;
            }

            return items[0].key || 0;
        }

        return selectedTabKey;
    }

    // getIsCollapsed() {
    //     // console.log('getIsCollapsed');
    //     const {
    //         transform,
    //         transformWidth,
    //     } = this.props;

    //     const {
    //         blockWidth,
    //     } = this.state;

    //     return blockWidth && transform && blockWidth < transformWidth;
    // }

    getExpandedTabs(panels, selectedTabKey,
        // isCollapsed
    ) {
        // console.log('getExpandedTabs');
        // const { unmountOnExit } = this.props;
        // if (isCollapsed) {
        //     return undefined;
        // }

        // if (!unmountOnExit) {
        //     // render all tabs if unmountOnExit === false (inactive are hidden)
        //     return Object.keys(panels).map(key => (
        //         <TabPanel {...this.getPanelProps(panels[key], `${selectedTabKey}` !== `${key}`)} />
        //     ));
        // }

        if (panels[selectedTabKey]) {
            // render only active tab if unmountOnExit === true
            return <TabPanel {...this.getPanelProps(panels[selectedTabKey])} />;
        }

        return undefined;
    }

    // showMoreChanged(element) {
    //     // console.log('showMoreChanged');
    //     if (!element) {
    //         return;
    //     }

    //     const { showMoreWidth } = this.state;
    //     const { offsetWidth } = element;
    //     if (showMoreWidth === offsetWidth) {
    //         return;
    //     }

    //     this.setState({
    //         showMoreWidth: offsetWidth,
    //     });
    // }

    render() {
        const {
            // showInkBar,
            // containerClass,
            // tabsWrapperClass,
            // showMore,
            // transform,
            // showMoreLabel,
            // unmountOnExit,
            classes,
            withContent,
        } = this.props;

        const {
            tabDimensions,
        } = this.state;

        const {
            tabsVisible,
            tabsHidden,
            panels,
        } = this.getTabs();

        // if (isSelectedTabHidden) {
            // console.log('panels', panels);

            // const lastVisibleTab = tabsVisible[tabsVisible.length - 1];
            // const hiddenSelectedTab = find(tabsHidden, { selected: true });
            // const hiddenSelectedTabIndex = findIndex(tabsHidden, { selected: true });

            // tabsVisible.splice(tabsVisible.length - 1, 1, hiddenSelectedTab);
            // tabsHidden.splice(hiddenSelectedTabIndex, 1, lastVisibleTab);

            // console.log('lastVisibleTab', lastVisibleTab);
            // console.log('hiddenSelectedTab', hiddenSelectedTab);
            // console.log('newVisibleTabs', newVisibleTabs);
            // console.log('newHiddenTabs', newHiddenTabs);
        // }
        // console.log('RENDER', tabsVisible, tabsHidden);

        // console.log('tabsVisible', tabsVisible);
        // console.log('tabsHidden', tabsHidden);

        // const isCollapsed = this.getIsCollapsed();
        const selectedTabKey = this.getSelectedTabKey();
        const selectedTabDimensions = tabDimensions[selectedTabKey] || {};
        // console.log(tabDimensions[selectedTabKey]);
        const rootClasses = get(classes, 'root');

        const containerClasses = cs(
            'RRT__container',
            // containerClass,
            { [rootClasses]: rootClasses },
        );
        const tabsClasses = cs('RRT__tabs',
            // tabsWrapperClass,
            // { RRT__accordion: isCollapsed }
        );
        // console.log('this.tabsWrapper', this.tabsWrapper);
        const hiddenTabsDropDown = (
            // !isCollapsed &&
            tabsHidden.length > 0
        ) && (
            <Dropdown
                collapseMenuOnChange
                iconType="menu"
                onChange={this.onChangeTabHidden}
            >
                {tabsHidden.map((tab) => {
                    const {
                        onClick,
                        originalKey,
                        children,
                        key,
                    } = this.getTabProps(tab);

                    return (
                        <Dropdown.Item
                            id={key}
                            key={`tabs--tab-hidden-dropdown-item${key}`}
                            label={children}
                            value={originalKey}
                            onClick={onClick}
                        />
                    );
                })}
            </Dropdown>
        );

        return (
            <div
                className={containerClasses}
                ref={(ref) => {
                    // if (!this.state.tabsWrapper) {
                    // this.setState({ tabsWrapper: ref }, () => {
                    //     console.log('DONE!', ref);
                    // });
                    this.tabsWrapper = ref;
                    // }
                }}
                onKeyDown={this.onKeyDown}
                role="presentation"
            >
                <div className={tabsClasses}>
                    {tabsVisible.reduce((result, tab) => {
                        // console.log('tabsVisible.reduce', tab);
                        result.push(<Tab {...this.getTabProps(tab)} />);

                        // if (isCollapsed && (!unmountOnExit || selectedTabKey === tab.key)) {
                        //     result.push(<TabPanel {...this.getPanelProps(panels[tab.key], selectedTabKey !== tab.key)} />);
                        // }
                        return result;
                    }, [])}

                    {/* {!isCollapsed && ( // creo que esto es para el acordeon
                        <ShowMore {...this.getShowMoreProps(showMore, isSelectedTabHidden, showMoreLabel)}>
                            {tabsHidden.map(tab => (
                                <Tab {...this.getTabProps(tab)} />
                            ))}
                        </ShowMore>
                        <Dropdown>
                            <Dropdown.Item id="1" label="a" />
                        </Dropdown>
                    )} */}
                    {hiddenTabsDropDown}
                </div>

                {/* {showInkBar && !isCollapsed && !isSelectedTabHidden && (
                    <InkBar left={selectedTabDimensions.offset || 0} width={selectedTabDimensions.width || 0} />
                )} */}

                {withContent && this.getExpandedTabs(panels, selectedTabKey,
                    // isCollapsed
                )}

                {/* {
                (
                    // showMore ||
                    transform
                ) &&
                    <ResizeDetector handleWidth onResize={this.onResizeThrottled} />
                } */}
                {<ResizeDetector handleWidth onResize={this.onResizeThrottled} />}

            </div>
        );
    }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

const TabsWithStyles = withStyles(useStyles, { withTheme: true })(Tabs);
export default TabsWithStyles;
