'use strict';

import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Drawer, Header, Icon, SubNavigation, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const drawerSample = `import React from 'react';

import { Button, Drawer } from 'react-cm-ui';

export default class DrawerSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isBasicDrawerOpen: false };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onBasicDrawerClick.bind(this)}>Open The Basic Drawer</Button>

                <Drawer
                    isOpen={this.state.isBasicDrawerOpen}
                    onClose={this._onBasicDrawerClick.bind(this)}
                    title="The Best Title"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Drawer>
            </div>
        );
    }

    _onBasicDrawerClick() {
        this.setState({ isBasicDrawerOpen: !this.state.isBasicDrawerOpen });
    }

}`;

const closeButtonsSample = `import React from 'react';

import { Button, Drawer } from 'react-cm-ui';

export default class CloseButtonsSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isCloseButtonDrawerOpen: false,
            isCustomCloseButtonDrawerOpen: false
        };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onCloseButtonDrawerClick.bind(this)}>A Chevron-WH-Right Close Button</Button><br /><br />
                <Button onClick={this._onCustomCloseButtonDrawerClick.bind(this)}>A Custom Close Button</Button>

                <Drawer
                    closeButton="chevron-wh-right"
                    isOpen={this.state.isCloseButtonDrawerOpen}
                    onClose={this._onCloseButtonDrawerClick.bind(this)}
                    title="What A Wonderful Close Button"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Drawer>

                <Drawer
                    closeButton={(
                        <Icon
                            compact={true}
                            onClick={this._onCustomCloseButtonDrawerClick.bind(this)}
                            type="times"
                        />
                    )}
                    isOpen={this.state.isCustomCloseButtonDrawerOpen}
                    onClose={this._onCustomCloseButtonDrawerClick.bind(this)}
                    title="What A Wonderful Close Button"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Drawer>
            </div>
        );
    }

    _onBasicDrawerClick() {
        this.setState({ isBasicDrawerOpen: !this.state.isBasicDrawerOpen });
    }

}`;

const maxWidthSample = `import React from 'react';

import { Button, Drawer } from 'react-cm-ui';

export default class MaxWidthSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isMaxWidthDrawerOpen: false };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onMaxWidthDrawerClick.bind(this)}>Mini Drawer</Button>

                <Drawer
                    closeButton={(
                        <Icon
                            compact={true}
                            onClick={this._onMaxWidthDrawerClick.bind(this)}
                            type="times"
                        />
                    )}
                    isOpen={this.state.isMaxWidthDrawerOpen}
                    onClose={this._onMaxWidthDrawerClick.bind(this)}
                    maxWidth={320}
                    title="So Small"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Drawer>
            </div>
        );
    }

    _onMaxWidthDrawerClick(arg) {
        this.setState({ isMaxWidthDrawerOpen: !this.state.isMaxWidthDrawerOpen });
    }

}`;

const onClickOutsideSample = `import React from 'react';

import { Button, Drawer } from 'react-cm-ui';

export default class OnClickOutsideSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isOnClickOutsideDrawerOpen: false };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onClickOutsideDrawerClick.bind(this)}>Open The Drawer</Button>

                <Drawer
                    isOpen={this.state.isOnClickOutsideDrawerOpen}
                    onClickOutside={true}
                    onClose={this._onClickOutsideDrawerClick.bind(this)}
                    title="Click Outside of The Drawer"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Drawer>
            </div>
        );
    }

    _onClickOutsideDrawerClick(arg) {
        this.setState({ isOnClickOutsideDrawerOpen: !this.state.isOnClickOutsideDrawerOpen });
    }

}`;

const headerSample = `import React from 'react';

import { Button, Drawer } from 'react-cm-ui';

export default class HeaderSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isDrawerHeaderOpen: false };
    }

    render() {
        return (
            <div>
                <Drawer
                    isOpen={this.state.isDrawerHeaderOpen}
                    header={true}
                    onClose={this._onDrawerHeaderClick.bind(this)}
                    title="Custom Header"
                >
                    <Drawer.Header>
                        <SubNavigation style={{ margin: 0 }}>
                            <SubNavigation.Item label="Button 1" />
                            <SubNavigation.Item label="Button 2" />
                            <SubNavigation.Item label="Button 3" />
                            <SubNavigation.Item label="Button 4" />
                        </SubNavigation>
                    </Drawer.Header>

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Drawer>
            </div>
        );
    }

    _onDrawerHeaderClick() {
        this.setState({ isDrawerHeaderOpen: !this.state.isDrawerHeaderOpen });
    }

}`;

const inverseSample = `import React from 'react';

import { Button, Drawer } from 'react-cm-ui';

export default class InverseSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isDrawerInverseOpen: false };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onDrawerInverseClick.bind(this)}>Open The Inversed Drawer</Button>

                <Drawer
                    isOpen={this.state.isDrawerInverseOpen}
                    inverse={true}
                    onClose={this._onDrawerInverseClick.bind(this)}
                    title="A Inversed Drawer"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Drawer>
            </div>
        );
    }

    _onDrawerInverseClick() {
        this.setState({ isDrawerInverseOpen: !this.state.isDrawerInverseOpen });
    }

}`;

const pathSample = `import React from 'react';

import { Button, Drawer } from 'react-cm-ui';

export default class PathSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drawerOnClosePath: null,
            isPathDrawerOpen: false
        };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onPathDrawerClick.bind(this)}>Open The Basic Drawer</Button>

                <Drawer
                    isOpen={this.state.isPathDrawerOpen}
                    onClose={this._onPathDrawerClick.bind(this)}
                    path={this.state.drawerOnClosePath}
                    title="The Best Title"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p><a onClick={this._onPathDrawerClick.bind(this, '/elements/button')}>Click me to close the Drawer and change the path.</a></p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                </Drawer>
            </div>
        );
    }

    _onPathDrawerClick(path) {
        this.setState({
            isPathDrawerOpen: !this.state.isPathDrawerOpen,
            drawerOnClosePath: path || this.state.drawerOnClosePath
        });
    }

}`;

