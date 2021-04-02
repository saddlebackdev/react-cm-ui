import {
    Header,
    PersonContactInfo,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as personContactInfoDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/personContactInfo/personContactInfo';
/* eslint-enable import/no-named-default, import/extensions */

const myId = '1234';
const email = 'myEmail@domain.com';
const emergencyContactEmail='emergencyMail@mail.com';
const emergencyContactPhone='5212345667890';
const emergencyContactRelationshipName='Wife';
const isDoNotContact=false;
const isDoNotEmail=false;
const isDoNotMail=false;
const isDoNotPhone=false;
const isDoNotText=false;
const phone='myPhone';
const preferredMethod='email';
const recordType = 'adult';

const personContactSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class TypeSample extends React.Component {    

    constructor(props) {
        super(props);        
    }
    
    const myId = '1234';
    const email = 'myEmail@domain.com';
    const emergencyContactEmail='emergencyMail@mail.com';
    const emergencyContactPhone='5212345667890';
    const emergencyContactRelationshipName='Wife';
    const isDoNotContact=false;
    const isDoNotEmail=false;
    const isDoNotMail=false;
    const isDoNotPhone=false;
    const isDoNotText=false;
    const phone='myPhone';
    const preferredMethod='email'; // enum => email, phone
    const recordType = 'adult'; // emum => adult, student, child

    render() {
        return (
            <div>
                <PersonContactInfo
                    id={myId}
                    email={email}
                    emergencyContactEmail={emergencyContactEmail}
                    emergencyContactPhone={emergencyContactPhone}
                    emergencyContactRelationshipName={emergencyContactRelationshipName}
                    isDoNotContact={isDoNotContact}
                    isDoNotEmail={isDoNotEmail}
                    isDoNotMail={isDoNotMail}
                    isDoNotPhone={isDoNotPhone}
                    isDoNotText={isDoNotText}
                    phone={phone}
                    preferredMethod={preferredMethod}
                    recordType={recordType}
                />
            </div>
        );
    }
}`;

function DocsPersonContactInfo() {
    const descriptionCopy = personContactInfoDoc.description;

    return (
        <Main page="person_contact_info">
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {descriptionCopy}
                    </Typography>

                </MarkdownContainer>

                <ComponentApi
                    docs={[
                        personContactInfoDoc,
                    ]}
                />

                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Person Contact Info
                    <Header.Subheader>
                        Person Contact Info component.
                    </Header.Subheader>
                </Header>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {personContactSample}
                </Highlighter>

                <PersonContactInfo
                    id={myId}
                    email={email}
                    emergencyContactEmail={emergencyContactEmail}
                    emergencyContactPhone={emergencyContactPhone}
                    emergencyContactRelationshipName={emergencyContactRelationshipName}
                    isDoNotContact={isDoNotContact}
                    isDoNotEmail={isDoNotEmail}
                    isDoNotMail={isDoNotMail}
                    isDoNotPhone={isDoNotPhone}
                    isDoNotText={isDoNotText}
                    phone={phone}
                    preferredMethod={preferredMethod}
                    recordType={recordType}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsPersonContactInfo;
