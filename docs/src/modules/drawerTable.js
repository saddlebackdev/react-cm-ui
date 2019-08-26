import { Button, Card, Drawer, Header, Icon, Input, TitleBar } from 'react-cm-ui';
import DrawerSubNavigation from './drawerSubNavigation.js';
import Highlighter from '../app/highlighter.js';
import Main from '../app/main.js';
import moment from 'moment-timezone';
import React from 'react';
import TableProps from '../app/tableProps.js';

const drawerGridSample = `import { Button, Drawer } from 'react-cm-ui';
import React from 'react';

export default class DrawerGridSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false,
        };

        this._onDrawerToggle = this._onDrawerToggle.bind(this);
    }

    render() {
        const {
            isDrawerOpen,
            searchValue,
        } = this.state;

        return (
            <div>
                <Button onClick={this._onDrawerToggle}>Open Drawer</Button>

                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={this._onDrawerToggle}
                >
                    <Drawer.TitleBar
                        closeButton={<Icon compact onClick={this._onDrawerToggle} type="times" />}
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
                                onClick: this._onClickTest,
                            },
                        ]}
                    />

                    <Drawer.ActionBar
                        columns={[
                            {
                                columns: [
                                    {
                                        jsx: (
                                            <Icon
                                                onClick={this._onFiltersDrawerToggle}
                                                title="Filter"
                                                type="arrow-sort"
                                            />
                                        ),
                                    }, {
                                        jsx: (
                                            <Icon
                                                onClick={this._onViewGridClick}
                                                title="Grid View"
                                                type="grid"
                                            />
                                        ),
                                    }, {
                                        jsx: (
                                            <Icon
                                                onClick={this._onViewTableClick}
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
                                        icon={searchValue ?
                                            <Icon
                                                compact
                                                onClick={this._onClearSearchClick}
                                                title="Clear Search"
                                                type="times"
                                            /> : null
                                        }
                                        onChange={this._onSearchChange}
                                        onKeyDown={this._onSearchKeyDown}
                                        placeholder="Search"
                                        value={searchValue}
                                    />
                                ),
                                flexGrow: 1,
                            }, {
                                jsx: (
                                    <Button
                                        color="success"
                                        onClick={this._onNewTemplateClick}
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
                        <Drawer.Grid
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

    _onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }
}`;

class ModulesDrawerTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false,
            searchValue: '',
        };

        this._onClickTest = this._onClickTest.bind(this);
        this._onDrawerToggle = this._onDrawerToggle.bind(this);
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
                description: 'Horizontally extend Drawer.Table all the way to the edges of the parent Drawer.',
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
                description: 'Required for Drawer.Table to know where to place data.',
                allowedTypes: '',
            }, {
                name: '*data',
                type: 'array',
                default: '',
                description: 'Required for Drawer.Table to feed columns.',
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
                description: 'Supply any inline styles to the Drawer.Grid\'s container. Mainly used for padding and margins.',
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
                description: 'Supply any inline styles to the Drawer.Grid\'s container. Mainly used for padding and margins.',
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

                    {/* Table */}
                    <Header anchor="drawer" size="large" style={{ marginTop: '55px' }} sub>
                        Table
                        <Header.Subheader>
                            UI for displaying a data in a table. Users can usualy toggle between this and the Drawer.Grid sub-components.
                        </Header.Subheader>
                    </Header>

                    <Button onClick={this._onDrawerToggle}>Open Drawer</Button>

                    <Drawer
                        isOpen={isDrawerOpen}
                        onClose={this._onDrawerToggle}
                    >
                        <Drawer.TitleBar
                            closeButton={<Icon compact onClick={this._onDrawerToggle} type="times" />}
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
                                    onClick: this._onClickTest,
                                },
                            ]}
                        />

                        <Drawer.ActionBar
                            columns={[
                                {
                                    columns: [
                                        {
                                            jsx: (
                                                <Icon
                                                    onClick={this._onFiltersDrawerToggle}
                                                    title="Filter"
                                                    type="arrow-sort"
                                                />
                                            ),
                                        }, {
                                            jsx: (
                                                <Icon
                                                    onClick={this._onViewGridClick}
                                                    title="Grid View"
                                                    type="grid"
                                                />
                                            ),
                                        }, {
                                            jsx: (
                                                <Icon
                                                    onClick={this._onViewTableClick}
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
                                            icon={searchValue ?
                                                <Icon
                                                    compact
                                                    onClick={this._onClearSearchClick}
                                                    title="Clear Search"
                                                    type="times"
                                                /> : null
                                            }
                                            onChange={this._onSearchChange}
                                            onKeyDown={this._onSearchKeyDown}
                                            placeholder="Search"
                                            value={searchValue}
                                        />
                                    ),
                                    flexGrow: 1,
                                }, {
                                    jsx: (
                                        <Button
                                            color="success"
                                            onClick={this._onNewTemplateClick}
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
                            <Drawer.Table
                                columns={[
                                    {
                                        accessor: 'name',
                                        header: 'Names',
                                    }, {
                                        accessor: 'campus',
                                        header: 'Campus',
                                    }, {
                                        accessor: d => {
                                            return moment.unix(d.createdOn).utc().format('L');
                                        },
                                        header: 'Created On',
                                    }, {
                                        accessor: () => <Icon compact size="xxsmall" type="chevron-right" />,
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
                                rowProps={() => {
                                    return {
                                        onClick: this._onTableRowClick,
                                    };
                                }}
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

    _onClickTest() {
        window.alert('You just clicked the fourth column!');
    }

    _onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }
}

export default ModulesDrawerTable;
