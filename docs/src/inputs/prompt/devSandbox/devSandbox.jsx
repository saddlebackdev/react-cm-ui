import {
    camelCase,
} from 'lodash';
import {
    Typography,
} from 'react-cm-ui';
import React from 'react';
import Highlighter from '../../../global/highlighter';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
import ExampleDropdownButtonPrompt from './examples/exampleDropdownButtonPrompt';
import ExampleDefaultPrompt from './examples/exampleDefaultPrompt';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/inputs/prompt/prompt';
/* eslint-enable import/no-named-default, import/extensions */

function ElementsPrompt() {
    const {
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <MarkdownContainer>
                    {/* Inline */}
                    <Typography anchor="inline" variant="h2" style={{ marginTop: '55px' }}>
                        Inline Prompt
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A Button, Dropdown, or Link can have prompt attached to it asking for a confirmation from the end-user.
                    </Typography>

                    <p>
                        Note that the prompt will suppress actions from the wrapped control--button and link
                        {' '}
                        <code>onClick</code>
                        ,
                        dropdown
                        {' '}
                        <code>onChange</code>
                        , etc.  You handle the
                        {' '}
                        <code>Prompt</code>
                        {' '}
                        component's events instead
                        (
                        <code>onClick</code>
                        ,
                        {' '}
                        <code>onYesClick</code>
                        {' '}
                        and
                        {' '}
                        <code>onNoClick</code>
                        ).
                    </p>

                    <ExampleDefaultPrompt />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {require('!!raw-loader!./examples/exampleDefaultPrompt').default}
                    </Highlighter>

                    {/* Dropdown with only some items prompting */}
                    <Typography anchor="selective-prompt" variant="h2" style={{ marginTop: '55px' }}>
                        Selective Prompting for Dropdown Options
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Let's say we have a Dropdown button acting as an action menu with an inline prompt wrapping it,
                        but we only want
                        {' '}
                        <em>certain</em>
                        {' '}
                        options to trigger not prompt, not all options (i.e. we need to trigger
                        the prompt
                        {' '}
                        <em>selectively</em>
                        ). Note that in the sample above with the dropdown button menu,
                        the prompt is triggered on
                        {' '}
                        <em>all options</em>
                        .
                    </Typography>

                    <p>
                        In order to achieve selective triggering of the prompt, you will have to add some logic to the
                        function that handles the prompt's
                        {' '}
                        <code>onClick</code>
                        {' '}
                        event (where you will switch on the selected
                        option to determine what to do) and use prompt's
                        {' '}
                        <code>show</code>
                        {' '}
                        prop to selectively show and hide
                        the prompt as appropriate.
                    </p>
                    <p>
                        The example below shows a sample Dropdown button action menu that contains Edit and Delete actions.
                        <br />
                        Only the
                        {' '}
                        <strong>Delete</strong>
                        {' '}
                        option should prompt. The
                        {' '}
                        <strong>Edit</strong>
                        {' '}
                        option shouldn't prompt.
                    </p>

                    <ExampleDropdownButtonPrompt />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {require('!!raw-loader!./examples/exampleDropdownButtonPrompt').default}
                    </Highlighter>
                </MarkdownContainer>
            </Main.Content>
        </Main>
    );
}

export default ElementsPrompt;
