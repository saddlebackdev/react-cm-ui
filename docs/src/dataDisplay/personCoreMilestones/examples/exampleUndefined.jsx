import {
    PersonCoreMilestones,
} from 'react-cm-ui';
import React from 'react';

function ExampleUndefined() {
    const data = {
        acceptedChristDate: '1991-03-31T00:00:00',
        activeInMissionsDate: null,
        attendedClass101Date: null,
        attendedClass201Date: null,
        attendedClass301Date: null,
        attendedClass401Date: null,
        baptismDate: null,
        congregationDate: null,
        firstContactDate: null,
        firstMinistryJoinDate: null,
        firstSmallGroupJoinDate: null,
        gender: null,
        hasAcceptedChrist: true,
        hasSignedMaturityCovenant: false,
        hasSignedMembershipAgreement: false,
        hasSignedMinistryCovenant: false,
        hasSignedMissionCovenant: false,
        hasTakenClass101: false,
        hasTakenClass201: false,
        hasTakenClass301: false,
        hasTakenClass401: false,
        isActiveInMissions: false,
        isBaptised: false,
        isInMinistry: false,
        isInSmallGroup: false,
        recordType: null,
        signedMembershipAgreementDate: null,
        signedMaturityCovenantDate: null,
        signedMinistryCovenantDate: null,
        signedMissionCovenantDate: null,
    };

    return (
        <PersonCoreMilestones
            data={data}
        />
    );
}

export default ExampleUndefined;
