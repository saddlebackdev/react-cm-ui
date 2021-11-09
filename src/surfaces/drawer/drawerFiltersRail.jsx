import React from 'react';
import {
    PROP_TYPES_ROOT,
    DEFAULT_PROPS_ROOT,
} from '../filtersRail/constants';
import FiltersRail from '../filtersRail';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    ...PROP_TYPES_ROOT,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    isScrollable: PropTypes.string,
};

const defaultProps = {
    ...DEFAULT_PROPS_ROOT,
    dataTestId: `${UI_CLASS_NAME}-drawer_filters_rail`,
    isScrollable: false,
};

const useStyles = makeStyles(() => ({
    innerContainer: {
        '&::after': {
            display: 'none',
        },
    },
}));

function DrawerFiltersRail(props) {
    const {
        children,
        classes: classesProp,
        className,
        id,
        isFiltering,
        isOpen,
        isScrollable,
        onClear,
        rows,
    } = props;

    const classes = useStyles(props);

    return (
        <FiltersRail
            classes={{
                ...classesProp,
                innerContainer: classes.innerContainer,
            }}
            className={className}
            data-testid={dataTestId}
            id={id}
            isFiltering={isFiltering}
            isOpen={isOpen}
            isScrollable={isScrollable}
            moduleType="drawer"
            onClear={onClear}
            rows={rows}
        >
            {children}
        </FiltersRail>
    );
}

DrawerFiltersRail.propTypes = propTypes;
DrawerFiltersRail.defaultProps = defaultProps;

export default DrawerFiltersRail;
