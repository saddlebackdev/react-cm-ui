import {
    Card,
    DropdownButton,
    Header,
    Image,
    TitleBar,
} from 'react-cm-ui';
import MediaQuery from 'react-responsive';
import React from 'react';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

const titleBarSample = `import React from 'react';
import { TitleBar } from 'react-cm-ui';

export default class TitleBarSample extends React.Component {

    render() {
        return (
            <TitleBar title="The Best Title Bar" />
        );
    }

}`;

const subTitleSample = `import React from 'react';
import { TitleBar } from 'react-cm-ui';

export default class SubTitleSample extends React.Component {

    render() {
        return (
            <TitleBar subTitle="The Best Title Bar" title="An Even Better Title" />
        );
    }

}`;

const childrenSample = `import React from 'react';
import { Dropdown, Image, TitleBar } from 'react-cm-ui';

export default class ChildrenSample extends React.Component {

    render() {
        return (
            <TitleBar subTitle="The Best Title Bar" title="An Even Better Title">
                <Dropdown
                    text={(
                        <div>
                            <Image avatar style={{ marginRight: '11px' }} />
                            <span style={{ color: '#1c2530', fontSize: '14px', fontWeight: '400' }}>Marty McFly</span>
                        </div>
                    )}
                >
                    <Dropdown.Item label="Item 1" />
                    <Dropdown.Item label="Item 2" />
                    <Dropdown.Item label="Item 3" />
                    <Dropdown.Item label="Item 4" />
                </Dropdown>
            </TitleBar>
        );
    }

}`;

export default class ViewsTitleBar extends React.Component {
    constructor() {
        super();

        this._onDropdownClick = this._onDropdownClick.bind(this);
    }

    _onDropdownClick(event) {
        this.dropdown._onDropdownClick(event);
    }

    render() {
        const props = [
            {
                name: 'children',
                type: 'node',
                default: '',
                description: 'A Title Bar\'s right side content.',
                allowedTypes: '',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Title Bar\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'subTitle',
                type: 'string',
                default: '',
                description: 'A sub title.',
                allowedTypes: '',
            }, {
                name: 'title',
                type: 'string',
                default: '',
                description: 'Shorthand for primary title.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <TitleBar title="Title Bar" />

                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Title Bar */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Title Bar
                        <Header.Subheader>
                            A title bar is a wrapper for the a page title. It is to be placed at the very top of each page according to the design.
                        </Header.Subheader>
                    </Header>

                    <MediaQuery maxWidth={767}>
                        {(matches) => (
                            <Card style={{ padding: matches ? '0 11px' : '0 22px' }}>
                                <TitleBar title="The Best Title Bar" />
                            </Card>
                        )}
                    </MediaQuery>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {titleBarSample}
                    </Highlighter>

                    {/* Sub Title */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Sub Title
                        <Header.Subheader>
                            Title Bar's can have a sub title.
                        </Header.Subheader>
                    </Header>

                    <MediaQuery maxWidth={767}>
                        {(matches) => (
                            <Card style={{ padding: matches ? '0 11px' : '0 22px' }}>
                                <TitleBar subTitle="The Best Title Bar" title="An Even Better Title" />
                            </Card>
                        )}
                    </MediaQuery>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {subTitleSample}
                    </Highlighter>

                    {/* Children */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Children
                        <Header.Subheader>
                            Title Bar's can return it's children on the right side of the bar.
                        </Header.Subheader>
                    </Header>

                    <MediaQuery maxWidth={767}>
                        {(matches) => (
                            <Card style={{ padding: matches ? '0 11px' : '0 22px' }}>
                                <TitleBar subTitle="The Best Title Bar" title="An Even Better Title">
                                    <DropdownButton
                                        color="transparent"
                                        iconSize={10}
                                        iconType="caret-down"
                                        label="Marty McFly"
                                    >
                                        <DropdownButton.Option label="Item 1" />
                                        <DropdownButton.Option label="Item 2" />
                                        <DropdownButton.Option label="Item 3" />
                                        <DropdownButton.Option label="Item 4" />
                                    </DropdownButton>
                                </TitleBar>
                            </Card>
                        )}
                    </MediaQuery>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {childrenSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}
