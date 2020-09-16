import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import ActionBar from '../../surfaces/actionBar';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({})),
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    columns: undefined,
    id: undefined,
    style: {},
};

const HAS_PAGE_ACTION_BAR_CLASS_NAME = 'page-has_action_bar';
const HAS_PAGE_CONTAINER_ACTION_BAR_MOBILE_SEARCH_VISIBLE_CLASS_NAME =
    'page--container-has_action_bar_mobile_search_visible';

function PageActionBar(props) {
    const pageActionBarRef = useRef(null);

    useEffect(() => {
        pageActionBarRef.closest('.ui.page').classList.add(HAS_PAGE_ACTION_BAR_CLASS_NAME);

        return () => {
            pageActionBarRef.closest('.ui.page').classList.remove(HAS_PAGE_ACTION_BAR_CLASS_NAME);
        };
    }, []);

    const toggleSmSearchVisibleClassName = (isVisible) => {
        if (isVisible) {
            pageActionBarRef.closest('.ui.page').querySelector('.ui.page--container')
                .classList.add(HAS_PAGE_CONTAINER_ACTION_BAR_MOBILE_SEARCH_VISIBLE_CLASS_NAME);
        } else {
            pageActionBarRef.closest('.ui.page').querySelector('.ui.page--container')
                .classList.remove(HAS_PAGE_CONTAINER_ACTION_BAR_MOBILE_SEARCH_VISIBLE_CLASS_NAME);
        }
    };

    const {
        children,
        className,
        columns,
        id,
        style,
    } = props;

    return (
        <ActionBar
            className={className}
            columns={columns}
            id={id}
            moduleType="page"
            ref={pageActionBarRef}
            style={style}
            toggleSmSearchVisibleClassName={toggleSmSearchVisibleClassName}
        >
            {children}
        </ActionBar>
    );
}

PageActionBar.propTypes = propTypes;
PageActionBar.defaultProps = defaultProps;

export default PageActionBar;
