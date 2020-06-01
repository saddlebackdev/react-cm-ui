import React from 'react';
import {
    Header,
    Table,
} from 'react-cm-ui';
import Highlighter from '../../global/highlighter';

const verticalAlignSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class VerticalAlignSample extends React.Component {
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
                        <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                    </Table.Row>

                    <Table.Row verticalAlign="top">
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}`;

function TableSampleVerticalAlign() {
    return (
        <React.Fragment>
            <Header anchor="vertical-align" size="large" style={{ marginTop: '55px' }} sub>
                Vertical Align
                <Header.Subheader>
                    A table&rsquo;s row or cell&rsquo;s vertical alignment can be changed.
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

            <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                {verticalAlignSample}
            </Highlighter>
        </React.Fragment>
    );
}

export default TableSampleVerticalAlign;
