import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import Content from '../../layout/content';
import makeStyles from '../../styles/makeStyles';
import Utils from '../../utils/utils';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'main', 'section']),
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    id: PropTypes.string,
    isFiltersRailOpen: PropTypes.bool,
    scrollable: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: 'section',
    children: null,
    className: null,
    dataTestId: `${UI_CLASS_NAME}-drawer_content`,
    id: null,
    isFiltersRailOpen: false,
    scrollable: false,
    style: null,
};

const useStyles = makeStyles((theme) => {
    const {
        breakpoints,
    } = theme;

    return {
        root: {
            padding: '33px 22px',
            position: 'relative',
            transition: 'margin 200ms ease-out',
            zIndex: 0,
            '&.drawer--content-filters_rail_open': {
                marginLeft: 250,
            },
            '&.drawer--content-scrollable': {
                overflowX: 'scroll',
            },
            [breakpoints.down('md')]: {
                transition: 'margin-top 333ms ease-in-out',
                '&.drawer--content-has_action_bar_mobile_search_visible': {
                    marginTop: 55,
                },
            },
            [breakpoints.up('md')]: {
                padding: '33px 22px',
            },
        },
    };
});

function DrawerContent(props) {
    const {
        as,
        children,
        className,
        dataTestId,
        id,
        isFiltersRailOpen,
        scrollable,
        style,
    } = props;

    const classes = useStyles(props);
    const winWidth = window.innerWidth;
    const isMobile = winWidth <= 767;
    const bemName = 'drawer--content';

    const rootClasses = ClassNames(
        'ui',
        classes.root,
        bemName,
        className,
        {
            [`${bemName}-filters_rail_open`]: !isMobile && isFiltersRailOpen,
            [`${bemName}-scrollable`]: scrollable,
        },
    );

    return (
        <Content
            as={as}
            classes={classes}
            className={rootClasses}
            data-testid={dataTestId}
            id={id}
            moduleType="drawer"
            style={style}
        >
            {children}
        </Content>
    );
}

DrawerContent.propTypes = propTypes;
DrawerContent.defaultProps = defaultProps;

export default DrawerContent;
