import React from 'react';
import {
    Card,
    Typography,
    Loader,
} from 'react-cm-ui';
import Heading from '../../global/heading';
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
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Loader */}
                    <Heading variant="h2">
                        Loader
                    </Heading>

                    <Typography variant="body1">
                        A standard loader. To be used to alert the user that something is happening.
                    </Typography>

                    <Loader />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {fooSample}
                    </Highlighter>

                    {/* Fluid */}
                    <Heading variant="h2">
                        Fluid
                    </Heading>

                    <Typography variant="body1">
                        A Loader's container can take on the size of its parent container.
                    </Typography>

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
