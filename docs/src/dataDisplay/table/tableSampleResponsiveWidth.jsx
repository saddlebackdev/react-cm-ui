import React from 'react';
import {
    Header,
    Table,
} from 'react-cm-ui';
import Highlighter from '../../global/highlighter';

const responsiveWidthSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class ResponsiveWidthSample extends React.Component {
    render() {
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
}`;

function TableSampleResponsiveWidth() {
    return (
        <React.Fragment>
            <Header anchor="responsive-width" size="large" style={{ marginTop: '55px' }} sub>
                Responsive Width
                <Header.Subheader>
                    A table header cell and table ceel can specify a width
                    for a specific device.
                </Header.Subheader>
            </Header>

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

            <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                {responsiveWidthSample}
            </Highlighter>
        </React.Fragment>
    );
}

export default TableSampleResponsiveWidth;
