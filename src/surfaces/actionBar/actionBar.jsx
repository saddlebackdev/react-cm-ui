import {
    isArray,
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
            drawerContainer: PropTypes.node,
            jsx: PropTypes.node,
            iconBack: PropTypes.shape({}),
            iconFilter: PropTypes.shape({}),
            iconGrid: PropTypes.shape({}),
            iconSearch: PropTypes.shape({}),
            iconSettings: PropTypes.shape({}),
            iconTable: PropTypes.shape({}),
        })),
        md: PropTypes.oneOf(GRID_SIZES),
        search: PropTypes.shape({
            id: PropTypes.string,
            onChange: PropTypes.func,
            onClearClick: PropTypes.func,
            onKeyDown: PropTypes.func,
            value: PropTypes.string,
        }),
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
    const actionsButtonDrawerOptionHeight = 55;
    const standardThirdTiming = 300;
    const standardFifthTiming = 200;

    /**
     * Forwards
     * Step 1: Fade out title and non-selected parent options
     */
    const forwardsStep1Duration = standardFifthTiming;

    /**
     * Step 2: Reveal selected parent option by highlighting it.
     */
    const forwardsStep2Delay = forwardsStep1Duration + 50;
    const forwardsStep2Duration = standardThirdTiming;

    /**
     * Step 3: Move selected parent option to top of drawer and show --sub_options
     */
    const forwardsStep3Delay = forwardsStep1Duration + forwardsStep2Delay + forwardsStep2Duration;
    const forwardsStep3Duration = standardThirdTiming;

    /**
     * Step 4: By staggering, fade in and move down sub options.
     */
    const forwardsStep4Delay = forwardsStep3Delay + forwardsStep3Duration;
    const forwardsStep4Duration = standardThirdTiming;

    /**
     * Backwards
     * Step 1: These will happen right away, in otherwords, no delay.
     *         Move sub options up and fade out
     *         Move selected option back down
     */
    const backwardsStep1Duration = standardFifthTiming;

    /**
     * Step 2: Move selected parent option back down and hide --sub_options
     */
    const backwardsStep2Delay = backwardsStep1Duration + 50;
    const backwardsStep2Duration = standardThirdTiming;

    /**
     * Step 3: Remove highlight on selected option
     */
    const backwardsStep3Delay = backwardsStep2Delay + backwardsStep2Duration;
    const backwardsStep3Duration = standardThirdTiming;

    /**
     * Step 4: Fade in drawer title
     *         By staggering, fade in and move down options.
     */
    const backwardsStep4Delay = backwardsStep3Delay + backwardsStep3Duration;
    const backwardsStep4Duration = standardFifthTiming;

    let optionContainerStyles;
    let subOptionStyles;

    for (let i = 1; i <= 11; i += 1) {
        const optionYPos = i === 1 ? 0 : actionsButtonDrawerOptionHeight * (i - 1);
        const titleBarheight = 61;
        const optionContainerTranslateYPos = titleBarheight + optionYPos;

        optionContainerStyles = {
            ...optionContainerStyles,
            [`&-${i}-selected`]: {
                transform: `translateY(-${optionContainerTranslateYPos}px)`,
            },
            [`&-${i}-hide`]: {
                opacity: 0,
                pointerEvents: 'none',
                transition: `opacity ${forwardsStep1Duration}ms ease-in-out`,
            },
            [`&-${i}-show`]: {
                opacity: 1,
                transform: 'translateY(0)',
                transition: `opacity ${backwardsStep4Duration}ms ease-in-out ${backwardsStep4Delay + i * 50}ms,
                            transform ${backwardsStep2Duration}ms ease-in-out ${backwardsStep2Delay}ms`,
            },
        };

        subOptionStyles = {
            ...subOptionStyles,
            [`&-${i}`]: {
                opacity: 0,
                transform: `translateY(-${actionsButtonDrawerOptionHeight}px)`,
                transition: `opacity ${backwardsStep1Duration}ms ease-in-out 0ms,
                            transform ${backwardsStep1Duration}ms ease-in-out 0ms`,
            },
            [`&-${i}-show`]: {
                opacity: 1,
                transform: 'translateY(0)',
                transition: `opacity ${forwardsStep4Duration}ms ease-in-out ${forwardsStep4Delay + i * 50}ms,
                            transform ${forwardsStep4Duration}ms ease-in-out ${forwardsStep4Delay + i * 50}ms`,
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
            [theme.breakpoints.up('md')]: {
                padding: '0 22px',
            },
            '&$drawer': {
                backgroundColor: theme.palette.background.primary,
                padding: '8px 11px',
                zIndex: theme.zIndex.drawer,
                [theme.breakpoints.up('md')]: {
                    height: theme.height.actionBar.md,
                },
            },
            '&$page': {
                backgroundColor: theme.palette.background.light,
                borderTop: `1px solid ${theme.palette.border.primary}`,
                minHeight: 50,
                padding: '8px 11px',
                top: actionsButtonDrawerOptionHeight,
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
                paddingBottom: 0,
                paddingTop: 0,
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
                margin: 5.5,
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
            '& .action_bar--search-mobile': {
                height: 0,
                opacity: 0,
                overflow: 'hidden',
                paddingTop: 0,
                transition: 'height 333ms ease-in-out, opacity 333ms ease-in-out, padding-top 333ms ease-in-out',
                '&-show': {
                    height: actionsButtonDrawerOptionHeight,
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
        '@global': {
            '.actions_button_drawer': {
                '&--content': {
                    padding: '22px 11px',
                },
                '&--title-hide': {
                    opacity: 0,
                    transition: `opacity ${forwardsStep1Duration}ms ease-in-out`,
                },
                '&--title-show': {
                    opacity: 1,
                    transition: `opacity ${backwardsStep4Duration}ms ease-in-out ${backwardsStep4Delay}ms`,
                },
                '&--option_container': {
                    fontSize: 14,
                    fontWeight: theme.typography.fontWeightMedium,
                    margin: '0 -11px',
                    position: 'relative',
                    transition: `transform ${forwardsStep3Duration}ms ease-in-out ${forwardsStep3Delay}ms`,
                    '&:first-child': {
                        borderTop: `1px solid ${theme.palette.border.primary}`,
                    },
                    ...optionContainerStyles,
                    '&-selected': {
                        '&:first-child': {
                            borderTop: 0,
                        },
                    },
                },
            },
            '.actions_button_drawer--option, .actions_button_drawer--sub_option': {
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
            '.actions_button_drawer--option': {
                transition: `color ${backwardsStep3Duration / 2}ms ease-in ${backwardsStep3Delay}ms`,
                zIndex: 1,
                '&::before': {
                    backgroundColor: theme.palette.cyan[500],
                    content: '""',
                    height: 54,
                    left: 0,
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    transition: `opacity 1ms ease-in-out ${backwardsStep3Delay + backwardsStep3Duration}ms,
                                width ${backwardsStep3Duration}ms ease-in-out ${backwardsStep3Delay}ms`,
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
                    transition: `color ${forwardsStep2Duration / 2}ms ease-in ${forwardsStep2Delay}ms`,
                    '&::before': {
                        opacity: 1,
                        transition: `width ${forwardsStep2Duration}ms ease-in-out ${forwardsStep2Delay}ms`,
                        width: '100%',
                    },
                },
            },
            '.actions_button_drawer--sub_options': {
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0,
                '&-hide': {
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: `opacity ${backwardsStep3Duration}ms ease-in-out ${backwardsStep3Delay}ms`,
                },
                '&-show': {
                    opacity: 1,
                    paddingTop: 55,
                    transition: `opacity 1ms ease-in-out ${forwardsStep3Delay}ms,
                                padding-top 1ms ease-in-out ${forwardsStep3Delay}ms`,
                },
            },
            '.actions_button_drawer_option, .actions_button_drawer_sub_option': {
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
            '.actions_button_drawer_option--icon_container': {
                backgroundColor: theme.palette.background.contrastPrimary,
                borderRadius: '50%',
            },
            '.actions_button_drawer--sub_option': {
                ...subOptionStyles,
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

        this.actionBarRef = React.createRef();
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
                ref={this.actionBarRef}
                style={style}
            >
                <div style={{ width: '100%' }}>
                    {columns && (
                        <React.Fragment>
                            <Grid
                                alignItems="center"
                                className="action_bar--grid"
                                flexWrap="nowrap"
                                justifyContent={justifyContent}
                                spacing={1}
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
                                                                iconSettings,
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
                                                                    !iconSettings &&
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
                                                                            actionBarRef={this.actionBarRef}
                                                                            className={actionsButton.className}
                                                                            drawerContainer={actionsButton.drawerContainer}
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

                                                                    {/* eslint-disable max-len */}
                                                                    {iconSettings && (
                                                                        <Icon
                                                                            color={iconSettings.selected || iconSettings.isCustom ?
                                                                                'highlight' :
                                                                                null}
                                                                            id={iconSettings.id}
                                                                            onClick={iconSettings.onClick}
                                                                            title={iconSettings.title || 'Settings'}
                                                                            type="settings"
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
                                                        classes={search.classes}
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
