import React from 'react';
import {
    Header,
    Table,
} from 'react-cm-ui';
import Highlighter from '../../app/highlighter';

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

function TableSampleTextAlign() {
    return (
        <React.Fragment>
            <Header anchor="text-align" size="large" style={{ marginTop: '55px' }} sub>
                Text Align
                <Header.Subheader>
                    A table&rsquo;s row or cell&rsquo;s text alignment can be changed.
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
        </React.Fragment>
    );
}

export default TableSampleTextAlign;
