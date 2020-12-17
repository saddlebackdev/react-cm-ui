import {
    Card,
    Typography,
    SegmentedControls,
} from 'react-cm-ui';
import React from 'react';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

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
                <Main.Content>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Segmented Controls */}
                    <Typography size="large" style={{ marginTop: '55px' }}>
                        Segmented Controls
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A Basic segmented controls with labels.
                    </Typography>

                    <SegmentedControls>
                        <SegmentedControls.Item label="Button 1" />
                        <SegmentedControls.Item label="Button Number 2" />
                    </SegmentedControls>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {basicSample}
                    </Highlighter>

                    {/* Icons */}
                    <Typography size="large" style={{ marginTop: '55px' }}>
                        Icons
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        A segmented control can have an icon either along with a label or by itself.
                    </Typography>

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
                    <Typography size="large" style={{ marginTop: '55px' }}>
                        Fluid
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Segmented controls can take on the size of its container.
                    </Typography>

                    <SegmentedControls fluid={true}>
                        <SegmentedControls.Item label="Button 1" />
                        <SegmentedControls.Item label="Button 2" />
                        <SegmentedControls.Item label="Button 3" />
                    </SegmentedControls>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {fluidSample}
                    </Highlighter>

                    {/* Selected */}
                    <Typography size="large" style={{ marginTop: '55px' }}>
                        Selected
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Change the default selected button.
                    </Typography>

                    <SegmentedControls selected={this.state.selected}>
                        <SegmentedControls.Item label="Button 1" />
                        <SegmentedControls.Item label="Button 2" />
                        <SegmentedControls.Item label="Button 3" />
                    </SegmentedControls>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {selectedSample}
                    </Highlighter>

                    {/* onClick Parent Handler */}
                    <Typography size="large" style={{ marginTop: '55px' }}>
                        onClick Parent Handler
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Can handle an onClick event from parent.
                    </Typography>

                    <SegmentedControls onClick={this._onParentClick.bind(this)} selected={this.state.clickSelected}>
                        <SegmentedControls.Item label="Button 1" />
                        <SegmentedControls.Item label="Button 2" />
                    </SegmentedControls>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onClickParentSample}
                    </Highlighter>

                    {/* onClick Children Handler */}
                    <Typography size="large" style={{ marginTop: '55px' }}>
                        onClick Children Handler
                    </Typography>

                    <Typography variant="body1" style={{ marginBottom: 16 }}>
                        Can handle an onClick event from parent.
                    </Typography>

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
