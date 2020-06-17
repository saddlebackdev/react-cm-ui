/* eslint-disable react/no-danger */

// import './ComponentApiTable.scss';

import {
    map,
} from 'lodash';
import { Table } from 'react-cm-ui';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    componentProps: PropTypes.arrayOf(PropTypes.shape({
        defaultValue: PropTypes.shape({
            computed: PropTypes.bool,
            value: PropTypes.string,
        }),
        description: PropTypes.string,
        required: PropTypes.bool,
        type: PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.arrayOf(PropTypes.shape({
                computed: PropTypes.bool,
                value: PropTypes.string,
            })),
        }),
    })).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    style: {},
};

function ComponentApiTable(props) {
    const { componentProps, style } = props;
    const bemBlockName = 'table_props';
    const containerClasses = ClassNames(bemBlockName);
    let TableRowKey = 1;

    const TableRows = map(componentProps, (componentProp, key) => {
        TableRowKey += 1;
        const {
            defaultValue,
            description,
            type,
        } = componentProp;
        const name = key;
        let typeName;
        let allowedTypesString;
        let unionString;

        switch (type.name) {
            case 'enum':
                allowedTypesString = map(type.value, (typeValue) => (
                    `${typeValue.value.replace(/['"]+/g, '')}`
                )).join(' | ');

                typeName = allowedTypesString;

                break;
            case 'union':
                unionString = map(type.value, (typeValue) => (
                    `${typeValue.name.replace(/['"]+/g, '')}`
                )).join(' | ');

                typeName = unionString;

                break;
            default:
                typeName = type.name;
        }

        return (
            <Table.Row key={`${bemBlockName}--props_row_key-${TableRowKey}`}>
                <Table.Cell className={`${bemBlockName}--table_cell_name`}>
                    <div className={`${bemBlockName}--prop_name`}>
                        {name}
                    </div>

                    <dl className={`${bemBlockName}--mobile_info`}>
                        <dt>Name</dt>

                        <dd>
                            <span
                                className={`${bemBlockName}--prop_name`}
                                dangerouslySetInnerHTML={{ __html: name }}
                            />
                        </dd>

                        <dt>Type</dt>

                        <dd>
                            <span
                                className={`${bemBlockName}--prop_type`}
                                dangerouslySetInnerHTML={{ __html: typeName }}
                            />
                        </dd>

                        {defaultValue && defaultValue.value && [
                            <dt key={`dt-default-${TableRowKey}`}>Default</dt>,
                            <dd
                                key={`dd-default-${TableRowKey}`}
                            >
                                <span
                                    className={`${bemBlockName}--prop_default`}
                                    dangerouslySetInnerHTML={{ __html: defaultValue.value }}
                                />
                            </dd>,
                        ]}

                        <dt>Description</dt>

                        <dd>
                            <p
                                className={`${bemBlockName}--prop_description`}
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        </dd>
                    </dl>
                </Table.Cell>

                <Table.Cell
                    laptop
                    width={false}
                >
                    <span
                        className={`${bemBlockName}--prop_type`}
                        dangerouslySetInnerHTML={{ __html: typeName }}
                    />
                </Table.Cell>

                <Table.Cell
                    laptop
                    width={false}
                >
                    {defaultValue && defaultValue.value && (
                        <span
                            className={`${bemBlockName}--prop_default`}
                            dangerouslySetInnerHTML={{ __html: defaultValue.value }}
                        />
                    )}
                </Table.Cell>

                <Table.Cell
                    laptop
                    width={false}
                >
                    <p
                        className={`${bemBlockName}--prop_description`}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </Table.Cell>
            </Table.Row>
        );
    });

    return (
        <div className={containerClasses}>
            <Table
                basic
                fontSize="xsmall"
                stretch="very"
                style={{
                    backgroundColor: 'transparent',
                    ...style,
                }}
            >
                <Table.Header width={false} laptop>
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

ComponentApiTable.propTypes = propTypes;
ComponentApiTable.defaultProps = defaultProps;

export default ComponentApiTable;