const nestHeaderSample = `import _ from 'lodash';
import React from 'react';

import { Button, Drawer } from 'react-cm-ui';

export default class NestHeaderSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nestHeaderDrawer: false,
            nestHeaderIndex: 0
        };
    }

    render() {
        const { nestHeaderIndex } = this.state;
        const nestHeaderNavRender = (
            <SubNavigation
                drawer={true}
                onClick={this._onNestHeaderNavClick.bind(this)}
                selected={nestHeaderIndex}
                style={{ margin: 0 }}
            >
                <SubNavigation.Item label="Button 1" />
                <SubNavigation.Item label="Button 2" />
            </SubNavigation>
        );

        return (
            <div>
                <Button onClick={this._onNestHeaderDrawerClick.bind(this)}>Open Test Drawer</Button>

                <Drawer
                    isOpen={this.state.nestHeaderDrawer}
                    header={true}
                    onClose={this._onNestHeaderDrawerClick.bind(this)}
                    title="Child Component Header Nesting"
                >
                    {nestHeaderIndex === 0 ? (
                        <NestHeader1DrawerComponent>
                            {nestHeaderNavRender}
                        </NestHeader1DrawerComponent>
                    ) : nestHeaderIndex === 1 ? (
                        <NestHeader2DrawerComponent>
                            {nestHeaderNavRender}
                        </NestHeader2DrawerComponent>
                    ) : null}
                </Drawer>
            </div>
        );
    }

    _onNestHeaderDrawerClick() {
        this.setState({ nestHeaderDrawer: !this.state.nestHeaderDrawer });
    }

}

class NestHeader1DrawerComponent extends React.Component {

    render() {
        const { closeButton, inverse, onClose, title, titleTruncate } = this.props;

        return (
            <div>
                <Drawer.Header
                    closeButton={closeButton}
                    inverse={inverse}
                    key={'drawer-header' + _.kebabCase(title)}
                    onClose={onClose}
                    title={title}
                    titleTruncate={titleTruncate}
                >
                    {this.props.children}

                    <Container.ActionBar style={{ textAlign: 'right' }}>
                        <Button color="success" onClick={this._onClick.bind(this)}>Click Me!</Button>
                    </Container.ActionBar>
                </Drawer.Header>

                <div className="drawer-children">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                </div>
            </div>
        );
    }

    _onClick() {
        console.log('Clicked!');
    }

};

NestHeader1DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool
};

class NestHeader2DrawerComponent extends React.Component {

    render() {
        const { closeButton, inverse, onClose, title, titleTruncate } = this.props;

        return (
            <div>
                <Drawer.Header
                    closeButton={closeButton}
                    inverse={inverse}
                    key={'drawer-header' + _.kebabCase(title)}
                    onClose={onClose}
                    title={title}
                    titleTruncate={titleTruncate}
                >
                    {this.props.children}

                    <Container.ActionBar style={{ textAlign: 'right' }}>
                        <Button color="alternate" onClick={this._onClick.bind(this)}>Cancel</Button>
                        <Button color="success" onClick={this._onClick.bind(this)}>Click Me!</Button>
                    </Container.ActionBar>
                </Drawer.Header>

                <div className="drawer-children">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae justo sed leo eleifend pellentesque. Aliquam erat volutpat. Nunc euismod pharetra mauris, nec gravida orci condimentum et. Etiam fringilla vel tellus ac viverra. Etiam iaculis consectetur purus ac rutrum. Integer nec ipsum ac nunc convallis fermentum. Aliquam posuere lorem at facilisis molestie. Phasellus vel vulputate nisi. Mauris tempus eu leo non consequat. Donec sit amet eleifend urna. Integer maximus venenatis vestibulum. Nunc vulputate cursus pellentesque.</p>

                    <p>Suspendisse at leo tempor, congue neque eget, scelerisque nunc. Phasellus in erat at ipsum faucibus pretium vel quis nisi. Donec lobortis vel arcu eu aliquam. Phasellus quis nibh ac augue eleifend condimentum sed sit amet dui. Morbi eu pulvinar massa. Proin hendrerit ac velit a rutrum. Sed et condimentum tortor. Donec tincidunt tempor sem, a aliquam arcu tristique eget. Curabitur ac luctus lectus, id aliquam massa. Nam ex dolor, volutpat in leo eget, auctor molestie ante. Nulla sed pharetra est. Pellentesque dapibus erat enim, mollis feugiat erat semper nec. Fusce quis augue vitae mauris ullamcorper viverra.</p>

                    <p>Sed nec molestie turpis. Pellentesque ut felis diam. Nullam eleifend magna in tellus egestas blandit. Duis a nisl ac neque tincidunt finibus. Pellentesque sed hendrerit risus. Morbi ornare erat ut leo vulputate pulvinar. Donec massa purus, molestie eget pretium ut, convallis a nisi. Nam facilisis lorem eros, quis pharetra ipsum dapibus id. Aenean sapien turpis, fermentum et sapien in, dictum molestie purus.</p>

                    <p>Phasellus cursus ante velit, ac interdum nisl faucibus a. Mauris maximus feugiat risus, vitae volutpat leo sodales non. Sed sed mollis lectus. Pellentesque blandit varius sapien, dignissim venenatis massa bibendum vitae. Sed porta nulla et auctor mattis. Praesent lacinia erat et tincidunt viverra. Curabitur sit amet dolor ut lorem lacinia ultricies. Donec eleifend turpis non justo feugiat fermentum. Maecenas porttitor risus erat, eu gravida magna pharetra eu.</p>

                    <p>Duis efficitur pellentesque tempus. In mauris mauris, pulvinar id euismod vel, faucibus at nibh. Ut lacinia id leo at aliquet. Proin non feugiat erat, quis aliquet metus. Aliquam eget consequat tortor, vitae pellentesque dolor. Vestibulum non condimentum arcu. Integer eu velit a metus fringilla maximus.</p>

                    <p>Donec iaculis consequat nunc, a fermentum nibh rhoncus in. Donec sollicitudin vehicula sem, ac egestas libero rhoncus in. Morbi venenatis ex porta eros efficitur volutpat. Vestibulum a nulla ex. Mauris in mauris convallis, tincidunt velit eu, tincidunt arcu. Donec ac justo eget arcu suscipit fermentum. Integer a aliquet eros. Nunc bibendum leo a pulvinar dapibus. Nunc consectetur quam eget justo pretium, sed tincidunt neque aliquet. Curabitur interdum blandit lectus nec commodo. Ut placerat convallis accumsan.</p>

                    <p>Morbi laoreet risus eleifend venenatis rhoncus. Pellentesque lacinia massa sed scelerisque suscipit. Phasellus congue laoreet velit sed rutrum. In sapien erat, dapibus a eleifend in, eleifend vel diam. Phasellus dolor ipsum, accumsan quis urna in, porta porta libero. Vivamus nec tempus ligula. Nullam a eleifend diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices sem ex, ac viverra turpis eleifend vel. Maecenas interdum blandit lorem, quis rhoncus ante finibus vitae. Donec vitae lectus non mauris tincidunt elementum eget ut urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar massa sapien, a consectetur massa eleifend in. Cras tincidunt, neque vitae malesuada pellentesque, ex purus pulvinar sem, in iaculis mauris diam sed ante. Nullam elementum massa nec cursus sagittis. Aenean eleifend sodales ipsum, a bibendum risus porta at.</p>

                    <p>Cras vel elit in mauris maximus facilisis sit amet non purus. In in metus molestie neque sollicitudin iaculis et sed mauris. Proin dapibus fermentum pretium. Etiam et risus vitae nunc convallis lobortis id eu odio. Nulla vel mauris massa. Nullam posuere, lacus quis finibus tempor, eros arcu accumsan turpis, in ultrices magna nulla sed sapien. Fusce ullamcorper iaculis mi at vehicula. Ut sit amet semper lorem, et viverra velit. Donec consequat tempus orci, vel consectetur lacus convallis a.</p>

                    <p>Nunc nec sapien ipsum. Etiam nec urna et arcu tempus viverra. Nulla scelerisque nulla vel tortor vestibulum laoreet. Vivamus convallis eros pharetra rutrum consequat. Quisque urna lorem, rutrum sit amet tellus vel, suscipit blandit odio. Ut gravida iaculis auctor. In efficitur dignissim nunc, ac ornare quam sollicitudin eu. Fusce lacinia porttitor magna in luctus. Aenean ac lorem nibh.</p>

                    <p>In at velit cursus, congue tortor ut, lacinia felis. Donec lacinia ex dui, sit amet varius magna efficitur eget. Donec nisi metus, consequat vitae sollicitudin non, gravida id ipsum. Curabitur malesuada posuere orci eget bibendum. Proin et tempor tortor. Curabitur nec ipsum luctus, consectetur lacus non, ornare odio. Nam tristique maximus augue, et auctor lectus luctus et. Etiam consequat felis non velit vestibulum, quis viverra lorem elementum. Pellentesque fringilla iaculis tempor. Suspendisse vitae tortor orci. Pellentesque ornare sem vitae dignissim pulvinar.</p>
                </div>
            </div>
        );
    }

    _onClick() {
        console.log('Clicked!');
    }

};

NestHeader2DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool
};

class NestHeader3DrawerComponent extends React.Component {

    render() {
        const { closeButton, inverse, onClose, title, titleTruncate } = this.props;

        return (
            <div>
                <Drawer.Header
                    closeButton={closeButton}
                    inverse={inverse}
                    key={'drawer-header' + _.kebabCase(title)}
                    onClose={onClose}
                    title={title}
                    titleTruncate={titleTruncate}
                >
                    {this.props.children}
                </Drawer.Header>

                <div className="drawer-children">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae justo sed leo eleifend pellentesque. Aliquam erat volutpat. Nunc euismod pharetra mauris, nec gravida orci condimentum et. Etiam fringilla vel tellus ac viverra. Etiam iaculis consectetur purus ac rutrum. Integer nec ipsum ac nunc convallis fermentum. Aliquam posuere lorem at facilisis molestie. Phasellus vel vulputate nisi. Mauris tempus eu leo non consequat. Donec sit amet eleifend urna. Integer maximus venenatis vestibulum. Nunc vulputate cursus pellentesque.</p>

                    <p>Suspendisse at leo tempor, congue neque eget, scelerisque nunc. Phasellus in erat at ipsum faucibus pretium vel quis nisi. Donec lobortis vel arcu eu aliquam. Phasellus quis nibh ac augue eleifend condimentum sed sit amet dui. Morbi eu pulvinar massa. Proin hendrerit ac velit a rutrum. Sed et condimentum tortor. Donec tincidunt tempor sem, a aliquam arcu tristique eget. Curabitur ac luctus lectus, id aliquam massa. Nam ex dolor, volutpat in leo eget, auctor molestie ante. Nulla sed pharetra est. Pellentesque dapibus erat enim, mollis feugiat erat semper nec. Fusce quis augue vitae mauris ullamcorper viverra.</p>

                    <p>Sed nec molestie turpis. Pellentesque ut felis diam. Nullam eleifend magna in tellus egestas blandit. Duis a nisl ac neque tincidunt finibus. Pellentesque sed hendrerit risus. Morbi ornare erat ut leo vulputate pulvinar. Donec massa purus, molestie eget pretium ut, convallis a nisi. Nam facilisis lorem eros, quis pharetra ipsum dapibus id. Aenean sapien turpis, fermentum et sapien in, dictum molestie purus.</p>

                    <p>Phasellus cursus ante velit, ac interdum nisl faucibus a. Mauris maximus feugiat risus, vitae volutpat leo sodales non. Sed sed mollis lectus. Pellentesque blandit varius sapien, dignissim venenatis massa bibendum vitae. Sed porta nulla et auctor mattis. Praesent lacinia erat et tincidunt viverra. Curabitur sit amet dolor ut lorem lacinia ultricies. Donec eleifend turpis non justo feugiat fermentum. Maecenas porttitor risus erat, eu gravida magna pharetra eu.</p>

                    <p>Duis efficitur pellentesque tempus. In mauris mauris, pulvinar id euismod vel, faucibus at nibh. Ut lacinia id leo at aliquet. Proin non feugiat erat, quis aliquet metus. Aliquam eget consequat tortor, vitae pellentesque dolor. Vestibulum non condimentum arcu. Integer eu velit a metus fringilla maximus.</p>

                    <p>Donec iaculis consequat nunc, a fermentum nibh rhoncus in. Donec sollicitudin vehicula sem, ac egestas libero rhoncus in. Morbi venenatis ex porta eros efficitur volutpat. Vestibulum a nulla ex. Mauris in mauris convallis, tincidunt velit eu, tincidunt arcu. Donec ac justo eget arcu suscipit fermentum. Integer a aliquet eros. Nunc bibendum leo a pulvinar dapibus. Nunc consectetur quam eget justo pretium, sed tincidunt neque aliquet. Curabitur interdum blandit lectus nec commodo. Ut placerat convallis accumsan.</p>

                    <p>Morbi laoreet risus eleifend venenatis rhoncus. Pellentesque lacinia massa sed scelerisque suscipit. Phasellus congue laoreet velit sed rutrum. In sapien erat, dapibus a eleifend in, eleifend vel diam. Phasellus dolor ipsum, accumsan quis urna in, porta porta libero. Vivamus nec tempus ligula. Nullam a eleifend diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices sem ex, ac viverra turpis eleifend vel. Maecenas interdum blandit lorem, quis rhoncus ante finibus vitae. Donec vitae lectus non mauris tincidunt elementum eget ut urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar massa sapien, a consectetur massa eleifend in. Cras tincidunt, neque vitae malesuada pellentesque, ex purus pulvinar sem, in iaculis mauris diam sed ante. Nullam elementum massa nec cursus sagittis. Aenean eleifend sodales ipsum, a bibendum risus porta at.</p>

                    <p>Cras vel elit in mauris maximus facilisis sit amet non purus. In in metus molestie neque sollicitudin iaculis et sed mauris. Proin dapibus fermentum pretium. Etiam et risus vitae nunc convallis lobortis id eu odio. Nulla vel mauris massa. Nullam posuere, lacus quis finibus tempor, eros arcu accumsan turpis, in ultrices magna nulla sed sapien. Fusce ullamcorper iaculis mi at vehicula. Ut sit amet semper lorem, et viverra velit. Donec consequat tempus orci, vel consectetur lacus convallis a.</p>

                    <p>Nunc nec sapien ipsum. Etiam nec urna et arcu tempus viverra. Nulla scelerisque nulla vel tortor vestibulum laoreet. Vivamus convallis eros pharetra rutrum consequat. Quisque urna lorem, rutrum sit amet tellus vel, suscipit blandit odio. Ut gravida iaculis auctor. In efficitur dignissim nunc, ac ornare quam sollicitudin eu. Fusce lacinia porttitor magna in luctus. Aenean ac lorem nibh.</p>

                    <p>In at velit cursus, congue tortor ut, lacinia felis. Donec lacinia ex dui, sit amet varius magna efficitur eget. Donec nisi metus, consequat vitae sollicitudin non, gravida id ipsum. Curabitur malesuada posuere orci eget bibendum. Proin et tempor tortor. Curabitur nec ipsum luctus, consectetur lacus non, ornare odio. Nam tristique maximus augue, et auctor lectus luctus et. Etiam consequat felis non velit vestibulum, quis viverra lorem elementum. Pellentesque fringilla iaculis tempor. Suspendisse vitae tortor orci. Pellentesque ornare sem vitae dignissim pulvinar.</p>
                </div>
            </div>
        );
    }

};

NestHeader3DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool
};`;

