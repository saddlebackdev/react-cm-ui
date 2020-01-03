import React from 'react';
import {
    Header,
    Table,
} from 'react-cm-ui';
import Highlighter from '../../app/highlighter';

const singleLineTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class SingleLineTableSample extends React.Component {
    render() {
        return (
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
        );
    }
}`;

function TableSampleSingleLine() {
    return (
        <React.Fragment>
            <Header anchor="single-line" size="large" style={{ marginTop: '55px' }} sub>
                Single Line Table
                <Header.Subheader>
                    A table&rsquo;s cells will not wrap content in them.
                </Header.Subheader>
            </Header>

            <p className="font-size-xsmall color-static">
                <span className="font-weight-semibold">Note:</span>
                &nbsp;
                Must have
                <code>fixed</code>
                enabled.
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
                        <Table.Cell>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </Table.Cell>
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
        </React.Fragment>
    );
}

export default TableSampleSingleLine;
