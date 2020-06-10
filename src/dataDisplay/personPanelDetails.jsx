import {
    find,
    isEmpty,
    map,
    remove,
} from 'lodash';
import ClassNames from 'classnames';
import makeStyles from 'react-cm-ui/styles/makeStyles'; // eslint-disable-line import/extensions
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BEM_BLOCK_NAME } from './personPanelConstants';
import { UI_CLASS_NAME } from '../global/constants';
import Address from '../utils/address';
import Collapse from '../utils/collapse';
import DataGroups from './dataGroups';
import EmailLink from '../utils/emailLink';
import TelephoneLink from '../utils/telephoneLink';
import Typography from './typography';

const propTypes = {
    children: PropTypes.node,
    data: PropTypes.shape({
        addresses: PropTypes.arrayOf(PropTypes.shape({
            address1: PropTypes.string,
            address2: PropTypes.string,
            city: PropTypes.string,
            country: PropTypes.string,
            countryAlpha2: PropTypes.string,
            isPrimary: PropTypes.bool,
            postalCode: PropTypes.string,
            region: PropTypes.string,
            regionCode: PropTypes.string,
        })),
        allergies: PropTypes.string,
        birthdate: PropTypes.number,
        campus: PropTypes.string,
        churchEntities: PropTypes.arrayOf(PropTypes.shape({})),
        churchEntityName: PropTypes.string,
        commonlyAttendedService: PropTypes.arrayOf(PropTypes.shape({})),
        deceasedDate: PropTypes.number,
        emails: PropTypes.arrayOf(PropTypes.shape({
            isPrimary: PropTypes.bool,
            value: PropTypes.string,
        })),
        emergencyContactAddresses: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            isPrimary: PropTypes.bool,
        })),
        emergencyContactEmails: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            isPrimary: PropTypes.bool,
        })),
        emergencyContactName: PropTypes.string,
        emergencyContactPhones: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            isPrimary: PropTypes.bool,
        })),
        emergencyContactPreferMethod: PropTypes.oneOf([
            'email',
            'letter',
            'none',
            'phone',
            'text',
        ]),
        emergencyContactRelation: PropTypes.string,
        gradeLevel: PropTypes.string,
        isChild: PropTypes.bool,
        isDoNotContact: PropTypes.bool,
        isStudent: PropTypes.bool,
        phones: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.oneOf(['cell', 'home', 'work']),
            isPrimary: PropTypes.bool,
            value: PropTypes.string,
        })),
        preferredService: PropTypes.string,
        recordType: PropTypes.oneOf(['adult', 'child', 'student']),
    }),
    isExpanded: PropTypes.bool,
    otherDataGroups: PropTypes.arrayOf(PropTypes.shape({})),
};

const defaultProps = {
    children: undefined,
    data: {
        addresses: [],
        allergies: null,
        birthdate: null,
        campus: null,
        churchEntities: null,
        churchEntityName: null,
        commonlyAttendedService: null,
        deceasedDate: null,
        emails: [],
        emergencyContactAddresses: null,
        emergencyContactEmails: null,
        emergencyContactName: null,
        emergencyContactPhones: null,
        emergencyContactPreferMethod: null,
        emergencyContactRelation: null,
        gradeLevel: null,
        isChild: false,
        isDoNotContact: false,
        isStudent: false,
        phones: [],
        preferredService: null,
        recordType: 'adult',
    },
    isExpanded: false,
    otherDataGroups: [],
};

const bemClass = `${BEM_BLOCK_NAME}--details`;

function setAddressDataGroup({
    addresses,
    isChild,
    isDoNotContact,
}) {
    if (!isEmpty(addresses) && !isDoNotContact && !isChild) {
        const addressRows = map(addresses, (address) => ({
            accessor: () => (
                <Address
                    address1={address.address1}
                    address2={address.address2}
                    city={address.city}
                    country={address.country}
                    countryAlpha2={address.countryAlpha2}
                    postalCode={address.postalCode}
                    region={address.region}
                    regionCode={address.regionCode}
                />
            ),
            fieldName: address.isPrimary ? 'Primary' : 'Address',
        }));

        return [
            {
                header: 'Address',
                rows: [
                    ...addressRows,
                ],
            },
        ];
    }

    return [];
}

