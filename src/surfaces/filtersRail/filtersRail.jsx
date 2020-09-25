import { map, isEmpty } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import {
    UI_CLASS_NAME,
    BEM_CONTAINER,
    BEM_CONTENT,
    BEM_FILTERS_RAIL,
    BEM_FILTERS_RAIL_ROW,
} from '../../global/constants';
import { PROP_TYPES_ROW } from './constants';
import FiltersRailClear from './filtersRailClear';
import FiltersRailRow from './filtersRailRow';
import Grid from '../../layout/grid';
import makeStyles from '../../styles/makeStyles';
import Rail from '../rail';
import Slide from '../../utils/slide';
import useMediaQuery from '../../utils/useMediaQuery';
import withTheme from '../../styles/withTheme';

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
    isFiltering: PropTypes.bool,
    isOpen: PropTypes.bool,
    moduleType: PropTypes.oneOf(['drawer', 'page']),
    onClear: PropTypes.func,
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
    isFiltering: false,
    isOpen: undefined,
    moduleType: 'page',
    onClear: null,
    rows: [],
    style: {},
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
        style,
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
            const containerOffsetTop = containerNode.offsetTop;

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
            style={style}
        >
            <Slide
                direction="right"
                in={isOpen}
            >
                <Rail
                    className={classes.innerContainer}
                >
                    {!isEmpty(rows) && (
                        <Grid
                            spacing={3}
                        >
                            <Grid.Column>
                                <FiltersRailClear
                                    disable={!isFiltering}
                                    onClear={onClear}
                                />
                            </Grid.Column>

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
