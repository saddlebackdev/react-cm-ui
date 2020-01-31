/* eslint-disable react/no-danger */

import './TableProps.scss';

import _ from 'lodash';
import { Table } from 'react-cm-ui';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
    })).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    style: {},
};

function TableProps(props) {
    const { props: componentProps, style } = props;
    const bemBlockName = 'table_props';
    const containerClasses = ClassNames(bemBlockName);
    let TableRowKey = 1;

    const TableRows = _.map(componentProps, (componentProp, index) => {
        TableRowKey += 1;
        const { description } = componentProp;

        return (
            <Table.Row key={`${bemBlockName}--props_row_key-${TableRowKey}`}>
                <Table.Cell className={`${bemBlockName}--table_cell_name`}>
                    <div className={`${bemBlockName}--prop_name`}>
                        {componentProp.name}
                    </div>

                    <dl className={`${bemBlockName}--mobile_info`}>
                        <dt>Name</dt>

                        <dd>
                            <span
                                className={`${bemBlockName}--prop_name`}
                                dangerouslySetInnerHTML={{ __html: componentProp.name }}
                            />
                        </dd>

                        <dt>Type</dt>

                        <dd>
                            <span
                                className={`${bemBlockName}--prop_type`}
                                dangerouslySetInnerHTML={{ __html: componentProp.type }}
                            />
                        </dd>

                        {componentProp.default ? [
                            <dt key={`dt-default-${index}`}>Default</dt>,
                            <dd
                                key={`dd-default-${index}`}
                            >
                                <span
                                    className={`${bemBlockName}--prop_default`}
                                    dangerouslySetInnerHTML={{ __html: componentProp.default }}
                                />
                            </dd>,
                        ] : null}

                        <dt>Description</dt>

                        <dd>
                            <p
                                className={`${bemBlockName}--prop_description`}
                                dangerouslySetInnerHTML={{ __html: description }}
                            />

                            {componentProp.allowedTypes ? (
                                <p className={`${bemBlockName}--allowed_types`}>
                                    <span className="type">{`${componentProp.type}s:`}</span>
                                    {componentProp.allowedTypes}
                                </p>
                            ) : null}
                        </dd>
                    </dl>
                </Table.Cell>

                <Table.Cell
                    laptop
                    width={false}
                >
                    <span
                        className={`${bemBlockName}--prop_type`}
                        dangerouslySetInnerHTML={{ __html: componentProp.type }}
                    />
                </Table.Cell>

                <Table.Cell
                    laptop
                    width={false}
                >
                    <span
                        className={`${bemBlockName}--prop_default`}
                        dangerouslySetInnerHTML={{ __html: componentProp.default }}
                    />
                </Table.Cell>

                <Table.Cell
                    laptop
                    width={false}
                >
                    <p
                        className={`${bemBlockName}--prop_description`}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />

                    {componentProp.allowedTypes ? (
                        <p className="allowed-types">
                            <span className="type">{`${componentProp.type}s:`}</span>
                            {componentProp.allowedTypes}
                        </p>
                    ) : null}
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

TableProps.propTypes = propTypes;
TableProps.defaultProps = defaultProps;

export default TableProps;
