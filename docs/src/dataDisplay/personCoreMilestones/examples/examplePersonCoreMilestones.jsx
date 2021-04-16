import {
    PersonCoreMilestones,
} from 'react-cm-ui';
import React from 'react';

function ExampleSolid() {
    const data = {
        acceptedChristDate: '1991-03-31T00:00:00',
        activeInMissionsDate: null,
        attendedClass101Date: null,
        attendedClass201Date: null,
        attendedClass301Date: null,
        attendedClass401Date: null,
        baptismDate: '1994-04-24T00:00:00',
        congregationDate: null,
        firstContactDate: null,
        firstMinistryJoinDate: null,
        firstSmallGroupJoinDate: null,
        gender: 'M',
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
        isBaptised: true,
        isInMinistry: false,
        isInSmallGroup: false,
        recordType: 'adult',
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

export default ExampleSolid;
