import {
    Card,
    Header,
} from 'react-cm-ui';
import React from 'react';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

function ModulesPageDataGrid() {
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
            name: 'columns *',
            type: 'array',
            default: '',
            description: 'Each object is a data group that provides the content for the component.',
        }, {
            name: 'data *',
            type: 'array',
            default: '',
            description: 'Provides the data for each data group\'s renderer.',
        }, {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Please don\'t use unless extremly important. Override or extend styles.',
        },
    ];

    return (
        <Main page="headers">
            <Main.Content>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={tableProps} />
                </Card>
            </Main.Content>
        </Main>
    );
}

export default ModulesPageDataGrid;
