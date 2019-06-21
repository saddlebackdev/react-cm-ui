'use strict';

import { Card, Header, Table, TitleBar } from 'react-cm-ui';
import Highlighter from '../app/highlighter.js';
import Main from '../app/main.js';
import React from 'react';
import TableProps from '../app/tableProps.js';

const tableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class TableSample extends React.Component {

    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const basicTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class BasicTableSample extends React.Component {

    render() {
        return (
            <Table basic={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const celledTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class CelledTableSample extends React.Component {

    render() {
        return (
            <Table celled={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const celledBasicTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class CelledBasicTableSample extends React.Component {

    render() {
        return (
            <Table basic={true} celled={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const collapsingTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class CollapsingTableSample extends React.Component {

    render() {
        return (
            <Table collapsing={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const definitionTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class DefinitionTableSample extends React.Component {

    render() {
        return (
            <Table definition={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const definitionBasicTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class DefinitionBasicTableSample extends React.Component {

    render() {
        return (
            <Table basic={true} definition={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const fixedTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class FixedTableSample extends React.Component {

    render() {
        return (
            <Table fixed={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const fontSizeTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class FontSizeTableSample extends React.Component {

    render() {
        return (
            <Table basic={true} fontSize="xsmall">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const fontSizeTableRowSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class fontSizeTableRowSample extends React.Component {

    render() {
        return (
            <Table basic={true}>
                <Table.Header>
                    <Table.Row fontSize="xsmall">
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const fontSizeTableCellSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class fontSizeTableCellSample extends React.Component {

    render() {
        return (
            <Table basic={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell fontSize="xsmall">cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell fontSize="xsmall">cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell fontSize="xsmall">cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const fullWidthTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class FullWidthTableSample extends React.Component {

    render() {
        return (
            <Table definition={true} fullWidth={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const selectableTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class fontSizeTableCellSample extends React.Component {

    render() {
        return (
            <Table basic={true} selectable={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const singleLineTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class fontSizeTableCellSample extends React.Component {

    render() {
        return (
            <Table basic={true} fixed={true} singleLine={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const sizeSmallTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class SizeSmallTableSample extends React.Component {

    render() {
        return (
            <Table basic size="small">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const sizeMediumTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class SizeMediumTableSample extends React.Component {

    render() {
        return (
            <Table basic size="medium">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const stretchTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class StretchTableSample extends React.Component {

    render() {
        return (
            <Table basic={true} stretch={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const stretchVeryTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class fontSizeTableCellSample extends React.Component {

    render() {
        return (
            <Table basic={true} stretch="very">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const stripedTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class StripedTableSample extends React.Component {

    render() {
        return (
            <Table striped={true}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const activeTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class ActiveTableSample extends React.Component {

    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell active={true}>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row active={true}>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const disabledTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class ActiveTableSample extends React.Component {

    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell disabled={true}>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row disabled={true}>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const textAlignSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class TextAlignSample extends React.Component {

    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell textAlign="right">Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell textAlign="right">cell</Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign="center">
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell textAlign="right">cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell textAlign="right">cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const verticalAlignSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class VerticalAlignSample extends React.Component {

    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign="top">
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const TableHeaderCellOnClickSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class TableHeaderCellOnClickSample extends React.Component {

    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell onClick={this._onClick.bind(this)}>Header 1</Table.HeaderCell>
                        <Table.HeaderCell onClick={this._onClick.bind(this)}>Header 2</Table.HeaderCell>
                        <Table.HeaderCell onClick={this._onClick.bind(this)}>Header 3</Table.HeaderCell>
                        <Table.HeaderCell onClick={this._onClick.bind(this)}>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const TableRowOnClickSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class TableRowOnClickSample extends React.Component {

    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row onClick={this._onClick.bind(this)}>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

const responsiveWidthSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class ResponsiveWidthSample extends React.Component {

    render() {
        return (
            <Table basic={true} fixed={true} singleLine={true}>
                <Table.Header width={false} tablet={true}>
                    <Table.Row>
                        <Table.HeaderCell width={2} laptop={3}>Header 1</Table.HeaderCell>
                        <Table.HeaderCell width={11} laptop={3}>Header 2</Table.HeaderCell>
                        <Table.HeaderCell width={false} laptop={3}>Header 3</Table.HeaderCell>
                        <Table.HeaderCell width={false} laptop={3}>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell width={2} laptop={3}>cell</Table.Cell>
                        <Table.Cell width={11} laptop={3}>cell</Table.Cell>
                        <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                        <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell width={2} laptop={3}>cell</Table.Cell>
                        <Table.Cell width={11} laptop={3}>cell</Table.Cell>
                        <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                        <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell width={2} laptop={3}>cell</Table.Cell>
                        <Table.Cell width={11} laptop={3}>cell</Table.Cell>
                        <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                        <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

}`;

export default class CollectionsTable extends React.Component {
    render() {
        const props = [
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

        return (
            <Main page="headers">
                <TitleBar title="Table" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Table
                    <Header.Subheader>
                        A standard table.
                    </Header.Subheader>
                </Header>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell id="header_1">Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {tableSample}
                </Highlighter>

                {/* Basic Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Basic Table
                    <Header.Subheader>
                        A table can be more basic, stripping UI away.
                    </Header.Subheader>
                </Header>

                <Table basic>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {basicTableSample}
                </Highlighter>

                {/* Celled Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Celled Table
                    <Header.Subheader>
                        A table's cells can be devided.
                    </Header.Subheader>
                </Header>

                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {celledTableSample}
                </Highlighter>

                <Table basic celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {celledBasicTableSample}
                </Highlighter>

                {/* Collapsing Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Collapsing Table
                    <Header.Subheader>
                        A table can be collapsing.
                    </Header.Subheader>
                </Header>

                <Table collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {collapsingTableSample}
                </Highlighter>

                {/* Definition Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Definition Table
                    <Header.Subheader>
                        A table may be formatted to emphasize a first column that defines a row content.
                    </Header.Subheader>
                </Header>

                <Table definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {definitionTableSample}
                </Highlighter>

                <Table basic definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {definitionBasicTableSample}
                </Highlighter>

                {/* Fixed Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Fixed Table
                    <Header.Subheader>
                        A table column's width can be evenly spaced.
                    </Header.Subheader>
                </Header>

                <Table fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fixedTableSample}
                </Highlighter>

                {/* Font Size */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Font Size
                    <Header.Subheader>
                        A table's default font size can be changed.
                    </Header.Subheader>
                </Header>

                <Header size="small" sub>
                    Font Size Table
                </Header>

                <Table basic fontSize="xsmall">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fontSizeTableSample}
                </Highlighter>

                <Header size="small" sub>
                    Font Size Table Row
                </Header>

                <Table basic>
                    <Table.Header>
                        <Table.Row fontSize="xsmall">
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fontSizeTableRowSample}
                </Highlighter>

                <Header size="small" sub>
                    Font Size Table Cell
                </Header>

                <Table basic>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell fontSize="xsmall">cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell fontSize="xsmall">cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell fontSize="xsmall">cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fontSizeTableCellSample}
                </Highlighter>

                {/* Full Width Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Full Width Table
                    <Header.Subheader>
                        A table, along with <code>definition</code> enabled, can have a full width header, filling in the gap left by the first column.
                    </Header.Subheader>
                </Header>

                <Table definition fullWidth>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fullWidthTableSample}
                </Highlighter>

                {/* Selectable Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Selectable Table
                    <Header.Subheader>
                        A table's rows can appear to be selectable when rolling over them.
                    </Header.Subheader>
                </Header>

                <Table basic selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {selectableTableSample}
                </Highlighter>

                {/* Single Line Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Single Line Table
                    <Header.Subheader>
                        A table's cells will not wrap content in them.
                    </Header.Subheader>
                </Header>

                <p className="font-size-xsmall color-static">
                    <span className="font-weight-semibold">Note:</span> Must have <code>fixed</code> enabled.
                </p>

                <Table basic fixed singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {singleLineTableSample}
                </Highlighter>

                {/* Size */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Size
                    <Header.Subheader>
                        A table's default cell size can be changed.
                    </Header.Subheader>
                </Header>

                <p className="font-size-xsmall color-static">
                    <span className="font-weight-semibold">Note:</span> Must have <code>fixed</code> enabled.
                </p>

                <Header size="small">Small</Header>

                <Table basic size="small">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {sizeSmallTableSample}
                </Highlighter>

                <Header size="small">Medium</Header>

                <Table basic size="medium">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {sizeMediumTableSample}
                </Highlighter>

                {/* Stretch Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Stretch Table
                    <Header.Subheader>
                        A table can be stretched to fill in its container, edge-to-edge.
                    </Header.Subheader>
                </Header>

                <Header size="small" sub>
                    Stretch: true
                    <Header.Subheader>
                        11px Stretch
                    </Header.Subheader>
                </Header>

                <p className="font-size-xsmall color-static">
                    <span className="font-weight-semibold">Note:</span> Wrap the <code>Table</code> in a block container and pass <code>margin: 0 -11px;</code> to the container to go edge-to-edge.
                </p>

                <Table basic stretch>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {stretchTableSample}
                </Highlighter>

                <Header size="small" sub>
                    Stretch: Very
                    <Header.Subheader>
                        22px Stretch
                    </Header.Subheader>
                </Header>

                <p className="font-size-xsmall color-static">
                    <span className="font-weight-semibold">Note:</span> Wrap the <code>Table</code> in a block container and pass <code>margin: 0 -22px;</code> to the container to go edge-to-edge.
                </p>

                <Table basic stretch="very">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {stretchVeryTableSample}
                </Highlighter>

                {/* Striped Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Striped Table
                    <Header.Subheader>
                        A table's rows can be striped, alternating rows with slightly darker background color.
                    </Header.Subheader>
                </Header>

                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {stripedTableSample}
                </Highlighter>

                {/* Active */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Active
                    <Header.Subheader>
                        A table's row or cell can be active.
                    </Header.Subheader>
                </Header>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell active>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row active>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {activeTableSample}
                </Highlighter>

                {/* Disabled */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Disabled
                    <Header.Subheader>
                        A table's row or cell can be disabled.
                    </Header.Subheader>
                </Header>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell disabled>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row disabled>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disabledTableSample}
                </Highlighter>

                {/* Text Align */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Text Align
                    <Header.Subheader>
                        A table's row or cell's text alignment can be changed.
                    </Header.Subheader>
                </Header>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell textAlign="right">Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell textAlign="right">cell</Table.Cell>
                        </Table.Row>

                        <Table.Row textAlign="center">
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell textAlign="right">cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell textAlign="right">cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {textAlignSample}
                </Highlighter>

                {/* Vertical Align */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Vertical Align
                    <Header.Subheader>
                        A table's row or cell's vertical alignment can be changed.
                    </Header.Subheader>
                </Header>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                        </Table.Row>

                        <Table.Row verticalAlign="top">
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {verticalAlignSample}
                </Highlighter>

                {/* Table Header Cell onClick Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Table Header Cell onClick Event Handler
                    <Header.Subheader>
                        A table header cell can handle an onClick event.
                    </Header.Subheader>
                </Header>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell onClick={this._onClick.bind(this)}>Header 1</Table.HeaderCell>
                            <Table.HeaderCell onClick={this._onClick.bind(this)}>Header 2</Table.HeaderCell>
                            <Table.HeaderCell onClick={this._onClick.bind(this)}>Header 3</Table.HeaderCell>
                            <Table.HeaderCell onClick={this._onClick.bind(this)}>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {TableHeaderCellOnClickSample}
                </Highlighter>

                {/* Table Row onClick Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Table Row onClick Event Handler
                    <Header.Subheader>
                        A table row cell can handle an onClick event.
                    </Header.Subheader>
                </Header>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Header 1</Table.HeaderCell>
                            <Table.HeaderCell>Header 2</Table.HeaderCell>
                            <Table.HeaderCell>Header 3</Table.HeaderCell>
                            <Table.HeaderCell>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row onClick={this._onClick.bind(this)}>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                            <Table.Cell>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {TableRowOnClickSample}
                </Highlighter>

                {/* Responsive Width */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Responsive Width
                    <Header.Subheader>
                        A table header cell and table ceel can specify a width for a specific device.
                    </Header.Subheader>
                </Header>

                <Table basic fixed singleLine>
                    <Table.Header width={false} tablet>
                        <Table.Row>
                            <Table.HeaderCell width={2} laptop={3}>Header 1</Table.HeaderCell>
                            <Table.HeaderCell width={11} laptop={3}>Header 2</Table.HeaderCell>
                            <Table.HeaderCell width={false} laptop={3}>Header 3</Table.HeaderCell>
                            <Table.HeaderCell width={false} laptop={3}>Header 4</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell width={2} laptop={3}>cell</Table.Cell>
                            <Table.Cell width={11} laptop={3}>cell</Table.Cell>
                            <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                            <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={2} laptop={3}>cell</Table.Cell>
                            <Table.Cell width={11} laptop={3}>cell</Table.Cell>
                            <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                            <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={2} laptop={3}>cell</Table.Cell>
                            <Table.Cell width={11} laptop={3}>cell</Table.Cell>
                            <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                            <Table.Cell width={false} laptop={3}>cell</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {responsiveWidthSample}
                </Highlighter>
            </Main>
        );
    }

    _onClick() {
        window.alert('Clayton Kershaw!');
    }
}
