import React from 'react';
import {
    Header,
    Table,
} from 'react-cm-ui';
import Highlighter from '../../app/highlighter';

const disabledTableSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class DisbaledTableSample extends React.Component {
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
        );
    }
}`;

function TableSampleDisabled() {
    return (
        <React.Fragment>
            <Header anchor="disabled" size="large" style={{ marginTop: '55px' }} sub>
                Disabled
                <Header.Subheader>
                    A table&rsquo;s row or cell can be disabled.
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
        </React.Fragment>
    );
}

export default TableSampleDisabled;
