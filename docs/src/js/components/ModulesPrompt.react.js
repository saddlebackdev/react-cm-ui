'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card, Dropdown, Grid, Header, Prompt, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const inlineSample = `import React from 'react';

import { Button, Dropdown, Prompt } from 'react-cm-ui';

export default class InlineSample extends React.Component {

    render() {
        return (
            <div>
                <Prompt inline={true}>
                    <Button color="success">Save Me!</Button>
                </Prompt><br /><br />

                <Prompt inline={true}>
                    <Dropdown button={true} buttonColor="alert" placeholder="Remove Me!">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>
                </Prompt><br /><br />

                <Prompt inline={true}>
                    <a>Simple Link</a>
                </Prompt>
            </div>
        );
    }

}`;

export default class ModulesPrompt extends React.Component {

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'inline',
                type: 'bool',
                default: '',
                description: 'Prompts will be handled inline with the action.',
                allowedTypes: ''
            }, {
                name: 'inlineMessageColor',
                type: 'enum',
                default: '',
                description: 'Give an inline Prompt\'s action message a custom background color.',
                allowedTypes: 'alert, success'
            }, {
                name: 'inlineHorizontalAlign',
                type: 'enum',
                default: 'left',
                description: 'An inline Prompt can be horizontal aligned to the left or the right.',
                allowedTypes: 'left, right'
            }, {
                name: 'message',
                type: 'string',
                default: '',
                description: 'Supply a Prompt a custom message.',
                allowedTypes: ''
            }, {
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'Prompts can handle an onClick event.',
                allowedTypes: ''
            }, {
                name: 'onNoClick',
                type: 'func',
                default: '',
                description: 'An onClick event handler for the no button.',
                allowedTypes: ''
            }, {
                name: 'onYesClick',
                type: 'func',
                default: '',
                description: 'An onClick event handler for the yes button.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Prompt\'s container. Mainly used for padding and margins.',
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

                {/* Inline */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Inline
                    <Header.Subheader>
                        A Button, Dropdown, or Link can have prompt attached to it asking for a confirmation from the end-user.
                    </Header.Subheader>
                </Header>

                <Prompt inline={true}>
                    <Button color="success">Save Me!</Button>
                </Prompt><br /><br />

                <Prompt inline={true}>
                    <Dropdown button={true} buttonColor="alert" placeholder="Remove Me!">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>
                </Prompt><br /><br />

                <Prompt inline={true}>
                    <a>Simple Link</a>
                </Prompt>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {inlineSample}
                </Highlighter>
            </Main>
        );
    }

    _onClick(option) {
        console.log('option:', option);
    }

}
