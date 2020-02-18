/* eslint-disable global-require */
/* eslint-disable import/no-webpack-loader-syntax */

import {
    Card,
    Header,
    TitleBar,
} from 'react-cm-ui';
import _ from 'lodash';
import React from 'react';
import { buttonDocProps } from '../atoms/buttonConstants';
import DocsDropdownButtonSubNavigation from './dropdownButtonSubNavigation';
import DropdownButtonExample from './dropdownButtonExample';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

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
        },
    ];
    tableProps = _.sortBy(tableProps, ['name']);

    return (
        <Main page="headers">
            <TitleBar title="Dropdown Button" />

            <DocsDropdownButtonSubNavigation />

            <Main.Content>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={tableProps} />
                </Card>

                <DropdownButtonExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }} language="jsx">
                    {require('!!raw-loader!./dropdownButtonExample').default}
                </Highlighter>
            </Main.Content>
        </Main>
    );
}

export default DocsDropdownButton;
