'use strict';

import { ActivityIndicator, Card, Header, TitleBar } from 'react-cm-ui';
import { borderColor } from 'shared/styles/colors.scss';
import Highlighter from '../app/highlighter.js';
import Main from '../app/main.js';
import React from 'react';
import TableProps from '../app/tableProps.js';

const activityIndicatorSample = `import { ActivityIndicator } from 'react-cm-ui';
import React from 'react';

class ActivityIndicatorSample extends React.PureComponent {
    render() {
        return (
            <div>
                <ActivityIndicator />
            </div>
        );
    }
}

export default ActivityIndicatorSample;`;

const classNameSample = `import { ActivityIndicator } from 'react-cm-ui';
import React from 'react';

class ClassNameSample extends React.PureComponent {
    render() {
        return (
            <ActivityIndicator className="foo_block_name--bar_element_name" />
        );
    }
}

export default ClassNameSample;`;

const colorSample = `import { ActivityIndicator } from 'react-cm-ui';
import { borderColor } from 'shared/styles/colors.scss';
import React from 'react';

class ColorSample extends React.PureComponent {
    render() {
        return (
            <ActivityIndicator color="backgroundColorHighlight" /><br /><br />
            <ActivityIndicator color="backgroundColorStatic" />
        );
    }
}

export default ColorSample;`;

const idSample = `import { ActivityIndicator } from 'react-cm-ui';
import React from 'react';

class IDSample extends React.PureComponent {
    render() {
        return (
            <ActivityIndicator id="foo_block_name--bar_element_name" />
        );
    }
}

export default IDSample;`;

const sizeSample = `import { ActivityIndicator } from 'react-cm-ui';
import React from 'react';

class SizeSample extends React.PureComponent {
    render() {
        return (
            <ActivityIndicator size={48} />
        );
    }
}

export default SizeSample;`;

const styleSample = `import { ActivityIndicator } from 'react-cm-ui';
import React from 'react';

class StyleSample extends React.PureComponent {
    render() {
        return (
            <ActivityIndicator
                style={{
                    // hopefully you never need to do this! But here it is. :)
                    boxShadow: \`0 0 0 10px \${borderColor}\`,
                    margin: '22px',
                }}
            />
        );
    }
}

export default StyleSample;`;

class ElementsActivityIndicator extends React.PureComponent {
    render() {
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
                            An activity indicator cycles through bars while loading or synchronizing data is being
                            performed.
                        </p>
                    </Header.Subheader>
                </Header>

                <ActivityIndicator />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {activityIndicatorSample}
                </Highlighter>

                {/* className */}
                <Header anchor="className" size="large" style={{ marginTop: '55px' }} sub>
                    className
                    <Header.Subheader>
                        <p style={{ marginTop: 0 }}>
                            Use the <code>className</code> prop to pass a block and element class name (e.g. <code>foo_block_name--bar_element_name</code>)
                            to Activity Indicator. This needs to be unique.
                        </p>
                    </Header.Subheader>
                </Header>

                <ActivityIndicator className="foo_block_name--bar_element_name" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {classNameSample}
                </Highlighter>

                {/* color */}
                <Header anchor="color" size="large" style={{ marginTop: '55px' }} sub>
                    color
                    <Header.Subheader>
                        <p style={{ marginTop: 0 }}>
                            Use the <code>color</code> prop to better fit how the Activity Indicator should be displayed
                            relavant location with the webapp.
                        </p>
                    </Header.Subheader>
                </Header>

                <ActivityIndicator color="backgroundColorHighlight" /><br /><br />
                <ActivityIndicator color="backgroundColorStatic" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {colorSample}
                </Highlighter>

                {/* id */}
                <Header anchor="id" size="large" style={{ marginTop: '55px' }} sub>
                    id
                    <Header.Subheader>
                        <p style={{ marginTop: 0 }}>
                            Use the <code>id</code> prop to pass a block and element class name (e.g. <code>foo_block_name--bar_element_name</code>)
                            to Activity Indicator. This needs to be unique and always implemented.
                        </p>
                    </Header.Subheader>
                </Header>

                <ActivityIndicator id="foo_block_name--bar_element_name" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {idSample}
                </Highlighter>

                {/* size */}
                <Header anchor="size" size="large" style={{ marginTop: '55px' }} sub>
                    size
                    <Header.Subheader>
                        <p style={{ marginTop: 0 }}>
                            Use the <code>size</code> prop to change the size of the Activity Indicator when needed to
                            suit the needs of your relavant location within the app.
                        </p>
                    </Header.Subheader>
                </Header>

                <ActivityIndicator size={48} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {sizeSample}
                </Highlighter>

                {/* style */}
                <Header anchor="style" size="large" style={{ marginTop: '55px' }} sub>
                    style
                    <Header.Subheader>
                        <p style={{ marginTop: 0 }}>
                            Use the <code>style</code> prop to pass some inline styles to the container. Only to be used
                            when needed based on its relavant location within the app.
                        </p>
                    </Header.Subheader>
                </Header>

                <ActivityIndicator
                    style={{
                        boxShadow: `0 0 0 10px ${borderColor}`,
                        margin: '22px',
                    }}
                />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {styleSample}
                </Highlighter>
            </Main>
        );
    }
}

export default ElementsActivityIndicator;
