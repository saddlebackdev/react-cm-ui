import ClassNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import React from 'react';
import ActivityIndicator from '../elements/activityIndicator';
import PageActionBar from './pageActionBar';
import PageContainer from './pageContainer';
import PageContent from './pageContent';
import PageDetailsWindow from './pageDetailsWindow';
import PageDataCards from './pageDataCards';
import PageDataGrid from './pageDataGrid';
import PageDataGroups from './pageDataGroups';
import PageDelayChildren from './pageDelayChildren';
import PageDeprecatedFiltersDrawer from './pageDeprecatedFiltersDrawer';
import PageFiltersDrawer from './pageFiltersDrawer';
import PageFiltersRail from './pageFiltersRail';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    isDataFetching: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: undefined,
    id: undefined,
    isDataFetching: false,
    style: {},
};

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
Page.DataGroups = PageDataGroups;
Page.Details = PageDetailsWindow; // TODO: Deprecated. Alias name for Page.DetailsWindow. Remove in a major release.
Page.DetailsWindow = PageDetailsWindow;
Page.FiltersDrawer = PageFiltersDrawer; // TODO: Deprecated. Remove in a major release.
Page.DeprecatedFiltersDrawer = PageDeprecatedFiltersDrawer; // TODO: Deprecated. Remove in a major release.
Page.FiltersRail = PageFiltersRail;
Page.Grid = PageDataCards; // TODO: Deprecated. Alias name for Page.DataCard. Remove in a major release.
Page.Table = PageDataGrid; // TODO: Deprecated. Alias name for Page.DataGrid. Remove in a major release.

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
