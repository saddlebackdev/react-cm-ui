import {
    map,
    isEmpty,
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import {
    BEM_CONTAINER,
    BEM_CONTENT,
    BEM_FILTERS_RAIL,
    BEM_FILTERS_RAIL_ROW,
    UI_CLASS_NAME,
} from '../../global/constants';
import {
    PROP_TYPES_ROOT,
    DEFAULT_PROPS_ROOT,
} from './constants';
import FiltersRailClear from './filtersRailClear';
import FiltersRailRow from './filtersRailRow';
import Grid from '../../layout/grid';
import makeStyles from '../../styles/makeStyles';
import Rail from '../rail';
import Slide from '../../utils/slide';
import useMediaQuery from '../../utils/useMediaQuery';
import withTheme from '../../styles/withTheme';

const propTypes = {
    ...PROP_TYPES_ROOT,
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
    ...DEFAULT_PROPS_ROOT,
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
                    marginLeft: railWidth - theme.gutters.page[496],
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
            const containerClassName = `.${UI_CLASS_NAME}.${BEM_CONTAINER}`;
            const containerNode = filtersRailNode.closest(containerClassName);
            const containerOffsetTop = containerNode && containerNode.offsetTop;

            if (containerOffsetTop) {
                filtersRailNode.style.height = `calc(100% - ${containerOffsetTop}px)`;
            }
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
                    {!isEmpty(rows) && (
                        <Grid
                            spacing={3}
                        >
                            {isFunction(onClear) && (
                                <Grid.Column
                                    sm={12}
                                >
                                    <FiltersRailClear
                                        disable={!isFiltering}
                                        onClear={onClear}
                                    />
                                </Grid.Column>
                            )}

                            {map(rows, (row) => {
                                rowKeyNum += 1;

                                return (
                                    <FiltersRailRow
                                        classes={row.classes}
                                        className={row.className}
                                        collapsible={row.collapsible}
                                        components={row.components}
                                        id={row.id}
                                        key={`${BEM_FILTERS_RAIL_ROW}-${rowKeyNum}`}
                                        heading={row.heading}
                                    />
                                );
                            })}
                        </Grid>
                    )}

                    {children}
                </Rail>
            </Slide>
        </div>
    );
}

FiltersRail.propTypes = propTypes;
FiltersRail.defaultProps = defaultProps;

export default withTheme(FiltersRail);
