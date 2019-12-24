import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Icon, Table } from 'react-cm-ui';

class TableSampleRowWithDragAndDrop extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { isDragging: false };

        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    onDragEnd() {
        this.setState({ isDragging: false });
    }

    /* eslint-disable class-methods-use-this */
    onDragOver(event) {
        event.preventDefault();
    }
    /* eslint-disable class-methods-use-this */

    onDragStart(event) {
        const { index } = this.props;
        this.setState({ isDragging: true });
        event.dataTransfer.setData('text/plain', index);
    }

    onDrop(event) {
        const { index, onReorder } = this.props;
        const previousIndex = +event.dataTransfer.getData('text');
        onReorder(previousIndex, index);
    }

    render() {
        const { tableRowData } = this.props;
        const { isDragging } = this.state;

        return (
            <Table.Row
                draggable
                onDragEnd={this.onDragEnd}
                onDragOver={this.onDragOver}
                onDragStart={this.onDragStart}
                onDrop={this.onDrop}
            >
                <Table.Cell>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <Icon style={{ cursor: isDragging ? 'grabbing' : 'grab' }} title="Reorder" type="splitter" />
                            </Grid.Column>
                            <Grid.Column>
                                <span style={{ fontWeight: 'bold' }}>
                                    {tableRowData.order}
                                </span>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Table.Cell>
                <Table.Cell>
                    {tableRowData.name}
                </Table.Cell>
                <Table.Cell>
                    {tableRowData.classification}
                </Table.Cell>
            </Table.Row>
        );
    }
}

TableSampleRowWithDragAndDrop.propTypes = {
    index: PropTypes.number.isRequired,
    onReorder: PropTypes.func.isRequired,
    tableRowData: PropTypes.shape({
        classification: PropTypes.string,
        name: PropTypes.string,
        order: PropTypes.number,
    }).isRequired,
};

export default TableSampleRowWithDragAndDrop;
