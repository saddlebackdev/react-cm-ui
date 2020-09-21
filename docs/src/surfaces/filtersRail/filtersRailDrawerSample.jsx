import {
    Button,
    Drawer,
    FiltersRail,
    Icon,
    Image,
    Typography,
} from 'react-cm-ui';
import React, { useState } from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const SHORT_PAUL = '/images/short_paul.jpg';

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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isFiltersRailOpen, setIsFiltersRailOpen] = useState(false);

    const classes = useStyles();

    const onFiltersClick = () => {
        setIsFiltersRailOpen(!isFiltersRailOpen);
    };

    const onOpenDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            <Button
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
                            color="alternate"
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

                <Drawer.Container>
                    <FiltersRail
                        isOpen={isFiltersRailOpen}
                        moduleType="drawer"
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
