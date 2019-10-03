'use strict';

import { Button, Card, Dropdown, Header, Prompt, TitleBar } from 'react-cm-ui';
import Highlighter from '../app/highlighter.js';
import Main from '../app/main.js';
import React from 'react';
import TableProps from '../app/tableProps.js';

const inlineSample = `import React from 'react';

import { Button, Dropdown, Prompt } from 'react-cm-ui';

export default class InlineSample extends React.Component {

    render() {
        return (
            <div>
                <Prompt inline>
                    <Button color="success">Save Me!</Button>
                </Prompt><br /><br />

                <Prompt inline>
                    <Dropdown button buttonColor="alert" collapseMenuOnChange placeholder="Remove Me!">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>
                </Prompt><br /><br />

                <Prompt inline>
                    <a>Simple Link</a>
                </Prompt>
            </div>
        );
    }

}`;

const optionalPrompSample = `import React from 'react';

import { Dropdown, Prompt } from 'react-cm-ui';

export default class OptionalPromptSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { showPrompt: false };

        this._onNoClick = this._onNoClick.bind(this);
        this._onPromptClick = this._onPromptClick.bind(this);
        this._onYesClick = this._onYesClick.bind(this);
    }

    render() {
        return (
            <Prompt
                inline
                inlineMessageColor="alert"
                message="Delete?"
                onClick={this._onPromptClick}
                onNoClick={this._onNoClick}
                onYesClick={this._onYesClick}
                show={this.state.showPrompt}
            >
                <Dropdown
                    button
                    buttonColor="outline"
                    buttonCompact
                    collapseMenuOnChange
                    iconType="ellipsis-h"
                    theme="dark"
                >
                    <Dropdown.Item id="edit" iconInverse iconType="pencil" label="Edit" />
                    <Dropdown.Item id="delete" iconInverse iconType="trash" label="Delete" />
                </Dropdown>
            </Prompt>
        );
    }

    _onPromptClick(option) {
        console.log('Prompt got clicked!  Option:', option);

        switch (option.id) {
            case 'delete':
                console.log('Showing delete prompt...');
                this.setState({ showPrompt: true }); // show the prompt
                break;

            case 'edit':
                console.log('Proceeding with edit action (with no prompt) ...');
                // TODO: Do whatever edit is supposed to do
                break;

            // TODO: Handle other options if applicable
        }
    }

    _onYesClick() {
        console.log('Yes!  Delete it!');
        this.setState({ showPrompt: false });
    }

    _onNoClick() {
        console.log('No ... just kidding.  Don\'t delete it!');
        this.setState({ showPrompt: false });
    }
}`;

export default class ModulesPrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPrompt: false };
    }

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'inline',
                type: 'bool',
                default: '',
                description: 'Prompts will be handled inline with the action.',
                allowedTypes: '',
            }, {
                name: 'inlineMessageColor',
                type: 'enum',
                default: '',
                description: 'Give an inline Prompt\'s action message a custom background color.',
                allowedTypes: 'alert, success',
            }, {
                name: 'inlineHorizontalAlign',
                type: 'enum',
                default: 'left',
                description: 'An inline Prompt can be horizontal aligned to the left or the right.',
                allowedTypes: 'left, right',
            }, {
                name: 'message',
                type: 'string',
                default: '',
                description: 'Supply a Prompt a custom message.',
                allowedTypes: '',
            }, {
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'Prompts can handle an onClick event.',
                allowedTypes: '',
            }, {
                name: 'onNoClick',
                type: 'func',
                default: '',
                description: 'An onClick event handler for the no button.',
                allowedTypes: '',
            }, {
                name: 'onYesClick',
                type: 'func',
                default: '',
                description: 'An onClick event handler for the yes button.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Prompt\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <TitleBar title="Prompt" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Inline */}
                <Header anchor="inline" size="large" style={{ marginTop: '55px' }} sub>
                    Inline Prompt
                    <Header.Subheader>
                        A Button, Dropdown, or Link can have prompt attached to it asking for a confirmation from the end-user.
                    </Header.Subheader>
                </Header>

                <p>
                    Note that the prompt will suppress actions from the wrapped control--button and link <code>onClick</code>,
                    dropdown <code>onChange</code>, etc.  You handle the <code>Prompt</code> component's events instead
                    (<code>onClick</code>, <code>onYesClick</code> and <code>onNoClick</code>).
                </p>

                <Prompt inline>
                    <Button color="success">Save Me!</Button>
                </Prompt><br /><br />

                <Prompt inline>
                    <Dropdown button buttonColor="alert" collapseMenuOnChange placeholder="Remove Me!">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>
                </Prompt><br /><br />

                <Prompt inline>
                    <a>Simple Link</a>
                </Prompt>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {inlineSample}
                </Highlighter>

                {/* Dropdown with only some items prompting */}
                <Header anchor="selective-prompt" size="large" style={{ marginTop: '55px' }} sub>
                    Selective Prompting for Dropdown Options
                    <Header.Subheader>
                        Let's say we have a Dropdown button acting as an action menu with an inline prompt wrapping it,
                        but we only want <em>certain</em> options to trigger not prompt, not all options (i.e. we need to trigger
                        the prompt <em>selectively</em>). Note that in the sample above with the dropdown button menu,
                        the prompt is triggered on <em>all options</em>.
                    </Header.Subheader>
                </Header>

                <p>
                    In order to achieve selective triggering of the prompt, you will have to add some logic to the
                    function that handles the prompt's <code>onClick</code> event (where you will switch on the selected
                    option to determine what to do) and use prompt's <code>show</code> prop to selectively show and hide
                    the prompt as appropriate.
                </p>
                <p>
                    The example below shows a sample Dropdown button action menu that contains Edit and Delete actions.<br />
                    Only the <strong>Delete</strong> option should prompt. The <strong>Edit</strong> option shouldn't prompt.
                </p>

                <Prompt
                    inline
                    inlineMessageColor="alert"
                    message="Delete?"
                    onClick={this._onPromptClick.bind(this)}
                    onNoClick={this._onNoClick.bind(this)}
                    onYesClick={this._onYesClick.bind(this)}
                    show={this.state.showPrompt}
                >
                    <Dropdown
                        button
                        buttonColor="outline"
                        buttonCompact
                        collapseMenuOnChange
                        iconType="ellipsis-h"
                        theme="dark"
                    >
                        <Dropdown.Item id="edit" iconInverse iconType="pencil" label="Edit" />
                        <Dropdown.Item id="delete" iconInverse iconType="trash" label="Delete" />
                    </Dropdown>
                </Prompt>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {optionalPrompSample}
                </Highlighter>
            </Main>
        );
    }

    _onClick(option) {
        console.log('option:', option); // eslint-disable-line no-console
    }

    _onPromptClick(option) {
        console.log('Prompt got clicked!  Option:', option); // eslint-disable-line no-console

        switch (option.id) {
            case 'delete':
                console.log('Showing delete prompt...'); // eslint-disable-line no-console
                this.setState({ showPrompt: true }); // show the prompt
                break;

            case 'edit':
                console.log('Proceeding with edit action (with no prompt) ...'); // eslint-disable-line no-console
                // TODO: Do whatever edit is supposed to do
                break;

            // TODO: Handle other options if applicable
        }
    }

    _onYesClick() {
        console.log('Yes!  Delete it!'); // eslint-disable-line no-console
        this.setState({ showPrompt: false });
    }

    _onNoClick() {
        console.log('No ... just kidding.  Don\'t delete it!'); // eslint-disable-line no-console
        this.setState({ showPrompt: false });
    }
}
