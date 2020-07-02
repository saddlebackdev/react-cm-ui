
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Card, Header, InfoBar, List, TitleBar,
} from 'react-cm-ui';

// Docs UI Components
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

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
                </InfoBar><br /><br />

                <InfoBar color={11}>
                    Super Cool Info Bar - Color: 11
                </InfoBar>
            </div>
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
                allowedTypes: 'div, section',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'color',
                type: 'enums',
                default: '',
                description: 'Color of the Info Bar.',
                allowedTypes: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Info Bar\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="info-bar">
                <TitleBar title="Info Bar" />

                <Main.Content>
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
                    </InfoBar>
                    <br />
                    <br />

                    <InfoBar color={2}>
                        Super Cool Info Bar - Color: 2
                    </InfoBar>
                    <br />
                    <br />

                    <InfoBar color={3}>
                        Super Cool Info Bar - Color: 3
                    </InfoBar>
                    <br />
                    <br />

                    <InfoBar color={4}>
                        Super Cool Info Bar - Color: 4
                    </InfoBar>
                    <br />
                    <br />

                    <InfoBar color={5}>
                        Super Cool Info Bar - Color: 5
                    </InfoBar>
                    <br />
                    <br />

                    <InfoBar color={6}>
                        Super Cool Info Bar - Color: 6
                    </InfoBar>
                    <br />
                    <br />

                    <InfoBar color={7}>
                        Super Cool Info Bar - Color: 7
                    </InfoBar>
                    <br />
                    <br />

                    <InfoBar color={8}>
                        Super Cool Info Bar - Color: 8
                    </InfoBar>
                    <br />
                    <br />

                    <InfoBar color={9}>
                        Super Cool Info Bar - Color: 9
                    </InfoBar>
                    <br />
                    <br />

                    <InfoBar color={10}>
                        Super Cool Info Bar - Color: 10
                    </InfoBar>
                    <br />
                    <br />

                    <InfoBar color={11}>
                        Super Cool Info Bar - Color: 11
                    </InfoBar>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {colorSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }

    _onDropdownClick(event) {
        this.dropdown._onDropdownClick(event);
    }
}
