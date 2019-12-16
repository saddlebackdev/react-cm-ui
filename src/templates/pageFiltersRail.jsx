import ClassNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import MediaQuery from 'react-responsive';
import React from 'react';
import Rail from '../elements/rail';

function PageFiltersRail(props) {
    const {
        children,
        isOpen,
    } = props;
    const containerClasses = ClassNames('ui', 'page--filters_rail', {
        'hide-rail': !isOpen,
        'show-rail': isOpen,
    });

    return (
        <MediaQuery
            minWidth={768}
        >
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
                    {isOpen && (
                        <Rail
                            className="page--inner_container"
                            position="left"
                        >
                            {children}
                        </Rail>
                    )}
                </CSSTransitionGroup>
            </div>
        </MediaQuery>
    );
}

export default PageFiltersRail;
