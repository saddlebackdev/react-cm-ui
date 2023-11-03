import { isEmpty } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef } from 'react';
import ScrollBar from 'react-custom-scrollbars';
import {
    UI_CLASS_NAME,
    BEM_CONTENT,
    BEM_FILTERS_RAIL,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';
import Button from '../../inputs/button';
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
     * Used for enabling Clear All & Apply Filters action buttons
     */
    filterOptions: PropTypes.shape({
        /**
         * If `true`, filters are applied
         */
        isDirty: PropTypes.bool.isRequired,
        /**
         * Apply filters Button onClick event handler
         */
        onApply: PropTypes.func.isRequired,
        /**
         * Clear All Link onClick event handler
         */
        onClear: PropTypes.func.isRequired,
    }),
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
    filterOptions: undefined,
    id: undefined,
    isScrollable: false,
    moduleType: 'page',
};

const useStyles = makeStyles((theme) => {
    const railWidth = 250;

    return {
        actionButtons: {
            borderTop: `1px solid ${theme.palette.divider}`,
            display: 'flex',
            justifyContent: 'space-between',
            margin: [[0, theme.spacing(2)]],
            padding: [[19, 0]],
        },
        actionButtonsContainer: {
            backgroundColor: theme.palette.background.paper,
            bottom: 0,
            marginLeft: -theme.spacing(2),
            position: 'fixed',
            width: railWidth - 1,
        },
        clearAllLink: {
            display: 'flex',
            alignItems: 'center',
        },
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
        isFilterActionButtonsEnabled: {
            paddingBottom: `${theme.spacing(6.5)}px !important`,
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
        filterOptions,
        id,
        isOpen,
        isScrollable,
        moduleType,
        theme,
    } = props;

    const bemBlockClassName = 'filters_rail';
    const filtersRailRef = useRef();
    const classes = useStyles(props);
    const isMobile = useMediaQuery(theme.breakpoints.only('sm'));
    const actionButtonsContainerClasses = ClassNames(`${bemBlockClassName}--action-buttons-container`, classes.actionButtonsContainer);
    const actionButtonsClasses = ClassNames(`${bemBlockClassName}--action-buttons`, classes.actionButtons);
    const clearFiltersClasses = ClassNames('clear-filters', classes.clearAllLink, 'font-size-xsmall');

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

    const onClearClick = useCallback(() => {
        filterOptions.onClear();
    }, [
        filterOptions,
    ]);

    const onApplyFiltersClick = useCallback(() => {
        filterOptions.onApply();
    }, [
        filterOptions,
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

    let filterOptionsRequiredKeysMissing = false;

    if (!isEmpty(filterOptions) &&
        (!('isDirty' in filterOptions) ||
        !('onClear' in filterOptions) ||
        !('onApply' in filterOptions))) {
        console.warn('Filter Options are missing required keys(isDirty, onClear, onApply)');
        filterOptionsRequiredKeysMissing = true;
    }

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
                            [classes.isFilterActionButtonsEnabled]: !isEmpty(filterOptions) &&
                                !filterOptionsRequiredKeysMissing,
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
                    {!isEmpty(filterOptions) && !filterOptionsRequiredKeysMissing && (
                        <div className={actionButtonsContainerClasses}>
                            <div className={actionButtonsClasses}>
                                {/* eslint-disable max-len */}
                                {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */}
                                <a
                                    className={clearFiltersClasses}
                                    onClick={onClearClick}
                                >
                                    Clear All
                                </a>
                                <Button
                                    className="apply-filters-btn"
                                    color="success"
                                    disabled={!filterOptions.isDirty}
                                    designVersion={2}
                                    onClick={onApplyFiltersClick}
                                >
                                    Apply Filters
                                </Button>
                                {/* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */}
                                {/* eslint-enable max-len */}
                            </div>
                        </div>
                    )}
                </Rail>
            </Slide>
        </div>
    );
}

FiltersRail.propTypes = propTypes;
FiltersRail.defaultProps = defaultProps;

export default withTheme(FiltersRail);
