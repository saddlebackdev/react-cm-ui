import {
    isFunction,
    find,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
    BEM_ACTION_BAR,
} from '../../global/constants';
import { COLUMNS_PROP_TYPES } from './actionBarConstants';
import ActionBarGridColumns from './actionBarGridColumns';
import ActionBarSearch from './actionBarSearch';
import Grid from '../../layout/grid';
import withStyles from '../../styles/withStyles';

const propTypes = {
    /**
     * The content of the ActionBar
     */
    children: PropTypes.node,
    classes: PropTypes.shape({
        drawer: PropTypes.string,
        grid: PropTypes.string,
        page: PropTypes.string,
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    columns: COLUMNS_PROP_TYPES,
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
    children: null,
    classes: null,
    className: null,
    columns: [],
    id: null,
    justifyContent: 'flex-start',
    moduleType: null,
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
        grid: {
            margin: [[0, -theme.spacing(0.5)]],
        },
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
                padding: [[2.5, theme.spacing(1)]],
                zIndex: theme.zIndex.drawer,
                [theme.breakpoints.up('md')]: {
                    height: theme.height.actionBar.md,
                },
            },
            '&$page': {
                backgroundColor: theme.palette.background.light,
                borderTop: `1px solid ${theme.palette.border.primary}`,
                minHeight: 50,
                padding: [[2.5, theme.spacing(1)]],
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
            '& .action_bar--search-mobile': {
                height: 0,
                opacity: 0,
                overflow: 'hidden',
                paddingTop: 0,
                transition: 'height 333ms ease-in-out, opacity 333ms ease-in-out, padding-top 333ms ease-in-out',
                '&-show': {
                    height: 46.5,
                    marginBottom: 8.5,
                    opacity: 1,
                    paddingTop: 2.5,
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
                    padding: [[22, theme.spacing(1)]],
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
                    margin: [[0, -theme.spacing(1)]],
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
                padding: theme.spacing(1),
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
        this.actionBarSearchRef = React.createRef();
        this.onMobileSearchIconToggle = this.onMobileSearchIconToggle.bind(this);
    }

    onMobileSearchIconToggle() {
        this.setState((prevState) => ({
            isMobileSearchVisible: !prevState.isMobileSearchVisible,
        }), () => {
            const { toggleSmSearchVisibleClassName } = this.props;
            const { isMobileSearchVisible } = this.state;

            if (isMobileSearchVisible && this.actionBarSearchRef) {
                const actionBarSearchNode = this.actionBarSearchRef.current.rootRef.current;

                actionBarSearchNode.querySelector('input').focus();
            }

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
            UI_CLASS_NAME,
            BEM_ACTION_BAR,
            classes.root,
            className,
            {
                [classes.drawer]: moduleType === 'drawer',
                [classes.page]: !moduleType || moduleType === 'page',
            },
        );

        const iconSearchColumn = find(columns, 'iconSearch');

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
                                className={classes.grid}
                                flexWrap="nowrap"
                                justifyContent={justifyContent}
                                spacing={1}
                            >
                                <ActionBarGridColumns
                                    columns={columns}
                                    isMobileSearchVisible={isMobileSearchVisible}
                                    onMobileSearchIconToggle={this.onMobileSearchIconToggle}
                                />
                            </Grid>

                            {iconSearchColumn && (
                                <ActionBarSearch
                                    // eslint-disable-next-line max-len
                                    // eslint-disable-next-line react/jsx-props-no-spreading
                                    {...iconSearchColumn.iconSearch}
                                    isMobileSearch
                                    isMobileSearchVisible={isMobileSearchVisible}
                                    ref={this.actionBarSearchRef}
                                    type="mobileSearch"
                                />
                            )}
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
