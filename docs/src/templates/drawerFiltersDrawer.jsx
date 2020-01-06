import {
    Button,
    Card,
    Drawer,
    Dropdown,
    Header,
    Icon,
    Input,
    TitleBar,
} from 'react-cm-ui';
import _ from 'lodash';
import React from 'react';
import DrawerSubNavigation from '../modules/drawerSubNavigation';
import Highlighter from '../app/highlighter';
import Main from '../app/main';
import TableProps from '../app/tableProps';

const drawerFiltersDrawerSample = `import { Button, Drawer } from 'react-cm-ui';
import React from 'react';

export default class DrawerFiltersDrawerSample extends React.Component {
    static onClickTest() {
        window.alert('You just clicked the fourth column!');
    }

    constructor(props) {
        super(props);

        this.defaultFilters = {
            filtersCheckbox: [],
            filtersDropdownValue: {
                label: 'Name (Ascending)',
                value: 'Name (Ascending)',
            },
        };

        this.state = {
            appliedFilters: _.cloneDeep(this.defaultFilters),
            dirtyFilters: _.cloneDeep(this.defaultFilters),
            isDrawerOpen: false,
            isFiltersDrawerOpen: false,
        };

        this.onApplyFiltersDrawerClick = this.onApplyFiltersDrawerClick.bind(this);
        this.onClearFiltersDrawerClick = this.onClearFiltersDrawerClick.bind(this);
        this.onDrawerToggle = this.onDrawerToggle.bind(this);
        this.onFiltersCheckboxChange = this.onFiltersCheckboxChange.bind(this);
        this.onFiltersDropdownChange = this.onFiltersDropdownChange.bind(this);
        this.onFiltersDrawerToggle = this.onFiltersDrawerToggle.bind(this);
    }

    onApplyFiltersDrawerClick() {
        const { dirtyFilters } = this.state;

        this.setState({
            appliedFilters: _.cloneDeep(dirtyFilters),
            isFiltersDrawerOpen: false,
            isFiltering: true,
        });
    }

    onClearFiltersDrawerClick() {
        this.setState({
            dirtyFilters: _.cloneDeep(this.defaultFilters),
            isFiltering: false,
        });
    }

    onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }

    onFiltersCheckboxChange(id) {
        let { dirtyFilters } = this.state;

        if (_.includes(dirtyFilters.filtersCheckbox, _.toString(id))) { // Subtract
            dirtyFilters.filtersCheckbox = _.pull(dirtyFilters.filtersCheckbox, _.toString(id));
        } else { // Add
            dirtyFilters.filtersCheckbox = _.union(dirtyFilters.filtersCheckbox, [ _.toString(id) ]);
        }

        this.setState({
            dirtyFilters: _.cloneDeep(dirtyFilters),
        });
    }

    onFiltersDropdownChange(selectedOption) {
        let { dirtyFilters } = this.state;
        dirtyFilters.filtersDropdownValue = selectedOption;

        this.setState({
            dirtyFilters: _.cloneDeep(dirtyFilters),
        });
    }

    onFiltersDrawerToggle() {
        const { isFiltersDrawerOpen } = this.state;

        this.setState({
            isFiltersDrawerOpen: !isFiltersDrawerOpen,
        });
    }

    render() {
        const {
            appliedFilters,
            dirtyFilters,
            isDrawerOpen,
            isFiltersDrawerOpen,
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
                                onClick: DrawerFiltersDrawerSample.onClickTest,
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
                                                color={isFiltersDrawerOpen || isFiltering ? 'highlight' : null}
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
                                        icon={searchValue ?
                                            <Icon
                                                compact
                                                onClick={this.onClearSearchClick}
                                                title="Clear Search"
                                                type="times"
                                            /> : null
                                        }
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
                        <Drawer.FiltersDrawer
                            isDirty={isDirty}
                            isFiltering={isFiltering}
                            isOpen={isFiltersDrawerOpen}
                            onApply={this.onApplyFiltersDrawerClick}
                            onClear={this.onClearFiltersDrawerClick}
                            onClose={this.onFiltersDrawerToggle}
                            rows={[
                                {
                                    header: 'Sort',
                                    items: [
                                        {
                                            dropdown: {
                                                onChange: this.onFiltersDropdownChange,
                                                options: [
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
                                                ],
                                                value: dirtyFilters.filtersDropdownValue,
                                            },
                                        },
                                    ],
                                }, {
                                    header: 'Attendance',
                                    items: [
                                        {
                                            checkbox: {
                                                checked: _.includes(dirtyFilters.filtersCheckbox, '1'),
                                                id: '1',
                                                label: 'Attended',
                                                onChange: this.onFiltersCheckboxChange,
                                            },
                                        }, {
                                            checkbox: {
                                                checked: _.includes(dirtyFilters.filtersCheckbox, '2'),
                                                id: '2',
                                                label: 'Unattended',
                                                onChange: this.onFiltersCheckboxChange,
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />

                        <p>
                        Click the filters icon above in the Drawers.ActionBar (upper left).
                        </p>

                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ornare sapien. Praesent ac dui
                        maximus, cursus eros eu, malesuada tortor. Praesent vulputate molestie leo, eu sollicitudin nisl
                        efficitur sed. Etiam vitae tortor neque. Nullam blandit vestibulum mauris, in tristique velit
                        pretium eu. Nullam ut malesuada ligula. Sed sit amet eros ligula. Cras purus elit, dictum sit amet
                        orci ut, dapibus pulvinar ligula. Vivamus ac sollicitudin orci. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos. Integer sed dictum mauris. Donec non
                        tortor nisi. Sed nec quam nec leo elementum commodo vel nec nisi.
                        </p>

                        <Button onClick={this.onDrawerToggle}>Close Drawer</Button>
                    </Drawer.Content>
                </Drawer>
            </div>
        );
    }
}`;

