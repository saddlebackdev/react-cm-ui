import {
    Header,
    Address,
    Typography
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as addressDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/address/address';
/* eslint-enable import/no-named-default, import/extensions */

const address1 = `My Address`;
const address2 = `My Address 2`;
const city = `LA`;
const country = `USA`;
const addressAlpha = `USA Alpha`;
const postalCode = `12345`;
const region = `Region`;
const regionCode = `Region Code`;

const addressSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class TypeSample extends React.Component {

    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div>
                <Address
                    address1={address1}
                    address2={address2}
                    city={city}
                    region={region}
                    postalCode={postalCode}
                    country={country}                    
                /> 
            </div>
        );
    }
}`;

function DocsAddress() {
    const descriptionCopy = addressDoc.description;

    return (
        <Main page="address">
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
                        addressDoc,
                    ]}
                />
                {/* Address */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Address
                        <Header.Subheader>
                            Address component.
                        </Header.Subheader>
                </Header>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {addressSample}
                </Highlighter>

                <Address
                    address1={address1}
                    address2={address2}
                    city={city}
                    region={region}
                    regionCode={ regionCode}
                    postalCode={postalCode}
                    country={country}
                /> 
            </Main.Content>
        </Main>
    );
}

export default DocsAddress;
