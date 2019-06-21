'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Card, Header, List, SubNavigation, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from '../app/block.js';
import Highlighter from '../app/highlighter.js';
import Main from '../app/main.js';
import TableProps from '../app/tableProps.js';

export default class ElementsList extends React.Component {
    constructor() {
        super();

        this.state = { subNavIndex: 0 };

        this._onSubNavClick = this._onSubNavClick.bind(this);
    }

    render() {
        const { subNavIndex } = this.state;

        return (
            <Main page="headers">
                <TitleBar title="List" />

                <SubNavigation
                    onClick={this._onSubNavClick}
                    selected={subNavIndex}
                    style={{ marginBottom: '33px' }}
                >
                    <SubNavigation.Item label="List" />
                    <SubNavigation.Item label="Item" />
                </SubNavigation>

                {this._renderList()}

                {this._renderItem()}
            </Main>
        );
    }

    _onSubNavClick(index) {
        this.setState({ subNavIndex: index });
    }

    _renderList() {
        const { subNavIndex } = this.state;
        const props = [
            {
                name: 'as',
                type: 'enum',
                default: 'ul',
                description: 'Cards can have an active state.',
                allowedTypes: 'div, ol, ul'
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
                name: 'divide',
                type: 'bool',
                default: '',
                description: 'Each List.Item will be divided.',
                allowedTypes: ''
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'A List can stretch the width of it\'s container.',
                allowedTypes: ''
            }, {
                name: 'horizontal',
                type: 'bool',
                default: '',
                description: 'A List can be displayed horizontally.',
                allowedTypes: ''
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'A List can be formatted to appear on dark backgrounds.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the List\'s container. Mainly used for padding and margins.',
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

                    {/* List */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        List
                        <Header.Subheader>
                            A basic card has a faint border wrapping it's contents. It's box model is fluid so that it can adapt to it's parent container's width.
                        </Header.Subheader>
                    </Header>

                    <List>
                        <List.Item>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                Another Header
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                300
                            </div>
                        </List.Item>
                    </List>

                    {/* Horizontal */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Horizontal
                        <Header.Subheader>
                            A basic card has a faint border wrapping it's contents. It's box model is fluid so that it can adapt to it's parent container's width.
                        </Header.Subheader>
                    </Header>

                    <List horizontal>
                        <List.Item>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                A Header
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                20
                            </div>
                        </List.Item>

                        <List.Item>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                Another Header
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                300
                            </div>
                        </List.Item>
                    </List>

                    {/* Divide */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Divide
                        <Header.Subheader>
                            A basic card has a faint border wrapping it's contents. It's box model is fluid so that it can adapt to it's parent container's width.
                        </Header.Subheader>
                    </Header>

                    <List divide>
                        <List.Item>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                A Header
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                20
                            </div>
                        </List.Item>

                        <List.Item>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                Another Header
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                300
                            </div>
                        </List.Item>
                    </List><br /><br />

                    <List divide horizontal>
                        <List.Item>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                A Header
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                20
                            </div>
                        </List.Item>

                        <List.Item>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                Another Header
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                300
                            </div>
                        </List.Item>

                        <List.Item>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                A Long Item Header
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                15
                            </div>

                            <div className="font-weight-semibold font-size-small">
                                20
                            </div>
                        </List.Item>
                    </List>

                    {/* Inverse */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Inverse
                        <Header.Subheader>
                            A List's color can be set to the appropriate color when on a dark background.
                        </Header.Subheader>
                    </Header>

                    <Block inverse>
                        <List inverse divide>
                            <List.Item>
                                <Header inverse size="xsmall" style={{ margin: 0 }}>
                                    A Header
                                </Header>

                                <div className="font-weight-semibold font-size-small">
                                    20
                                </div>
                            </List.Item>

                            <List.Item>
                                <Header inverse size="xsmall" style={{ margin: 0 }}>
                                    Another Header
                                </Header>

                                <div className="font-weight-semibold font-size-small">
                                    300
                                </div>
                            </List.Item>
                        </List><br /><br />

                        <List divide inverse horizontal>
                            <List.Item>
                                <Header inverse size="xsmall" style={{ margin: 0 }}>
                                    A Header
                                </Header>

                                <div className="font-weight-semibold font-size-small">
                                    20
                                </div>
                            </List.Item>

                            <List.Item>
                                <Header inverse size="xsmall" style={{ margin: 0 }}>
                                    Another Header
                                </Header>

                                <div className="font-weight-semibold font-size-small">
                                    300
                                </div>
                            </List.Item>

                            <List.Item>
                                <Header inverse size="xsmall" style={{ margin: 0 }}>
                                    A Long Item Header
                                </Header>

                                <div className="font-weight-semibold font-size-small">
                                    15
                                </div>

                                <div className="font-weight-semibold font-size-small">
                                    20
                                </div>
                            </List.Item>
                        </List>
                    </Block>
                </div>
            );
        }
    }

    _renderItem() {
        const { subNavIndex } = this.state;
        const props = [
            {
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
                name: 'divide',
                type: 'bool',
                default: '',
                description: 'Each List.Item will be divided.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the List\'s container. Mainly used for padding and margins.',
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

                    {/* List */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        List
                        <Header.Subheader>
                            A basic card has a faint border wrapping it's contents. It's box model is fluid so that it can adapt to it's parent container's width.
                        </Header.Subheader>
                    </Header>

                    <List horizontal>
                        <List.Item style={{ backgroundColor: '#c0c0c0' }}>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                Received
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                640
                            </div>
                        </List.Item>

                        <List.Item>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                Closed
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                320
                            </div>
                        </List.Item>

                        <List.Item divide>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                Open
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                200
                            </div>
                        </List.Item>

                        <List.Item>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                Blocked
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                120
                            </div>
                        </List.Item>

                        <List.Item divide>
                            <Header color="static" size="xsmall" style={{ margin: 0 }}>
                                Past Due
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                70
                            </div>
                        </List.Item>
                    </List>
                </div>
            );
        }
    }
}
