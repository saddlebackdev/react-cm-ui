'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Card, Header, SubNavigation, TitleBar, TreeMenu } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const treeMenuSample = `import React from 'react';
import { TreeMenu } from 'react-cm-ui';

export default class TreeMenuSample extends React.Component {

    render() {
        return (
            <TreeMenu>
                <TreeMenu.Item label="Option 1" checkbox={true} />
                <TreeMenu.Item label="Option 2" checkbox={true}>
                    <TreeMenu.Item label="Option A" checkbox={true} />
                    <TreeMenu.Item label="Option B" checkbox={true}>
                        <TreeMenu.Item label="Option B.x" checkbox={true} />
                        <TreeMenu.Item label="Option B.y" checkbox={true} />
                    </TreeMenu.Item>
                </TreeMenu.Item>
            </TreeMenu>
        );
    }

}`;

export default class ModulesTreeMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = { subNavIndex: 0 };
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
                name: 'disabled',
                type: 'bool',
                default: '',
                description: 'Indicates that the Time Picker is not available for interaction.',
                allowedTypes: ''
            }, {
                name: 'error',
                type: 'bool || string',
                default: '',
                description: 'Indicates that the Time Picker has an error.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give the Time Picker input an id.',
                allowedTypes: ''
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional Label to display on top of the Time Picker.',
                allowedTypes: ''
            }, {
                name: 'nest',
                type: 'bool',
                default: '',
                description: 'Time Picker may be placed in a nested background color.',
                allowedTypes: ''
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent.',
                allowedTypes: ''
            }, {
                name: 'value',
                type: 'object',
                default: '',
                description: 'The initial value of the control.',
                allowedTypes: ''
            }, {
                name: 'required',
                type: 'bool',
                default: '',
                description: 'Specifies that the user must fill in a value before submitting a form.',
                allowedTypes: ''
            }, {
                name: 'zoneOptions',
                type: 'array',
                default: '',
                description: 'Prodive a custom list of timezones to the Time Picker.',
                allowedTypes: ''
            }
        ];

        const treeMenuProps = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'collapsible',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'checkboxFactory',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'collapseIcon',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'data',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'expandIcon',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'id',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'labelFactory',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'labelFilter',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'onTreeMenuAction',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'sort',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'stateful',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'style',
                type: '',
                default: '',
                description: 'Supply any inline styles to the Dropdown\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        const treeMenuItemProps = [
            {
                name: 'checkboxFactory',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'checkbox',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'checked',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'className',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'classNamePrefix',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'collapsed',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'collapsible',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'collapseIconClass',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'expandIconClass',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'id',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'label',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'labelFactory',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'labelFilter',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'onClick',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'onCheckChange',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'onCollapseChange',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'onSelectChange',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }, {
                name: 'stateful',
                type: '',
                default: '',
                description: '',
                allowedTypes: ''
            }
        ];

        const treeMenuData = [
            {
                label : "Option 1"
            }, {
                label : "Option 2",
                children : [
                    {
                        checkbox: true,
                        label: "Sub Option A",
                        children: [
                            {
                                label: "Third Level Option 1",
                                checkbox : true
                            }, {
                                label: "Third Level Option 2",
                                checkbox : true
                            }
                        ]
                    }, {
                        checkbox: true,
                        label: "Sub Option B"
                    }
                ]
            }
        ];

        let examplesJSX;

        if (this.state.subNavIndex === 0) {
            examplesJSX = (
                <div>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={treeMenuProps} />
                    </Card>

                    {/* Tree Menu */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Tree Menu
                        <Header.Subheader>
                            A basic tree.
                        </Header.Subheader>
                    </Header>

                    <TreeMenu>
                        <TreeMenu.Item label="Option 1" checkbox={true} />
                        <TreeMenu.Item label="Option 2" checkbox={true}>
                            <TreeMenu.Item label="Option A" checkbox={true} />
                            <TreeMenu.Item label="Option B" checkbox={true}>
                                <TreeMenu.Item label="Option B.x" checkbox={true} />
                                <TreeMenu.Item label="Option B.y" checkbox={true} />
                            </TreeMenu.Item>
                        </TreeMenu.Item>
                    </TreeMenu>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {treeMenuSample}
                    </Highlighter>
                </div>
            );
        } else {
            examplesJSX = (
                <div>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={treeMenuItemProps} />
                    </Card>

                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        This section is still being thought out and developed.
                    </Header>
                </div>
            );
        }

        return (
            <Main page="headers">
                <TitleBar title="Tree Menu" />

                <SubNavigation
                    onClick={this._onSubNavClick.bind(this)}
                    selected={this.state.subNavIndex}
                    style={{ marginBottom: '33px' }}
                >
                    <SubNavigation.Item label="TreeMenu" />
                    <SubNavigation.Item label="TreeMenu.Item" />
                </SubNavigation>

                {examplesJSX}
            </Main>
        );
    }

    _onSubNavClick(index) {
        this.setState({ subNavIndex: index });
    }

}
