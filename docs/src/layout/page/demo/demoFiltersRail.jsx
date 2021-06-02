import {
    Accordion,
    Checkbox,
    Grid,
    Page,
    Radio,
    Select,
    Typography,
} from 'react-cm-ui';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const propTypes = {
    isOpen: PropTypes.bool,
};

const defaultProps = {
    isOpen: false,
};

const RADIO_ITEM_ID_ACTIVE = 'bem_name--radio_item_active';
const RADIO_ITEM_ID_INACTIVE = 'bem_name--radio_item_inactive';

const useStyles = makeStyles((theme) => ({
    grid: {
        '&.ui.grid': {
            margin: -theme.spacing(3) / 2,
        },
        '& > .ui.grid-col': {
            padding: theme.spacing(3) / 2,
        },
    },
    checkbox: {
        marginBottom: theme.spacing(1),
    },
}));

function DemoFiltersRail(props) {
    const {
        isOpen,
    } = props;

    const [radioPillValue, setRadioPillValue] = useState(RADIO_ITEM_ID_ACTIVE);

    const [selectedSortOption, setSelectedSortOption] = useState({
        label: 'Name (Ascending)',
        value: 'Name (Ascending)',
    });

    const [selectedColorOption, setSelectedColorOption] = useState({
        label: 'All Colors',
        value: 'All Colors',
    });

    const classes = useStyles();

    const onRadioPillChange = useCallback((id, value) => {
        setRadioPillValue(value);
    }, [
        setRadioPillValue,
    ]);

    const onSortChange = useCallback((sortOption) => {
        setSelectedSortOption(sortOption);
    }, [
        setSelectedSortOption,
    ]);

    const onColorSelectChange = useCallback((colorOption) => {
        setSelectedColorOption(colorOption);
    }, [
        setSelectedColorOption,
    ]);

    return (
        <Page.FiltersRail
            isOpen={isOpen}
            isScrollable
        >
            <Grid
                className={classes.grid}
                spacing={2}
            >
                <Grid.Column
                    width={12}
                >
                    <Radio
                        checked={radioPillValue}
                        onChange={onRadioPillChange}
                        pill
                    >
                        <Radio.Item
                            id={RADIO_ITEM_ID_ACTIVE}
                            label="Active"
                        />

                        <Radio.Item
                            id={RADIO_ITEM_ID_INACTIVE}
                            label="Inactive"
                        />
                    </Radio>
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Sort By
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'Name (Ascending)',
                                value: 'Name (Ascending)',
                            }, {
                                label: 'Name (Descending)',
                                value: 'Name (Descending)',
                            }, {
                                label: 'Create Date (Ascending)',
                                value: 'Create Date (Ascending)',
                            }, {
                                label: 'Create Date (Descending)',
                                value: 'Create Date (Descending)',
                            },
                        ]}
                        onChange={onSortChange}
                        searchable={false}
                        underline
                        value={selectedSortOption}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Color
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Colors',
                                value: 'All Colors',
                            }, {
                                label: 'Red',
                                value: 'Red',
                            }, {
                                label: 'Blue',
                                value: 'Blue',
                            }, {
                                label: 'Green',
                                value: 'Green',
                            }, {
                                label: 'Cyan',
                                value: 'Cyan',
                            }, {
                                label: 'Yellow',
                                value: 'Yellow',
                            }, {
                                label: 'Magenta',
                                value: 'Magenta',
                            }, {
                                label: 'Black',
                                value: 'Black',
                            }, {
                                label: 'White',
                                value: 'White',
                            },
                        ]}
                        onChange={onColorSelectChange}
                        searchable
                        underline
                        value={selectedColorOption}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Accordion basic>
                        <Accordion.Item title="Campus">
                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_anaheim"
                                label="Anaheim"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_berlin"
                                label="Berlin"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_buenos_aires"
                                label="Buenos Aires"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_corona"
                                label="Corona"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_hong_kong"
                                label="Hong Kong"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_irvine_north"
                                label="Irvine North"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_irvine_south"
                                label="Irvine South"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_laguna_woods"
                                label="Laguna Woods"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_lake_forest"
                                label="Lake Forest"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_los_angeles"
                                label="Los Angeles"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_newport_mesa"
                                label="Newport Mesa"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_online_campus"
                                label="Online Campus"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_rancho_capistrano"
                                label="Rancho Capistrano"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_saddleback_en_espanol"
                                label="Saddleback en Español"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_san_clemente"
                                label="San Clemente"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_san_diego"
                                label="San Diego"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_santa_rosa"
                                label="Santa Rosa"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_south_bay"
                                label="South Bay"
                            />

                            <Checkbox
                                className={classes.checkbox}
                                fluid
                                id="bem_name--campus_filters_yorba_linda"
                                label="Yorba Linda"
                            />
                        </Accordion.Item>
                    </Accordion>
                </Grid.Column>
            </Grid>
        </Page.FiltersRail>
    );
}

DemoFiltersRail.propTypes = propTypes;
DemoFiltersRail.defaultProps = defaultProps;

export default DemoFiltersRail;
