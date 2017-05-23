'use strict';

import React from 'react';

// Docs UI Components
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

// CM App UI Components
import Card from 'components/UI/Views/Card.react';
import Header from 'components/UI/Elements/Header.react';
import HeaderSubheader from 'components/UI/Elements/HeaderSubheader.react';
import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';
import TitleBar from 'components/UI/Views/TitleBar.react';

const tableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class TableSample extends React.Component {

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const basicTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class BasicTableSample extends React.Component {

    render() {
        return (
            <Table basic={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const celledTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class CelledTableSample extends React.Component {

    render() {
        return (
            <Table celled={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const celledBasicTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class CelledBasicTableSample extends React.Component {

    render() {
        return (
            <Table basic={true} celled={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const collapsingTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class CollapsingTableSample extends React.Component {

    render() {
        return (
            <Table collapsing={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const definitionTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class DefinitionTableSample extends React.Component {

    render() {
        return (
            <Table definition={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell />
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const definitionBasicTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class DefinitionBasicTableSample extends React.Component {

    render() {
        return (
            <Table basic={true} definition={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell />
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const fixedTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class FixedTableSample extends React.Component {

    render() {
        return (
            <Table fixed={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const fontSizeTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class FontSizeTableSample extends React.Component {

    render() {
        return (
            <Table basic={true} fontSize="xsmall">
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const fontSizeTableRowSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class FontSizeTableRowSample extends React.Component {

    render() {
        return (
            <Table basic={true}>
                <TableHeader>
                    <TableRow fontSize="xsmall">
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const fontSizeTableCellSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class FontSizeTableCellSample extends React.Component {

    render() {
        return (
            <Table basic={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell fontSize="xsmall">cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell fontSize="xsmall">cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell fontSize="xsmall">cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const fullWidthTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class FullWidthTableSample extends React.Component {

    render() {
        return (
            <Table definition={true} fullWidth={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell />
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const selectableTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class FontSizeTableCellSample extends React.Component {

    render() {
        return (
            <Table basic={true} selectable={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const singleLineTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class FontSizeTableCellSample extends React.Component {

    render() {
        return (
            <Table basic={true} fixed={true} singleLine={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const stretchTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class StretchTableSample extends React.Component {

    render() {
        return (
            <Table basic={true} stretch={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const stretchVeryTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class FontSizeTableCellSample extends React.Component {

    render() {
        return (
            <Table basic={true} stretch="very">
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const stripedTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class StripedTableSample extends React.Component {

    render() {
        return (
            <Table striped={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const activeTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class ActiveTableSample extends React.Component {

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell active={true}>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow active={true}>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const disabledTableSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class ActiveTableSample extends React.Component {

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell disabled={true}>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow disabled={true}>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const textAlignSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class TextAlignSample extends React.Component {

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell textAlign="right">Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell textAlign="right">cell</TableCell>
                    </TableRow>

                    <TableRow textAlign="center">
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell textAlign="right">cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell textAlign="right">cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const verticalAlignSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class VerticalAlignSample extends React.Component {

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell verticalAlign="bottom">cell</TableCell>
                    </TableRow>

                    <TableRow verticalAlign="top">
                        <TableCell>cell</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell verticalAlign="bottom">cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell verticalAlign="bottom">cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const tableHeaderCellOnClickSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class TableHeaderCellOnClickSample extends React.Component {

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell onClick={this._onClick.bind(this)}>Header 1</TableHeaderCell>
                        <TableHeaderCell onClick={this._onClick.bind(this)}>Header 2</TableHeaderCell>
                        <TableHeaderCell onClick={this._onClick.bind(this)}>Header 3</TableHeaderCell>
                        <TableHeaderCell onClick={this._onClick.bind(this)}>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const tableRowOnClickSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class TableRowOnClickSample extends React.Component {

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Header 1</TableHeaderCell>
                        <TableHeaderCell>Header 2</TableHeaderCell>
                        <TableHeaderCell>Header 3</TableHeaderCell>
                        <TableHeaderCell>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow onClick={this._onClick.bind(this)}>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                        <TableCell>cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

}`;

const responsiveWidthSample = `import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class ResponsiveWidthSample extends React.Component {

    render() {
        return (
            <Table basic={true} fixed={true} singleLine={true}>
                <TableHeader width={false} tablet={true}>
                    <TableRow>
                        <TableHeaderCell width={2} laptop={3}>Header 1</TableHeaderCell>
                        <TableHeaderCell width={11} laptop={3}>Header 2</TableHeaderCell>
                        <TableHeaderCell width={false} laptop={3}>Header 3</TableHeaderCell>
                        <TableHeaderCell width={false} laptop={3}>Header 4</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell width={2} laptop={3}>cell</TableCell>
                        <TableCell width={11} laptop={3}>cell</TableCell>
                        <TableCell width={false} laptop={3}>cell</TableCell>
                        <TableCell width={false} laptop={3}>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell width={2} laptop={3}>cell</TableCell>
                        <TableCell width={11} laptop={3}>cell</TableCell>
                        <TableCell width={false} laptop={3}>cell</TableCell>
                        <TableCell width={false} laptop={3}>cell</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell width={2} laptop={3}>cell</TableCell>
                        <TableCell width={11} laptop={3}>cell</TableCell>
                        <TableCell width={false} laptop={3}>cell</TableCell>
                        <TableCell width={false} laptop={3}>cell</TableCell>
                    </TableRow>
                </TableBody>
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
                allowedTypes: 'h1, h2, h3, h4, h5, h6'
            }, {
                name: 'celled',
                type: 'bool',
                default: 'false',
                description: 'Primary content.',
                allowedTypes: ''
            }, {
                name: 'children',
                type: 'node',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Color of the header.',
                allowedTypes: ''
            }, {
                name: 'collapsing',
                type: 'bool',
                default: 'false',
                description: 'Headers may be formatted with an icon to floated to the left.',
                allowedTypes: ''
            }, {
                name: 'definition',
                type: 'bool',
                default: 'false',
                description: 'Headers can be formatted to appear on dark backgrounds better.',
                allowedTypes: ''
            }, {
                name: 'fixed',
                type: 'bool',
                default: 'false',
                description: 'Content headings are sized with em and are based on the font-size of their container.',
                allowedTypes: ''
            }, {
                name: 'fontSize',
                type: 'enum',
                default: '',
                description: 'Supply any inline styles to the Header\'s container. Mainly used for padding and margins.',
                allowedTypes: 'large, medium, small, xlarge, xsmall, xxsmall'
            }, {
                name: 'fullWidth',
                type: 'bool',
                default: 'false',
                description: 'Headers may be formatted with a subheader',
                allowedTypes: ''
            }, {
                name: 'selectable',
                type: 'bool',
                default: 'false',
                description: 'Headers may be formatted with a subheader',
                allowedTypes: ''
            }, {
                name: 'singleLine',
                type: 'bool',
                default: 'false',
                description: 'Headers may be formatted with a subheader',
                allowedTypes: ''
            }, {
                name: 'stackable',
                type: 'bool',
                default: 'false',
                description: 'Headers may be formatted with a subheader',
                allowedTypes: ''
            }, {
                name: 'stretch',
                type: 'bool or enum',
                default: '',
                description: 'Headers may be formatted with a subheader',
                allowedTypes: 'very'
            }, {
                name: 'striped',
                type: 'bool',
                default: 'false',
                description: 'Headers may be formatted with a subheader',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Headers may be formatted with a subheader',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Table" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Table
                    <HeaderSubheader>
                        A standard table.
                    </HeaderSubheader>
                </Header>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {tableSample}
                </Highlighter>

                {/* Basic Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Basic Table
                    <HeaderSubheader>
                        A table can be more basic, stripping UI away.
                    </HeaderSubheader>
                </Header>

                <Table basic={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {basicTableSample}
                </Highlighter>

                {/* Celled Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Celled Table
                    <HeaderSubheader>
                        A table's cells can be devided.
                    </HeaderSubheader>
                </Header>

                <Table celled={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {celledTableSample}
                </Highlighter>

                <Table basic={true} celled={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {celledBasicTableSample}
                </Highlighter>

                {/* Collapsing Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Collapsing Table
                    <HeaderSubheader>
                        A table can be collapsing.
                    </HeaderSubheader>
                </Header>

                <Table collapsing={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {collapsingTableSample}
                </Highlighter>

                {/* Definition Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Definition Table
                    <HeaderSubheader>
                        A table may be formatted to emphasize a first column that defines a row content.
                    </HeaderSubheader>
                </Header>

                <Table definition={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell />
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {definitionTableSample}
                </Highlighter>

                <Table basic={true} definition={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell />
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {definitionBasicTableSample}
                </Highlighter>

                {/* Fixed Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Fixed Table
                    <HeaderSubheader>
                        A table column's width can be evenly spaced.
                    </HeaderSubheader>
                </Header>

                <Table fixed={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fixedTableSample}
                </Highlighter>

                {/* Font Size */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Font Size
                    <HeaderSubheader>
                        A table's default font size can be changed.
                    </HeaderSubheader>
                </Header>

                <Header size="small" sub={true}>
                    Font Size Table
                </Header>

                <Table basic={true} fontSize="xsmall">
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fontSizeTableSample}
                </Highlighter>

                <Header size="small" sub={true}>
                    Font Size Table Row
                </Header>

                <Table basic={true}>
                    <TableHeader>
                        <TableRow fontSize="xsmall">
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fontSizeTableRowSample}
                </Highlighter>

                <Header size="small" sub={true}>
                    Font Size Table Cell
                </Header>

                <Table basic={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell fontSize="xsmall">cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell fontSize="xsmall">cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell fontSize="xsmall">cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fontSizeTableCellSample}
                </Highlighter>

                {/* Full Width Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Full Width Table
                    <HeaderSubheader>
                        A table, along with <code>definition</code> enabled, can have a full width header, filling in the gap left by the first column.
                    </HeaderSubheader>
                </Header>

                <Table definition={true} fullWidth={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell />
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fullWidthTableSample}
                </Highlighter>

                {/* Selectable Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Selectable Table
                    <HeaderSubheader>
                        A table's rows can appear to be selectable when rolling over them.
                    </HeaderSubheader>
                </Header>

                <Table basic={true} selectable={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {selectableTableSample}
                </Highlighter>

                {/* Single Line Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Single Line Table
                    <HeaderSubheader>
                        A table's cells will not wrap content in them.
                    </HeaderSubheader>
                </Header>

                <p className="font-size-xsmall color-static">
                    <span className="font-weight-semibold">Note:</span> Must have <code>fixed</code> enabled.
                </p>

                <Table basic={true} fixed={true} singleLine={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {singleLineTableSample}
                </Highlighter>

                {/* Stretch Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Stretch Table
                    <HeaderSubheader>
                        A table can be stretched to fill in its container, edge-to-edge.
                    </HeaderSubheader>
                </Header>

                <Header size="small" sub={true}>
                    Stretch: true
                    <HeaderSubheader>
                        11px Stretch
                    </HeaderSubheader>
                </Header>

                <p className="font-size-xsmall color-static">
                    <span className="font-weight-semibold">Note:</span> Wrap the <code>Table</code> in a block container and pass <code>margin: 0 -11px;</code> to the container to go edge-to-edge.
                </p>

                <Table basic={true} stretch={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {stretchTableSample}
                </Highlighter>

                <Header size="small" sub={true}>
                    Stretch: Very
                    <HeaderSubheader>
                        22px Stretch
                    </HeaderSubheader>
                </Header>

                <p className="font-size-xsmall color-static">
                    <span className="font-weight-semibold">Note:</span> Wrap the <code>Table</code> in a block container and pass <code>margin: 0 -22px;</code> to the container to go edge-to-edge.
                </p>

                <Table basic={true} stretch="very">
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {stretchVeryTableSample}
                </Highlighter>

                {/* Striped Table */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Striped Table
                    <HeaderSubheader>
                        A table's rows can be striped, alternating rows with slightly darker background color.
                    </HeaderSubheader>
                </Header>

                <Table striped={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {stripedTableSample}
                </Highlighter>

                {/* Active */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Active
                    <HeaderSubheader>
                        A table's row or cell can be active.
                    </HeaderSubheader>
                </Header>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell active={true}>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow active={true}>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {activeTableSample}
                </Highlighter>

                {/* Disabled */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Disabled
                    <HeaderSubheader>
                        A table's row or cell can be disabled.
                    </HeaderSubheader>
                </Header>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell disabled={true}>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow disabled={true}>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {disabledTableSample}
                </Highlighter>

                {/* Text Align */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Text Align
                    <HeaderSubheader>
                        A table's row or cell's text alignment can be changed.
                    </HeaderSubheader>
                </Header>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell textAlign="right">Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell textAlign="right">cell</TableCell>
                        </TableRow>

                        <TableRow textAlign="center">
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell textAlign="right">cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell textAlign="right">cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {textAlignSample}
                </Highlighter>

                {/* Vertical Align */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Vertical Align
                    <HeaderSubheader>
                        A table's row or cell's vertical alignment can be changed.
                    </HeaderSubheader>
                </Header>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell verticalAlign="bottom">cell</TableCell>
                        </TableRow>

                        <TableRow verticalAlign="top">
                            <TableCell>cell</TableCell>
                            <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell verticalAlign="bottom">cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell verticalAlign="bottom">cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {verticalAlignSample}
                </Highlighter>

                {/* Table Header Cell onClick Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Table Header Cell onClick Event Handler
                    <HeaderSubheader>
                        A table header cell can handle an onClick event.
                    </HeaderSubheader>
                </Header>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell onClick={this._onClick.bind(this)}>Header 1</TableHeaderCell>
                            <TableHeaderCell onClick={this._onClick.bind(this)}>Header 2</TableHeaderCell>
                            <TableHeaderCell onClick={this._onClick.bind(this)}>Header 3</TableHeaderCell>
                            <TableHeaderCell onClick={this._onClick.bind(this)}>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {tableHeaderCellOnClickSample}
                </Highlighter>

                {/* Table Row onClick Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Table Row onClick Event Handler
                    <HeaderSubheader>
                        A table row cell can handle an onClick event.
                    </HeaderSubheader>
                </Header>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Header 1</TableHeaderCell>
                            <TableHeaderCell>Header 2</TableHeaderCell>
                            <TableHeaderCell>Header 3</TableHeaderCell>
                            <TableHeaderCell>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow onClick={this._onClick.bind(this)}>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                            <TableCell>cell</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {tableRowOnClickSample}
                </Highlighter>

                {/* Responsive Width */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Responsive Width
                    <HeaderSubheader>
                        A table header cell and table ceel can specify a width for a specific device.
                    </HeaderSubheader>
                </Header>

                <Table basic={true} fixed={true} singleLine={true}>
                    <TableHeader width={false} tablet={true}>
                        <TableRow>
                            <TableHeaderCell width={2} laptop={3}>Header 1</TableHeaderCell>
                            <TableHeaderCell width={11} laptop={3}>Header 2</TableHeaderCell>
                            <TableHeaderCell width={false} laptop={3}>Header 3</TableHeaderCell>
                            <TableHeaderCell width={false} laptop={3}>Header 4</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell width={2} laptop={3}>cell</TableCell>
                            <TableCell width={11} laptop={3}>cell</TableCell>
                            <TableCell width={false} laptop={3}>cell</TableCell>
                            <TableCell width={false} laptop={3}>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell width={2} laptop={3}>cell</TableCell>
                            <TableCell width={11} laptop={3}>cell</TableCell>
                            <TableCell width={false} laptop={3}>cell</TableCell>
                            <TableCell width={false} laptop={3}>cell</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell width={2} laptop={3}>cell</TableCell>
                            <TableCell width={11} laptop={3}>cell</TableCell>
                            <TableCell width={false} laptop={3}>cell</TableCell>
                            <TableCell width={false} laptop={3}>cell</TableCell>
                        </TableRow>
                    </TableBody>
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
