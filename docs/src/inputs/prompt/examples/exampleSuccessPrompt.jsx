import {
    Button,
    Icon,
    Prompt,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleSuccessPrompt() {
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
                icon="success"
                inline
                inlineMessageColor="success"
                message="Save Draft and Close?"
                onClick={() => {}}
                onNoClick={onNoClick}
                onYesClick={onYesClick}
                show={showPrompt}
            >
                <Button
                    color="success"
                    disable={showPrompt}
                    onClick={() => onPromptClick()}
                >
                    <Icon color="inverse" type="save" />
                    <span>Save</span>
                </Button>
            </Prompt>
        </div>
    );
}

export default ExampleSuccessPrompt;
