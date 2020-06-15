import {
    find,
    map,
} from 'lodash';
import { PersonPanel } from 'react-cm-ui';
import React, { useEffect, useState } from 'react';
import { personDudePayload } from './personPanelConstants';

function PersonPanelSimpleExample() {
    const [detailsData, setDetailsData] = useState({});
    const [summaryData, setSummaryData] = useState({});

    useEffect(() => {
        const addresses = map(personDudePayload.addresses, (address) => ({
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
        const emails = map(personDudePayload.emails, (email) => ({
            isPrimary: email.isPrimary,
            value: email.email,
        }));
        const phones = map(personDudePayload.phones, (phone) => {
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
        const primaryEmergencyContact = find(personDudePayload.emergencyContacts, 'isPrimary');
        let recordType;

        if (personDudePayload.isChild) {
            recordType = 'child';
        } else if (personDudePayload.isStudent) {
            recordType = 'student';
        } else {
            recordType = 'adult';
        }

        setDetailsData({
            addresses,
            allergies: personDudePayload.allergies,
            birthdate: personDudePayload.birthDate,
            campus: personDudePayload.churchEntityName,
            commonlyAttendedService: personDudePayload.commonlyAttendedService,
            emails,
            emergencyContactAddresses: primaryEmergencyContact.addresses,
            emergencyContactEmails: primaryEmergencyContact.emails,
            emergencyContactName: `${primaryEmergencyContact.firstName} ${primaryEmergencyContact.lastName}`,
            emergencyContactPhones: primaryEmergencyContact.phones,
            emergencyContactPreferMethod: primaryEmergencyContact.preferredMethod,
            emergencyContactRelation: primaryEmergencyContact.relationshipName,
            gender: personDudePayload.gender,
            gradeLevel: personDudePayload.gradeLevel,
            isDoNotContact: personDudePayload.contactPreferences.doNotContact,
            phones,
            preferredService: personDudePayload.preferredService,
            recordType,
        });

        setSummaryData({
            avatar: personDudePayload.profilePictureUrl,
            birthdate: personDudePayload.birthDate,
            campus: personDudePayload.churchEntityName,
            emails,
            firstName: personDudePayload.firstName,
            gender: personDudePayload.gender,
            gradeLevel: personDudePayload.gradeLevel,
            isDoNotContact: personDudePayload.contactPreferences.doNotContact,
            isDoNotEmail: personDudePayload.contactPreferences.doNotEmail,
            isDoNotMail: personDudePayload.contactPreferences.doNotMail,
            isDoNotPhone: personDudePayload.contactPreferences.doNotPhone,
            isDoNotText: personDudePayload.contactPreferences.doNotText,
            lastName: personDudePayload.lastName,
            maritalStatus: personDudePayload.maritalStatus,
            nickName: personDudePayload.nickName,
            personId: personDudePayload.id,
            phones,
            preferredMethod: personDudePayload.contactPreferences.preferredMethod,
            prefix: personDudePayload.prefix,
            recordType,
            suffix: personDudePayload.suffix,
        });
    }, []);

    const onSelectYesClick = () => {
        // eslint-disable-next-line no-console
        console.log('Selected!');
    };

    const onViewRecordYesClick = () => {
        // eslint-disable-next-line no-console
        console.log('Routing!');
    };

    return (
        <PersonPanel>
            <PersonPanel.Summary
                data={summaryData}
            />

            <PersonPanel.Details
                data={detailsData}
                selectButtonProps={{
                    id: 'the_dude_select_id',
                    prompt: true,
                    onYesClick: onSelectYesClick,
                }}
                viewRecordButtonProps={{
                    id: 'the_dude_view_record_id',
                    prompt: true,
                    onYesClick: onViewRecordYesClick,
                }}
            />
        </PersonPanel>
    );
}

export default PersonPanelSimpleExample;
