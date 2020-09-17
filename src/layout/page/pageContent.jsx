import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import makeStyles from '../../styles/makeStyles';
import Utils from '../../utils/utils';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'main', 'section']),
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isFiltersRailOpen: PropTypes.bool,
    scrollable: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: 'section',
    children: null,
    className: null,
    id: null,
    isFiltersRailOpen: false,
    scrollable: false,
    style: null,
};

const useStyles = makeStyles((theme) => {
    const {
        breakpoints,
        gutters,
    } = theme;

    return {
        root: {
            margin: `0 -${gutters.page.sm}px`,
            padding: `0 ${gutters.page.sm}px`,
            position: 'relative',
            transition: 'margin 200ms ease-out',
            zIndex: 0,
            '&.page--content-filters_rail_open': {
                marginLeft: 250,
            },
            '&.page--content-scrollable': {
                overflowX: 'scroll',
            },
            [breakpoints.up(496)]: {
                margin: `0 -${gutters.page[496]}px`,
                padding: `0 ${gutters.page[496]}px`,
            },
        },
    };
});

function PageContent(props) {
    const {
        as,
        children,
        className,
        id,
        isFiltersRailOpen,
        scrollable,
        style,
    } = props;

    const classes = useStyles(props);
    const winWidth = window.innerWidth;
    const isMobile = winWidth <= 767;
    const bemName = 'page--content';

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

    const ElementType = Utils.getElementType(as, props);

    return (
        <ElementType
            className={rootClasses}
            id={id}
            style={style}
        >
            {children}
        </ElementType>
    );
}

PageContent.propTypes = propTypes;
PageContent.defaultProps = defaultProps;

export default PageContent;
