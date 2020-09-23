import {
    FiltersRail,
    Icon,
    Image,
    Page,
    Typography,
} from 'react-cm-ui';
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

const useStyles = makeStyles((theme) => ({
    actionBar: {
        left: '0 !important',
        top: '0 !important',
    },
    personMetaData: {
        fontSize: theme.typography.pxToRem(12),
    },
}));

function FiltersRailPageSample() {
    const [isFiltersRailOpen, setIsFiltersRailOpen] = useState(true);
    const [sortByValue, setSortByValue] = useState(SORT_BY_OPTIONS[0]);

    const classes = useStyles();

    const onFiltersClick = () => {
        setIsFiltersRailOpen(!isFiltersRailOpen);
    };

    const onSelectChange = (selectedOption) => {
        setSortByValue(selectedOption);
    };

    return (
        <Page>
            <Page.ActionBar
                classes={{
                    root: classes.actionBar,
                }}
                columns={[
                    {
                        iconFilter: {
                            isFiltering: false,
                            onClick: onFiltersClick,
                            selected: isFiltersRailOpen,
                        },
                        sm: true,
                    },
                    {
                        button: {
                            color: 'alternate',
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
                            color: 'alternate',
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

            <Page.Container>
                <FiltersRail
                    isOpen={isFiltersRailOpen}
                    rows={[
                        {
                            heading: 'Sort By',
                            components: [
                                {
                                    type: 'select',
                                    onChange: onSelectChange,
                                    options: SORT_BY_OPTIONS,
                                    placeholder: 'test',
                                    value: sortByValue,
                                },
                            ],
                        }, {
                            components: [
                                {
                                    type: 'radioPill',
                                    onChange: () => {},
                                    options: [
                                        {
                                            label: 'Active',
                                        }, {
                                            label: 'Inactive',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            heading: 'Type',
                            options: [
                                {
                                    label: 'Option 1',
                                    value: 1,
                                },
                                {
                                    label: 'Option 2',
                                    value: 2,
                                },
                                {
                                    label: 'Option 3',
                                    value: 3,
                                },
                            ],
                            type: 'radio',
                        }, {
                            heading: 'Category',
                            options: [
                                {
                                    label: 'Option 1',
                                    value: 1,
                                },
                                {
                                    label: 'Option 2',
                                    value: 2,
                                },
                                {
                                    label: 'Option 3',
                                    value: 3,
                                },
                                {
                                    label: 'Option 4',
                                    value: 4,
                                },
                                {
                                    label: 'Option 5',
                                    value: 5,
                                },
                            ],
                            type: 'checkbox',
                        },
                    ]}
                />

                <Page.Content>
                    <Page.DataGrid
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
                </Page.Content>
            </Page.Container>
        </Page>
    );
}

export default FiltersRailPageSample;
