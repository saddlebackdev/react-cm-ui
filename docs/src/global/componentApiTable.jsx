/* eslint-disable react/no-danger */

// import './ComponentApiTable.scss';

import {
    isEmpty,
    map,
} from 'lodash';
import { Table } from 'react-cm-ui';
import ClassNames from 'classnames';
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

function getTypeName(type) {
    let allowedTypesString;
    let unionString;
    let arrayOfString;
    let shapeString;

    // console.log('type', type);
    // console.log('type.name', type.name);
    switch (type.name) {
        case 'arrayOf':
            // console.log('arrayOf type', type);
            arrayOfString = map(type.value, (typeValue) => {
                // console.log('typeValue', typeValue);
                return getTypeName({
                    name: typeValue,

                });
            });

            return `arrayOf: [ ${arrayOfString} ]`;
        case 'enum':
            allowedTypesString = map(type.value, (typeValue) => (
                `${typeValue.value.replace(/['"]+/g, '')}`
            )).join(' | ');

            return allowedTypesString;
        case 'shape':
            // console.log('shape type', type);

            if (type.value) {
                shapeString = map(type.value, (typeValue, key) => {
                    console.log('typeValue', typeValue);
                    return JSON.stringify(getTypeName(typeValue));
                }).join(', ');
            }

            // console.log(`shape: { ${shapeString || ''} }`);

            return `shape: { ${shapeString || ''} }`;
        case 'union':
            unionString = map(type.value, (typeValue) => (
                `${typeValue.name.replace(/['"]+/g, '')}`
            )).join(' | ');

            return unionString;
        default:
            return type.name;
    }
}

function ComponentApiTable(props) {
    const { componentProps, style } = props;
    const bemBlockName = 'table_props';
    const containerClasses = ClassNames(bemBlockName);
    let TableRowKey = 1;
    console.log('componentProps', componentProps);

    const TableRows = map(componentProps, (componentProp, key) => {
        TableRowKey += 1;
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
            <Table.Row key={`${bemBlockName}--props_row_key-${TableRowKey}`}>
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
