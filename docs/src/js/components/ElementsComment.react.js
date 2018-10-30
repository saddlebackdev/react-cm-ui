'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Banner, Card, Comment, Header, Image, TitleBar } from 'react-cm-ui';

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

const editableCommentSample = `import React from 'react';
import { Banner, Comment } from 'react-cm-ui';

export default class CommentSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editableCommentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.',
            editableComment2Text: 'Pellentesque sagittis quam enim, a euismod nisl tristique ac. Duis rutrum accumsan nisl sit amet congue. Vivamus ut convallis velit, nec adipiscing mi. Sed semper dui ut velit eleifend tincidunt.',
            isRemoveBannerOpen: false,
            isSaveBannerOpen: false
        };
    }

    render() {
        const { editableCommentText, editableComment2Text, isRemoveBannerOpen, isSaveBannerOpen } = this.state;

        return (
            <div>
                <Comment
                    canDelete
                    canEdit
                    isEditable
                    name="Joe Smith"
                    onDelete={this._onRemoveComment}
                    onSaveEdit={this._onSaveComment}
                    text={editableCommentText}
                    time={1531648822}
                >
                    {editableCommentText}
                </Comment>

                <Comment
                    canDelete
                    canEdit
                    detailsPosition="right"
                    isEditable
                    name="Jessica Jones"
                    onDelete={this._onRemoveComment}
                    onSaveEdit={this._onSaveComment2}
                    text={editableComment2Text}
                    time={1536941520}
                >
                    {editableComment2Text}
                </Comment>
            </div>
        );
    }

    _onCloseRemoveBanner() {
        this.setState({ isRemoveBannerOpen: false });
    }

    _onCloseSaveBanner() {
        this.setState({ isSaveBannerOpen: false });
    }

    _onRemoveComment() {
        // TODO - Issue API call or whatever to delete the persisted comment data

        this.setState({ isRemoveBannerOpen: true }, () => {
            setTimeout(() => this.setState({ isRemoveBannerOpen: false}), 2000);
        });
    }

    _onSaveComment(updatedComment) {
        // TODO - Issue API call or whatever to update the persisted comment data

        this.setState({ editableCommentText: updatedComment, isSaveBannerOpen: true }, () => {
            setTimeout(() => this.setState({ isSaveBannerOpen: false}), 2000);
        });
    }

    _onSaveComment2(updatedComment) {
        // TODO - Issue API call or whatever to update the persisted comment data

        this.setState({ editableComment2Text: updatedComment, isSaveBannerOpen: true }, () => {
            setTimeout(() => this.setState({ isSaveBannerOpen: false}), 2000);
        });
    }
}`;

export default class ElmentsComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editableCommentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.',
            editableComment2Text: 'Pellentesque sagittis quam enim, a euismod nisl tristique ac. Duis rutrum accumsan nisl sit amet congue. Vivamus ut convallis velit, nec adipiscing mi. Sed semper dui ut velit eleifend tincidunt.',
            isRemoveBannerOpen: false,
            isSaveBannerOpen: false
        };

        this._onCloseRemoveBanner = this._onCloseRemoveBanner.bind(this);
        this._onCloseSaveBanner = this._onCloseSaveBanner.bind(this);
        this._onRemoveComment = this._onRemoveComment.bind(this);
        this._onSaveComment = this._onSaveComment.bind(this);
        this._onSaveComment2 = this._onSaveComment2.bind(this);
    }

    render() {
        const { editableCommentText, editableComment2Text, isRemoveBannerOpen, isSaveBannerOpen } = this.state;

        const props = [
            {
                name: 'avatarSrc',
                type: 'string',
                default: '',
                description: 'Show the user\'s avatar.',
                allowedTypes: ''
            }, {
                name: 'canDelete',
                type: 'bool',
                default: 'false',
                description: 'Whether or not the user is permitted to remove (delete) the comment (assuming that isEditable is true and it is editable in the first place).',
                allowedTypes: ''
            }, {
                name: 'canEdit',
                type: 'bool',
                default: 'false',
                description: 'Whether or not the user is permitted to edit and save an update to the comment (assuming that isEditable is true and it is editable in the first place).',
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
                default: 'left',
                description: 'Position the comment\'s details on either the left or right.',
                allowedTypes: 'left, right'
            }, {
                name: 'isEditable',
                type: 'bool',
                default: 'false',
                description: 'Whether or not the comment is editable.  At all.  If it is editable, but certain users may not have permission, use canEdit and canRemove to govern that.',
                allowedTypes: ''
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
                name: 'text',
                type: 'string',
                default: '',
                description: 'In addition to passing it in as the child, you must pass the text/contents of a comment in here if you want to make it editable.',
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
                <Header anchor="comment" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Comment
                    <Header.Subheader>
                        A user's comment.
                    </Header.Subheader>
                </Header>

                <Comment name="Joe Smith" time={1536941364}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
                </Comment>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {commentSample}
                </Highlighter>

                {/* Editable Comment */}
                <Header anchor="editable-comment" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Editable Comments
                    <Header.Subheader>
                        A comment can be editable and deletable.
                    </Header.Subheader>
                </Header>

                <p>When the comment details are right-aligned, the edit and delete actions are left-aligned.</p>

                <Comment
                    canDelete
                    canEdit
                    isEditable
                    name="Joe Smith"
                    onDelete={this._onRemoveComment}
                    onSaveEdit={this._onSaveComment}
                    text={editableCommentText}
                    time={1536941364}
                >
                    {editableCommentText}
                </Comment>

                <Comment
                    canDelete
                    canEdit
                    detailsPosition="right"
                    isEditable
                    name="Jessica Jones"
                    onDelete={this._onRemoveComment}
                    onSaveEdit={this._onSaveComment2}
                    text={editableComment2Text}
                    time={1536941520}
                >
                    {editableComment2Text}
                </Comment>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {editableCommentSample}
                </Highlighter>

                <Banner
                    id="remove-success"
                    level="success"
                    isOpen={isRemoveBannerOpen}
                    message="Comment Removed!"
                    onClose={this._onCloseRemoveBanner}
                    title="Comment Removed"
                    type="notification"
                />

                <Banner
                    id="save-success"
                    level="success"
                    isOpen={isSaveBannerOpen}
                    message="Comment Saved!"
                    onClose={this._onCloseSaveBanner}
                    title="Comment Saved"
                    type="notification"
                />
            </Main>
        );
    }

    _onCloseRemoveBanner() {
        this.setState({ isRemoveBannerOpen: false });
    }

    _onCloseSaveBanner() {
        this.setState({ isSaveBannerOpen: false });
    }

    _onRemoveComment() {
        this.setState({ isRemoveBannerOpen: true }, () => {
            setTimeout(() => this.setState({ isRemoveBannerOpen: false}), 2000);
        });
    }

    _onSaveComment(updatedComment) {
        this.setState({ editableCommentText: updatedComment, isSaveBannerOpen: true }, () => {
            setTimeout(() => this.setState({ isSaveBannerOpen: false}), 2000);
        });
    }

    _onSaveComment2(updatedComment) {
        this.setState({ editableComment2Text: updatedComment, isSaveBannerOpen: true }, () => {
            setTimeout(() => this.setState({ isSaveBannerOpen: false}), 2000);
        });
    }
}
