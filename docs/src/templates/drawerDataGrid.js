import {
    Button,
    Card,
    Drawer,
    Header,
    Icon,
    Input,
    TitleBar,
} from 'react-cm-ui';
import moment from 'moment-timezone';
import React from 'react';
import DrawerSubNavigation from './drawerSubNavigation.js';
import Highlighter from '../global/highlighter.js';
import Main from '../app/main.js';
import TableProps from '../global/tableProps.js';

const drawerGridSample = `import { Button, Drawer } from 'react-cm-ui';
import React from 'react';

export default class DrawerGridSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false,
        };

        this.onDrawerToggle = this.onDrawerToggle.bind(this);
    }

    onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }

    render() {
        const {
            isDrawerOpen,
            searchValue,
        } = this.state;

        return (
            <div>
                <Button onClick={this.onDrawerToggle}>Open Drawer</Button>

                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={this.onDrawerToggle}
                >
                    <Drawer.TitleBar
                        closeButton={<Icon compact onClick={this.onDrawerToggle} type="times" />}
                        title="Don't Pay Attention to the TitleBar, But to the Navigation"
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
                                onClick: this.onClickTest,
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
                                                onClick={this.onFiltersDrawerToggle}
                                                title="Filter"
                                                type="arrow-sort"
                                            />
                                        ),
                                    }, {
                                        jsx: (
                                            <Icon
                                                onClick={this.onViewGridClick}
                                                title="Grid View"
                                                type="grid"
                                            />
                                        ),
                                    }, {
                                        jsx: (
                                            <Icon
                                                onClick={this.onViewTableClick}
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
                                                onClick={this.onClearSearchClick}
                                                title="Clear Search"
                                                type="times"
                                            />
                                        )}
                                        onChange={this.onSearchChange}
                                        onKeyDown={this.onSearchKeyDown}
                                        placeholder="Search"
                                        value={searchValue}
                                    />
                                ),
                                flexGrow: 1,
                            }, {
                                jsx: (
                                    <Button
                                        color="success"
                                        onClick={this.onNewTemplateClick}
                                        style={{ margin: 0 }}
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
                            cardProps={() => {
                                return {
                                    onClick: this._onCardClick,
                                };
                            }}
                            columns={[
                                {
                                    accessor: 'name',
                                    fontSize: 'medium',
                                    fontWeight: 'semibold',
                                    header: false,
                                    width: '100%',
                                }, {
                                    accessor: 'campus',
                                    fontWeight: 'bold',
                                    header: 'Campus',
                                }, {
                                    accessor: d => {
                                        return moment.unix(d.createdOn).utc().format('L');
                                    },
                                    fontWeight: 'bold',
                                    header: 'Created On',
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
                        />
                    </Drawer.Content>
                </Drawer>
            </div>
        );
    }
}`;

function onClickTest() {
    console.log('You just clicked the fourth column!'); // eslint-disable-line no-console
}

class ModulesDrawerDataGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false,
            searchValue: '',
        };

        this.onDrawerToggle = this.onDrawerToggle.bind(this);
    }

    onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }

    render() {
        const {
            isDrawerOpen,
            searchValue,
        } = this.state;
        const props = [
            {
                name: 'bleed',
                type: 'bool',
                default: 'true',
                description: 'Horizontally extend Drawer.DataGrid all the way to the edges of the parent Drawer.',
                allowedTypes: '',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: '*columns',
                type: 'array',
                default: '',
                description: 'Required for Drawer.DataGrid to know where to place data.',
                allowedTypes: '',
            }, {
                name: '*data',
                type: 'array',
                default: '',
                description: 'Required for Drawer.DataGrid to feed columns.',
                allowedTypes: '',
            }, {
                name: 'fontSize',
                type: 'enum',
                default: '',
                description: 'The size of a Table\'s default font size.',
                allowedTypes: 'large, medium, small, xlarge, xsmall, xxsmall',
            }, {
                name: 'rowProps',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Drawer.DataGrid\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'size',
                type: 'enum',
                default: '',
                description: 'The vertical size of a table\'s body of cells.',
                allowedTypes: 'large, medium, small',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Drawer.DataGrid\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <TitleBar title="Drawer" />

                <DrawerSubNavigation />

                <div>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Data Grid */}
                    <Header anchor="drawer" size="large" style={{ marginTop: '55px' }} sub>
                        Data Grid
                        <Header.Subheader>
                            UI for displaying a data in a table. Users can usualy toggle between
                            this and the Drawer.DataCards sub-components.
                        </Header.Subheader>
                    </Header>

                    <Button onClick={this.onDrawerToggle}>Open Drawer</Button>

                    <Drawer
                        isOpen={isDrawerOpen}
                        onClose={this.onDrawerToggle}
                    >
                        <Drawer.TitleBar
                            closeButton={<Icon compact onClick={this.onDrawerToggle} type="times" />}
                            title="Don't Pay Attention to the TitleBar, But to the Navigation"
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
                                    onClick: onClickTest,
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
                                                    onClick={this.onFiltersDrawerToggle}
                                                    title="Filter"
                                                    type="arrow-sort"
                                                />
                                            ),
                                        }, {
                                            jsx: (
                                                <Icon
                                                    onClick={this.onViewGridClick}
                                                    title="Grid View"
                                                    type="grid"
                                                />
                                            ),
                                        }, {
                                            jsx: (
                                                <Icon
                                                    onClick={this.onViewTableClick}
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
                                                    onClick={this.onClearSearchClick}
                                                    title="Clear Search"
                                                    type="times"
                                                />
                                            )}
                                            onChange={this.onSearchChange}
                                            onKeyDown={this.onSearchKeyDown}
                                            placeholder="Search"
                                            value={searchValue}
                                        />
                                    ),
                                    flexGrow: 1,
                                }, {
                                    jsx: (
                                        <Button
                                            color="success"
                                            onClick={this.onNewTemplateClick}
                                            style={{ margin: 0 }}
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
                                        accessor: (d) => moment.unix(d.createdOn).utc().format('L'),
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
                                rowProps={() => ({
                                    onClick: this.onTableRowClick,
                                })}
                            />
                        </Drawer.Content>
                    </Drawer>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {drawerGridSample}
                    </Highlighter>
                </div>
            </Main>
        );
    }
}

export default ModulesDrawerDataGrid;
