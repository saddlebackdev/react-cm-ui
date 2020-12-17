/* eslint-disable */

/**
 * NOTE: The props 'button' part of this component's documentation has been is deprecated as of Feb. 11, 2020.
 * Please use the DropdownButton component instead.
 * We are disabling Eslint for this file because of the above note and wanting to
 * deprecate it fully in hopes to rip out the select portion of it as well.
 */

import 'images/avatar1.jpg';
import 'images/avatar2.jpg';
import 'images/avatar3.jpg';
import 'images/avatar4.jpg';
import 'images/avatar5.jpg';

import { Card, Dropdown, Grid, Typography } from 'react-cm-ui';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import Block from '../../global/block';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const imageFilePath = '/images';
const getImageUrl = (imageFileName) => `${imageFilePath}/${imageFileName}`;

const dropdownSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class DropdownSample extends React.Component {

    render() {
        return (
            <Dropdown
                collapseMenuOnChange
                id="ui-dropdown--demo_dropdown1"
                placeholder="select"
            >
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
            <Dropdown button collapseMenuOnChange placeholder="Button Dropdown">
                <Dropdown.Item label="Option 1" />
                <Dropdown.Item label="Option 2" />
                <Dropdown.Item label="Option 3" />
                <Dropdown.Item label="Option 4" />
            </Dropdown>
        );
    }

}`;

const buttonControlledSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class ButtonControlledSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonDropdownValue: null
        };

        this._onButtonDropDownChange = this._onButtonDropDownChange.bind(this);
    }

    render() {
        return (
            <Dropdown
                button
                placeholder="Button Dropdown"
                onChange={this._onButtonDropDownChange}
                value={this.state.buttonDropdownValue}
            >
                <Dropdown.Item label="Option 1" />
                <Dropdown.Item label="Option 2" />
                <Dropdown.Item label="Option 3" />
                <Dropdown.Item label="Option 4" />
            </Dropdown>
        );
    }

    _onButtonDropDownChange(selectedOption) {
        this.setState({ buttonDropdownValue: selectedOption });
    }
}`;

const buttonMenuSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class ButtonMenuSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonMenuAction: null
        };

        this._onButtonDropDownMenuChange = this._onButtonDropDownMenuChange.bind(this);
    }

    render() {
        return (
            <div>
                {this.state.buttonMenuAction ? (
                    <p>You selected: <strong>{this.state.buttonMenuAction}</strong></p>
                ) : (
                    <p>Select something...</p>
                )}

                <Dropdown
                    button
                    collapseMenuOnChange
                    onChange={this._onButtonDropDownMenuChange}
                    placeholder="Button Dropdown Menu"
                >
                    <Dropdown.Item label="Action 1" />
                    <Dropdown.Item label="Action 2" />
                    <Dropdown.Item label="Action 3" />
                    <Dropdown.Item label="Action 4" />
                </Dropdown>
            </div>
        );
    }

    _onButtonDropDownMenuChange(selectedOption) {
        // TODO: Do whatever it is you want to do with the selected option
        this.setState({ buttonMenuAction: selectedOption.label }, () => {
            setTimeout(() => { this.setState({ buttonMenuAction: null }); }, 2000);
        });
    }
}`;

const buttonColorSample = `import React from 'react';
import { Dropdown } from 'react-cm-ui';

export default class ButtonColorSample extends React.Component {
    render() {
        return (
            <div>
                <Dropdown button buttonColor="alert" collapseMenuOnChange text="Alert">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="alternate" collapseMenuOnChange text="Alternate">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="disable" collapseMenuOnChange text="Disable">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="light" collapseMenuOnChange text="Light">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="outline" collapseMenuOnChange text="Outline">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="primary" collapseMenuOnChange text="Primary">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="secondary" collapseMenuOnChange text="Secondary">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="success" collapseMenuOnChange text="Success">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown button buttonColor="warning" collapseMenuOnChange text="Warning">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                </Dropdown>

                <Dropdown
                    button
                    buttonColor="transparent"
                    buttonCompact
                    collapseMenuOnChange
                    iconColor="static"
                    iconTitle={'Transparent icon button dropdown'}
                    iconType="ellipsis-h"
                    onChange={() => { }}
                    style={{ margin: 0 }}
                >
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
            <Dropdown button buttonCompact collapseMenuOnChange placeholder="Button Compact Dropdown">
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
                'avatar': '/images/avatar1.jpg',
                'id': 5,
                'label': 'Rafi Ghazarian',
                'value': 5
            }, {
                'avatar': '/images/avatar2.jpg',
                'id': 8,
                'label': 'Mike Jacobs',
                'value': 8
            }, {
                'avatar': '/images/avatar3.jpg',
                'id': 13,
                'label': 'Joseph Lee',
                'value': 13
            }, {
                'avatar': '/images/avatar4.jpg',
                'id': 21,
                'label': 'Cameron Brewer',
                'value': 21
            }, {
                'avatar': '/images/avatar5.jpg',
                'id': 34,
                'label': 'Geoffrey Roberts',
                'value': 34
            }
        ];

