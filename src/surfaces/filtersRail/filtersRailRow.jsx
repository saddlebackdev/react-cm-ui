import {
    map,
} from 'lodash';
import ClassNames from 'classnames';
import React, { useState } from 'react';
import {
    PROP_TYPES_ROW_CLASS_NAME,
    PROP_TYPES_ROW_CLASSES,
    PROP_TYPES_ROW_COMPONENTS,
    PROP_TYPES_ROW_COLLAPSIBLE,
    PROP_TYPES_ROW_COMPONENT_COLLAPSE,
    PROP_TYPES_ROW_HEADING,
    PROP_TYPES_ROW_ID,
    PROP_TYPES_ROW_OPTIONS,
    PROP_TYPES_ROW_TYPE,
    PROP_TYPES_ROW_COMPONENT_TYPE,
} from './constants';
import {
    BEM_FILTERS_RAIL_ROW,
} from '../../global/constants';
import FiltersRailRowComponent from './filtersRailRowComponent';
import Collapse from '../../utils/collapse';
import Grid from '../../layout/grid';
import makeStyles from '../../styles/makeStyles';
import Typography from '../../dataDisplay/typography';
import Icon from '../../dataDisplay/icon';

const propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    classes: PROP_TYPES_ROW_CLASSES,
    className: PROP_TYPES_ROW_CLASS_NAME,
    collapse: PROP_TYPES_ROW_COMPONENT_COLLAPSE,
    components: PROP_TYPES_ROW_COMPONENTS,
    collapsible: PROP_TYPES_ROW_COLLAPSIBLE,
    heading: PROP_TYPES_ROW_HEADING.isRequired,
    id: PROP_TYPES_ROW_ID,
};

const defaultProps = {
    classes: null,
    className: null,
    collapse: false,
    components: [],
    collapsible: false,
    id: null,
};

const useStyles = makeStyles((theme) => {
    const columnContent = {
        alignItems: 'center',
        display: 'flex',
    };

    return {
        collapseButtonColumn: {
            ...columnContent,
        },
        collapseIcon: {
            transition: theme.transitions.create('', {
                duration: theme.transitions.duration.short,
            }),
            '&$isCollapsed': {
                transform: 'rotate(135deg)',
            },
        },
        heading: {},
        headingColumn: {
            ...columnContent,
        },
        headingGrid: {
            marginBottom: 6,
        },
        isCollapsed: {},
        root: {},
    };
});

function FiltersRailRow(props) {
    const {
        className,
        collapse: collapsedProp,
        collapsible: isCollapsible,
        components,
        heading,
        id,
    } = props;

    const classes = useStyles(props);

    const [isCollapsed, setIsCollapsed] = useState(!collapsedProp);

    const onCollapseToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const rootContainer = ClassNames(
        BEM_FILTERS_RAIL_ROW,
        classes.root,
        className,
    );

    const CollapseComponent = isCollapsible ? Collapse : React.Fragment;

    const collpaseComponentProps = isCollapsed ? { in: isCollapsed } : null;

    let rowKeyNum = 0;

    return (
        <Grid.Column
            className={rootContainer}
            id={id}
            sm={12}
        >
            {heading && (
                <Grid
                    className={classes.headingGrid}
                    justifyContent="center"
                >
                    <Grid.Column
                        className={classes.headingColumn}
                        sm
                    >
                        <Typography
                            classes={{
                                h4: classes.heading,
                            }}
                            variant="h4"
                        >
                            {heading}
                        </Typography>
                    </Grid.Column>

                    {isCollapsible && (
                        <Grid.Column
                            className={classes.collapseButtonColumn}
                        >
                            <Icon
                                className={ClassNames(
                                    classes.collapseIcon,
                                    {
                                        [classes.isCollapsed]: isCollapsed,
                                    },
                                )}
                                compact
                                onClick={onCollapseToggle}
                                size={14}
                                type="plus"
                            />
                        </Grid.Column>
                    )}
                </Grid>
            )}

            <CollapseComponent
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...collpaseComponentProps}
            >
                {map(components, (component) => {
                    rowKeyNum += 1;

                    return (
                        <FiltersRailRowComponent
                            classes={component.classes}
                            className={component.className}
                            id={component.id}
                            key={`${BEM_FILTERS_RAIL_ROW}-${rowKeyNum}`}
                            onChange={component.onChange}
                            options={component.options}
                            type={component.type}
                            value={component.value}
                        />
                    );
                })}
            </CollapseComponent>
        </Grid.Column>
    );
}

FiltersRailRow.propTypes = propTypes;
FiltersRailRow.defaultProps = defaultProps;

export default FiltersRailRow;
