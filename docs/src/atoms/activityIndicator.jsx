/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
/* eslint-disable import/no-webpack-loader-syntax */

import {
    Card,
    Header,
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import ActivityIndicatorExample from './activityIndicatorExample';
import ActivityIndicatorClassNameExample from './activityIndicatorClassNameExample';
import ActivityIndicatorColorExample from './activityIndicatorColorExample';
import ActivityIndicatorIdExample from './activityIndicatorIdExample';
import ActivityIndicatorSizeExample from './activityIndicatorSizeExample';
import ActivityIndicatorStyleExample from './activityIndicatorStyleExample';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

function ElementsActivityIndicator() {
    const props = [
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

    return (
        <Main page="headers">
            <TitleBar title="Activity Indicator" />

            <Card>
                <Header size="large">Props</Header>

                <TableProps props={props} />
            </Card>

            {/* Activity Indicators */}
            <Header anchor="activityIndicator" size="large" style={{ marginTop: '55px' }} sub>
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
            </Highlighter>

            {/* className */}
            <Header anchor="className" size="large" style={{ marginTop: '55px' }} sub>
                className
                <Header.Subheader>
                    <p style={{ marginTop: 0 }}>
                        Use the <code>className</code> prop to pass a block and element class
                        name (e.g. <code>foo_block_name--bar_element_name</code>)
                        to Activity Indicator. This needs to be unique.
                    </p>
                </Header.Subheader>
            </Header>

            <ActivityIndicatorClassNameExample />

            <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                {require('!!raw-loader!./activityIndicatorClassNameExample').default}
            </Highlighter>

            {/* color */}
            <Header anchor="color" size="large" style={{ marginTop: '55px' }} sub>
                color
                <Header.Subheader>
                    <p style={{ marginTop: 0 }}>
                        Use the <code>color</code> prop to better fit how the Activity
                        Indicator should be displayed relavant location with the webapp.
                    </p>
                </Header.Subheader>
            </Header>

            <ActivityIndicatorColorExample />

            <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                {require('!!raw-loader!./activityIndicatorColorExample').default}
            </Highlighter>

            {/* id */}
            <Header anchor="id" size="large" style={{ marginTop: '55px' }} sub>
                id
                <Header.Subheader>
                    <p style={{ marginTop: 0 }}>
                        Use the <code>id</code> prop to pass a block and element class
                        name (e.g. <code>foo_block_name--bar_element_name</code>)
                        to Activity Indicator. This needs to be unique and always implemented.
                    </p>
                </Header.Subheader>
            </Header>

            <ActivityIndicatorIdExample />

            <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                {require('!!raw-loader!./activityIndicatorIdExample').default}
            </Highlighter>

            {/* size */}
            <Header anchor="size" size="large" style={{ marginTop: '55px' }} sub>
                size
                <Header.Subheader>
                    <p style={{ marginTop: 0 }}>
                        Use the <code>size</code> prop to change the size of the Activity Indicator
                        when needed to suit the needs of your relavant location within the app.
                    </p>
                </Header.Subheader>
            </Header>

            <ActivityIndicatorSizeExample />

            <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                {require('!!raw-loader!./activityIndicatorSizeExample').default}
            </Highlighter>

            {/* style */}
            <Header anchor="style" size="large" style={{ marginTop: '55px' }} sub>
                style
                <Header.Subheader>
                    <p style={{ marginTop: 0 }}>
                        Use the <code>style</code> prop to pass some inline styles to the
                        container. Only to be used when needed based on its relavant
                        location within the app.
                    </p>
                </Header.Subheader>
            </Header>

            <ActivityIndicatorStyleExample />

            <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                {require('!!raw-loader!./activityIndicatorStyleExample').default}
            </Highlighter>
        </Main>
    );
}

export default ElementsActivityIndicator;