        return (
            <div>
                <Dropdown button disable placeholder="Disabled Button Dropdown">
                    <Dropdown.Item label="Option 1" />
                    <Dropdown.Item label="Option 2" />
                    <Dropdown.Item label="Option 3" />
                    <Dropdown.Item label="Option 4" />
                </Dropdown><br /><br />

                <Dropdown
                    disable
                    onChange={this._onSelectionCustomOptionsChange.bind(this)}
                    selectionOptionComponent={SelectionCustomComponent}
                    options={selectionCustomOptions}
                    placeholder="Select a user"
                    selection
                    value={this.state.selectionCustomOptionsValue}
                /><br /><br />

                <Dropdown
                    disable
                    onChange={this._onSelectionMultipleDisableChange.bind(this)}
                    options={selectionMultipleOptions}
                    placeholder="Select some tags"
                    selection
                    selectionMultiple
                    selectionCreatable
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
                    button
                    buttonCompact
                    collapseMenuOnChange
                    iconInverse
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
                    options={selectionCustomOptions}
                    placeholder="Select a user"
                    selectionOptionComponent={SelectionCustomComponent}
                    selection
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
                selection
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

const selectionMatchPropSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class SelectionMatchPropSample extends React.Component {

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
                selection
                selectionMatchProp="label"
                value={this.state.selectionValue}
            />
        );
    }

    _onSelectionChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done');

        this.setState({ selectionValue: selectedOption });
    }}

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
                selection
                selectionMultiple
                selectionCreatable
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
                selection
                selectionMobile
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
                selection
                selectionMultiple
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
                'avatar': '/images/avatar1.jpg',
                'id': 5,
                'label': 'Rafi Ghazarian',
                'value': 5
            }, {
                'avatar': '/images/avatar2.jpg',
                'id': 8,
                'label': 'Mike Jacobs',
                'value': 8
            }, {
                'avatar': '/images/avatar3.jpg',
                'id': 13,
                'label': 'Joseph Lee',
                'value': 13
            }, {
                'avatar': '/images/avatar4.jpg',
                'id': 21,
                'label': 'Cameron Brewer',
                'value': 21
            }, {
                'avatar': '/images/avatar5.jpg',
                'id': 34,
                'label': 'Geoffrey Roberts',
                'value': 34
            }
        ];

        return (
            <Dropdown
                onChange={this._onSelectionCustomOptionsChange.bind(this)}
                selectionOptionComponent={SelectionCustomComponent}
                options={selectionCustomOptions}
                placeholder="Select a user"
                selection
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
                'avatar': '/images/avatar1.jpg',
                'id': 5,
                'label': 'Rafi Ghazarian',
                'value': 5
            }, {
                'avatar': '/images/avatar2.jpg',
                'id': 8,
                'label': 'Mike Jacobs',
                'value': 8
            }, {
                'avatar': '/images/avatar3.jpg',
                'id': 13,
                'label': 'Joseph Lee',
                'value': 13
            }, {
                'avatar': '/images/avatar4.jpg',
                'id': 21,
                'label': 'Cameron Brewer',
                'value': 21
            }, {
                'avatar': '/images/avatar5.jpg',
                'id': 34,
                'label': 'Geoffrey Roberts',
                'value': 34
            }
        ];

        return (
            <Dropdown
                onChange={this._onSelectionCustomOptionsChange.bind(this)}
                options={selectionCustomOptions}
                placeholder="Select a user"
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
            <Dropdown button placeholder="Button Dropdown" theme="dark">
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
            <Dropdown button placeholder="Button Dropdown">
                <Dropdown.Item iconType="block" label="Option 1" />
                <Dropdown.Item iconColor="highlight" iconType="heart" label="Option 2" />
                <Dropdown.Item iconType="circle" label="Option 3" />
                <Dropdown.Item iconColor="alert" iconType="reassign" label="Option 4" />
            </Dropdown>
        );
    }

}`;

const itemDisabledSample = `import React from 'react';

import { Dropdown } from 'react-cm-ui';

