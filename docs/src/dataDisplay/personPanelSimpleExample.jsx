import { PersonPanel } from 'react-cm-ui';
import React from 'react';
import { personPayload } from './personPanelConstants';

function PersonPanelSimpleExample() {
    return (
        <PersonPanel
            data={personPayload}
        >
            <PersonPanel.Summary />

            <PersonPanel.Details />
        </PersonPanel>
    );
}

export default PersonPanelSimpleExample;
