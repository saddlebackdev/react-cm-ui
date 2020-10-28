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
            default: 'true',
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
            description: 'Each object is a table column that provides the content for the component.',
        }, {
            name: 'data *',
            type: 'array',
            default: '',
            description: 'Each object is the data provided for the data grid\'s column renderer.',
        }, {
            name: 'fontSize',
            type: 'string',
            default: '\'16px\'',
            description: 'The default font size for each row in the body of the data grid.',
        }, {
            name: 'handle',
            type: 'bool',
            default: 'true',
            description: 'If <code>true</code>, the component will render a handle you can use to resize a sticky column.',
        }, {
            name: 'id',
            type: 'string',
            default: '',
            description: 'Assign an ID to the component.',
        }, {
            name: 'minWidth',
            type: 'number',
            default: '800',
            description: 'If <code>true</code>, sets the minimum width of the data grid when using sticky column(s).',
        }, {
            name: 'rowProps',
            type: 'func',
            default: '',
            description: 'Provides extra props for each row.',
        }, {
            name: 'size',
            type: 'bool',
            default: '',
            description: 'Sets the size of rows within the body of a data grid.',
        }, {
            name: 'stickColumnWidth',
            type: 'number',
            default: '0',
            description: 'Sets the number of sticky columns.',
        }, {
            name: 'stickColumnWidth',
            type: 'number',
            default: '30',
            description: 'Sets the width of the sticky columns.',
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
