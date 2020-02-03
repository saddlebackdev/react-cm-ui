import {
    Card,
    Header,
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import Main from '../global/main';
import PageSubNavigation from './pageSubNavigation';
import TableProps from '../global/tableProps';

function ModulesPageFiltersDrawer() {
    const tableProps = [
        {
            name: 'children',
            type: 'node',
            default: '',
            description: 'The children of the component.',
        }, {
            name: 'className',
            type: 'string',
            default: '',
            description: 'Override or extend styles with an additional class name(s).',
        }, {
            name: 'id',
            type: 'string',
            default: '',
            description: 'Assign an ID to the component.',
        }, {
            name: 'isDirty *',
            type: 'bool',
            default: '',
            description: 'If <code>true</code>, will displays clear and applay buttons.',
        }, {
            name: 'isFiltering *',
            type: 'bool',
            default: '',
            description: 'If <code>true</code>, shows the clear filters button.',
        }, {
            name: 'isOpen *',
            type: 'bool',
            default: '',
            description: 'If <code>true</code>, opens the filters drawer.',
        }, {
            name: 'onApply',
            type: 'func',
            default: '',
            description: 'Event handler for aplying filters.',
        }, {
            name: 'onClear',
            type: 'func',
            default: '',
            description: 'Event handler for clearing filters.',
        }, {
            name: 'onClose',
            type: 'func',
            default: '',
            description: 'Event handler for close the filters drawer.',
        }, {
            name: 'rows',
            type: 'array',
            default: '',
            description: 'Each object is a row within the component.',
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

export default ModulesPageFiltersDrawer;
