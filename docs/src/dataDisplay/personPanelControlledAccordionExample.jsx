import {
    find,
    map,
} from 'lodash';
import {
    PersonPanel,
    PersonPanelDetails,
    PersonPanelSummary,
} from 'react-cm-ui';
import React, { useEffect, useState } from 'react';
import {
    PAYLOAD_PERSON,
} from './personPanelConstants';

function PersonPanelControlledAccordionExample() {
    const [personsData, setPersonsData] = useState([]);
    const [panelName, setPanelName] = useState(false);

    useEffect(() => {
        const mapedData = map(PAYLOAD_PERSON, (person) => {
            const addresses = map(person.addresses, (address) => ({
                address1: address.address1,
                address2: address.address2,
                city: address.city,
                country: address.country,
                countryAlpha2: address.countryAlpha2,
                isPrimary: address.isPrimary,
                postalCode: address.postalCode,
                region: address.region,
                regionCode: address.regionCode,
            }));
            const emails = map(person.emails, (email) => ({
                isPrimary: email.isPrimary,
                value: email.email,
            }));
            const phones = map(person.phones, (phone) => {
                let type;

                switch (phone.phoneTypeId) {
                    case 1:
                        type = 'home';

                        break;
                    case 2:
                        type = 'work';

                        break;
                    case 3:
                        type = 'cell';

                        break;
                    default:
                }

                return {
                    type,
                    isPrimary: phone.isPrimary,
                    value: phone.displayPhoneNumber,
                };
            });
            const primaryEmergencyContact = find(person.emergencyContacts, 'isPrimary');
            let recordType;

            if (person.isChild) {
                recordType = 'child';
            } else if (person.isStudent) {
                recordType = 'student';
            } else {
                recordType = 'adult';
            }

            return {
                personId: person.id,
                details: {
                    addresses,
                    allergies: person.allergies,
                    birthdate: person.birthDate,
                    campus: person.churchEntityName,
                    commonlyAttendedService: person.commonlyAttendedService,
                    emails,
                    emergencyContactAddresses:
                        primaryEmergencyContact && primaryEmergencyContact.addresses,
                    emergencyContactEmails:
                        primaryEmergencyContact && primaryEmergencyContact.emails,
                    emergencyContactName:
                        primaryEmergencyContact && `${primaryEmergencyContact.firstName} ${primaryEmergencyContact.lastName}`,
                    emergencyContactPhones:
                        primaryEmergencyContact && primaryEmergencyContact.phones,
                    emergencyContactPreferMethod:
                        primaryEmergencyContact && primaryEmergencyContact.preferredMethod,
                    emergencyContactRelation:
                        primaryEmergencyContact && primaryEmergencyContact.relationshipName,
                    gender: person.gender,
                    gradeLevel: person.gradeLevel,
                    isDoNotContact: person.contactPreferences.doNotContact,
                    phones,
                    preferredService: person.preferredService,
                    recordType,
                },
                summary: {
                    avatar: person.profilePictureUrl,
                    birthdate: person.birthDate,
                    campus: person.churchEntityName,
                    emails,
                    firstName: person.firstName,
                    gender: person.gender,
                    gradeLevel: person.gradeLevel,
                    isDoNotContact: person.contactPreferences.doNotContact,
                    isDoNotEmail: person.contactPreferences.doNotEmail,
                    isDoNotMail: person.contactPreferences.doNotMail,
                    isDoNotPhone: person.contactPreferences.doNotPhone,
                    isDoNotText: person.contactPreferences.doNotText,
                    lastName: person.lastName,
                    maritalStatus: person.maritalStatus,
                    nickName: person.nickName,
                    personId: person.id,
                    phones,
                    preferredMethod: person.contactPreferences.preferredMethod,
                    prefix: person.prefix,
                    recordType,
                    suffix: person.suffix,
                },
            };
        });

        setPersonsData([
            ...mapedData,
        ]);
    }, []);

    const onSelectYesClick = () => {
        // eslint-disable-next-line no-console
        console.log('Selected!');
    };

    const onViewRecordYesClick = () => {
        // eslint-disable-next-line no-console
        console.log('Routing!');
    };

    const onChange = (panel) => (event, isExpanded) => {
        setPanelName(isExpanded ? panel : false);
    };

    return (
        <div>
            {map(personsData, (person) => (
                <PersonPanel
                    isExpanded={panelName === `panel-${person.personId}`}
                    key={`panel-${person.personId}`}
                    onChange={onChange(`panel-${person.personId}`)}
                >
                    <PersonPanelSummary
                        data={person.summary}
                    />

                    <PersonPanelDetails
                        data={person.details}
                        selectButtonProps={{
                            id: `select_record_id-${person.personId}`,
                            prompt: true,
                            onYesClick: onSelectYesClick,
                        }}
                        viewRecordButtonProps={{
                            id: `view_record_id-${person.personId}`,
                            prompt: true,
                            onYesClick: onViewRecordYesClick,
                        }}
                    />
                </PersonPanel>
            ))}
        </div>
    );
}

export default PersonPanelControlledAccordionExample;
