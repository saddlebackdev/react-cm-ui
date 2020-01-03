import React from 'react';
import {
    Header,
    Table,
} from 'react-cm-ui';
import Highlighter from '../../app/highlighter';

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

function TableSampleSize() {
    return (
        <React.Fragment>
            <Header anchor="size" size="large" style={{ marginTop: '55px' }} sub>
                Size
                <Header.Subheader>
                    A table&rsquo;s default cell size can be changed.
                </Header.Subheader>
            </Header>

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
        </React.Fragment>
    );
}

export default TableSampleSize;
