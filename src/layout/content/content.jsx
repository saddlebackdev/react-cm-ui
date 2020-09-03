import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
    BEM_CONTENT,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';
import Utils from '../../utils/utils';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'main', 'section']),
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
    isFiltersRailOpen: PropTypes.bool,
    moduleType: PropTypes.oneOf(['drawer', 'page']),
    scrollable: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: 'section',
    children: null,
    classes: null,
    className: null,
    id: null,
    isFiltersRailOpen: false,
    moduleType: null,
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

function Content(props) {
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

    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_CONTENT,
        classes.root,
        className,
        {
            [`${BEM_CONTENT}-filters_rail_open`]: !isMobile && isFiltersRailOpen,
            [`${BEM_CONTENT}-scrollable`]: scrollable,
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

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
