import {
    Button,
    Icon,
    Prompt,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleInformativePrompt() {
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
                icon="file-alt"
                inline
                inlineMessageColor="info"
                message="Download Spreadsheet?"
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
                    <Icon color="inverse" type="download-1" />
                    <span>Export</span>
                </Button>
            </Prompt>
        </div>
    );
}

export default ExampleInformativePrompt;
