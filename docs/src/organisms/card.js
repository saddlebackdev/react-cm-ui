'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Card, Grid, Header, SubNavigation, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from '../global/block.js';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps.js';

const cardSample = `import React from 'react';

import Card from '../app/Views/Card.react';

export default class CardSample extends React.Component {

    render() {
        return (
            <Card>
                <Header size="large">Look at me!!!</Header>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                    Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                    Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                    Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                    dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                    sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.</p>
            </Card>
        );
    }

}`;

const nestedCardSample = `import React from 'react';

import Card from '../app/Views/Card.react';

export default class NestedCardSample extends React.Component {

    render() {
        return (
            <Card nest={true}>
                <Header size="large">Look How Nested I Am</Header>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                    Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                    Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                    Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                    dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                    sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.</p>
            </Card>
        );
    }

}`;

const compactSample = `import React from 'react';

import Card from '../app/Views/Card.react';

export default class CompactSample extends React.Component {

    render() {
        return (
            <Card compact={true} nest={true}>
                <Grid stressed={true}>
                    <Grid.Row>
                        <Grid.Column style={{ padding: 0, width: '44px' }}>
                            <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                            <Header size="small" sub={true}>
                                A Title
                                <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card>
        );
    }

}`;

const cardOnClickSample = `import React from 'react';

import Card from '../app/Views/Card.react';

export default class CardOnClickSample extends React.Component {

    render() {
        return (
            <Card compact={true} nest={true} onClick={this._onClick.bind(this)}>
                <Grid stressed={true}>
                    <Grid.Row>
                        <Grid.Column style={{ padding: 0, width: '44px' }}>
                            <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                            <Header size="small" sub={true}>
                                A Title
                                <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card>
        );
    }

}`;

const activeSample = `import React from 'react';

import Card from '../app/Views/Card.react';

export default class ActiveSample extends React.Component {

    render() {
        return (
            <Card active={true} compact={true} nest={true}>
                <Grid stressed={true}>
                    <Grid.Row>
                        <Grid.Column style={{ padding: 0, width: '44px' }}>
                            <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                            <Header size="small" sub={true}>
                                A Title
                                <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card>
        );
    }

}`;

const collapsableSample = `import React from 'react';

import Card from '../app/Views/Card.react';

export default class CollapsableSample extends React.Component {

    render() {
        return (
            <Card collapsable nest>
                <Grid stressed={true}>
                    <Grid.Row>
                        <Grid.Column style={{ padding: 0, width: '44px' }}>
                            <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                            <Header size="small" sub={true}>
                                A Title
                                <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</Header.Subheader>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card>
        );
    }

}`;

const headerSample = `import React from 'react';
import { Card } from 'react-cm-ui';

export default class HeaderSample extends React.Component {
    render() {
        return (
            <Card header>
                <Card.Header attached color="blue">
                    Custom Header
                </Card.Header>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                    Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                    Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                    Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                    dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                    sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.</p>
            </Card>
        );
    }
}`;

export default class ViewsTitleBar extends React.Component {
    constructor() {
        super();

        this.state = { subNavIndex: 0 };

        this._onSubNavClick = this._onSubNavClick.bind(this);
    }

    render() {
        return (
            <Main page="headers">
                <TitleBar title="Card" />

                <SubNavigation
                    onClick={this._onSubNavClick}
                    selected={this.state.subNavIndex}
                    style={{ marginBottom: '33px' }}
                >
                    <SubNavigation.Item label="Card" />
                    <SubNavigation.Item label="Header" />
                </SubNavigation>

                {this._renderCard()}

                {this._renderHeader()}
            </Main>
        );
    }

    _onClick() {
        window.alert('The card has been clicked!');
    }

    _onSubNavClick(index) {
        this.setState({ subNavIndex: index });
    }

