import {
    Button,
    Prompt,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleWarningPrompt() {
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
                inlineMessageColor="warning"
                onClick={() => {}}
                onNoClick={onNoClick}
                onYesClick={onYesClick}
                show={showPrompt}
            >
                <Button
                    color="alternate"
                    disable={showPrompt}
                    onClick={() => onPromptClick()}
                >
                    Unpublish
                </Button>
            </Prompt>
        </div>
    );
}

export default ExampleWarningPrompt;
