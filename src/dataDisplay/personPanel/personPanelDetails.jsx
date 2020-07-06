import {
    filter,
    find,
    isEmpty,
    map,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
    BEM_DETAILS_NAME,
    GENDER_PROP_TYPE,
    RECORD_TYPE_PROP_TYPE,
} from './personPanelConstants';
import { UI_CLASS_NAME } from '../../global/constants';
import Address from '../address';
import Collapse from '../../utils/collapse';
import DataGroups from '../dataGroups';
import EmailLink from '../emailLink';
import makeStyles from '../../styles/makeStyles';
import PersonCoreMilestones from '../personCoreMilestones';
import PersonPanelDetailsActionButton from './personPanelDetailsActionButton';
import TelephoneLink from '../telephoneLink';
import Typography from '../typography';

const propTypes = {
    /**
     * The content of the PersonPanelDetails.
     */
    children: PropTypes.node,
    /**
     * Assign additional class names to PersonPanelDetails.
     */
    className: PropTypes.string,
    /**
     * Override or extend the styles applied to PersonPanelDetails.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    /**
     * The data that the PersonPanelDetails uses to build the UI.
     */
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
        congregationDate: PropTypes.oneOfType([
            MomentPropTypes.momentString,
            PropTypes.oneOf([null]),
        ]),
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
        firstContactDate: PropTypes.oneOfType([
            MomentPropTypes.momentString,
            PropTypes.oneOf([null]),
        ]),
        gender: GENDER_PROP_TYPE,
        gradeLevel: PropTypes.string,
        hasAcceptedChrist: PropTypes.bool,
        hasSignedMaturityCovenant: PropTypes.bool,
        hasSignedMembershipAgreement: PropTypes.bool,
        hasSignedMinistryCovenant: PropTypes.bool,
        hasSignedMissionCovenant: PropTypes.bool,
        hasTakenClass101: PropTypes.bool,
        hasTakenClass201: PropTypes.bool,
        hasTakenClass301: PropTypes.bool,
        hasTakenClass401: PropTypes.bool,
        isActiveInTrips: PropTypes.bool,
        isBaptised: PropTypes.bool,
        isDoNotContact: PropTypes.bool,
        isInMinistry: PropTypes.bool,
        isInSmallGroup: PropTypes.bool,
        phones: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.oneOf(['cell', 'home', 'work']),
            isPrimary: PropTypes.bool,
            value: PropTypes.string,
        })),
        preferredService: PropTypes.string,
        recordType: RECORD_TYPE_PROP_TYPE,
    }),
    /**
     * If `true`, expand PersonPanelDetails, otherwise collapse it.
     */
    isExpanded: PropTypes.bool,
    /**
     * Button `props` to setup the Select button.
     */
    selectButtonProps: PropTypes.shape({
        className: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func,
        onKeyDown: PropTypes.func,
        onPromptCancelClick: PropTypes.func,
        onPromptConfirmClick: PropTypes.func,
        prompt: PropTypes.bool,
        promptId: PropTypes.string,
    }),
    /**
     * Return other DataGroups within the PersonPanelDetails.
     */
    otherDataGroups: PropTypes.arrayOf(PropTypes.shape({})),
    /**
     * Button `props` to setup the View Record button.
     */
    viewRecordButtonProps: PropTypes.shape({
        className: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func,
        onKeyDown: PropTypes.func,
        onPromptCancelClick: PropTypes.func,
        onPromptConfirmClick: PropTypes.func,
        prompt: PropTypes.bool,
        promptId: PropTypes.string,
    }),
};

const defaultProps = {
    children: null,
    className: null,
    classes: null,
    data: {},
    isExpanded: false,
    selectButtonProps: {},
    otherDataGroups: [],
    viewRecordButtonProps: {},
};

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
            const primaryPreferredAddress = filter(emergencyContactAddresses, 'isPrimary')[0];

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
            const primaryPreferredEmail = filter(emergencyContactEmails, 'isPrimary')[0];

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
            const primaryPreferredPhone = filter(emergencyContactPhones, 'isPrimary')[0];

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
        shape: {
            borderRadius,
        },
    } = theme;

    return {
        actions: {
            marginTop: '33px',
        },
        dataGroups: {
            margin: '22px -22px -22px !important',
        },
        innerContainer: {
            padding: 22,
        },
        isExpanded: {},
        personCoreMilestones: {
            borderBottom: `1px solid ${palette.border.secondary}`,
            margin: '-22px -21px 11px',
            padding: '18px 21px',
        },
        root: {
            backgroundColor: palette.background.primary,
            borderRadius: `0 0 ${borderRadius.main}px ${borderRadius.main}px`,
            boxShadow: 'inset -1px -1px 0px 0px transparent, inset 1px 0px 0px 0px transparent',
            color: palette.text.primary,
            flexGrow: 1,
            padding: 0,
            transition: 'box-shadow 200ms ease-in-out',
            width: '100%',
            '&$isExpanded': {
                boxShadow: `inset -1px -1px 0px 0px ${palette.border.secondary}, inset 1px 0px 0px 0px ${palette.border.secondary}`,
            },
        },
    };
});

