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
import { PAYLOAD_PERSON } from './personPanelConstants';

function PersonPanelSimpleExample() {
    const [detailsData, setDetailsData] = useState({});
    const [summaryData, setSummaryData] = useState({});

    useEffect(() => {
        const payloadPersonDude = PAYLOAD_PERSON[0];
        const addresses = map(payloadPersonDude.addresses, (address) => ({
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
        const emails = map(payloadPersonDude.emails, (email) => ({
            isPrimary: email.isPrimary,
            value: email.email,
        }));
        const phones = map(payloadPersonDude.phones, (phone) => {
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
        const primaryEmergencyContact = find(payloadPersonDude.emergencyContacts, 'isPrimary');
        let recordType;

        if (payloadPersonDude.isChild) {
            recordType = 'child';
        } else if (payloadPersonDude.isStudent) {
            recordType = 'student';
        } else {
            recordType = 'adult';
        }

        setDetailsData({
            addresses,
            allergies: payloadPersonDude.allergies,
            birthdate: payloadPersonDude.birthDate,
            campus: payloadPersonDude.churchEntityName,
            commonlyAttendedService: payloadPersonDude.commonlyAttendedService,
            congregationDate: payloadPersonDude.congregationDate,
            emails,
            emergencyContactAddresses: primaryEmergencyContact.addresses,
            emergencyContactEmails: primaryEmergencyContact.emails,
            emergencyContactName: `${primaryEmergencyContact.firstName} ${primaryEmergencyContact.lastName}`,
            emergencyContactPhones: primaryEmergencyContact.phones,
            emergencyContactPreferMethod: primaryEmergencyContact.preferredMethod,
            emergencyContactRelation: primaryEmergencyContact.relationshipName,
            firstContactDate: payloadPersonDude.firstContactDate,
            gender: payloadPersonDude.gender,
            gradeLevel: payloadPersonDude.gradeLevel,
            hasAcceptedChrist: payloadPersonDude.hasAcceptedChrist,
            hasSignedMaturityCovenant: payloadPersonDude.hasSignedMaturityCovenant,
            hasSignedMembershipAgreement: payloadPersonDude.hasSignedMembershipAgreement,
            hasSignedMinistryCovenant: payloadPersonDude.hasSignedMinistryCovenant,
            hasSignedMissionCovenant: payloadPersonDude.hasSignedMissionCovenant,
            hasTakenClass101: payloadPersonDude.hasTakenClass101,
            hasTakenClass201: payloadPersonDude.hasTakenClass201,
            hasTakenClass301: payloadPersonDude.hasTakenClass301,
            hasTakenClass401: payloadPersonDude.hasTakenClass401,
            isActiveInTrips: payloadPersonDude.isActiveInTrips,
            isBaptised: payloadPersonDude.isBaptised,
            isDoNotContact: payloadPersonDude.contactPreferences.doNotContact,
            isInMinistry: payloadPersonDude.isInMinistry,
            isInSmallGroup: payloadPersonDude.isInSmallGroup,
            phones,
            preferredService: payloadPersonDude.preferredService,
            recordType,
        });

        setSummaryData({
            avatar: payloadPersonDude.profilePictureUrl,
            birthdate: payloadPersonDude.birthDate,
            campus: payloadPersonDude.churchEntityName,
            emails,
            firstName: payloadPersonDude.firstName,
            gender: payloadPersonDude.gender,
            gradeLevel: payloadPersonDude.gradeLevel,
            isDoNotContact: payloadPersonDude.contactPreferences.doNotContact,
            isDoNotEmail: payloadPersonDude.contactPreferences.doNotEmail,
            isDoNotMail: payloadPersonDude.contactPreferences.doNotMail,
            isDoNotPhone: payloadPersonDude.contactPreferences.doNotPhone,
            isDoNotText: payloadPersonDude.contactPreferences.doNotText,
            lastName: payloadPersonDude.lastName,
            maritalStatus: payloadPersonDude.maritalStatus,
            nickName: payloadPersonDude.nickName,
            personId: payloadPersonDude.id,
            phones,
            preferredMethod: payloadPersonDude.contactPreferences.preferredMethod,
            prefix: payloadPersonDude.prefix,
            recordType,
            suffix: payloadPersonDude.suffix,
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
            <PersonPanelSummary
                data={summaryData}
            />

            <PersonPanelDetails
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
