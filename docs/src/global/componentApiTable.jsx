import {
    capitalize,
    isString,
    lowerCase,
    map,
    camelCase,
} from 'lodash';
import {
    Table,
    Popover,
    Typography,
} from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import { DOCS_PROPS_PROP_TYPE } from './componentApiConstants';
import MarkdownContainer from './markdownContainer';
import { replaceBackticksWithTag } from './utils';

const propTypes = {
    componentProps: DOCS_PROPS_PROP_TYPE,
    style: PropTypes.shape({}),
};

const defaultProps = {
    componentProps: null,
    style: null,
};

const getPropTypeString = (type) => {
    const shape = type.value;
    const rst = {};

    switch (camelCase(type.name)) {
        case 'instanceOf':
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

        case 'arrayOf':
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

            return JSON.stringify(rst, null, 4);

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
        <Popover
            content={(
                <pre>
                    {getPropTypeString(flowType || type)}
                </pre>
            )}
            width="auto"
        >
            <Typography
                className={classes.tooltipLink}
                variant="inherit"
            >
                {name}
            </Typography>
        </Popover>
    );
};

const useStyles = makeStyles((theme) => {
    const {
        palette,
        typography,
    } = theme;

    return {
        issueMessageContainer: {
            margin: [[0, 22]],
        },
        tooltipLink: {
            color: palette.text.link,
            cursor: 'pointer',
            fontWeight: typography.fontWeightMedium,
        },
    };
});

function ComponentApiTable(props) {
    const { componentProps, style } = props;

    const classes = useStyles();

    return (
        <MarkdownContainer>
            {!componentProps && (
                <div
                    className={classes.issueMessageContainer}
                >
                    <Typography
                        color="textSecondary"
                        variant="body1"
                    >
                        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        Uh-oh! Either react-docgen is failing in returning <code>props</code> or
                        something else clearly went wrong.
                    </Typography>
                </div>
            )}

            {componentProps && (
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
                        {map(componentProps, (componentProp, key) => {
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
                                                __html: description && replaceBackticksWithTag(description),
                                            }}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
            )}
        </MarkdownContainer>
    );
}

ComponentApiTable.propTypes = propTypes;
ComponentApiTable.defaultProps = defaultProps;

export default ComponentApiTable;
