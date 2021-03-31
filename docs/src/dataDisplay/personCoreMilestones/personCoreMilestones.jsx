import {
    Header,
    PersonCoreMilestones,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
// import PersonCoreMilestones from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/personCoreMilestones/personCoreMilestones';
/* eslint-enable import/no-named-default, import/extensions */

const acceptedChristDate= null;
const activeInMissionsDate=  null;
const attendedClass101Date= null;
const attendedClass201Date= null;
const attendedClass301Date= null;
const attendedClass401Date= null;
const baptismDate= null;
const className= undefined;
const congregationDate= null;
const firstContactDate= null;
const firstMinistryJoinDate= null;
const firstSmallGroupJoinDate= null;
const gender= 'man';
const hasAcceptedChrist= false;
const hasSignedMaturityCovenant= false;
const hasSignedMembershipAgreement= false;
const hasSignedMinistryCovenant= false;
const hasSignedMissionCovenant= false;
const hasTakenClass101=false;
const hasTakenClass201= false;
const hasTakenClass301= false;
const hasTakenClass401= false;
const iconColor= null;
const iconSize= 16;
const id= null;
const inverse= false;
const isActiveInMissions= false;
const isBaptised= false;
const isInMinistry= false;
const isInSmallGroup= false;
const isMobile= false;
const parentConsumer= undefined;
const recordType= 'RECORD_TYPE_DEFAULT_PROP';
const removeAcceptedChristColumn= false;
const removeBaptismColumn= false;
const removeClassColumn= false;
const removeCongregationDateColumn= false;
const removeFirstContactDateColumn= false;
const removeInMinistryColumn= false;
const removeInTripsColumn= false;
const removeSmallGroupColumn= false;
const signedMembershipAgreementDate= null;
const signedMaturityCovenantDate= null;
const signedMinistryCovenantDate= null;
const signedMissionCovenantDate = null;

const milesStonesSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class TypeSample extends React.Component {    

    constructor(props) {
        super(props);        
    }
    
    const acceptedChristDate= null;
    const activeInMissionsDate=  null;
    const attendedClass101Date= null;
    const attendedClass201Date= null;
    const attendedClass301Date= null;
    const attendedClass401Date= null;
    const baptismDate= null;
    const className= undefined;
    const congregationDate= null;
    const firstContactDate= null;
    const firstMinistryJoinDate= null;
    const firstSmallGroupJoinDate= null;
    const gender= 'man';
    const hasAcceptedChrist= false;
    const hasSignedMaturityCovenant= false;
    const hasSignedMembershipAgreement= false;
    const hasSignedMinistryCovenant= false;
    const hasSignedMissionCovenant= false;
    const hasTakenClass101=false;
    const hasTakenClass201= false;
    const hasTakenClass301= false;
    const hasTakenClass401= false;
    const iconColor= null;
    const iconSize= 16;
    const id= null;
    const inverse= false;
    const isActiveInMissions= false;
    const isBaptised= false;
    const isInMinistry= false;
    const isInSmallGroup= false;
    const isMobile= false;
    const parentConsumer= undefined;
    const recordType= 'RECORD_TYPE_DEFAULT_PROP';
    const removeAcceptedChristColumn= false;
    const removeBaptismColumn= false;
    const removeClassColumn= false;
    const removeCongregationDateColumn= false;
    const removeFirstContactDateColumn= false;
    const removeInMinistryColumn= false;
    const removeInTripsColumn= false;
    const removeSmallGroupColumn= false;
    const signedMembershipAgreementDate= null;
    const signedMaturityCovenantDate= null;
    const signedMinistryCovenantDate= null;
    const signedMissionCovenantDate = null;

    render() {
        return (
            <div>
                <PersonCoreMilestones
                    acceptedChristDate={acceptedChristDate}
                    activeInMissionsDate={activeInMissionsDate}
                    attendedClass101Date={attendedClass101Date}
                    attendedClass201Date={attendedClass201Date}
                    attendedClass301Date={attendedClass301Date}
                    attendedClass401Date={attendedClass401Date}
                    baptismDate={baptismDate}
                    className={className}
                    congregationDate={congregationDate}
                    firstContactDate={firstContactDate}
                    firstMinistryJoinDate={firstMinistryJoinDate}
                    firstSmallGroupJoinDate={firstSmallGroupJoinDate}
                    gender={gender}
                    hasAcceptedChrist={hasAcceptedChrist}
                    hasSignedMaturityCovenant={ hasSignedMaturityCovenant}
                    hasSignedMembershipAgreement={ hasSignedMembershipAgreement}
                    hasSignedMinistryCovenant={ hasSignedMinistryCovenant}
                    hasSignedMissionCovenant={ hasSignedMissionCovenant}
                    hasTakenClass101 ={hasTakenClass101}
                    hasTakenClass201={ hasTakenClass201}
                    hasTakenClass301={ hasTakenClass301}
                    hasTakenClass401={ hasTakenClass401}
                    iconColor={ iconColor}
                    iconSize={ iconSize}
                    id={ id}
                    inverse={ inverse}
                    isActiveInMissions={ isActiveInMissions}
                    isBaptised={ isBaptised}
                    isInMinistry={ isInMinistry}
                    isInSmallGroup={ isInSmallGroup}
                    isMobile={ isMobile}
                    parentConsumer={ parentConsumer}
                    recordType={ recordType}
                    removeAcceptedChristColumn={ removeAcceptedChristColumn}
                    removeBaptismColumn={ removeBaptismColumn}
                    removeClassColumn={ removeClassColumn}
                    removeCongregationDateColumn={ removeCongregationDateColumn}
                    removeFirstContactDateColumn={ removeFirstContactDateColumn}
                    removeInMinistryColumn={ removeInMinistryColumn}
                    removeInTripsColumn={ removeInTripsColumn}
                    removeSmallGroupColumn={ removeSmallGroupColumn}
                    signedMembershipAgreementDate={ signedMembershipAgreementDate}
                    signedMaturityCovenantDate={ signedMaturityCovenantDate}
                    signedMinistryCovenantDate={ signedMinistryCovenantDate}
                    signedMissionCovenantDate={ signedMissionCovenantDate}
                />
            </div>
        );
    }
}`;

function DocsPersonCoreMilestones() {
    return (
        <Main page="person_core_milestones">
            <Main.Content>
                <MarkdownContainer>                    

                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Person Contact Milestones
                        <Header.Subheader>
                            Person Contact Milestones component.
                        </Header.Subheader>
                    </Header>
                </MarkdownContainer>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {milesStonesSample}
                </Highlighter>

                <PersonCoreMilestones
                    acceptedChristDate={acceptedChristDate}
                    activeInMissionsDate={activeInMissionsDate}
                    attendedClass101Date={attendedClass101Date}
                    attendedClass201Date={attendedClass201Date}
                    attendedClass301Date={attendedClass301Date}
                    attendedClass401Date={attendedClass401Date}
                    baptismDate={baptismDate}
                    className={className}
                    congregationDate={congregationDate}
                    firstContactDate={firstContactDate}
                    firstMinistryJoinDate={firstMinistryJoinDate}
                    firstSmallGroupJoinDate={firstSmallGroupJoinDate}
                    gender={gender}
                    hasAcceptedChrist={hasAcceptedChrist}
                    hasSignedMaturityCovenant={ hasSignedMaturityCovenant}
                    hasSignedMembershipAgreement={ hasSignedMembershipAgreement}
                    hasSignedMinistryCovenant={ hasSignedMinistryCovenant}
                    hasSignedMissionCovenant={ hasSignedMissionCovenant}
                    hasTakenClass101 ={hasTakenClass101}
                    hasTakenClass201={ hasTakenClass201}
                    hasTakenClass301={ hasTakenClass301}
                    hasTakenClass401={ hasTakenClass401}
                    iconColor={ iconColor}
                    iconSize={ iconSize}
                    id={ id}
                    inverse={ inverse}
                    isActiveInMissions={ isActiveInMissions}
                    isBaptised={ isBaptised}
                    isInMinistry={ isInMinistry}
                    isInSmallGroup={ isInSmallGroup}
                    isMobile={ isMobile}
                    parentConsumer={ parentConsumer}
                    recordType={ recordType}
                    removeAcceptedChristColumn={ removeAcceptedChristColumn}
                    removeBaptismColumn={ removeBaptismColumn}
                    removeClassColumn={ removeClassColumn}
                    removeCongregationDateColumn={ removeCongregationDateColumn}
                    removeFirstContactDateColumn={ removeFirstContactDateColumn}
                    removeInMinistryColumn={ removeInMinistryColumn}
                    removeInTripsColumn={ removeInTripsColumn}
                    removeSmallGroupColumn={ removeSmallGroupColumn}
                    signedMembershipAgreementDate={ signedMembershipAgreementDate}
                    signedMaturityCovenantDate={ signedMaturityCovenantDate}
                    signedMinistryCovenantDate={ signedMinistryCovenantDate}
                    signedMissionCovenantDate={ signedMissionCovenantDate}
                />

            </Main.Content>
        </Main>
    );
}

export default DocsPersonCoreMilestones;
