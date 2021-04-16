import {
    PersonCoreMilestones,
} from 'react-cm-ui';
import React from 'react';

function ExampleSolid() {
    const data = {
        acceptedChristDate: '1991-03-31T00:00:00',
        activeInMissionsDate: '1991-03-31T00:00:00',
        attendedClass101Date: '1991-03-31T00:00:00',
        attendedClass201Date: null,
        attendedClass301Date: null,
        attendedClass401Date: null,
        baptismDate: '1994-04-24T00:00:00',
        congregationDate: null,
        firstContactDate: null,
        firstMinistryJoinDate: '1991-03-31T00:00:00',
        firstSmallGroupJoinDate: '1991-03-31T00:00:00',
        gender: 'M',
        hasAcceptedChrist: true,
        hasSignedMaturityCovenant: false,
        hasSignedMembershipAgreement: true,
        hasSignedMinistryCovenant: false,
        hasSignedMissionCovenant: false,
        hasTakenClass101: true,
        hasTakenClass201: false,
        hasTakenClass301: false,
        hasTakenClass401: false,
        isActiveInMissions: true,
        isBaptised: true,
        isInMinistry: true,
        isInSmallGroup: true,
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
