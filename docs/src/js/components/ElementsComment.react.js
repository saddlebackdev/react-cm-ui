'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Card, Comment, Header, Image, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const commentSample = `import React from 'react';
import { Comment } from 'react-cm-ui';

export default class CommentSample extends React.Component {
    render() {
        return (
            <Comment name="Joe Smith" time={1531648822}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Comment>
        );
    }
}`;

export default class ElmentsComment extends React.Component {
    render() {
        const props = [
            {
                name: 'avatarSrc',
                type: 'string',
                default: '',
                description: 'Show the user\'s avatar.',
                allowedTypes: ''
            }, {
                name: 'children',
                type: 'node',
                default: '',
                description: 'Primary content.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'detailsPosition',
                type: 'enum',
                default: '',
                description: 'Position the comment\'s details on either the left or right.',
                allowedTypes: 'left, right'
            }, {
                name: 'name *',
                type: 'string',
                default: '',
                description: 'A required field which displays the user\'s name.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the List\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'time *',
                type: 'number',
                default: '',
                description: 'A required field which displays the time the comment was posted in UTC.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Comment" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Comment */}
                <Header anchor="divider" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Comment
                    <Header.Subheader>
                        A user's comment.
                    </Header.Subheader>
                </Header>

                <Comment name="Joe Smith" time={1531648822}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
                </Comment>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {commentSample}
                </Highlighter>
            </Main>
        );
    }
}
