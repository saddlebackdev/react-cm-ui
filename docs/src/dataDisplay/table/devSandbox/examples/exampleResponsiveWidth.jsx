import { Table } from 'react-cm-ui';
import React from 'react';

function ExampleResponsiveWidth() {
    return (
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
    );
}

export default ExampleResponsiveWidth;
