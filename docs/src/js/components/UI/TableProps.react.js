'use strict';

import 'components/UI/TableProps.scss';

import _ from 'lodash';
import React from 'react';
import { Table } from 'react-cm-ui';

export default class TableProps extends React.Component {

    render() {

        let TableRowKey = 1;
        let TableRows = _.map(this.props.props, (p, i) => {
            return (
                <Table.Row key={`table-props-row-key${TableRowKey++}`}>
                    <Table.Cell className="table-cell-name">
                        <code>{p.name}</code>

                        <dl className="mobile-info">
                            <dt>Name</dt>
                            <dd>
                                <code>{p.name}</code>
                            </dd>

                            <dt>Type</dt>
                            <dd>{p.type}</dd>

                            {p.default ? [
                                <dt key={`dt-default-${i}`}>Default</dt>,
                                <dd key={`dd-default-${i}`}>{p.default}</dd>
                            ] : null}

                            <dt>Description</dt>
                            <dd>
                                {p.description}
                                {p.allowedTypes ? (
                                    <p className="allowed-types">
                                        <span className="type">{`${p.type}s:`}</span> {p.allowedTypes}
                                    </p>
                                ) : null}
                            </dd>
                        </dl>
                    </Table.Cell>
                    <Table.Cell width={false} laptop={true}>{p.type}</Table.Cell>
                    <Table.Cell width={false} laptop={true}>{p.default}</Table.Cell>
                    <Table.Cell width={false} laptop={true}>
                        <p>{p.description}</p>
                        {p.allowedTypes ? (
                            <p className="allowed-types">
                                <span className="type">{`${p.type}s:`}</span> {p.allowedTypes}
                            </p>
                        ) : null}
                    </Table.Cell>
                </Table.Row>
            );
        });

        let newStyle = _.assign(this.props.style, {
            backgroundColor: 'transparent'
        })

        return (
            <div className="table-props">
                <Table basic={true} fontSize="xsmall" stretch="very" style={newStyle}>
                    <Table.Header width={false} laptop={true}>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Default</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {TableRows}
                    </Table.Body>
                </Table>
            </div>
        );
    }

}

TableProps.propTypes = {
    props: React.PropTypes.array.isRequired,
    style: React.PropTypes.object
};
