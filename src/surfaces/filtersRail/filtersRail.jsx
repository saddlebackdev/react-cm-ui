import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import Rail from '../rail';
import makeStyles from '../../styles/makeStyles';
import {
    BEM_CONTENT,
} from '../../global/constants';
import Slide from '../../utils/slide';
import useMediaQuery from '../../utils/useMediaQuery';
import withTheme from '../../styles/withTheme';
import {
    UI_CLASS_NAME,
    BEM_CONTAINER
} from '../../global/constants';

const propTypes = {
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to ActionBar.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    moduleType: PropTypes.oneOf(['drawer', 'page']),
    style: PropTypes.shape({}),
    theme: PropTypes.shape({
        breakpoints: PropTypes.shape({
            only: PropTypes.func,
        }),
    }).isRequired,
};

const defaultProps = {
    children: undefined,
    classes: null,
    className: undefined,
    id: undefined,
    isOpen: undefined,
    moduleType: 'page',
    style: {},
};

const useStyles = makeStyles((theme) => {
    const railWidth = 250;

    return {
        isInDrawer: {},
        isNotOpen: {},
        isNotInDrawer: {},
        isOpen: {},
        root: {
            pointerEvents: 'none',
            position: 'absolute',
            width: railWidth,
            zIndex: 1,
            '&$isInDrawer': {

            },
            '&$isNotInDrawer': {
                marginLeft: -theme.gutters.page[496],
                minHeight: '100%',
            },
            '& > span': {
                minHeight: '100%',
            },
            '&$isOpen': {
                [`& + .${BEM_CONTENT}`]: {
                    overflowX: 'auto',
                    transition: `margin ${theme.transitions.create('', {
                        duration: theme.transitions.duration.short,
                    })}`,
                },
                [`&$isNotInDrawer + .${BEM_CONTENT}`]: {
                    marginLeft: railWidth - theme.gutters.page.sm,
                    [theme.breakpoints.up(496)]: {
                        marginLeft: railWidth - theme.gutters.page[496],
                    },
                },
                [`&$isInDrawer + .${BEM_CONTENT}`]: {
                    marginLeft: railWidth,
                },
            },
            '&inner_container': {
                height: 'auto',
                minHeight: '100%',
                pointerEvents: 'auto',
                '&::after': {
                    zIndex: -1,
                },
            },
        },
    };
});

function FiltersRail(props) {
    const {
        children,
        className,
        id,
        isOpen,
        moduleType,
        style,
        theme,
    } = props;

    const filtersRailRef = useRef();
    const classes = useStyles(props);
    const isMobile = useMediaQuery(theme.breakpoints.only('sm'));

    useEffect(() => {
        if (!isMobile && filtersRailRef && filtersRailRef.current) {
            console.log(filtersRailRef.current);
            const filtersRailNode = filtersRailRef.current;
            const containerClassName = `.${UI_CLASS_NAME}.${BEM_CONTAINER}`;
            const containerNode = filtersRailNode.closest(containerClassName);
            const containerOffsetTop = containerNode.offsetTop;

            filtersRailNode.style.minHeight = `calc(100% - ${containerOffsetTop}px)`;
            console.log('containerOffsetTop', containerOffsetTop);
        }
    }, [
        isMobile,
    ]);

    if (isMobile) {
        return null;
    }

    const bemName = `${moduleType}--filters_rail`;

    const rootClasses = ClassNames(
        'ui',
        bemName,
        classes.root,
        className,
        {
            [classes.isInDrawer]: moduleType === 'drawer',
            [classes.isOpen]: isOpen,
            [classes.isNotInDrawer]: moduleType !== 'drawer',
            [classes.isNotOpen]: !isOpen,
        },
    );

    return (
        <div
            className={rootClasses}
            id={id}
            ref={filtersRailRef}
            style={style}
        >
            <Slide
                direction="right"
                in={isOpen}
            >
                <Rail
                    className={classes.innerContainer}
                    position="left"
                >
                    {children}
                </Rail>
            </Slide>
        </div>
    );
}

FiltersRail.propTypes = propTypes;
FiltersRail.defaultProps = defaultProps;

export default withTheme(FiltersRail);