export default class ModulesDrawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drawerOnClosePath: null,
            isBasicDrawerOpen: false,
            isCloseButtonDrawerOpen: false,
            isCustomCloseButtonDrawerOpen: false,
            isDrawerHeaderOpen: false,
            isDrawerInverseOpen: false,
            isMaxWidthDrawerOpen: false,
            isOnClickOutsideDrawerOpen: false,
            isPathDrawerOpen: false,
            nestHeaderDrawer: false,
            nestHeaderIndex: 0
        };
    }

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'closeButton',
                type: 'string || object',
                default: '',
                description: 'A Drawer\'s close button can be changed using a string or giving custom JSX.',
                allowedTypes: ''
            }, {
                name: 'header',
                type: 'bool',
                default: '',
                description: 'Required boolean for the Drawer\'s custom Header.',
                allowedTypes: ''
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'A Dropdown can be inversed.',
                allowedTypes: ''
            }, {
                name: 'isOpen',
                type: 'bool',
                default: 'false',
                description: 'Required boolean for the Drawer\'s open/close state.',
                allowedTypes: ''
            }, {
                name: 'maxWidth',
                type: 'number || string',
                default: '',
                description: 'Give a Drawer a maximum width.',
                allowedTypes: ''
            }, {
                name: 'onClickOutside',
                type: 'bool',
                default: 'false',
                description: 'Ability to close Drawer if clicked outside of container.',
                allowedTypes: ''
            }, {
                name: 'onClose',
                type: 'func',
                default: '',
                description: 'Required function to change the state of the Drawer.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Drawer\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'title',
                type: 'string',
                default: '',
                description: 'Required string to give a Drawer a title.',
                allowedTypes: ''
            }
        ];

        const { nestHeaderIndex } = this.state;
        const nestHeaderNavRender = (
            <SubNavigation
                drawer={true}
                onClick={this._onNestHeaderNavClick.bind(this)}
                selected={nestHeaderIndex}
                style={{ margin: 0 }}
            >
                <SubNavigation.Item label="Section 1" />
                <SubNavigation.Item label="Section 2" />
                <SubNavigation.Item label="Section 3" />
            </SubNavigation>
        );

        return (
            <Main page="headers">
                <TitleBar title="Drawer" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Drawer */}
                <Header anchor="drawer" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Drawer
                    <Header.Subheader>
                        A basic drawer.
                    </Header.Subheader>
                </Header>

                <p className="font-size-xsmall color-static">
                    <span className="font-weight-semibold">Note:</span> <code>isOpen</code>, <code>onClose</code>, and <code>title</code> are all required props.
                </p>

                <Button onClick={this._onBasicDrawerClick.bind(this)}>Open The Basic Drawer</Button>

                <Drawer
                    isOpen={this.state.isBasicDrawerOpen}
                    onClose={this._onBasicDrawerClick.bind(this)}
                    title="The Best Title"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                </Drawer>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {drawerSample}
                </Highlighter>

                {/* Close Button */}
                <Header anchor="close-button" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Close Button
                    <Header.Subheader>
                        A Drawer's close button can be changed using a string or giving custom JSX.
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onCloseButtonDrawerClick.bind(this)}>A Chevron-WH-Right Close Button</Button><br /><br />
                <Button onClick={this._onCustomCloseButtonDrawerClick.bind(this)}>A Custom Close Button</Button>

                <Drawer
                    closeButton="chevron-wh-right"
                    isOpen={this.state.isCloseButtonDrawerOpen}
                    onClose={this._onCloseButtonDrawerClick.bind(this)}
                    title="What A Wonderful Close Button"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                </Drawer>

                <Drawer
                    closeButton={(
                        <Icon
                            compact={true}
                            onClick={this._onCustomCloseButtonDrawerClick.bind(this)}
                            type="times"
                        />
                    )}
                    isOpen={this.state.isCustomCloseButtonDrawerOpen}
                    onClose={this._onCustomCloseButtonDrawerClick.bind(this)}
                    title="What A Wonderful Close Button"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                </Drawer>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {closeButtonsSample}
                </Highlighter>

                {/* Header */}
                <Header anchor="header" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Header
                    <Header.Subheader>
                        A Drawer can be closed when click outside of it's container.
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onDrawerHeaderClick.bind(this)}>Open The Drawer</Button>

                <Drawer
                    isOpen={this.state.isDrawerHeaderOpen}
                    header={true}
                    onClose={this._onDrawerHeaderClick.bind(this)}
                    title="Custom Header"
                >
                    <Drawer.Header>
                        <SubNavigation style={{ margin: 0 }}>
                            <SubNavigation.Item label="Button 1" />
                            <SubNavigation.Item label="Button 2" />
                            <SubNavigation.Item label="Button 3" />
                            <SubNavigation.Item label="Button 4" />
                        </SubNavigation>
                    </Drawer.Header>

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Drawer>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {headerSample}
                </Highlighter>

                {/* Inverse */}
                <Header anchor="inverse" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Inverse
                    <Header.Subheader>
                        A Drawer can be inversed..
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onDrawerInverseClick.bind(this)}>Open The Inversed Drawer</Button>

                <Drawer
                    isOpen={this.state.isDrawerInverseOpen}
                    inverse={true}
                    onClose={this._onDrawerInverseClick.bind(this)}
                    title="A Inversed Drawer"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Drawer>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {inverseSample}
                </Highlighter>

                {/* Max Width */}
                <Header anchor="max-width" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Max Width
                    <Header.Subheader>
                        A Drawer's max width can be defined and overwritten.
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onMaxWidthDrawerClick.bind(this)}>Mini Drawer</Button>

                <Drawer
                    closeButton={(
                        <Icon
                            compact={true}
                            onClick={this._onMaxWidthDrawerClick.bind(this)}
                            type="times"
                        />
                    )}
                    isOpen={this.state.isMaxWidthDrawerOpen}
                    onClose={this._onMaxWidthDrawerClick.bind(this)}
                    maxWidth={320}
                    title="So Small"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                </Drawer>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {maxWidthSample}
                </Highlighter>

                {/* On Click Outside */}
                <Header anchor="onclick" size="large" style={{ marginTop: '55px' }} sub={true}>
                    On Click Outside
                    <Header.Subheader>
                        A Drawer can be closed when click outside of it's container.
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onClickOutsideDrawerClick.bind(this)}>Open The Drawer</Button>

                <Drawer
                    isOpen={this.state.isOnClickOutsideDrawerOpen}
                    onClickOutside={true}
                    onClose={this._onClickOutsideDrawerClick.bind(this)}
                    title="Click Outside of The Drawer"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                </Drawer>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onClickOutsideSample}
                </Highlighter>

                {/* Path */}
                <Header anchor="path" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Path
                    <Header.Subheader>
                        Route to a different path from a drawer.
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onPathDrawerClick.bind(this)}>Open The Basic Drawer</Button>

                <Drawer
                    isOpen={this.state.isPathDrawerOpen}
                    onClose={this._onPathDrawerClick.bind(this)}
                    path={this.state.drawerOnClosePath}
                    title="The Best Title"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p><a onClick={this._onPathDrawerClick.bind(this, '/elements/button')}>Click me to close the Drawer and change the path.</a></p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                </Drawer>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {pathSample}
                </Highlighter>

                {/* Child Component Header Nesting */}
                <Header anchor="child-component-header-nesting" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Child Component Header Nesting
                    <Header.Subheader>
                        Nest a Header inside of a child component.
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onNestHeaderDrawerClick.bind(this)}>Open Test Drawer</Button>

                <Drawer
                    isOpen={this.state.nestHeaderDrawer}
                    header={true}
                    onClose={this._onNestHeaderDrawerClick.bind(this)}
                    title="Child Component Header Nesting"
                >
                    {nestHeaderIndex === 0 ? (
                        <NestHeader1DrawerComponent>
                            {nestHeaderNavRender}
                        </NestHeader1DrawerComponent>
                    ) : nestHeaderIndex === 1 ? (
                        <NestHeader2DrawerComponent>
                            {nestHeaderNavRender}
                        </NestHeader2DrawerComponent>
                    ) : nestHeaderIndex === 2 ? (
                        <NestHeader3DrawerComponent>
                            {nestHeaderNavRender}
                        </NestHeader3DrawerComponent>
                    ) : null}
                </Drawer>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {nestHeaderSample}
                </Highlighter>
            </Main>
        );
    }

    _onBasicDrawerClick() {
        this.setState({ isBasicDrawerOpen: !this.state.isBasicDrawerOpen });
    }

    _onCloseButtonDrawerClick() {
        this.setState({ isCloseButtonDrawerOpen: !this.state.isCloseButtonDrawerOpen });
    }

    _onCustomCloseButtonDrawerClick() {
        this.setState({ isCustomCloseButtonDrawerOpen: !this.state.isCustomCloseButtonDrawerOpen });
    }

    _onMaxWidthDrawerClick(arg) {
        this.setState({ isMaxWidthDrawerOpen: !this.state.isMaxWidthDrawerOpen });
    }

    _onClickOutsideDrawerClick(arg) {
        this.setState({ isOnClickOutsideDrawerOpen: !this.state.isOnClickOutsideDrawerOpen });
    }

    _onDrawerHeaderClick() {
        this.setState({ isDrawerHeaderOpen: !this.state.isDrawerHeaderOpen });
    }

    _onDrawerInverseClick() {
        this.setState({ isDrawerInverseOpen: !this.state.isDrawerInverseOpen });
    }

    _onPathDrawerClick(path) {
        this.setState({
            isPathDrawerOpen: !this.state.isPathDrawerOpen,
            drawerOnClosePath: path || this.state.drawerOnClosePath
        });
    }

    _onNestHeaderDrawerClick() {
        this.setState({ nestHeaderDrawer: !this.state.nestHeaderDrawer });
    }

    _onNestHeaderNavClick(index) {
        this.setState({ nestHeaderIndex: index });
    }

}

