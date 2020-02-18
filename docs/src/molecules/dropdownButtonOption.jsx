/* eslint-disable global-require */
/* eslint-disable import/no-webpack-loader-syntax */

import {
    Card,
    Header,
    TitleBar,
} from 'react-cm-ui';
import _ from 'lodash';
import React from 'react';
import DocsDropdownButtonSubNavigation from './dropdownButtonSubNavigation';
import Main from '../global/main';
import TableProps from '../global/tableProps';

function DocsDropdownButtonOption() {
    const tableProps = [
        {
            name: 'children',
            type: 'node',
            default: '',
            description: 'The children.',
        }, {
            name: 'className',
            type: 'string',
            default: '',
            description: 'Additional classes.',
        }, {
            name: 'disable',
            type: 'bool',
            default: 'false',
            description: 'An option can be disabled.',
            allowedTypes: '',
        }, {
            name: 'id',
            type: 'string',
            default: '',
            description: 'Assign the option an id.',
            allowedTypes: '',
        }, {
            name: 'label',
            type: 'string',
            default: '',
            description: 'The label.',
        }, {
            name: 'onClick',
            type: 'function',
            default: '() => {}',
            description: 'Called after the end-user\'s click.',
            allowedTypes: '',
        }, {
            name: 'onKeyDown',
            type: 'function',
            default: '() => {}',
            description: 'Called after the end-user\'s key press.',
            allowedTypes: '',
        }, {
            name: 'style',
            type: 'object',
            default: '',
            description: 'Supply any inline styles to the Option\'s container. Mainly used for padding and margins.',
            allowedTypes: '',
        }, {
            name: 'tabIndex',
            type: 'number',
            default: '-1',
            description: 'An option can receive focus.',
            allowedTypes: '',
        },
    ];

    return (
        <Main page="headers">
            <TitleBar title="Dropdown Button" />

            <DocsDropdownButtonSubNavigation />

            <Main.Content>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={tableProps} />
                </Card>
            </Main.Content>
        </Main>
    );
}

export default DocsDropdownButtonOption;
