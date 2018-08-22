'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Dropdown, Header, SubNavigation, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const dropdownSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class DropdownSample extends React.Component {

    render() {
        return (
            <Dropdown placeholder="select">
                <Dropdown.Item label="Option 1" />
                <Dropdown.Item label="Option 2" />
                <Dropdown.Item label="Option 3" />
                <Dropdown.Item label="Option 4" />
            </Dropdown>
        );
    }

}`;

const buttonSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class ButtonSample extends React.Component {

    render() {
        return (
            <Dropdown button={true} placeholder="Button Dropdown">
                <Dropdown.Item label="Option 1" />
                <Dropdown.Item label="Option 2" />
                <Dropdown.Item label="Option 3" />
                <Dropdown.Item label="Option 4" />
            </Dropdown>
        );
    }

}`;

const buttonColorSample = `import React from 'react';
import { Dropdown } from 'react-cm-ui';

export default class ButtonColorSample extends React.Component {
    render() {
        return (
            <div>
                <Dropdown button buttonColor="alert" text="Alert">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="alternate" text="Alternate">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="disable" text="Disable">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="light" text="Light">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="outline" text="Outline">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="primary" text="Primary">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="secondary" text="Secondary">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="success" text="Success">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="warning" text="Warning">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>
            </div>
        );
    }
}`;

const buttonCompactSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class ButtonCompactSample extends React.Component {

    render() {
        return (
            <Dropdown button={true} buttonCompact={true} placeholder="Button Compact Dropdown">
                <Dropdown.Item label="Option 1" />
                <Dropdown.Item label="Option 2" />
                <Dropdown.Item label="Option 3" />
                <Dropdown.Item label="Option 4" />
            </Dropdown>
        );
    }

}`;

const disableSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class DisableSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectionCustomOptionsValue: null,
            selectionMultipleDisableValue: [0, 1, 2]
        };
    }

    render() {
        const selectionCustomOptions = [
            {
                'avatar': '',
                'id': -1,
                'label': 'All Users',
                'value': -1
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=3',
                'id': 5,
                'label': 'Rafi Ghazarian',
                'value': 5
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=4',
                'id': 8,
                'label': 'Mike Jacobs',
                'value': 8
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=5',
                'id': 36,
                'label': 'Joseph Lee',
                'value': 36
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=68',
                'id': 36,
                'label': 'Cameron Brewer',
                'value': 36
            }
        ];

        return (
            <div>
                <Dropdown button={true} disable={true} placeholder="Disabled Button Dropdown">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                    <Dropdown.Item label="Option 3" />
                    <Dropdown.Item label="Option 4" />
                </Dropdown><br /><br />

                <Dropdown
                    disable={true}
                    onChange={this._onSelectionCustomOptionsChange.bind(this)}
                    selectionOptionComponent={SelectionCustomComponent}
                    options={selectionCustomOptions}
                    placeholder="Select a status"
                    selection={true}
                    value={this.state.selectionCustomOptionsValue}
                /><br /><br />

                <Dropdown
                    disable={true}
                    onChange={this._onSelectionMultipleDisableChange.bind(this)}
                    options={selectionMultipleOptions}
                    placeholder="Select some tags"
                    selection={true}
                    selectionMultiple={true}
                    selectionCreatable={true}
                    value={this.state.selectionMultipleDisableValue}
                />
            </div>
        );
    }

    _onSelectionCustomOptionsChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionCustomOptionsValue: selectedOption });
    }

    _onSelectionMultipleDisableChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionMultipleDisableValue: selectedOption });
    }

}`;

const iconSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class IconSample extends React.Component {

    render() {
        return (
            <div>
                <Dropdown
                    button={true}
                    buttonCompact={true}
                    iconInverse={true}
                    iconSize="xlarge"
                    iconType="ellipsis-h"
                >
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                    <Dropdown.Item label="Option 3" />
                    <Dropdown.Item label="Option 4" />
                </Dropdown>

                <Dropdown
                    iconType="plus"
                    onChange={this._onSelectionCustomOptionsChange.bind(this)}
                    selectionOptionComponent={SelectionCustomComponent}
                    options={selectionCustomOptions}
                    placeholder="Select a status"
                    selection={true}
                    value={this.state.selectionCustomOptionsValue}
                />
            </div<
        );
    }

}`;

const menuHeightSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class MenuHeightSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selectionValue: null };
    }

    render() {
        return (
            <Dropdown
                onChange={this._onSelectionChange.bind(this)}
                options={selectionOptions}
                placeholder="Select a user"
                selection={true}
                menuMaxHeight={100}
                value={this.state.selectionValue}
            />
        );
    }

    _onSelectionChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionValue: selectedOption });
    }

}`;

