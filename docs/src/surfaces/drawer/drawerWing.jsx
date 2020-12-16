import {
    Button, Card, Drawer, Typography,
} from 'react-cm-ui';
import React from 'react';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

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
                    wing={
                        <Drawer.Wing
                            color={wingOpenType}
                            isOpen={!!wingOpenType}
                            width={wingOpenType === 'blue' ? '350px' : '100%'}
                        >
                            {wingOpenType === 'blue' ? (
                                <div>
                                    <Button onClick={() => this._onOpenWing()}>Close Wing</Button>

                                    <p>blue wing render drawer win</p>
                                </div>
                            ) : wingOpenType === 'grey' ? (
                                <div>
                                    <Button onClick={() => this._onOpenWing()}>Close Wing</Button>

                                    <p>grey wing render drawer wing</p>
                                </div>
                            ) : wingOpenType === 'white' ? (
                                <div>
                                    <Button onClick={() => this._onOpenWing()}>Close Wing</Button>

                                    <p>white wing render drawer wing</p>
                                </div>
                            ) : null}
                        </Drawer.Wing>
                    }
                >
                    <Button onClick={this._onDrawerWingToggle}>Close Drawer</Button>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <Button onClick={() => this._onOpenWing('white')}>White Wing</Button>

                    <Button onClick={() => this._onOpenWing('blue')}>Blue Wing</Button>

                    <Button onClick={() => this._onOpenWing('grey')}>Grey Wing</Button>
                </Drawer>
            </div>
        );
    }

    _onDrawerWingToggle() {
        const { isDrawerWingOpen } = this.state;

        this.setState({ isDrawerWingOpen: !isDrawerWingOpen });
    }

    _onOpenWing(type) {
        this.setState({
            wingOpenType: type || null,
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
                <Main.Content>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Drawer */}
                    <Typography anchor="drawer" variant="h2" style={{ marginTop: '55px' }} sub>
                        Wing
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        <span>For when UI requires developers to be sneaky by hiding content and actions out of the viewport.</span>
                    </Typography>

                    <Button onClick={this._onDrawerWingToggle}>Open Drawer Full of Wings</Button>

                    <Drawer
                        isOpen={isDrawerWingOpen}
                        onClose={this._onDrawerWingToggle}
                        wing={(
                            <Drawer.Wing
                                color={wingOpenType}
                                isOpen={!!wingOpenType}
                                width={wingOpenType === 'blue' ? '350px' : '100%'}
                            >
                                {wingOpenType === 'blue' ? (
                                    <div>
                                        <Button onClick={() => this._onOpenWing()}>Close Wing</Button>

                                        <p>blue wing render drawer win</p>
                                    </div>
                                ) : wingOpenType === 'grey' ? (
                                    <div>
                                        <Button onClick={() => this._onOpenWing()}>Close Wing</Button>

                                        <p>grey wing render drawer wing</p>
                                    </div>
                                ) : wingOpenType === 'white' ? (
                                    <div>
                                        <Button onClick={() => this._onOpenWing()}>Close Wing</Button>

                                        <p>white wing render drawer wing</p>
                                    </div>
                                ) : null}
                            </Drawer.Wing>
                          )}
                    >
                        <Button onClick={this._onDrawerWingToggle}>Close Drawer</Button>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <Button onClick={() => this._onOpenWing('white')}>White Wing</Button>

                        <Button onClick={() => this._onOpenWing('blue')}>Blue Wing</Button>

                        <Button onClick={() => this._onOpenWing('grey')}>Grey Wing</Button>
                    </Drawer>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {drawerWingSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }

    _onDrawerWingToggle() {
        const { isDrawerWingOpen } = this.state;

        this.setState({ isDrawerWingOpen: !isDrawerWingOpen });
    }

    _onOpenWing(type) {
        this.setState({
            wingOpenType: type || null,
        });
    }
}

export default ModulesDrawerWing;
