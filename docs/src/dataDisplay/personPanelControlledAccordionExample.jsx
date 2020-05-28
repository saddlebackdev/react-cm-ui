import { PersonPanel } from 'react-cm-ui';
import React, { useState } from 'react';
import { personPayload } from './personPanelConstants';

function PersonPanelControlledAccordionExample() {
    const [panelName, setPanelName] = useState(false);

    const onChange = (panel) => (event, isExpanded) => {
        setPanelName(isExpanded ? panel : false);
    };

    return (
        <div>
            <PersonPanel
                data={{
                    ...personPayload,
                    noteCount: 2,
                }}
                isExpanded={panelName === 'panel1'}
                onChange={onChange('panel1')}
            >
                <PersonPanel.Summary
                    showAdditionalDetails
                />

                <PersonPanel.Details />
            </PersonPanel>

            <PersonPanel
                data={{
                    ...personPayload,
                    noteCount: 12,
                }}
                isExpanded={panelName === 'panel2'}
                onChange={onChange('panel2')}
            >
                <PersonPanel.Summary
                    showAdditionalDetails
                />

                <PersonPanel.Details />
            </PersonPanel>

            <PersonPanel
                data={{
                    ...personPayload,
                    noteCount: 3,
                }}
                isExpanded={panelName === 'panel3'}
                onChange={onChange('panel3')}
            >
                <PersonPanel.Summary
                    showAdditionalDetails
                />

                <PersonPanel.Details />
            </PersonPanel>

            <PersonPanel
                data={{
                    ...personPayload,
                }}
                isExpanded={panelName === 'panel4'}
                onChange={onChange('panel4')}
            >
                <PersonPanel.Summary
                    showAdditionalDetails
                />

                <PersonPanel.Details />
            </PersonPanel>
        </div>
    );
}

export default PersonPanelControlledAccordionExample;
