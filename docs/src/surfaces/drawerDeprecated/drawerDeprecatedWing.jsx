import {
    Button, Card, Container, DrawerDeprecated, Header, Icon, TitleBar,
} from 'react-cm-ui';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import Main from '../../global/main';
import Highlighter from '../../global/highlighter';
import TableProps from '../../global/tableProps';
import DrawerDeprecatedSubNavigation from './drawerDeprecatedSubNavigation';

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

                <DrawerDeprecated
                    isOpen={this.state.isBasicDrawerOpen}
                    onClose={this._onBasicDrawerClick.bind(this)}
                    title="The Best Title"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </DrawerDeprecated>
            </div>
        );
    }

    _onBasicDrawerClick() {
        this.setState({ isBasicDrawerOpen: !this.state.isBasicDrawerOpen });
    }

}`;

const leftDrawerSample = `import React from 'react';

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

                <DrawerDeprecated
                    isOpen={this.state.isBasicDrawerOpen}
                    onClose={this._onBasicDrawerClick.bind(this)}
                    title="The Best Title"
                    position="left"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </DrawerDeprecated>
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

                <DrawerDeprecated
                    closeButton="chevron-wh-right"
                    isOpen={this.state.isCloseButtonDrawerOpen}
                    onClose={this._onCloseButtonDrawerClick.bind(this)}
                    title="What A Wonderful Close Button"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </DrawerDeprecated>

                <DrawerDeprecated
                    closeButton={(
                        <Icon
                            compact
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
                </DrawerDeprecated>
            </div>
        );
    }

    _onBasicDrawerClick() {
        this.setState({ isBasicDrawerOpen: !this.state.isBasicDrawerOpen });
    }

}`;

const colorSample = `import React from 'react';
import { Button, Drawer, Icon } from 'react-cm-ui';

export default class ColorSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerColorOpen: false
        };

        this._onDrawerColorClick = this._onDrawerColorClick.bind(this);
    }

    render() {
        return (
            <div>
                <Button onClick={this._onDrawerColorClick}>Open Drawer</Button>

                <DrawerDeprecated
                    closeButton={(
                        <Button
                            icon
                            inverse
                            outline
                            onClick={this._onDrawerColorClick}
                        >
                            <Icon compact inverse type="times" />
                        </Button>
                    )}
                    color="dark-blue"
                    header={false}
                    isOpen={this.state.isDrawerColorOpen}
                    maxWidth={320}
                    onClose={this._onDrawerColorClick}
                >
                    <div>
                        <Header>A Blue Drawer</Header>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </DrawerDeprecated>
            </div>
        );
    }

    _onDrawerColorClick() {
        this.setState({
            isDrawerColorOpen: !this.state.isDrawerColorOpen
        });
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

                <DrawerDeprecated
                    closeButton={(
                        <Icon
                            compact
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
                </DrawerDeprecated>
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

                <DrawerDeprecated
                    isOpen={this.state.isOnClickOutsideDrawerOpen}
                    onClickOutside
                    onClose={this._onClickOutsideDrawerClick.bind(this)}
                    title="Click Outside of The Drawer"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </DrawerDeprecated>
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
                <DrawerDeprecated
                    isOpen={this.state.isDrawerHeaderOpen}
                    header
                    onClose={this._onDrawerHeaderClick.bind(this)}
                    title="Custom Header"
                >
                    <DrawerDeprecated.Header>
                        <SubNavigation style={{ margin: 0 }}>
                            <SubNavigation.Item label="Button 1" />
                            <SubNavigation.Item label="Button 2" />
                            <SubNavigation.Item label="Button 3" />
                            <SubNavigation.Item label="Button 4" />
                        </SubNavigation>
                    </DrawerDeprecated.Header>

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
                </DrawerDeprecated>
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

                <DrawerDeprecated
                    isOpen={this.state.isDrawerInverseOpen}
                    inverse
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
                </DrawerDeprecated>
            </div>
        );
    }

    _onDrawerInverseClick() {
        this.setState({ isDrawerInverseOpen: !this.state.isDrawerInverseOpen });
    }

}`;

const onOpenAndCloseCompleteSample = `import React from 'react';

