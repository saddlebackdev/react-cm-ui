import React, {
    Component,
} from 'react';
import Classnames from 'classnames';
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
import ResizeDetector from 'react-resize-detector';
import Tab from './tab';
import TabPanel from './tabPanel';
import withStyles from '../../styles/withStyles';
import Dropdown from '../../inputs/dropdown';
import {
    BEM_BLOCK_NAME,
    TAB_CLASS,
} from './tabsConstants';

const tabPrefix = 'tab-';
const panelPrefix = 'panel-';

const propTypes = {
    /**
     * beforeChange callback: return false to prevent tab change
     */
    beforeChange: PropTypes.func,
    /**
     * onChange active tab callback
     */
    onChange: PropTypes.func,
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
    /**
     * frequency of onResize recalculation fires
     */
    resizeThrottle: PropTypes.number,
    /**
     * Use this prop to programatically change the selected tab
     */
    selectedTabKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Renders the content set inside the item object under the tabs panel
     */
    withContent: PropTypes.bool,
};

const defaultProps = {
    items: [],
    selectedTabKey: undefined,
    resizeThrottle: 100,
    beforeChange: undefined,
    onChange: undefined,
    withContent: false,
};

const useStyles = (theme) => {
    const textColorSecondary = get(theme, 'palette.text.secondary');
    const textColorPrimary = get(theme, 'palette.text.primary');
    const borderColorSecondary = get(theme, 'palette.border.secondary');
    const borderColorContrastPrimary = get(theme, 'palette.border.contrastPrimary');
    const colorActivePrimary = get(theme, 'palette.active.primary');
    const styles = {
        root: {
            [`& .${BEM_BLOCK_NAME}--container`]: {
                position: 'relative',
            },
            [`& .${BEM_BLOCK_NAME}--panel`]: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            [`& .${BEM_BLOCK_NAME}--panel-content`]: {
                padding: '10px 0 10px 0',
                borderTop: `1px solid ${borderColorSecondary}`,
            },
            [`& .${TAB_CLASS}`]: {
                cursor: 'pointer',
                zIndex: 1,
                whiteSpace: 'nowrap',
                padding: '10px 20px 0 0',
                outline: 'none',
                '&--label': {
                    fontSize: 14,
                    color: textColorSecondary,
                    paddingBottom: 10,
                    transition: 'color 0.1s, border-bottom 0.1s',
                    borderBottom: `2px solid ${borderColorContrastPrimary}`,
                    '&:hover': {
                        color: textColorPrimary,
                    },
                    '&-selected': {
                        color: `${textColorPrimary} !important`,
                        borderBottom: `2px solid ${colorActivePrimary}`,
                    },
                },
                '&--disabled': {
                    opacity: 0.5,
                    cursor: 'not-allowed',
                },
                '& .dropdown-menu': {
                    margin: '-15px 0',
                },
            },
        },
    };

    return styles;
};

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blockWidth: 0,
            showMoreWidth: 40,
            selectedTabKey: props.selectedTabKey,
            tabDimensions: {},
            tabsTotalWidth: 0,
            items: props.items || [],
        };

        this.onChangeTab = this.onChangeTab.bind(this);
        this.onChangeTabHidden = this.onChangeTabHidden.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onResizeThrottled = throttle(this.onResize, props.resizeThrottle, { trailing: true });
        this.getClassNamesFor = this.getClassNamesFor.bind(this);
        this.getExpandedTabs = this.getExpandedTabs.bind(this);
        this.getPanelProps = this.getPanelProps.bind(this);
        this.getSelectedTabKey = this.getSelectedTabKey.bind(this);
        this.getTabs = this.getTabs.bind(this);
        this.getTabProps = this.getTabProps.bind(this);
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
            selectedTabKey,
            tabsTotalWidth,
            blockWidth,
            showMoreWidth,
            tabsHidden,
            tabsVisible,
        } = this.state;

        const shouldUpdate = (
            items !== nextProps.items ||
            nextState.tabsTotalWidth !== tabsTotalWidth ||
            nextState.blockWidth !== blockWidth ||
            nextState.showMoreWidth !== showMoreWidth ||
            nextProps.selectedTabKey !== this.selectedTabKeyProp ||
            nextState.selectedTabKey !== selectedTabKey ||
            (
                !isEqual(nextState.tabsHidden, tabsHidden) ||
                !isEqual(nextState.tabsVisible, tabsVisible)
            )
        );

        return shouldUpdate;
    }

    componentDidUpdate(prevProps) {
        const {
            items,
            selectedTabKey,
        } = this.props;

        if (this.selectedTabKeyProp !== selectedTabKey) {
            this.setState({ selectedTabKey });
        }

        const shouldUpdateTabsDimensions = items.length !== prevProps.items.length ||
            items.every((item, i) => item !== prevProps.items[i]);

        if (shouldUpdateTabsDimensions) {
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

    onChangeTabHidden(selectedTab) {
        const onClick = get(selectedTab, 'onClick');
        const selectedTabKey = get(selectedTab, 'value');

        if (typeof onClick === 'function') {
            onClick(selectedTab);
        }

        this.onChangeTab(selectedTabKey);
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
                updatedTabDimensions[key.replace(tabPrefix, '')] = { width, offset: updatedTabsTotalWidth };
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
            tabsTotalWidth,
            tabDimensions,
            showMoreWidth,
            items,
        } = this.state;

        const selectedTabKey = this.getSelectedTabKey();
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

                const selected = selectedTabKey === key;
                const payload = {
                    tabIndex,
                    selected,
                    disabled,
                    key,
                };
                const tabPayload = {
                    ...payload,
                    title,
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
                const isTabVisible = // initial call
                                    !blockWidth ||
                                    tabsTotalWidth === 0 ||
                                    // all tabs are fit into the block
                                    (tabWidth > 0 && blockWidth > tabsTotalWidth) ||
                                    // current tab fit into the block
                                    (tabWidth > 0 && availableWidth - tabWidth > 0);

                if (isTabVisible) {
                    result.tabsVisible.push(tabPayload);
                } else {
                    result.tabsHidden.push(tabPayload);

                    if (selected) {
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
            ].map((tab) => find(items, { key: tab.key }));

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

    getTabProps(tab) {
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
            onChange: this.onChangeTab,
            ref: (ref) => { this.tabRefs[tabPrefix + key] = ref; },
            selected,
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
            key: panelPrefix + key,
            id: panelPrefix + key,
            tabId: tabPrefix + key,
            classNames: this.getClassNamesFor('panel', { className, isHidden }),
            isHidden,
        };
    }

    getClassNamesFor(type, itemStates) {
        const {
            selected,
            tabIndex,
            disabled,
            className = '',
        } = itemStates;

        switch (type) {
            case 'tab':
                return Classnames(
                    `${TAB_CLASS}`,
                    className,
                    {
                        [`${TAB_CLASS}--first`]: !tabIndex,
                        [`${TAB_CLASS}--selected`]: selected,
                        [`${TAB_CLASS}--disabled`]: disabled,
                    },
                );
            case 'panel':
                return Classnames(
                    `${BEM_BLOCK_NAME}--panel-content`,
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
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <TabPanel {...this.getPanelProps(panels[selectedTabKey])} />;
        }

        return null;
    }

    render() {
        const {
            classes,
            withContent,
        } = this.props;

        const {
            tabsVisible,
            tabsHidden,
            panels,
        } = this.getTabs();

        const selectedTabKey = this.getSelectedTabKey();
        const rootClasses = get(classes, 'root');
        const containerClasses = Classnames(
            `${BEM_BLOCK_NAME}--container`,
            { [rootClasses]: rootClasses },
        );
        const tabsClasses = Classnames(`${BEM_BLOCK_NAME}--panel`);
        const hiddenTabsDropDown = tabsHidden.length > 0 && (
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
                ref={(ref) => { this.tabsWrapper = ref; }}
                role="presentation"
            >
                <div className={tabsClasses}>
                    {tabsVisible.reduce((result, tab) => {
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        result.push(<Tab {...this.getTabProps(tab)} />);

                        return result;
                    }, [])}
                    {hiddenTabsDropDown}
                </div>
                {withContent && this.getExpandedTabs(panels, selectedTabKey)}
                {<ResizeDetector handleWidth onResize={this.onResizeThrottled} />}
            </div>
        );
    }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

const TabsWithStyles = withStyles(useStyles, { withTheme: true })(Tabs);
export default TabsWithStyles;
