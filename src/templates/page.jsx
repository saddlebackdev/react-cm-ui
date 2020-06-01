import { CSSTransitionGroup } from 'react-transition-group';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ActivityIndicator from '../atoms/activityIndicator';
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
    backgroundColor: PropTypes.oneOf(['white', 'grey']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    isDataFetching: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    backgroundColor: 'grey',
    className: undefined,
    id: undefined,
    isDataFetching: false,
    style: {},
};

const ACTIVITY_INDICATOR_DURATION = 200;

const Page = React.forwardRef((props, ref) => {
    const {
        backgroundColor,
        children,
        className,
        id,
        isDataFetching,
        style,
    } = props;
    const [hasActivityIndicator, setHasActivityIndicator] = useState(isDataFetching);

    useEffect(() => {
        setHasActivityIndicator(isDataFetching);
    }, [isDataFetching]);

    const containerClasses = ClassNames('ui', 'page', className, {
        'page-background_color_grey': !backgroundColor || backgroundColor === 'grey',
        'page-background_color_white': backgroundColor === 'white',
    });

    return (
        <main
            className={containerClasses}
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
