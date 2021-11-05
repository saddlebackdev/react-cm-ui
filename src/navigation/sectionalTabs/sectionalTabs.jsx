/* eslint-disable linebreak-style */
import React, {
    Component,
} from 'react';
import ClassNames from 'classnames';
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
import {
    BEM_NAVIGATION_SECTIONAL_TABS,
    BEM_NAVIGATION_TAB_ROOT_CLASS,
} from '../../global/constants';
import {
    PADDING_X,
} from './constants';
import SectionalTab from './sectionalTab';
import SectionalTabContent from './sectionalTabContent';
import withStyles from '../../styles/withStyles';
import DropdownButton from '../../inputs/dropdownButton';

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
        indicator: PropTypes.string,
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
            key: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]).isRequired,
            title: PropTypes.string.isRequired,
            getContent: PropTypes.func,
            onClick: PropTypes.func,
        }),
    ),
    /**
     * Resize recalculation frecuency in milliseconds
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
    classes: null,
    items: [],
    onChange: undefined,
    resizeThrottle: 100,
    selectedTabKey: undefined,
    withContent: false,
};

const styles = (theme) => {
    const borderColorSecondary = get(theme, 'palette.border.secondary');
    const colorActivePrimary = get(theme, 'palette.active.primary');
    const colorHighlight = get(theme, 'palette.cyan[500]');
    const fontWeightMedium = get(theme, 'typography.fontWeightMedium');
    const textColorSecondary = get(theme, 'palette.text.secondary');
    const textColorPrimary = get(theme, 'palette.text.primary');

    return {
        indicator: {
            backgroundColor: colorActivePrimary,
            bottom: 0,
            height: 2,
            position: 'absolute',
            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
        root: {
            position: 'relative',
            '& .button_dropdown': {
                margin: '0',
                padding: 0,
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
            margin: [[0, -PADDING_X]],
        },
        sectionalTabsPanelContent: {
            padding: [[PADDING_X, 0]],
            borderTop: `1px solid ${borderColorSecondary}`,
        },
        sectionalTab: {
            backgroundColor: 'transparent',
            border: 0,
            borderRadius: 0,
            cursor: 'pointer',
            outline: 'none',
            padding: [[5, PADDING_X]],
            whiteSpace: 'nowrap',
            zIndex: 1,
        },
        sectionalTabLabel: {
            fontWeight: fontWeightMedium,
            color: textColorSecondary,
            transition: 'color 0.1s, border-bottom 0.1s',
            '&:hover': {
                color: textColorPrimary,
            },
        },
        sectionalTabLabelSelected: {
            color: `${textColorPrimary} !important`,
        },
    };
};

/**
 * Component capable to hide/show its tabs under a drop down button according to the container size.
 * It swipes the hidden tabs on click making them visible.
 */
class SectionalTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blockWidth: 0,
            items: props.items || [],
            selectedTabKey: props.selectedTabKey,
            selectedTabDimensions: {
                left: null,
                width: null,
            },
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
        this.setSelectedTabDimensions = this.setSelectedTabDimensions.bind(this);

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
            selectedTabDimensions,
            tabsTotalWidth,
            items: itemsState,
        } = this.state;

        const shouldUpdate = (
            !isEqual(nextProps.items, items) ||
            nextState.tabsTotalWidth !== tabsTotalWidth ||
            nextState.blockWidth !== blockWidth ||
            nextProps.selectedTabKey !== this.selectedTabKeyProp ||
            nextState.selectedTabKey !== selectedTabKey ||
            !isEqual(itemsState, nextState.items) ||
            !isEqual(selectedTabDimensions, nextState.selectedTabDimensions)
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
        if (this.tabsWrapperRef) {
            this.setState({ blockWidth: this.tabsWrapperRef.offsetWidth });
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
        if (this.tabsWrapperRef) {
            const blockWidth = this.tabsWrapperRef.offsetWidth;
            const updatedTabDimensions = {};
            const tabRefsKeys = Object.keys(this.tabRefs);

            let updatedTabsTotalWidth = 0;

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
        }
    }

    setSelectedTabDimensions({
        left,
        width,
    } = {
        left: null,
        width: null,
    }) {
        this.setState({
            selectedTabDimensions: {
                left,
                width,
            },
        });
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
            setSelectedTabDimensions: this.setSelectedTabDimensions,
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
                return ClassNames(
                    classes.sectionalTab,
                    `${BEM_NAVIGATION_TAB_ROOT_CLASS}`,
                    className,
                    {
                        [`${BEM_NAVIGATION_TAB_ROOT_CLASS}--first`]: !tabIndex,
                        [`${BEM_NAVIGATION_TAB_ROOT_CLASS}--selected`]: selected,
                        [`${BEM_NAVIGATION_TAB_ROOT_CLASS}--disabled`]: disabled,
                    },
                );
            case 'content':
                return ClassNames(
                    classes.sectionalTabsPanelContent,
                    `${BEM_NAVIGATION_SECTIONAL_TABS}--content`,
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
            return <SectionalTabContent {...this.getPanelProps(panels[selectedTabKey])} />;
        }

        return null;
    }

    render() {
        const {
            classes,
            withContent,
        } = this.props;

        const {
            selectedTabDimensions,
        } = this.state;

        const {
            panels,
            tabsHidden,
            tabsVisible,
        } = this.getTabs();

        const selectedTabKey = this.getSelectedTabKey();

        const rootClasses = ClassNames(
            classes.root,
            `${BEM_NAVIGATION_SECTIONAL_TABS}--container`,
        );

        const tabsClasses = ClassNames(
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

        const indicatorStyle = {
            left: selectedTabDimensions?.left ?? 0,
            width: selectedTabDimensions?.width ?
                selectedTabDimensions.width :
                0,
        };

        return (
            <div
                className={rootClasses}
                ref={(ref) => { this.tabsWrapperRef = ref; }}
                role="presentation"
            >
                <div className={tabsClasses}>
                    {tabsVisible.reduce((result, tab) => {
                        result.push(
                            <SectionalTab
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...this.getTabProps(tab)}
                            />,
                        );

                        return result;
                    }, [])}

                    <span
                        className={classes.indicator}
                        style={{
                            ...indicatorStyle,
                        }}
                    />

                    {hiddenTabsDropDown}
                </div>

                {withContent && this.getExpandedTabs(panels, selectedTabKey)}

                {<ResizeDetector handleWidth onResize={this.onResizeThrottled} />}
            </div>
        );
    }
}

SectionalTabs.propTypes = propTypes;
SectionalTabs.defaultProps = defaultProps;

const SectionalTabsWithStyles = withStyles(styles, { withTheme: true })(SectionalTabs);
export default SectionalTabsWithStyles;
