import React from 'react';
import {
    Header,
    Table,
} from 'react-cm-ui';
import Highlighter from '../../global/highlighter';

const TableHeaderCellOnClickSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class TableHeaderCellOnClickSample extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        // ... do whatever the clicks are supposed to do ...
    }

    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell onClick={this.onClick}>Header 1</Table.HeaderCell>
                        <Table.HeaderCell onClick={this.onClick}>Header 2</Table.HeaderCell>
                        <Table.HeaderCell onClick={this.onClick}>Header 3</Table.HeaderCell>
                        <Table.HeaderCell onClick={this.onClick}>Header 4</Table.HeaderCell>
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

const TableRowOnClickSample = `import React from 'react';
import { Table } from 'react-cm-ui';

export default class TableRowOnClickSample extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        // ... do whatever the clicks are supposed to do ...
    }

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
}`;

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
            <React.Fragment>
                {/* Table Header Cell onClick Event Handler */}
                <Header anchor="on-click-header-cell" size="large" style={{ marginTop: '55px' }} sub>
                    Table Header Cell onClick Event Handler
                    <Header.Subheader>
                        A table header cell can handle an onClick event.
                    </Header.Subheader>
                </Header>

                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell onClick={this.onClick}>Header 1</Table.HeaderCell>
                            <Table.HeaderCell onClick={this.onClick}>Header 2</Table.HeaderCell>
                            <Table.HeaderCell onClick={this.onClick}>Header 3</Table.HeaderCell>
                            <Table.HeaderCell onClick={this.onClick}>Header 4</Table.HeaderCell>
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
                    {TableHeaderCellOnClickSample}
                </Highlighter>

                {/* Table Row onClick Event Handler */}
                <Header anchor="on-click-row" size="large" style={{ marginTop: '55px' }} sub>
                    Table Row onClick Event Handler
                    <Header.Subheader>
                        A table row cell can handle an onClick event.
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

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {TableRowOnClickSample}
                </Highlighter>
            </React.Fragment>
        );
    }
}

export default TableSampleOnClick;