function PersonPanelDetails(props) {
    const [dataGroupsColumns, setDataGroupsColumns] = useState([]);

    const {
        children,
        className,
        data,
        isExpanded,
        otherDataGroups,
        selectButtonProps,
        viewRecordButtonProps,
    } = props;

    const {
        addresses,
        allergies,
        birthdate,
        campus,
        churchEntities,
        commonlyAttendedService,
        congregationDate,
        deceasedDate,
        emails,
        emergencyContactAddresses,
        emergencyContactEmails,
        emergencyContactName,
        emergencyContactPhones,
        emergencyContactPreferMethod,
        emergencyContactRelation,
        firstContactDate,
        gender,
        gradeLevel,
        hasAcceptedChrist,
        hasSignedMaturityCovenant,
        hasSignedMembershipAgreement,
        hasSignedMinistryCovenant,
        hasSignedMissionCovenant,
        hasTakenClass101,
        hasTakenClass201,
        hasTakenClass301,
        hasTakenClass401,
        isActiveInTrips,
        isBaptised,
        isDoNotContact,
        isInMinistry,
        isInSmallGroup,
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
            ...phoneDataGroup,
            ...emailDataGroup,
            ...addressDataGroup,
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
        className,
        [`${BEM_DETAILS_NAME}`],
        {
            [classes.isExpanded]: isExpanded,
        },
    );
    const shouldDataGroupsRender = !isEmpty(data) && !isEmpty(dataGroupsColumns);

    return (
        <div className={rootClasses}>
            <Collapse in={isExpanded}>
                <div className={classes.innerContainer}>
                    <PersonCoreMilestones
                        className={classes.personCoreMilestones}
                        congregationDate={congregationDate}
                        firstContactDate={firstContactDate}
                        gender={gender}
                        hasAcceptedChrist={hasAcceptedChrist}
                        hasSignedMaturityCovenant={hasSignedMaturityCovenant}
                        hasSignedMembershipAgreement={hasSignedMembershipAgreement}
                        hasSignedMinistryCovenant={hasSignedMinistryCovenant}
                        hasSignedMissionCovenant={hasSignedMissionCovenant}
                        hasTakenClass101={hasTakenClass101}
                        hasTakenClass201={hasTakenClass201}
                        hasTakenClass301={hasTakenClass301}
                        hasTakenClass401={hasTakenClass401}
                        iconSize={16}
                        isActiveInTrips={isActiveInTrips}
                        isBaptised={isBaptised}
                        isInMinistry={isInMinistry}
                        isInSmallGroup={isInSmallGroup}
                        recordType={recordType}
                    />

                    {shouldDataGroupsRender && (
                        <DataGroups
                            className={classes.dataGroups}
                            columns={dataGroupsColumns}
                            data={data}
                            moduleType="page"
                        />
                    )}

                    {children}

                    {(!isEmpty(selectButtonProps) || !isEmpty(viewRecordButtonProps)) && (
                        <div
                            className={classes.actions}
                        >
                            {!isEmpty(selectButtonProps) && (
                                <PersonPanelDetailsActionButton
                                    // eslint-disable-next-line react/jsx-props-no-spreading
                                    {...selectButtonProps}
                                    label="Select"
                                />
                            )}

                            {!isEmpty(viewRecordButtonProps) && (
                                <PersonPanelDetailsActionButton
                                    // eslint-disable-next-line react/jsx-props-no-spreading
                                    {...viewRecordButtonProps}
                                    label="View Record"
                                    outlined
                                />
                            )}
                        </div>
                    )}
                </div>
            </Collapse>
        </div>
    );
}

PersonPanelDetails.propTypes = propTypes;
PersonPanelDetails.defaultProps = defaultProps;

export default PersonPanelDetails;
