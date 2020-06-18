/* eslint-disable react/no-danger */

// import './ComponentApiTable.scss';

import {
    map,
} from 'lodash';
import { Table } from 'react-cm-ui';
import PropTypes from 'prop-types';
import React from 'react';
import { DOCS_PROPS_PROP_TYPE } from './componentApiConstants';

const propTypes = {
    componentProps: DOCS_PROPS_PROP_TYPE.isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    style: {},
};

function ComponentApiTable(props) {
    const { componentProps, style } = props;
    const bemBlockName = 'table_props';

    const TableRows = map(componentProps, (componentProp, index) => {
        const {
            defaultValue,
            description,
            required,
            type,
        } = componentProp;
        let name = key;

        if (required) {
            name += '*';
        }

        return (
            <Table.Row key={`${bemBlockName}--props_row_key-${index}`}>
                <Table.Cell>
                    {name}
                </Table.Cell>

                <Table.Cell>
                    <span
                        dangerouslySetInnerHTML={{ __html: type.name }}
                    />
                </Table.Cell>

                <Table.Cell>
                    {defaultValue && defaultValue.value && (
                        <span
                            dangerouslySetInnerHTML={{ __html: defaultValue.value }}
                        />
                    )}
                </Table.Cell>

                <Table.Cell>
                    <p
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </Table.Cell>
            </Table.Row>
        );
    });

    return (
        <Table
            basic
            stretch="very"
            style={{
                backgroundColor: 'transparent',
                ...style,
            }}
        >
            <Table.Header>
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
    );
}

ComponentApiTable.propTypes = propTypes;
ComponentApiTable.defaultProps = defaultProps;

export default ComponentApiTable;