function setEmailDataGroup({
    emails,
    isChild,
    isDoNotContact,
}) {
    if (!isEmpty(emails) && !isDoNotContact && !isChild) {
        const emailRows = map(emails, (email) => ({
            accessor: () => (
                <EmailLink
                    email={email.value}
                />
            ),
            fieldName: email.isPrimary ? 'Primary' : 'Email',
        }));

        return [
            {
                header: 'Email',
                rows: [
                    ...emailRows,
                ],
            },
        ];
    }

    return [];
}

function getPhoneFieldName(type, isPrimary) {
    let fieldName;

    switch (type) {
        case 'cell':
            fieldName = 'Cell';

            break;
        case 'home':
            fieldName = 'Home';

            break;
        case 'work':
            fieldName = 'Work';

            break;
        default:
    }

    if (isPrimary) {
        fieldName = 'Primary';
    }

    return fieldName;
}

function setPhoneDataGroup({
    isChild,
    isDoNotContact,
    phones,
}) {
    if (!isEmpty(phones) && !isDoNotContact && !isChild) {
        const phoneRows = map(phones, (phone) => ({
            accessor: () => (
                <TelephoneLink
                    number={phone.value}
                />
            ),
            fieldName: getPhoneFieldName(phone.type, phone.isPrimary),
        }));

        return [
            {
                header: 'Phone',
                rows: [
                    ...phoneRows,
                ],
            },
        ];
    }

    return [];
}

function setEmergencyContactDataGroup({
    emergencyContactAddresses,
    emergencyContactEmails,
    emergencyContactName,
    emergencyContactPhones,
    emergencyContactRelation,
    emergencyContactPreferMethod,
}) {
    let nameRow = [];

    if (emergencyContactName) {
        nameRow = [{
            accessor: 'emergencyContactName',
            fieldName: 'Name',
        }];
    }

    let relationRow = [];

    if (emergencyContactRelation) {
        relationRow = [{
            accessor: 'emergencyContactRelation',
            fieldName: 'Relation',
        }];
    }

    let preferMethodRow = [];
    let addressRows = [];

    if (emergencyContactAddresses) {
        if (emergencyContactPreferMethod === 'letter') {
            const primaryPreferredAddress = remove(emergencyContactAddresses, 'isPrimary')[0];

            preferMethodRow = [
                ...preferMethodRow,
                {
                    accessor: () => (
                        <EmailLink
                            email={primaryPreferredAddress.value}
                        />
                    ),
                    fieldName: `Prefers ${emergencyContactPreferMethod}`,
                },
            ];
        }

        addressRows = map(emergencyContactAddresses, (address) => ({
            accessor: () => (
                <Address
                    address1={address.address1}
                    address2={address.address2}
                    city={address.city}
                    country={address.country}
                    countryAlpha2={address.countryAlpha2}
                    postalCode={address.postalCode}
                    region={address.region}
                    regionCode={address.regionCode}
                />
            ),
            fieldName: 'Address',
        }));
    }

    let emailRows = [];

    if (emergencyContactEmails) {
        if (emergencyContactPreferMethod === 'email') {
            const primaryPreferredEmail = remove(emergencyContactEmails, 'isPrimary')[0];

            preferMethodRow = [
                ...preferMethodRow,
                {
                    accessor: () => (
                        <EmailLink
                            email={primaryPreferredEmail.value}
                        />
                    ),
                    fieldName: `Prefers ${emergencyContactPreferMethod}`,
                },
            ];
        }

        emailRows = map(emergencyContactEmails, (email) => ({
            accessor: () => (
                <EmailLink
                    email={email.value}
                />
            ),
            fieldName: 'Email',
        }));
    }

    let phoneRows = [];

    if (emergencyContactPhones && emergencyContactPreferMethod) {
        if (
            emergencyContactPreferMethod === 'text' ||
            emergencyContactPreferMethod === 'phone'
        ) {
            const primaryPreferredPhone = remove(emergencyContactPhones, 'isPrimary')[0];

            preferMethodRow = [
                ...preferMethodRow,
                {
                    accessor: () => (
                        <TelephoneLink
                            number={primaryPreferredPhone.value}
                        />
                    ),
                    fieldName: `Prefers ${emergencyContactPreferMethod}`,
                },
            ];
        }

        phoneRows = map(emergencyContactPhones, (phone) => ({
            accessor: () => (
                <TelephoneLink
                    number={phone.value}
                />
            ),
            fieldName: 'Phone',
        }));
    }

    if (
        !isEmpty(nameRow) &&
        !isEmpty(relationRow) &&
        (
            !isEmpty(addressRows) ||
            !isEmpty(emailRows) ||
            !isEmpty(phoneRows)
        )
    ) {
        return [
            {
                header: 'Emergency Contact',
                rows: [
                    ...nameRow,
                    ...relationRow,
                    ...preferMethodRow,
                    ...phoneRows,
                    ...emailRows,
                    ...addressRows,
                ],
            },
        ];
    }

    return [];
}

