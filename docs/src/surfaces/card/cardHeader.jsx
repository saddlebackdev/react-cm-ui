import PropTypes from 'prop-types';
import React from 'react';
import {
    Card, Grid, Header, SubNavigation, TitleBar,
} from 'react-cm-ui';

// Docs UI Components
import Block from '../../global/block';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';
import CardSubNavigation from './cardSubNavigation';

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

                <CardSubNavigation />

                <Main.Content>
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

        return (
            <div>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Collapsable */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Header
                    <Header.Subheader>
                        Cards can have a custom header.
                    </Header.Subheader>
                </Header>

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
