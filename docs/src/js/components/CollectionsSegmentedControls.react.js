'use strict';

import React from 'react';

// Docs UI Components
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

// CM App UI Components
import Card from 'components/UI/Views/Card.react';
import Header from 'components/UI/Elements/Header.react';
import HeaderSubheader from 'components/UI/Elements/HeaderSubheader.react';
import SegmentedControls from 'components/UI/Collections/SegmentedControls.react';
import SegmentedControlsItem from 'components/UI/Collections/SegmentedControlsItem.react';
import TitleBar from 'components/UI/Views/TitleBar.react';

const basicSample = `import React from 'react';

import SegmentedControls from 'components/UI/Collections/SegmentedControls.react';
import SegmentedControlsItem from 'components/UI/Collections/SegmentedControlsItem.react';

export default class BasicSample extends React.Component {

    render() {
        return (
            <SegmentedControls>
                <SegmentedControlsItem label="Button 1" />
                <SegmentedControlsItem label="Button Number 2" />
            </SegmentedControls>
        );
    }

}`;

const iconsSample = `import React from 'react';

import SegmentedControls from 'components/UI/Collections/SegmentedControls.react';
import SegmentedControlsItem from 'components/UI/Collections/SegmentedControlsItem.react';

export default class IconsSample extends React.Component {

    render() {
        return (
            <SegmentedControls>
                <SegmentedControlsItem icon="circle" label="Button 1" />
                <SegmentedControlsItem icon="block" label="Button 2" />
                <SegmentedControlsItem icon="check-circle" label="Button 3" />
            </SegmentedControls><br /><br />

            <SegmentedControls>
                <SegmentedControlsItem icon="circle" />
                <SegmentedControlsItem icon="block" />
                <SegmentedControlsItem icon="check-circle" />
            </SegmentedControls>
        );
    }

}`;

const fluidSample = `import React from 'react';

import SegmentedControls from 'components/UI/Collections/SegmentedControls.react';
import SegmentedControlsItem from 'components/UI/Collections/SegmentedControlsItem.react';

export default class FluidSample extends React.Component {

    render() {
        return (
            <SegmentedControls fluid={true}>
                <SegmentedControlsItem label="Button 1" />
                <SegmentedControlsItem label="Button 2" />
                <SegmentedControlsItem label="Button 3" />
            </SegmentedControls>
        );
    }

}`;

const selectedSample = `import React from 'react';

import SegmentedControls from 'components/UI/Collections/SegmentedControls.react';
import SegmentedControlsItem from 'components/UI/Collections/SegmentedControlsItem.react';

export default class SelectedSample extends React.Component {

    render() {
        return (
            <SegmentedControls selected={this.state.selected}>
                <SegmentedControlsItem label="Button 1" />
                <SegmentedControlsItem label="Button 2" />
                <SegmentedControlsItem label="Button 3" />
            </SegmentedControls>
        );
    }

}`;

const onClickParentSample = `import React from 'react';

import SegmentedControls from 'components/UI/Collections/SegmentedControls.react';
import SegmentedControlsItem from 'components/UI/Collections/SegmentedControlsItem.react';

export default class OnClickParentSample extends React.Component {

    render() {
        return (
            <SegmentedControls onClick={this._onParentClick.bind(this)} selected={this.state.clickSelected}>
                <SegmentedControlsItem label="Button 1" />
                <SegmentedControlsItem label="Button 2" />
            </SegmentedControls>
        );
    }

}`;

const onClickChildrenSample = `import React from 'react';

import SegmentedControls from 'components/UI/Collections/SegmentedControls.react';
import SegmentedControlsItem from 'components/UI/Collections/SegmentedControlsItem.react';

export default class OnClickChildrenSample extends React.Component {

    render() {
        return (
            <SegmentedControls>
                <SegmentedControlsItem label="Button One" onClick={this._onChildClick.bind(this)} />
                <SegmentedControlsItem label="Button Two" onClick={this._onChildClick.bind(this)} />
                <SegmentedControlsItem label="Button Three" onClick={this._onChildClick.bind(this)} />
                <SegmentedControlsItem label="Button Four" onClick={this._onChildClick.bind(this)} />
            </SegmentedControls>
        );
    }

}`;

