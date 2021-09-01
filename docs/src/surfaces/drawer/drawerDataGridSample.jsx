import {
    Button,
    Drawer,
    Icon,
    Input,
} from 'react-cm-ui';
import moment from 'moment-timezone';
import React, { useState } from 'react';

function ModulesDrawerDataGrid() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [searchValue] = useState('');

    function onDrawerToggle() {
        setIsDrawerOpen(!isDrawerOpen);
    }

    function onClickTest() {
        console.log('You just clicked the fourth column!'); // eslint-disable-line no-console
    }

    return (
        <div>
            <Button onClick={() => onDrawerToggle()} designVersion={2}>Open Drawer</Button>

            <Drawer
                isOpen={isDrawerOpen}
                onClose={() => onDrawerToggle()}
            >
                <Drawer.TitleBar
                    closeButton={(
                        <Icon compact onClick={() => onDrawerToggle()} type="times" />
                    )}
                    title="Data Grid"
                />

                <Drawer.Navigation
                    columns={[
                        {
                            label: 'Button 1',
                        }, {
                            label: 'Button 2',
                        }, {
                            label: 'Button 3',
                        }, {
                            label: 'Button 4',
                            onClick: () => onClickTest(),
                        },
                    ]}
                />

                <Drawer.ActionBar
                    columns={[
                        {
                            list: [
                                {
                                    jsx: (
                                        <Icon
                                            onClick={() => {}}
                                            title="Filter"
                                            type="arrow-sort"
                                        />
                                    ),
                                }, {
                                    jsx: (
                                        <Icon
                                            onClick={() => {}}
                                            title="Grid View"
                                            type="grid"
                                        />
                                    ),
                                }, {
                                    jsx: (
                                        <Icon
                                            onClick={() => {}}
                                            title="List View"
                                            type="list"
                                        />
                                    ),
                                },
                            ],
                        }, {
                            jsx: (
                                <Input
                                    fluid
                                    icon={searchValue && (
                                        <Icon
                                            compact
                                            onClick={() => {}}
                                            title="Clear Search"
                                            type="times"
                                        />
                                    )}
                                    onChange={() => {}}
                                    onKeyDown={() => {}}
                                    placeholder="Search"
                                    value={searchValue}
                                />
                            ),
                            flexGrow: 1,
                        }, {
                            jsx: (
                                <Button
                                    color="success"
                                    onClick={() => {}}
                                    style={{ margin: 0 }}
                                    designVersion={2}
                                >
                                    <Icon type="plus" />
                                    <span>New Template</span>
                                </Button>
                            ),
                        },
                    ]}
                />

                <Drawer.Content>
                    <Drawer.DataGrid
                        columns={[
                            {
                                accessor: 'name',
                                header: 'Names',
                            }, {
                                accessor: 'campus',
                                header: 'Campus',
                            }, {
                                accessor: (data) => moment.unix(data.createdOn).utc().format('L'),
                                header: 'Created On',
                            }, {
                                accessor: () => (
                                    <Icon compact size="xxsmall" type="chevron-right" />
                                ),
                                header: null,
                                textAlign: 'right',
                            },
                        ]}
                        data={[
                            {
                                campus: 'Lake Forest',
                                createdOn: 1259668810,
                                id: 1,
                                name: 'First Time Visitor',
                            }, {
                                campus: 'Lake Forest',
                                createdOn: 1159668810,
                                id: 2,
                                name: 'Second Time Visitor',
                            }, {
                                campus: 'Anaheim',
                                createdOn: 1152668810,
                                id: 3,
                                name: 'Class 101 Invite',
                            },
                        ]}
                        rowProps={(data) => ({
                            className: 'block_name--element_name',
                            id: `block_name--element_name-${data && data.id}`,
                            onClick: () => {},
                        })}
                    />
                </Drawer.Content>
            </Drawer>
        </div>
    );
}

export default ModulesDrawerDataGrid;
