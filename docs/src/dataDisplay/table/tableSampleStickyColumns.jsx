import React from 'react';
import { Table } from 'react-cm-ui';

function TableSampleStickyColumns(props) {
    const {
        stickyColumnCount,
        definition,
        fullWidth,
        ...restProps
    } = props;
    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <Table
                // basic
                // celled
                // fixed
                // definition
                // collapsing={true}
                // fullWidth

                // fontSize="xsmall"

                // selectable
                // singleLine
                // stretch="very"
                // size='medium'
                // striped
                definition={definition}
                fullWidth={fullWidth}
                {...restProps}
                stickyColumnCount={stickyColumnCount}
            >
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell>{!props.definition ? 'Sticky 1' : ''}</Table.HeaderCell>
                        <Table.HeaderCell>Sticky 2</Table.HeaderCell>
                        <Table.HeaderCell>Sticky 3</Table.HeaderCell>
                        <Table.HeaderCell>Sticky 4</Table.HeaderCell>
                        <Table.HeaderCell>Sticky 5</Table.HeaderCell>
                        <Table.HeaderCell>Sticky 6</Table.HeaderCell>
                        <Table.HeaderCell>Sticky 7</Table.HeaderCell>
                        <Table.HeaderCell>Sticky 8</Table.HeaderCell>
                        <Table.HeaderCell>Sticky 6</Table.HeaderCell>
                        <Table.HeaderCell>Sticky 7</Table.HeaderCell>
                        <Table.HeaderCell>Sticky 8</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell disabled>sticky cell</Table.Cell>
                        <Table.Cell textAlign="right">sticky cell 13</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>sticky cell</Table.Cell>
                        <Table.Cell>sticky cell 23</Table.Cell>
                        <Table.Cell verticalAlign="bottom">cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell verticalAlign="bottom">sticky cell</Table.Cell>
                        <Table.Cell verticalAlign="top">sticky cell</Table.Cell>
                        <Table.Cell>sticky cell 33</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
                        <Table.Cell>cell</Table.Cell>
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
