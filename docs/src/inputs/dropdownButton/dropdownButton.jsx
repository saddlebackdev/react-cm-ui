/* eslint-disable global-require */
/* eslint-disable import/no-webpack-loader-syntax */

/* eslint-disable import/no-unresolved */
import {
    Card,
    Header,
    Typography,
} from '@saddlebackchurch/react-cm-ui';
/* eslint-enable import/no-unresolved */
import _ from 'lodash';
import React from 'react';
import { buttonDocProps } from '../button/buttonConstants';
import DropdownButtonExample from './examples/dropdownButtonExample';
import DropdownButtonStopPropagationExample from './examples/dropdownButtonStopPropagationExample';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import Example from '../../global/example';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

function DocsDropdownButton() {
    let tableProps = _.filter(buttonDocProps, (prop) => (
        prop.name !== 'as' &&
        prop.name !== 'icon' &&
        prop.name !== 'href' &&
        prop.name !== 'onClick'
    ));
    tableProps = [
        ...tableProps,
        {
            name: 'iconSize',
            type: 'number',
            default: 16,
            description: 'The icon that sits to the left of the label.',
        }, {
            name: 'iconType',
            type: 'caret-down<br />| chevron-down<br />| ellipsis-h<br />| plus',
            default: 'chevron-down',
            description: 'The icon that sits to the left of the label.',
        }, {
            name: 'label',
            type: 'string',
            default: '',
            description: 'The label.',
        }, {
            name: 'optionsTheme',
            type: 'string',
            default: 'dark',
            description: 'Options list theme',
        }, {
            name: 'stopPropagation',
            type: 'bool',
            default: 'false',
            description: 'Calls stopPropagation',
        },

    ];
    tableProps = _.sortBy(tableProps, ['name']);

    return (
        <Main page="headers">
            <Main.Content>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={tableProps} />
                </Card>

                <Heading
                    anchorLink="basic-dropdown"
                    variant="h2"
                >
                    Simple Dropdown Button
                </Heading>
                <p />

                <DropdownButtonExample />

                <Highlighter language="jsx">
                    {require('!!raw-loader!./examples/dropdownButtonExample').default}
                </Highlighter>

                <Heading
                    anchorLink="basic-dropdown"
                    variant="h2"
                >
                    Stop Propagation
                </Heading>
                <p />

                <Typography
                    variant="body1"
                >
                    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                    Calls <code>stopPropagation</code>.
                </Typography>
                <p />

                <Example
                    rawCode={require('!!raw-loader!./examples/dropdownButtonStopPropagationExample').default}
                >
                    <DropdownButtonStopPropagationExample />
                </Example>
            </Main.Content>
        </Main>
    );
}

export default DocsDropdownButton;
