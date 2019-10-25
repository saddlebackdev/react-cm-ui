import ClassNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import React from 'react';
import ActivityIndicator from '../elements/activityIndicator.js';
import PageActionBar from './pageActionBar.js';
import PageContainer from './pageContainer.js';
import PageContent from './pageContent.js';
import PageDetailsWindow from './pageDetailsWindow.js';
import PageDataGroup from './pageDataGroup.js';
import PageDataCards from './pageDataCards.js';
import PageDataGrid from './pageDataGrid.js';
import PageDataGroups from './pageDataGroups.js';
import PageDelayChildren from './pageDelayChildren.js';
import PageFiltersDrawer from './pageFiltersDrawer.js';
import PageFiltersRail from './pageFiltersRail.js';

const ACTIVITY_INDICATOR_DURATION = 200;

class Page extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hasActivityIndicator: props.isDataFetching,
        };
    }

    render() {
        const {
            children,
            className,
            id,
            isDataFetching,
            style,
        } = this.props;
        const { hasActivityIndicator } = this.state;
        const containerClasses = ClassNames('ui', 'page', className);

        return (
            <main
                className={containerClasses}
                id={id}
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
    }
}

Page.ActionBar = PageActionBar;
Page.Container = PageContainer;
Page.Content = PageContent;
Page.DataCards = PageDataCards;
Page.DataGrid = PageDataGrid;
Page.DataGroup = PageDataGroup;
Page.DataGroups = PageDataGroups;
Page.Details = PageDetailsWindow; // TODO: Deprecated. Alias name for Page.DetailsWindow. Remove in next major release.
Page.DetailsWindow = PageDetailsWindow;
Page.FiltersDrawer = PageFiltersDrawer;
Page.FiltersRail = PageFiltersRail;
Page.Grid = PageDataCards; // TODO: Deprecated. Alias name for Page.DataCard. Remove in next major release.
Page.Table = PageDataGrid; // TODO: Deprecated. Alias name for Page.DataGrid. Remove in next major release.

Page.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    isDataFetching: PropTypes.bool,
    style: PropTypes.shape({}),
};

Page.defaultProps = {
    className: undefined,
    id: undefined,
    isDataFetching: false,
    style: {},
};

export default Page;
