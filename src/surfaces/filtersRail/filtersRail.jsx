import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import {
    UI_CLASS_NAME,
    BEM_CONTENT,
    BEM_FILTERS_RAIL,
} from '../../global/constants';
import { PROP_TYPES_ROW } from './constants';
import makeStyles from '../../styles/makeStyles';
import Rail from '../rail';
import Slide from '../../utils/slide';
import useMediaQuery from '../../utils/useMediaQuery';
import withTheme from '../../styles/withTheme';

const propTypes = {
    /**
     * The content of the FiltersRail
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to FiltersRail.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    /**
     * Assign additional class names to FiltersRail.
     */
    className: PropTypes.string,
    /**
     * The `id` of the FiltersRail.
     */
    id: PropTypes.string,
    /**
     * If `true`, FiltersRail's clear button becomes actionable.
     */
    isFiltering: PropTypes.bool,
    /**
     * If `true`, FiltersRail is open
     */
    isOpen: PropTypes.bool,
    /**
     * Assigns styling to the FiltersRail dependant on
     * whether it is a child of the Page or Drawer component.
     */
    moduleType: PropTypes.oneOf(['drawer', 'page']),
    /**
     * Event handler for consumer to clear filters.
     */
    onClear: PropTypes.func,
    /**
     * Array of objects that are used to setup the grid system
     * in the FiltersRail.
     */
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            classes: PROP_TYPES_ROW.classes,
            className: PROP_TYPES_ROW.className,
            collapse: PROP_TYPES_ROW.collapse,
            collapsible: PROP_TYPES_ROW.collapsible,
            components: PROP_TYPES_ROW.components,
            heading: PROP_TYPES_ROW.heading,
            id: PROP_TYPES_ROW.id,
        }),
    ),
    /**
     * HC's theme.
     */
    theme: PropTypes.shape({
        breakpoints: PropTypes.shape({
            only: PropTypes.func,
        }),
    }).isRequired,
};

const defaultProps = {
    children: undefined,
    classes: undefined,
    className: undefined,
    id: undefined,
    isFiltering: false,
    isOpen: undefined,
    moduleType: 'page',
    onClear: undefined,
    rows: [],
};

const useStyles = makeStyles((theme) => {
    const railWidth = 250;

    return {
        innerContainer: {
            height: 'auto',
            minHeight: '100%',
            overflow: 'hidden',
            pointerEvents: 'auto',
            position: 'relative',
            zIndex: 1,
            '&::after': {
                zIndex: -1,
            },
            '&$isOpen': {
                overflow: 'visible',
            },
        },
        isInDrawer: {},
        isNotOpen: {},
        isNotInDrawer: {},
        isOpen: {},
        root: {
            pointerEvents: 'none',
            position: 'absolute',
            width: railWidth,
            zIndex: 1,
            '&$isInDrawer': {},
            '&$isNotInDrawer': {
                marginLeft: -theme.gutters.page[496],
                minHeight: '100%',
            },
            '& > span': {
                minHeight: '100%',
            },
            '&$isOpen': {
                [`& + .${BEM_CONTENT}`]: {
                    overflow: 'auto',
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
        },
    };
});

function FiltersRail(props) {
    const {
        children,
        className,
        id,
        isFiltering,
        isOpen,
        moduleType,
        onClear,
        rows,
        theme,
    } = props;

    const filtersRailRef = useRef();
    const classes = useStyles(props);
    const isMobile = useMediaQuery(theme.breakpoints.only('sm'));

    useEffect(() => {
        if (!isMobile && filtersRailRef && filtersRailRef.current) {
            const filtersRailNode = filtersRailRef.current;
            const containerClassName = '.ui.page--container';
            const containerNode = filtersRailNode.closest(containerClassName);
            const containerOffsetTop = containerNode ? containerNode.offsetTop : 0;

            filtersRailNode.style.height = `calc(100% - ${containerOffsetTop}px)`;
        }
    }, [
        isMobile,
    ]);

    if (isMobile) {
        return null;
    }

    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_FILTERS_RAIL,
        classes.root,
        className,
        {
            [classes.isInDrawer]: moduleType === 'drawer',
            [classes.isOpen]: isOpen,
            [classes.isNotInDrawer]: moduleType !== 'drawer',
            [classes.isNotOpen]: !isOpen,
        },
    );

    let rowKeyNum = 0;

    return (
        <div
            className={rootClasses}
            id={id}
            ref={filtersRailRef}
        >
            <Slide
                direction="right"
                in={isOpen}
            >
                <Rail
                    className={ClassNames(
                        classes.innerContainer,
                        {
                            [classes.isOpen]: isOpen,
                        },
                    )}
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