const rowsArrayProps = `[
    {
        header: 'Title That Goes Above A Grouping of Items',
        items: [
            {
                checkbox: { // type: object. required if no dropdown or jsx property,
                    checked: _.includes(dirtyFilters.filtersCheckbox, '1'),
                    id: '1',
                    label: 'Attended',
                    onChange: this.onFiltersCheckboxChange,
                },
                dropdown: { // type: object. required if no checkbox or jsx property,
                    onChange: this.onFiltersDropdownChange,
                    options: [
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
                    ],
                    value: dirtyFilters.filtersDropdownValue,
                },
                jsx: <Icon type="plus" />, // type: object. required if no checkbox or dropdown property,
            },
        ],
    },
]`;

class ModulesDrawerFiltersDrawer extends React.Component {
    static onClickTest() {
        window.alert('You just clicked the fourth column!');
    }

    constructor(props) {
        super(props);

        this.defaultFilters = {
            filtersCheckbox: [],
            filtersDropdownValue: {
                label: 'Name (Ascending)',
                value: 'Name (Ascending)',
            },
        };

        this.state = {
            appliedFilters: _.cloneDeep(this.defaultFilters),
            dirtyFilters: _.cloneDeep(this.defaultFilters),
            isDirty: false,
            isDrawerOpen: false,
            isFiltering: false,
            isFiltersDrawerOpen: false,
            searchValue: '',
        };

        this.onApplyFiltersDrawerClick = this.onApplyFiltersDrawerClick.bind(this);
        this.onClearFiltersDrawerClick = this.onClearFiltersDrawerClick.bind(this);
        this.onDrawerToggle = this.onDrawerToggle.bind(this);
        this.onFiltersCheckboxChange = this.onFiltersCheckboxChange.bind(this);
        this.onFiltersDropdownChange = this.onFiltersDropdownChange.bind(this);
        this.onFiltersDrawerToggle = this.onFiltersDrawerToggle.bind(this);
    }

    onApplyFiltersDrawerClick() {
        const { dirtyFilters } = this.state;

        this.setState({
            appliedFilters: _.cloneDeep(dirtyFilters),
            isFiltersDrawerOpen: false,
            isFiltering: true,
        });
    }

    onClearFiltersDrawerClick() {
        this.setState({
            dirtyFilters: _.cloneDeep(this.defaultFilters),
            isFiltering: false,
        });
    }

    onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }

    onFiltersCheckboxChange(id) {
        let { dirtyFilters } = this.state;

        if (_.includes(dirtyFilters.filtersCheckbox, _.toString(id))) { // Subtract
            dirtyFilters.filtersCheckbox = _.pull(dirtyFilters.filtersCheckbox, _.toString(id));
        } else { // Add
            dirtyFilters.filtersCheckbox = _.union(dirtyFilters.filtersCheckbox, [ _.toString(id) ]);
        }

        this.setState({
            dirtyFilters: _.cloneDeep(dirtyFilters),
        });
    }

    onFiltersDropdownChange(selectedOption) {
        let { dirtyFilters } = this.state;
        dirtyFilters.filtersDropdownValue = selectedOption;

        this.setState({
            dirtyFilters: _.cloneDeep(dirtyFilters),
        });
    }

    onFiltersDrawerToggle() {
        const { isFiltersDrawerOpen } = this.state;

        this.setState({
            isFiltersDrawerOpen: !isFiltersDrawerOpen,
        });
    }

    render() {
        const {
            appliedFilters,
            dirtyFilters,
            isDrawerOpen,
            isFiltersDrawerOpen,
            searchValue,
        } = this.state;
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: '*isDirty',
                type: 'bool',
                default: '',
                description: 'Required for Drawer.FilterDrawer to know if data is dirty or not.',
                allowedTypes: '',
            }, {
                name: '*isFiltering',
                type: 'bool',
                default: '',
                description: 'Required for Drawer.FilterDrawer to know if data is being filtered or not.',
                allowedTypes: '',
            }, {
                name: '*isOpen',
                type: 'bool',
                default: '',
                description: 'Required boolean for the Drawer.FilterDrawer\'s open/close state.',
                allowedTypes: '',
            }, {
                name: '*onApply',
                type: 'func',
                default: '',
                description: 'Required function for Drawer.FilterDrawer to apply filters to parent.',
                allowedTypes: '',
            }, {
                name: '*onClear',
                type: 'func',
                default: '',
                description: 'Required function for Drawer.FilterDrawer to clear filters that were applied to parent.',
                allowedTypes: '',
            }, {
                name: 'position',
                type: 'string',
                default: 'right',
                description: 'The position of the Drawer.',
                allowedTypes: 'left, right',
            }, {
                name: '*row',
                type: 'array',
                default: '',
                description: 'Required for a consistent way to display actionable UI in a Drawer.FilterDrawer.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Drawer.TitleBar\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];
        const isDirty = !_.isEqual(appliedFilters, dirtyFilters);
        const isFiltering = !_.isEqual(this.defaultFilters, appliedFilters);

        return (
            <Main page="headers">
                <TitleBar title="Drawer" />

                <DrawerSubNavigation />

                <div>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Filters Drawer */}
                    <Header anchor="drawer" size="large" style={{ marginTop: '55px' }} sub>
                        Filters Drawer
                        <Header.Subheader>
                            For filtering data/content in the parent Drawer.
                        </Header.Subheader>
                    </Header>

                    Optional and Required Properties for <code>columns</code>:

                    <Highlighter
                        customStyle={{ marginBottom: '44px', marginTop: '44px' }}
                        showLineNumbers={false}
                        theme="light"
                        type="inline"
                    >
                        {rowsArrayProps}
                    </Highlighter>

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
                                    onClick: ModulesDrawerFiltersDrawer.onClickTest,
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
                                                    color={isFiltersDrawerOpen || isFiltering ? 'highlight' : null}
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
                                            icon={searchValue ?
                                                <Icon
                                                    compact
                                                    onClick={this.onClearSearchClick}
                                                    title="Clear Search"
                                                    type="times"
                                                /> : null
                                            }
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

                        <Drawer.Container>
                            <Drawer.FiltersDrawer
                                isDirty={isDirty}
                                isFiltering={isFiltering}
                                isOpen={isFiltersDrawerOpen}
                                onApply={this.onApplyFiltersDrawerClick}
                                onClear={this.onClearFiltersDrawerClick}
                                onClose={this.onFiltersDrawerToggle}
                                rows={[
                                    {
                                        header: 'Sort',
                                        items: [
                                            {
                                                dropdown: {
                                                    onChange: this.onFiltersDropdownChange,
                                                    options: [
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
                                                    ],
                                                    value: dirtyFilters.filtersDropdownValue,
                                                },
                                            },
                                        ],
                                    }, {
                                        header: 'Attendance',
                                        items: [
                                            {
                                                checkbox: {
                                                    checked: _.includes(dirtyFilters.filtersCheckbox, '1'),
                                                    id: '1',
                                                    label: 'Attended',
                                                    onChange: this.onFiltersCheckboxChange,
                                                },
                                            }, {
                                                checkbox: {
                                                    checked: _.includes(dirtyFilters.filtersCheckbox, '2'),
                                                    id: '2',
                                                    label: 'Unattended',
                                                    onChange: this.onFiltersCheckboxChange,
                                                },
                                            },
                                        ],
                                    },
                                ]}
                            />

                            <Drawer.FiltersRail isOpen={isFiltersDrawerOpen}>
                                <Header weight="bold">Sort By</Header>

                                <Dropdown
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
                                    selection
                                    selectionUnderline
                                    value={{
                                        label: 'Name (Ascending)',
                                        value: 'Name (Ascending)',
                                    }}
                                />

                                <Header weight="bold">Campus</Header>

                                <Dropdown
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
                                    selection
                                    selectionUnderline
                                    value={{
                                        label: 'All Campuses',
                                        value: 'All Campuses',
                                    }}
                                />
                            </Drawer.FiltersRail>

                            <Drawer.Content
                                isFiltersRailOpen={isFiltersDrawerOpen}
                            >
                                <p>
                                Click the filters icon above in the Drawers.ActionBar (upper left).
                                </p>

                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ornare sapien. Praesent ac dui
                                maximus, cursus eros eu, malesuada tortor. Praesent vulputate molestie leo, eu sollicitudin nisl
                                efficitur sed. Etiam vitae tortor neque. Nullam blandit vestibulum mauris, in tristique velit
                                pretium eu. Nullam ut malesuada ligula. Sed sit amet eros ligula. Cras purus elit, dictum sit amet
                                orci ut, dapibus pulvinar ligula. Vivamus ac sollicitudin orci. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos himenaeos. Integer sed dictum mauris. Donec non
                                tortor nisi. Sed nec quam nec leo elementum commodo vel nec nisi.
                                </p>

                                <Button onClick={this.onDrawerToggle}>Close Drawer</Button>
                            </Drawer.Content>
                        </Drawer.Container>
                    </Drawer>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {drawerFiltersDrawerSample}
                    </Highlighter>
                </div>
            </Main>
        );
    }
}

export default ModulesDrawerFiltersDrawer;
