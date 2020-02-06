import {
    Card,
    Header,
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import Main from '../global/main';
import PageSubNavigation from './pageSubNavigation';
import TableProps from '../global/tableProps';

function ModulesPageDetailsWindow() {
    const tableProps = [
        {
            name: 'bleed',
            type: 'bool',
            default: 'false',
            description: 'If <code>true</code>, the component will bleed to the edge of the parent component.',
        }, {
            name: 'className',
            type: 'string',
            default: '',
            description: 'Override or extend styles with an additional class name(s).',
        }, {
            name: 'color',
            type: '1<br /> | 2<br /> | 3<br /> | 4<br /> | 5<br /> | 6<br /> | 7<br /> | 8<br /> | 9<br /> | 10<br /> | 11',
            default: '',
            description: 'Provides the background color for the component.',
        }, {
            name: 'columnProps',
            type: 'object',
            default: '',
            description: 'Provides extra props for each column in the component.',
        }, {
            name: 'columns *',
            type: 'array',
            default: '',
            description: 'Each object is a column within the component.',
        }, {
            name: 'data *',
            type: 'object',
            default: '',
            description: 'Provides the data for each column\'s renderer.',
        }, {
            name: 'expandableColumns',
            type: 'array',
            default: '',
            description: 'Provides the data for each expanded column\'s renderer.',
        }, {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Please don\'t use unless extremly important. Override or extend styles.',
        },
    ];

    return (
        <Main page="headers">
            <TitleBar title="Page" />

            <PageSubNavigation />

            <Main.Content>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={tableProps} />
                </Card>
            </Main.Content>
        </Main>
    );
}

export default ModulesPageDetailsWindow;