const onChangeSample = `import React from 'react';
import { Dropdown } from 'react-cm-ui';

export default class OnChangeSample extends React.Component {

    constructor(props) {
        super(props);

        this._onSampleOnChange = this._onSampleOnChange.bind(this);
    }

    render() {
        return (
            <Dropdown onChange={this._onSampleOnChange} text="Marty McFly">
                <Dropdown.Item label="Option 1" />
                <Dropdown.Item label="Option 2" />
                <Dropdown.Item label="Option 3" />
                <Dropdown.Item label="Option 4" />
            </Dropdown>
        );
    }

    _onSampleOnChange(test) {
        console.log('_onSampleOnChange');
        console.log('test', test);
    }

}`;

const selectionCreatableSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class SelectionCreatableSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selectionMultipleCreatableValue: null };
    }

    render() {
        return (
            <Dropdown
                onChange={this._onSelectionMultipleCreatableChange.bind(this)}
                options={selectionMultipleOptions}
                placeholder="Select some tags"
                selection={true}
                selectionMultiple={true}
                selectionCreatable={true}
                value={this.state.selectionMultipleCreatableValue}
            />
        );
    }

    _onSelectionMultipleCreatableChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionMultipleCreatableValue: selectedOption });
    }

}`;

const selectionMobileSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class SelectionMobileSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selectionValue: null };
    }

    render() {
        return (
            <Dropdown
                onChange={this._onSelectionChange.bind(this)}
                options={selectionOptions}
                placeholder="Select a user"
                selection={true}
                selectionMobile={true}
                value={this.state.selectionValue}
            />
        );
    }

    _onSelectionChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionValue: selectedOption });
    }

}`;

const selectionMultipleSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class SelectionMultipleSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selectionMultipleValue: null };
    }

    render() {
        return (
            <Dropdown
                onChange={this._onSelectionMultipleChange.bind(this)}
                options={selectionMultipleOptions}
                placeholder="Select some tags"
                selection={true}
                selectionMultiple={true}
                value={this.state.selectionMultipleValue}
            />
        );
    }

    _onSelectionMultipleChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionMultipleValue: selectedOption });
    }

}`;

const selectionOptionComponentSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class SelectionOptionComponentSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selectionCustomOptionsValue: null };
    }

    render() {
        const selectionCustomOptions = [
            {
                'avatar': '',
                'id': -1,
                'label': 'All Users',
                'value': -1
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=3',
                'id': 5,
                'label': 'Rafi Ghazarian',
                'value': 5
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=4',
                'id': 8,
                'label': 'Mike Jacobs',
                'value': 8
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=5',
                'id': 36,
                'label': 'Joseph Lee',
                'value': 36
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=68',
                'id': 36,
                'label': 'Cameron Brewer',
                'value': 36
            }
        ];

        return (
            <Dropdown
                onChange={this._onSelectionCustomOptionsChange.bind(this)}
                selectionOptionComponent={SelectionCustomComponent}
                options={selectionCustomOptions}
                placeholder="Select a status"
                selection={true}
                value={this.state.selectionCustomOptionsValue}
            />
        );
    }

    _onSelectionCustomOptionsChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionCustomOptionsValue: selectedOption });
    }

}`;


const selectionUnderlineSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class SelectionUnderlineSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selectionCustomOptionsValue: null };
    }

    render() {
        const selectionCustomOptions = [
            {
                'avatar': '',
                'id': -1,
                'label': 'All Users',
                'value': -1
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=3',
                'id': 5,
                'label': 'Rafi Ghazarian',
                'value': 5
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=4',
                'id': 8,
                'label': 'Mike Jacobs',
                'value': 8
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=5',
                'id': 36,
                'label': 'Joseph Lee',
                'value': 36
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=68',
                'id': 36,
                'label': 'Cameron Brewer',
                'value': 36
            }
        ];

        return (
            <Dropdown
                onChange={this._onSelectionCustomOptionsChange.bind(this)}
                options={selectionCustomOptions}
                placeholder="Select a status"
                selection
                selectionUnderline
                value={this.state.selectionCustomOptionsValue}
            />
        );
    }

    _onSelectionCustomOptionsChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionCustomOptionsValue: selectedOption });
    }

}`;

const themeSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class ThemeSample extends React.Component {

    render() {
        return (
            <Dropdown button={true} placeholder="Button Dropdown" theme="dark">
                <Dropdown.Item label="Option 1" />
                <Dropdown.Item label="Option 2" />
                <Dropdown.Item label="Option 3" />
                <Dropdown.Item label="Option 4" />
            </Dropdown>
        );
    }

}`;

const itemIconSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class ItemIconSample extends React.Component {

    render() {
        return (
            <Dropdown button={true} placeholder="Button Dropdown">
                <Dropdown.Item iconType="block" label="Option 1" />
                <Dropdown.Item iconColor="highlight" iconType="heart" label="Option 2" />
                <Dropdown.Item iconType="circle" label="Option 3" />
                <Dropdown.Item iconColor="alert" iconType="reassign" label="Option 4" />
            </Dropdown>
        );
    }

}`;

class SelectionCustomComponent extends React.Component {

    render() {
        const { option } = this.props;

        return (
            <div
                className="Select-option"
                onMouseDown={this._onMouseDown.bind(this)}
                onMouseEnter={this._onMouseEnter.bind(this)}
				onMouseMove={this._onMouseMove.bind(this)}
                title={option.label}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        width: '100%'
                    }}
                >
                    {option.avatar ? (
                        <div
                            style={{
                                backgroundImage: `url('${option.avatar}')`,
                                borderRadius: '17px',
                                flex: '0 1 auto',
                                height: '33px',
                                marginRight: '11px',
                                maxWidth: '33px',
                                minWidth: '33px'
                            }}
                        />
                    ) : null}

                    <div
                        className="name"
                        style={{
                            flex: '1 1 auto',
                        }}
                    >
                        {option.label}
                    </div>
                </div>
            </div>
        );
    }

    _onMouseDown(event) {
        this.props.onSelect(this.props.option, event);

        event.preventDefault();
        event.stopPropagation();
    }

    _onMouseEnter(event) {
        this.props.onFocus(this.props.option, event);
    }

    _onMouseMove(event) {
        if (this.props.isFocused) {
            return;
        }

        this.props.onFocus(this.props.option, event);
    }

};

SelectionCustomComponent.propTypes = {
    isFocused: PropTypes.bool,
    onFocus: PropTypes.func,
    onSelect: PropTypes.func,
    option: PropTypes.object.isRequired
};

export default class ModulesDropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownValue: null,
            selectionValue: null,
            selectionCustomOptionsValue: null,
            selectionMultipleDisableValue: [0, 1, 2],
            selectionMultipleValue: null,
            selectionMultipleCreatableValue: null,
            subNavIndex: 0
        };

        this._onSampleOnChange = this._onSampleOnChange.bind(this);
    }

    render() {
        const dropdownProps = [
            {
                name: 'button',
                type: 'bool',
                default: '',
                description: 'A Dropdown can take on the look of a Button.',
                allowedTypes: ''
            }, {
                name: 'buttonColor',
                type: 'enum',
                default: '',
                description: 'Color of the button Dropdown.',
                allowedTypes: 'alert, alternate, disable, light, outline, primary, success, warning'
            }, {
                name: 'buttonCompact',
                type: 'bool',
                default: '',
                description: 'A button can reduce its padding.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'disabled',
                type: 'bool',
                default: '',
                description: 'A Dropdown can be disabled',
                allowedTypes: ''
            }, {
                name: 'iconColor',
                type: 'enum',
                default: '',
                description: 'Change the color of the icon inside of the Dropdown.',
                allowedTypes: ''
            }, {
                name: 'iconInverse',
                type: 'bool',
                default: '',
                description: 'Change the icon inside of the Dropdown to inverse.',
                allowedTypes: ''
            }, {
                name: 'iconSize',
                type: 'enum',
                default: '',
                description: 'Change the size of the icon inside of the Dropdown.',
                allowedTypes: ''
            }, {
                name: 'iconType',
                type: 'string',
                default: '',
                description: 'Change the icon inside of the Dropdown.',
                allowedTypes: ''
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'A Dropdown can be formatted to appear on dark backgrounds better.',
                allowedTypes: ''
            }, {
                name: 'menuMaxHeight',
                type: 'number',
                default: '',
                description: 'Supply a maximum height for a Dropdown Selection\'s menu.',
                allowedTypes: ''
            }, {
                name: 'menuMinHeight',
                type: 'number',
                default: '',
                description: 'Supply a minimum height for a Dropdown Selection\'s menu.',
                allowedTypes: ''
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'The onChange even handler.',
                allowedTypes: ''
            }, {
                name: 'options',
                type: 'array',
                default: '',
                description: 'Supply a list of options that the user can select from.',
                allowedTypes: ''
            }, {
                name: 'placeholder',
                type: 'string',
                default: '',
                description: 'Supply a placeholder text for the best UX.',
                allowedTypes: ''
            }, {
                name: 'selectionCreatable',
                type: 'bool',
                default: '',
                description: 'A Dropdown Multiple Selection can be have creatable values.',
                allowedTypes: ''
            }, {
                name: 'selectionMenuContainerStyle',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Dropdown Selection\'s outer menu.',
                allowedTypes: ''
            }, {
                name: 'selectionMenuStyle',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Dropdown Selection\'s inner menu.',
                allowedTypes: ''
            }, {
                name: 'selectionMobile',
                type: 'bool',
                default: '',
                description: 'A Dropdown Selection can be user friendly on mobile devices.',
                allowedTypes: ''
            }, {
                name: 'selectionMultiple',
                type: 'bool',
                default: '',
                description: 'A Dropdown Selection can show options as tags.',
                allowedTypes: ''
            }, {
                name: 'selectionOptionComponent',
                type: 'func',
                default: '',
                description: 'Give a Dropdown Selection custom options.',
                allowedTypes: ''
            }, {
                name: 'selectionUnderline',
                type: 'bool',
                default: '',
                description: 'Underlined Dropdown selection.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Dropdown\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'theme',
                type: 'enum',
                default: '',
                description: 'Changes the menu\'s color.',
                allowedTypes: 'dark, light'
            }, {
                name: 'value',
                type: 'array, object',
                default: '',
                description: 'Changes the value of the Dropdown.',
                allowedTypes: ''
            }
        ];

        const dropdownItemProps = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'iconColor',
                type: 'string',
                default: '',
                description: 'Color of the icon.',
                allowedTypes: 'alert, light, outline, primary, static, success'
            }, {
                name: 'iconInverse',
                type: 'bool',
                default: '',
                description: 'A icon can be formatted to appear on dark backgrounds better.',
                allowedTypes: ''
            }, {
                name: 'iconType',
                type: 'string',
                default: '',
                description: 'Type of icon.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'number || string',
                default: '',
                description: 'ID for the item.',
                allowedTypes: ''
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Label for the item.',
                allowedTypes: ''
            }, {
                name: 'labelStyle',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the label container.',
                allowedTypes: ''
            }
        ];

        const selectionOptions = [
            {
                'id': -1,
                'label': 'All Users',
                'value': -1
            }, {
                'id': 5,
                'label': 'Rafi Ghazarian',
                'value': 5
            }, {
                'id': 8,
                'label': 'Mike Jacobs',
                'value': 8
            }, {
                'id': 36,
                'label': 'Joseph Lee',
                'value': 36
            }, {
                'id': 23,
                'label': 'Geoffrey Roberts',
                'value': 23
            }, {
                'id': 55,
                'label': 'Cameron Brewer',
                'value': 55
            }
        ];

        const selectionCustomOptions = [
            {
                'avatar': '',
                'id': -1,
                'label': 'All Users',
                'value': -1
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=3',
                'id': 5,
                'label': 'Rafi Ghazarian',
                'value': 5
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=4',
                'id': 8,
                'label': 'Mike Jacobs',
                'value': 8
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=5',
                'id': 36,
                'label': 'Joseph Lee',
                'value': 36
            }, {
                'avatar': 'http://i.pravatar.cc/33?img=68',
                'id': 36,
                'label': 'Cameron Brewer',
                'value': 36
            }
        ];

        const selectionMultipleOptions = [
            {
                'id': 1,
                'label': 'Red',
                'value': 1
            }, {
                'id': 2,
                'label': 'Green',
                'value': 2
            }, {
                'id': 3,
                'label': 'Blue',
                'value': 3
            }
        ];

        let examplesJSX;

        if (this.state.subNavIndex === 1) {
            examplesJSX = (
                <div>
                    {/* Icon */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Icon
                        <Header.Subheader>
                            An Item can have an icon.
                        </Header.Subheader>
                    </Header>

                    <Dropdown button={true} placeholder="Button Dropdown">
                        <Dropdown.Item iconType="block" label="Option 1" />
                        <Dropdown.Item iconColor="highlight" iconType="heart" label="Option 2" />
                        <Dropdown.Item iconType="circle" label="Option 3" />
                        <Dropdown.Item iconColor="alert" iconType="reassign" label="Option 4" />
                    </Dropdown>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {itemIconSample}
                    </Highlighter>
                </div>
            );
        } else {
            examplesJSX = (
                <div>
                    {/* Dropdown */}
                    <Header anchor="dropdown" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Dropdown
                        <Header.Subheader>
                            A baisc Dropdown.
                        </Header.Subheader>
                    </Header>

                    <Dropdown placeholder="select">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                        <Dropdown.Item label="Option 3" />
                        <Dropdown.Item label="Option 4" />
                    </Dropdown>

                    <div style={{ textAlign: 'right' }}>
                        <Dropdown placeholder="select">
                            <Dropdown.Item label="Option 1" />
                            <Dropdown.Item label="Really Long Option 2" />
                            <Dropdown.Item label="Option 3" />
                            <Dropdown.Item label="Option 4" />
                        </Dropdown>
                    </div>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {dropdownSample}
                    </Highlighter>

                    {/* Button */}
                    <Header anchor="button" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Button
                        <Header.Subheader>
                            A Dropdown can take on the style of a Button.
                        </Header.Subheader>
                    </Header>

                    <Dropdown button={true} placeholder="Button Dropdown">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                        <Dropdown.Item label="Option 3" />
                        <Dropdown.Item label="Option 4" />
                    </Dropdown>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {buttonSample}
                    </Highlighter>

                    {/* Button Color */}
                    <Header anchor="button" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Button Color
                        <Header.Subheader>
                            Button Dropdowns can be different colors.
                        </Header.Subheader>
                    </Header>

                    <Dropdown button buttonColor="alert" text="Alert">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>

                    <Dropdown button buttonColor="alternate" text="Alternate">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>

                    <Dropdown button buttonColor="disable" text="Disable">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>

                    <Dropdown button buttonColor="light" text="Light">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>

                    <Dropdown button buttonColor="outline" text="Outline">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>

                    <Dropdown button buttonColor="primary" text="Primary">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>

                    <Dropdown button buttonColor="secondary" text="Secondary">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>

                    <Dropdown button buttonColor="success" text="Success">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>

                    <Dropdown button buttonColor="warning" text="Warning">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                    </Dropdown>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {buttonColorSample}
                    </Highlighter>

                    {/* Button Compact */}
                    <Header anchor="button-compact" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Button Compact
                        <Header.Subheader>
                            A Dropdown can take on the style of a Button.
                        </Header.Subheader>
                    </Header>

                    <Dropdown button={true} buttonCompact={true} placeholder="Button Compact Dropdown">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                        <Dropdown.Item label="Option 3" />
                        <Dropdown.Item label="Option 4" />
                    </Dropdown>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {buttonCompactSample}
                    </Highlighter>

                    {/* Disable */}
                    <Header anchor="disable" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Disable
                        <Header.Subheader>
                            A Dropdown can be disabled.
                        </Header.Subheader>
                    </Header>

                    <Dropdown button={true} disable={true} placeholder="Disabled Button Dropdown">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                        <Dropdown.Item label="Option 3" />
                        <Dropdown.Item label="Option 4" />
                    </Dropdown><br /><br />

                    <Dropdown
                        disable={true}
                        onChange={this._onSelectionCustomOptionsChange.bind(this)}
                        selectionOptionComponent={SelectionCustomComponent}
                        options={selectionCustomOptions}
                        placeholder="Select a status"
                        selection={true}
                        value={this.state.selectionCustomOptionsValue}
                    /><br /><br />

                    <Dropdown
                        disable={true}
                        onChange={this._onSelectionMultipleDisableChange.bind(this)}
                        options={selectionMultipleOptions}
                        placeholder="Select some tags"
                        selection={true}
                        selectionMultiple={true}
                        selectionCreatable={true}
                        value={this.state.selectionMultipleDisableValue}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {disableSample}
                    </Highlighter>

                    {/* Icon */}
                    <Header anchor="icon-type" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Icon
                        <Header.Subheader>
                            A Dropdown's icon.
                        </Header.Subheader>
                    </Header>

                    <Dropdown iconType="plus" placeholder="select">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                        <Dropdown.Item label="Option 3" />
                        <Dropdown.Item label="Option 4" />
                    </Dropdown><br /><br />

                    <Dropdown button={true} iconSize="small" iconType="plus" placeholder="Button Placeholder/Icon">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                        <Dropdown.Item label="Option 3" />
                        <Dropdown.Item label="Option 4" />
                    </Dropdown><br /><br />

                    <Dropdown
                        button={true}
                        buttonCompact={true}
                        iconInverse={true}
                        iconSize="xlarge"
                        iconType="ellipsis-h"
                    >
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                        <Dropdown.Item label="Option 3" />
                        <Dropdown.Item label="Option 4" />
                    </Dropdown><br /><br />

                    <Dropdown
                        iconType="plus"
                        onChange={this._onSelectionCustomOptionsChange.bind(this)}
                        selectionOptionComponent={SelectionCustomComponent}
                        options={selectionCustomOptions}
                        placeholder="Select a status"
                        selection={true}
                        value={this.state.selectionCustomOptionsValue}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {iconSample}
                    </Highlighter>

                    {/* Inverse */}
                    <Header anchor="icon-type" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Inverse
                        <Header.Subheader>
                            A Dropdown can be formatted to appear on dark backgrounds better.
                        </Header.Subheader>
                    </Header>

                    <Block inverse={true} style={{ height: '300px', marginTop: '33px' }}>
                        <Dropdown
                            inverse={true}
                            onChange={this._onSelectionChange.bind(this)}
                            options={selectionOptions}
                            placeholder="Select a user"
                            selection={true}
                            value={this.state.selectionValue}
                        />
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {iconSample}
                    </Highlighter>

                    {/* Menu Height */}
                    <Header anchor="menu-maximum-height" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Menu Height
                        <Header.Subheader>
                            A Dropdown's menu's maximum and minimum height can be set.
                        </Header.Subheader>
                    </Header>

                    <Dropdown
                        onChange={this._onSelectionChange.bind(this)}
                        options={selectionOptions}
                        placeholder="Select a user"
                        selection={true}
                        menuMaxHeight={100}
                        value={this.state.selectionValue}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {menuHeightSample}
                    </Highlighter>

                    {/* onChange */}
                    <Header anchor="on-change" size="large" style={{ marginTop: '55px' }} sub={true}>
                        onChange
                        <Header.Subheader>
                            onChagne event handler.
                        </Header.Subheader>
                    </Header>

                    <Dropdown onChange={this._onSampleOnChange} text="Marty McFly">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                        <Dropdown.Item label="Option 3" />
                        <Dropdown.Item label="Option 4" />
                    </Dropdown>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onChangeSample}
                    </Highlighter>

                    {/* Selection Creatable */}
                    <Header anchor="selection-creatable" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Selection Creatable
                        <Header.Subheader>
                            A Dropdown can be a select dropdown where you can choose and create items.
                        </Header.Subheader>
                    </Header>

                    <Dropdown
                        onChange={this._onSelectionMultipleCreatableChange.bind(this)}
                        options={selectionMultipleOptions}
                        placeholder="Select some tags"
                        selection={true}
                        selectionMultiple={true}
                        selectionCreatable={true}
                        value={this.state.selectionMultipleCreatableValue}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {selectionCreatableSample}
                    </Highlighter>

                    {/* Selection Mobile */}
                    <Header anchor="selection-mobile" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Selection Mobile
                        <Header.Subheader>
                            A Dropdown Selection can be user friendly on mobile devices. Go ahead, shrink that browser.
                        </Header.Subheader>
                    </Header>

                    <Dropdown
                        onChange={this._onSelectionChange.bind(this)}
                        options={selectionOptions}
                        placeholder="Select a user"
                        selection={true}
                        selectionMobile={true}
                        value={this.state.selectionValue}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {selectionMobileSample}
                    </Highlighter>

                    {/* Selection Mutiple */}
                    <Header anchor="selection-mutiple" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Selection Mutiple
                        <Header.Subheader>
                            A Dropdown can be a select dropdown where you can choose items.
                        </Header.Subheader>
                    </Header>

                    <Dropdown
                        onChange={this._onSelectionMultipleChange.bind(this)}
                        options={selectionMultipleOptions}
                        placeholder="Select some tags"
                        selection={true}
                        selectionMultiple={true}
                        value={this.state.selectionMultipleValue}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {selectionMultipleSample}
                    </Highlighter>

                    {/* Selection Option Component */}
                    <Header anchor="selection-option-component" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Selection Option Component
                        <Header.Subheader>
                            Give a Dropdown Selection custom options.
                        </Header.Subheader>
                    </Header>

                    <Dropdown
                        onChange={this._onSelectionCustomOptionsChange.bind(this)}
                        selectionOptionComponent={SelectionCustomComponent}
                        options={selectionCustomOptions}
                        placeholder="Select a status"
                        selection={true}
                        value={this.state.selectionCustomOptionsValue}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {selectionOptionComponentSample}
                    </Highlighter>

                    {/* Selection Underline */}
                    <Header anchor="selection-option-component" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Selection Underline
                        <Header.Subheader>
                            A Dropdown selection can be styled to have an underline.
                        </Header.Subheader>
                    </Header>

                    <Dropdown
                        onChange={this._onSelectionCustomOptionsChange.bind(this)}
                        options={selectionCustomOptions}
                        placeholder="Select a status"
                        selection
                        selectionUnderline
                        value={this.state.selectionCustomOptionsValue}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {selectionUnderlineSample}
                    </Highlighter>

                    {/* Theme */}
                    <Header anchor="theme" size="large" style={{ marginTop: '55px' }} sub={true}>
                        Theme
                        <Header.Subheader>
                            Changes the menu's color.
                        </Header.Subheader>
                    </Header>

                    <Dropdown button={true} placeholder="Button Dropdown" theme="dark">
                        <Dropdown.Item label="Option 1" />
                        <Dropdown.Item label="Option 2" />
                        <Dropdown.Item label="Option 3" />
                        <Dropdown.Item label="Option 4" />
                    </Dropdown>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {themeSample}
                    </Highlighter>
                </div>
            );
        }

        return (
            <Main page="headers">
                <TitleBar title="Dropdown" />

                <SubNavigation
                    onClick={this._onSubNavClick.bind(this)}
                    selected={this.state.subNavIndex}
                    style={{ marginBottom: '33px' }}
                >
                    <SubNavigation.Item label="Dropdown" />
                    <SubNavigation.Item label="Drodown.Item" />
                </SubNavigation>

                <Card>
                    <Header size="large">Props</Header>

                    {this.state.subNavIndex === 1 ? (
                        <TableProps props={dropdownItemProps} />
                    ) : (
                        <TableProps props={dropdownProps} />
                    )}
                </Card>

                {examplesJSX}
            </Main>
        );
    }

    _onDropdownChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ dropdownValue: selectedOption });
    }

    _onSampleOnChange(test) {
        console.log('_onSampleOnChange');
        console.log('test', test);
    }

    _onSelectionChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionValue: selectedOption });
    }

    _onSelectionCustomOptionsChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionCustomOptionsValue: selectedOption });
    }

    _onSelectionMultipleChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionMultipleValue: selectedOption });
    }

    _onSelectionMultipleCreatableChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionMultipleCreatableValue: selectedOption });
    }

    _onSelectionMultipleDisableChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionMultipleDisableValue: selectedOption });
    }

    _onSubNavClick(index) {
        this.setState({ subNavIndex: index });
    }

}
