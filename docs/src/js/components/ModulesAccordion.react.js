
'use strict';

import React from 'react';
import { Accordion, Card, Header, SubNavigation, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const accordionSample = `import React from 'react';

import { Accordion } from 'react-cm-ui';

export default class AccordionSample extends React.Component {

    render() {
        return (
            <Accordion>
                <Accordion.Item>
                    <Accordion.Summary>
                        Option One
                    </Accordion.Summary>

                    <Accordion.Content>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item>
                    <Accordion.Summary>
                        Option Two
                    </Accordion.Summary>

                    <Accordion.Content>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
        );
    }

}`;

const basicSample = `import React from 'react';

import { Accordion } from 'react-cm-ui';

export default class BasicSample extends React.Component {

    render() {
        return (
            <div>
                <Accordion basic={true}>
                    <Accordion.Item title="Option One">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </Accordion.Item>

                    <Accordion.Item title="Option Two">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </Accordion.Item>
                </Accordion><br /><br />

                <Accordion basic={true}>
                    <Accordion.Item>
                        <Accordion.Summary>
                            Option One
                        </Accordion.Summary>

                        <Accordion.Content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item>
                        <Accordion.Summary>
                            Option Two
                        </Accordion.Summary>

                        <Accordion.Content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item>
                        <Accordion.Summary>
                            Option Three
                        </Accordion.Summary>

                        <Accordion.Content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }

}`;

const exclusiveSample = `import React from 'react';

import { Accordion } from 'react-cm-ui';

export default class ExclusiveSample extends React.Component {

    render() {
        return (
            <Accordion basic={true} exclusive={false} selected={[ 1, 2 ]}>
                <Accordion.Item title="Option One">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </Accordion.Item>

                <Accordion.Item title="Option Two">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </Accordion.Item>

                <Accordion.Item title="Option Three">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </Accordion.Item>
            </Accordion>
        );
    }

}`;

const inverseSample = `import React from 'react';

import { Accordion } from 'react-cm-ui';

export default class InverseSample extends React.Component {

    render() {
        return (
            <Accordion basic={true} inverse={true}>
                <Accordion.Item title="Option One">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </Accordion.Item>

                <Accordion.Item title="Option Two">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </Accordion.Item>
            </Accordion>
        );
    }

}`;

const selectedSample = `import React from 'react';

import { Accordion } from 'react-cm-ui';

export default class SelectedSample extends React.Component {

    render() {
        return (
            <Accordion basic={true} selected={1}>
                <Accordion.Item title="Option One">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </Accordion.Item>

                <Accordion.Item title="Option Two">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </Accordion.Item>
            </Accordion>
        );
    }

}`;

const subAccordionSample = `import React from 'react';

import { Accordion } from 'react-cm-ui';

export default class SubAccordionSample extends React.Component {

    render() {
        return (
            <div>
                <Accordion basic={true}>
                    <Accordion.Item>
                        <Accordion.Summary>
                            Option One
                        </Accordion.Summary>

                        <Accordion.Content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item>
                        <Accordion.Summary>
                            Option Two
                        </Accordion.Summary>

                        <Accordion.Content>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item subAccordion={true}>
                        <Accordion.Summary>
                            Option Three
                        </Accordion.Summary>

                        <Accordion.Content>
                            <Accordion basic={true}>
                                <Accordion.Item>
                                    <Accordion.Summary>
                                        Inner Option One
                                    </Accordion.Summary>

                                    <Accordion.Content>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                                    </Accordion.Content>
                                </Accordion.Item>

                                <Accordion.Item>
                                    <Accordion.Summary>
                                        Inner Option Two
                                    </Accordion.Summary>

                                    <Accordion.Content>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                                    </Accordion.Content>
                                </Accordion.Item>
                            </Accordion>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </div>
        );
    }

}`;


export default class CollectionsAccordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = { subNavIndex: 0 };
    }

    render() {
        const props = [
            {
                name: 'basic',
                type: 'bool',
                default: '',
                description: 'Simplify an Accordion to a basic pared down style.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'exclusive',
                type: 'bool',
                default: 'true',
                description: 'Only allow one Accordion Item to open at a time.',
                allowedTypes: ''
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'Format to appear on dark backgrounds.',
                allowedTypes: ''
            }, {
                name: 'selected',
                type: 'array || number',
                default: '',
                description: 'Change the default selected Accordion Item.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Accordion\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }
        ];

        const itemProps = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Accordion\'s Item container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'subAccordion',
                type: 'bool',
                default: '',
                description: 'Required boolean for Accordion\'s nested inside of Accordion Item container.',
                allowedTypes: ''
            }
        ];

        let examplesJSX;

        if (this.state.subNavIndex === 1) {
            examplesJSX = (
                <div>
                    {/* Nested Accordions */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Nested Accordions
                        <Header.Subheader>
                            A Accordion can be nested within an Accordion.
                        </Header.Subheader>
                    </Header>

                    <Accordion basic={true}>
                        <Accordion.Item>
                            <Accordion.Summary>
                                Option One
                            </Accordion.Summary>

                            <Accordion.Content>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Summary>
                                Option Two
                            </Accordion.Summary>

                            <Accordion.Content>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item subAccordion={true}>
                            <Accordion.Summary>
                                Option Three
                            </Accordion.Summary>

                            <Accordion.Content>
                                <Accordion basic={true}>
                                    <Accordion.Item>
                                        <Accordion.Summary>
                                            Inner Option One
                                        </Accordion.Summary>

                                        <Accordion.Content>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                                        </Accordion.Content>
                                    </Accordion.Item>

                                    <Accordion.Item>
                                        <Accordion.Summary>
                                            Inner Option Two
                                        </Accordion.Summary>

                                        <Accordion.Content>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                                        </Accordion.Content>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {subAccordionSample}
                    </Highlighter>
                </div>
            );
        } else {
            examplesJSX = (
                <div>
                    {/* Accordion */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Accordion
                        <Header.Subheader>
                            A baisc Accordion can be inverted to appear on darker backgrounds better.
                        </Header.Subheader>
                    </Header>

                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Summary>
                                Option One
                            </Accordion.Summary>

                            <Accordion.Content>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Summary>
                                Option Two
                            </Accordion.Summary>

                            <Accordion.Content>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {accordionSample}
                    </Highlighter>

                    {/* Basic */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Basic
                        <Header.Subheader>
                            A basic Accordion.
                        </Header.Subheader>
                    </Header>

                    <Accordion basic={true}>
                        <Accordion.Item title="Option One">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Item>

                        <Accordion.Item title="Option Two">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Item>
                    </Accordion><br /><br />

                    <Accordion basic={true}>
                        <Accordion.Item>
                            <Accordion.Summary>
                                Option One
                            </Accordion.Summary>

                            <Accordion.Content>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Summary>
                                Option Two
                            </Accordion.Summary>

                            <Accordion.Content>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Summary>
                                Option Three
                            </Accordion.Summary>

                            <Accordion.Content>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {basicSample}
                    </Highlighter>

                    {/* Exclusive */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Exclusive
                        <Header.Subheader>
                            An Accordion can have multiple items at the same time.
                        </Header.Subheader>
                    </Header>

                    <Accordion basic={true} exclusive={false} selected={[ 1, 2 ]}>
                        <Accordion.Item title="Option One">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Item>

                        <Accordion.Item title="Option Two">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Item>

                        <Accordion.Item title="Option Three">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Item>
                    </Accordion>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {exclusiveSample}
                    </Highlighter>

                    {/* Inverse */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Inverse
                        <Header.Subheader>
                            A baisc Accordion can be inverted to appear on darker backgrounds better.
                        </Header.Subheader>
                    </Header>

                    <Block inverse={true}>
                        <Accordion basic={true} inverse={true}>
                            <Accordion.Item title="Option One">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                            </Accordion.Item>

                            <Accordion.Item title="Option Two">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                            </Accordion.Item>
                        </Accordion>
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {inverseSample}
                    </Highlighter>

                    {/* Selected */}
                    <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                        Selected
                        <Header.Subheader>
                            A baisc Accordion can be inverted to appear on darker backgrounds better.
                        </Header.Subheader>
                    </Header>

                    <Accordion basic={true} selected={1}>
                        <Accordion.Item title="Option One">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Item>

                        <Accordion.Item title="Option Two">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </Accordion.Item>
                    </Accordion>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {selectedSample}
                    </Highlighter>
                </div>
            );
        }

        return (
            <Main page="accordion">
                <TitleBar title="Accordion" />

                <SubNavigation
                    onClick={this._onSubNavClick.bind(this)}
                    selected={this.state.subNavIndex}
                    style={{ marginBottom: '33px' }}
                >
                    <SubNavigation.Item label="Accordion" />
                    <SubNavigation.Item label="Accordion.Item" />
                </SubNavigation>

                <Card>
                    <Header size="large">Props</Header>

                    {this.state.subNavIndex === 1 ? (
                        <TableProps props={itemProps} />
                    ) : (
                        <TableProps props={props} />
                    )}
                </Card>

                {examplesJSX}
            </Main>
        );
    }

    _onSubNavClick(index) {
        this.setState({ subNavIndex: index });
    }
}
