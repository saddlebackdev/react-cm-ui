import { map } from 'lodash';
import { Table } from 'react-cm-ui';
import React from 'react';
import ExampleRowWithDragAndDrop from './exampleRowWithDragAndDrop';

class ExampleDragAndDropRowReordering extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            tableData: [
                {
                    classification: 'Alpha',
                    id: 1,
                    name: 'Foo',
                    order: 1,
                }, {
                    classification: 'Beta',
                    id: 2,
                    name: 'Bar',
                    order: 2,
                }, {
                    classification: 'Gamma',
                    id: 3,
                    name: 'Baz',
                    order: 3,
                }, {
                    classification: 'Delta',
                    id: 4,
                    name: 'Quux',
                    order: 4,
                }, {
                    classification: 'Epsilon',
                    id: 5,
                    name: 'Thud',
                    order: 5,
                },
            ],
        };

        this.onReorderTableRow = this.onReorderTableRow.bind(this);
    }

    onReorderTableRow(fromIndex, toIndex) {
        this.setState((prevState) => {
            const { tableData } = prevState;
            const updatedTableData = _.cloneDeep(tableData);
            const item = updatedTableData.splice(fromIndex, 1)[0];
            updatedTableData.splice(toIndex, 0, item);

            for (let index = 0; index < updatedTableData.length; ++index) { // eslint-disable-line no-plusplus
                updatedTableData[index].order = index + 1;
            }

            return { tableData: updatedTableData };
        });
    }

    render() {
        const { tableData } = this.state;

        return (
            <Table basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Order</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Classification</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {map(tableData, (tableRowData, index) => (
                        <ExampleRowWithDragAndDrop
                            index={index}
                            key={`row-data-item-${tableRowData.id}`}
                            onReorder={this.onReorderTableRow}
                            tableRowData={tableRowData}
                        />
                    ))}
                </Table.Body>
            </Table>
        );
    }
}

export default ExampleDragAndDropRowReordering;
