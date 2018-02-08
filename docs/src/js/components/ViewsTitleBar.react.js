'use strict';

import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Header, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const titleBarSample = `import React from 'react';

import TitleBar from 'components/UI/Views/TitleBar.react';

export default class TitleBarSample extends React.Component {

    render() {
        return (
            <TitleBar title="The Best Title Bar" />
        );
    }

}`;

export default class ViewsTitleBar extends React.Component {

    render() {
        const props = [
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
                description: 'Supply any inline styles to the Title Bar\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'title',
                type: 'string',
                default: '',
                description: 'Shorthand for primary title.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Title Bar" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Title Bar */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Title Bar
                    <Header.Subheader>
                        A title bar is a wrapper for the a page title. It is to be placed at the very top of each page according to the design.
                    </Header.Subheader>
                </Header>

                <MediaQuery maxWidth={767}>
                    {matches => {
                        return (
                            <Card style={{ padding: matches ? '0 11px' : '0 22px' }}>
                                <TitleBar title="The Best Title Bar" />
                            </Card>
                        );
                    }}
                </MediaQuery>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {titleBarSample}
                </Highlighter>
            </Main>
        );
    }

}
