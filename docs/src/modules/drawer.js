import { Button, Card, Drawer, Header, TitleBar } from 'react-cm-ui';
import DrawerSubNavigation from './DrawerSubNavigation.js';
import Highlighter from '../app/highlighter.js';
import { Link } from 'react-router';
import Main from '../app/main.js';
import React from 'react';
import TableProps from '../app/tableProps.js';

const drawerSample = `import { Button, Drawer } from 'react-cm-ui';
import React from 'react';

export default class DrawerSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isDrawerOpen: false };

        this._onDrawerToggle = this._onDrawerToggle.bind(this);
    }

    render() {
        const { isDrawerOpen } = this.state;

        return (
            <div>
                <Button onClick={this._onDrawerToggle}>Open The Drawer</Button>

                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={this._onDrawerToggle}
                >
                    <Button onClick={this._onDrawerToggle}>Close The Drawer</Button>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </Drawer>
            </div>
        );
    }

    _onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }
}`;

class ModulesDrawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isBarDrawerOpen: false,
            isDrawerOpen: false,
            isFooDrawerOpen: false,
        };

        this._onDrawerToggle = this._onDrawerToggle.bind(this);
        this._onBarDrawerToggle = this._onBarDrawerToggle.bind(this);
        this._onFooDrawerToggle = this._onFooDrawerToggle.bind(this);
    }

    render() {
        const { isBarDrawerOpen, isDrawerOpen, isFooDrawerOpen } = this.state;
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'isOpen',
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
                name: '*onClose',
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
                <TitleBar title="Drawer" />

                <DrawerSubNavigation />

                <div>
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
                                <span className="font-weight-semibold">Note:</span> <code>onClose</code> is a required prop.
                            </p>
                        </Header.Subheader>
                    </Header>

                    <Button onClick={this._onDrawerToggle}>Open The Drawer</Button>

                    <Drawer
                        isOpen={isDrawerOpen}
                        onClose={this._onDrawerToggle}
                    >
                        <Button onClick={this._onDrawerToggle}>Close The Drawer</Button>
                        <Button onClick={this._onFooDrawerToggle}>Open Foo Drawer</Button>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <Drawer
                            isOpen={isFooDrawerOpen}
                            onClose={this._onFooDrawerToggle}
                        >
                            <Button onClick={this._onFooDrawerToggle}>Close Foo Drawer</Button>
                            <Button onClick={this._onBarDrawerToggle}>Open Bar Drawer</Button>

                            <p>Foo Drawer</p>

                            <Drawer
                                isOpen={isBarDrawerOpen}
                                onClose={this._onBarDrawerToggle}
                            >
                                <Button onClick={this._onBarDrawerToggle}>Close Bar Drawer</Button>

                                <Link to={{ pathname: '/modules/modal' }}>Go To The Modal Page</Link><br /><br />

                                <p>Bar Drawer</p>
                            </Drawer>
                        </Drawer>
                    </Drawer>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {drawerSample}
                    </Highlighter>
                </div>
            </Main>
        );
    }

    _onBarDrawerToggle() {
        const { isBarDrawerOpen } = this.state;

        this.setState({ isBarDrawerOpen: !isBarDrawerOpen });
    }

    _onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }

    _onFooDrawerToggle() {
        const { isFooDrawerOpen } = this.state;

        this.setState({ isFooDrawerOpen: !isFooDrawerOpen });
    }
}

export default ModulesDrawer;
