import {
    PersonContactInfo,
} from 'react-cm-ui';
import React from 'react';

function ExamplePersonContactInfo() {
    return (
        <PersonContactInfo
            id="block_name--element_name"
            email="myemail@domain.com"
            emergencyContactEmail="emergencyMail@mail.com"
            emergencyContactPhone="9496098002"
            emergencyContactRelationshipName="Wife"
            isDoNotContact={false}
            isDoNotEmail={false}
            isDoNotMail={false}
            isDoNotPhone={false}
            isDoNotText={false}
            phone="my phone"
            preferredMethod="email"
            recordType="adult"
        />
    );
}

export default ExamplePersonContactInfo;
