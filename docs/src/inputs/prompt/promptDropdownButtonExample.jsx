import {
    DropdownButton,
    Prompt,
} from 'react-cm-ui';
import React, { useState } from 'react';

function PromptDropdownButtonExample() {
    const [showPrompt, setShowPrompt] = useState(false);

    function onPromptClick(type) {
        switch (type) {
            case 'delete':
                console.log('Showing delete prompt...'); // eslint-disable-line no-console

                setShowPrompt(true);

                break;

            case 'edit':
                console.log('Proceeding with edit action (with no prompt) ...'); // eslint-disable-line no-console

                // TODO: Do whatever edit is supposed to do

                break;

            default:
                // TODO: Handle other options if applicable
        }
    }

    function onYesClick() {
        console.log('Yes!  Delete it!'); // eslint-disable-line no-console

        setShowPrompt(false);
    }

    function onNoClick() {
        console.log('No ... just kidding.  Don\'t delete it!'); // eslint-disable-line no-console

        setShowPrompt(false);
    }

    return (
        <Prompt
            inline
            inlineMessageColor="alert"
            message="Delete?"
            onClick={() => {}}
            onNoClick={onNoClick}
            onYesClick={onYesClick}
            show={showPrompt}
        >
            <DropdownButton
                icon
                iconType="ellipsis-h"
                outline
                style={{ margin: 0 }}
            >
                <DropdownButton.Option
                    id="edit"
                    label="Edit"
                    onClick={() => onPromptClick('edit')}
                />
                <DropdownButton.Option
                    id="delete"
                    label="Delete"
                    onClick={() => onPromptClick('delete')}
                />
            </DropdownButton>
        </Prompt>
    );
}

export default PromptDropdownButtonExample;