export default class CollectionsSegmentedControls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clickSelected: 0,
            selected: 2
        };
    }

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'fluid',
                type: 'bool',
                default: '',
                description: 'Segmented controls can take on the size of its container.',
                allowedTypes: ''
            }, {
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'Can handle an onClick event from parent.',
                allowedTypes: '',
            }, {
                name: 'selected',
                type: 'number',
                default: '',
                description: 'Change the default selected button.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Segmented Control\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Segmented Controls" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Segmented Controls */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Segmented Controls
                    <HeaderSubheader>
                        A Basic segmented controls with labels.
                    </HeaderSubheader>
                </Header>

                <SegmentedControls>
                    <SegmentedControlsItem label="Button 1" />
                    <SegmentedControlsItem label="Button Number 2" />
                </SegmentedControls>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {basicSample}
                </Highlighter>

                {/* Icons */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Icons
                    <HeaderSubheader>
                        A segmented control can have an icon either along with a label or by itself.
                    </HeaderSubheader>
                </Header>

                <SegmentedControls>
                    <SegmentedControlsItem icon="circle" label="Button 1" />
                    <SegmentedControlsItem icon="block" label="Button 2" />
                    <SegmentedControlsItem icon="check-circle" label="Button 3" />
                </SegmentedControls><br /><br />

                <SegmentedControls>
                    <SegmentedControlsItem icon="circle" />
                    <SegmentedControlsItem icon="block" />
                    <SegmentedControlsItem icon="check-circle" />
                </SegmentedControls>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {iconsSample}
                </Highlighter>

                {/* Fluid */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Fluid
                    <HeaderSubheader>
                        Segmented controls can take on the size of its container.
                    </HeaderSubheader>
                </Header>

                <SegmentedControls fluid={true}>
                    <SegmentedControlsItem label="Button 1" />
                    <SegmentedControlsItem label="Button 2" />
                    <SegmentedControlsItem label="Button 3" />
                </SegmentedControls>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {fluidSample}
                </Highlighter>

                {/* Selected */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Selected
                    <HeaderSubheader>
                        Change the default selected button.
                    </HeaderSubheader>
                </Header>

                <SegmentedControls selected={this.state.selected}>
                    <SegmentedControlsItem label="Button 1" />
                    <SegmentedControlsItem label="Button 2" />
                    <SegmentedControlsItem label="Button 3" />
                </SegmentedControls>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {selectedSample}
                </Highlighter>

                {/* onClick Parent Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    onClick Parent Handler
                    <HeaderSubheader>
                        Can handle an onClick event from parent.
                    </HeaderSubheader>
                </Header>

                <SegmentedControls onClick={this._onParentClick.bind(this)} selected={this.state.clickSelected}>
                    <SegmentedControlsItem label="Button 1" />
                    <SegmentedControlsItem label="Button 2" />
                </SegmentedControls>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onClickParentSample}
                </Highlighter>

                {/* onClick Children Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    onClick Children Handler
                    <HeaderSubheader>
                        Can handle an onClick event from parent.
                    </HeaderSubheader>
                </Header>

                <SegmentedControls>
                    <SegmentedControlsItem label="Button One" onClick={this._onChildClick.bind(this)} />
                    <SegmentedControlsItem label="Button Two" onClick={this._onChildClick.bind(this)} />
                    <SegmentedControlsItem label="Button Three" onClick={this._onChildClick.bind(this)} />
                    <SegmentedControlsItem label="Button Four" onClick={this._onChildClick.bind(this)} />
                </SegmentedControls>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onClickChildrenSample}
                </Highlighter>
            </Main>
        );
    }

    _onChildClick(index, label) {
        window.alert(`${label} selected!`);
    }

    _onParentClick(index, label) {
        window.alert(`Button ${index + 1} clicked!`);
        this.setState({ clickSelected: index });
    }
}