import { Button, Drawer } from 'react-cm-ui';

export default class OnOpenAndCloseCompleteSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isOnOpenAndCloseCompleteDrawerOpen: false };

        this._onCloseComplete = this._onCloseComplete.bind(this);
        this._onOpenComplete = this._onOpenComplete.bind(this);
        this._onOpenCompleteClick = this._onOpenCompleteClick.bind(this);
    }

    render() {
        return (
            <div>
                <Button onClick={this._onOpenCompleteClick}>Open Drawer</Button>

                <DrawerDeprecated
                    isOpen={this.state.isOnOpenAndCloseCompleteDrawerOpen}
                    onClose={this._onOpenCompleteClick}
                    onCloseComplete={this._onCloseComplete}
                    onOpenComplete={this._onOpenComplete}
                    title="A OnCloseComplete and OnOpenComplete Drawer"
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
                </DrawerDeprecated>
            </div>
        );
    }

    _onOpenCompleteClick() {
        this.setState({ isOnOpenAndCloseCompleteDrawerOpen: !this.state.isOnOpenAndCloseCompleteDrawerOpen });
    }

    _onCloseComplete(isComplete) {
        console.log('on drawer close animation is complete');
    }

    _onOpenCompleteClick() {
        this.setState({ isOnOpenAndCloseCompleteDrawerOpen: !this.state.isOnOpenAndCloseCompleteDrawerOpen });
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

                <DrawerDeprecated
                    isOpen={this.state.isPathDrawerOpen}
                    onClose={this._onPathDrawerClick.bind(this)}
                    path={this.state.drawerOnClosePath}
                    title="The Best Title"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <p><a onClick={this._onPathDrawerClick.bind(this, '/elements/button')}>Click me to close the Drawer and change the path.</a></p>

                    <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                </DrawerDeprecated>
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
                drawer
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

                <DrawerDeprecated
                    isOpen={this.state.nestHeaderDrawer}
                    header
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
                </DrawerDeprecated>
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
                <DrawerDeprecated.Header
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
                </DrawerDeprecated.Header>

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
        console.log('Clicked!'); // eslint-disable-line no-console
    }

};

NestHeader1DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.shape({}),
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
                <DrawerDeprecated.Header
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
                </DrawerDeprecated.Header>

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
        console.log('Clicked!'); // eslint-disable-line no-console
    }

};

NestHeader2DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.shape({}),
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
                <DrawerDeprecated.Header
                    closeButton={closeButton}
                    inverse={inverse}
                    key={'drawer-header' + _.kebabCase(title)}
                    onClose={onClose}
                    title={title}
                    titleTruncate={titleTruncate}
                >
                    {this.props.children}
                </DrawerDeprecated.Header>

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
        PropTypes.shape({}),
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool
};`;

const wingSample = `import React from 'react';
import { Button, Drawer } from 'react-cm-ui';

