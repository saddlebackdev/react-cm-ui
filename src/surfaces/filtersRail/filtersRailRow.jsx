import ClassNames from 'classnames';
import React from 'react';
import {
    PROP_TYPES_ROW_CLASS_NAME,
    PROP_TYPES_ROW_CLASSES,
    PROP_TYPES_ROW_COLLAPSIBLE,
    PROP_TYPES_ROW_HEADING,
    PROP_TYPES_ROW_ID,
    PROP_TYPES_ROW_OPTIONS,
    PROP_TYPES_ROW_TYPE,
} from './constants';
import {
    BEM_FILTERS_RAIL_ROW,
} from '../../global/constants';
import FiltersRailRowOptions from './filtersRailRowOptions';
import Grid from '../../layout/grid';
import makeStyles from '../../styles/makeStyles';
import Typography from '../../dataDisplay/typography';

const propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    classes: PROP_TYPES_ROW_CLASSES,
    className: PROP_TYPES_ROW_CLASS_NAME,
    collapsible: PROP_TYPES_ROW_COLLAPSIBLE,
    heading: PROP_TYPES_ROW_HEADING.isRequired,
    id: PROP_TYPES_ROW_ID,
    options: PROP_TYPES_ROW_OPTIONS,
    type: PROP_TYPES_ROW_TYPE.isRequired,
};

const defaultProps = {
    classes: null,
    className: null,
    collapsible: false,
    id: null,
    options: [],
};

const useStyles = makeStyles(() => ({
    heading: {
        marginBottom: 22,
    },
    root: {},
}));

function FiltersRailRow(props) {
    const {
        className,
        collapsible,
        heading,
        id,
        options,
        type,
    } = props;

    const classes = useStyles(props);

    const rootContainer = ClassNames(
        BEM_FILTERS_RAIL_ROW,
        classes.root,
        className,
    );

    return (
        <Grid.Column
            className={rootContainer}
            id={id}
            sm={12}
        >
            <Typography
                classes={{
                    h4: classes.heading,
                }}
                variant="h4"
            >
                {heading}
            </Typography>

            <FiltersRailRowOptions
                options={options}
                type={type}
            />
        </Grid.Column>
    );
}

FiltersRailRow.propTypes = propTypes;
FiltersRailRow.defaultProps = defaultProps;

export default FiltersRailRow;
