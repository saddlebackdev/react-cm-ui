/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable global-require */

import React, {
    useState,
} from 'react';
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
    const [stickyColumns, setStickyColumns] = useState(1);
    console.log('COLS', stickyColumns);
    return (
        <Main page="headers">
            <TitleBar title="Table" />

            <Main.Content>
                {/* <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={propDefinitions} />
                </Card> */}

                {/* Table */}
                {/* <TableSample /> */}

                {/* Basic Table */}
                {/* <TableSampleBasic /> */}

                {/* Celled Table */}
                {/* <TableSampleCelled /> */}

                {/* Collapsing Table */}
                {/* <TableSampleCollapsing /> */}

                {/* Definition Table */}
                {/* <TableSampleDefinition /> */}

                {/* Fixed Table */}
                {/* <TableSampleFixed /> */}

                {/* Font Size */}
                {/* <TableSampleFontSize /> */}

                {/* Full Width Table */}
                {/* <TableSampleFullWidth /> */}

                {/* Selectable Table */}
                {/* <TableSampleSelectable /> */}

                {/* Single Line Table */}
                {/* <TableSampleSingleLine /> */}

                {/* Size */}
                {/* <TableSampleSize /> */}

                {/* Stretch Table */}
                {/* <TableSampleStretch /> */}

                {/* Striped Table */}
                {/* <TableSampleStriped /> */}

                {/* Active */}
                {/* <TableSampleActive /> */}

                {/* Disabled */}
                {/* <TableSampleDisabled /> */}

                {/* Text Align */}
                {/* <TableSampleTextAlign /> */}

                {/* Vertical Align */}
                {/* <TableSampleVerticalAlign /> */}

                {/* onClick Event Handler Samples */}
                {/* <TableSampleOnClick /> */}

                {/* Responsive Width */}
                {/* <TableSampleResponsiveWidth /> */}

                {/* Drag and Drop Row Reordering */}
                {/* <TableSampleDragAndDropRowReordering /> */}
                <input 
                    type="number" 
                    max={10} 
                    min={0} 
                    onChange={({target}) => {
                        setStickyColumns(parseInt(target.value));
                    }}
                    style={{
                        position: 'fixed',
                        top: 80,
                        right: 20,
                    }}
                    value={stickyColumns}
                />
                <Header anchor="basic-table" size="large" style={{ marginTop: '55px' }} sub>
                    Sticky Columns
                    {/* <Header.Subheader>
                        A table can be more basic, stripping UI away.
                    </Header.Subheader> */}
                </Header>
                
                <h1>Basics</h1>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic /> 
                <h2>Celled</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic celled/>
                <h2>fixed</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic fixed/>
                <h2>fixed single line</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic fixed singleLine/>
                <h2>Collapsing</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic collapsing={true}/>
                <h2>Definition</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic definition/>
                <h2>Fullwidth</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic definition fullwidth/>
                <h2>stretch</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic stretch/>
                <h2>stretch very</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic stretch="very"/>
                <h2>selectable</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic selectable/>
                <h2>striped</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} basic striped/>

                <h1>Defaults</h1>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns}/>
                <h2>Celled</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} celled/>
                <h2>fixed</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} fixed/>
                <h2>fixed single line</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} fixed singleLine/>
                <h2>Collapsing</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} collapsing={true}/>
                <h2>Definition</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} definition/>
                <h2>Fullwidth</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} definition fullWidth/>
                <h2>stretch</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} stretch/>
                <h2>stretch very</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} stretch="very"/>
                <h2>selectable</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} selectable/>
                <h2>striped</h2>
                <TableSampleStickyColumns stickyColumnCount={stickyColumns} striped/>
                
                {/* <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./tableSampleStickyColumns').default}
                </Highlighter> */}
            </Main.Content>
        </Main>
    );
}
