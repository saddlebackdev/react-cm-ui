/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
/* eslint-disable import/no-webpack-loader-syntax */

import {
    Card,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ActivityIndicatorExample from './activityIndicatorExample';
import ActivityIndicatorClassNameExample from './activityIndicatorClassNameExample';
import ActivityIndicatorColorExample from './activityIndicatorColorExample';
import ActivityIndicatorIdExample from './activityIndicatorIdExample';
import ActivityIndicatorSizeExample from './activityIndicatorSizeExample';
import ActivityIndicatorStyleExample from './activityIndicatorStyleExample';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

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
            <Main.Content>
                <Card>
                    <Typography size="large">Props</Typography>

                    <TableProps props={props} />
                </Card>

                {/* Activity Indicators */}
                <Typography anchor="activityIndicator" variant="h2" style={{ marginTop: '55px' }} sub>
                    Activity Indicator
                </Typography>

                <Typography variant="body1">
                    <p style={{ marginTop: 0 }}>
                        An activity indicator cycles through bars while loading or synchronizing
                        data is being performed.
                    </p>
                </Typography>

                <ActivityIndicatorExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }} language="jsx">
                    {require('!!raw-loader!./activityIndicatorExample').default}
                </Highlighter>

                {/* className */}
                <Typography anchor="className" variant="h2" style={{ marginTop: '55px' }} sub>
                    className
                </Typography>

                <Typography variant="body1">
                    <p style={{ marginTop: 0 }}>
                        Use the <code>className</code> prop to pass a block and element class
                        name (e.g. <code>foo_block_name--bar_element_name</code>)
                        to Activity Indicator. This needs to be unique.
                    </p>
                </Typography>

                <ActivityIndicatorClassNameExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./activityIndicatorClassNameExample').default}
                </Highlighter>

                {/* color */}
                <Typography anchor="color" variant="h2" style={{ marginTop: '55px' }} sub>
                    color
                </Typography>

                <Typography variant="body1">
                    <p style={{ marginTop: 0 }}>
                        Use the <code>color</code> prop to better fit how the Activity
                        Indicator should be displayed relavant location with the webapp.
                    </p>
                </Typography>

                <ActivityIndicatorColorExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./activityIndicatorColorExample').default}
                </Highlighter>

                {/* id */}
                <Typography anchor="id" variant="h2" style={{ marginTop: '55px' }} sub>
                    id
                </Typography>

                <Typography variant="body1">
                    <p style={{ marginTop: 0 }}>
                        Use the <code>id</code> prop to pass a block and element class
                        name (e.g. <code>foo_block_name--bar_element_name</code>)
                        to Activity Indicator. This needs to be unique and always implemented.
                    </p>
                </Typography>

                <ActivityIndicatorIdExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./activityIndicatorIdExample').default}
                </Highlighter>

                {/* size */}
                <Typography anchor="size" variant="h2" style={{ marginTop: '55px' }} sub>
                    size
                </Typography>

                <Typography variant="body1">
                    <p style={{ marginTop: 0 }}>
                        Use the <code>size</code> prop to change the size of the Activity Indicator
                        when needed to suit the needs of your relavant location within the app.
                    </p>
                </Typography>

                <ActivityIndicatorSizeExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./activityIndicatorSizeExample').default}
                </Highlighter>

                {/* style */}
                <Typography anchor="style" variant="h2" style={{ marginTop: '55px' }} sub>
                    style
                </Typography>

                <Typography variant="body1">
                    <p style={{ marginTop: 0 }}>
                        Use the <code>style</code> prop to pass some inline styles to the
                        container. Only to be used when needed based on its relavant
                        location within the app.
                    </p>
                </Typography>

                <ActivityIndicatorStyleExample />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {require('!!raw-loader!./activityIndicatorStyleExample').default}
                </Highlighter>
            </Main.Content>
        </Main>
    );
}

export default ElementsActivityIndicator;
