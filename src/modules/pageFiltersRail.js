'use strict';

import ClassNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import MediaQuery from 'react-responsive';
import Rail from '../elements/rail.js';
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
                    enter: 'page--filters_rail-enter',
                    leave: 'page--filters_rail-leave',
                }}
            >
                {isOpen &&
                    <Rail
                        className="page--inner_container"
                        position="left"
                    >
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
