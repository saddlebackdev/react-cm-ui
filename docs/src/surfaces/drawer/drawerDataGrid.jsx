/* eslint-disable global-require */
/* eslint-disable import/no-webpack-loader-syntax */
import {
    Card,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';
import DrawerDataGrid from './drawerDataGridSample';

function ModulesDrawerDataGrid() {
    const tableProps = [
        {
            name: 'bleed',
            type: 'bool',
            default: 'true',
            description: 'Horizontally extend Drawer.DataGrid all the way to the edges of the parent Drawer.',
            allowedTypes: '',
        }, {
            name: 'className',
            type: 'string',
            default: '',
            description: 'Additional classes.',
            allowedTypes: '',
        }, {
            name: 'columns *',
            type: 'array',
            default: '',
            description: 'Required for Drawer.DataGrid to know where to place data.',
            allowedTypes: '',
        }, {
            name: 'data *',
            type: 'array',
            default: '',
            description: 'Required for Drawer.DataGrid to feed columns.',
            allowedTypes: '',
        }, {
            name: 'fontSize',
            type: 'enum',
            default: '',
            description: 'The size of a Table\'s default font size.',
            allowedTypes: 'large, medium, small, xlarge, xsmall, xxsmall',
        }, {
            name: 'rowProps',
            type: 'func',
            default: '',
            description: 'Row props.',
            allowedTypes: '',
        }, {
            name: 'size',
            type: 'enum',
            default: '',
            description: 'The vertical size of a table\'s body of cells.',
            allowedTypes: 'large, medium, small',
        }, {
            name: 'style',
            type: 'object',
            default: '',
            description: 'Supply any inline styles to the Drawer.DataGrid\'s container. Mainly used for padding and margins.',
            allowedTypes: '',
        },
    ];

    return (
        <Main page="headers">
            <Main.Content>
                <Card>
                    <Typography size="large">Props</Typography>

                    <TableProps props={tableProps} />
                </Card>

                {/* Data Grid */}
                <Typography anchor="drawer" variant="h2" style={{ marginTop: '55px' }}>
                    Data Grid
                </Typography>

                <Typography variant="body1">
                    UI for displaying a data in a table. Users can usualy toggle between
                    this and the Drawer.DataCards sub-components.
                </Typography>

                <DrawerDataGrid />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }} language="jsx">
                    {require('!!raw-loader!./drawerDataGridSample').default}
                </Highlighter>
            </Main.Content>
        </Main>
    );
}

export default ModulesDrawerDataGrid;
