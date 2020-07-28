import {
    Button,
    Card,
    DropdownButton,
    Header,
    Prompt,
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import PromptDropdownButtonExample from './promptDropdownButtonExample';
import PromptExample from './promptExample';
import TableProps from '../global/tableProps';

function DocsPrompt() {
    const tableProps = [
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
            allowedTypes: 'alert, success, warning',
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

            <Main.Content>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={tableProps} />
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

                <PromptExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./promptExample').default}
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

                <PromptDropdownButtonExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./promptDropdownButtonExample').default}
                </Highlighter>
            </Main.Content>
        </Main>
    );
}

export default DocsPrompt;
