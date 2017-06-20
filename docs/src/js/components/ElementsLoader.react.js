'use strict';

import React from 'react';
import { Card, Header, Loader, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const fooSample = `import React from 'react';

import Loader from 'components/UI/Elements/Loader.react';

export default class InputSample extends React.Component {

    render() {
        return (
            <Loader />
        );
    }

}`;

export default class ElementsButton extends React.Component {

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
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Segmented Controls\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Loader" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Loader */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
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
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Fluid
                    <Header.Subheader>
                        A Loader's container can take on the size of its parent container.
                    </Header.Subheader>
                </Header>

                <Block style={{ maxWidth: '450px' }}>
                    <Loader fluid={true} />
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fooSample}
                </Highlighter>
            </Main>
        );
    }

}