export default class ItemIconSample extends React.Component {
    constructor(props) {
        super(props);
        this._onButtonDropDownMenuChange = this._onButtonDropDownMenuChange.bind(this);
    }

    render() {
        return (
            <Dropdown
                button
                collapseMenuOnChange
                onChange={this._onButtonDropDownMenuChange}
                placeholder="Button Dropdown"
            >
                <Dropdown.Item iconType="block" label="Option 1" />
                <Dropdown.Item iconColor="highlight" iconType="heart" label="Option 2" />
                <Dropdown.Item disable iconType="circle" label="Option 3" />
                <Dropdown.Item iconColor="alert" iconType="reassign" label="Option 4" />
            </Dropdown>
        );
    }

    _onButtonDropDownMenuChange(selectedOption) {
        // TODO: Do whatever it is you want to do with the selected option
        console.log('This got selected:', selectedOption);
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
                        width: '100%',
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
                                minWidth: '33px',
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
}

SelectionCustomComponent.propTypes = {
    isFocused: PropTypes.bool,
    onFocus: PropTypes.func,
    onSelect: PropTypes.func,
    option: PropTypes.shape({}).isRequired,
};

class ModulesDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownValue: null,
            selectionValue: null,
            selectionCustomOptionsValue: null,
            selectionMultipleDisableValue: [ 0, 1, 2 ],
            selectionMultipleValue: null,
            selectionMultipleCreatableValue: null,
            subNavIndex: 0,
        };

        this._onSampleOnChange = this._onSampleOnChange.bind(this);
        this._onButtonDropDownChange = this._onButtonDropDownChange.bind(this);
        this._onButtonDropDownMenuChange = this._onButtonDropDownMenuChange.bind(this);
    }

    _onButtonDropDownChange(selectedOption) {
        this.setState({ buttonDropdownValue: selectedOption });
    }

    _onButtonDropDownMenuChange(selectedOption) {
        // TODO: Do whatever it is you want to do with the selected option
        this.setState({ buttonMenuAction: selectedOption.label }, () => {
            setTimeout(() => {
                this.setState({ buttonMenuAction: null});
            }, 2000);
        });
    }

    _onDropdownChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done'); // eslint-disable-line no-console

        this.setState({ dropdownValue: selectedOption });
    }

    _onDropDownWithDisabledOptionChange(selectedOption) {
        console.log('This got selected:', selectedOption); // eslint-disable-line no-console
    }

    _onSampleOnChange(selectedOption) {
        console.log('_onSampleOnChange'); // eslint-disable-line no-console
        console.log('Clicked item value', selectedOption); // eslint-disable-line no-console
    }

    _onSelectionChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done'); // eslint-disable-line no-console

        this.setState({ selectionValue: selectedOption });
    }

    _onSelectionCustomOptionsChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done'); // eslint-disable-line no-console

        this.setState({ selectionCustomOptionsValue: selectedOption });
    }

    _onSelectionMultipleChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done'); // eslint-disable-line no-console

        this.setState({ selectionMultipleValue: selectedOption });
    }

    _onSelectionMultipleCreatableChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done'); // eslint-disable-line no-console

        this.setState({ selectionMultipleCreatableValue: selectedOption });
    }

    _onSelectionMultipleDisableChange(selectedOption) {
        console.log('Parent component has the object now and can do what needs to be done'); // eslint-disable-line no-console

        this.setState({ selectionMultipleDisableValue: selectedOption });
    }

    _onSubNavClick(index) {
        this.setState({ subNavIndex: index });
    }

    render() {
        const dropdownProps = [
            {
                name: 'autoScrollSelection',
                type: 'bool',
                default: 'true',
                description: 'A Dropdown Selection can auto scroll to the selected item.',
                allowedTypes: '',
            }, {
                name: 'button',
                type: 'bool',
                default: '',
                description: 'A Dropdown can take on the look of a Button.',
                allowedTypes: '',
            }, {
                name: 'buttonColor',
                type: 'enum',
                default: '',
                description: 'Color of the button Dropdown.',
                allowedTypes: 'alert, alternate, disable, light, outline, primary, success, transparent, warning',
            }, {
                name: 'buttonCompact',
                type: 'bool',
                default: '',
                description: 'A button can reduce its padding.',
                allowedTypes: '',
            }, {
                name: 'collapseMenuOnChange',
                type: 'bool',
                default: '',
                description: 'Whether or not to automatically collapse the menu when an option is selected (regardless of whether or not the value changes).  it is a good idea to set this prop to true if you\'re handing onChange but not updating the value (e.g. if you\'re using a button dropdown as an action menu).',
                allowedTypes: '',
            },{
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'disable',
                type: 'bool',
                default: '',
                description: 'A Dropdown can be disabled',
                allowedTypes: '',
            }, {
                name: 'iconColor',
                type: 'enum',
                default: '',
                description: 'Change the color of the icon inside of the Dropdown.',
                allowedTypes: '',
            }, {
                name: 'iconInverse',
                type: 'bool',
                default: '',
                description: 'Change the icon inside of the Dropdown to inverse.',
                allowedTypes: '',
            }, {
                name: 'iconPosition',
                type: 'enum',
                default: '',
                description: 'Change the position of the icon.',
                allowedTypes: 'left, right',
            }, {
                name: 'iconSize',
                type: 'enum',
                default: '',
                description: 'Change the size of the icon inside of the Dropdown.',
                allowedTypes: '',
            }, {
                name: 'iconTitle',
                type: 'string',
                default: '',
                description: 'Set the title (tooltip) of the icon inside of the Dropdown menu.  If not specified, placeholder or text value is used instead.',
                allowedTypes: '',
            }, {
                name: 'iconType',
                type: 'string',
                default: '',
                description: 'Change the icon inside of the Dropdown.',
                allowedTypes: '',
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Assign the Dropdown an id attribute value.',
                allowedTypes: '',
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'A Dropdown can be formatted to appear on dark backgrounds better.',
                allowedTypes: '',
            }, {
                name: 'menuMaxHeight',
                type: 'number',
                default: '',
                description: 'Supply a maximum height for a Dropdown Selection\'s menu.',
                allowedTypes: '',
            }, {
                name: 'menuMinHeight',
                type: 'number',
                default: '',
                description: 'Supply a minimum height for a Dropdown Selection\'s menu.',
                allowedTypes: '',
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'The onChange event handler.',
                allowedTypes: '',
            }, {
                name: 'onClose',
                type: 'func',
                default: '',
                description: 'The onClose event handler function.  This event is called when dropdown menu is closed.',
                allowedTypes: '',
            }, {
                name: 'onOpen',
                type: 'func',
                default: '',
                description: 'The onOpen event handler function.  This event is called when dropdown menu is opened.',
                allowedTypes: '',
            }, {
                name: 'options',
                type: 'array',
                default: '',
                description: 'Supply a list of options that the user can select from.',
                allowedTypes: '',
            }, {
                name: 'placeholder',
                type: 'string',
                default: '',
                description: 'Supply a placeholder text for the best UX.',
                allowedTypes: '',
            }, {
                name: 'selectionCreatable',
                type: 'bool',
                default: '',
                description: 'A Dropdown Multiple Selection can be have creatable values.',
                allowedTypes: '',
            }, {
                name: 'selectionMenuContainerStyle',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Dropdown Selection\'s outer menu.',
                allowedTypes: '',
            }, {
                name: 'selectionMatchProp',
                type: 'enum',
                default: 'any',
                description: 'Whether to match the value, label or both values of each selection option when filtering.',
                allowedTypes: 'any, label, value',
            }, {
                name: 'selectionMenuStyle',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Dropdown Selection\'s inner menu.',
                allowedTypes: '',
            }, {
                name: 'selectionMobile',
                type: 'bool',
                default: '',
                description: 'A Dropdown Selection can be user friendly on mobile devices.',
                allowedTypes: '',
            }, {
                name: 'selectionMultiple',
                type: 'bool',
                default: '',
                description: 'A Dropdown Selection can show options as tags.',
                allowedTypes: '',
            }, {
                name: 'selectionOptionComponent',
                type: 'func',
                default: '',
                description: 'Give a Dropdown Selection custom options.',
                allowedTypes: '',
            }, {
                name: 'selectionUnderline',
                type: 'bool',
                default: '',
                description: 'Underlined Dropdown selection.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Dropdown\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'text',
                type: 'string, object',
                default: '',
                description: 'Set text of Dropdown; an alternative to placeholder.',
                allowedTypes: '',
            }, {
                name: 'theme',
                type: 'enum',
                default: '',
                description: 'Changes the menu\'s color.',
                allowedTypes: 'dark, light',
            }, {
                name: 'value',
                type: 'array, object',
                default: '',
                description: 'Changes the value of the Dropdown.',
                allowedTypes: '',
            },
        ];

        const dropdownItemProps = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'disable',
                type: 'bool',
                default: '',
                description: 'Whether or not this dropdown item (option) is disabled.',
                allowedTypes: '',
            }, {
                name: 'iconColor',
                type: 'string',
                default: '',
                description: 'Color of the icon.',
                allowedTypes: 'alert, light, outline, primary, static, success',
            }, {
                name: 'iconInverse',
                type: 'bool',
                default: '',
                description: 'A icon can be formatted to appear on dark backgrounds better.',
                allowedTypes: '',
            }, {
                name: 'iconType',
                type: 'string',
                default: '',
                description: 'Type of icon.',
                allowedTypes: '',
            }, {
                name: 'id',
                type: 'number || string',
                default: '',
                description: 'ID for the item.',
                allowedTypes: '',
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Label for the item.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the dropdown item.',
                allowedTypes: '',
            },
        ];

        const selectionOptions = [
            {
                'id': -1,
                'label': 'All Users',
                'value': 'all users',
            }, {
                'id': 5,
                'label': 'Rafi Ghazarian',
                'value':'rafi ghazarian',
            }, {
                'id': 8,
                'label': 'Mike Jacobs',
                'value':'mike jacobs',
            }, {
                'id': 13,
                'label': 'Joseph Lee',
                'value': 'joseph lee',
            }, {
                'id': 21,
                'label': 'Geoffrey Roberts',
                'value': 'geoffrey roberts',
            }, {
                'id': 34,
                'label': 'Cameron Brewer',
                'value': 'cameron brewer',
            }, {
                'id': 55,
                'label': 'Joe Smoe',
                'value': 'cameron joe smoe',
            },
        ];

        const selectionCustomOptions = [
            {
                'avatar': '',
                'id': -1,
                'label': 'All Users',
                'value': -1,
            }, {
                'avatar': getImageUrl('avatar1.jpg'),
                'id': 5,
                'label': 'Rafi Ghazarian',
                'value': 5,
            }, {
                'avatar': getImageUrl('avatar2.jpg'),
                'id': 8,
                'label': 'Mike Jacobs',
                'value': 8,
            }, {
                'avatar': getImageUrl('avatar3.jpg'),
                'id': 13,
                'label': 'Joseph Lee',
                'value': 13,
            }, {
                'avatar': getImageUrl('avatar4.jpg'),
                'id': 21,
                'label': 'Cameron Brewer',
                'value': 21,
            }, {
                'avatar': getImageUrl('avatar5.jpg'),
                'id': 34,
                'label': 'Geoffrey Roberts',
                'value': 34,
            },
        ];

        const selectionMultipleOptions = [
            {
                'id': 1,
                'label': 'Red',
                'value': 1,
            }, {
                'id': 2,
                'label': 'Green',
                'value': 2,
            }, {
                'id': 3,
                'label': 'Blue',
                'value': 3,
            },
        ];

        return (
            <Main page="headers">
                <Main.Content>
                    <Typography size="large" style={{ marginTop: '55px' }}>
                        The prop 'button' has been deprecated.
                        <br />
                        Please use <Link to={{ pathname: '/molecules/dropdown-button' }}>Dropdown Button</Link> component instead.
                    </Typography>

                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={dropdownItemProps} />
                    </Card>

                    <div>
                        {/* Icon */}
                        <Heading variant="h2">
                            Icon
                        </Heading>

                        <Typography variant="body1">
                            An Item can have an icon.
                        </Typography>

                        <Dropdown button placeholder="Button Dropdown">
                            <Dropdown.Item iconType="block" label="Option 1" />
                            <Dropdown.Item iconColor="highlight" iconType="heart" label="Option 2" />
                            <Dropdown.Item iconType="circle" label="Option 3" />
                            <Dropdown.Item iconColor="alert" iconType="reassign" label="Option 4" />
                        </Dropdown>

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {itemIconSample}
                        </Highlighter>

                        {/* Disable */}
                        <Heading variant="h2">
                            Disable
                        </Heading>

                        <Typography variant="body1">
                            An Item can be be <em>disabled</em>, preventing its selection.
                        </Typography>

                        <Dropdown
                            button
                            collapseMenuOnChange
                            onChange={this._onDropDownWithDisabledOptionChange.bind(this)}
                            placeholder="Button Dropdown"
                        >
                            <Dropdown.Item iconType="block" label="Option 1" />
                            <Dropdown.Item iconColor="highlight" iconType="heart" label="Option 2" />
                            <Dropdown.Item disable iconType="circle" label="Option 3" />
                            <Dropdown.Item iconColor="alert" iconType="reassign" label="Option 4" />
                        </Dropdown>

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {itemDisabledSample}
                        </Highlighter>
                    </div>
                </Main.Content>
            </Main>
        );
    }
}

export default ModulesDropdown;
