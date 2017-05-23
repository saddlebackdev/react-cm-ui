'use strict';

import React from 'react';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

// CM App UI Components
import Accordion from 'components/UI/Modules/Accordion.react';
import AccordionContent from 'components/UI/Modules/AccordionContent.react';
import AccordionItem from 'components/UI/Modules/AccordionItem.react';
import AccordionSummary from 'components/UI/Modules/AccordionSummary.react';
import Card from 'components/UI/Views/Card.react';
import Header from 'components/UI/Elements/Header.react';
import HeaderSubheader from 'components/UI/Elements/HeaderSubheader.react';
import TitleBar from 'components/UI/Views/TitleBar.react';

const accordionSample = `import React from 'react';

import Accordion from 'components/UI/Modules/Accordion.react';
import AccordionContent from 'components/UI/Modules/AccordionContent.react';
import AccordionItem from 'components/UI/Modules/AccordionItem.react';
import AccordionSummary from 'components/UI/Modules/AccordionSummary.react';

export default class AccordionSample extends React.Component {

    render() {
        return (
            <Accordion>
                <AccordionItem>
                    <AccordionSummary>
                        Option One
                    </AccordionSummary>

                    <AccordionContent>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem>
                    <AccordionSummary>
                        Option Two
                    </AccordionSummary>

                    <AccordionContent>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        );
    }

}`;

const basicSample = `import React from 'react';

import Accordion from 'components/UI/Modules/Accordion.react';
import AccordionItem from 'components/UI/Modules/AccordionItem.react';

export default class BasicSample extends React.Component {

    render() {
        return (
            <Accordion basic={true}>
                <AccordionItem title="Option One">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </AccordionItem>

                <AccordionItem title="Option Two">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </AccordionItem>
            </Accordion>
        );
    }

}`;

const inverseSample = `import React from 'react';

import Accordion from 'components/UI/Modules/Accordion.react';
import AccordionItem from 'components/UI/Modules/AccordionItem.react';

export default class InverseSample extends React.Component {

    render() {
        return (
            <Accordion basic={true} inverse={true}>
                <AccordionItem title="Option One">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </AccordionItem>

                <AccordionItem title="Option Two">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </AccordionItem>
            </Accordion>
        );
    }

}`;

const selectedSample = `import React from 'react';

import Accordion from 'components/UI/Modules/Accordion.react';
import AccordionItem from 'components/UI/Modules/AccordionItem.react';

export default class SelectedSample extends React.Component {

    render() {
        return (
            <Accordion basic={true} selected={1}>
                <AccordionItem title="Option One">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </AccordionItem>

                <AccordionItem title="Option Two">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                </AccordionItem>
            </Accordion>
        );
    }

}`;

export default class ModulesAccordion extends React.Component {

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
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'Format to appear on dark backgrounds.',
                allowedTypes: ''
            }, {
                name: 'selected',
                type: 'number',
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

        return (
            <Main page="headers">
                <TitleBar title="Accordion" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Accordion */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Accordion
                    <HeaderSubheader>
                        A baisc Accordion can be inverted to appear on darker backgrounds better.
                    </HeaderSubheader>
                </Header>

                <Accordion>
                    <AccordionItem>
                        <AccordionSummary>
                            Option One
                        </AccordionSummary>

                        <AccordionContent>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionSummary>
                            Option Two
                        </AccordionSummary>

                        <AccordionContent>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {accordionSample}
                </Highlighter>

                {/* Basic */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Basic
                    <HeaderSubheader>
                        A basic Accordion.
                    </HeaderSubheader>
                </Header>

                <Accordion basic={true}>
                    <AccordionItem title="Option One">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </AccordionItem>

                    <AccordionItem title="Option Two">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </AccordionItem>
                </Accordion>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {basicSample}
                </Highlighter>

                {/* Inverse */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Inverse
                    <HeaderSubheader>
                        A baisc Accordion can be inverted to appear on darker backgrounds better.
                    </HeaderSubheader>
                </Header>

                <Block inverse={true}>
                    <Accordion basic={true} inverse={true}>
                        <AccordionItem title="Option One">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </AccordionItem>

                        <AccordionItem title="Option Two">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                        </AccordionItem>
                    </Accordion>
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {inverseSample}
                </Highlighter>

                {/* Selected */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Selected
                    <HeaderSubheader>
                        A baisc Accordion can be inverted to appear on darker backgrounds better.
                    </HeaderSubheader>
                </Header>

                <Accordion basic={true} selected={1}>
                    <AccordionItem title="Option One">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </AccordionItem>

                    <AccordionItem title="Option Two">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </AccordionItem>
                </Accordion>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {selectedSample}
                </Highlighter>
            </Main>
        );
    }

}
