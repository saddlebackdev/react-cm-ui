import {
    Card,
    Header,
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import Main from '../app/main';
import PageSubNavigation from './pageSubNavigation';
import TableProps from '../app/tableProps';

function ModulesPageContainer() {
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

            <div>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={tableProps} />
                </Card>
            </div>
        </Main>
    );
}

export default ModulesPageContainer;
