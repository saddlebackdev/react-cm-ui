'use strict';

import React from 'react';
import { Button, Card, Grid, Header, Prompt, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const cardSample = `import React from 'react';

import Card from 'components/UI/Views/Card.react';

export default class CardSample extends React.Component {

    render() {
        return (
            <Card>
                <Header size="large">Look at me!!!</Header>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                    Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                    Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                    Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                    dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                    sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.</p>
            </Card>
        );
    }

}`;

export default class ModulesPrompt extends React.Component {

    render() {
        const props = [
            {
                name: 'active',
                type: 'bool',
                default: 'false',
                description: 'Cards can have an active state.',
                allowedTypes: ''
            }, {
                name: 'children',
                type: 'node',
                default: '',
                description: 'Primary content.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'compact',
                type: 'bool',
                default: 'false',
                description: 'A card can reduce its padding.',
                allowedTypes: ''
            }, {
                name: 'nest',
                type: 'bool',
                default: 'false',
                description: 'Cards may be placed in a nested background color.',
                allowedTypes: ''
            }, {
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'Cards can handle an onClick event.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Card\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Prompt" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Card */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Card
                    <Header.Subheader>
                        A basic card has a faint border wrapping it's contents. It's box model is fluid so that it can adapt to it's parent container's width.
                    </Header.Subheader>
                </Header>

                <Prompt inline={true}>
                    <Button color="success">Save Me!</Button>
                </Prompt>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {cardSample}
                </Highlighter>
            </Main>
        );
    }

    _onClick() {
        window.alert('The card has been clicked!');
    }

}
