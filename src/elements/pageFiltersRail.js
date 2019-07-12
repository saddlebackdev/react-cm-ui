'use strict';

import ClassNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import MediaQuery from 'react-responsive';
import Rail from './rail.js';
import React from 'react';

const PageFiltersRail = (props) => {
    const {
        children,
        isOpen,
    } = props;
    const containerClasses = ClassNames('ui', 'page--filters_rail', {
        'hide-rail': !isOpen,
        'show-rail': isOpen,
    });
    const RenderRail = (
        <div
            className={containerClasses}
        >
            <CSSTransitionGroup
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
                transitionName={{
                    enter: 'filters-rail-enter',
                    leave: 'filters-rail-leave',
                }}
            >
                {isOpen &&
                    <Rail position="left">
                        {children}
                    </Rail>
                }
            </CSSTransitionGroup>
        </div>
    );

    return (
        <MediaQuery
            minWidth={768}
        >
            {RenderRail}
        </MediaQuery>
    );
};

export default PageFiltersRail;