ModulesDrawer.contextTypes = {
    router: PropTypes.object.isRequired
}

class NestHeader1DrawerComponent extends React.Component {

    render() {
        const { closeButton, inverse, onClose, title, titleTruncate } = this.props;

        return (
            <div>
                <Drawer.Header
                    closeButton={closeButton}
                    inverse={inverse}
                    onClose={onClose}
                    title={title}
                    titleTruncate={titleTruncate}
                >
                    {this.props.children}

                    <Container.ActionBar style={{ textAlign: 'right' }}>
                        <Button color="success" onClick={this._onClick.bind(this)}>Click Me!</Button>
                    </Container.ActionBar>
                </Drawer.Header>

                <div className="drawer-children">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae justo sed leo eleifend pellentesque. Aliquam erat volutpat. Nunc euismod pharetra mauris, nec gravida orci condimentum et. Etiam fringilla vel tellus ac viverra. Etiam iaculis consectetur purus ac rutrum. Integer nec ipsum ac nunc convallis fermentum. Aliquam posuere lorem at facilisis molestie. Phasellus vel vulputate nisi. Mauris tempus eu leo non consequat. Donec sit amet eleifend urna. Integer maximus venenatis vestibulum. Nunc vulputate cursus pellentesque.</p>

                    <p>Suspendisse at leo tempor, congue neque eget, scelerisque nunc. Phasellus in erat at ipsum faucibus pretium vel quis nisi. Donec lobortis vel arcu eu aliquam. Phasellus quis nibh ac augue eleifend condimentum sed sit amet dui. Morbi eu pulvinar massa. Proin hendrerit ac velit a rutrum. Sed et condimentum tortor. Donec tincidunt tempor sem, a aliquam arcu tristique eget. Curabitur ac luctus lectus, id aliquam massa. Nam ex dolor, volutpat in leo eget, auctor molestie ante. Nulla sed pharetra est. Pellentesque dapibus erat enim, mollis feugiat erat semper nec. Fusce quis augue vitae mauris ullamcorper viverra.</p>

                    <p>Sed nec molestie turpis. Pellentesque ut felis diam. Nullam eleifend magna in tellus egestas blandit. Duis a nisl ac neque tincidunt finibus. Pellentesque sed hendrerit risus. Morbi ornare erat ut leo vulputate pulvinar. Donec massa purus, molestie eget pretium ut, convallis a nisi. Nam facilisis lorem eros, quis pharetra ipsum dapibus id. Aenean sapien turpis, fermentum et sapien in, dictum molestie purus.</p>

                    <p>Phasellus cursus ante velit, ac interdum nisl faucibus a. Mauris maximus feugiat risus, vitae volutpat leo sodales non. Sed sed mollis lectus. Pellentesque blandit varius sapien, dignissim venenatis massa bibendum vitae. Sed porta nulla et auctor mattis. Praesent lacinia erat et tincidunt viverra. Curabitur sit amet dolor ut lorem lacinia ultricies. Donec eleifend turpis non justo feugiat fermentum. Maecenas porttitor risus erat, eu gravida magna pharetra eu.</p>

                    <p>Duis efficitur pellentesque tempus. In mauris mauris, pulvinar id euismod vel, faucibus at nibh. Ut lacinia id leo at aliquet. Proin non feugiat erat, quis aliquet metus. Aliquam eget consequat tortor, vitae pellentesque dolor. Vestibulum non condimentum arcu. Integer eu velit a metus fringilla maximus.</p>

                    <p>Donec iaculis consequat nunc, a fermentum nibh rhoncus in. Donec sollicitudin vehicula sem, ac egestas libero rhoncus in. Morbi venenatis ex porta eros efficitur volutpat. Vestibulum a nulla ex. Mauris in mauris convallis, tincidunt velit eu, tincidunt arcu. Donec ac justo eget arcu suscipit fermentum. Integer a aliquet eros. Nunc bibendum leo a pulvinar dapibus. Nunc consectetur quam eget justo pretium, sed tincidunt neque aliquet. Curabitur interdum blandit lectus nec commodo. Ut placerat convallis accumsan.</p>

                    <p>Morbi laoreet risus eleifend venenatis rhoncus. Pellentesque lacinia massa sed scelerisque suscipit. Phasellus congue laoreet velit sed rutrum. In sapien erat, dapibus a eleifend in, eleifend vel diam. Phasellus dolor ipsum, accumsan quis urna in, porta porta libero. Vivamus nec tempus ligula. Nullam a eleifend diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices sem ex, ac viverra turpis eleifend vel. Maecenas interdum blandit lorem, quis rhoncus ante finibus vitae. Donec vitae lectus non mauris tincidunt elementum eget ut urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar massa sapien, a consectetur massa eleifend in. Cras tincidunt, neque vitae malesuada pellentesque, ex purus pulvinar sem, in iaculis mauris diam sed ante. Nullam elementum massa nec cursus sagittis. Aenean eleifend sodales ipsum, a bibendum risus porta at.</p>

                    <p>Cras vel elit in mauris maximus facilisis sit amet non purus. In in metus molestie neque sollicitudin iaculis et sed mauris. Proin dapibus fermentum pretium. Etiam et risus vitae nunc convallis lobortis id eu odio. Nulla vel mauris massa. Nullam posuere, lacus quis finibus tempor, eros arcu accumsan turpis, in ultrices magna nulla sed sapien. Fusce ullamcorper iaculis mi at vehicula. Ut sit amet semper lorem, et viverra velit. Donec consequat tempus orci, vel consectetur lacus convallis a.</p>

                    <p>Nunc nec sapien ipsum. Etiam nec urna et arcu tempus viverra. Nulla scelerisque nulla vel tortor vestibulum laoreet. Vivamus convallis eros pharetra rutrum consequat. Quisque urna lorem, rutrum sit amet tellus vel, suscipit blandit odio. Ut gravida iaculis auctor. In efficitur dignissim nunc, ac ornare quam sollicitudin eu. Fusce lacinia porttitor magna in luctus. Aenean ac lorem nibh.</p>

                    <p>In at velit cursus, congue tortor ut, lacinia felis. Donec lacinia ex dui, sit amet varius magna efficitur eget. Donec nisi metus, consequat vitae sollicitudin non, gravida id ipsum. Curabitur malesuada posuere orci eget bibendum. Proin et tempor tortor. Curabitur nec ipsum luctus, consectetur lacus non, ornare odio. Nam tristique maximus augue, et auctor lectus luctus et. Etiam consequat felis non velit vestibulum, quis viverra lorem elementum. Pellentesque fringilla iaculis tempor. Suspendisse vitae tortor orci. Pellentesque ornare sem vitae dignissim pulvinar.</p>
                </div>
            </div>
        );
    }

