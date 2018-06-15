'use strict';

import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Header, InfoBar, List, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const colorSample = `import React from 'react';
import { InfoBar } from 'react-cm-ui';

export default class ColorSample extends React.Component {
    render() {
        return (
            <div>
                <InfoBar color={1}>
                    Super Cool Info Bar - Color: 1
                </InfoBar><br /><br />

                <InfoBar color={2}>
                    Super Cool Info Bar - Color: 2
                </InfoBar><br /><br />

                <InfoBar color={3}>
                    Super Cool Info Bar - Color: 3
                </InfoBar><br /><br />

                <InfoBar color={4}>
                    Super Cool Info Bar - Color: 4
                </InfoBar><br /><br />

                <InfoBar color={5}>
                    Super Cool Info Bar - Color: 5
                </InfoBar><br /><br />

                <InfoBar color={6}>
                    Super Cool Info Bar - Color: 6
                </InfoBar><br /><br />

                <InfoBar color={7}>
                    Super Cool Info Bar - Color: 7
                </InfoBar><br /><br />

                <InfoBar color={8}>
                    Super Cool Info Bar - Color: 8
                </InfoBar><br /><br />

                <InfoBar color={9}>
                    Super Cool Info Bar - Color: 9
                </InfoBar><br /><br />

                <InfoBar color={10}>
                    Super Cool Info Bar - Color: 10
                </InfoBar>
            </div>
        );
    }
}`;

const infoBarDrawerSample = `import React from 'react';
import { InfoBar } from 'react-cm-ui';

export default class InfoBarDrawerSample extends React.Component {
    render() {
        return (
            <InfoBar color={1} drawer>
                <InfoBar.Drawer>
                    <p style={{ margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget.</p>
                </InfoBar.Drawer>

                <Header
                    inverse
                    size="large"
                    weight="semibold"
                    style={{ marginBottom: '10px' }}
                >
                    An Info Header
                </Header>

                <List inverse horizontal>
                    <List.Item>
                        <Header inverse size="xsmall" style={{ margin: 0 }}>
                            Received
                        </Header>

                        <div className="font-weight-semibold font-size-small">
                            640
                        </div>
                    </List.Item>

                    <List.Item>
                        <Header inverse size="xsmall" style={{ margin: 0 }}>
                            Closed
                        </Header>

                        <div className="font-weight-semibold font-size-small">
                            320
                        </div>
                    </List.Item>

                    <List.Item divide>
                        <Header inverse size="xsmall" style={{ margin: 0 }}>
                            Open
                        </Header>

                        <div className="font-weight-semibold font-size-small">
                            200
                        </div>
                    </List.Item>

                    <List.Item>
                        <Header inverse size="xsmall" style={{ margin: 0 }}>
                            Blocked
                        </Header>

                        <div className="font-weight-semibold font-size-small">
                            120
                        </div>
                    </List.Item>

                    <List.Item divide>
                        <Header inverse size="xsmall" style={{ margin: 0 }}>
                            Past Due
                        </Header>

                        <div className="font-weight-semibold font-size-small">
                            70
                        </div>
                    </List.Item>
                </List>
            </InfoBar>
        );
    }
}`;

export default class ViewsInfoBar extends React.Component {
    render() {
        const props = [
            {
                name: 'as',
                type: 'nums',
                default: '',
                description: 'An element type to render as.',
                allowedTypes: 'div, section'
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'color',
                type: 'enums',
                default: '',
                description: 'Color of the Info Bar.',
                allowedTypes: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10'
            }, {
                name: 'drawer',
                type: 'bool',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Info Bar\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="info-bar">
                <TitleBar title="Info Bar" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Color */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Color
                    <Header.Subheader>
                        Info Bars have different colors.
                    </Header.Subheader>
                </Header>

                <InfoBar color={1}>
                    Super Cool Info Bar - Color: 1
                </InfoBar><br /><br />

                <InfoBar color={2}>
                    Super Cool Info Bar - Color: 2
                </InfoBar><br /><br />

                <InfoBar color={3}>
                    Super Cool Info Bar - Color: 3
                </InfoBar><br /><br />

                <InfoBar color={4}>
                    Super Cool Info Bar - Color: 4
                </InfoBar><br /><br />

                <InfoBar color={5}>
                    Super Cool Info Bar - Color: 5
                </InfoBar><br /><br />

                <InfoBar color={6}>
                    Super Cool Info Bar - Color: 6
                </InfoBar><br /><br />

                <InfoBar color={7}>
                    Super Cool Info Bar - Color: 7
                </InfoBar><br /><br />

                <InfoBar color={8}>
                    Super Cool Info Bar - Color: 8
                </InfoBar><br /><br />

                <InfoBar color={9}>
                    Super Cool Info Bar - Color: 9
                </InfoBar><br /><br />

                <InfoBar color={10}>
                    Super Cool Info Bar - Color: 10
                </InfoBar>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {colorSample}
                </Highlighter>

                {/* Drawer */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Drawer
                    <Header.Subheader>
                        An Info Bar's drawer.
                    </Header.Subheader>
                </Header>

                <InfoBar color={1} drawer>
                    <InfoBar.Drawer>
                        <p style={{ margin: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget.</p>
                    </InfoBar.Drawer>

                    <Header
                        inverse
                        size="large"
                        weight="semibold"
                        style={{ marginBottom: '10px' }}
                    >
                        An Info Header
                    </Header>

                    <List inverse horizontal>
                        <List.Item>
                            <Header inverse size="xsmall" style={{ margin: 0 }}>
                                Received
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                640
                            </div>
                        </List.Item>

                        <List.Item>
                            <Header inverse size="xsmall" style={{ margin: 0 }}>
                                Closed
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                320
                            </div>
                        </List.Item>

                        <List.Item divide>
                            <Header inverse size="xsmall" style={{ margin: 0 }}>
                                Open
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                200
                            </div>
                        </List.Item>

                        <List.Item>
                            <Header inverse size="xsmall" style={{ margin: 0 }}>
                                Blocked
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                120
                            </div>
                        </List.Item>

                        <List.Item divide>
                            <Header inverse size="xsmall" style={{ margin: 0 }}>
                                Past Due
                            </Header>

                            <div className="font-weight-semibold font-size-small">
                                70
                            </div>
                        </List.Item>
                    </List>
                </InfoBar>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {infoBarDrawerSample}
                </Highlighter>
            </Main>
        );
    }

    _onDropdownClick(event) {
        this.dropdown._onDropdownClick(event);
    }
}
