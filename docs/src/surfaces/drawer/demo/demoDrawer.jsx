import {
    cloneDeep,
    isEqual,
    noop,
} from 'lodash';
import {
    Drawer,
    Grid,
    Icon,
    Select,
    Typography,
} from '@saddlebackchurch/react-cm-ui'; // eslint-disable-line import/no-unresolved
import ClassNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from '@saddlebackchurch/react-cm-ui/styles/withStyles'; // eslint-disable-line import/no-unresolved
import React from 'react';

const propTypes = {
    classes: {
        detailsWindow: PropTypes.string,
        root: PropTypes.string,
    },
    isMobile: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    onToggleDrawer: PropTypes.func.isRequired,
    theme: PropTypes.shape({
        palette: PropTypes.shape({
            error: PropTypes.shape({
                main: PropTypes.string,
            }),
            success: PropTypes.shape({
                main: PropTypes.string,
            }),
        }),
    }).isRequired,
};

const defaultProps = {
    classes: undefined,
    isMobile: false,
};

const styles = (theme) => ({
    detailsWindow: {
        [theme.breakpoints.up('sm')]: {
            margin: '0 !important',
        },
    },
    root: {
        '& .drawer-container-inner': {
            height: 'calc(100% - 195px)',
        },
    },
});

class DrawerDemo extends React.PureComponent {
    constructor() {
        super();

        this.defaultFilters = {
            multiSelectValue: [1, 3],
            nestedTogglesBarValue: [1],
            nestedTogglesFooValue: [],
            searchValue: '',
            sort: {
                label: 'Name (Ascending)',
                value: 'Name (Ascending)',
            },
        };

        this.defaultFiltersForRails = {
            selectedColor: 'Green',
        };

        this.state = {
            appliedFilters: cloneDeep(this.defaultFilters),
            appliedFiltersForRails: cloneDeep(this.defaultFiltersForRails),
            dirtyFilters: cloneDeep(this.defaultFilters),
            dirtyFiltersForRails: cloneDeep(this.defaultFiltersForRails),
            isFiltersDrawerOpen: false,
            isFiltersRailOpen: false,
            viewType: 'table',
        };

        this.onApplyFiltersDrawerClick = this.onApplyFiltersDrawerClick.bind(this);
        this.onApplyFiltersRailClick = this.onApplyFiltersRailClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
        this.onClearFiltersDrawerClick = this.onClearFiltersDrawerClick.bind(this);
        this.onClearFiltersRailClick = this.onClearFiltersRailClick.bind(this);
        this.onColorSelectChange = this.onColorSelectChange.bind(this);
        this.onFiltersToggle = this.onFiltersToggle.bind(this);
        this.onKeywordsMultiSelectChange = this.onKeywordsMultiSelectChange.bind(this);
        this.onNestedTogglesBarChange = this.onNestedTogglesBarChange.bind(this);
        this.onNestedTogglesFooChange = this.onNestedTogglesFooChange.bind(this);
        this.onSearchClear = this.onSearchClear.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchKeyDown = this.onSearchKeyDown.bind(this);
        this.onSortDropdownChange = this.onSortDropdownChange.bind(this);
        this.onViewGridClick = this.onViewGridClick.bind(this);
        this.onViewTableClick = this.onViewTableClick.bind(this);
    }

    onApplyFiltersDrawerClick() {
        this.setState((prevState) => ({
            appliedFilters: { ...prevState.dirtyFilters },
            isFiltersDrawerOpen: false,
        }));
    }

    onApplyFiltersRailClick() {
        this.setState((prevState) => ({
            appliedFiltersForRails: { ...prevState.dirtyFiltersForRails },
        }));
    }

    onBackClick() {
        console.log('Mobile Back button clicked!'); // eslint-disable-line no-console
    }

    onClearFiltersDrawerClick() {
        this.setState({
            dirtyFilters: { ...this.defaultFilters },
        });
    }

    onClearFiltersRailClick() {
        this.setState({
            dirtyFiltersForRails: { ...this.defaultFiltersForRails },
        });
    }

    onColorSelectChange(selectedOption) {
        this.setState((prevState) => ({
            dirtyFiltersForRails: {
                ...prevState.dirtyFilters,
                selectedColor: selectedOption.value,
            },
        }));
    }

    onFiltersToggle() {
        this.setState((prevState) => ({
            isFiltersDrawerOpen: !prevState.isFiltersDrawerOpen,
        }));
    }

    onFiltersRailToggle() {
        this.setState((prevState) => ({
            isFiltersRailOpen: !prevState.isFiltersRailOpen,
        }));
    }

    onKeywordsMultiSelectChange(selectedOptions) {
        this.setState((prevState) => ({
            dirtyFilters: {
                ...prevState.dirtyFilters,
                multiSelectValue: selectedOptions,
            },
        }));
    }

