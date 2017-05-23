'use strict';

import React from 'react';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

// CM App UI Components
import Card from 'components/UI/Views/Card.react';
import Grid from 'components/UI/Collections/Grid.react';
import GridColumn from 'components/UI/Collections/GridColumn.react';
import GridRow from 'components/UI/Collections/GridRow.react';
import Header from 'components/UI/Elements/Header.react';
import HeaderSubheader from 'components/UI/Elements/HeaderSubheader.react';
import TitleBar from 'components/UI/Views/TitleBar.react';

const cardSample = `import React from 'react';

import Card from 'components/UI/Views/Card.react';

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

import Card from 'components/UI/Views/Card.react';

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

import Card from 'components/UI/Views/Card.react';

export default class CompactSample extends React.Component {

    render() {
        return (
            <Card compact={true} nest={true}>
                <Grid stressed={true}>
                    <GridRow>
                        <GridColumn style={{ padding: 0, width: '44px' }}>
                            <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                        </GridColumn>

                        <GridColumn style={{ padding: '0 0 0 22px', width: 'auto' }}>
                            <Header size="small" sub={true}>
                                A Title
                                <HeaderSubheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</HeaderSubheader>
                            </Header>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Card>
        );
    }

}`;

const cardOnClickSample = `import React from 'react';

import Card from 'components/UI/Views/Card.react';

export default class CardOnClickSample extends React.Component {

    render() {
        return (
            <Card compact={true} nest={true} onClick={this._onClick.bind(this)}>
                <Grid stressed={true}>
                    <GridRow>
                        <GridColumn style={{ padding: 0, width: '44px' }}>
                            <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                        </GridColumn>

                        <GridColumn style={{ padding: '0 0 0 22px', width: 'auto' }}>
                            <Header size="small" sub={true}>
                                A Title
                                <HeaderSubheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</HeaderSubheader>
                            </Header>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Card>
        );
    }

}`;

const activeSample = `import React from 'react';

import Card from 'components/UI/Views/Card.react';

export default class ActiveSample extends React.Component {

    render() {
        return (
            <Card active={true} compact={true} nest={true}>
                <Grid stressed={true}>
                    <GridRow>
                        <GridColumn style={{ padding: 0, width: '44px' }}>
                            <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                        </GridColumn>

                        <GridColumn style={{ padding: '0 0 0 22px', width: 'auto' }}>
                            <Header size="small" sub={true}>
                                A Title
                                <HeaderSubheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</HeaderSubheader>
                            </Header>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Card>
        );
    }

}`;

export default class ViewsTitleBar extends React.Component {

    render() {
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

        return (
            <Main page="headers">
                <TitleBar title="Card" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Card */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Card
                    <HeaderSubheader>
                        A basic card has a faint border wrapping it's contents. It's box model is fluid so that it can adapt to it's parent container's width.
                    </HeaderSubheader>
                </Header>

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

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {cardSample}
                </Highlighter>

                {/* Nested Card */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Nested Card
                    <HeaderSubheader>
                        A card can give the appearance of being nested. The parent's background color needs to be set to <code>$bkgd-nest</code>.
                    </HeaderSubheader>
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
                    <HeaderSubheader>
                        A card can have it's padding reduced.
                    </HeaderSubheader>
                </Header>

                <Block
                    nest={true}
                    style={{ padding: '22px' }}
                >
                    <Card compact={true} nest={true}>
                        <Grid stressed={true}>
                            <GridRow>
                                <GridColumn style={{ padding: 0, width: '44px' }}>
                                    <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                                </GridColumn>

                                <GridColumn style={{ padding: '0 0 0 22px', width: 'auto' }}>
                                    <Header size="small" sub={true}>
                                        A Title
                                        <HeaderSubheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</HeaderSubheader>
                                    </Header>
                                </GridColumn>
                            </GridRow>
                        </Grid>
                    </Card>
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {compactSample}
                </Highlighter>

                {/* Card onClick Event Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Card onClick Event Handler
                    <HeaderSubheader>
                        A card can handle an onClick event.
                    </HeaderSubheader>
                </Header>

                <Block
                    nest={true}
                    style={{ padding: '22px' }}
                >
                    <Card compact={true} nest={true} onClick={this._onClick.bind(this)}>
                        <Grid stressed={true}>
                            <GridRow>
                                <GridColumn style={{ padding: 0, width: '44px' }}>
                                    <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                                </GridColumn>

                                <GridColumn style={{ padding: '0 0 0 22px', width: 'auto' }}>
                                    <Header size="small" sub={true}>
                                        A Title
                                        <HeaderSubheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</HeaderSubheader>
                                    </Header>
                                </GridColumn>
                            </GridRow>
                        </Grid>
                    </Card>
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {cardOnClickSample}
                </Highlighter>

                {/* Active */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Active
                    <HeaderSubheader>
                        Cards can have an active state.
                    </HeaderSubheader>
                </Header>

                <Block
                    nest={true}
                    style={{ padding: '22px' }}
                >
                    <Card active={true} compact={true} nest={true}>
                        <Grid stressed={true}>
                            <GridRow>
                                <GridColumn style={{ padding: 0, width: '44px' }}>
                                    <img style={{ display: 'block' }} src="http://placehold.it/44x44/dbe0e3/1c2530" />
                                </GridColumn>

                                <GridColumn style={{ padding: '0 0 0 22px', width: 'auto' }}>
                                    <Header size="small" sub={true}>
                                        A Title
                                        <HeaderSubheader>Lorem ipsum dolor sit amet, consectetur adipiscing.</HeaderSubheader>
                                    </Header>
                                </GridColumn>
                            </GridRow>
                        </Grid>
                    </Card>
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {activeSample}
                </Highlighter>
            </Main>
        );
    }

    _onClick() {
        window.alert('The card has been clicked!');
    }

}
