import {
    Card,
    Header,
    PersonAccordion,
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

const api = [
    {
        name: 'className',
        type: 'string',
        default: '',
        description: 'Assign additional class names to the container.',
        allowedTypes: '',
    }, {
        name: 'color',
        type: 'enum',
        default: 'backgroundColorHighlight',
        description: 'Assign an ID.',
        allowedTypes: 'backgroundColorHighlight, backgroundColorStatic',
    }, {
        name: 'id',
        type: 'string',
        default: '',
        description: 'Assign an ID to the container.',
        allowedTypes: '',
    }, {
        name: 'size',
        type: 'number',
        default: '68',
        description: 'Changes the size.',
        allowedTypes: '',
    }, {
        name: 'style',
        type: 'object',
        default: '{}',
        description: 'Assign inline styles the container.',
        allowedTypes: '',
    },
];

function DocsPersonAccordion() {
    return (
        <Main page="headers">
            <TitleBar title="Person Accordion" />

            <Main.Content>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={api} />
                </Card>

                <PersonAccordion>
                    hello world
                </PersonAccordion>

                {/* Activity Indicators */}
                {/* <Header anchor="activityIndicator" size="large" style={{ marginTop: '55px' }} sub>
                    Activity Indicator
                    <Header.Subheader>
                        <p style={{ marginTop: 0 }}>
                            An activity indicator cycles through bars while loading or synchronizing
                            data is being performed.
                        </p>
                    </Header.Subheader>
                </Header>

                <ActivityIndicatorExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }} language="jsx">
                    {require('!!raw-loader!./activityIndicatorExample').default}
                </Highlighter> */}
            </Main.Content>
        </Main>
    );
}

export default DocsPersonAccordion;
