import {
    Card, Header, SegmentedControls, TitleBar,
} from 'react-cm-ui';
import PropTypes from 'prop-types';
import React from 'react';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

const basicSample = `import React from 'react';

import SegmentedControls from '../app/Modules/SegmentedControls.react';

export default class BasicSample extends React.Component {

    render() {
        return (
            <SegmentedControls>
                <SegmentedControls.Item label="Button 1" />
                <SegmentedControls.Item label="Button Number 2" />
            </SegmentedControls>
        );
    }

}`;

const iconsSample = `import React from 'react';

import SegmentedControls from '../app/Modules/SegmentedControls.react';

export default class IconsSample extends React.Component {

    render() {
        return (
            <SegmentedControls>
                <SegmentedControls.Item icon="circle" label="Button 1" />
                <SegmentedControls.Item icon="block" label="Button 2" />
                <SegmentedControls.Item icon="check-circle" label="Button 3" />
            </SegmentedControls><br /><br />

            <SegmentedControls>
                <SegmentedControls.Item icon="circle" />
                <SegmentedControls.Item icon="block" />
                <SegmentedControls.Item icon="check-circle" />
            </SegmentedControls>
        );
    }

}`;

const fluidSample = `import React from 'react';

import SegmentedControls from '../app/Modules/SegmentedControls.react';

export default class FluidSample extends React.Component {

    render() {
        return (
            <SegmentedControls fluid={true}>
                <SegmentedControls.Item label="Button 1" />
                <SegmentedControls.Item label="Button 2" />
                <SegmentedControls.Item label="Button 3" />
            </SegmentedControls>
        );
    }

}`;

const selectedSample = `import React from 'react';

import SegmentedControls from '../app/Modules/SegmentedControls.react';

export default class SelectedSample extends React.Component {

    render() {
        return (
            <SegmentedControls selected={this.state.selected}>
                <SegmentedControls.Item label="Button 1" />
                <SegmentedControls.Item label="Button 2" />
                <SegmentedControls.Item label="Button 3" />
            </SegmentedControls>
        );
    }

}`;

const onClickParentSample = `import React from 'react';

import SegmentedControls from '../app/Modules/SegmentedControls.react';

export default class OnClickParentSample extends React.Component {

    render() {
        return (
            <SegmentedControls onClick={this._onParentClick.bind(this)} selected={this.state.clickSelected}>
                <SegmentedControls.Item label="Button 1" />
                <SegmentedControls.Item label="Button 2" />
            </SegmentedControls>
        );
    }

}`;

const onClickChildrenSample = `import React from 'react';

import SegmentedControls from '../app/Modules/SegmentedControls.react';

export default class OnClickChildrenSample extends React.Component {

    render() {
        return (
            <SegmentedControls>
                <SegmentedControls.Item label="Button One" onClick={this._onChildClick.bind(this)} />
                <SegmentedControls.Item label="Button Two" onClick={this._onChildClick.bind(this)} />
                <SegmentedControls.Item label="Button Three" onClick={this._onChildClick.bind(this)} />
                <SegmentedControls.Item label="Button Four" onClick={this._onChildClick.bind(this)} />
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

                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Segmented Controls */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Segmented Controls
                        <Header.Subheader>
                            A Basic segmented controls with labels.
                        </Header.Subheader>
                    </Header>

                    <SegmentedControls>
                        <SegmentedControls.Item label="Button 1" />
                        <SegmentedControls.Item label="Button Number 2" />
                    </SegmentedControls>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {basicSample}
                    </Highlighter>

                    {/* Icons */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Icons
                        <Header.Subheader>
                            A segmented control can have an icon either along with a label or by itself.
                        </Header.Subheader>
                    </Header>

                    <SegmentedControls>
                        <SegmentedControls.Item icon="circle" label="Button 1" />
                        <SegmentedControls.Item icon="block" label="Button 2" />
                        <SegmentedControls.Item icon="check-circle" label="Button 3" />
                    </SegmentedControls><br /><br />

                    <SegmentedControls>
                        <SegmentedControls.Item icon="circle" />
                        <SegmentedControls.Item icon="block" />
                        <SegmentedControls.Item icon="check-circle" />
                    </SegmentedControls>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {iconsSample}
                    </Highlighter>

                    {/* Fluid */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Fluid
                        <Header.Subheader>
                            Segmented controls can take on the size of its container.
                        </Header.Subheader>
                    </Header>

                    <SegmentedControls fluid={true}>
                        <SegmentedControls.Item label="Button 1" />
                        <SegmentedControls.Item label="Button 2" />
                        <SegmentedControls.Item label="Button 3" />
                    </SegmentedControls>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {fluidSample}
                    </Highlighter>

                    {/* Selected */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Selected
                        <Header.Subheader>
                            Change the default selected button.
                        </Header.Subheader>
                    </Header>

                    <SegmentedControls selected={this.state.selected}>
                        <SegmentedControls.Item label="Button 1" />
                        <SegmentedControls.Item label="Button 2" />
                        <SegmentedControls.Item label="Button 3" />
                    </SegmentedControls>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {selectedSample}
                    </Highlighter>

                    {/* onClick Parent Handler */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        onClick Parent Handler
                        <Header.Subheader>
                            Can handle an onClick event from parent.
                        </Header.Subheader>
                    </Header>

                    <SegmentedControls onClick={this._onParentClick.bind(this)} selected={this.state.clickSelected}>
                        <SegmentedControls.Item label="Button 1" />
                        <SegmentedControls.Item label="Button 2" />
                    </SegmentedControls>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onClickParentSample}
                    </Highlighter>

                    {/* onClick Children Handler */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        onClick Children Handler
                        <Header.Subheader>
                            Can handle an onClick event from parent.
                        </Header.Subheader>
                    </Header>

                    <SegmentedControls>
                        <SegmentedControls.Item label="Button One" onClick={this._onChildClick.bind(this)} />
                        <SegmentedControls.Item label="Button Two" onClick={this._onChildClick.bind(this)} />
                        <SegmentedControls.Item label="Button Three" onClick={this._onChildClick.bind(this)} />
                        <SegmentedControls.Item label="Button Four" onClick={this._onChildClick.bind(this)} />
                    </SegmentedControls>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onClickChildrenSample}
                    </Highlighter>
                </Main.Content>
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
