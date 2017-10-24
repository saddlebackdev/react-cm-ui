'use strict';

import React from 'react';
import { Button, Card, Modal, Header, Icon, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const modalSample = `import React from 'react';

import Modal from 'components/UI/Modules/Modal.react';

export default class ModalSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isBasicModalOpen: false };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onBasicModalClick.bind(this)}>Open The Basic Modal</Button>

                <Modal
                    isOpen={this.state.isBasicModalOpen}
                    onClose={this._onBasicModalClick.bind(this)}
                    title="The Best Title"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Modal>
            </div>
        );
    }

    _onBasicModalClick() {
        this.setState({ isBasicModalOpen: !this.state.isBasicModalOpen });
    }

}`;

const closeButtonsSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';
import Modal from 'components/UI/Modules/Modal.react';

export default class CloseButtonsSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isCloseButtonModalOpen: false,
            isCustomCloseButtonModalOpen: false
        };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onCloseButtonModalClick.bind(this)}>A Chevron-WH-Right Close Button</Button><br /><br />
                <Button onClick={this._onCustomCloseButtonModalClick.bind(this)}>A Custom Close Button</Button>

                <Modal
                    closeButton="chevron-wh-right"
                    isOpen={this.state.isCloseButtonModalOpen}
                    onClose={this._onCloseButtonModalClick.bind(this)}
                    title="What A Wonderful Close Button"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Modal>

                <Modal
                    closeButton={(
                        <Icon
                            compact={true}
                            onClick={this._onCustomCloseButtonModalClick.bind(this)}
                            type="times"
                        />
                    )}
                    isOpen={this.state.isCustomCloseButtonModalOpen}
                    onClose={this._onCustomCloseButtonModalClick.bind(this)}
                    title="What A Wonderful Close Button"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Modal>
            </div>
        );
    }

    _onCloseButtonModalClick() {
        this.setState({ isCloseButtonModalOpen: !this.state.isCloseButtonModalOpen });
    }

    _onCustomCloseButtonModalClick() {
        this.setState({ isCustomCloseButtonModalOpen: !this.state.isCustomCloseButtonModalOpen });
    }

}`;

const onDimensionsSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';
import Modal from 'components/UI/Modules/Modal.react';

export default class OnDimensionsSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isDimensionsModalOpen: false };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onDimensionsModalClick.bind(this)}>Open The Modal</Button>

                <Modal
                    isOpen={this.state.isDimensionsModalOpen}
                    minHeight="100%"
                    onClickOutside={true}
                    onClose={this._onDimensionsModalClick.bind(this)}
                    title="Click Outside of The Modal"
                    width={750}
                >
                    <div id="lipsum">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt erat in metus ultrices efficitur. Phasellus id mauris sed lacus mollis ultrices. Fusce congue risus vel augue bibendum malesuada. Donec in accumsan nunc. Vestibulum id tellus tincidunt, aliquam eros vitae, gravida metus. Donec elementum ligula cursus, vehicula dui vestibulum, auctor lacus. Duis porta interdum convallis.
                        </p>

                        <p>
                        Morbi dapibus congue dui. Integer mattis metus et urna hendrerit facilisis. Donec in rhoncus urna. Aenean odio metus, gravida nec congue eu, consequat in augue. Donec ut venenatis nibh. Aliquam sed nibh quis diam tincidunt accumsan. Vivamus faucibus nunc purus, eget commodo urna tempus nec. Donec aliquam arcu quis porta congue. Praesent convallis nisi quis dolor interdum, vitae luctus lectus tincidunt. Integer quis rutrum lacus.
                        </p>

                        <p>
                        Sed ac lorem mi. Phasellus fermentum nunc id faucibus feugiat. Proin eu consectetur enim, ut faucibus ex. Pellentesque interdum tincidunt massa vel faucibus. Nunc ante massa, venenatis vel ex a, iaculis ultricies turpis. Sed ut interdum quam, id consectetur leo. Phasellus vulputate venenatis nunc, id pulvinar nisl aliquam a. Suspendisse porttitor ex eu tempus rhoncus. In porta ex nec magna auctor consectetur id aliquam neque. Phasellus tincidunt varius justo, faucibus porttitor risus pellentesque non. Fusce commodo, nisl et blandit convallis, mi leo dictum massa, sit amet fermentum lacus lorem ultricies nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Fusce vel eleifend risus.
                        </p>

                        <p>
                        Ut ornare urna et nisi tempor, in euismod nulla tempus. Cras cursus dolor sit amet blandit condimentum. Sed tristique lobortis nibh ut varius. In finibus, ex eget dapibus vehicula, eros ante tincidunt libero, at interdum nisl odio eget arcu. Maecenas volutpat vestibulum ipsum at scelerisque. Proin urna justo, malesuada ac risus eu, blandit maximus lectus. Vestibulum non augue magna. Pellentesque viverra augue eget dolor imperdiet, at accumsan lectus dignissim.
                        </p>

                        <p>
                        Mauris semper metus elementum urna dignissim, eu malesuada magna gravida. Nullam tincidunt ex ac fermentum tristique. Cras ut dui quis sem accumsan finibus. Nunc sit amet posuere lectus. Duis ultrices velit augue, eget consequat libero dictum eu. Sed at diam ante. Aenean molestie accumsan diam, eu sollicitudin lectus tristique sed. Quisque pharetra ac arcu ut dapibus. Sed eget massa eget augue elementum maximus. Quisque eget faucibus massa, in feugiat nisi. Integer id semper eros. Sed eget elementum massa. Donec in nisl in lorem pellentesque malesuada eget hendrerit augue. In nulla ipsum, convallis non congue vitae, tempor eget ante.
                        </p>

                        <p>
                        Donec dictum mi quis suscipit congue. Nunc nunc enim, lobortis lobortis justo in, fringilla tempus urna. Nulla facilisi. In hac habitasse platea dictumst. Nullam at semper sapien, ac aliquam eros. Donec non urna id quam vehicula mollis. Nunc id malesuada mi, ut bibendum magna. Phasellus aliquet porta metus, at iaculis enim viverra vitae. Cras dictum bibendum nunc. Fusce lacus libero, porttitor eget volutpat a, tincidunt et elit. Praesent interdum dui quis ipsum sagittis placerat. Pellentesque nec urna ipsum. Phasellus hendrerit egestas turpis gravida pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus imperdiet ipsum eget neque dignissim consectetur. Cras ac cursus velit, sit amet vehicula odio.
                        </p>

                        <p>
                        Fusce id justo at ipsum dapibus condimentum. Mauris egestas tortor metus, ac elementum felis lacinia eget. Sed eget auctor neque. Maecenas molestie sed ipsum at cursus. Proin scelerisque risus non ligula hendrerit porta. Aliquam scelerisque quis magna sit amet euismod. Vivamus posuere nulla sed arcu ornare molestie. Etiam suscipit rhoncus venenatis. Cras gravida ligula vitae diam pellentesque vulputate. Proin blandit non lorem eu ornare. Duis gravida blandit quam, sit amet semper lacus porttitor vel. Donec malesuada neque lacus, eget consectetur tellus dignissim id. Integer massa purus, placerat a purus a, fermentum volutpat nisi.
                        </p>

                        <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque magna arcu, varius et erat sit amet, ultrices sodales quam. Vivamus convallis vulputate risus id aliquam. Sed sit amet mauris nunc. Sed pharetra congue bibendum. Nam sagittis velit eu ex volutpat sodales. Pellentesque at nisl lobortis, accumsan lectus sit amet, fermentum massa. Etiam metus quam, porttitor et iaculis vel, blandit in quam. Sed tempus urna quis turpis luctus, imperdiet pulvinar nunc porta. Nunc vestibulum bibendum diam at ultricies. In semper dui a tortor lobortis hendrerit. Fusce vitae vulputate sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl id arcu pharetra efficitur. Suspendisse tincidunt pulvinar urna, quis finibus magna tincidunt in. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <p>
                        Cras fringilla viverra elit non faucibus. Aliquam accumsan mollis urna placerat feugiat. Vestibulum id massa ornare, suscipit ligula quis, congue leo. Sed eros orci, fringilla a condimentum at, gravida at elit. Maecenas faucibus rhoncus libero, in molestie orci ultricies vel. Nullam tincidunt, purus eu interdum varius, ex libero commodo nunc, non consectetur quam est at quam. Pellentesque sit amet dapibus massa, at tincidunt massa. Donec purus enim, scelerisque non risus eget, rutrum efficitur ligula. Morbi egestas scelerisque orci. Aenean ornare dolor erat, in finibus lectus dignissim in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque elit sed lacus elementum tincidunt quis nec urna. Sed non arcu ac ligula euismod consectetur a porttitor nibh. Sed eu sem erat. Donec congue eros tristique risus cursus interdum.
                        </p>

                        <p>
                        Etiam consequat venenatis ante, a tempor sem dignissim in. Cras vitae ligula eget justo suscipit ornare. Proin ac nisi at tellus tristique ultrices eu ut eros. Fusce scelerisque odio vitae euismod molestie. Etiam dapibus neque sed diam congue tincidunt. Mauris in nulla at justo finibus tristique nec eget magna. Fusce mattis eget diam id tincidunt. Maecenas a ornare dolor. Nam volutpat neque urna, eget interdum urna ornare luctus. Suspendisse et pulvinar quam, ac venenatis purus.
                        </p>
                    </div>
                </Modal>
            </div>
        );
    }

    _onDimensionsModalClick(arg) {
        this.setState({ isDimensionsModalOpen: !this.state.isDimensionsModalOpen });
    }

}`;

const onClickOutsideSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';
import Modal from 'components/UI/Modules/Modal.react';

export default class OnClickOutsideSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isOnClickOutsideModalOpen: false };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onClickOutsideModalClick.bind(this)}>Open The Modal</Button>

                <Modal
                    isOpen={this.state.isOnClickOutsideModalOpen}
                    onClickOutside={true}
                    onClose={this._onClickOutsideModalClick.bind(this)}
                    title="Click Outside of The Modal"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Modal>
            </div>
        );
    }

    _onClickOutsideModalClick(arg) {
        this.setState({ isOnClickOutsideModalOpen: !this.state.isOnClickOutsideModalOpen });
    }

}`;

const emptyTitleSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';
import Modal from 'components/UI/Modules/Modal.react';

export default class OnClickOutsideSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isOnClickOutsideModalOpen: false };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onClickOutsideModalClick.bind(this)}>Open The Modal</Button>

                <Modal
                    isOpen={this.state.isOnClickOutsideModalOpen}
                    onClickOutside={true}
                    onClose={this._onClickOutsideModalClick.bind(this)}
                >
                    <div>
                        <p>Click Outside of The Modal.</p>
                    </div>
                </Modal>
            </div>
        );
    }

    _onClickOutsideModalClick(arg) {
        this.setState({ isOnClickOutsideModalOpen: !this.state.isOnClickOutsideModalOpen });
    }

}`;

