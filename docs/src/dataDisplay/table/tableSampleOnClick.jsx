import { Table } from 'react-cm-ui';
import React from 'react';

class TableSampleOnClick extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        window.alert('Clayton Kershaw!'); // eslint-disable-line no-alert
    }

    render() {
        return (
            <Table basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell onClick={this.onClick}>Header 1</Table.HeaderCell>
                        <Table.HeaderCell onClick={this.onClick}>Header 2</Table.HeaderCell>
                        <Table.HeaderCell onClick={this.onClick}>Header 3</Table.HeaderCell>
                        <Table.HeaderCell onClick={this.onClick}>Header 4</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row onClick={this.onClick}>
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
}

export default TableSampleOnClick;