function setPersonalDataGroup({
    allergies,
    birthdate,
    campus,
    churchEntities,
    commonlyAttendedService,
    deceasedDate,
    gradeLevel,
    isChild,
    isStudent,
    preferredService,
}) {
    let birthdayRow = [];

    if (birthdate) {
        birthdayRow = [{
            accessor: () => (
                birthdate ? moment.unix(birthdate).utc().format('MM/DD/YYYY') : 'N/A'
            ),
            fieldName: 'Birthday',
        }];
    }

    let deceasedDateRow = [];

    if (deceasedDate) {
        deceasedDateRow = [{
            accessor: 'deceasedDate',
            fieldName: 'Deceased',
        }];
    }

    let commonlyAttendedServiceContractedRow = [];
    let personAllergiesContractedRow = [];
    let personGradeLevelRow = [];

    if (isStudent || isChild) {
        if (allergies) {
            personAllergiesContractedRow = [{
                accessor: 'allergies',
                fieldName: 'Allergies',
            }];
        }

        if (!isEmpty(commonlyAttendedService)) {
            const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            commonlyAttendedServiceContractedRow = {
                accessor: () => (
                    <Typography
                        variant="body1"
                    >
                        {map(commonlyAttendedService, (item) => {
                            if (
                                item &&
                                item.id &&
                                item.schedule &&
                                item.schedule.sequences &&
                                item.schedule.sequences.length > 0
                            ) {
                                const churchEntity = find(churchEntities, (c) => (
                                    c.id === item.churchEntityId
                                ));
                                const name = churchEntity && churchEntity.name;

                                return (
                                    <span
                                        key={`commonly_attended_service-${item.id}`}
                                    >
                                        {daysOfTheWeek[item.schedule.sequences[0].dayOfWeek]}
                                        {' '}
                                        {item.schedule.sequences[0].startTime ?
                                            moment(item.schedule.sequences[0].startTime, ['HH.mm:ss']).format('h:mm a') :
                                            null}
                                        ,
                                        {' '}
                                        {name}
                                    </span>
                                );
                            }

                            return null;
                        })}
                    </Typography>
                ),
                fieldName: 'Commonly Attended Services',
            };
        }

        if (gradeLevel) {
            personGradeLevelRow = [{
                accessor: 'gradeLevel',
                fieldName: 'Grade',
            }];
        }
    }

    let preferredServiceContractedRow = [];

    if (!isChild && preferredService) {
        preferredServiceContractedRow = [{
            accessor: 'preferredService',
            fieldName: 'Preferred Service',
        }];
    }

    let homeCampusRow = [];

    if (campus) {
        homeCampusRow = [{
            accessor: 'campus',
            fieldName: 'Home Campus',
        }];
    }

    if (
        !isEmpty(birthdayRow) ||
        !isEmpty(personGradeLevelRow) ||
        !isEmpty(homeCampusRow) ||
        !isEmpty(preferredServiceContractedRow) ||
        !isEmpty(commonlyAttendedServiceContractedRow) ||
        !isEmpty(deceasedDateRow) ||
        !isEmpty(personAllergiesContractedRow)
    ) {
        return [
            {
                header: 'Personal',
                rows: [
                    ...birthdayRow,
                    ...personGradeLevelRow,
                    ...homeCampusRow,
                    ...preferredServiceContractedRow,
                    ...commonlyAttendedServiceContractedRow,
                    ...deceasedDateRow,
                    ...personAllergiesContractedRow,
                ],
            },
        ];
    }

    return [];
}

