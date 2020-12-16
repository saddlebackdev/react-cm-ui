import { CSSTransitionGroup } from 'react-transition-group';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ActivityIndicator from '../../feedback/activityIndicator';
import makeStyles from '../../styles/makeStyles';
import PageActionBar from './pageActionBar';
import PageContainer from './pageContainer';
import PageContent from './pageContent';
import PageDataCards from './pageDataCards';
import PageDataGrid from './pageDataGrid';
import PageDataGroups from './pageDataGroups';
import PageDelayChildren from './pageDelayChildren';
import PageDeprecatedFiltersDrawer from './pageDeprecatedFiltersDrawer';
import PageDetailsWindow from './pageDetailsWindow';
import PageFiltersDrawer from './pageFiltersDrawer';
import PageFiltersRail from './pageFiltersRail';

const propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    backgroundColor: PropTypes.oneOf([
        'grey',
        'primary',
        'secondary',
        'white',
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    id: PropTypes.string,
    isDataFetching: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    backgroundColor: 'grey',
    className: null,
    classes: null,
    id: null,
    isDataFetching: false,
    style: null,
};

const ACTIVITY_INDICATOR_DURATION = 200;

const useStyles = makeStyles((theme) => {
    const {
        breakpoints,
        gutters,
        height,
        palette,
        width,
    } = theme;

    return {
        root: {
            backgroundColor: (props) => {
                const {
                    backgroundColor,
                } = props;

                if (backgroundColor === 'secondary' || backgroundColor === 'grey') {
                    return palette.background.secondary;
                }

                return palette.background.primary;
            },
            minHeight: `calc(100vh - ${height.appHeader.sm}px)`,
            padding: `0 ${gutters.page.sm}px`,
            position: 'relative',
            width: '100%',
            '&.ui.page-has_action_bar': {
                minHeight: 'calc(100vh - 105px)',
            },
            '& .page--activity_indicator': {
                animationDuration: '200ms',
                animationFillMode: 'forwards',
                animationTimingFunction: 'ease-in-out',
                left: '50%',
                marginTop: `calc(${height.appHeader.sm}px / 2)`,
                position: 'fixed',
                top: '50%',
                '&-enter': {
                    animationName: '$pageActivityIndicatorEnter',
                },
                '&-leave': {
                    animationName: '$pageActivityIndicatorLeave',
                },
            },
            [breakpoints.up(496)]: {
                padding: `0 ${gutters.page[496]}px`,
            },
            [breakpoints.up('md')]: {
                minHeight: `calc(100vh - ${height.appHeader.md}px)`,
                '&.ui.page-has_action_bar': {
                    minHeight: 'calc(100vh - 140px)',
                },
                '& .page--activity_indicator': {
                    marginLeft: `calc(${width.navigation.md.expanded - 70}px / 2)`,
                    marginTop: 0,
                },
            },
        },
        '@keyframes pageActivityIndicatorEnter': {
            '0%': {
                opacity: 0,
            },
            '100%': {
                opacity: 1,
            },
        },
        '@keyframes pageActivityIndicatorLeave': {
            '0%': {
                opacity: 1,
            },
            '100%': {
                opacity: 0,
            },
        },
    };
});

// eslint-disable-next-line prefer-arrow-callback
const Page = React.forwardRef(function Page(props, ref) {
    const {
        children,
        className,
        id,
        isDataFetching,
        style,
    } = props;
    const [hasActivityIndicator, setHasActivityIndicator] = useState(isDataFetching);
    const classes = useStyles(props);

    useEffect(() => {
        setHasActivityIndicator(isDataFetching);
    }, [isDataFetching]);

    const rootClasses = ClassNames(
        'ui',
        'page',
        classes.root,
        className,
    );

    return (
        <main
            className={rootClasses}
            id={id}
            ref={ref}
            style={style}
        >
            <CSSTransitionGroup
                transitionEnterTimeout={ACTIVITY_INDICATOR_DURATION}
                transitionLeaveTimeout={ACTIVITY_INDICATOR_DURATION}
                transitionName={{
                    enter: 'page--activity_indicator-enter',
                    leave: 'page--activity_indicator-leave',
                }}
            >
                {hasActivityIndicator && isDataFetching && (
                    <ActivityIndicator
                        className="page--activity_indicator"
                        style={{
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                )}
            </CSSTransitionGroup>

            {hasActivityIndicator && (
                <PageDelayChildren
                    isDataFetching={isDataFetching}
                >
                    {children}
                </PageDelayChildren>
            )}

            {!hasActivityIndicator && !isDataFetching && children}
        </main>
    );
});

Page.ActionBar = PageActionBar;
Page.Container = PageContainer;
Page.Content = PageContent;
Page.DataCards = PageDataCards;
Page.DataGrid = PageDataGrid;
Page.DataGroups = PageDataGroups;
Page.DeprecatedFiltersDrawer = PageDeprecatedFiltersDrawer; // TODO: Deprecated. Remove in a major release.
Page.Details = PageDetailsWindow; // TODO: Deprecated. Alias name for Page.DetailsWindow. Remove in a major release.
Page.DetailsWindow = PageDetailsWindow;
Page.FiltersDrawer = PageFiltersDrawer; // TODO: Deprecated. Remove in a major release.
Page.FiltersRail = PageFiltersRail;
Page.Grid = PageDataCards; // TODO: Deprecated. Alias name for Page.DataCard. Remove in a major release.
Page.Table = PageDataGrid; // TODO: Deprecated. Alias name for Page.DataGrid. Remove in a major release.

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