export default class WingSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isWingOpen: null,
            isDrawerWingOpen: false
        };

        this._onDrawerWingClick = this._onDrawerWingClick.bind(this);
        this._openWing = this._openWing.bind(this);
    }

    render() {
        let wing;

        switch (this.state.isWingOpen) {
            case 1:
                wing = <DrawerDeprecated.Wing key={1}>white wing render drawer wing</DrawerDeprecated.Wing>;

                break;
            case 2:
                wing = <DrawerDeprecated.Wing color="dark-blue" key={2} width={320}>dark blue wing render drawer wing</DrawerDeprecated.Wing>;

                break;
            case 3:
                wing = <DrawerDeprecated.Wing color="grey" key={3} width={320}>grey wing render drawer wing</DrawerDeprecated.Wing>;
        }

        return (
            <div>
                <Button onClick={this._onDrawerWingClick}>Open Drawer</Button>

                <DrawerDeprecated
                    color="dark-blue"
                    header={false}
                    isOpen={this.state.isDrawerWingOpen}
                    maxWidth={500}
                    onClose={this._onDrawerWingClick}
                    wing={wing}
                >
                    <div>
                        <Header>A Blue Drawer</Header>

                        <Button onClick={() => this._openWing(1)}>White Wing</Button>

                        <Button onClick={() => this._openWing(2)}>Dark Blue Wing</Button>

                        <Button onClick={() => this._openWing(3)}>Grey Wing</Button>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </DrawerDeprecated>
            </div>
        );
    }

    _onDrawerWingClick() {
        this.setState({
            isDrawerWingOpen: !this.state.isDrawerWingOpen,
            isWingOpen: null
        });
    }

    _openWing(type) {
        const { isWingOpen } = this.state;

        this.setState({ isWingOpen: type === isWingOpen ? null : type });
    }
}`;

export default class ModulesDrawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOnClosePath: null,
            isBasicDrawerOpen: false,
            isBasicLeftDrawerOpen: false,
            isCloseButtonDrawerOpen: false,
            isCustomCloseButtonDrawerOpen: false,
            isDrawerColorOpen: false,
            isDrawerWingOpen: false,
            isDrawerHeaderOpen: false,
            isDrawerInverseOpen: false,
            isBarDrawerOpen: false,
            isFooDrawerOpen: false,
            isMaxWidthDrawerOpen: false,
            isOnClickOutsideDrawerOpen: false,
            isOnOpenAndCloseCompleteDrawerOpen: false,
            isPathDrawerOpen: false,
            isWingOpen: false,
            nestHeaderDrawer: false,
            nestHeaderIndex: 0,
            subNavIndex: 0,
        };

        this._onCloseComplete = this._onCloseComplete.bind(this);
        this._onDrawerColorClick = this._onDrawerColorClick.bind(this);
        this._onDrawerWingClick = this._onDrawerWingClick.bind(this);
        this._onOpenComplete = this._onOpenComplete.bind(this);
        this._onOpenCompleteClick = this._onOpenCompleteClick.bind(this);
        this._openWing = this._openWing.bind(this);
        this._onSubNavClick = this._onSubNavClick.bind(this);
    }

    render() {
        const { subNavIndex } = this.state;

        return (
            <Main page="headers">
                <TitleBar title="Drawer" />

                <DrawerDeprecatedSubNavigation />

                <Header size="large" style={{ margin: '55px 0' }}>
                    This version of the Drawer component has been deprecated.
                    <br />
                    Please use
                    {' '}
                    <Link to={{ pathname: '/modules/drawer' }}>Drawer</Link>
                </Header>

                {this._renderWing()}
            </Main>
        );
    }

    _onBasicDrawerClick() {
        this.setState({ isBasicDrawerOpen: !this.state.isBasicDrawerOpen });
    }

    _onBasicLeftDrawerClick() {
        this.setState({ isBasicLeftDrawerOpen: !this.state.isBasicLeftDrawerOpen });
    }

    _onCloseButtonDrawerClick() {
        this.setState({ isCloseButtonDrawerOpen: !this.state.isCloseButtonDrawerOpen });
    }

    _onCustomCloseButtonDrawerClick() {
        this.setState({ isCustomCloseButtonDrawerOpen: !this.state.isCustomCloseButtonDrawerOpen });
    }

    _onDrawerColorClick() {
        this.setState({
            isDrawerColorOpen: !this.state.isDrawerColorOpen,
        });
    }

    _onDrawerWingClick() {
        this.setState({
            isDrawerWingOpen: !this.state.isDrawerWingOpen,
            isWingOpen: null,
        });
    }

    _onMaxWidthDrawerClick(arg) {
        this.setState({ isMaxWidthDrawerOpen: !this.state.isMaxWidthDrawerOpen });
    }

    _onOpenComplete(isComplete) {
        console.log('on drawer open animation is complete'); // eslint-disable-line no-console
    }

    _onCloseComplete(isComplete) {
        console.log('on drawer close animation is complete'); // eslint-disable-line no-console
    }

    _onOpenCompleteClick() {
        this.setState({ isOnOpenAndCloseCompleteDrawerOpen: !this.state.isOnOpenAndCloseCompleteDrawerOpen });
    }

    _openWing(type) {
        const { isWingOpen } = this.state;

        this.setState({ isWingOpen: type === isWingOpen ? null : type });
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
            drawerOnClosePath: path || this.state.drawerOnClosePath,
        });
    }

    _onNestHeaderDrawerClick() {
        this.setState({ nestHeaderDrawer: !this.state.nestHeaderDrawer });
    }

    _onNestHeaderNavClick(index) {
        this.setState({ nestHeaderIndex: index });
    }

    _onSubNavClick(index) {
        this.setState({ subNavIndex: index });
    }

    _onBarDrawerClick() {
        this.setState({
            isBarDrawerOpen: !this.state.isBarDrawerOpen,
        });
    }

    _onFooDrawerClick() {
        this.setState({
            isFooDrawerOpen: !this.state.isFooDrawerOpen,
        });
    }

    _renderWing() {
        const props = [
            {
                name: 'color',
                type: 'enum',
                default: '',
                description: 'A DrawerWing can have different background colors.',
                allowedTypes: 'dark-blue, grey, white',
            }, {
                name: 'width',
                type: 'number',
                default: '',
                description: 'A DrawerWing can have differnet widths.',
                allowedTypes: '',
            },
        ];
        const { subNavIndex } = this.state;
        let wing;

        switch (this.state.isWingOpen) {
            case 1:
                wing = <DrawerDeprecated.Wing key={1}>white wing render drawer wing</DrawerDeprecated.Wing>;

                break;
            case 2:
                wing = <DrawerDeprecated.Wing color="dark-blue" key={2} width={320}>dark blue wing render drawer wing</DrawerDeprecated.Wing>;

                break;
            case 3:
                wing = <DrawerDeprecated.Wing color="grey" key={3} width={320}>grey wing render drawer wing</DrawerDeprecated.Wing>;
        }

        return (
            <div>
                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Wing */}
                <Header anchor="inverse" size="large" style={{ marginTop: '55px' }} sub>
                    Wing
                    <Header.Subheader>
                        A Drawer can have different background colors.
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onDrawerWingClick}>Open Drawer</Button>

                <DrawerDeprecated
                    header={false}
                    isOpen={this.state.isDrawerWingOpen}
                    maxWidth={500}
                    onClose={this._onDrawerWingClick}
                    wing={wing}
                >
                    <div>
                        <Header>A Blue Drawer</Header>

                        <Button onClick={() => this._openWing(1)}>White Wing</Button>

                        <Button onClick={() => this._openWing(2)}>Dark Blue Wing</Button>

                        <Button onClick={() => this._openWing(3)}>Grey Wing</Button>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </DrawerDeprecated>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {wingSample}
                </Highlighter>
            </div>
        );
    }
}

ModulesDrawer.contextTypes = {
    router: PropTypes.shape({}).isRequired,
};

class NestHeader1DrawerComponent extends React.Component {
    render() {
        const {
            closeButton, inverse, onClose, title, titleTruncate,
        } = this.props;

        return (
            <div>
                <DrawerDeprecated.Header
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
                </DrawerDeprecated.Header>

                <div className="drawer-children">
                    <Header>Section 1</Header>

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
        console.log('Clicked!'); // eslint-disable-line no-console
    }
}

NestHeader1DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
};

class NestHeader2DrawerComponent extends React.Component {
    render() {
        const {
            closeButton, inverse, onClose, title, titleTruncate,
        } = this.props;

        return (
            <div>
                <DrawerDeprecated.Header
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
                </DrawerDeprecated.Header>

                <div className="drawer-children">
                    <Header>Section 2</Header>

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
        console.log('Clicked!'); // eslint-disable-line no-console
    }
}

NestHeader2DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
};

class NestHeader3DrawerComponent extends React.Component {
    render() {
        const {
            closeButton, inverse, onClose, title, titleTruncate,
        } = this.props;

        return (
            <div>
                <DrawerDeprecated.Header
                    closeButton={closeButton}
                    inverse={inverse}
                    onClose={onClose}
                    title={title}
                    titleTruncate={titleTruncate}
                >
                    {this.props.children}
                </DrawerDeprecated.Header>

                <div className="drawer-children">
                    <Header>Section 3</Header>

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
}

NestHeader3DrawerComponent.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
};
