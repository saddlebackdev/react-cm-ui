import {
    Card,
    DropdownButton,
    Typography,
    TitleBar,
} from 'react-cm-ui';
import MediaQuery from 'react-responsive';
import React from 'react';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

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
                <Main.Content>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Title Bar */}
                    <Heading variant="h2">
                        Title Bar
                    </Heading>

                    <Typography variant="body1">
                        A title bar is a wrapper for the a page title. It is to be placed at the very top of each page according to the design.
                    </Typography>

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
                    <Heading variant="h2">
                        Sub Title
                    </Heading>

                    <Typography variant="body1">
                        Title Bar's can have a sub title.
                    </Typography>

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
                    <Heading variant="h2">
                        Children
                    </Heading>

                    <Typography variant="body1">
                        Title Bar's can return it's children on the right side of the bar.
                    </Typography>

                    <MediaQuery maxWidth={767}>
                        {(matches) => (
                            <Card style={{ padding: matches ? '0 11px' : '0 22px' }}>
                                <TitleBar subTitle="The Best Title Bar" title="An Even Better Title">
                                    <DropdownButton
                                        iconSize={10}
                                        iconType="caret-down"
                                        label="Marty McFly"
                                        transparent
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
