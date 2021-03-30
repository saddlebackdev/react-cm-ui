import {
    EmailLink,
    Header,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as emailLinkDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/emailLink/emailLink';
/* eslint-enable import/no-named-default, import/extensions */

const classSample = 'myCss';
const idSample = 'mymail@domain.com';
const mailSample = 'mymail@domain.com';

const emailLinkSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class TypeSample extends React.Component {    

    constructor(props) {
        super(props);        
    }
    
    const classSample = 'myCss';
    const idSample = 'mymail@domain.com';
    const mailSample = 'mymail@domain.com';

    render() {
        return (
            <div>
                <EmailLink
                    email={mailSample}
                    id={idSample}
                    className={classSample}
                />
            </div>
        );
    }
}`;

function DocsEmailLink() {
    const descriptionCopy = emailLinkDoc.description;

    return (
        <Main page="email_link">
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
                        emailLinkDoc,
                    ]}
                />

                {/* Data Card */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Email Link
                    <Header.Subheader>
                        Email Link component.
                    </Header.Subheader>
                </Header>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {emailLinkSample}
                </Highlighter>

                <EmailLink
                    email={mailSample}
                    id={idSample}
                    className={classSample}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsEmailLink;
