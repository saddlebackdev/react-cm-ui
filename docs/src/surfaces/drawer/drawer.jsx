import {
    Button, Card, Drawer, Header,
} from '@saddlebackchurch/react-cm-ui'; // eslint-disable-line import/no-unresolved
import { Link } from 'react-router';
import React from 'react';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';
import DemoDrawer from './demo/demoDrawer';

const drawerSample = `import { Button, Drawer } '@saddlebackchurch/react-cm-ui';
import React from 'react';

export default class DrawerSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isBarDrawerOpen: false,
            isDrawerOpen: false,
            isFooDrawerOpen: false,
        };

        this.onDrawerToggle = this.onDrawerToggle.bind(this);
        this.onBarDrawerToggle = this.onBarDrawerToggle.bind(this);
        this.onFooDrawerToggle = this.onFooDrawerToggle.bind(this);
    }

    render() {
        const { isDrawerOpen } = this.state;

        return (
            <div>
                <Button onClick={this.onDrawerToggle} designVersion={2}>Open The Drawer</Button>

                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={this.onDrawerToggle}
                >
                    <Button onClick={this.onDrawerToggle} designVersion={2}>Close The Drawer</Button>
                    <Button onClick={this.onFooDrawerToggle} designVersion={2}>Open Foo Drawer</Button>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <Drawer
                        isOpen={isFooDrawerOpen}
                        onClose={this.onFooDrawerToggle}
                    >
                        <Button onClick={this.onFooDrawerToggle} designVersion={2}>Close Foo Drawer</Button>
                        <Button onClick={this.onBarDrawerToggle} designVersion={2}>Open Bar Drawer</Button>

                        <p>Foo Drawer</p>

                        <Drawer
                            isOpen={isBarDrawerOpen}
                            onClose={this.onBarDrawerToggle}
                        >
                            <Button onClick={this.onBarDrawerToggle} designVersion={2}>Close Bar Drawer</Button>

                            <Link to={{ pathname: '/modules/modal' }}>Go To The Modal Page</Link><br /><br />

                            <p>Bar Drawer</p>
                        </Drawer>
                    </Drawer>
                </Drawer>
            </div>
        );
    }

    onBarDrawerToggle() {
        const { isBarDrawerOpen } = this.state;

        this.setState({ isBarDrawerOpen: !isBarDrawerOpen });
    }

    onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }

    onFooDrawerToggle() {
        const { isFooDrawerOpen } = this.state;

        this.setState({ isFooDrawerOpen: !isFooDrawerOpen });
    }
}`;

class ModulesDrawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isBarDrawerOpen: false,
            isDemoDrawerOpen: false,
            isDrawerOpen: false,
            isFooDrawerOpen: false,
        };

        this.onDrawerToggle = this.onDrawerToggle.bind(this);
        this.onDemoDrawerToggle = this.onDemoDrawerToggle.bind(this);
        this.onBarDrawerToggle = this.onBarDrawerToggle.bind(this);
        this.onFooDrawerToggle = this.onFooDrawerToggle.bind(this);
    }

    onBarDrawerToggle() {
        const { isBarDrawerOpen } = this.state;

        this.setState({ isBarDrawerOpen: !isBarDrawerOpen });
    }

    onDemoDrawerToggle() {
        const { isDemoDrawerOpen } = this.state;

        this.setState({ isDemoDrawerOpen: !isDemoDrawerOpen });
    }

    onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }

    onFooDrawerToggle() {
        const { isFooDrawerOpen } = this.state;

        this.setState({ isFooDrawerOpen: !isFooDrawerOpen });
    }

    render() {
        const {
            isBarDrawerOpen,
            isDemoDrawerOpen,
            isDrawerOpen,
            isFooDrawerOpen,
        } = this.state;

        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: '*isOpen',
                type: 'bool',
                default: 'false',
                description: 'Boolean for the Drawer\'s open/close state.',
                allowedTypes: '',
            }, {
                name: 'maxWidth',
                type: 'number || string',
                default: '',
                description: 'Give a Drawer a maximum width.',
                allowedTypes: '',
            }, {
                name: 'onClickOutside',
                type: 'bool',
                default: 'false',
                description: 'Ability to close Drawer if clicked outside of container.',
                allowedTypes: '',
            }, {
                name: 'onClose',
                type: 'func',
                default: '',
                description: 'Required function to change the state of the Drawer.',
                allowedTypes: '',
            }, {
                name: 'onCloseComplete',
                type: 'func',
                default: '',
                description: 'Alerts the parent component that the closing animation is complete.',
                allowedTypes: '',
            }, {
                name: 'onOpenComplete',
                type: 'func',
                default: '',
                description: 'Alerts the parent component that the opening animation is complete.',
                allowedTypes: '',
            }, {
                name: 'position',
                type: 'string',
                default: 'right',
                description: 'The position of the Drawer.',
                allowedTypes: 'left, right',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Drawer\'s container. Mainly used for padding and margins.',
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

                    {/* Drawer */}
                    <Header anchor="drawer" size="large" style={{ marginTop: '55px' }} sub>
                        Drawer
                        <Header.Subheader>
                            <span>A basic drawer.</span>

                            <p className="font-size-xsmall color-static">
                                <span className="font-weight-semibold">Note:</span>
                                {' '}
                                <code>isOpen</code>
                                {' '}
                                is a required prop.
                            </p>
                        </Header.Subheader>
                    </Header>

                    <Button onClick={this.onDrawerToggle} designVersion={2}>Open The Drawer</Button>

                    {/* Demo Drawer */}
                    <Header anchor="drawer" size="large" style={{ marginTop: '55px' }} sub>
                        Demo Drawer
                        <Header.Subheader>
                            <span>Just like Page Demo</span>
                        </Header.Subheader>
                    </Header>

                    <Button onClick={this.onDemoDrawerToggle} designVersion={2}>Demo Drawer</Button>

                    <Drawer
                        isOpen={isDrawerOpen}
                    >
                        <Button onClick={this.onDrawerToggle} designVersion={2}>Close The Drawer</Button>
                        <Button onClick={this.onFooDrawerToggle} designVersion={2}>Open Foo Drawer</Button>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <Drawer
                            isOpen={isFooDrawerOpen}
                            onClose={this.onFooDrawerToggle}
                        >
                            <Button onClick={this.onFooDrawerToggle} designVersion={2}>Close Foo Drawer</Button>
                            <Button onClick={this.onBarDrawerToggle} designVersion={2}>Open Bar Drawer</Button>

                            <p>Foo Drawer</p>

                            <Drawer
                                isOpen={isBarDrawerOpen}
                                onClose={this.onBarDrawerToggle}
                            >
                                <Button onClick={this.onBarDrawerToggle} designVersion={2}>Close Bar Drawer</Button>

                                <Link to={{ pathname: '/modules/modal' }}>Go To The Modal Page</Link>
                                <br />
                                <br />

                                <p>Bar Drawer</p>
                            </Drawer>
                        </Drawer>
                    </Drawer>

                    <DemoDrawer
                        isOpen={isDemoDrawerOpen}
                        onToggleDrawer={this.onDemoDrawerToggle}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {drawerSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}

export default ModulesDrawer;
