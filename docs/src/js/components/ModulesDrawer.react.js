'use strict';

import React from 'react';

// Docs UI Components
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

// CM App UI Components
import Button from 'components/UI/Elements/Button.react';
import Card from 'components/UI/Views/Card.react';
import Drawer from 'components/UI/Modules/Drawer.react';
import Header from 'components/UI/Elements/Header.react';
import HeaderSubheader from 'components/UI/Elements/HeaderSubheader.react';
import Icon from 'components/UI/Elements/Icon.react';
import SubNavigation from 'components/UI/Collections/SubNavigation.react';
import TitleBar from 'components/UI/Views/TitleBar.react';

const drawerSample = `import React from 'react';

import Drawer from 'components/UI/Modules/Drawer.react';

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

import Drawer from 'components/UI/Modules/Drawer.react';

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

import Drawer from 'components/UI/Modules/Drawer.react';

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

import Drawer from 'components/UI/Modules/Drawer.react';

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

import Drawer from 'components/UI/Modules/Drawer.react';

export default class HeaderSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isDrawerHeaderOpen: false };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onDrawerHeaderClick.bind(this)}>Open The Drawer</Button>

                <Drawer
                    isOpen={this.state.isDrawerHeaderOpen}
                    header={true}
                >
                    <Drawer.Header
                        onClose={this._onDrawerHeaderClick.bind(this)}
                        title="Custom Header"
                    >
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

import Drawer from 'components/UI/Modules/Drawer.react';

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

import Drawer from 'components/UI/Modules/Drawer.react';

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
            isPathDrawerOpen: false
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
                    <HeaderSubheader>
                        A basic drawer.
                    </HeaderSubheader>
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
                    <HeaderSubheader>
                        A Drawer's close button can be changed using a string or giving custom JSX.
                    </HeaderSubheader>
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
                    <HeaderSubheader>
                        A Drawer can be closed when click outside of it's container.
                    </HeaderSubheader>
                </Header>

                <Button onClick={this._onDrawerHeaderClick.bind(this)}>Open The Drawer</Button>

                <Drawer
                    isOpen={this.state.isDrawerHeaderOpen}
                    header={true}
                >
                    <Drawer.Header
                        onClose={this._onDrawerHeaderClick.bind(this)}
                        title="Custom Header"
                    >
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
                    <HeaderSubheader>
                        A Drawer can be inversed..
                    </HeaderSubheader>
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
                    <HeaderSubheader>
                        A Drawer's max width can be defined and overwritten.
                    </HeaderSubheader>
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
                    <HeaderSubheader>
                        A Drawer can be closed when click outside of it's container.
                    </HeaderSubheader>
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
                    <HeaderSubheader>
                        Route to a different path from a drawer.
                    </HeaderSubheader>
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

}

ModulesDrawer.contextTypes = {
    router: React.PropTypes.object.isRequired
}
