import {
    AppBar,
    Dropdown,
    Header,
    Icon,
    Page,
    Radio,
    Typography,
} from 'react-cm-ui';
import _ from 'lodash';
import { connect } from 'react-redux'; // eslint-disable-line import/no-extraneous-dependencies
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import withStyles from 'react-cm-ui/styles/withStyles';
import React from 'react';
import {
    backgroundColorAlert,
    backgroundColorSuccess,
} from 'react-cm-ui/styles/colorExports';
import DemoFiltersRail from './demoFiltersRail';

const propTypes = {
    classes: PropTypes.shape({
        dataGroupsContainer: PropTypes.string,
    }),
    isMobile: PropTypes.bool.isRequired,
};

const defaultProps = {
    classes: null,
};

const nop = () => {};

const styles = (theme) => ({
    appBar: {
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 4,
        [theme.breakpoints.up('md')]: {
            left: theme.width.navigation.md.expanded,
        },
    },
    dataGroupsContainer: {
        margin: '0 -11px',
    },
});

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

    onBackClick() {
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

    onSearchKeyDown(event) { // eslint-disable-line no-unused-vars
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
        const {
            classes,
            isMobile,
        } = this.props;

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
                    expandedButtonId: 'page_demo--details_expanded_button_unique_id',
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

        /** ***************************************************************************** */

        const newProps = {
            personalData: {
                id: 204093,
                profilePictureUrl: null,
                profilePhotoUrl: null,
                churchEntityKnown: true,
                churchEntityId: 2,
                churchEntityName: 'San Clemente',
                firstName: 'Cameron',
                lastName: 'Brewer',
                prefix: 'Mr.',
                middleName: 'Cool',
                suffix: null,
                nickName: null,
                gender: 'm',
                maritalStatusId: 1,
                maritalStatus: 'Married',
                membershipStatusId: 2,
                membershipStatus: 'Member',
                disengagementReason: null,
                birthDate: 413251200,
                deceasedDate: null,
                allergies: null,
                gradeLevel: 'None',
                departmentId: null,
                departmentName: null,
                departmentChurchEntityId: null,
                departmentChurchEntityName: null,
                preferredServiceEventId: null,
                modifiedDate: 1571261666,
                isAdult: true,
                isChild: false,
                milestones: [],
                addresses: [{
                    address1: '1 Dodger Ln', address2: '', city: 'Los Angeles', region: 'California', regionCode: 'CA', postalCode: '91210', country: 'United States of America', countryAlpha2: 'US', countryAlpha3: 'USA', id: 32676, personId: 204093, title: '', isPrimary: true, isValidated: false, isBadContact: false,
                }, {
                    address1: '754 Dorothy Anna Dr', address2: null, city: 'Banning', region: 'Connecticut', regionCode: 'CT', postalCode: '92220', country: 'United States of America', countryAlpha2: 'US', countryAlpha3: 'USA', id: 32674, personId: 204093, title: '', isPrimary: false, isValidated: false, isBadContact: false,
                }],
                emails: [{
                    email: 'morethanfire@icloud.com', isPublic: false, id: 31580, personId: 204093, title: null, isPrimary: true, isValidated: false, isBadContact: false,
                }, {
                    email: 'test123@teswsakdflkasdf.com', isPublic: false, id: 31590, personId: 204093, title: null, isPrimary: false, isValidated: false, isBadContact: false,
                }],
                phones: [{
                    phoneTypeId: 2, phoneType: 'Work Phone', phoneNumber: '+16265900764', isPublic: false, displayPhoneNumber: '(626) 590-0764 ext. 123', countryCode: 'us', extension: '123', id: 57740, personId: 204093, title: null, isPrimary: true, isValidated: false, isBadContact: false,
                }, {
                    phoneTypeId: 2, phoneType: 'Work Phone', phoneNumber: '+16265900002', isPublic: true, displayPhoneNumber: '(626) 590-0002', countryCode: 'us', extension: '', id: 57723, personId: 204093, title: null, isPrimary: false, isValidated: false, isBadContact: false,
                }, {
                    phoneTypeId: 1, phoneType: 'Home Phone', phoneNumber: '+16265900764', isPublic: false, displayPhoneNumber: '(626) 590-0764', countryCode: 'us', extension: '', id: 57736, personId: 204093, title: null, isPrimary: false, isValidated: false, isBadContact: false,
                }, {
                    phoneTypeId: 3, phoneType: 'Cell Phone', phoneNumber: '+16265900763', isPublic: false, displayPhoneNumber: '(626) 590-0763', countryCode: 'us', extension: '', id: 57739, personId: 204093, title: null, isPrimary: false, isValidated: false, isBadContact: false,
                }],
                occupations: [{
                    id: 105, personId: 204093, typeId: 1, type: 'Full Time', categoryId: 18, category: 'Other', company: 'Saddleback Church', title: 'Web Developer', isPrimary: false, isStaff: false, departmentId: null, departmentName: null, departmentChurchEntityId: null, departmentChurchEntityName: null,
                }, {
                    id: 108, personId: 204093, typeId: 2, type: 'Part Time', categoryId: 18, category: 'Other', company: 'Free The People', title: 'Stuff And Things', isPrimary: true, isStaff: false, departmentId: null, departmentName: null, departmentChurchEntityId: null, departmentChurchEntityName: null,
                }],
                contactPreferences: {
                    id: 42, personId: 204093, preferredMethod: 'text-message', doNotMail: true, doNotPhone: true, doNotText: false, doNotEmail: false, doNotContact: false,
                },
                preferredService: null,
                firstContact: null,
            },
        };

        const {
            personalData: {
                addresses,
                birthDate,
                churchEntityName,
                contactPreferences,
                deceasedDate,
                emails,
                occupations,
                phones,
                preferredService,
                gender,
                prefix,
                firstName,
                lastName,
                nickName,
                suffix,
                maritalStatus,
            },
        } = newProps;

        let genderText;
        let personPreferredContactMethodText;
        const personContactInfo = _.find(phones, 'isPrimary');
        const personEmailInfo = _.find(emails, 'isPrimary');
        const personAddressInfo = _.find(addresses, 'isPrimary');
        const personOccupationInfo = _.find(occupations, 'isPrimary');

        switch (contactPreferences.preferredMethod) {
            case 'email':
                personPreferredContactMethodText = 'Email';

                break;
            case 'phone':
                personPreferredContactMethodText = 'Phone';

                break;
            case 'text-message':
                personPreferredContactMethodText = 'Text';

                break;
            default:
                personPreferredContactMethodText = 'No Contact Preference';

                break;
        }

        switch (gender) {
            case 'f':
                genderText = 'Female';

                break;
            case 'm':
                genderText = 'Male';

                break;

            default:
                genderText = '';
        }

        let mainData = {
            birthday: birthDate ? moment.unix(birthDate).utc().format('MM/DD/YYYY') : 'N/A',
            cell: personContactInfo && personContactInfo.displayPhoneNumber ? personContactInfo.displayPhoneNumber : 'N/A',
            deceasedDate: deceasedDate ? moment.unix(deceasedDate).utc().format('MM/DD/YYYY') : 'N/A',
            email: personEmailInfo && personEmailInfo.email ? personEmailInfo.email : 'N/A',
            homeCampus: churchEntityName,
            preferredMethod: personPreferredContactMethodText,
            preferredService: preferredService && preferredService.name ? preferredService.name : 'N/A',
            addresses: personAddressInfo,
            placeOfEmployment: personOccupationInfo && personOccupationInfo.company ? personOccupationInfo.company : 'N/A',
            occupationCategory: personOccupationInfo && personOccupationInfo.category ? personOccupationInfo.category : 'N/A',
            occupationTitle: personOccupationInfo && personOccupationInfo.title ? personOccupationInfo.title : 'N/A',
            occupationType: personOccupationInfo && personOccupationInfo.type ? personOccupationInfo.type : 'N/A',
            isOccupationPrimary: personOccupationInfo && personOccupationInfo.isPrimary ? 'Yes' : 'No',
            isStaff: personOccupationInfo && personOccupationInfo.isStaff ? 'Yes' : 'No',
            prefix: prefix || '',
            firstName: firstName || '',
            lastName: lastName || '',
            nickName: nickName || '',
            suffix: suffix || '',
            gender: genderText,
            maritalStatus: maritalStatus || '',
        };

        const mainCoulumn = [];

        const personalColumnInfo = {
            isExpandable: true,
            header: '1 Personal',
            rows: [
                {
                    accessor: 'birthday',
                    fieldName: 'Birthday',
                }, {
                    accessor: 'homeCampus',
                    fieldName: 'Home Campus',
                }, {
                    accessor: 'preferredService',
                    fieldName: 'Preferred Service',
                }, {
                    accessor: 'deceasedDate',
                    fieldName: 'Deceased',
                },
            ],
            expandableSections: [
                {
                    header: 'Basic',
                    rows: [
                        {
                            accessor: 'prefix',
                            fieldName: 'Title',
                            iconType: 'user',
                            iconColor: 'alert',
                        },
                        {
                            accessor: 'firstName',
                            fieldName: 'First Name',
                        },
                        {
                            accessor: 'lastName',
                            fieldName: 'Last Name',
                        },
                        {
                            accessor: 'nickName',
                            fieldName: 'Nick Name',
                        },
                        {
                            accessor: 'suffix',
                            fieldName: 'Suffix',
                        },
                        {
                            accessor: 'gender',
                            fieldName: 'Gender',
                            iconType: 'gender',
                            iconColor: 'alert',
                        },
                        {
                            accessor: 'maritalStatus',
                            fieldName: 'Marital Status',
                            iconType: 'award',
                            iconColor: 'alert',
                        },
                        {
                            accessor: 'birthday',
                            fieldName: 'BirthDay',
                            iconType: 'birthday-cake',
                            iconColor: 'alert',
                        },
                    ],
                }, {
                    header: 'Misc',
                    rows: [
                        {
                            accessor: 'homeCampus',
                            fieldName: 'Home Campus',
                            iconType: 'church',
                            iconColor: 'warning',
                        },
                        {
                            accessor: 'preferredService',
                            fieldName: 'Preferred Service',
                            iconType: 'notes',
                            iconColor: 'warning',
                        },
                    ],
                },
            ],
        };

        mainCoulumn.push(personalColumnInfo);

        let personPhonesExpandableRows;
        if (!_.isEmpty(phones)) {
            personPhonesExpandableRows = _.map(phones, (item) => (
                {
                    accessor: `phone-${item.id}`,
                    fieldName: item.phoneType,
                    iconType: item.phoneTypeId === 1 ? 'phone-home' : (item.phoneTypeId === 2 ? 'phone-work' : 'phone-cell'),
                    iconColor: 'primary',
                }
            ));

            _.map(phones, (item) => {
                const personPhoneExpandableData = {
                    [`phone-${item.id}`]: item && item.displayPhoneNumber ? item.displayPhoneNumber : 'N/A',
                };
                mainData = {
                    ...mainData,
                    ...personPhoneExpandableData,
                };
            });
        }

        let personEmailsExpandableRows;
        if (!_.isEmpty(emails)) {
            personEmailsExpandableRows = _.map(emails, (item) => (
                {
                    accessor: `email-${item.id}`,
                    fieldName: item.isPrimary ? 'Primary' : 'Additional',
                    iconType: 'email',
                    iconColor: 'warning',
                }
            ));

            _.map(emails, (item) => {
                const personEmailExpandableData = {
                    [`email-${item.id}`]: item && item.email ? item.email : 'N/A',
                };
                mainData = {
                    ...mainData,
                    ...personEmailExpandableData,
                };
            });
        }

        let personAddressesExpandableRows;
        if (!_.isEmpty(addresses)) {
            personAddressesExpandableRows = _.map(addresses, (item) => (
                {
                    accessor: (d) => {
                        const addressInfo = d[`address-${item.id}`];
                        return (
                            <p className="no-margin-top person-record-address">
                                <span>{addressInfo.address1}</span>
                                <br />
                                {addressInfo.address2 && (
                                    <span>{addressInfo.address2}</span>
                                )}
                                <span>{`${addressInfo.city}, ${addressInfo.countryAlpha2 === 'US' ? addressInfo.regionCode : addressInfo.region} ${addressInfo.postalCode || ''}`}</span>
                                <br />
                                <span>{addressInfo.country}</span>
                            </p>
                        );
                    },
                    fieldName: item.isPrimary ? 'Primary' : 'Additional',
                    iconType: 'map-marker',
                    iconColor: 'warning',
                }
            ));

            _.map(addresses, (item) => {
                const personAddressExpandableData = {
                    [`address-${item.id}`]: item,
                };
                mainData = {
                    ...mainData,
                    ...personAddressExpandableData,
                };
            });
        }

        const contactColumnInfo = {
            header: '2 Contact',
            isExpandable: true,
            rows: [
                {
                    accessor: 'cell',
                    fieldName: 'Cell',
                }, {
                    accessor: 'email',
                    fieldName: 'Email',
                }, {
                    accessor: 'preferredMethod',
                    fieldName: 'Preferred Method',
                }, {
                    accessor: (d) => (
                        d.addresses ? (
                            <p className="no-margin-top person-record-address">
                                <span>{d.addresses.address1}</span>
                                <br />
                                {d.addresses.address2 && (
                                    <span>{d.addresses.address2}</span>
                                )}
                                <span>{`${d.addresses.city}, ${d.addresses.countryAlpha2 === 'US' ? d.addresses.regionCode : d.addresses.region} ${d.addresses.postalCode || ''}`}</span>
                                <br />
                                <span>{d.addresses.country}</span>
                            </p>
                        ) : 'N/A'
                    ),
                    fieldName: 'Address',
                },
            ],
            expandableSections: [
                {
                    header: 'Phone',
                    rows: [...personPhonesExpandableRows],
                },
                {
                    header: 'Email',
                    rows: [...personEmailsExpandableRows],
                },
                {
                    header: 'Addresses',
                    rows: [...personAddressesExpandableRows],
                },
            ],
        };
        mainCoulumn.push(contactColumnInfo);

        if (!_.isEmpty(personOccupationInfo)) {
            let occupationsExpandableSection;

            if (!_.isEmpty(occupations)) {
                occupationsExpandableSection = _.map(occupations, (item) => (
                    {
                        header: item.type,
                        rows: [
                            {
                                accessor: `placeOfEmployment-${item.id}`,
                                fieldName: 'Place of Employment',
                                iconType: 'briefcase',
                                iconColor: 'warning',
                            }, {
                                accessor: `occupationCategory-${item.id}`,
                                fieldName: 'Industry',
                            }, {
                                accessor: `occupationTitle-${item.id}`,
                                fieldName: 'Job Title',
                            }, {
                                accessor: `occupationType-${item.id}`,
                                fieldName: 'Type',
                            }, {
                                accessor: `isOccupationPrimary-${item.id}`,
                                fieldName: 'Primary',
                            }, {
                                accessor: `isStaff-${item.id}`,
                                fieldName: 'Staff',
                            },
                        ],
                    }
                ));

                _.map(occupations, (item) => {
                    const occupationExpandableData = {
                        [`placeOfEmployment-${item.id}`]: item && item.company ? item.company : 'N/A',
                        [`occupationCategory-${item.id}`]: item && item.category ? item.category : 'N/A',
                        [`occupationTitle-${item.id}`]: item && item.title ? item.title : 'N/A',
                        [`occupationType-${item.id}`]: item && item.type ? item.type : 'N/A',
                        [`isOccupationPrimary-${item.id}`]: item && item.isPrimary ? 'Yes' : 'No',
                        [`isStaff-${item.id}`]: item && item.isStaff ? 'Yes' : 'No',
                    };
                    mainData = {
                        ...mainData,
                        ...occupationExpandableData,
                    };
                });
            }

            const occupationColumnInfo = {
                header: '3 Occupation',
                isExpandable: true,
                rows: [
                    {
                        accessor: 'placeOfEmployment',
                        fieldName: 'Place of Employment',
                    }, {
                        accessor: 'occupationCategory',
                        fieldName: 'Industry',
                    }, {
                        accessor: 'occupationTitle',
                        fieldName: 'Job Title',
                    }, {
                        accessor: 'occupationType',
                        fieldName: 'Type',
                    },
                    {
                        accessor: 'isOccupationPrimary',
                        fieldName: 'Primary',
                    }, {
                        accessor: 'isStaff',
                        fieldName: 'Staff',
                    },
                ],
                expandableSections: occupationsExpandableSection,
            };

            mainCoulumn.push(occupationColumnInfo);

            const fooColumnInfo = {
                header: '4 Column',
                rows: [
                    {
                        accessor: 'placeOfEmployment',
                        fieldName: 'Place of Employment',
                    },
                ],
            };

            mainCoulumn.push(fooColumnInfo);

            const barColumnInfo = {
                header: '5 Column',
                rows: [
                    {
                        accessor: 'placeOfEmployment',
                        fieldName: 'Place of Employment',
                    },
                ],
            };

            mainCoulumn.push(barColumnInfo);
        }

        return (
            <React.Fragment>
                <div>
                    <div className="hidden-spacer" />

                    <AppBar
                        classes={{
                            root: classes.appBar,
                        }}
                    >
                        <Typography
                            variant="h3"
                        >
                            Page Components Demo
                        </Typography>
                    </AppBar>
                </div>

                <Page
                    backgroundColor="primary"
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

                        <DemoFiltersRail
                            isOpen={isFiltersDrawerOpen}
                        />

                        <Page.Content
                            className="page-content-class-name"
                            isFiltersRailOpen={isFiltersDrawerOpen}
                        >
                            <Page.DetailsWindow
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

                            {!isMobile && viewType === 'table' ? (
                                <Page.DataGrid
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
                                    stickyColumnWidth={50}
                                    stickyColumns={2}
                                />
                            ) : (
                                <Page.DataCards
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

                            {/* <div
                                className={classes.dataGroupsContainer}
                            >
                                <Page.DataGroups
                                    columns={mainCoulumn}
                                    data={mainData}
                                />
                            </div> */}
                        </Page.Content>
                    </Page.Container>
                </Page>
            </React.Fragment>
        );
    }
}

PageDemo.propTypes = propTypes;
PageDemo.defaultProps = defaultProps;

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
    )(PageDemo),
);
