import {
    Button,
    Prompt,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleAlertPrompt() {
    const [showPrompt, setShowPrompt] = useState(false);

    function onPromptClick() {
        setShowPrompt(true);
    }

    function onYesClick() {
        setShowPrompt(false);
    }

    function onNoClick() {
        setShowPrompt(false);
    }

    return (
        <div>
            <Prompt
                icon="close"
                inline
                inlineMessageColor="alert"
                onClick={() => {}}
                onNoClick={onNoClick}
                onYesClick={onYesClick}
                show={showPrompt}
            >
                <Button
                    color="alert"
                    disable={showPrompt}
                    onClick={() => onPromptClick()}
                    outlined
                >
                    Remove
                </Button>
            </Prompt>
        </div>
    );
}

export default ExampleAlertPrompt;
