import {
    capitalize,
    isString,
    lowerCase,
    map,
} from 'lodash';
import {
    Table,
    Tooltip,
    Typography,
} from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import { DOCS_PROPS_PROP_TYPE } from './componentApiConstants';
import MarkdownContainer from './markdownContainer';
import { REPLACE_BACKTICKS_WITH_TAG } from './utils';

const propTypes = {
    componentProps: DOCS_PROPS_PROP_TYPE.isRequired,
    style: PropTypes.shape({}),
};

const defaultProps = {
    style: null,
};

const getPropTypeString = (type) => {
    const shape = type.value;
    const rst = {};

    switch (lowerCase(type.name)) {
        case 'instanceof':
            return `Class(${type.value})`;
        case 'enum':
            if (type.computed) {
                return type.value;
            }

            return type.value ?
                type.value.map((v) => `${v.value}`).join(' │ ') :
                type.raw;
        case 'union':
            return type.value ?
                type.value.map((t) => `${getPropTypeString(t)}`).join(' │ ') :
                type.raw;
        case 'array':
            return type.raw;
        case 'arrayof':
            return `Array<${getPropTypeString(type.value)}>`;
        case 'custom':
            if (type.raw.indexOf('function') !== -1 || type.raw.indexOf('=>') !== -1) {
                return 'Custom(Function)';
            }

            if (type.raw.toLowerCase().indexOf('objectof') !== -1) {
                const RE_OBJECTOF = /(?:React\.)?(?:PropTypes\.)?objectOf\((?:React\.)?(?:PropTypes\.)?(\w+)\)/;
                const m = type.raw.match(RE_OBJECTOF);

                if (m && m[1]) {
                    return `ObjectOf(${capitalize(m[1])})`;
                }

                return 'ObjectOf';
            }

            return 'Custom';
        case 'bool':
            return 'Boolean';
        case 'func':
            return 'Function';
        case 'shape':
            Object.keys(shape).forEach((key) => {
                rst[key] = getPropTypeString(shape[key]);
            });

            return JSON.stringify(rst, null, 2);
        default:
            return capitalize(type.name);
    }
};

const getPropType = (classes, componentProp) => {
    const {
        flowType,
        type,
    } = componentProp;

    const propName = flowType ? flowType.name : type.name;
    const isEnum = propName.startsWith('"') || propName === 'enum';
    const name = capitalize(isEnum ? 'enum' : propName);
    const value = type && type.value;

    if (!name) {
        return null;
    }

    if (
        (isEnum && isString(value)) ||
        (!flowType && !isEnum && !value) ||
        (flowType && !flowType.elements)
    ) {
        return (
            <Typography
                color="textPrimary"
                variant="inherit"
            >
                {name}
            </Typography>
        );
    }

    return (
        <Tooltip
            title={getPropTypeString(flowType || type)}
        >
            <Typography
                className={classes.tooltipLink}
                variant="inherit"
            >
                {name}
            </Typography>
        </Tooltip>
    );
};

const useStyles = makeStyles((theme) => {
    const {
        palette,
        typography,
    } = theme;

    return {
        tooltipLink: {
            color: palette.text.link,
            cursor: 'pointer',
            fontWeight: typography.fontWeightMedium,
        },
    };
});

function ComponentApiTable(props) {
    const classes = useStyles();
    const { componentProps, style } = props;

    const TableRows = map(componentProps, (componentProp, key) => {
        const {
            defaultValue,
            description,
            required,
        } = componentProp;

        let name = key;

        if (required) {
            name += '*';
        }

        return (
            <Table.Row key={`table_props--props_row_key-${key}`}>
                <Table.Cell>
                    <span
                        className="prop_name"
                    >
                        {name}
                    </span>
                </Table.Cell>

                <Table.Cell>
                    <span
                        className="prop_name"
                    >
                        {getPropType(classes, componentProp)}
                    </span>
                </Table.Cell>

                <Table.Cell>
                    {defaultValue && defaultValue.value && (
                        <span
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: defaultValue.value }}
                        />
                    )}
                </Table.Cell>

                <Table.Cell>
                    <p
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: description && REPLACE_BACKTICKS_WITH_TAG(description),
                        }}
                    />
                </Table.Cell>
            </Table.Row>
        );
    });

    return (
        <MarkdownContainer>
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
        </MarkdownContainer>
    );
}

ComponentApiTable.propTypes = propTypes;
ComponentApiTable.defaultProps = defaultProps;

export default ComponentApiTable;
