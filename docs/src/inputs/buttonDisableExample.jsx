import { Button } from 'react-cm-ui';
import React from 'react';

function onClickDisabledButton() {
    console.log('Button was clicked (but shouldn\'t have been if it was disabled)'); // eslint-disable-line no-console
}

function ButtonDisableExample() {
    return (
        <Button
            disabled
            onClick={onClickDisabledButton}
        >
            Disabled Button
        </Button>
    );
}

export default ButtonDisableExample;
