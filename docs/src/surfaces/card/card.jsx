import {
    Card,
    Grid,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import Block from '../../global/block';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const cardSample = `import React from 'react';

import Card from '../app/Views/Card.react';

export default class CardSample extends React.Component {

    render() {
        return (
            <Card>
                <Typography size="large">Look at me!!!</Typography>

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
            <Card nest>
                <Typography size="large">Look How Nested I Am</Typography>

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
            <Card compact={true} nest>
                <Grid spacing={2}>
                    <Grid.Column style={{ padding: 0, width: '44px' }}>
                        <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                        <Typography size="small" sub={true}>
                            A Title
                        </Typography>

                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                    </Grid.Column>
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
            <Card compact={true} nest onClick={this._onClick.bind(this)}>
                <Grid spacing={2}>
                    <Grid.Column style={{ padding: 0, width: '44px' }}>
                        <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                        <Typography size="small" sub={true}>
                            A Title
                            </Typography>

                            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                    </Grid.Column>
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
            <Card active={true} compact={true} nest>
                <Grid spacing={2}>
                    <Grid.Column style={{ padding: 0, width: '44px' }}>
                        <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                        <Typography size="small" sub={true}>
                            A Title
                            </Typography>

                            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                    </Grid.Column>
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
                <Grid spacing={2}>
                    <Grid.Column style={{ padding: 0, width: '44px' }}>
                        <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                        <Typography size="small" sub={true}>
                            A Title
                            </Typography>

                            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                    </Grid.Column>
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
                <Main.Content>
                    {this._renderCard()}

                    {this._renderHeader()}
                </Main.Content>
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
                allowedTypes: '',
            }, {
                name: 'children',
                type: 'node',
                default: '',
                description: 'Primary content.',
                allowedTypes: '',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'collapsable',
                type: 'bool',
                default: 'false',
                description: 'Cards can be collapsable.',
                allowedTypes: '',
            }, {
                name: 'compact',
                type: 'bool',
                default: 'false',
                description: 'A card can reduce its padding.',
                allowedTypes: '',
            }, {
                name: 'nest',
                type: 'bool',
                default: 'false',
                description: 'Cards may be placed in a nested background color.',
                allowedTypes: '',
            }, {
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'Cards can handle an onClick event.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Card\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        if (subNavIndex === 0) {
            return (
                <div>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Card */}
                    <Heading variant="h2">
                        Card
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A basic card has a faint border wrapping its contents. Its box model is fluid so that it can adapt to its parent container's width.
                    </Typography>

                    <Card>
                        <Typography size="large">Look at me!!!</Typography>

                        {null}

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                            Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                            Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                            Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                            dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                            sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.
                        </p>
                    </Card>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {cardSample}
                    </Highlighter>

                    {/* Nested Card */}
                    <Heading variant="h2">
                        Nested Card
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A card can give the appearance of being nested. The parent's background color needs to be set to
                        {' '}
                        <code>color(backgroundColorNest)</code>
                        .
                    </Typography>

                    <Block
                        nest
                        style={{ padding: '22px' }}
                    >
                        <Card nest>
                            <Typography size="large">Look How Nested I Am</Typography>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                                Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                                Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                                Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                                dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                                sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.
                            </p>
                        </Card>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {nestedCardSample}
                    </Highlighter>

                    {/* Compact */}
                    <Heading variant="h2">
                        Compact
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A card can have its padding reduced.
                    </Typography>

                    <Block
                        nest
                        style={{ padding: '22px' }}
                    >
                        <Card compact nest>
                            <Grid spacing={2}>
                                <Grid.Column style={{ padding: 0, width: '44px' }}>
                                    <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                                </Grid.Column>

                                <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                                    <Typography size="small" sub>
                                        A Title
                                    </Typography>

                                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                                </Grid.Column>
                            </Grid>
                        </Card>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {compactSample}
                    </Highlighter>

                    {/* Card onClick Event Handler */}
                    <Heading variant="h2">
                        Card onClick Event Handler
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A card can handle an onClick event.
                    </Typography>

                    <Block
                        nest
                        style={{ padding: '22px' }}
                    >
                        <Card compact nest onClick={this._onClick.bind(this)}>
                            <Grid spacing={2}>
                                <Grid.Column style={{ padding: 0, width: '44px' }}>
                                    <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                                </Grid.Column>

                                <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                                    <Typography size="small" sub>
                                        A Title
                                    </Typography>

                                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                                </Grid.Column>
                            </Grid>
                        </Card>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {cardOnClickSample}
                    </Highlighter>

                    {/* Active */}
                    <Heading variant="h2">
                        Active
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Cards can have an active state.
                    </Typography>

                    <Block
                        nest
                        style={{ padding: '22px' }}
                    >
                        <Card active compact nest>
                            <Grid spacing={2}>
                                <Grid.Column style={{ padding: 0, width: '44px' }}>
                                    <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                                </Grid.Column>

                                <Grid.Column style={{ padding: '0 0 0 22px', width: 'auto' }}>
                                    <Typography size="small" sub>
                                        A Title
                                    </Typography>

                                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing.</Typography>
                                </Grid.Column>
                            </Grid>
                        </Card>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {activeSample}
                    </Highlighter>

                    {/* Collapsable */}
                    <Heading variant="h2">
                        Collapsable
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Cards can be collapsable.
                    </Typography>

                    <Block
                        nest
                        style={{ padding: '22px' }}
                    >
                        <Card collapsable nest title="Collapsable Card">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                                Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                                Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                                Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                                dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                                sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.
                            </p>
                        </Card>

                        <Card compact collapsable nest title="Compact Collapsable Card">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                                Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                                Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                                Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                                dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                                sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.
                            </p>
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
                allowedTypes: '',
            }, {
                name: 'children',
                type: 'node',
                default: '',
                description: 'Primary content.',
                allowedTypes: '',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'color',
                type: 'enum',
                default: '',
                description: 'A Card.Header\'s background color.',
                allowedTypes: 'blue, green, pink',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Card.Header\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        if (subNavIndex === 1) {
            return (
                <div>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Collapsable */}
                    <Heading variant="h2">
                        Header
                    </Heading>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Cards can have a custom header.
                    </Typography>

                    <Card header>
                        <Card.Header attached color="blue">
                            Custom Header
                        </Card.Header>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices non diam vitae blandit.
                            Curabitur quis velit eu nibh cursus convallis ac in arcu. Aenean malesuada sed leo eget cursus.
                            Nunc urna magna, sodales eget rutrum et, facilisis id velit. Pellentesque eu ornare tellus.
                            Pellentesque aliquet a nibh consectetur vestibulum. Aenean in ipsum tincidunt, congue ante a,
                            dictum nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Aenean in tortor porttitor, tristique eros convallis, viverra nunc. Morbi dignissim
                            sapien ac dui convallis molestie. Donec consequat odio in egestas lacinia.
                        </p>
                    </Card>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {headerSample}
                    </Highlighter>
                </div>
            );
        }
    }
}
