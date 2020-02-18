import ClassNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import Rail from '../organisms/rail';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    id: undefined,
    isOpen: undefined,
    style: {},
};

function FiltersRail(props) {
    const {
        children,
        className,
        id,
        isOpen,
        moduleType,
        style,
    } = props;
    const bemName = `${moduleType}--filters_rail`;
    const containerClasses = ClassNames('ui', bemName, className, {
        [`${bemName}-hide`]: !isOpen,
        [`${bemName}-show`]: isOpen,
    });

    return (
        <MediaQuery
            minWidth={768}
        >
            <div
                className={containerClasses}
                id={id}
                style={style}
            >
                <CSSTransitionGroup
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}
                    transitionName={{
                        enter: `${bemName}-enter`,
                        leave: `${bemName}-leave`,
                    }}
                >
                    {isOpen && (
                        <Rail
                            className={`${bemName}_inner_container`}
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

FiltersRail.propTypes = propTypes;
FiltersRail.defaultProps = defaultProps;

export default FiltersRail;
