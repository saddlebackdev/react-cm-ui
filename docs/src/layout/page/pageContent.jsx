import {
    Card,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

function ModulesPageContent() {
    const tableProps = [
        {
            name: 'as',
            type: '\'div\'<br />| \'header\'<br />| \'main\'<br />| \'section\'',
            default: '',
            description: 'The component used for the root DOM node.',
        }, {
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
            name: 'isFiltersRailOpen',
            type: 'bool',
            default: 'false',
            description: 'If <code>true</code>, the component will enable styling used for an open filters rail.',
        }, {
            name: 'scrollable',
            type: 'bool',
            default: 'false',
            description: 'If <code>true</code>, the component will enable styling used for when the component is scrollable.',
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
                    <Typography size="large">Props</Typography>

                    <TableProps props={tableProps} />
                </Card>
            </Main.Content>
        </Main>
    );
}

export default ModulesPageContent;
