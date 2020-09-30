import {
    TitleBar,
    PersonCoreMilestones,
} from 'react-cm-ui';
import React from 'react';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';

const personMilestonesProps = { // TODO:: remove this
    backgroundTransparent: true,
    className: `core_milestones`,

    congregationDate: '2000-12-01T12:00:00', // coreMilestonesData.congregationDate, // -
    firstContactDate: '2001-12-01T12:00:00', // coreMilestonesData.firstContactDate, // -

    gender: 'm', // personData.gender, // 'm', does this work in UPPER CASE?
    hasAcceptedChrist: true, // coreMilestonesData.hasAcceptedChrist, // true, // -

    hasSignedMaturityCovenant: true, // coreMilestonesData.hasSignedMaturityCovenant, // true, // -
    hasSignedMembershipAgreement: true, // coreMilestonesData.hasSignedMembershipAgreement, // true, // -
    hasSignedMinistryCovenant: true, // coreMilestonesData.hasSignedMinistryCovenant, // true, // -n
    hasSignedMissionCovenant: true, // coreMilestonesData.hasSignedMissionCovenant, // true, // -

    hasTakenClass101: true, // coreMilestonesData.hasAttendedClass101, // true, // - hasAttendedClass101
    hasTakenClass201: true, // coreMilestonesData.hasAttendedClass201, // true, // - hasAttendedClass102
    hasTakenClass301: true, //coreMilestonesData.hasAttendedClass301, // true, // - hasAttendedClass103
    hasTakenClass401: true, //coreMilestonesData.hasAttendedClass401, // true, // - hasAttendedClass104

    iconColor: 'white',
    iconSize: 16, // isMobile ? 16 : 24,
    id: `core_milestones`,
    inverse: true,

    isActiveInMissions: true, //coreMilestonesData.isPEACE, // false,
    isBaptised: true, // coreMilestonesData.isBaptised, // true, // -
    isInMinistry: true, //coreMilestonesData.isInMinistry, // true, // -
    isInSmallGroup: true, // coreMilestonesData.isInSmallGroup, // true, // -
    
    isMobile: true,
    recordType: 'adult', // 'adult' || 'student' || child

    signedMembershipAgreementDate: '2001-10-10T12:00:00', // coreMilestonesData.signedMembershipAgreementDate,
    signedMaturityCovenantDate: '2001-10-10T12:00:00', // coreMilestonesData.signedMaturityCovenantDate,
    signedMinistryCovenantDate: '2001-10-10T12:00:00', // coreMilestonesData.signedMinistryCovenantDate,
    signedMissionCovenantDate: '2001-10-10T12:00:00', // coreMilestonesData.signedMissionCovenantDate,

    // new Dates
    acceptedChristDate: '2001-10-10T12:00:00',
    baptismDate: '2001-10-10T12:00:00',

    activeInSmallGroupsDate: '2001-10-10T12:00:00', // 'NOT EXISTENT',
    activeInMinistryDate: '2002-11-20T12:00:00', // 'NOT EXISTENT',
    activeInMissionsDate: '2003-12-30T12:00:00', // 'NOT EXISTENT',

    attendedClass101Date: '2001-10-10T12:00:00',
    attendedClass201Date: '2001-10-10T12:00:00',
    attendedClass301Date: '2001-10-10T12:00:00',
    attendedClass401Date: '2001-10-10T12:00:00',
};


function DocsPersonCoreMilestones() {
    return (
        <Main page="person_core_milestones">
            <TitleBar title="Person Core Milestones" />

            <Main.Content>
                <MarkdownContainer>
                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Coming soon.
                    </Heading>
                </MarkdownContainer>

                <div style={{
                    border: '1px solid red',
                    backgroundColor: 'green',
                }}>
                    <PersonCoreMilestones
                        {...personMilestonesProps}
                    />
                </div>
            </Main.Content>
        </Main>
    );
}

export default DocsPersonCoreMilestones;
