'use strict';

import ActivityIndicator from '../elements/activityIndicator.js';
import ClassNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import PageActionBar from './pageActionBar.js';
import PageContainer from './pageContainer.js';
import PageContent from './pageContent.js';
import PageDetails from './pageDetails.js';
import PageDataGroup from './pageDataGroup.js';
import PageDataGroups from './pageDataGroups.js';
import PageFiltersDrawer from './pageFiltersDrawer.js';
import PageFiltersRail from './pageFiltersRail.js';
import PageGrid from './pageGrid.js';
import PageTable from './pageTable.js';
import PropTypes from 'prop-types';
import React from 'react';

const ACTIVITY_INDICATOR_DURATION = 200;

class DelayChildren extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isDataFetching: props.isDataFetching,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { props: nextProps } = this;

        if (prevProps.isDataFetching && !nextProps.isDataFetching) {
            setTimeout(() => {
                this.setState(prevState => ({
                    isDataFetching: !prevState.isDataFetching,
                }));
            }, ACTIVITY_INDICATOR_DURATION / 2);
        }
    }

    render() {
        const { children } = this.props;
        const { isDataFetching } = this.state;

        if (isDataFetching) {
            return (
                <div />
            );
        }

        return children;
    }
}

class Page extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hasActivityIndicator: props.isDataFetching,
        };
    }

    render() {
        const { children, className, id, isDataFetching, style } = this.props;
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
                    <DelayChildren
                        isDataFetching={isDataFetching}
                    >
                        {children}
                    </DelayChildren>
                )}

                {!hasActivityIndicator && !isDataFetching && children}
            </main>
        );
    }
}

Page.ActionBar = PageActionBar;
Page.Container = PageContainer;
Page.Content = PageContent;
Page.Details = PageDetails;
Page.DataGroup = PageDataGroup;
Page.DataGroups = PageDataGroups;
Page.FiltersDrawer = PageFiltersDrawer;
Page.FiltersRail = PageFiltersRail;
Page.Grid = PageGrid;
Page.Table = PageTable;

Page.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    isDataFetching: PropTypes.bool,
    style: PropTypes.object,
};

Page.defaultProps = {
    className: undefined,
    id: undefined,
    isDataFetching: false,
    style: {},
};

export default Page;
