/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable global-require */

import React from 'react';
import {
    Card,
    Header,
    TitleBar,
} from 'react-cm-ui';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';
import TableSample from './tableSample';
import TableSampleActive from './tableSampleActive';
import TableSampleBasic from './tableSampleBasic';
import TableSampleCelled from './tableSampleCelled';
import TableSampleCollapsing from './tableSampleCollapsing';
import TableSampleDefinition from './tableSampleDefinition';
import TableSampleDisabled from './tableSampleDisabled';
import TableSampleDragAndDropRowReordering from './tableSampleDragAndDropRowReordering';
import TableSampleFixed from './tableSampleFixed';
import TableSampleFontSize from './tableSampleFontSize';
import TableSampleFullWidth from './tableSampleFullWidth';
import TableSampleOnClick from './tableSampleOnClick';
import TableSampleResponsiveWidth from './tableSampleResponsiveWidth';
import TableSampleSelectable from './tableSampleSelectable';
import TableSampleSingleLine from './tableSampleSingleLine';
import TableSampleSize from './tableSampleSize';
import TableSampleStickyColumns from './tableSampleStickyColumns';
import TableSampleStretch from './tableSampleStretch';
import TableSampleStriped from './tableSampleStriped';
import TableSampleTextAlign from './tableSampleTextAlign';
import TableSampleVerticalAlign from './tableSampleVerticalAlign';


const propDefinitions = [
    {
        name: 'basic',
        type: 'bool',
        default: 'false',
        description: 'An element type to render as (string or function).',
        allowedTypes: 'h1, h2, h3, h4, h5, h6',
    }, {
        name: 'celled',
        type: 'bool',
        default: 'false',
        description: 'Primary content.',
        allowedTypes: '',
    }, {
        name: 'children',
        type: 'node',
        default: '',
        description: 'Additional classes.',
        allowedTypes: '',
    }, {
        name: 'className',
        type: 'string',
        default: '',
        description: 'Color of the header.',
        allowedTypes: '',
    }, {
        name: 'collapsing',
        type: 'bool',
        default: 'false',
        description: 'Headers may be formatted with an icon to floated to the left.',
        allowedTypes: '',
    }, {
        name: 'definition',
        type: 'bool',
        default: 'false',
        description: 'Headers can be formatted to appear on dark backgrounds better.',
        allowedTypes: '',
    }, {
        name: 'fixed',
        type: 'bool',
        default: 'false',
        description: 'Content headings are sized with em and are based on the font-size of their container.',
        allowedTypes: '',
    }, {
        name: 'fontSize',
        type: 'enum',
        default: '',
        description: 'Supply any inline styles to the Header\'s container. Mainly used for padding and margins.',
        allowedTypes: 'large, medium, small, xlarge, xsmall, xxsmall',
    }, {
        name: 'fullWidth',
        type: 'bool',
        default: 'false',
        description: 'Headers may be formatted with a subheader',
        allowedTypes: '',
    }, {
        name: 'id',
        type: 'string',
        default: '',
        description: 'An identifier.',
        allowedTypes: '',
    }, {
        name: 'selectable',
        type: 'bool',
        default: 'false',
        description: 'Headers may be formatted with a subheader',
        allowedTypes: '',
    }, {
        name: 'singleLine',
        type: 'bool',
        default: '',
        description: 'Headers may be formatted with a subheader',
        allowedTypes: 'medium, small',
    }, {
        name: 'size',
        type: 'enum',
        default: 'small',
        description: 'The size of a table\'s body of cells.',
        allowedTypes: 'medium, small',
    }, {
        name: 'stackable',
        type: 'bool',
        default: 'false',
        description: 'Headers may be formatted with a subheader',
        allowedTypes: '',
    }, {
        name: 'stickyColumnCount',
        type: 'number',
        default: '',
        description: 'Sticky columns number, from left to right',
        allowedTypes: '',
    }, {
        name: 'stretch',
        type: 'bool or enum',
        default: '',
        description: 'Headers may be formatted with a subheader',
        allowedTypes: 'very',
    }, {
        name: 'striped',
        type: 'bool',
        default: 'false',
        description: 'Headers may be formatted with a subheader',
        allowedTypes: '',
    }, {
        name: 'style',
        type: 'object',
        default: '',
        description: 'Headers may be formatted with a subheader',
        allowedTypes: '',
    },
];

export default function CollectionsTable() {

    return (
        <Main page="headers">
            <TitleBar title="Table" />

            <Main.Content>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={propDefinitions} />
                </Card>

                {/* Table */}
                <TableSample />

                {/* Basic Table */}
                <TableSampleBasic />

                {/* Celled Table */}
                <TableSampleCelled />

                {/* Collapsing Table */}
                <TableSampleCollapsing />

                {/* Definition Table */}
                <TableSampleDefinition />

                {/* Fixed Table */}
                <TableSampleFixed />

                {/* Font Size */}
                <TableSampleFontSize />

                {/* Full Width Table */}
                <TableSampleFullWidth />

                {/* Selectable Table */}
                <TableSampleSelectable />

                {/* Single Line Table */}
                <TableSampleSingleLine />

                {/* Size */}
                <TableSampleSize />

                {/* Stretch Table */}
                <TableSampleStretch />

                {/* Striped Table */}
                <TableSampleStriped />

                {/* Active */}
                <TableSampleActive />

                {/* Disabled */}
                <TableSampleDisabled />

                {/* Text Align */}
                <TableSampleTextAlign />

                {/* Vertical Align */}
                <TableSampleVerticalAlign />

                {/* onClick Event Handler Samples */}
                <TableSampleOnClick />

                {/* Responsive Width */}
                <TableSampleResponsiveWidth />

                {/* Drag and Drop Row Reordering */}
                <TableSampleDragAndDropRowReordering />

                <Header anchor="basic-table" size="large" style={{ marginTop: '55px' }} sub>
                    Sticky Columns
                    <Header.Subheader>
                        A table can be more basic, stripping UI away.
                    </Header.Subheader>
                </Header>

                <TableSampleStickyColumns />
                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./tableSampleStickyColumns').default}
                </Highlighter>
            </Main.Content>
        </Main>
    );
}
