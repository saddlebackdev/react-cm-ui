import {
    Accordion,
    Checkbox,
    Grid,
    Page,
    Radio,
    Select,
    Typography,
} from '@saddlebackchurch/react-cm-ui'; // eslint-disable-line import/no-unresolved
import {
    cloneDeep,
    isEqual,
} from 'lodash';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import makeStyles from '@saddlebackchurch/react-cm-ui/styles/makeStyles'; // eslint-disable-line import/no-unresolved

const propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
};

const defaultProps = {
    isOpen: false,
};

const RADIO_ITEM_ID_ACTIVE = 'bem_name--radio_item_active';
const RADIO_ITEM_ID_INACTIVE = 'bem_name--radio_item_inactive';

const CAMPUS_OPTIONS = [
    {
        id: 'bem_name--campus_filters_anaheim',
        label: 'Anaheim',
    }, {
        id: 'bem_name--campus_filters_berlin',
        label: 'Berlin',
    }, {
        id: 'bem_name--campus_filters_buenos_aires',
        label: 'Buenos Aires',
    }, {
        id: 'bem_name--campus_filters_corona',
        label: 'Corona',
    }, {
        id: 'bem_name--campus_filters_hong_kong',
        label: 'Hong Kong',
    }, {
        id: 'bem_name--campus_filters_irvine_north',
        label: 'Irvine North',
    }, {
        id: 'bem_name--campus_filters_irvine_south',
        label: 'Irvine Sorth',
    }, {
        id: 'bem_name--campus_filters_laguna_woods',
        label: 'Laguna Woods',
    }, {
        id: 'bem_name--campus_filters_lake_forest',
        label: 'Lake Forest',
    }, {
        id: 'bem_name--campus_filters_los_angeles',
        label: 'Los Angeles',
    }, {
        id: 'bem_name--campus_filters_newport_mesa',
        label: 'Newport Mesa',
    }, {
        id: 'bem_name--campus_filters_online_campus',
        label: 'Online Campus',
    }, {
        id: 'bem_name--campus_filters_rancho_capistrano',
        label: 'Rancho Capistrano',
    }, {
        id: 'bem_name--campus_filters_saddleback_en_espanol',
        label: 'Saddleback en Español',
    }, {
        id: 'bem_name--campus_filters_san_clemente',
        label: 'San Clemente',
    }, {
        id: 'bem_name--campus_filters_san_diego',
        label: 'San Diego',
    }, {
        id: 'bem_name--campus_filters_santa_rosa',
        label: 'Santa Rosa',
    }, {
        id: 'bem_name--campus_filters_south_bay',
        label: 'South Bay',
    }, {
        id: 'bem_name--campus_filters_yorba_linda',
        label: 'Yorba Linda',
    },
];

const DEFAULT_FILTERS = {
    campus: [],
    colorOption: {
        label: 'All Colors',
        value: 'All Colors',
    },
    sortOption: {
        label: 'Name (Ascending)',
        value: 'Name (Ascending)',
    },
    status: RADIO_ITEM_ID_ACTIVE,
};

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
        onClose,
    } = props;

    const classes = useStyles();

    const [dirtyFilters, setDirtyFilters] = useState(cloneDeep(DEFAULT_FILTERS));
    const [appliedFilters, setAppliedFilters] = useState(cloneDeep(DEFAULT_FILTERS));

    const onApplyFiltersClick = useCallback(() => {
        setAppliedFilters({
            ...dirtyFilters,
        });

        onClose();
        console.log('You just clicked the Apply Filters button!'); // eslint-disable-line no-console
    }, [
        dirtyFilters,
        onClose,
    ]);

    const onClearAllClick = useCallback(() => {
        setDirtyFilters({
            ...DEFAULT_FILTERS,
        });

        console.log('You just clicked the Clear All link!'); // eslint-disable-line no-console
    }, []);

    const onCampusCheckboxChange = useCallback((id, isChecked) => {
        let newCampus = [];

        if (isChecked) {
            newCampus = [
                ...dirtyFilters.campus,
                id,
            ];
        } else {
            newCampus = dirtyFilters.campus.filter((campusId) => campusId !== id);
        }

        setDirtyFilters({
            ...dirtyFilters,
            campus: newCampus,
        });
    }, [
        dirtyFilters,
    ]);

    const onColorSelectChange = useCallback((colorOption) => {
        setDirtyFilters({
            ...dirtyFilters,
            colorOption,
        });
    }, [
        dirtyFilters,
    ]);

    const onRadioPillChange = useCallback((id, value) => {
        setDirtyFilters({
            ...dirtyFilters,
            status: value,
        });
    }, [
        dirtyFilters,
    ]);

    const onSortChange = useCallback((sortOption) => {
        setDirtyFilters({
            ...dirtyFilters,
            sortOption,
        });
    }, [
        dirtyFilters,
    ]);

    const isDirty = !isEqual(appliedFilters, dirtyFilters);
    const isFiltering = !isEqual(DEFAULT_FILTERS, appliedFilters);

    return (
        <Page.FiltersRail
            isOpen={isOpen}
            isScrollable
            filterOptions={{
                isDirty,
                isFiltering,
                onClear: onClearAllClick,
                onApply: onApplyFiltersClick,
            }}
        >
            <Grid
                className={classes.grid}
                spacing={2}
            >
                <Grid.Column
                    width={12}
                >
                    <Radio
                        checked={dirtyFilters.status}
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
                        value={dirtyFilters.sortOption}
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
                        value={dirtyFilters.colorOption}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Accordion basic>
                        <Accordion.Item title="Campus">
                            {CAMPUS_OPTIONS.map((option) => (
                                <Checkbox
                                    checked={dirtyFilters.campus.includes(option.id)}
                                    className={classes.checkbox}
                                    fluid
                                    id={option.id}
                                    label={option.label}
                                    name="campus"
                                    onChange={onCampusCheckboxChange}
                                />
                            ))}
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
