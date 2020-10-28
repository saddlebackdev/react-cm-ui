import React from 'react';
import {
    Card,
    Header,
    Loader,
} from 'react-cm-ui';

// Docs UI Components
import Block from '../../global/block';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const fooSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class InputSample extends React.Component {

    render() {
        return (
            <Loader />
        );
    }

}`;

export default class ElementsLoader extends React.Component {
    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'Loarders can take on the size of its container.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Segmented Controls\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Loader */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Loader
                        <Header.Subheader>
                            A standard loader. To be used to alert the user that something is happening.
                        </Header.Subheader>
                    </Header>

                    <Loader />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {fooSample}
                    </Highlighter>

                    {/* Fluid */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Fluid
                        <Header.Subheader>
                            A Loader's container can take on the size of its parent container.
                        </Header.Subheader>
                    </Header>

                    <Block style={{ maxWidth: '450px' }}>
                        <Loader fluid />
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {fooSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}
