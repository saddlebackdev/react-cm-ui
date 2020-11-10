/* eslint-disable react/no-danger */

import { Table } from 'react-cm-ui';
import _ from 'lodash';
import ClassNames from 'classnames';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape({
        allowedTypes: PropTypes.string,
        default: PropTypes.string,
        description: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
    })).isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    style: {},
};

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '11px -22px 0',
        [theme.breakpoints.up(1024)]: {
            margin: 'calc(2rem - .14285em) -22px 0',
            '& .allowed-types': {
                marginTop: 11,
            },
            '& .table_props--table_cell_name > .table_props--prop_name': {
                display: 'block',
            },
            '& .table_props--mobile_info': {
                display: 'none',
            },
        },
        '& .ui.table': {
            borderCollapse: 'separate',
            borderSpacing: 0,
            fontSize: theme.typography.pxToRem(16),
            textAlign: 'left',
            width: '100%',
        },
        '& th, & td': {
            fontWeight: theme.typography.fontWeightBold,
            padding: 11,
            '&:first-child': {
                paddingLeft: 0,
            },
            '&:last-child': {
                paddingRight: 0,
            },
        },
        '& p': {
            margin: 0,
        },
        '& .table_props--allowed_types': {
            color: theme.palette.text.secondary,
            marginTop: 4,
            '& .type': {
                fontWeight: theme.typography.fontWeightMedium,
                textTransform: 'capitalize',
            },
        },
        '& td': {
            fontSize: theme.typography.pxToRem(14),
            fontWeight: theme.typography.fontWeightRegular,
        },
        '& .table_props--table_cell_name > code': {
            display: 'none',
        },
        '& .table_props--mobile_info': {
            margin: 0,
            padding: 0,
            '& dd, & dt': {
                margin: 0,
                padding: 0,
            },
            '& dt': {
                color: theme.palette.text.secondary,
                fontSize: theme.typography.pxToRem(14),
                fontWeight: theme.typography.fontWeightMedium,
                margin: '11px 0 1px',
                '&:first-child': {
                    marginTop: 0,
                },
            },
            '& code': {
                marginLeft: '-3px',
            },
        },
        '& .table_props--prop_name, & .table_props--prop_type, & .table_props--prop_default': {
            fontFamily: 'monospace',
            fontSize: '90%',
            padding: '2px 0',
        },
        '& .table_props--table_cell_name > .table_props--prop_name': {
            display: 'none',
        },
    },
}));

function TableProps(props) {
    const {
        props: componentProps,
        style,
    } = props;

    const classes = useStyles();

    const bemBlockName = 'table_props';

    const rootClasses = ClassNames(
        bemBlockName,
        classes.root,
    );

    let TableRowKey = 1;

    const TableRows = _.map(componentProps, (componentProp, index) => {
        TableRowKey += 1;
        const { description } = componentProp;

        return (
            <Table.Row
                key={`${bemBlockName}--props_row_key-${TableRowKey}`}
            >
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
        <div
            className={rootClasses}
        >
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
