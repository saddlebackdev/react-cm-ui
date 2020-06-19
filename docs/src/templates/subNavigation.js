
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import {
    Card, Header, SubNavigation, TitleBar,
} from 'react-cm-ui';

// Docs UI Components
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

const subNavigationSample = `import React from 'react';

import SubNavigation from '../app/Views/SubNavigation.react';

export default class SubNavigationSample extends React.Component {

    render() {
        return (
            <SubNavigation>
                <SubNavigation.Item label="Button 1" />
                <SubNavigation.Item label="Button 2" />
                <SubNavigation.Item label="Button 3" />
                <SubNavigation.Item label="Button 4" />
            </SubNavigation>
        );
    }

}`;

const selectedSample = `import React from 'react';

import SubNavigation from '../app/Views/SubNavigation.react';

export default class SelectedSample extends React.Component {

    render() {
        return (
            <SubNavigation selected={2}>
                <SubNavigation.Item label="Button 1" />
                <SubNavigation.Item label="Button 2" />
                <SubNavigation.Item label="Default" />
                <SubNavigation.Item label="Button 4" />
            </SubNavigation>
        );
    }

}`;

const onClickParentSample = `import React from 'react';

import SubNavigation from '../app/Views/SubNavigation.react';

export default class OnClickParentSample extends React.Component {

    render() {
        return (
            <SubNavigation onClick={this._onParentClick.bind(this)}>
                <SubNavigation.Item label="Button 1" />
                <SubNavigation.Item label="Button 2" />
                <SubNavigation.Item label="Button 3" />
                <SubNavigation.Item label="Button 4" />
            </SubNavigation>

    }

    _onParentClick(index) {
        window.alert('Yay, index ' + index + ' was just clicked!');
    }

}`;

const onClickChildrenSample = `import React from 'react';

import SubNavigation from '../app/Views/SubNavigation.react';

export default class OnClickChildrenSample extends React.Component {

    render() {
        return (
            <SubNavigation>
                <SubNavigation.Item label="Button 1" onClick={this._onChildClick.bind(this)} />
                <SubNavigation.Item label="Button 2" onClick={this._onChildClick.bind(this)} />
                <SubNavigation.Item label="Button 3" onClick={this._onChildClick.bind(this)} />
                <SubNavigation.Item label="Button 4" onClick={this._onChildClick.bind(this)} />
            </SubNavigation>
    }

    _onChildClick(index) {
        window.alert('Yay, index ' + index + ' was just clicked!');
    }

}`;

export default class CollectionsSubNavigation extends React.Component {
    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'drawer',
                type: 'bool',
                default: '',
                description: 'Applies a top border style to handle being in a drawer.',
                allowedTypes: '',
            }, {
                name: 'onClick',
                type: 'func',
                default: '',
                description: 'SubNavigation can handle an onClick event.',
                allowedTypes: '',
            }, {
                name: 'selected',
                type: 'number',
                default: '',
                description: 'Default selected button.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the SubNavigation\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <TitleBar title="Sub Navigation" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Sub Navigation */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Sub Navigation
                    <Header.Subheader>
                        A standard Sub Navigation.
                    </Header.Subheader>
                </Header>

                <MediaQuery maxWidth={767}>
                    {(matches) => (
                        <div style={{ margin: matches ? '0 11px' : '0 22px' }}>
                            <SubNavigation>
                                <SubNavigation.Item label="Button 1" />
                                <SubNavigation.Item label="Button 2" />
                                <SubNavigation.Item label="Button 3" />
                                <SubNavigation.Item label="Button 4" />
                            </SubNavigation>
                        </div>
                    )}
                </MediaQuery>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {subNavigationSample}
                </Highlighter>

                {/* Selected */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Selected
                    <Header.Subheader>
                        A Sub Navigation can change the default selected button.
                    </Header.Subheader>
                </Header>

                <MediaQuery maxWidth={767}>
                    {(matches) => (
                        <div style={{ margin: matches ? '0 11px' : '0 22px' }}>
                            <SubNavigation selected={2}>
                                <SubNavigation.Item label="Button 1" />
                                <SubNavigation.Item label="Button 2" />
                                <SubNavigation.Item label="Default" />
                                <SubNavigation.Item label="Button 4" />
                            </SubNavigation>
                        </div>
                    )}
                </MediaQuery>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {selectedSample}
                </Highlighter>

                {/* onClick Parent Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    onClick Parent Handler
                    <Header.Subheader>
                        A Sub Navigation can a have
                        {' '}
                        <code>onClick</code>
                        {' '}
                        event handler.
                    </Header.Subheader>
                </Header>

                <MediaQuery maxWidth={767}>
                    {(matches) => (
                        <div style={{ margin: matches ? '0 11px' : '0 22px' }}>
                            <SubNavigation onClick={this._onParentClick.bind(this)}>
                                <SubNavigation.Item label="Button 1" />
                                <SubNavigation.Item label="Button 2" />
                                <SubNavigation.Item label="Button 3" />
                                <SubNavigation.Item label="Button 4" />
                            </SubNavigation>
                        </div>
                    )}
                </MediaQuery>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onClickParentSample}
                </Highlighter>

                {/* onClick Children Handler */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    onClick Children Handler
                    <Header.Subheader>
                        Can handle an onClick event from parent.
                    </Header.Subheader>
                </Header>

                <MediaQuery maxWidth={767}>
                    {(matches) => (
                        <div style={{ margin: matches ? '0 11px' : '0 22px' }}>
                            <SubNavigation>
                                <SubNavigation.Item label="Button 1" onClick={this._onChildClick.bind(this)} />
                                <SubNavigation.Item label="Button 2" onClick={this._onChildClick.bind(this)} />
                                <SubNavigation.Item label="Button 3" onClick={this._onChildClick.bind(this)} />
                                <SubNavigation.Item label="Button 4" onClick={this._onChildClick.bind(this)} />
                            </SubNavigation>
                        </div>
                    )}
                </MediaQuery>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {onClickChildrenSample}
                </Highlighter>
            </Main>
        );
    }

    _onChildClick(index, label) {
        window.alert(`${label} selected!`);
    }

    _onParentClick(index) {
        window.alert(`Yay, index ${index} was just clicked!`);
    }
}
