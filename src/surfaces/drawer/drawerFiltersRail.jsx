import React from 'react';
import {
    PROP_TYPES_ROOT,
    DEFAULT_PROPS_ROOT,
} from '../filtersRail/constants';
import FiltersRail from '../filtersRail';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    ...PROP_TYPES_ROOT,
};

const defaultProps = {
    ...DEFAULT_PROPS_ROOT,
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
            id={id}
            isFiltering={isFiltering}
            isOpen={isOpen}
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
