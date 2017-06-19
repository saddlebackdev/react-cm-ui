'use strict';

import React from 'react';
import { Card, Grid, Header, Icon, SubNavigation, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const iconSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';

export default class IconSample extends React.Component {

    render() {
        return (
            <Icon type="activity" />
        );
    }

}`;

const alignSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';

export default class AlignSample extends React.Component {

    render() {
        return (
            <Icon align="left" type="activity" />
            <Icon align="left" type="award" />
            <Icon align="left" type="user" /><br /><br />

            <div style={{ textAlign: 'right' }}>
                <Icon align="right" type="activity" />
                <Icon align="right" type="award" />
                <Icon align="right" type="user" />
            </div>
        );
    }

}`;

const colorSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';

export default class ColorSample extends React.Component {

    render() {
        return (
            <Icon color="alert" type="activity" />
            <Icon color="primary" type="calendar" />
            <Icon color="static" type="cards" />
            <Icon color="success" type="clock" />
        );
    }

}`;

const inverseSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';

export default class InverseSample extends React.Component {

    render() {
        return (
            <Icon color="alert" inverse={true} type="activity" />
            <Icon color="primary" inverse={true} type="calendar" />
            <Icon color="static" inverse={true} type="cards" />
            <Icon color="success" inverse={true} type="clock" />
        );
    }

}`;

const compactSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';

export default class CompactSample extends React.Component {

    render() {
        return (
            <Icon compact={true} type="activity" />
            <Icon compact={true} type="calendar" />
            <Icon compact={true} type="cards" />
            <Icon compact={true} type="clock" />
        );
    }

}`;

const onClickSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';

export default class OnClickSample extends React.Component {

    render() {
        return (
            <Icon type="activity" onClick={this._onIconClick.bind(this)} />
        );
    }

    _onIconClick() {
        window.alert('Look at my action.');
    }

}`;

const rotateSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';

export default class RotateSample extends React.Component {

    render() {
        return (
            <Icon rotate={-90} type="heart" />
            <Icon rotate={180} type="chevron-wh-up" />
        );
    }

}`;

const sizeSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';

export default class SizeSample extends React.Component {

    render() {
        return (
            <Icon size="xlarge" type="activity" />
            <Icon size="large" type="award" />
            <Icon size="medium" type="book-open" />
            <Icon size="small" type="user" />
            <Icon size="xsmall" type="clock" />
            <Icon size="xxsmall" type="check" />
        );
    }

}`;

const spinSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';

export default class SpinSample extends React.Component {

    render() {
        return (
            <Icon spin={true} type="activity" />
            <Icon spin={true} type="award" />
            <Icon spin={true} type="book-open" />
            <Icon spin={true} type="user" />
            <Icon spin={true} type="clock" />
            <Icon spin={true} type="check" />
        );
    }

}`;

export default class ElementsButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = { subNavIndex: 0 };
    }

    render() {

        const props = [
            {
                name: 'align',
                type: 'enum',
                default: '',
                description: 'Icons can change the side the margin is positioned on.',
                allowedTypes: 'left, right'
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'color',
                type: 'string',
                default: '',
                description: 'Color of the icon.',
                allowedTypes: 'alert, primary, static, success'
            }, {
                name: 'compact',
                type: 'bool',
                default: '',
                description: 'Icons can appear without space to left or right.',
                allowedTypes: ''
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'A icon can be formatted to appear on dark backgrounds better.',
                allowedTypes: ''
            }, {
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'Called after the end-user\'s click.',
                allowedTypes: ''
            }, {
                name: 'size',
                type: 'enum',
                default: '',
                description: 'Size of icon.',
                allowedTypes: 'xlarge, large, medium, small, xsmall, xxsmall'
            }, {
                name: 'spin',
                type: 'bool',
                default: '',
                description: 'Spins the icon clockwise.',
                allowedTypes: ''
            }, {
                name: 'type',
                type: 'string',
                default: '',
                description: 'Type of icon.',
                allowedTypes: ''
            }
        ];
        const iconCompact = true;
        const iconSize = 'xlarge';

        return (
            <Main page="headers">
                <TitleBar title="Icon" />

                <SubNavigation
                    onClick={this._onSubNavClick.bind(this)}
                    selected={this.state.subNavIndex}
                    style={{ marginBottom: '33px' }}
                >
                    <SubNavigation.Item label="Set" />
                    <SubNavigation.Item label="Examples" />
                </SubNavigation>

                <div style={{ display: this.state.subNavIndex === 0 ? 'block' : 'none' }}>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Grid.Column textAlign="left" width={12}>
                                <Header size="large" style={{ margin: '0 0 22px' }}>
                                    Web App
                                </Header>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="activity" />
                                <p className="icon-type-name">activity</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="award" />
                                <p className="icon-type-name">award</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="archive" />
                                <p className="icon-type-name">archive</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="block" />
                                <p className="icon-type-name">block</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="book-open" />
                                <p className="icon-type-name">book-open</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="calendar" />
                                <p className="icon-type-name">calendar</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="cards" />
                                <p className="icon-type-name">cards</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="check" />
                                <p className="icon-type-name">check</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="check-circle" />
                                <p className="icon-type-name">check-circle</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="check-square" />
                                <p className="icon-type-name">check-square</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="circle" />
                                <p className="icon-type-name">circle</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="clock" />
                                <p className="icon-type-name">clock</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="cloud-upload" />
                                <p className="icon-type-name">cloud-upload</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="cog" />
                                <p className="icon-type-name">cog</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="comment" />
                                <p className="icon-type-name">comment</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="comment-sms" />
                                <p className="icon-type-name">comment-sms</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="ellipsis-h" />
                                <p className="icon-type-name">ellipsis-h</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="email" />
                                <p className="icon-type-name">email</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="exclamation" />
                                <p className="icon-type-name">exclamation</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="feet" />
                                <p className="icon-type-name">feet</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="file" />
                                <p className="icon-type-name">file</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="gift" />
                                <p className="icon-type-name">gift</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="hand-stop" />
                                <p className="icon-type-name">hand-stop</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="heart" />
                                <p className="icon-type-name">heart</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="history" />
                                <p className="icon-type-name">history</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="list" />
                                <p className="icon-type-name">list</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="map-marker" />
                                <p className="icon-type-name">map-marker</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="ministry" />
                                <p className="icon-type-name">ministry</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="note" />
                                <p className="icon-type-name">note</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="paperclip" />
                                <p className="icon-type-name">paperclip</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="pencil" />
                                <p className="icon-type-name">pencil</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="phone" />
                                <p className="icon-type-name">phone</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="plus" />
                                <p className="icon-type-name">plus</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="reassign" />
                                <p className="icon-type-name">reassign</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="search" />
                                <p className="icon-type-name">search</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="send" />
                                <p className="icon-type-name">send</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="shield" />
                                <p className="icon-type-name">shield</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="star" />
                                <p className="icon-type-name">star</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="times" />
                                <p className="icon-type-name">times</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="user" />
                                <p className="icon-type-name">user</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="user-alt" />
                                <p className="icon-type-name">user-alt</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="workflow" />
                                <p className="icon-type-name">workflow</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column textAlign="left" width={12}>
                                <Header size="large" style={{ margin: '55px 0 22px' }}>
                                    Web App
                                </Header>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="caret-up" />
                                <p className="icon-type-name">caret-up</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="caret-right" />
                                <p className="icon-type-name">caret-right</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="caret-down" />
                                <p className="icon-type-name">caret-down</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="caret-left" />
                                <p className="icon-type-name">caret-left</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="chevron-wh-up" />
                                <p className="icon-type-name">chevron-wh-up</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="chevron-wh-right" />
                                <p className="icon-type-name">chevron-wh-right</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="chevron-wh-down" />
                                <p className="icon-type-name">chevron-wh-down</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="chevron-wh-left" />
                                <p className="icon-type-name">chevron-wh-left</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="chevron-wl-up" />
                                <p className="icon-type-name">chevron-wl-up</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="chevron-wl-right" />
                                <p className="icon-type-name">chevron-wl-right</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="chevron-wl-down" />
                                <p className="icon-type-name">chevron-wl-down</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="chevron-wl-left" />
                                <p className="icon-type-name">chevron-wl-left</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="arrows-alt" />
                                <p className="icon-type-name">arrows-alt</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>

                <div style={{ display: this.state.subNavIndex === 1 ? 'block' : 'none' }}>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Icon */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Icon
                        <Header.Subheader>
                            A standard icon. The <code>type</code> prop is required.
                        </Header.Subheader>
                    </Header>

                    <Icon type="activity" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {iconSample}
                    </Highlighter>

                    {/* Align */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Align
                        <Header.Subheader>
                            Icons can change the side the margin is positioned on.
                        </Header.Subheader>
                    </Header>

                    <Icon align="left" type="activity" />
                    <Icon align="left" type="award" />
                    <Icon align="left" type="user" /><br /><br />

                    <div style={{ textAlign: 'right' }}>
                        <Icon align="right" type="activity" />
                        <Icon align="right" type="award" />
                        <Icon align="right" type="user" />
                    </div>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {alignSample}
                    </Highlighter>

                    {/* Color */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Color
                        <Header.Subheader>
                            Icons can be formatted with different colors.
                        </Header.Subheader>
                    </Header>

                    <Icon color="alert" type="activity" />
                    <Icon color="highlight" type="caret-down" />
                    <Icon color="primary" type="calendar" />
                    <Icon color="static" type="cards" />
                    <Icon color="success" type="clock" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {colorSample}
                    </Highlighter>

                    {/* Inverse */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Inverse
                        <Header.Subheader>
                            Icon colors can be inverted to appear on darker backgrounds better.
                        </Header.Subheader>
                    </Header>

                    <Block inverse={true}>
                        <Icon color="alert" inverse={true} type="activity" />
                        <Icon color="primary" inverse={true} type="calendar" />
                        <Icon color="static" inverse={true} type="cards" />
                        <Icon color="success" inverse={true} type="clock" />
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {inverseSample}
                    </Highlighter>

                    {/* Compact */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Compact
                        <Header.Subheader>
                            Icons can appear without space to left or right.
                        </Header.Subheader>
                    </Header>

                    <Icon compact={true} type="activity" />
                    <Icon compact={true} type="calendar" />
                    <Icon compact={true} type="cards" />
                    <Icon compact={true} type="clock" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {compactSample}
                    </Highlighter>

                    {/* onClick Event Handler */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        onClick Event Handler
                        <Header.Subheader>
                            Icons can handle an onClick event.
                        </Header.Subheader>
                    </Header>

                    <Icon type="activity" onClick={this._onIconClick.bind(this)} />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onClickSample}
                    </Highlighter>

                    {/* Rotate */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Rotate
                        <Header.Subheader>
                            Icons can be rotated.
                        </Header.Subheader>
                    </Header>

                    <Icon rotate={-90} type="heart" />
                    <Icon rotate={180} type="chevron-wh-up" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {rotateSample}
                    </Highlighter>

                    {/* Size */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Size
                        <Header.Subheader>
                            Icons can have different sizes.
                        </Header.Subheader>
                    </Header>

                    <Icon size="xlarge" type="activity" />
                    <Icon size="large" type="award" />
                    <Icon size="medium" type="book-open" />
                    <Icon size="small" type="user" />
                    <Icon size="xsmall" type="clock" />
                    <Icon size="xxsmall" type="check" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {sizeSample}
                    </Highlighter>

                    {/* Spin */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Spin
                        <Header.Subheader>
                            Icons can spin clockwise.
                        </Header.Subheader>
                    </Header>

                    <Icon spin={true} type="activity" />
                    <Icon spin={true} type="award" />
                    <Icon spin={true} type="book-open" />
                    <Icon spin={true} type="user" />
                    <Icon spin={true} type="clock" />
                    <Icon spin={true} type="check" />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {spinSample}
                    </Highlighter>
                </div>
            </Main>
        );
    }

    _onIconClick() {
        window.alert('Look at my action.');
    }

    _onSubNavClick(index) {
        this.setState({ subNavIndex: index });
    }

}