    _onClick() {
        console.log('Clicked!');
    }

};

NestHeader1DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool
};

class NestHeader2DrawerComponent extends React.Component {

    render() {
        const { closeButton, inverse, onClose, title, titleTruncate } = this.props;

        return (
            <div>
                <Drawer.Header
                    closeButton={closeButton}
                    inverse={inverse}
                    onClose={onClose}
                    title={title}
                    titleTruncate={titleTruncate}
                >
                    {this.props.children}

                    <Container.ActionBar style={{ textAlign: 'right' }}>
                        <Button color="alternate" onClick={this._onClick.bind(this)}>Cancel</Button>
                        <Button color="success" onClick={this._onClick.bind(this)}>Click Me!</Button>
                    </Container.ActionBar>
                </Drawer.Header>

                <div className="drawer-children">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae justo sed leo eleifend pellentesque. Aliquam erat volutpat. Nunc euismod pharetra mauris, nec gravida orci condimentum et. Etiam fringilla vel tellus ac viverra. Etiam iaculis consectetur purus ac rutrum. Integer nec ipsum ac nunc convallis fermentum. Aliquam posuere lorem at facilisis molestie. Phasellus vel vulputate nisi. Mauris tempus eu leo non consequat. Donec sit amet eleifend urna. Integer maximus venenatis vestibulum. Nunc vulputate cursus pellentesque.</p>

                    <p>Suspendisse at leo tempor, congue neque eget, scelerisque nunc. Phasellus in erat at ipsum faucibus pretium vel quis nisi. Donec lobortis vel arcu eu aliquam. Phasellus quis nibh ac augue eleifend condimentum sed sit amet dui. Morbi eu pulvinar massa. Proin hendrerit ac velit a rutrum. Sed et condimentum tortor. Donec tincidunt tempor sem, a aliquam arcu tristique eget. Curabitur ac luctus lectus, id aliquam massa. Nam ex dolor, volutpat in leo eget, auctor molestie ante. Nulla sed pharetra est. Pellentesque dapibus erat enim, mollis feugiat erat semper nec. Fusce quis augue vitae mauris ullamcorper viverra.</p>

                    <p>Sed nec molestie turpis. Pellentesque ut felis diam. Nullam eleifend magna in tellus egestas blandit. Duis a nisl ac neque tincidunt finibus. Pellentesque sed hendrerit risus. Morbi ornare erat ut leo vulputate pulvinar. Donec massa purus, molestie eget pretium ut, convallis a nisi. Nam facilisis lorem eros, quis pharetra ipsum dapibus id. Aenean sapien turpis, fermentum et sapien in, dictum molestie purus.</p>

                    <p>Phasellus cursus ante velit, ac interdum nisl faucibus a. Mauris maximus feugiat risus, vitae volutpat leo sodales non. Sed sed mollis lectus. Pellentesque blandit varius sapien, dignissim venenatis massa bibendum vitae. Sed porta nulla et auctor mattis. Praesent lacinia erat et tincidunt viverra. Curabitur sit amet dolor ut lorem lacinia ultricies. Donec eleifend turpis non justo feugiat fermentum. Maecenas porttitor risus erat, eu gravida magna pharetra eu.</p>

                    <p>Duis efficitur pellentesque tempus. In mauris mauris, pulvinar id euismod vel, faucibus at nibh. Ut lacinia id leo at aliquet. Proin non feugiat erat, quis aliquet metus. Aliquam eget consequat tortor, vitae pellentesque dolor. Vestibulum non condimentum arcu. Integer eu velit a metus fringilla maximus.</p>

                    <p>Donec iaculis consequat nunc, a fermentum nibh rhoncus in. Donec sollicitudin vehicula sem, ac egestas libero rhoncus in. Morbi venenatis ex porta eros efficitur volutpat. Vestibulum a nulla ex. Mauris in mauris convallis, tincidunt velit eu, tincidunt arcu. Donec ac justo eget arcu suscipit fermentum. Integer a aliquet eros. Nunc bibendum leo a pulvinar dapibus. Nunc consectetur quam eget justo pretium, sed tincidunt neque aliquet. Curabitur interdum blandit lectus nec commodo. Ut placerat convallis accumsan.</p>

                    <p>Morbi laoreet risus eleifend venenatis rhoncus. Pellentesque lacinia massa sed scelerisque suscipit. Phasellus congue laoreet velit sed rutrum. In sapien erat, dapibus a eleifend in, eleifend vel diam. Phasellus dolor ipsum, accumsan quis urna in, porta porta libero. Vivamus nec tempus ligula. Nullam a eleifend diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices sem ex, ac viverra turpis eleifend vel. Maecenas interdum blandit lorem, quis rhoncus ante finibus vitae. Donec vitae lectus non mauris tincidunt elementum eget ut urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar massa sapien, a consectetur massa eleifend in. Cras tincidunt, neque vitae malesuada pellentesque, ex purus pulvinar sem, in iaculis mauris diam sed ante. Nullam elementum massa nec cursus sagittis. Aenean eleifend sodales ipsum, a bibendum risus porta at.</p>

                    <p>Cras vel elit in mauris maximus facilisis sit amet non purus. In in metus molestie neque sollicitudin iaculis et sed mauris. Proin dapibus fermentum pretium. Etiam et risus vitae nunc convallis lobortis id eu odio. Nulla vel mauris massa. Nullam posuere, lacus quis finibus tempor, eros arcu accumsan turpis, in ultrices magna nulla sed sapien. Fusce ullamcorper iaculis mi at vehicula. Ut sit amet semper lorem, et viverra velit. Donec consequat tempus orci, vel consectetur lacus convallis a.</p>

                    <p>Nunc nec sapien ipsum. Etiam nec urna et arcu tempus viverra. Nulla scelerisque nulla vel tortor vestibulum laoreet. Vivamus convallis eros pharetra rutrum consequat. Quisque urna lorem, rutrum sit amet tellus vel, suscipit blandit odio. Ut gravida iaculis auctor. In efficitur dignissim nunc, ac ornare quam sollicitudin eu. Fusce lacinia porttitor magna in luctus. Aenean ac lorem nibh.</p>

                    <p>In at velit cursus, congue tortor ut, lacinia felis. Donec lacinia ex dui, sit amet varius magna efficitur eget. Donec nisi metus, consequat vitae sollicitudin non, gravida id ipsum. Curabitur malesuada posuere orci eget bibendum. Proin et tempor tortor. Curabitur nec ipsum luctus, consectetur lacus non, ornare odio. Nam tristique maximus augue, et auctor lectus luctus et. Etiam consequat felis non velit vestibulum, quis viverra lorem elementum. Pellentesque fringilla iaculis tempor. Suspendisse vitae tortor orci. Pellentesque ornare sem vitae dignissim pulvinar.</p>
                </div>
            </div>
        );
    }

