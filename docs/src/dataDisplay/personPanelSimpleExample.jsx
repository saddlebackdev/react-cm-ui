import {
    map,
} from 'lodash';
import { PersonPanel } from 'react-cm-ui';
import React, { useEffect, useState } from 'react';
import { personPayloadDude } from './personPanelConstants';

function PersonPanelSimpleExample() {
    const [addresses, setAddresses] = useState([]);
    const [emails, setEmails] = useState([]);
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        const newAddresses = map(personPayloadDude.addresses, (address) => ({
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

        setAddresses(newAddresses);

        const newEmails = map(personPayloadDude.emails, (email) => ({
            isPrimary: email.isPrimary,
            value: email.email,
        }));

        setEmails(newEmails);

        const newPhones = map(personPayloadDude.phones, (phone) => {
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

        setPhones(newPhones);
    }, []);

    console.log('emails', emails);

    let recordType;

    if (personPayloadDude.isChild) {
        recordType = 'child';
    } else if (personPayloadDude.isStudent) {
        recordType = 'student';
    } else {
        recordType = 'adult';
    }

    return (
        <PersonPanel>
            <PersonPanel.Summary
                data={{
                    avatar: personPayloadDude.profilePictureUrl,
                    birthdate: personPayloadDude.birthDate,
                    campus: personPayloadDude.churchEntityName,
                    emails,
                    firstName: personPayloadDude.firstName,
                    gender: personPayloadDude.gender,
                    gradeLevel: personPayloadDude.gradeLevel,
                    isDoNotContact: personPayloadDude.contactPreferences.doNotContact,
                    isDoNotEmail: personPayloadDude.contactPreferences.doNotEmail,
                    isDoNotMail: personPayloadDude.contactPreferences.doNotMail,
                    isDoNotPhone: personPayloadDude.contactPreferences.doNotPhone,
                    isDoNotText: personPayloadDude.contactPreferences.doNotText,
                    lastName: personPayloadDude.lastName,
                    maritalStatus: personPayloadDude.maritalStatus,
                    nickName: personPayloadDude.nickName,
                    personId: personPayloadDude.id,
                    phones,
                    preferredMethod: personPayloadDude.contactPreferences.preferredMethod,
                    prefix: personPayloadDude.prefix,
                    recordType,
                    suffix: personPayloadDude.suffix,
                }}
            />

            <PersonPanel.Details
                data={{
                    addresses,
                    birthdate: personPayloadDude.birthDate,
                    campus: personPayloadDude.churchEntityName,
                    emails,
                    firstName: personPayloadDude.firstName,
                    gender: personPayloadDude.gender,
                    gradeLevel: personPayloadDude.gradeLevel,
                    isDoNotContact: personPayloadDude.contactPreferences.doNotContact,
                    isDoNotEmail: personPayloadDude.contactPreferences.doNotEmail,
                    isDoNotMail: personPayloadDude.contactPreferences.doNotMail,
                    isDoNotPhone: personPayloadDude.contactPreferences.doNotPhone,
                    isDoNotText: personPayloadDude.contactPreferences.doNotText,
                    lastName: personPayloadDude.lastName,
                    maritalStatus: personPayloadDude.maritalStatus,
                    nickName: personPayloadDude.nickName,
                    personId: personPayloadDude.id,
                    phones,
                    preferredMethod: personPayloadDude.contactPreferences.preferredMethod,
                    prefix: personPayloadDude.prefix,
                    recordType,
                    suffix: personPayloadDude.suffix,
                }}
            />
        </PersonPanel>
    );
}

export default PersonPanelSimpleExample;
