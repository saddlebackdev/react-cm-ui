import React, {
    Component,
} from 'react';
import Classnames from 'classnames';
import {
    find,
    findIndex,
    get,
    isFunction,
    isEqual,
    sortBy,
    throttle,
} from 'lodash';
import PropTypes from 'prop-types';
import ResizeDetector from 'react-resize-detector';
import SectionalTab from './sectionalTab';
import SectionalTabPanel from './sectionalTabPanel';
import withStyles from '../../styles/withStyles';
import DropdownButton from '../../inputs/dropdownButton';
import {
    BEM_NAVIGATION_SECTIONAL_TABS,
    BEM_NAVIGATION_TAB_ROOT_CLASS,
} from '../../global/constants';

const PREFIX_TAB = 'tab-';
const PANEL_PREFIX = 'panel-';
const HIDDEN_TABS_ICON_WIDTH = 40;

const propTypes = {
    /**
     * beforeChange callback: return false to prevent tab change
     */
    beforeChange: PropTypes.func,
    /**
     * Custom classes to override the default styling
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
        sectionalTab: PropTypes.string,
        sectionalTabsPanel: PropTypes.string,
        sectionalTabsPanelContent: PropTypes.string,
    }),
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
    beforeChange: undefined,
    classes: {},
    items: [],
    onChange: undefined,
    resizeThrottle: 100,
    selectedTabKey: undefined,
    withContent: false,
};

const useStyles = (theme) => {
    const borderColorContrastPrimary = get(theme, 'palette.border.contrastPrimary');
    const borderColorSecondary = get(theme, 'palette.border.secondary');
    const colorActivePrimary = get(theme, 'palette.active.primary');
    const textColorSecondary = get(theme, 'palette.text.secondary');
    const textColorPrimary = get(theme, 'palette.text.primary');
    const colorHighlight = get(theme, 'palette.cyan[500]');

    const styles = {
        root: {
            position: 'relative',
            '& .button_dropdown': {
                margin: '0',
                width: HIDDEN_TABS_ICON_WIDTH,
                '& .icon': {
                    marginRight: '00 !important',
                },
                '&-open': {
                    '& .icon-use-path': {
                        fill: `${colorHighlight} !important`,
                    },
                },
            },
        },
        sectionalTabsPanel: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        sectionalTabsPanelContent: {
            padding: '10px 0 10px 0',
            borderTop: `1px solid ${borderColorSecondary}`,
        },
        sectionalTab: {
            cursor: 'pointer',
            zIndex: 1,
            whiteSpace: 'nowrap',
            padding: '10px 20px 0 0',
            outline: 'none',
        },
        sectionalTabLabel: {
            fontSize: 14,
            color: textColorSecondary,
            paddingBottom: 10,
            transition: 'color 0.1s, border-bottom 0.1s',
            borderBottom: `2px solid ${borderColorContrastPrimary}`,
            '&:hover': {
                color: textColorPrimary,
            },
        },
        sectionalTabLabelSelected: {
            color: `${textColorPrimary} !important`,
            borderBottom: `2px solid ${colorActivePrimary}`,
        },
    };

    return styles;
};

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
            tabsHidden,
            tabsVisible,
        } = this.state;

        const shouldUpdate = (
            items !== nextProps.items ||
            nextState.tabsTotalWidth !== tabsTotalWidth ||
            nextState.blockWidth !== blockWidth ||
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
                updatedTabDimensions[key.replace(PREFIX_TAB, '')] = { width, offset: updatedTabsTotalWidth };
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

                const selected = selectedTabKey === key;
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
            classes,
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
            classNames: this.getClassNamesFor('tab', {
                className,
                collapsed,
                disabled,
                selected,
                tabIndex,
            }),
            classes,
            id: PREFIX_TAB + key,
            key: PREFIX_TAB + key,
            originalKey: key,
            onClick,
            onChange: this.onChangeTab,
            ref: (ref) => { this.tabRefs[PREFIX_TAB + key] = ref; },
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
            key: PANEL_PREFIX + key,
            id: PANEL_PREFIX + key,
            tabId: PREFIX_TAB + key,
            classNames: this.getClassNamesFor('panel', { className, isHidden }),
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
                    classes.sectionalTab,
                    `${BEM_NAVIGATION_TAB_ROOT_CLASS}`,
                    className,
                    {
                        [`${BEM_NAVIGATION_TAB_ROOT_CLASS}--first`]: !tabIndex,
                        [`${BEM_NAVIGATION_TAB_ROOT_CLASS}--selected`]: selected,
                        [`${BEM_NAVIGATION_TAB_ROOT_CLASS}--disabled`]: disabled,
                    },
                );
            case 'panel':
                return Classnames(
                    classes.sectionalTabsPanelContent,
                    `${BEM_NAVIGATION_SECTIONAL_TABS}--panel-content`,
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
            return <SectionalTabPanel {...this.getPanelProps(panels[selectedTabKey])} />;
        }

        return null;
    }

    render() {
        const {
            classes,
            withContent,
        } = this.props;

        const {
            panels,
            tabsHidden,
            tabsVisible,
        } = this.getTabs();

        const selectedTabKey = this.getSelectedTabKey();
        const containerClasses = Classnames(
            classes.root,
            `${BEM_NAVIGATION_SECTIONAL_TABS}--container`,
        );
        const tabsClasses = Classnames(
            classes.sectionalTabsPanel,
            `${BEM_NAVIGATION_SECTIONAL_TABS}--panel`,
        );
        const hiddenTabsDropDown = tabsHidden.length > 0 && (
            <DropdownButton
                iconType="ellipsis-h"
                optionsTheme="light"
                color="transparent"
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
                className={containerClasses}
                ref={(ref) => { this.tabsWrapper = ref; }}
                role="presentation"
            >
                <div className={tabsClasses}>
                    {tabsVisible.reduce((result, tab) => {
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        result.push(<SectionalTab {...this.getTabProps(tab)} />);

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