const onFluidContentSample = `import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';
import Modal from 'components/UI/Modules/Modal.react';

export default class OnFluidContentSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isFluidContentModalOpen: false };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onFluidContentModalClick.bind(this)}>Open The Modal</Button>

                <Modal
                    isOpen={this.state.isFluidContentModalOpen}
                    onClose={this._onFluidContentModalClick.bind(this)}
                    title="Fluid Content"
                    fluidContent={true}
                >
                    <div style={{height: '100%', display: 'flex', flexDirection: 'column-reverse'}}>
                        <Button onClick={this._onFluidContentModalClick.bind(this)}>Close</Button>
                    </div>
                </Modal>
            </div>
        );
    }

    _onFluidContentModalClick(arg) {
        this.setState({ isFluidContentModalOpen: !this.state.isFluidContentModalOpen });
    }

}`;

export default class ModulesModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isBasicModalOpen: false,
            isCloseButtonModalOpen: false,
            isCustomCloseButtonModalOpen: false,
            isDimensionsModalOpen: false,
            isOnClickOutsideModalOpen: false,
            isEmptyTitleModalOpen: false,
            isFluidContentModalOpen: false
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
                type: 'bool || string || object',
                default: '',
                description: 'A Modal\'s close button can be disabled or or the icon type can be changed using a string or giving custom JSX.',
                allowedTypes: ''
            }, {
                name: 'height',
                type: 'number || string',
                default: '',
                description: 'Give a Modal a height.',
                allowedTypes: ''
            }, {
                name: 'isOpen',
                type: 'bool',
                default: 'false',
                description: 'Required boolean for the Modal\'s open/close state.',
                allowedTypes: ''
            }, {
                name: 'maxHeight',
                type: 'number || string',
                default: '',
                description: 'Give a Modal a maximum height.',
                allowedTypes: ''
            }, {
                name: 'maxWidth',
                type: 'number || string',
                default: '',
                description: 'Give a Modal a maximum width.',
                allowedTypes: ''
            }, {
                name: 'minHeight',
                type: 'number || string',
                default: '',
                description: 'Give a Modal a minimum height.',
                allowedTypes: ''
            }, {
                name: 'minWidth',
                type: 'number || string',
                default: '',
                description: 'Give a Modal a minimum width.',
                allowedTypes: ''
            }, {
                name: 'onClickOutside',
                type: 'bool',
                default: 'false',
                description: 'Ability to close Modal if clicked outside of container.',
                allowedTypes: ''
            }, {
                name: 'onClose',
                type: 'func',
                default: '',
                description: 'Required function to change the state of the Modal.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Modal\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'title',
                type: 'string',
                default: '',
                description: 'Optinal string to give a Modal a title. If it is an empty then Modal\'s header (with a close button) will not be shown.',
                allowedTypes: ''
            }, {
                name: 'fluidContent',
                type: 'bool',
                default: '',
                description: 'Optional bool to stretch the Modal\'s inner div.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Modal" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Modal */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Modal
                    <Header.Subheader>
                        A basic Modal.
                    </Header.Subheader>
                </Header>

                <p>
                    <span className="font-weight-semibold">Mobile first:</span> A Modal's background color is set to <code>$bkgd-inverse</code>, which is a dark grey.<br />
                    <span className="font-weight-semibold">Default dimensions:</span> fullscreen
                </p>

                <p>
                    <span className="font-weight-semibold">Tablet & Beyond:</span> A Modal's background color is set to <code>$bkgd</code>, which is a white.<br />
                    <span className="font-weight-semibold">Default dimensions:</span> <code>height: 500px; minHeight: 305px; width: 640px;</code>
                </p>

                <p className="font-size-xsmall color-static">
                    <span className="font-weight-semibold">Note:</span> <code>isOpen</code>, <code>onClose</code>, and <code>title</code> are all required props.
                </p><br />

                <Button onClick={this._onBasicModalClick.bind(this)}>Open The Basic Modal</Button>

                <Modal
                    isOpen={this.state.isBasicModalOpen}
                    onClose={this._onBasicModalClick.bind(this)}
                    title="The Best Title"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Modal>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {modalSample}
                </Highlighter>

                {/* Close Button */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Close Button
                    <Header.Subheader>
                        A Modal's close button can be changed using a string or giving custom JSX.
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onCloseButtonModalClick.bind(this)}>A Chevron-WH-Right Close Button</Button><br /><br />
                <Button onClick={this._onCustomCloseButtonModalClick.bind(this)}>A Custom Close Button</Button>

                <Modal
                    closeButton="chevron-wh-right"
                    isOpen={this.state.isCloseButtonModalOpen}
                    onClose={this._onCloseButtonModalClick.bind(this)}
                    title="What A Wonderful Close Button"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Modal>

                <Modal
                    closeButton={(
                        <Icon
                            compact={true}
                            onClick={this._onCustomCloseButtonModalClick.bind(this)}
                            type="times"
                        />
                    )}
                    isOpen={this.state.isCustomCloseButtonModalOpen}
                    onClose={this._onCustomCloseButtonModalClick.bind(this)}
                    title="What A Wonderful Close Button"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Modal>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {closeButtonsSample}
                </Highlighter>

                {/* Dimensions */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Dimensions
                    <Header.Subheader>
                        A Modal's dimensions can be changed for anything above 768 pixels.
                    </Header.Subheader>
                </Header>

                <p className="font-size-xsmall color-static">
                    <span className="font-weight-semibold">Note:</span> A Modal's dimensions cannot be changed for anthing less than 768 pixels. A mobile's Drawer is always fullscreen.
                </p><br />

                <Button onClick={this._onDimensionsModalClick.bind(this)}>Open The Modal</Button>

                <Modal
                    isOpen={this.state.isDimensionsModalOpen}
                    minHeight="100%"
                    onClickOutside={true}
                    onClose={this._onDimensionsModalClick.bind(this)}
                    title="Click Outside of The Modal"
                    width={750}
                >
                    <div id="lipsum">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt erat in metus ultrices efficitur. Phasellus id mauris sed lacus mollis ultrices. Fusce congue risus vel augue bibendum malesuada. Donec in accumsan nunc. Vestibulum id tellus tincidunt, aliquam eros vitae, gravida metus. Donec elementum ligula cursus, vehicula dui vestibulum, auctor lacus. Duis porta interdum convallis.
                        </p>

                        <p>
                        Morbi dapibus congue dui. Integer mattis metus et urna hendrerit facilisis. Donec in rhoncus urna. Aenean odio metus, gravida nec congue eu, consequat in augue. Donec ut venenatis nibh. Aliquam sed nibh quis diam tincidunt accumsan. Vivamus faucibus nunc purus, eget commodo urna tempus nec. Donec aliquam arcu quis porta congue. Praesent convallis nisi quis dolor interdum, vitae luctus lectus tincidunt. Integer quis rutrum lacus.
                        </p>

                        <p>
                        Sed ac lorem mi. Phasellus fermentum nunc id faucibus feugiat. Proin eu consectetur enim, ut faucibus ex. Pellentesque interdum tincidunt massa vel faucibus. Nunc ante massa, venenatis vel ex a, iaculis ultricies turpis. Sed ut interdum quam, id consectetur leo. Phasellus vulputate venenatis nunc, id pulvinar nisl aliquam a. Suspendisse porttitor ex eu tempus rhoncus. In porta ex nec magna auctor consectetur id aliquam neque. Phasellus tincidunt varius justo, faucibus porttitor risus pellentesque non. Fusce commodo, nisl et blandit convallis, mi leo dictum massa, sit amet fermentum lacus lorem ultricies nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Fusce vel eleifend risus.
                        </p>

                        <p>
                        Ut ornare urna et nisi tempor, in euismod nulla tempus. Cras cursus dolor sit amet blandit condimentum. Sed tristique lobortis nibh ut varius. In finibus, ex eget dapibus vehicula, eros ante tincidunt libero, at interdum nisl odio eget arcu. Maecenas volutpat vestibulum ipsum at scelerisque. Proin urna justo, malesuada ac risus eu, blandit maximus lectus. Vestibulum non augue magna. Pellentesque viverra augue eget dolor imperdiet, at accumsan lectus dignissim.
                        </p>

                        <p>
                        Mauris semper metus elementum urna dignissim, eu malesuada magna gravida. Nullam tincidunt ex ac fermentum tristique. Cras ut dui quis sem accumsan finibus. Nunc sit amet posuere lectus. Duis ultrices velit augue, eget consequat libero dictum eu. Sed at diam ante. Aenean molestie accumsan diam, eu sollicitudin lectus tristique sed. Quisque pharetra ac arcu ut dapibus. Sed eget massa eget augue elementum maximus. Quisque eget faucibus massa, in feugiat nisi. Integer id semper eros. Sed eget elementum massa. Donec in nisl in lorem pellentesque malesuada eget hendrerit augue. In nulla ipsum, convallis non congue vitae, tempor eget ante.
                        </p>

                        <p>
                        Donec dictum mi quis suscipit congue. Nunc nunc enim, lobortis lobortis justo in, fringilla tempus urna. Nulla facilisi. In hac habitasse platea dictumst. Nullam at semper sapien, ac aliquam eros. Donec non urna id quam vehicula mollis. Nunc id malesuada mi, ut bibendum magna. Phasellus aliquet porta metus, at iaculis enim viverra vitae. Cras dictum bibendum nunc. Fusce lacus libero, porttitor eget volutpat a, tincidunt et elit. Praesent interdum dui quis ipsum sagittis placerat. Pellentesque nec urna ipsum. Phasellus hendrerit egestas turpis gravida pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus imperdiet ipsum eget neque dignissim consectetur. Cras ac cursus velit, sit amet vehicula odio.
                        </p>

                        <p>
                        Fusce id justo at ipsum dapibus condimentum. Mauris egestas tortor metus, ac elementum felis lacinia eget. Sed eget auctor neque. Maecenas molestie sed ipsum at cursus. Proin scelerisque risus non ligula hendrerit porta. Aliquam scelerisque quis magna sit amet euismod. Vivamus posuere nulla sed arcu ornare molestie. Etiam suscipit rhoncus venenatis. Cras gravida ligula vitae diam pellentesque vulputate. Proin blandit non lorem eu ornare. Duis gravida blandit quam, sit amet semper lacus porttitor vel. Donec malesuada neque lacus, eget consectetur tellus dignissim id. Integer massa purus, placerat a purus a, fermentum volutpat nisi.
                        </p>

                        <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque magna arcu, varius et erat sit amet, ultrices sodales quam. Vivamus convallis vulputate risus id aliquam. Sed sit amet mauris nunc. Sed pharetra congue bibendum. Nam sagittis velit eu ex volutpat sodales. Pellentesque at nisl lobortis, accumsan lectus sit amet, fermentum massa. Etiam metus quam, porttitor et iaculis vel, blandit in quam. Sed tempus urna quis turpis luctus, imperdiet pulvinar nunc porta. Nunc vestibulum bibendum diam at ultricies. In semper dui a tortor lobortis hendrerit. Fusce vitae vulputate sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nisl id arcu pharetra efficitur. Suspendisse tincidunt pulvinar urna, quis finibus magna tincidunt in. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <p>
                        Cras fringilla viverra elit non faucibus. Aliquam accumsan mollis urna placerat feugiat. Vestibulum id massa ornare, suscipit ligula quis, congue leo. Sed eros orci, fringilla a condimentum at, gravida at elit. Maecenas faucibus rhoncus libero, in molestie orci ultricies vel. Nullam tincidunt, purus eu interdum varius, ex libero commodo nunc, non consectetur quam est at quam. Pellentesque sit amet dapibus massa, at tincidunt massa. Donec purus enim, scelerisque non risus eget, rutrum efficitur ligula. Morbi egestas scelerisque orci. Aenean ornare dolor erat, in finibus lectus dignissim in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque elit sed lacus elementum tincidunt quis nec urna. Sed non arcu ac ligula euismod consectetur a porttitor nibh. Sed eu sem erat. Donec congue eros tristique risus cursus interdum.
                        </p>

                        <p>
                        Etiam consequat venenatis ante, a tempor sem dignissim in. Cras vitae ligula eget justo suscipit ornare. Proin ac nisi at tellus tristique ultrices eu ut eros. Fusce scelerisque odio vitae euismod molestie. Etiam dapibus neque sed diam congue tincidunt. Mauris in nulla at justo finibus tristique nec eget magna. Fusce mattis eget diam id tincidunt. Maecenas a ornare dolor. Nam volutpat neque urna, eget interdum urna ornare luctus. Suspendisse et pulvinar quam, ac venenatis purus.
                        </p>
                    </div>
                </Modal>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onDimensionsSample}
                </Highlighter>

                {/* On Click Outside */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    On Click Outside
                    <Header.Subheader>
                        A Modal can be closed when click outside of it's container.
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onClickOutsideModalClick.bind(this)}>Open The Modal</Button>

                <Modal
                    isOpen={this.state.isOnClickOutsideModalOpen}
                    onClickOutside={true}
                    onClose={this._onClickOutsideModalClick.bind(this)}
                    title="Click Outside of The Modal"
                >
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                        <p>Nullam sed convallis ante. Vivamus tempus mauris nisi. Proin ultrices commodo posuere. Sed scelerisque tincidunt justo, in venenatis arcu viverra ut. Cras at nulla pellentesque, dignissim ex ac, venenatis sem. Proin sollicitudin, dolor sit amet porttitor sodales, lorem ligula lacinia lectus, posuere tempor nisi augue vel massa. Fusce eleifend accumsan nulla quis aliquet. Nulla eget dui in dui elementum viverra sit amet quis urna. Pellentesque arcu nibh, tincidunt nec cursus id, blandit sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed tincidunt libero. Nam ut sem ac enim suscipit tristique. Aenean in tellus vitae elit blandit fermentum. Cras commodo volutpat suscipit.</p>
                    </div>
                </Modal>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onClickOutsideSample}
                </Highlighter>

                {/* emptyTitle */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Empty Title
                    <Header.Subheader>
                        A Modal can be shown without a title.
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onEmptyTitleModalClick.bind(this)}>Open The Modal without title</Button>

                <Modal
                    isOpen={this.state.isEmptyTitleModalOpen}
                    onClickOutside={true}
                    onClose={this._onEmptyTitleModalClick.bind(this)}
                >
                    <div>
                        <p>Click Outside of The Modal.</p>
                    </div>
                </Modal>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {emptyTitleSample}
                </Highlighter>

                {/* Fluid Content */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Fluid Content
                    <Header.Subheader>
                        A Modal`s inner div can be stretched to the whole container height (e.g. align buttons to the bottom).
                    </Header.Subheader>
                </Header>

                <Button onClick={this._onFluidContentModalClick.bind(this)}>Open The Modal</Button>

                <Modal
                    isOpen={this.state.isFluidContentModalOpen}
                    onClose={this._onFluidContentModalClick.bind(this)}
                    title="Fluid Content"
                    fluidContent={true}
                >
                    <div style={{height: '100%', display: 'flex', flexDirection: 'column-reverse'}}>
                        <Button onClick={this._onFluidContentModalClick.bind(this)}>Close</Button>
                    </div>
                </Modal>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onFluidContentSample}
                </Highlighter>
            </Main>
        );
    }

    _onBasicModalClick() {
        this.setState({ isBasicModalOpen: !this.state.isBasicModalOpen });
    }

    _onCloseButtonModalClick() {
        this.setState({ isCloseButtonModalOpen: !this.state.isCloseButtonModalOpen });
    }

    _onCustomCloseButtonModalClick() {
        this.setState({ isCustomCloseButtonModalOpen: !this.state.isCustomCloseButtonModalOpen });
    }

    _onDimensionsModalClick(arg) {
        this.setState({ isDimensionsModalOpen: !this.state.isDimensionsModalOpen });
    }

    _onClickOutsideModalClick(arg) {
        this.setState({ isOnClickOutsideModalOpen: !this.state.isOnClickOutsideModalOpen });
    }

    _onEmptyTitleModalClick() {
        this.setState({ isEmptyTitleModalOpen: !this.state.isEmptyTitleModalOpen });
    }

    _onFluidContentModalClick(arg) {
        this.setState({ isFluidContentModalOpen: !this.state.isFluidContentModalOpen });
    }

}
