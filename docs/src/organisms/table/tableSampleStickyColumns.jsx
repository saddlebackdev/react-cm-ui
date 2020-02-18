import React from 'react';
import { Table } from 'react-cm-ui';

function TableSampleStickyColumns() {
    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <Table
                basic
                selectable
                singleLine
                stretch
                stickyColumnCount={3}
            >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header 1</Table.HeaderCell>
                        <Table.HeaderCell>Header 2</Table.HeaderCell>
                        <Table.HeaderCell>Header 3</Table.HeaderCell>
                        <Table.HeaderCell>Header 4</Table.HeaderCell>
                        <Table.HeaderCell>Header 5</Table.HeaderCell>
                        <Table.HeaderCell>Header 6</Table.HeaderCell>
                        <Table.HeaderCell>Header 7</Table.HeaderCell>
                        <Table.HeaderCell>Header 8</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}

export default TableSampleStickyColumns;
