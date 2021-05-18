import {
    isArray,
    isEmpty,
    isFunction,
    isUndefined,
    map,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { GRID_SIZES } from '../../layout/grid/gridConstants';
import ActionBarActionsButton from './actionBarActionsButton'; // eslint-disable-line import/no-cycle
import ActionBarSearch from './actionBarSearch';
import Button from '../../inputs/button';
import DropdownButton from '../../inputs/dropdownButton';
import Grid from '../../layout/grid';
import Icon from '../../dataDisplay/icon';
import List from '../../dataDisplay/list';
import Utils from '../../utils/utils';
import withStyles from '../../styles/withStyles';

const propTypes = {
    /**
     * The content of the ActionBar
     */
    children: PropTypes.node,
    classes: PropTypes.shape({
        drawer: PropTypes.string,
        page: PropTypes.string,
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({
        button: PropTypes.shape({}),
        dropdownButton: PropTypes.shape({
            className: PropTypes.string,
            color: PropTypes.oneOf(Utils.colorEnums()),
            disable: PropTypes.bool,
            iconType: PropTypes.oneOf(['chevron-down', 'plus']),
            id: PropTypes.string,
            onClick: PropTypes.func,
            style: PropTypes.shape({}),
            title: PropTypes.string,
        }),
        jsx: PropTypes.node,
        lg: PropTypes.oneOf(GRID_SIZES),
        list: PropTypes.arrayOf(PropTypes.shape({
            actionsButton: PropTypes.shape({}),
            divide: PropTypes.bool,
            jsx: PropTypes.node,
            iconBack: PropTypes.shape({}),
            iconFilter: PropTypes.shape({}),
            iconGrid: PropTypes.shape({}),
            iconSearch: PropTypes.shape({}),
            iconTable: PropTypes.shape({}),
        })),
        md: PropTypes.oneOf(GRID_SIZES),
        search: PropTypes.shape({}),
        sm: PropTypes.oneOf(GRID_SIZES),
        xl: PropTypes.oneOf(GRID_SIZES),
    })),
    id: PropTypes.string,
    /**
     * Defines the `justify-content` style property.
     * It is applied for all screen sizes.
     */
    justifyContent: PropTypes.oneOf([
        'center',
        'flex-end',
        'flex-start',
        'space-around',
        'space-between',
        'space-evenly',
    ]),
    moduleType: PropTypes.oneOf(['drawer', 'page']),
    style: PropTypes.shape({}),
    toggleSmSearchVisibleClassName: PropTypes.func,
};

const defaultProps = {
    children: undefined,
    classes: null,
    className: undefined,
    columns: [],
    id: undefined,
    justifyContent: 'flex-start',
    moduleType: undefined,
    style: {},
    toggleSmSearchVisibleClassName: null,
};

const styles = (theme) => {
    const standardThirdTiming = 300;
    const standardFifthTiming = 200;

    /**
     * Forwards
     * Step 1: Fade out title and non-selected parent options
     */
    const forwardsStep1Duration = `${standardFifthTiming}ms`;

    /**
     * Step 2: Reveal selected parent option by highlighting it.
     */
    const forwardsStep2Delay = `${forwardsStep1Duration + 50}ms`;
    const forwardsStep2Duration = `${standardThirdTiming}ms`;

    /**
     * Step 3: Move selected parent option to top of drawer and show --sub_options
     */
    const forwardsStep3Delay = `${forwardsStep1Duration + forwardsStep2Delay + forwardsStep2Duration}ms`;
    const forwardsStep3Duration = `${standardThirdTiming}ms`;

    /**
     * Step 4: By staggering, fade in and move down sub options.
     */
    const forwardsStep4Delay = `${forwardsStep3Delay + forwardsStep3Duration}ms`;
    const forwardsStep4Duration = `${standardThirdTiming}ms`;

    /**
     * Backwards
     * Step 1: These will happen right away, in otherwords, no delay.
     *         Move sub options up and fade out
     *         Move selected option back down
     */
    const backwardsStep1Duration = `${standardFifthTiming}ms`;

    /**
     * Step 2: Move selected parent option back down and hide --sub_options
     */
    const backwardsStep2Delay = `${backwardsStep1Duration + 50}ms`;
    const backwardsStep2Duration = `${standardThirdTiming}ms`;

    /**
     * Step 3: Remove highlight on selected option
     */
    const backwardsStep3Delay = `${backwardsStep2Delay + backwardsStep2Duration}ms`;
    const backwardsStep3Duration = `${standardThirdTiming}ms`;

    /**
     * Step 4: Fade in drawer title
     *         By staggering, fade in and move down options.
     */
    const backwardsStep4Delay = `${backwardsStep3Delay + backwardsStep3Duration}ms`;
    const backwardsStep4Duration = `${standardFifthTiming}ms`;

    let optionContainerStyles;
    let subOptionStyles;

    for (let i = 1; i <= 11; i += 1) {
        optionContainerStyles = {
            [`&-${i}-hide`]: {
                opacity: 0,
                pointerEvents: 'none',
                transition: `opacity ${forwardsStep1Duration} ease-in-out`,
            },
            [`&-${i}-show`]: {
                opacity: 1,
                transform: 'translateY(0)',
                transition: `opacity ${backwardsStep4Duration} ease-in-out ${backwardsStep4Delay + i * 50}ms,
                            transform ${backwardsStep2Duration} ease-in-out ${backwardsStep2Delay}`,
            },
        };

        subOptionStyles = {
            [`&-${i}`]: {
                opacity: 0,
                transform: 'translateY(-55px)',
                transition: `opacity ${backwardsStep1Duration} ease-in-out 0ms,
                            transform ${backwardsStep1Duration} ease-in-out 0ms`,
            },
            [`&-${i}-show`]: {
                opacity: 1,
                transform: 'translateY(0)',
                transition: `opacity ${forwardsStep4Duration} ease-in-out ${forwardsStep4Delay + i * 50}ms,
                            transform ${forwardsStep4Duration} ease-in-out ${forwardsStep4Delay + i * 50}ms`,
            },
            [`&-${i}-disabled`]: {
                color: theme.palette.text.secondary,
                cursor: 'default',
            },
        };
    }

    return {
        drawer: {},
        page: {},
        root: {
            alignItems: 'center',
            borderBottom: `1px solid ${theme.palette.border.primary}`,
            display: 'flex',
            justifyContent: 'flex-start',
            left: 0,
            position: 'fixed',
            right: 0,
            [theme.breakpoints.down('md')]: {
                minHeight: theme.height.actionBar.sm,
                top: theme.height.appHeader.sm,
                '& .button': {
                    height: 32,
                    minHeight: 32,
                    '&-icon': {
                        width: 32,
                        '& .button-inner-container': {
                            width: 32,
                        },
                    },
                    '& .button-inner-container': {
                        height: 32,
                    },
                },
            },
            '&.drawer-has_action_bar': {
                '& .drawer-container-inner, & .drawer--wing-container-inner': {
                    paddingTop: theme.height.actionBar.sm,
                    [theme.breakpoints.up('md')]: {
                        paddingTop: theme.height.actionBar.md,
                    },
                    '& .ui.drawer--action_bar': {
                        top: 0,
                    },
                },
            },
            '&.drawer-has_title_bar.drawer-has_action_bar': {
                '&:not(.drawer-has_navigation)': {
                    '& .drawer-container-inner, & .drawer--wing-container-inner': {
                        '& .ui.drawer--title_bar': {
                            borderBottom: 'none',
                        },
                        '& .ui.drawer--action_bar': {
                            backgroundColor: theme.palette.background.light,
                            borderTop: `1px solid ${theme.palette.border.primary}`,
                        },
                    },
                },
                '& .drawer-container-inner, & .drawer--wing-container-inner': {
                    paddingTop: theme.height.appHeader.sm + theme.height.actionBar.sm,
                    [theme.breakpoints.up('md')]: {
                        paddingTop: theme.height.appHeader.md + theme.height.actionBar.md,
                    },
                    '& .ui.drawer--action_bar': {
                        top: theme.height.appHeader.sm,
                        [theme.breakpoints.up('md')]: {
                            top: theme.height.appHeader.md,
                        },
                    },
                },
            },
            '&.drawer-has_title_bar.drawer-has_navigation.drawer-has_action_bar': {
                '& .drawer-container-inner, & .drawer--wing-container-inner': {
                    paddingTop: theme.height.appHeader.sm + 55 + theme.height.actionBar.sm,
                    [theme.breakpoints.up('md')]: {
                        paddingTop: theme.height.appHeader.md + 55 + theme.height.actionBar.md,
                    },
                    '& .ui.drawer--action_bar': {
                        top: theme.height.appHeader.sm + 55,
                        [theme.breakpoints.up('md')]: {
                            top: theme.height.appHeader.md + 55,
                        },
                    },
                },
            },
            '&$drawer': {
                backgroundColor: theme.palette.background.primary,
                padding: '8px 11px',
                zIndex: theme.zIndex.drawer,
                [theme.breakpoints.up('md')]: {
                    height: theme.height.actionBar.md,
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(2),
                },
            },
            '&$page': {
                backgroundColor: theme.palette.background.light,
                borderTop: `1px solid ${theme.palette.border.primary}`,
                minHeight: 50,
                padding: '8px 11px',
                top: 55,
                width: 'auto',
                zIndex: 3,
                [theme.breakpoints.up('md')]: {
                    left: 250,
                    minHeight: 70,
                    padding: '0 22px',
                    top: 70,
                },
            },
            '& .action_bar--grid_column': {
                padding: [[0, theme.spacing(1)]],
                '&:first-child': {
                    paddingLeft: 0,
                },
                '&:last-child': {
                    paddingRight: 0,
                },
            },
            '& .action_bar--list': {
                alignItems: 'center',
                display: 'flex',
            },
            '& .action_bar--list_item': {
                alignItems: 'center',
                alignSelf: 'stretch',
                display: 'inline-flex',
                justifyContent: 'center',
                marginLeft: '0 !important',
                padding: '0 11px !important',
                '&::before': {
                    height: '88% !important',
                },
                '&:first-child': {
                    paddingLeft: '0 !important',
                },
                '&:last-child': {
                    paddingRight: '0 !important',
                },
            },
            '& .actions_button_drawer': {
                '&--content': {
                    padding: '22px 11px',
                },
                '&--title-hide': {
                    opacity: 0,
                    transition: 'opacity $forwardsStep1Duration ease-in-out',
                },
                '&--title-show': {
                    opacity: 1,
                    transition: 'opacity $backwardsStep4Duration ease-in-out $backwardsStep4Delay',
                },
                '&--option_container': {
                    fontSize: 14,
                    fontWeight: '$fontWeightSemiBold',
                    margin: '0 -11px',
                    position: 'relative',
                    '&:first-child': {
                        borderTop: `1px solid ${theme.palette.border.primary}`,
                    },
                    ...optionContainerStyles,
                    '&-selected': {
                        transform: 'translateY(-61px)',
                        transition: `transform ${forwardsStep3Duration} ease-in-out ${forwardsStep3Delay}`,
                        '&:first-child': {
                            borderTop: 0,
                        },
                    },
                },
            },
            '& .actions_button_drawer--option, & .actions_button_drawer--sub_option': {
                alignItems: 'center',
                borderBottom: `1px solid ${theme.palette.border.primary}`,
                color: theme.palette.text.primary,
                cursor: 'pointer',
                display: 'flex',
                minHeight: 55,
                opacity: 1,
                outline: 'none',
                padding: 11,
                position: 'relative',
            },
            '& .actions_button_drawer--option': {
                transition: `color ${backwardsStep3Duration} / 2 ease-in ${backwardsStep3Delay}`,
                zIndex: 1,
                '&::before': {
                    backgroundColor: theme.palette.cyan[500],
                    content: '',
                    height: 54,
                    left: 0,
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    transition: `opacity 1ms ease-in-out ${backwardsStep3Delay} + ${backwardsStep3Duration},
                                width ${backwardsStep3Duration} ease-in-out ${backwardsStep3Delay}`,
                    width: 0,
                    zIndex: 0,
                },
                '&-disabled': {
                    color: theme.palette.text.secondary,
                    cursor: 'default',
                },
                '&-selected': {
                    borderBottom: 0,
                    color: theme.palette.text.contrastText,
                    transition: `color ${forwardsStep2Duration} / 2 ease-in ${forwardsStep2Delay}`,
                    '&::before': {
                        opacity: 1,
                        transition: `width ${forwardsStep2Duration} ease-in-out ${forwardsStep2Delay}`,
                        width: '100%',
                    },
                },
            },
            '& .actions_button_drawer--sub_options': {
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0,
                '&-hide': {
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: `opacity ${backwardsStep3Duration} ease-in-out ${backwardsStep3Delay}`,
                },
                '&-show': {
                    opacity: 1,
                    paddingTop: 55,
                    transition: `opacity 1ms ease-in-out ${forwardsStep3Delay}
                                padding-top 1ms ease-in-out ${forwardsStep3Delay}`,
                },
            },
            '& .actions_button_drawer_option, & .actions_button_drawer_sub_option': {
                '&--icon_container, &--label': {
                    zIndex: 1,
                },
                '&--icon_container': {
                    alignItems: 'center',
                    display: 'inline-flex',
                    height: 32,
                    justifyContent: 'center',
                    marginRight: 16,
                    transition: 'background-color 200ms ease-in',
                    width: 32,
                    zIndex: 1,
                },
            },
            '& .actions_button_drawer_option--icon_container': {
                backgroundColor: theme.palette.background.contrastPrimary,
                borderRadius: '50%',
            },
            '& .actions_button_drawer--sub_option': {
                ...subOptionStyles,
            },
            '& .action_bar--search-mobile': {
                height: 0,
                opacity: 0,
                overflow: 'hidden',
                paddingTop: 0,
                transition: 'height 333ms ease-in-out, opacity 333ms ease-in-out, padding-top 333ms ease-in-out',
                '&-show': {
                    height: 55,
                    opacity: 1,
                    paddingTop: 11,
                },
            },
            '& .action_bar--clear_search': {
                alignItems: 'center',
                cursor: 'pointer',
                display: 'inline-flex',
                height: 33,
                justifyContent: 'center',
                transform: 'translate(8px, -8px)',
                width: 33,
            },
            '& .action_bar--actions_button': {
                marginRight: 0,
            },
        },
    };
};

class ActionBar extends React.Component {
    constructor() {
        super();

        this.state = {
            isMobileSearchVisible: false,
        };

        this.onMobileSearchIconToggle = this.onMobileSearchIconToggle.bind(this);
    }

    onMobileSearchIconToggle() {
        this.setState((prevState) => ({
            isMobileSearchVisible: !prevState.isMobileSearchVisible,
        }), () => {
            const { toggleSmSearchVisibleClassName } = this.props;
            const { isMobileSearchVisible } = this.state;

            if (isFunction(toggleSmSearchVisibleClassName)) {
                toggleSmSearchVisibleClassName(isMobileSearchVisible);
            }
        });
    }

    render() {
        const {
            children,
            classes,
            className,
            columns,
            id,
            justifyContent,
            moduleType,
            style,
        } = this.props;

        const { isMobileSearchVisible } = this.state;

        const containerClasses = ClassNames(
            'ui',
            'action_bar',
            `${moduleType}--action_bar`,
            classes.root,
            className,
            {
                [classes.drawer]: moduleType === 'drawer',
                [classes.page]: !moduleType || moduleType === 'page',
            },
        );

        let searchDataForMobile = null;
        let gridColumnKeyNum = 1;
        let gridColumnListItemKeyNum = 1;

        return (
            <header
                className={containerClasses}
                id={id}
                ref={(ref) => { this.actionBarRef = ref; }}
                style={style}
            >
                <div style={{ width: '100%' }}>
                    {!isEmpty(columns) && (
                        <React.Fragment>
                            <Grid
                                alignItems="center"
                                className="action_bar--grid"
                                flexWrap="nowrap"
                                justifyContent={justifyContent}
                                spacing={0}
                            >
                                {map(columns, (column) => {
                                    const {
                                        button,
                                        dropdownButton,
                                        columns, // eslint-disable-line no-shadow
                                        jsx,
                                        search,
                                    } = column;
                                    let { list } = column;
                                    const gridColumnClasses = ClassNames('action_bar--grid_column', column.className);
                                    const gridColumnKey = `action_bar--grid_column-${gridColumnKeyNum++}`; // eslint-disable-line no-plusplus

                                    if (columns) {
                                        console.warn('ActionsBar\'s columns.columns is deprecated. Please use columns.list instead.'); // eslint-disable-line no-console

                                        list = [...columns];
                                    }

                                    if (!button && !dropdownButton && !jsx && !list && !search) {
                                        console.warn( // eslint-disable-line no-console
                                            `${'<Page.ActionsBar>\'s column object must have one of the ' +
                                            'following properties: button, jsx, or list.' +
                                            'Please check this column object '}${JSON.stringify(column)}`,
                                        );

                                        return false;
                                    }

                                    let dropdownButtonOptionKeyNum = 1;

                                    return (
                                        <Grid.Column
                                            className={gridColumnClasses}
                                            key={gridColumnKey}
                                            lg={column.lg}
                                            md={column.md}
                                            sm={column.sm}
                                            /**
                                             * NOTE: Remove `flexBasis`, `flexGrow`, `flexShrink`,
                                             * and `width` when we finally remove the deprecated
                                             * style prop.
                                             */
                                            style={({
                                                flexBasis: column.flexBasis || null,
                                                flexGrow: column.flexGrow || null,
                                                flexShrink: column.flexShrink || null,
                                                width: 'auto',
                                                ...column.style,
                                            })}
                                            xl={column.xl}
                                        >
                                            <div
                                                style={{
                                                    ...column.style,
                                                }}
                                            >
                                                {button && (
                                                    <Button
                                                        color={button.color}
                                                        disabled={!!button.disabled}
                                                        icon={button.iconType && !button.label}
                                                        id={button.id}
                                                        onClick={button.onClick}
                                                        style={button.style}
                                                    >
                                                        {button.iconType && <Icon type={button.iconType} />}
                                                        {button.label && <span>{button.label}</span>}
                                                    </Button>
                                                )}

                                                {dropdownButton && (
                                                    <DropdownButton
                                                        className={dropdownButton.className}
                                                        color={dropdownButton.color}
                                                        disable={dropdownButton.disable}
                                                        iconType={dropdownButton.iconType}
                                                        id={dropdownButton.id}
                                                        label={dropdownButton.label}
                                                        onClick={dropdownButton.onClick}
                                                        style={dropdownButton.style}
                                                        title={dropdownButton.title}
                                                    >
                                                        {map(dropdownButton.options, (option) => {
                                                            dropdownButtonOptionKeyNum += 1;

                                                            return (
                                                                <DropdownButton.Option
                                                                    className={option.className}
                                                                    disabled={!!option.disabled}
                                                                    id={option.id}
                                                                    key={`action_bar_dropdown_button_option-${dropdownButtonOptionKeyNum}`}
                                                                    label={option.label}
                                                                    onClick={option.onClick}
                                                                    onKeyDown={option.onKeyDown}
                                                                    style={option.style}
                                                                    tabIndex={option.tabIndex}
                                                                />
                                                            );
                                                        })}
                                                    </DropdownButton>
                                                )}

                                                {list && isArray(list) && (
                                                    <List
                                                        className="action_bar--list"
                                                        horizontal
                                                    >
                                                        {map(list, (item) => {
                                                            const {
                                                                actionsButton,
                                                                jsx: listJsx,
                                                                iconBack,
                                                                iconFilter,
                                                                iconGrid,
                                                                iconSearch,
                                                                iconTable,
                                                            } = item;

                                                            const divide = isUndefined(item.divide) ||
                                                                item.divide;

                                                            const listItemClassName = ClassNames('action_bar--list_item', {
                                                                'action_bar--list_item-jsx': listJsx,
                                                                'action_bar--list_item-icon_filter': iconFilter,
                                                                'action_bar--list_item-icon_grid': iconGrid,
                                                                'action_bar--list_item-icon_table': iconTable,
                                                            });

                                                            const itemKey = `action_bar--list_item-${gridColumnListItemKeyNum++}`; // eslint-disable-line no-plusplus

                                                            if (!actionsButton &&
                                                                    !listJsx &&
                                                                    !iconBack &&
                                                                    !iconFilter &&
                                                                    !iconGrid &&
                                                                    !iconSearch &&
                                                                    !iconTable
                                                            ) {
                                                                console.warn( // eslint-disable-line no-console, max-len
                                                                    `${'<Page.ActionsBar>\'s column.list object must have one of the ' +
                                                                        'following properties: actionsButton, iconBack, iconFilter, iconGrid, or iconTable.' +
                                                                        'Please check this column.list object '}${JSON.stringify(item)}`,
                                                                );

                                                                return false;
                                                            }

                                                            if (iconSearch) {
                                                                /* eslint-disable max-len */
                                                                /* eslint-disable react/jsx-props-no-spreading */
                                                                searchDataForMobile = (
                                                                    <ActionBarSearch
                                                                        {...iconSearch}
                                                                        isMobileSearch
                                                                        isMobileSearchVisible={isMobileSearchVisible}
                                                                        type="mobileSearch"
                                                                    />
                                                                );
                                                                /* eslint-enable react/jsx-props-no-spreading */
                                                                /* eslint-enable max-len */
                                                            }

                                                            return (
                                                                <List.Item
                                                                    className={listItemClassName}
                                                                    divide={divide}
                                                                    key={itemKey}
                                                                    style={({
                                                                        alignItems: item.alignItems || 'flex-start',
                                                                        flexBasis: item.flexBasis || 'auto',
                                                                        flexGrow: item.flexGrow || 0,
                                                                        flexShrink: item.flexShrink || 0,
                                                                        width: 'auto',
                                                                        ...list.style,
                                                                    })}
                                                                >
                                                                    {/* eslint-disable max-len */}
                                                                    {actionsButton && (
                                                                    <ActionBarActionsButton
                                                                        className={actionsButton.className}
                                                                        iconBackgroundColor={actionsButton.iconBackgroundColor}
                                                                        iconBackgroundHighlightColor={actionsButton.iconBackgroundHighlightColor}
                                                                        iconType={actionsButton.iconType}
                                                                        id={actionsButton.id}
                                                                        isMobileSearchVisible={isMobileSearchVisible}
                                                                        header={actionsButton.header}
                                                                        moduleType={moduleType}
                                                                        options={actionsButton.options}
                                                                        style={actionsButton.style}
                                                                    />
                                                                    )}
                                                                    {/* eslint-enable max-len */}

                                                                    {iconBack && (
                                                                    <Icon
                                                                        color={iconBack.selected ?
                                                                            'highlight' :
                                                                            null}
                                                                        id={iconBack.id}
                                                                        onClick={iconBack.onClick}
                                                                        title={iconBack.title || 'Back'}
                                                                        type="chevron-left"
                                                                    />
                                                                    )}

                                                                    {/* eslint-disable max-len */}
                                                                    {iconFilter && (
                                                                    <Icon
                                                                        color={iconFilter.selected || iconFilter.isFiltering ?
                                                                            'highlight' :
                                                                            null}
                                                                        id={iconFilter.id}
                                                                        onClick={iconFilter.onClick}
                                                                        title={iconFilter.title || 'Filter'}
                                                                        type="filter"
                                                                    />
                                                                    )}
                                                                    {/* eslint-enable max-len */}

                                                                    {iconGrid && (
                                                                    <Icon
                                                                        color={iconGrid.selected ?
                                                                            'highlight' :
                                                                            null}
                                                                        id={iconGrid.id}
                                                                        onClick={iconGrid.onClick}
                                                                        title={iconGrid.title || 'Grid View'}
                                                                        type="grid"
                                                                    />
                                                                    )}

                                                                    {/* eslint-disable max-len */}
                                                                    {iconSearch && (
                                                                    <Icon
                                                                        className="action_bar--search_icon"
                                                                        color={isMobileSearchVisible ?
                                                                            'highlight' :
                                                                            null}
                                                                        id={iconSearch.id}
                                                                        onClick={this.onMobileSearchIconToggle}
                                                                        title={iconSearch.title || 'Search'}
                                                                        type="search"
                                                                    />
                                                                    )}
                                                                    {/* eslint-enable max-len */}

                                                                    {iconTable && (
                                                                    <Icon
                                                                        color={iconTable.selected ?
                                                                            'highlight' :
                                                                            null}
                                                                        id={iconTable.id}
                                                                        onClick={iconTable.onClick}
                                                                        title={iconTable.title || 'Table View'}
                                                                        type="list"
                                                                    />
                                                                    )}

                                                                    {listJsx}
                                                                </List.Item>
                                                            );
                                                        })}
                                                    </List>
                                                )}

                                                {search && (
                                                    <ActionBarSearch
                                                        id={search.id}
                                                        onChange={search.onChange}
                                                        onClearClick={search.onClearClick}
                                                        onKeyDown={search.onKeyDown}
                                                        value={search.value}
                                                    />
                                                )}

                                                {jsx}
                                            </div>
                                        </Grid.Column>
                                    );
                                })}
                            </Grid>

                            {searchDataForMobile}
                        </React.Fragment>
                    )}

                    {children}
                </div>
            </header>
        );
    }
}

ActionBar.propTypes = propTypes;
ActionBar.defaultProps = defaultProps;

export default withStyles(styles)(ActionBar);