    _renderCard() {
        const { subNavIndex } = this.state;
        const props = [
            {
                name: 'active',
                type: 'bool',
                default: 'false',
                description: 'Cards can have an active state.',
                allowedTypes: ''
            }, {
                name: 'children',
                type: 'node',
                default: '',
                description: 'Primary content.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'collapsable',
                type: 'bool',
                default: 'false',
                description: 'Cards can be collapsable.',
                allowedTypes: ''
            }, {
                name: 'compact',
                type: 'bool',
                default: 'false',
                description: 'A card can reduce its padding.',
                allowedTypes: ''
            }, {
                name: 'nest',
                type: 'bool',
                default: 'false',
                description: 'Cards may be placed in a nested background color.',
                allowedTypes: ''
            }, {
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'Cards can handle an onClick event.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Card\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        if (subNavIndex === 0) {
            return (
                <div>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Card */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Card
                        <Header.Subheader>
                            A basic card has a faint border wrapping it's contents. It's box model is fluid so that it can adapt to it's parent container's width.
                        </Header.Subheader>
                    </Header>

                    <Card>
                        <Header size="large">Look at me!!!</Header>

                        {null}

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                            Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                            Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                            Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                            dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                            sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.</p>
                    </Card>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {cardSample}
                    </Highlighter>

                    {/* Nested Card */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Nested Card
                        <Header.Subheader>
                            A card can give the appearance of being nested. The parent's background color needs to be set to <code>color(backgroundColorNest)</code>.
                        </Header.Subheader>
                    </Header>

                    <Block
                        nest={true}
                        style={{ padding: '22px' }}
                    >
                        <Card nest={true}>
                            <Header size="large">Look How Nested I Am</Header>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                                Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                                Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                                Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                                dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                                sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.</p>
                        </Card>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {nestedCardSample}
                    </Highlighter>

                    {/* Compact */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Compact
                        <Header.Subheader>
                            A card can have it's padding reduced.
                        </Header.Subheader>
                    </Header>

                    <Block
                        nest={true}
                        style={{ padding: '22px' }}
                    >
                        <Card compact={true} nest={true}>
                            <Grid stressed={true}>
                                <Grid.Row>
                                    <Grid.Column style={{ padding: 0, width: '44px' }}>
                                        <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                                    </Grid.Column>

                                    <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                                        <Header size="small" sub={true}>
                                            A Title
                                            <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Card>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {compactSample}
                    </Highlighter>

                    {/* Card onClick Event Handler */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Card onClick Event Handler
                        <Header.Subheader>
                            A card can handle an onClick event.
                        </Header.Subheader>
                    </Header>

                    <Block
                        nest={true}
                        style={{ padding: '22px' }}
                    >
                        <Card compact={true} nest={true} onClick={this._onClick.bind(this)}>
                            <Grid stressed={true}>
                                <Grid.Row>
                                    <Grid.Column style={{ padding: 0, width: '44px' }}>
                                        <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                                    </Grid.Column>

                                    <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                                        <Header size="small" sub={true}>
                                            A Title
                                            <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Card>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {cardOnClickSample}
                    </Highlighter>

                    {/* Active */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Active
                        <Header.Subheader>
                            Cards can have an active state.
                        </Header.Subheader>
                    </Header>

                    <Block
                        nest={true}
                        style={{ padding: '22px' }}
                    >
                        <Card active={true} compact={true} nest={true}>
                            <Grid stressed={true}>
                                <Grid.Row>
                                    <Grid.Column style={{ padding: 0, width: '44px' }}>
                                        <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                                    </Grid.Column>

                                    <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                                        <Header size="small" sub={true}>
                                            A Title
                                            <Header.Subheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Card>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {activeSample}
                    </Highlighter>

                    {/* Collapsable */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Collapsable
                        <Header.Subheader>
                            Cards can be collapsable.
                        </Header.Subheader>
                    </Header>

                    <Block
                        nest={true}
                        style={{ padding: '22px' }}
                    >
                        <Card collapsable nest title="Collapsable Card">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                                Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                                Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                                Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                                dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                                sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.</p>
                        </Card>

                        <Card compact collapsable nest title="Compact Collapsable Card">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                                Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                                Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                                Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                                dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                                sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.</p>
                        </Card>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {collapsableSample}
                    </Highlighter>
                </div>
            );
        }
    }

    _renderHeader() {
        const { subNavIndex } = this.state;
        const props = [
            {
                name: 'attached',
                type: 'bool',
                default: '',
                description: 'Attach edges to the parent container.',
                allowedTypes: ''
            }, {
                name: 'children',
                type: 'node',
                default: '',
                description: 'Primary content.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'color',
                type: 'enum',
                default: '',
                description: 'A Card.Header\'s background color.',
                allowedTypes: 'blue, green, pink'
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Card.Header\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        if (subNavIndex === 1) {
            return (
                <div>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Collapsable */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Header
                        <Header.Subheader>
                            Cards can have a custom header.
                        </Header.Subheader>
                    </Header>

                    <Card header>
                        <Card.Header attached color="blue">
                            Custom Header
                        </Card.Header>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                            Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                            Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                            Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                            dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                            sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.</p>
                    </Card>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {headerSample}
                    </Highlighter>
                </div>
            );
        }
    }
}