    onNestedTogglesBarChange(selectedOptions) {
        this.setState((prevState) => ({
            dirtyFilters: {
                ...prevState.dirtyFilters,
                nestedTogglesBarValue: selectedOptions,
            },
        }));
    }

    onNestedTogglesFooChange(selectedOptions) {
        this.setState((prevState) => ({
            dirtyFilters: {
                ...prevState.dirtyFilters,
                nestedTogglesFooValue: selectedOptions,
            },
        }));
    }

    onSearchClear() {
        console.log('Clearing the search...'); // eslint-disable-line no-console
        this.setState({
            searchValue: '',
        });
    }

    onSearchChange(value) {
        this.setState({
            searchValue: value,
        });
    }

    onSearchKeyDown(event) { // eslint-disable-line no-unused-vars
        console.log('Search onKeyDown.  event:', event); // eslint-disable-line no-console
    }

    onSortDropdownChange(selectedOption) {
        this.setState((prevState) => ({
            dirtyFilters: {
                ...prevState.dirtyFilters,
                sort: selectedOption,
            },
        }));
    }

    onViewGridClick() {
        this.setState({
            viewType: 'grid',
        });
    }

    onViewTableClick() {
        this.setState({
            viewType: 'table',
        });
    }

    render() {
        const {
            classes,
            isMobile,
            isOpen,
            onToggleDrawer,
            theme,
        } = this.props;

        const {
            appliedFilters,
            appliedFiltersForRails,
            dirtyFilters,
            dirtyFiltersForRails,
            isFiltersDrawerOpen,
            searchValue,
            viewType,
        } = this.state;

        const isDirty = !isEqual(appliedFilters, dirtyFilters);
        const isDirtyRailsFilter = !isEqual(appliedFiltersForRails, dirtyFiltersForRails);
        const isFiltering = !isEqual(this.defaultFilters, appliedFilters);

        const actionBarIconFilter = {
            selected: isFiltersDrawerOpen,
            isFiltering,
            onClick: this.onFiltersToggle,
        };

        const actionBarSearch = {
            autoFocus: false,
            onClearClick: this.onSearchClear,
            onChange: this.onSearchChange,
            onKeyDown: this.onSearchKeyDown,
            searchWithSelect: {
                onChange: noop,
                options: [
                    {
                        label: 'People',
                        value: 1,
                    },
                    {
                        label: 'Designations',
                        value: 2,
                    },
                    {
                        label: 'Transaction ID',
                        value: 3,
                    },
                ],
                placeholder: 'People',
                value: 1,
            },
            value: searchValue,
        };

        let actionsBarColumns = [
            {
                list: [
                    {
                        iconFilter: actionBarIconFilter,
                    }, {
                        iconGrid: {
                            selected: viewType === 'grid',
                            onClick: this.onViewGridClick,
                        },
                    }, {
                        iconTable: {
                            selected: viewType === 'table',
                            onClick: this.onViewTableClick,
                        },
                    },
                ],
            }, {
                flexGrow: 1,
                search: actionBarSearch,
            }, {
                button: {
                    color: 'success',
                    iconType: 'plus',
                    label: 'New Template',
                    onClick: noop,
                },
            },
        ];

        if (isMobile) {
            actionsBarColumns = [
                {
                    flexGrow: 1,
                    list: [
                        {
                            iconBack: {
                                onClick: this.onBackClick,
                            },
                            flexGrow: 1,
                        }, {
                            divide: false,
                            iconSearch: actionBarSearch,
                        }, {
                            iconFilter: actionBarIconFilter,
                        }, {
                            actionsButton: {
                                header: 'Foo Title',
                                options: [
                                    {
                                        iconBackgroundColor: theme.palette.success.main,
                                        iconType: actionsBarColumns[2].button.iconType,
                                        label: actionsBarColumns[2].button.label,
                                        options: [
                                            {
                                                iconType: 'archive',
                                                id: 'sub-option-foo',
                                                label: 'Foo Template',
                                                onClick: () => { console.log('Foo Template was clicked!'); /* eslint-disable-line no-console */ },
                                            }, {
                                                iconType: 'broadcast',
                                                id: 'sub-option-bar',
                                                label: 'Bar Template',
                                                onClick: () => { console.log('Bar Template was clicked!'); /* eslint-disable-line no-console */ },
                                            }, {
                                                disable: true,
                                                iconType: 'save',
                                                id: 'sub-option-baz',
                                                label: 'Baz Template',
                                                onClick: () => { console.log('Bar Template was clicked!'); /* eslint-disable-line no-console */ },
                                            }, {
                                                iconType: 'wrench-screwdriver',
                                                id: 'sub-option-quux',
                                                label: 'Quux Template',
                                                onClick: () => { console.log('Quux Template was clicked!'); /* eslint-disable-line no-console */ },
                                                promptColor: 'success',
                                                promptMessage: 'Create a new Quux Template?  For reals?',
                                                requiresPrompt: true,
                                            },
                                        ],
                                    }, {
                                        iconType: 'envelope',
                                        label: 'Email',
                                        onClick: () => { console.log('Email was clicked!'); /* eslint-disable-line no-console */ },
                                    }, {
                                        disable: true,
                                        iconType: 'comment-lines',
                                        label: 'SMS',
                                        onClick: () => { console.log('SMS was clicked!'); /* eslint-disable-line no-console */ },
                                    }, {
                                        iconType: 'times',
                                        label: 'Delete Stuff',
                                        iconBackgroundColor: theme.palette.error.main,
                                        onClick: () => { console.log('Deleting all the things!'); /* eslint-disable-line no-console */ },
                                        promptColor: 'alert',
                                        promptMessage: 'Really delete all the things?  No joke?',
                                        requiresPrompt: true,
                                    },
                                ],
                            },
                        },
                    ],
                },
            ];
        }

        let statsColumns = [
            {
                accessor: () => 'Super Cool Info Bar - Color: 11',
                fontSize: 'large',
                fontWeight: 'semibold',
                header: null,
                width: '100%',
            }, {
                accessor: () => (
                    <svg width="35px" height="35px" viewBox="0 0 35 35">
                        <defs>
                            <path d="M45.9957644,28.1111111 C45.7889536,18.6257181 38.0350177,11 28.5,11 L28.5,18 C34.1687932,18 38.788356,22.4922893 38.9929318,28.1111111 L45.9957644,28.1111111 Z" id="path-1" />
                        </defs>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Group" transform="translate(-11.000000, -11.000000)">
                                <rect id="Rectangle" fill="#000000" opacity="0" x="0" y="0" width="57" height="57" />
                                <path d="M28.5,11 C38.1649831,11 46,18.8350169 46,28.5 C46,38.1649831 38.1649831,46 28.5,46 C18.8350169,46 11,38.1649831 11,28.5 C11,18.8350169 18.8350169,11 28.5,11 Z M28.5,18 C22.7010101,18 18,22.7010101 18,28.5 C18,34.2989899 22.7010101,39 28.5,39 C34.2989899,39 39,34.2989899 39,28.5 C39,22.7010101 34.2989899,18 28.5,18 Z" id="Oval" fillOpacity="0.3" fill="#FFFFFF" />
                                <mask id="mask-2" fill="white">
                                    <use xlinkHref="#path-1" />
                                </mask>
                                <use id="Oval-Copy" fill="#56C4C4" xlinkHref="#path-1" />
                                <rect id="Rectangle-2" fill="#FFFFFF" mask="url(#mask-2)" x="0" y="0" width="57" height="57" />
                            </g>
                        </g>
                    </svg>
                ), // eslint-disable-line no-unused-vars,max-len
                fontWeight: 'bold',
                header: null,
                width: '67px',
            }, {
                accessor: 'notContacted',
                header: 'Not Contacted',
            }, {
                accessor: 'contacted',
                header: 'Contacted',
            },
        ];

        let statsExpandableColumns = [
            {
                divide: !isMobile,
                accessor: 'firstContact',
                header: '1st Contact',
            }, {
                accessor: 'secondContact',
                header: '2nd Contact',
            }, {
                accessor: 'pending',
                header: 'Pending',
            },
        ];

        if (!isMobile) {
            statsColumns = [
                ...statsColumns,
                ...statsExpandableColumns,
            ];
            statsExpandableColumns = [];
        } else {
            statsColumns = [
                ...statsColumns,
                {
                    expandedButton: isMobile,
                    expandedButtonId: 'drawer_demo--details_expanded_button_unique_id',
                    header: null,
                },
            ];
            statsExpandableColumns = [
                {
                    accessor: null,
                    header: null,
                    width: '67px',
                },
                ...statsExpandableColumns,
            ];
        }

        const drawerClasses = ClassNames(
            classes.root,
            'drawer--class_name',
        );

        return (
            <Drawer
                isOpen={isOpen}
                onClose={onToggleDrawer}
                className={drawerClasses}
            >
                <Drawer.TitleBar
                    closeButton={<Icon compact onClick={onToggleDrawer} type="times" />}
                    title="Demo Drawer"
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
                            onClick: () => { console.log('Clicked Button 4'); },
                        },
                    ]}
                />

                <Drawer.ActionBar
                    columns={actionsBarColumns}
                />

                <Drawer.DetailsWindow
                    className={classes.detailsWindow}
                    color={11}
                    columns={statsColumns}
                    data={{
                        notContacted: 4,
                        contacted: 5,
                        firstContact: 4,
                        secondContact: 1,
                        pending: 3,
                    }}
                    expandableColumns={statsExpandableColumns}
                />
                <Drawer.Container>
                    <Drawer.FiltersDrawer
                        isDirty={isDirty}
                        isFiltering={isFiltering}
                        isOpen={isFiltersDrawerOpen}
                        onApply={this.onApplyFiltersDrawerClick}
                        onClear={this.onClearFiltersDrawerClick}
                        onClose={this.onFiltersToggle}
                        rows={[
                            {
                                header: 'Keywords',
                                items: [
                                    {
                                        multiSelect: {
                                            placeholder: 'Add Keyword',
                                            onChange: this.onKeywordsMultiSelectChange,
                                            options: [
                                                {
                                                    label: 'Foo',
                                                    value: 1,
                                                }, {
                                                    label: 'Bar',
                                                    value: 2,
                                                }, {
                                                    label: 'Baz',
                                                    value: 3,
                                                }, {
                                                    label: 'Qux',
                                                    value: 4,
                                                },
                                            ],
                                            value: dirtyFilters.multiSelectValue,
                                        },
                                    },
                                ],
                            }, {
                                header: 'Type',
                                items: [
                                    {
                                        checkbox: {
                                            checked: true,
                                            label: 'Sensitive',
                                            // eslint-disable-next-line no-console
                                            onChange: () => console.log('Sensitive Toggled'),
                                        },
                                    }, {
                                        toggle: {
                                            checked: true,
                                            label: 'Pinned',
                                            labelIconColor: 'highlight',
                                            labelIconType: 'pin',
                                            // eslint-disable-next-line no-console
                                            onChange: () => console.log('Pinned Toggled'),
                                        },
                                    },
                                ],
                            }, {
                                header: 'Sort',
                                items: [
                                    {
                                        dropdown: {
                                            onChange: this.onSortDropdownChange,
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
                                            value: dirtyFilters.sort,
                                        },
                                    },
                                ],
                            }, {
                                header: 'Filters',
                                items: [
                                    {
                                        nestedToggles: {
                                            label: 'Foo Filters',
                                            onChange: this.onNestedTogglesFooChange,
                                            options: [
                                                {
                                                    label: 'Foo',
                                                    value: 1,
                                                }, {
                                                    label: 'Bar',
                                                    value: 2,
                                                }, {
                                                    label: 'Baz',
                                                    value: 3,
                                                }, {
                                                    label: 'Qux',
                                                    value: 4,
                                                },
                                            ],
                                            value: dirtyFilters.nestedTogglesFooValue,
                                        },
                                    }, {
                                        nestedToggles: {
                                            clearable: false,
                                            label: 'Bar Filters',
                                            onChange: this.onNestedTogglesBarChange,
                                            options: [
                                                {
                                                    label: 'Bar',
                                                    value: 1,
                                                }, {
                                                    label: 'Baz',
                                                    value: 2,
                                                }, {
                                                    label: 'Qux',
                                                    value: 3,
                                                },
                                            ],
                                            singleSelection: true,
                                            value: dirtyFilters.nestedTogglesBarValue,
                                        },
                                    },
                                ],
                            },
                        ]}
                    />
                    <Drawer.FiltersRail
                        isOpen={isFiltersDrawerOpen}
                        filterOptions={{
                            isDirty: isDirtyRailsFilter,
                            onClear: this.onClearFiltersRailClick,
                            onApply: this.onApplyFiltersRailClick,
                        }}
                    >
                        <Grid>
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
                                    onChange={this.onColorSelectChange}
                                    searchable
                                    underline
                                    value={dirtyFiltersForRails.selectedColor}
                                />
                            </Grid.Column>
                        </Grid>
                    </Drawer.FiltersRail>
                    <Drawer.Content
                        isFiltersRailOpen={isFiltersDrawerOpen}
                    >
                        <Typography
                            variant="body2"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi eu ornare sapien. Praesent ac dui
                            maximus, cursus eros eu, malesuada tortor.
                            Praesent vulputate molestie leo, eu sollicitudin nisl
                            efficitur sed. Etiam vitae tortor neque.
                            Nullam blandit vestibulum mauris, in tristique velit
                            pretium eu. Nullam ut malesuada ligula. Sed sit amet eros ligula.
                            Cras purus elit, dictum sit amet
                            orci ut, dapibus pulvinar ligula. Vivamus ac sollicitudin orci.
                            Class aptent taciti sociosqu ad.
                        </Typography>
                    </Drawer.Content>
                </Drawer.Container>
            </Drawer>
        );
    }
}

DrawerDemo.propTypes = propTypes;
DrawerDemo.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    const { breakpoint: { isMobile } } = state;

    return {
        isMobile,
    };
};

export default connect(mapStateToProps)(
    withStyles(
        styles,
        {
            withTheme: true,
        },
    )(DrawerDemo),
);
