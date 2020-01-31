import {
    Card,
    Header,
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import Main from '../app/main';
import PageSubNavigation from './pageSubNavigation';
import TableProps from '../app/tableProps';

function ModulesPageDataCards() {
    const tableProps = [
        {
            name: 'cardProps',
            type: 'func',
            default: '',
            description: 'Provides extra props for each card.',
        }, {
            name: 'className',
            type: 'string',
            default: '',
            description: 'Override or extend styles with an additional class name(s).',
        }, {
            name: 'columns *',
            type: 'array',
            default: '',
            description: 'Each object is a card that provides the content for the component.',
        }, {
            name: 'data *',
            type: 'array',
            default: '',
            description: 'Each object is the data provided for the card\'s card renderer.',
        }, {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Please don\'t use unless extremly important. Override or extend styles.',
        },
    ];

    return (
        <Main page="headers">
            <TitleBar title="Page" />

            <PageSubNavigation />

            <div>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={tableProps} />
                </Card>
            </div>
        </Main>
    );
}

export default ModulesPageDataCards;
