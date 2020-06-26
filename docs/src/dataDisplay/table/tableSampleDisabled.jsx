import { Table } from 'react-cm-ui';
import React from 'react';

function TableSampleDisabled() {
    return (
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
                    <Table.Cell disable>cell</Table.Cell>
                    <Table.Cell>cell</Table.Cell>
                </Table.Row>

                <Table.Row disable>
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

export default TableSampleDisabled;
