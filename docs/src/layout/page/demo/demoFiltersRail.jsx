import {
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
}));

function DemoFiltersRail(props) {
    const {
        isOpen,
    } = props;

    const [radioPillValue, setRadioPillValue] = useState(RADIO_ITEM_ID_ACTIVE);

    const classes = useStyles();

    const onRadioPillChange = useCallback((id, value) => {
        setRadioPillValue(value);
    }, [
        setRadioPillValue,
    ]);

    return (
        <Page.FiltersRail
            isOpen={isOpen}
        >
            <Grid
                className={classes.grid}
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
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
                        searchable={false}
                        underline
                        value={{
                            label: 'Name (Ascending)',
                            value: 'Name (Ascending)',
                        }}
                    />
                </Grid.Column>

                <Grid.Column
                    width={12}
                >
                    <Typography
                        variant="h4"
                    >
                        Campus
                    </Typography>

                    <Select
                        clearable={false}
                        options={[
                            {
                                label: 'All Campuses',
                                value: 'All Campuses',
                            }, {
                                label: 'Lake Forest',
                                value: 'Lake Forest',
                            },
                        ]}
                        searchable={false}
                        underline
                        value={{
                            label: 'All Campuses',
                            value: 'All Campuses',
                        }}
                    />
                </Grid.Column>
            </Grid>
        </Page.FiltersRail>
    );
}

DemoFiltersRail.propTypes = propTypes;
DemoFiltersRail.defaultProps = defaultProps;

export default DemoFiltersRail;
