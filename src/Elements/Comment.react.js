'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Dropdown from '../Modules/Dropdown.react';
import Image from './Image.react';
import Prompt from '../Modules/Prompt.react';
import TextArea from './TextArea.react';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false,
            showDeleteConfirmation: false,
            updatedCommentText: props.text || '',
        };

        this._onCancelEditClick = this._onCancelEditClick.bind(this);
        this._onCommentChange = this._onCommentChange.bind(this);
        this._onDeletePromptNoClick = this._onDeletePromptNoClick.bind(this);
        this._onDeletePromptYesClick = this._onDeletePromptYesClick.bind(this);
        this._onEditKeyDown = this._onEditKeyDown.bind(this);
        this._onEditOrDeletePromptClick = this._onEditOrDeletePromptClick.bind(this);
        this._onSaveClick = this._onSaveClick.bind(this);
    }

    render() {
        const { avatarSrc, canDelete, canEdit, children, className, detailsPosition, isEditable, name, style, time } = this.props;
        const { isEditMode, showDeleteConfirmation, updatedCommentText } = this.state;
        const containerClasses = ClassNames('ui', 'comment', className);
        const isRightAligned = detailsPosition === 'right';
        const editActionMenuAlignment = isRightAligned ? 'left' : 'right';
        const editMenuTitle = (canDelete && canEdit) ? 'Edit or Delete' : canEdit ? 'Edit' : canDelete ? 'Delete' : null;

        return (
            <div className={containerClasses} style={style}>
                {name && time || avatarSrc && time ? (
                    <div
                        className="comment-details"
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: isRightAligned ? 'row-reverse' : 'row',
                            justifyContent: 'flex-start'
                        }}
                    >
                        <div style={{ flex: 'none' }}>
                            <Image avatar name={name} size={44} src={avatarSrc} />
                        </div>

                        <div
                            style={{
                                flex: '1 0 auto',
                                margin: isRightAligned ? '0 11px 0 0' : '0 0 0 11px',
                                textAlign: isRightAligned ? 'right' : 'left',
                            }}
                        >
                            <span className="comment-name">{name}</span>
                            <span className="comment-time">{this._renderTime()}</span>
                        </div>
                        { isEditable && (canEdit || canDelete) ?
                            isEditMode ? (
                                <div
                                    style={{
                                        flex: '1 0 auto',
                                        margin: 0,
                                        paddingTop: '19px',
                                        textAlign: editActionMenuAlignment
                                    }}
                                >
                                    <a
                                        className="cancel-link font-size-xsmall color-text"
                                        onClick={this._onCancelEditClick}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {'Cancel'}
                                    </a>
                                    <a
                                        className="save-link font-size-xsmall"
                                        disabled={!canEdit}
                                        onClick={this._onSaveClick}
                                        style={{ display: 'inline-block', marginLeft: '22px' }}
                                    >
                                        {'Save'}
                                    </a>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        flex: '1 0 auto',
                                        margin: 0,
                                        textAlign: editActionMenuAlignment
                                    }}
                                >
                                    <Prompt
                                        inline
                                        inlineHorizontalAlign={editActionMenuAlignment}
                                        inlineMessageColor="alert"
                                        message={'Delete?'}
                                        onClick={this._onEditOrDeletePromptClick}
                                        onNoClick={this._onDeletePromptNoClick}
                                        onYesClick={this._onDeletePromptYesClick}
                                        show={showDeleteConfirmation}
                                    >
                                        <Dropdown
                                            button
                                            buttonColor="transparent"
                                            buttonCompact
                                            collapseMenuOnChange
                                            iconColor="static"
                                            iconPosition="right"
                                            iconTitle={editMenuTitle}
                                            iconType="ellipsis-h"
                                            style={{ margin: 0, padding: 0  }}
                                            theme="dark"
                                        >
                                            { canEdit ? (
                                                <Dropdown.Item
                                                    className="action-edit"
                                                    iconInverse
                                                    iconType="pencil"
                                                    id="edit"
                                                    label={'Edit'}
                                                />
                                            ) : null}
                                            { canDelete ? (
                                                <Dropdown.Item
                                                    className="action-delete"
                                                    iconInverse
                                                    iconType="trash"
                                                    id="delete"
                                                    label={'Delete'}
                                                />
                                            ) : null}
                                        </Dropdown>
                                    </Prompt>
                                </div>
                                ) :
                            null
                        }
                    </div>
                ) : null}

                <div className="comment-bubble">
                    {isEditable && canEdit && isEditMode ? (
                        <TextArea
                            fluid
                            onChange={this._onCommentChange}
                            onKeyDown={this._onEditKeyDown}
                            ref={ref => this.editableCommentTextArea = ref}
                            value={updatedCommentText}
                        />
                    ): children}
                </div>
            </div>
        );
    }

    _onCancelEditClick() {
        this.setState({
            isEditMode: false,
            updatedCommentText: this.props.text || ''
        });
    }

    _onCommentChange(value) {
        this.setState({ updatedCommentText: value });
    }

    _onDeletePromptNoClick() {
        this.setState({ showDeleteConfirmation: false });
    }

    _onDeletePromptYesClick() {
        const { onDelete } = this.props;
        if (_.isFunction(onDelete)) {
            onDelete();
        }

        this.setState({ showDeleteConfirmation: false });
    }

    _onEditOrDeletePromptClick(selectedOption) {
        switch (selectedOption.id) {
            case 'delete':
                this.setState({ showDeleteConfirmation: true });
                break;
            case 'edit':
                this.setState({ isEditMode: true });
                break;
        }
    }

    _onEditKeyDown(event) {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault();
            this._onSaveClick();
        }
    }

    _onSaveClick() {
        const { onSaveEdit } = this.props;
        if (_.isFunction(onSaveEdit)) {
            onSaveEdit(this.editableCommentTextArea.textArea.value);
        }

        this.setState({ isEditMode: false });
    }

    _renderTime() {
        const { time } = this.props;

        return moment.unix(time).calendar(null, {
            sameDay: '[Today] - h:mm a',
            nextWeek: 'MMMM D, YYYY - h:mm a',
            nextDay: 'MMMM D, YYYY - h:mm a',
            lastDay: '[Yesterday] - h:mm a',
            lastWeek: 'MMMM D, YYYY - h:mm a',
            sameElse: 'MMMM D, YYYY - h:mm a'
        });
    }
}

Comment.propTypes = {
    avatarSrc: PropTypes.string,
    canDelete: PropTypes.bool,
    canEdit: PropTypes.bool,
    className: PropTypes.string,
    detailsPosition: PropTypes.oneOf([ 'left', 'right' ]),
    isEditable: PropTypes.bool,
    name: PropTypes.string,
    onDelete: PropTypes.func,
    onSaveEdit: PropTypes.func,
    style: PropTypes.object,
    text: PropTypes.string,
    time: PropTypes.number
};

Comment.defaultProps = {
    canDelete: false,
    canEdit: false,
    detailsPosition: 'left',
    isEditable: false
}

export default Comment;
