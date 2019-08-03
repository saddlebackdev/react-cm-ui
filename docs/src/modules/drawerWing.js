import { Button, Card, Drawer, Header, TitleBar } from 'react-cm-ui';
import DrawerSubNavigation from './DrawerSubNavigation.js';
import Highlighter from '../app/highlighter.js';
import Main from '../app/main.js';
import React from 'react';
import TableProps from '../app/tableProps.js';

const drawerWingSample = `import { Button, Drawer } from 'react-cm-ui';
import React from 'react';

export default class DrawerWingSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerWingOpen: false,
            wingOpenType: null,
        };

        this._onDrawerWingToggle = this._onDrawerWingToggle.bind(this);
        this._onOpenWing = this._onOpenWing.bind(this);
    }

    render() {
        const { isDrawerWingOpen, wingOpenType } = this.state;

        return (
            <div>
                <Button onClick={this._onDrawerWingToggle}>Open Drawer Full of Wings</Button>

                <Drawer
                    isOpen={isDrawerWingOpen}
                    onClose={this._onDrawerWingToggle}
                >
                    <Button onClick={this._onDrawerWingToggle}>Close Drawer</Button>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <Button onClick={() => this._onOpenWing('white')}>White Wing</Button>

                    <Button onClick={() => this._onOpenWing('blue')}>Blue Wing</Button>

                    <Button onClick={() => this._onOpenWing('grey')}>Grey Wing</Button>

                    <Drawer.Wing
                        color={wingOpenType}
                        isOpen={!!wingOpenType}
                        width={wingOpenType === 'blue' ? '350px' : '100%'}
                    >
                        {wingOpenType === 'blue' ? (
                            <div>blue wing render drawer wing</div>
                        ) : wingOpenType === 'grey' ? (
                            <div>grey wing render drawer wing</div>
                        ) : wingOpenType === 'white' ? (
                            <div>white wing render drawer wing</div>
                        ) : null}
                    </Drawer.Wing>
                </Drawer>
            </div>
        );
    }

    _onDrawerWingToggle() {
        const { isDrawerWingOpen } = this.state;

        this.setState({ isDrawerWingOpen: !isDrawerWingOpen });
    }

    _onOpenWing(type) {
        const { wingOpenType } = this.state;

        this.setState({
            wingOpenType: type === wingOpenType ? null : type,
        });
    }
}`;

class ModulesDrawerWing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerWingOpen: false,
            wingOpenType: null,
        };

        this._onDrawerWingToggle = this._onDrawerWingToggle.bind(this);
        this._onOpenWing = this._onOpenWing.bind(this);
    }

    render() {
        const { isDrawerWingOpen, wingOpenType } = this.state;
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'color',
                type: 'enum',
                default: 'white',
                description: 'A Drawer.Wing can have different background colors.',
                allowedTypes: 'blue, grey, white',
            }, {
                name: 'isOpen',
                type: 'bool',
                default: '',
                description: 'Required boolean for the Drawer.Wing\'s open/close state.',
                allowedTypes: '',
            }, {
                name: 'position',
                type: 'enum',
                default: 'right',
                description: 'Dependent on the parent Drawer\'s position, please change the position of the Drawer.Wing. ',
                allowedTypes: 'left, right',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Drawer\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'width',
                type: 'string',
                default: '100%',
                description: 'Give a Drawer.Wing a width.',
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
                        Wing
                        <Header.Subheader>
                            <span>For when UI requires developers to be sneaky by hiding content and actions out of the viewport.</span>
                        </Header.Subheader>
                    </Header>

                    <Button onClick={this._onDrawerWingToggle}>Open Drawer Full of Wings</Button>

                    <Drawer
                        isOpen={isDrawerWingOpen}
                        onClose={this._onDrawerWingToggle}
                    >
                        <Button onClick={this._onDrawerWingToggle}>Close Drawer</Button>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <Button onClick={() => this._onOpenWing('white')}>White Wing</Button>

                        <Button onClick={() => this._onOpenWing('blue')}>Blue Wing</Button>

                        <Button onClick={() => this._onOpenWing('grey')}>Grey Wing</Button>

                        <Drawer.Wing
                            color={wingOpenType}
                            isOpen={!!wingOpenType}
                            width={wingOpenType === 'blue' ? '350px' : '100%'}
                        >
                            {wingOpenType === 'blue' ? (
                                <div>blue wing render drawer wing</div>
                            ) : wingOpenType === 'grey' ? (
                                <div>grey wing render drawer wing</div>
                            ) : wingOpenType === 'white' ? (
                                <div>white wing render drawer wing</div>
                            ) : null}
                        </Drawer.Wing>
                    </Drawer>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {drawerWingSample}
                    </Highlighter>
                </div>
            </Main>
        );
    }

    _onDrawerWingToggle() {
        const { isDrawerWingOpen } = this.state;

        this.setState({ isDrawerWingOpen: !isDrawerWingOpen });
    }

    _onOpenWing(type) {
        const { wingOpenType } = this.state;

        this.setState({
            wingOpenType: type === wingOpenType ? null : type,
        });
    }
}

export default ModulesDrawerWing;
