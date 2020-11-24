import {
    Button,
    Drawer,
    FiltersRail,
    Icon,
    Image,
    Typography,
} from 'react-cm-ui';
import { isEqual, cloneDeep } from 'lodash';
import React, { useState } from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const SHORT_PAUL = '/images/short_paul.jpg';

const SORT_BY_OPTIONS = [
    {
        label: 'Received (Newest > Oldest)',
        value: 1,
    },
    {
        label: 'Received (Oldest > Newest)',
        value: 2,
    },
];

const CHECKBOX_OPTION_ONE_LABEL = 'Label 1';
const CHECKBOX_OPTION_TWO_LABEL = 'Label 2';
const CHECKBOX_OPTION_THREE_LABEL = 'Label 3';
const CHECKBOX_OPTION_FOUR_LABEL = 'Label 4';
const CHECKBOX_OPTION_FIVE_LABEL = 'Label 5';
const RADIO_OPTION_ONE_LABEL = 'Option 1';
const RADIO_OPTION_TWO_LABEL = 'Option 2';
const RADIO_OPTION_THREE_LABEL = 'Option 3';
const RESULT_TYPE_RADIO_ITEM_ACTIVE_ID = 'filters_rail--radio_item_active';
const RESULT_TYPE_RADIO_ITEM_ACTIVE_INDEX = 0;
const RESULT_TYPE_RADIO_ITEM_INACTIVE_ID = 'filters_rail--radio_item_inactive';
const RESULT_TYPE_RADIO_ITEM_INACTIVE_INDEX = 1;

const DEFAULT_FILTER_VALUES = {
    selectedCheckboxes: {
        isLabelOneChecked: false,
        isLabelTwoChecked: false,
        isLabelThreeChecked: false,
        isLabelFourChecked: false,
        isLabelFiveChecked: false,
    },
    selectedRadio: RADIO_OPTION_ONE_LABEL,
};

const useStyles = makeStyles((theme) => ({
    actionBar: {
        left: '0 !important',
        top: '0 !important',
    },
    personMetaData: {
        fontSize: theme.typography.pxToRem(12),
    },
}));

