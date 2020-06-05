import { PersonPanel } from 'react-cm-ui';
import React from 'react';
import { personPayloadDude } from './personPanelConstants';

function PersonPanelSimpleExample() {
    let recordType;

    if (personPayloadDude.isChild) {
        recordType = 'child';
    } else if (personPayloadDude.isStudent) {
        recordType = 'student';
    } else {
        recordType = 'adult';
    }

    console.log('personId', personPayloadDude.id);
    console.log('firstName', personPayloadDude.firstName);

    return (
        <PersonPanel>
            <PersonPanel.Summary
                data={{
                    avatar: personPayloadDude.profilePictureUrl,
                    birthdate: personPayloadDude.birthDate,
                    campus: personPayloadDude.churchEntityName,
                    emails: personPayloadDude.emails,
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
                    noteCount: personPayloadDude.noteCount,
                    personId: personPayloadDude.id,
                    phones: personPayloadDude.phones,
                    preferredMethod: personPayloadDude.contactPreferences.preferredMethod,
                    prefix: personPayloadDude.prefix,
                    recordType,
                    suffix: personPayloadDude.suffix,
                }}
                showAdditionalDetails
            />

            <PersonPanel.Details />
        </PersonPanel>
    );
}

export default PersonPanelSimpleExample;
