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
                    isDoNotContact: personPayloadDude.isDoNotContact,
                    isDoNotEmail: personPayloadDude.isDoNotEmail,
                    isDoNotMail: personPayloadDude.isDoNotMail,
                    isDoNotPhone: personPayloadDude.isDoNotPhone,
                    isDoNotText: personPayloadDude.isDoNotText,
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
            />

            <PersonPanel.Details />
        </PersonPanel>
    );
}

export default PersonPanelSimpleExample;