function FiltersRailDrawerSample() {
    const [filterValues, setFilterValues] = useState(DEFAULT_FILTER_VALUES);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);
    const [isFiltersRailOpen, setIsFiltersRailOpen] = useState(true);
    const [resultTypeIndex, setResultTypeIndex] = useState(RESULT_TYPE_RADIO_ITEM_ACTIVE_INDEX);
    const [sortByValue, setSortByValue] = useState(SORT_BY_OPTIONS[0]);

    const classes = useStyles();

    const onCheckboxChange = (option) => {
        const newFilterValues = cloneDeep({
            ...filterValues,
        });

        switch (option) {
            case CHECKBOX_OPTION_ONE_LABEL:
                newFilterValues.selectedCheckboxes.isLabelOneChecked =
                    !filterValues.selectedCheckboxes.isLabelOneChecked;

                break;
            case CHECKBOX_OPTION_TWO_LABEL:
                newFilterValues.selectedCheckboxes.isLabelTwoChecked =
                    !filterValues.selectedCheckboxes.isLabelTwoChecked;

                break;
            case CHECKBOX_OPTION_THREE_LABEL:
                newFilterValues.selectedCheckboxes.isLabelThreeChecked =
                    !filterValues.selectedCheckboxes.isLabelThreeChecked;

                break;
            case CHECKBOX_OPTION_FOUR_LABEL:
                newFilterValues.selectedCheckboxes.isLabelFourChecked =
                    !filterValues.selectedCheckboxes.isLabelFourChecked;

                break;
            case CHECKBOX_OPTION_FIVE_LABEL:
                newFilterValues.selectedCheckboxes.isLabelFiveChecked =
                    !filterValues.selectedCheckboxes.isLabelFiveChecked;

                break;
            default:
        }

        setFilterValues(newFilterValues);
        setIsFiltering(!isEqual(DEFAULT_FILTER_VALUES, newFilterValues));
    };

    const onClearFilters = () => {
        setFilterValues(DEFAULT_FILTER_VALUES);
        setIsFiltering(false);
    };

    const onFiltersClick = () => {
        setIsFiltersRailOpen(!isFiltersRailOpen);
    };

    const onOpenDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const onRadioChange = (option) => {
        const newFilterValues = cloneDeep({
            ...filterValues,
        });

        newFilterValues.selectedRadio = option;

        setFilterValues(newFilterValues);
        setIsFiltering(!isEqual(DEFAULT_FILTER_VALUES, newFilterValues));
    };

    const onRadioPillChange = (radioItemId) => {
        let newResultTypeIndex = resultTypeIndex;

        switch (radioItemId) {
            case RESULT_TYPE_RADIO_ITEM_ACTIVE_ID:
                newResultTypeIndex = RESULT_TYPE_RADIO_ITEM_ACTIVE_INDEX;

                break;
            case RESULT_TYPE_RADIO_ITEM_INACTIVE_ID:
                newResultTypeIndex = RESULT_TYPE_RADIO_ITEM_INACTIVE_INDEX;

                break;
            default:
        }

        setResultTypeIndex(newResultTypeIndex);
    };

    const onSelectChange = (selectedOption) => {
        setSortByValue(selectedOption);
    };

    return (
        <div>
            <Button
                color="primary"
                onClick={onOpenDrawerToggle}
            >
                Open Drawer
            </Button>

            <Drawer
                isOpen={isDrawerOpen}
            >
                <Drawer.TitleBar
                    closeButton={(
                        <Button
                            icon
                            onClick={onOpenDrawerToggle}
                        >
                            <Icon type="close" />
                        </Button>
                    )}
                />

                <Drawer.ActionBar
                    classes={{
                        root: classes.actionBar,
                    }}
                    columns={[
                        {
                            iconFilter: {
                                onClick: onFiltersClick,
                            },
                            sm: true,
                        },
                        {
                            button: {
                                color: 'secondary',
                                iconType: 'comment-lines',
                                title: 'SMS',
                            },
                            sm: 'auto',
                            style: {
                                textAlign: 'right',
                            },
                        },
                        {
                            dropdownButton: {
                                color: 'secondary',
                                label: 'Actions',
                                options: [
                                    {
                                        label: 'Option 01',
                                    }, {
                                        label: 'Option 02',
                                    }, {
                                        label: 'Option 03',
                                    },
                                ],
                                title: 'Actions',
                            },
                            sm: 'auto',
                            style: {
                                textAlign: 'right',
                            },
                        },
                        {
                            button: {
                                color: 'success',
                                iconType: 'plus',
                                label: 'Label',
                                title: 'Label',
                            },
                            sm: 'auto',
                            style: {
                                textAlign: 'right',
                            },
                        },
                    ]}
                />

                <Drawer.Container>
                    <FiltersRail
                        moduleType="drawer"
                        isFiltering={isFiltering}
                        isOpen={isFiltersRailOpen}
                        onClear={onClearFilters}
                        rows={[
                            {
                                heading: 'Sort By',
                                components: [
                                    {
                                        props: {
                                            onChange: onSelectChange,
                                            options: SORT_BY_OPTIONS,
                                            placeholder: 'test',
                                            value: sortByValue,
                                        },
                                        type: 'select',
                                    },
                                ],
                            }, {
                                components: [
                                    {
                                        props: {
                                            checked: resultTypeIndex,
                                            onChange: onRadioPillChange,
                                            options: [
                                                {
                                                    id: RESULT_TYPE_RADIO_ITEM_ACTIVE_ID,
                                                    label: 'Active',
                                                }, {
                                                    id: RESULT_TYPE_RADIO_ITEM_INACTIVE_ID,
                                                    label: 'Inactive',
                                                },
                                            ],
                                        },
                                        type: 'radioPill',
                                    },
                                ],
                            },
                            {
                                heading: 'Type',
                                components: [
                                    {
                                        props: {
                                            checked:
                                                filterValues.selectedRadio === RADIO_OPTION_ONE_LABEL,
                                            label: RADIO_OPTION_ONE_LABEL,
                                            name: 'typeRadio',
                                            onChange: () => onRadioChange(RADIO_OPTION_ONE_LABEL),
                                        },
                                        type: 'radio',
                                    },
                                    {
                                        props: {
                                            checked:
                                                filterValues.selectedRadio === RADIO_OPTION_TWO_LABEL,
                                            label: RADIO_OPTION_TWO_LABEL,
                                            name: 'typeRadio',
                                            onChange: () => onRadioChange(RADIO_OPTION_TWO_LABEL),
                                        },
                                        type: 'radio',
                                    },
                                    {
                                        props: {
                                            checked:
                                                filterValues.selectedRadio === RADIO_OPTION_THREE_LABEL,
                                            label: RADIO_OPTION_THREE_LABEL,
                                            name: 'typeRadio',
                                            onChange: () => onRadioChange(RADIO_OPTION_THREE_LABEL),
                                        },
                                        type: 'radio',
                                    },
                                ],
                            }, {
                                collapsible: true,
                                heading: 'Category',
                                components: [
                                    {
                                        props: {
                                            checked: filterValues.selectedCheckboxes.isLabelOneChecked,
                                            count: 10,
                                            label: CHECKBOX_OPTION_ONE_LABEL,
                                            onChange: () => onCheckboxChange(CHECKBOX_OPTION_ONE_LABEL),
                                        },
                                        type: 'checkbox',
                                    },
                                    {
                                        props: {
                                            checked: filterValues.selectedCheckboxes.isLabelTwoChecked,
                                            count: 10,
                                            label: CHECKBOX_OPTION_TWO_LABEL,
                                            onChange: () => onCheckboxChange(CHECKBOX_OPTION_TWO_LABEL),
                                        },
                                        type: 'checkbox',
                                    },
                                    {
                                        props: {
                                            checked: filterValues.selectedCheckboxes.isLabelThreeChecked,
                                            count: 10,
                                            label: CHECKBOX_OPTION_THREE_LABEL,
                                            onChange: () => onCheckboxChange(CHECKBOX_OPTION_THREE_LABEL),
                                        },
                                        type: 'checkbox',
                                    },
                                    {
                                        props: {
                                            checked: filterValues.selectedCheckboxes.isLabelFourChecked,
                                            count: 10,
                                            label: CHECKBOX_OPTION_FOUR_LABEL,
                                            onChange: () => onCheckboxChange(CHECKBOX_OPTION_FOUR_LABEL),
                                        },
                                        type: 'checkbox',
                                    },
                                    {
                                        props: {
                                            checked: filterValues.selectedCheckboxes.isLabelFiveChecked,
                                            count: 10,
                                            label: CHECKBOX_OPTION_FIVE_LABEL,
                                            onChange: () => onCheckboxChange(CHECKBOX_OPTION_FIVE_LABEL),
                                        },
                                        type: 'checkbox',
                                    },
                                ],
                            },
                        ]}
                    />

                    <Drawer.Content>
                        <Drawer.DataGrid
                            columns={[
                                {
                                    accessor: () => <Image src={SHORT_PAUL} type="person" />,
                                    header: 'Pic',
                                    style: {
                                        width: 44,
                                    },
                                },
                                {
                                    accessor: (data) => (
                                        <div>
                                            <Typography
                                                variant="h4"
                                            >
                                                {`${data.firstName} ${data.lastName}`}
                                            </Typography>

                                            <Typography
                                                classes={{
                                                    root: classes.personMetaData,
                                                }}
                                                color="textSecondary"
                                                variant="body1"
                                            >
                                                {`${data.gender} | ${data.status} | ${data.campus}`}
                                            </Typography>
                                        </div>
                                    ),
                                    header: 'Name',
                                    style: {
                                        whiteSpace: 'nowrap',
                                        width: '100%',
                                    },
                                },
                                {
                                    accessor: 'groups',
                                    header: 'Groups A',
                                    style: {
                                        whiteSpace: 'nowrap',
                                    },
                                },
                                {
                                    accessor: 'roles',
                                    header: 'Roles',
                                    style: {
                                        whiteSpace: 'nowrap',
                                    },
                                },
                                {
                                    accessor: 'dataAdded',
                                    header: 'Data Added',
                                    style: {
                                        whiteSpace: 'nowrap',
                                    },
                                },
                                {
                                    accessor: () => <Icon compact size={10} type="chevron-right" />,
                                    style: {
                                        textAlign: 'right',
                                    },
                                },
                            ]}
                            data={[
                                {
                                    campus: 'Music Festivals',
                                    dataAdded: '12/20/19',
                                    firstName: 'Short',
                                    gender: 'male',
                                    groups: 'Group A',
                                    lastName: 'Paul',
                                    roles: 'Greeter',
                                    status: 'Single',
                                },
                                {
                                    campus: 'Music Festivals',
                                    dataAdded: '12/20/19',
                                    firstName: 'Short',
                                    gender: 'male',
                                    groups: 'Group A',
                                    lastName: 'Paul',
                                    roles: 'Greeter',
                                    status: 'Single',
                                },
                                {
                                    campus: 'Music Festivals',
                                    dataAdded: '12/20/19',
                                    firstName: 'Short',
                                    gender: 'male',
                                    groups: 'Group A',
                                    lastName: 'Paul',
                                    roles: 'Greeter',
                                    status: 'Single',
                                },
                                {
                                    campus: 'Music Festivals',
                                    dataAdded: '12/20/19',
                                    firstName: 'Short',
                                    gender: 'male',
                                    groups: 'Group A',
                                    lastName: 'Paul',
                                    roles: 'Greeter',
                                    status: 'Single',
                                },
                                {
                                    campus: 'Music Festivals',
                                    dataAdded: '12/20/19',
                                    firstName: 'Short',
                                    gender: 'male',
                                    groups: 'Group A',
                                    lastName: 'Paul',
                                    roles: 'Greeter',
                                    status: 'Single',
                                },
                                {
                                    campus: 'Music Festivals',
                                    dataAdded: '12/20/19',
                                    firstName: 'Short',
                                    gender: 'male',
                                    groups: 'Group A',
                                    lastName: 'Paul',
                                    roles: 'Greeter',
                                    status: 'Single',
                                },
                            ]}
                        />
                    </Drawer.Content>
                </Drawer.Container>
            </Drawer>
        </div>
    );
}

export default FiltersRailDrawerSample;
