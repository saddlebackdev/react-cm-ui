
import {
    Accordion, Card, Header, TitleBar,
} from 'react-cm-ui';
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';
import Block from '../../global/block';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

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
                <Accordion basic>
                    <Accordion.Item title="Option One">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </Accordion.Item>

                    <Accordion.Item title="Option Two">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                    </Accordion.Item>
                </Accordion><br /><br />

                <Accordion basic>
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
            <Accordion basic exclusive={false} selected={[ 1, 2 ]}>
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

const subAccordionSample = `import React from 'react';

import { Accordion } from 'react-cm-ui';

export default class SubAccordionSample extends React.Component {

    render() {
        return (
            <div>
                <Accordion basic>
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

                    <Accordion.Item subAccordion>
                        <Accordion.Summary>
                            Option Three
                        </Accordion.Summary>

                        <Accordion.Content>
                            <Accordion basic>
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

const customSummaryExample = `import React from 'react';

import { Accordion } from 'react-cm-ui';

export default class CustomSummarySample extends React.Component {

    render() {
        return (
            <div>
                <Accordion basic>
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

                    <Accordion.Item summary={false}>
                        <div>Shown Item Number Three</div>
                    </Accordion.Item>

                    <Accordion.Item>
                        <Accordion.Summary>
                            Option Four
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

export default class CollectionsAccordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subNavIndex: 0,
            controlledExampleSelectedIndex: 0, // first item expanded by default
        };

        this._onClickAccordionItem = this._onClickAccordionItem.bind(this);
        this._onClickBasicAccordionItem = this._onClickBasicAccordionItem.bind(this);
    }

    _onClickAccordionItem(newSelectedIndex) {
        this.setState({ controlledExampleSelectedIndex: newSelectedIndex });
    }

    _onClickBasicAccordionItem(foo) {
        console.log(`${foo} item was clicked!`); // eslint-disable-line no-console
    }

    _onSubNavClick(index) {
        this.setState({ subNavIndex: index });
    }

    render() {
        const { controlledExampleSelectedIndex, subNavIndex } = this.state;

        const props = [
            {
                name: 'basic',
                type: 'bool',
                default: '',
                description: 'Simplify an Accordion to a basic pared down style.',
                allowedTypes: '',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'exclusive',
                type: 'bool',
                default: 'true',
                description: 'Only allow one Accordion Item to open at a time.',
                allowedTypes: '',
            }, {
                name: 'inverse',
                type: 'bool',
                default: '',
                description: 'Format to appear on dark backgrounds.',
                allowedTypes: '',
            }, {
                name: 'selected',
                type: 'array || number',
                default: '',
                description: 'Change the default selected Accordion Item.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Accordion\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        const itemProps = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Accordion\'s Item container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'subAccordion',
                type: 'bool',
                default: '',
                description: 'Required boolean for Accordion\'s nested inside of Accordion Item container.',
                allowedTypes: '',
            }, {
                name: 'summary',
                type: 'bool',
                default: 'true',
                description: 'Use custom content within an Accordion\'s Item.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="accordion">
                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={itemProps} />
                    </Card>

                    <div>
                        {/* Nested Accordions */}
                        <Header size="large" style={{ marginTop: '55px' }} sub>
                            Nested Accordions
                            <Header.Subheader>
                                A Accordion can be nested within an Accordion.
                            </Header.Subheader>
                        </Header>

                        <Accordion basic>
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

                            <Accordion.Item subAccordion>
                                <Accordion.Summary>
                                    Option Three
                                </Accordion.Summary>

                                <Accordion.Content>
                                    <Accordion basic>
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

                        {/* Summary */}
                        <Header size="large" style={{ marginTop: '55px' }} sub>
                            Summary
                            <Header.Subheader>
                                You can supply custom content within an Accordion's Item.
                            </Header.Subheader>
                        </Header>

                        <Accordion basic>
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

                            <Accordion.Item summary={false}>
                                <div>Shown Item Number Three</div>
                            </Accordion.Item>

                            <Accordion.Item>
                                <Accordion.Summary>
                                    Option Four
                                </Accordion.Summary>

                                <Accordion.Content>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>
                                </Accordion.Content>
                            </Accordion.Item>
                        </Accordion>

                        <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                            {customSummaryExample}
                        </Highlighter>
                    </div>
                </Main.Content>
            </Main>
        );
    }
}