const useStyles = makeStyles((theme) => {
    const {
        palette,
        shape,
    } = theme;

    return {
        root: {
            [`&.${bemClass}`]: {
                backgroundColor: palette.background.primary,
                color: palette.text.primary,
                padding: 0,
                '&-is_expanded': {
                    borderRadius: `0 0 ${shape.borderRadius}px ${shape.borderRadius}px`,
                    boxShadow: `inset -1px -1px 0px 0px ${palette.border.secondary}, inset 1px 0px 0px 0px ${palette.border.secondary}`,
                },
            },
        },
        dataGroups: {
            margin: '0 -22px !important',
        },
        innerContainer: {
            padding: 22,
        },
    };
});

function PersonPanelDetails(props) {
    const {
        children,
        data,
        isExpanded,
        otherDataGroups,
    } = props;
    const [dataGroupsColumns, setDataGroupsColumns] = useState([]);
    const {
        addresses,
        allergies,
        birthdate,
        campus,
        churchEntities,
        commonlyAttendedService,
        deceasedDate,
        emails,
        emergencyContactAddresses,
        emergencyContactEmails,
        emergencyContactName,
        emergencyContactPhones,
        emergencyContactPreferMethod,
        emergencyContactRelation,
        gradeLevel,
        isDoNotContact,
        phones,
        preferredService,
        recordType,
    } = data;
    const isChild = recordType === 'child';
    const isStudent = recordType === 'student';

    useEffect(() => {
        const personalDataGroup = setPersonalDataGroup({
            allergies,
            birthdate,
            campus,
            churchEntities,
            commonlyAttendedService,
            deceasedDate,
            gradeLevel,
            isChild,
            isStudent,
            preferredService,
        });
        const addressDataGroup = setAddressDataGroup({
            addresses,
            isChild,
            isDoNotContact,
        });
        const emailDataGroup = setEmailDataGroup({
            emails,
            isChild,
            isDoNotContact,
        });
        const phoneDataGroup = setPhoneDataGroup({
            isChild,
            isDoNotContact,
            phones,
        });
        const emergencyContactDataGroup = setEmergencyContactDataGroup({
            emergencyContactAddresses,
            emergencyContactEmails,
            emergencyContactName,
            emergencyContactPhones,
            emergencyContactPreferMethod,
            emergencyContactRelation,
        });
        const newDataGroupsColumns = [
            ...personalDataGroup,
            ...addressDataGroup,
            ...emailDataGroup,
            ...phoneDataGroup,
            ...emergencyContactDataGroup,
            ...otherDataGroups,
        ];

        setDataGroupsColumns(newDataGroupsColumns);
    }, [
        addresses,
        allergies,
        birthdate,
        campus,
        churchEntities,
        commonlyAttendedService,
        deceasedDate,
        emails,
        emergencyContactAddresses,
        emergencyContactEmails,
        emergencyContactName,
        emergencyContactPhones,
        emergencyContactPreferMethod,
        emergencyContactRelation,
        gradeLevel,
        isChild,
        isDoNotContact,
        isStudent,
        otherDataGroups,
        phones,
        preferredService,
    ]);

    const classes = useStyles(props);
    const rootClasses = ClassNames(
        classes.root,
        UI_CLASS_NAME,
        [`${bemClass}`],
        {
            [`${bemClass}-is_expanded`]: isExpanded,
        },
    );
    const shouldCoreMilestonesRender = true;
    const shouldDataGroupsRender = !isEmpty(data) && !isEmpty(dataGroupsColumns);

    return (
        <div className={rootClasses}>
            <Collapse in={isExpanded}>
                <div className={classes.innerContainer}>
                    {shouldCoreMilestonesRender && (
                        <div>Core Milestones</div>
                    )}

                    {shouldDataGroupsRender && (
                        <DataGroups
                            className={classes.dataGroups}
                            columns={dataGroupsColumns}
                            data={data}
                            moduleType="page"
                        />
                    )}

                    {children}
                </div>
            </Collapse>
        </div>
    );
}

PersonPanelDetails.propTypes = propTypes;
PersonPanelDetails.defaultProps = defaultProps;

export default PersonPanelDetails;
