import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import ScrollBar from 'react-custom-scrollbars';
import {
    UI_CLASS_NAME,
    BEM_CONTENT,
    BEM_FILTERS_RAIL,
} from '../../global/constants';
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
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    /**
     * The `id` of the FiltersRail.
     */
    id: PropTypes.string,
    /**
     * If `true`, FiltersRail is open
     */
    isOpen: PropTypes.bool,
    /**
     * If `true`, the children of the FiltersRail will be contained within a
     * `ScrollBar` from the React Custom Scrollbars package.
     */
    isScrollable: PropTypes.bool,
    /**
     * Assigns styling to the FiltersRail dependant on
     * whether it is a child of the Page or Drawer component.
     */
    moduleType: PropTypes.oneOf(['drawer', 'page']),
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
    dataTestId: `${UI_CLASS_NAME}-fitlers_rail`,
    id: undefined,
    isOpen: undefined,
    isScrollable: false,
    moduleType: 'page',
};

const useStyles = makeStyles((theme) => {
    const railWidth = 250;

    return {
        innerContainer: {
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
            '&$isScrollable': {
                padding: [[0, 0, 0, theme.spacing(2)]],
            },
            '&$isNotScrollable': {
                height: 'auto',
            },
        },
        isInDrawer: {},
        isNotOpen: {},
        isNotInDrawer: {},
        isNotScrollable: {},
        isOpen: {},
        isScrollable: {},
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
                    marginLeft: railWidth - theme.gutters.page[496],
                },
                [`&$isInDrawer + .${BEM_CONTENT}`]: {
                    marginLeft: railWidth,
                },
            },
        },
        scrollableChildrenContainer: {
            padding: [[theme.spacing(3), theme.spacing(2), theme.spacing(3), 0]],
            position: 'relative',
        },
    };
});

function FiltersRail(props) {
    const {
        children,
        className,
        dataTestId,
        id,
        isOpen,
        isScrollable,
        moduleType,
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

    return (
        <div
            className={rootClasses}
            data-testid={dataTestId}
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
                            [classes.isScrollable]: isScrollable,
                            [classes.isNotScrollable]: !isScrollable,
                        },
                    )}
                >
                    {isScrollable ? (
                        <ScrollBar autoHide>
                            <div className={classes.scrollableChildrenContainer}>
                                {children}
                            </div>
                        </ScrollBar>
                    ) :
                        children}
                </Rail>
            </Slide>
        </div>
    );
}

FiltersRail.propTypes = propTypes;
FiltersRail.defaultProps = defaultProps;

export default withTheme(FiltersRail);
