import {
    Card,
    Typography,
    List,
} from 'react-cm-ui';
import React from 'react';
import Block from '../../global/block';
import Heading from '../../global/heading';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

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
                <Main.Content>
                    {this._renderList()}

                    {this._renderItem()}
                </Main.Content>
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
                allowedTypes: 'div, ol, ul',
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
                name: 'divide',
                type: 'bool',
                default: '',
                description: 'Each List.Item will be divided.',
                allowedTypes: '',
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'A List can stretch the width of it\'s container.',
                allowedTypes: '',
            }, {
                name: 'horizontal',
                type: 'bool',
                default: '',
                description: 'A List can be displayed horizontally.',
                allowedTypes: '',
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'A List can be formatted to appear on dark backgrounds.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the List\'s container. Mainly used for padding and margins.',
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

                    {/* List */}
                    <Heading variant="h2">
                        List
                    </Heading>

                    <Typography variant="body1">
                        A basic card has a faint border wrapping its contents. It's box model is fluid so that it can adapt to its parent container's width.
                    </Typography>

                    <List>
                        <List.Item>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                Another Header
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                300
                            </div>
                        </List.Item>
                    </List>

                    {/* Horizontal */}
                    <Heading variant="h2">
                        Horizontal
                    </Heading>

                    <Typography variant="body1">
                        A basic card has a faint border wrapping its contents. It's box model is fluid so that it can adapt to its parent container's width.
                    </Typography>

                    <List horizontal>
                        <List.Item>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                A Header
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                20
                            </div>
                        </List.Item>

                        <List.Item>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                Another Header
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                300
                            </div>
                        </List.Item>
                    </List>

                    {/* Divide */}
                    <Heading variant="h2">
                        Divide
                    </Heading>

                    <Typography variant="body1">
                        A basic card has a faint border wrapping its contents. It's box model is fluid so that it can adapt to its parent container's width.
                    </Typography>

                    <List divide>
                        <List.Item>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                A Header
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                20
                            </div>
                        </List.Item>

                        <List.Item>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                Another Header
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                300
                            </div>
                        </List.Item>
                    </List>
                    <br />
                    <br />

                    <List divide horizontal>
                        <List.Item>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                A Header
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                20
                            </div>
                        </List.Item>

                        <List.Item>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                Another Header
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                300
                            </div>
                        </List.Item>

                        <List.Item>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                A Long Item Header
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                15
                            </div>

                            <div className="font-weight-semibold font-size-small">
                                20
                            </div>
                        </List.Item>
                    </List>

                    {/* Inverse */}
                    <Heading variant="h2">
                        Inverse
                    </Heading>

                    <Typography variant="body1">
                        A List's color can be set to the appropriate color when on a dark background.
                    </Typography>

                    <Block inverse>
                        <List inverse divide>
                            <List.Item>
                                <Typography inverse size="xsmall" style={{ margin: 0 }}>
                                    A Header
                                </Typography>

                                <div className="font-weight-semibold font-size-small">
                                    20
                                </div>
                            </List.Item>

                            <List.Item>
                                <Typography inverse size="xsmall" style={{ margin: 0 }}>
                                    Another Header
                                </Typography>

                                <div className="font-weight-semibold font-size-small">
                                    300
                                </div>
                            </List.Item>
                        </List>
                        <br />
                        <br />

                        <List divide inverse horizontal>
                            <List.Item>
                                <Typography inverse size="xsmall" style={{ margin: 0 }}>
                                    A Header
                                </Typography>

                                <div className="font-weight-semibold font-size-small">
                                    20
                                </div>
                            </List.Item>

                            <List.Item>
                                <Typography inverse size="xsmall" style={{ margin: 0 }}>
                                    Another Header
                                </Typography>

                                <div className="font-weight-semibold font-size-small">
                                    300
                                </div>
                            </List.Item>

                            <List.Item>
                                <Typography inverse size="xsmall" style={{ margin: 0 }}>
                                    A Long Item Header
                                </Typography>

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
                allowedTypes: '',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'divide',
                type: 'bool',
                default: '',
                description: 'Each List.Item will be divided.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the List\'s container. Mainly used for padding and margins.',
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

                    {/* List */}
                    <Heading variant="h2">
                        List
                    </Heading>

                    <Typography variant="body1">
                        A basic card has a faint border wrapping its contents. It's box model is fluid so that it can adapt to its parent container's width.
                    </Typography>

                    <List horizontal>
                        <List.Item style={{ backgroundColor: '#c0c0c0' }}>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                Received
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                640
                            </div>
                        </List.Item>

                        <List.Item>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                Closed
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                320
                            </div>
                        </List.Item>

                        <List.Item divide>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                Open
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                200
                            </div>
                        </List.Item>

                        <List.Item>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                Blocked
                            </Typography>

                            <div className="font-weight-semibold font-size-small">
                                120
                            </div>
                        </List.Item>

                        <List.Item divide>
                            <Typography color="static" size="xsmall" style={{ margin: 0 }}>
                                Past Due
                            </Typography>

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
