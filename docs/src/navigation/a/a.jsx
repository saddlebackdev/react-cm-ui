import {
    A,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as aDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/navigation/a/a';
/* eslint-enable import/no-named-default, import/extensions */

const names = ['Link One', 'Link Two', 'Link Three'];
const myId = 'myId';
const disable = false;

const aSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class TypeSample extends React.Component {    

    constructor(props) {
        super(props);        
    }
    
    const names = ['Link One', 'Link Two', 'Link Three'];
    const myId = 'myId';
    const disable = false;

    render() {
        return (
            <div>
                <A
                    id={myId}
                    children={names}
                    onClick={() => console.log('Click!')}
                    disable={disable}
                    onKeyDown={() => console.log('keyDown!')}
                />
            </div>
        );
    }
}`;

function DocsA() {
    const descriptionCopy = aDoc.description;

    return (
        <Main page="a">
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
                        aDoc,
                    ]}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {aSample}
                </Highlighter>

                <A
                    id={myId}
                    children={names}
                    onClick={() => console.log('Click!')}
                    disable={disable}
                    onKeyDown={() => console.log('keyDown!')}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsA;