    _onClick() {
        console.log('Clicked!');
    }

};

NestHeader2DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool
};

class NestHeader3DrawerComponent extends React.Component {

    render() {
        const { closeButton, inverse, onClose, title, titleTruncate } = this.props;

        return (
            <div>
                <Drawer.Header
                    closeButton={closeButton}
                    inverse={inverse}
                    onClose={onClose}
                    title={title}
                    titleTruncate={titleTruncate}
                >
                    {this.props.children}
                </Drawer.Header>

                <div className="drawer-children">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae justo sed leo eleifend pellentesque. Aliquam erat volutpat. Nunc euismod pharetra mauris, nec gravida orci condimentum et. Etiam fringilla vel tellus ac viverra. Etiam iaculis consectetur purus ac rutrum. Integer nec ipsum ac nunc convallis fermentum. Aliquam posuere lorem at facilisis molestie. Phasellus vel vulputate nisi. Mauris tempus eu leo non consequat. Donec sit amet eleifend urna. Integer maximus venenatis vestibulum. Nunc vulputate cursus pellentesque.</p>

                    <p>Suspendisse at leo tempor, congue neque eget, scelerisque nunc. Phasellus in erat at ipsum faucibus pretium vel quis nisi. Donec lobortis vel arcu eu aliquam. Phasellus quis nibh ac augue eleifend condimentum sed sit amet dui. Morbi eu pulvinar massa. Proin hendrerit ac velit a rutrum. Sed et condimentum tortor. Donec tincidunt tempor sem, a aliquam arcu tristique eget. Curabitur ac luctus lectus, id aliquam massa. Nam ex dolor, volutpat in leo eget, auctor molestie ante. Nulla sed pharetra est. Pellentesque dapibus erat enim, mollis feugiat erat semper nec. Fusce quis augue vitae mauris ullamcorper viverra.</p>

                    <p>Sed nec molestie turpis. Pellentesque ut felis diam. Nullam eleifend magna in tellus egestas blandit. Duis a nisl ac neque tincidunt finibus. Pellentesque sed hendrerit risus. Morbi ornare erat ut leo vulputate pulvinar. Donec massa purus, molestie eget pretium ut, convallis a nisi. Nam facilisis lorem eros, quis pharetra ipsum dapibus id. Aenean sapien turpis, fermentum et sapien in, dictum molestie purus.</p>

                    <p>Phasellus cursus ante velit, ac interdum nisl faucibus a. Mauris maximus feugiat risus, vitae volutpat leo sodales non. Sed sed mollis lectus. Pellentesque blandit varius sapien, dignissim venenatis massa bibendum vitae. Sed porta nulla et auctor mattis. Praesent lacinia erat et tincidunt viverra. Curabitur sit amet dolor ut lorem lacinia ultricies. Donec eleifend turpis non justo feugiat fermentum. Maecenas porttitor risus erat, eu gravida magna pharetra eu.</p>

                    <p>Duis efficitur pellentesque tempus. In mauris mauris, pulvinar id euismod vel, faucibus at nibh. Ut lacinia id leo at aliquet. Proin non feugiat erat, quis aliquet metus. Aliquam eget consequat tortor, vitae pellentesque dolor. Vestibulum non condimentum arcu. Integer eu velit a metus fringilla maximus.</p>

                    <p>Donec iaculis consequat nunc, a fermentum nibh rhoncus in. Donec sollicitudin vehicula sem, ac egestas libero rhoncus in. Morbi venenatis ex porta eros efficitur volutpat. Vestibulum a nulla ex. Mauris in mauris convallis, tincidunt velit eu, tincidunt arcu. Donec ac justo eget arcu suscipit fermentum. Integer a aliquet eros. Nunc bibendum leo a pulvinar dapibus. Nunc consectetur quam eget justo pretium, sed tincidunt neque aliquet. Curabitur interdum blandit lectus nec commodo. Ut placerat convallis accumsan.</p>

                    <p>Morbi laoreet risus eleifend venenatis rhoncus. Pellentesque lacinia massa sed scelerisque suscipit. Phasellus congue laoreet velit sed rutrum. In sapien erat, dapibus a eleifend in, eleifend vel diam. Phasellus dolor ipsum, accumsan quis urna in, porta porta libero. Vivamus nec tempus ligula. Nullam a eleifend diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ultrices sem ex, ac viverra turpis eleifend vel. Maecenas interdum blandit lorem, quis rhoncus ante finibus vitae. Donec vitae lectus non mauris tincidunt elementum eget ut urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar massa sapien, a consectetur massa eleifend in. Cras tincidunt, neque vitae malesuada pellentesque, ex purus pulvinar sem, in iaculis mauris diam sed ante. Nullam elementum massa nec cursus sagittis. Aenean eleifend sodales ipsum, a bibendum risus porta at.</p>

                    <p>Cras vel elit in mauris maximus facilisis sit amet non purus. In in metus molestie neque sollicitudin iaculis et sed mauris. Proin dapibus fermentum pretium. Etiam et risus vitae nunc convallis lobortis id eu odio. Nulla vel mauris massa. Nullam posuere, lacus quis finibus tempor, eros arcu accumsan turpis, in ultrices magna nulla sed sapien. Fusce ullamcorper iaculis mi at vehicula. Ut sit amet semper lorem, et viverra velit. Donec consequat tempus orci, vel consectetur lacus convallis a.</p>

                    <p>Nunc nec sapien ipsum. Etiam nec urna et arcu tempus viverra. Nulla scelerisque nulla vel tortor vestibulum laoreet. Vivamus convallis eros pharetra rutrum consequat. Quisque urna lorem, rutrum sit amet tellus vel, suscipit blandit odio. Ut gravida iaculis auctor. In efficitur dignissim nunc, ac ornare quam sollicitudin eu. Fusce lacinia porttitor magna in luctus. Aenean ac lorem nibh.</p>

                    <p>In at velit cursus, congue tortor ut, lacinia felis. Donec lacinia ex dui, sit amet varius magna efficitur eget. Donec nisi metus, consequat vitae sollicitudin non, gravida id ipsum. Curabitur malesuada posuere orci eget bibendum. Proin et tempor tortor. Curabitur nec ipsum luctus, consectetur lacus non, ornare odio. Nam tristique maximus augue, et auctor lectus luctus et. Etiam consequat felis non velit vestibulum, quis viverra lorem elementum. Pellentesque fringilla iaculis tempor. Suspendisse vitae tortor orci. Pellentesque ornare sem vitae dignissim pulvinar.</p>
                </div>
            </div>
        );
    }

};

NestHeader3DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool
};
