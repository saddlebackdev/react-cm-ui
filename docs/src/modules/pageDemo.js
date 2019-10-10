import {
    Dropdown,
    Header,
    Icon,
    Page,
    TitleBar,
} from 'react-cm-ui';
import _ from 'lodash';
import { backgroundColorAlert, backgroundColorSuccess } from 'shared/styles/colors.scss';
import { connect } from 'react-redux'; // eslint-disable-line import/no-extraneous-dependencies
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';

const nop = () => {};

class PageDemo extends React.PureComponent {
    constructor() {
        super();

        this.defaultFilters = {
            multiSelectValue: [],
            nestedTogglesBarValue: [],
            nestedTogglesFooValue: [],
            searchValue: '',
            sort: {
                label: 'Name (Ascending)',
                value: 'Name (Ascending)',
            },
        };

        this.state = {
            appliedFilters: _.cloneDeep(this.defaultFilters),
            dirtyFilters: _.cloneDeep(this.defaultFilters),
            isFiltersDrawerOpen: false,
            isFetching: true,
            viewType: 'table',
        };

        this.onApplyFiltersDrawerClick = this.onApplyFiltersDrawerClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
        this.onClearFiltersDrawerClick = this.onClearFiltersDrawerClick.bind(this);
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

    componentDidMount() {
        setTimeout(() => {
            this.setState((prevState) => ({
                isFetching: !prevState.isFetching,
            }));
        }, 3500);
    }

    onApplyFiltersDrawerClick() {
        this.setState((prevState) => ({
            appliedFilters: { ...prevState.dirtyFilters },
            isFiltersDrawerOpen: false,
        }));
    }

    onBackClick() { // eslint-disable-line class-methods-use-this
        console.log('Mobile Back button clicked!'); // eslint-disable-line no-console
    }

    onClearFiltersDrawerClick() {
        this.setState({
            dirtyFilters: { ...this.defaultFilters },
        });
    }

    onFiltersToggle() {
        this.setState((prevState) => ({
            isFiltersDrawerOpen: !prevState.isFiltersDrawerOpen,
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

    onSearchKeyDown(event) { // eslint-disable-line class-methods-use-this,no-unused-vars
        // console.log('Search onKeyDown.  event:', event); // eslint-disable-line no-console
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
        const { isMobile } = this.props;
        const {
            appliedFilters,
            dirtyFilters,
            isFiltersDrawerOpen,
            isFetching,
            searchValue,
            viewType,
        } = this.state;
        const isDirty = !_.isEqual(appliedFilters, dirtyFilters);
        const isFiltering = !_.isEqual(this.defaultFilters, appliedFilters);
        const actionBarIconFilter = {
            selected: isFiltersDrawerOpen,
            isFiltering,
            onClick: this.onFiltersToggle,
        };
        const actionBarSearch = {
            onClearClick: this.onSearchClear,
            onChange: this.onSearchChange,
            onKeyDown: this.onSearchKeyDown,
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
                    onClick: nop,
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
                                        iconBackgroundColor: backgroundColorSuccess,
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
                                                disabled: true,
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
                                        disabled: true,
                                        iconType: 'comment-lines',
                                        label: 'SMS',
                                        onClick: () => { console.log('SMS was clicked!'); /* eslint-disable-line no-console */ },
                                    }, {
                                        iconType: 'times',
                                        label: 'Delete Stuff',
                                        iconBackgroundColor: backgroundColorAlert,
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

        const statsColumns = [
            {
                accessor: () => 'Super Cool Info Bar - Color: 11',
                fontSize: 'large',
                fontWeight: 'semibold',
                header: null,
                style: {
                    marginBottom: '11px',
                },
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
            }, {
                expandedButton: isMobile,
                expandedButtonId: 'page_demo--details_expanded_button_unique_id',
                header: null,
            },
        ];

        const statsExpandableColumns = [
            {
                accessor: null,
                header: null,
                width: '67px',
            }, {
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

        return (
            <React.Fragment>
                <div>
                    <div className="hidden-spacer" />

                    <TitleBar title="Page Components Demo" />
                </div>

                <Page
                    className="page_class_name"
                    isDataFetching={isFetching}
                >
                    <Page.ActionBar
                        columns={actionsBarColumns}
                    />

                    <Page.Container>
                        <Page.FiltersDrawer
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
                                                value: dirtyFilters.nestedTogglesBarValue,
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />

                        <Page.FiltersRail
                            isOpen={isFiltersDrawerOpen}
                            onClose={this.onFiltersToggle}
                        >
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
                        </Page.FiltersRail>

                        <Page.Content
                            className="page-content-class-name"
                            isFiltersRailOpen={isFiltersDrawerOpen}
                        >
                            <Page.Details
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
                                showExpandableColumns={!isMobile}
                            />

                            {!isMobile && viewType === 'table' ? (
                                <Page.Table
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
                                    rowProps={() => ({
                                        onClick: this.onTableRowClick,
                                    })}
                                />
                            ) : (
                                <Page.Grid
                                    cardProps={() => ({
                                        onClick: this.onCardClick,
                                    })}
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
                                            accessor: (d) => moment.unix(d.createdOn).utc().format('L'),
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
                            )}
                        </Page.Content>
                    </Page.Container>
                </Page>
            </React.Fragment>
        );
    }
}

PageDemo.propTypes = {
    isMobile: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    const { breakpoint: { isMobile } } = state;

    return {
        isMobile,
    };
};

export default connect(mapStateToProps)(PageDemo);
