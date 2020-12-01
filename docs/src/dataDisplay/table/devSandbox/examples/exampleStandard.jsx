import { Table } from 'react-cm-ui';
import React from 'react';

function ExampleStandard() {
    return (
        <Table basic>
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
    );
}

export default ExampleStandard;
