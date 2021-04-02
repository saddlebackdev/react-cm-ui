import {
    Header,
    TelephoneLink,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as telephoneLinkDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/telephoneLink/telephoneLink';
/* eslint-enable import/no-named-default, import/extensions */

const idSample = 'myId';
const numberSample = '525512345678';
const formattedNumberSample = 'MX';
const classSample = 'myClass';

const telephoneLinkSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class TypeSample extends React.Component {    

    constructor(props) {
        super(props);        
    }
    
    const idSample = 'myId';
    const numberSample = '525512345678';
    const formattedNumberSample = 'MX';
    const classSample = 'myClass';

    render() {
        return (
            <div>
                <TelephoneLink
                    id={idSample}
                    number={numberSample}
                    formattedNumberSample={formattedNumberSample}
                    className={classSample}
                />
            </div>
        );
    }
}`;

function DocsTelephoneLink() {
    const descriptionCopy = telephoneLinkDoc.description;

    return (
        <Main page="telephone-link">
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
                        telephoneLinkDoc,
                    ]}
                />

                {/* Data Card */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Telephone Link
                    <Header.Subheader>
                        Telephone Link component.
                    </Header.Subheader>
                </Header>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {telephoneLinkSample}
                </Highlighter>

                Call Fake Number: <TelephoneLink
                    id={idSample}
                    number={numberSample}
                    formattedNumberSample={formattedNumberSample}
                    className={classSample}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsTelephoneLink;
