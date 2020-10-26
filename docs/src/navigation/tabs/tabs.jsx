
import {
    Card, Header, Tabs,
} from 'react-cm-ui';
import React from 'react';
import Block from '../../global/block';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const tabsSample = `import React from 'react';

import TabsItem from '../app/Collections/TabsItem.react';
import Tabs from '../app/Collections/Tabs.react';

export default class TabsSample extends React.Component {

    render() {
        return (
            <Tabs>
                <Tabs.Item label="Tab 1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tempus dui, ac cursus urna. Phasellus eu leo et neque ultrices euismod in in tellus. Ut facilisis quis neque vel mattis. Donec pharetra lacinia viverra. Aenean vestibulum non sem vitae ornare. Donec lobortis lectus nec elit egestas viverra. Etiam varius ex velit.</p>
                </Tabs.Item>

                <Tabs.Item label="Tab 2">
                    <p>In et justo non ligula vulputate mollis. Fusce nibh felis, sollicitudin eget libero id, maximus placerat felis. Praesent aliquam euismod dapibus. Quisque dignissim elit vitae maximus gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras bibendum ipsum et sagittis gravida. Ut imperdiet cursus vulputate. Sed dictum sem at maximus consequat.</p>
                </Tabs.Item>
            </Tabs>
        );
    }

}`;

const nestSample = `import React from 'react';

import TabsItem from '../app/Collections/TabsItem.react';
import Tabs from '../app/Collections/Tabs.react';

export default class NestSample extends React.Component {

    render() {
        return (
            <Tabs nest={true}>
                <Tabs.Item label="Tab 1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tempus dui, ac cursus urna. Phasellus eu leo et neque ultrices euismod in in tellus. Ut facilisis quis neque vel mattis. Donec pharetra lacinia viverra. Aenean vestibulum non sem vitae ornare. Donec lobortis lectus nec elit egestas viverra. Etiam varius ex velit.</p>
                </Tabs.Item>

                <Tabs.Item label="Tab 2">
                    <p>In et justo non ligula vulputate mollis. Fusce nibh felis, sollicitudin eget libero id, maximus placerat felis. Praesent aliquam euismod dapibus. Quisque dignissim elit vitae maximus gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras bibendum ipsum et sagittis gravida. Ut imperdiet cursus vulputate. Sed dictum sem at maximus consequat.</p>
                </Tabs.Item>
            </Tabs>
        );
    }

}`;

export default class CollectionsTabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = { tabIndex: 0 };
    }

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'An identifier.',
                allowedTypes: '',
            }, {
                name: 'nest',
                type: 'bool',
                default: '',
                description: 'Tabs may be placed in a nested background color.',
                allowedTypes: '',
            }, {
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'Tabs can handle an onClick event.',
                allowedTypes: '',
            }, {
                name: 'selected',
                type: 'number',
                default: '',
                description: 'Change the default selected tab.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Tabs\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Tabs */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Tabs
                        <Header.Subheader>
                            Basic tabs has a faint border wrapping it's contents. It's box model is fluid so that it can adapt to it's parent container's width.
                        </Header.Subheader>
                    </Header>

                    <Tabs id="tabs">
                        <Tabs.Item label="Tab 1">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tempus dui, ac cursus urna. Phasellus eu leo et neque ultrices euismod in in tellus. Ut facilisis quis neque vel mattis. Donec pharetra lacinia viverra. Aenean vestibulum non sem vitae ornare. Donec lobortis lectus nec elit egestas viverra. Etiam varius ex velit.</p>
                        </Tabs.Item>

                        <Tabs.Item label="Tab 2">
                            <p>In et justo non ligula vulputate mollis. Fusce nibh felis, sollicitudin eget libero id, maximus placerat felis. Praesent aliquam euismod dapibus. Quisque dignissim elit vitae maximus gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras bibendum ipsum et sagittis gravida. Ut imperdiet cursus vulputate. Sed dictum sem at maximus consequat.</p>
                        </Tabs.Item>
                    </Tabs>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {tabsSample}
                    </Highlighter>

                    {/* Nested Tabs */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Nested Tabs
                        <Header.Subheader>
                            Tabs can give the appearance of being nested. The parent's background color needs to be set to
                            {' '}
                            <code>color(backgroundColorNest)</code>
                            .
                        </Header.Subheader>
                    </Header>

                    <Block
                        nest
                        style={{ padding: '22px' }}
                    >
                        <Tabs nest>
                            <Tabs.Item label="Tab 1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tempus dui, ac cursus urna. Phasellus eu leo et neque ultrices euismod in in tellus. Ut facilisis quis neque vel mattis. Donec pharetra lacinia viverra. Aenean vestibulum non sem vitae ornare. Donec lobortis lectus nec elit egestas viverra. Etiam varius ex velit.</p>
                            </Tabs.Item>

                            <Tabs.Item label="Tab 2">
                                <p>In et justo non ligula vulputate mollis. Fusce nibh felis, sollicitudin eget libero id, maximus placerat felis. Praesent aliquam euismod dapibus. Quisque dignissim elit vitae maximus gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras bibendum ipsum et sagittis gravida. Ut imperdiet cursus vulputate. Sed dictum sem at maximus consequat.</p>
                            </Tabs.Item>
                        </Tabs>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {nestSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}
