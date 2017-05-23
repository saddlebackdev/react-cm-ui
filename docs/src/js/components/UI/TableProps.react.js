'use strict';

import 'components/UI/TableProps.scss';

import _ from 'lodash';
import React from 'react';

import Table from 'components/UI/Collections/Table.react';
import TableBody from 'components/UI/Collections/TableBody.react';
import TableCell from 'components/UI/Collections/TableCell.react';
import TableHeader from 'components/UI/Collections/TableHeader.react';
import TableHeaderCell from 'components/UI/Collections/TableHeaderCell.react';
import TableRow from 'components/UI/Collections/TableRow.react';

export default class TableProps extends React.Component {

    render() {

        let tableRowKey = 1;
        let tableRows = _.map(this.props.props, (p, i) => {
            return (
                <TableRow key={`table-props-row-key${tableRowKey++}`}>
                    <TableCell className="table-cell-name">
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
                    </TableCell>
                    <TableCell width={false} laptop={true}>{p.type}</TableCell>
                    <TableCell width={false} laptop={true}>{p.default}</TableCell>
                    <TableCell width={false} laptop={true}>
                        <p>{p.description}</p>
                        {p.allowedTypes ? (
                            <p className="allowed-types">
                                <span className="type">{`${p.type}s:`}</span> {p.allowedTypes}
                            </p>
                        ) : null}
                    </TableCell>
                </TableRow>
            );
        });

        let newStyle = _.assign(this.props.style, {
            backgroundColor: 'transparent'
        })

        return (
            <div className="table-props">
                <Table basic={true} fontSize="xsmall" stretch="very" style={newStyle}>
                    <TableHeader width={false} laptop={true}>
                        <TableRow>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Type</TableHeaderCell>
                            <TableHeaderCell>Default</TableHeaderCell>
                            <TableHeaderCell>Description</TableHeaderCell>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
            </div>
        );
    }

}

TableProps.propTypes = {
    props: React.PropTypes.array.isRequired,
    style: React.PropTypes.object
};
