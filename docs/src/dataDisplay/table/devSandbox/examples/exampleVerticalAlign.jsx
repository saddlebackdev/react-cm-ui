import { Table } from 'react-cm-ui';
import React from 'react';

function ExampleVerticalAlign() {
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
                    <Table.Cell>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </Table.Cell>
                    <Table.Cell>cell</Table.Cell>
                    <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                </Table.Row>

                <Table.Row verticalAlign="top">
                    <Table.Cell>cell</Table.Cell>
                    <Table.Cell>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </Table.Cell>
                    <Table.Cell>cell</Table.Cell>
                    <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>cell</Table.Cell>
                    <Table.Cell>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </Table.Cell>
                    <Table.Cell>cell</Table.Cell>
                    <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
}

export default ExampleVerticalAlign;
