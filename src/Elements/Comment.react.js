'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Image from './Image.react';
import TextArea from './TextArea.react';

class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updatedCommentText: props.text || '',
            isEditMode: false
        };

        this._onCancelEditClick = this._onCancelEditClick.bind(this);
        this._onCommentChange = this._onCommentChange.bind(this);
        this._onEditClick = this._onEditClick.bind(this);
        this._onEditKeyDown = this._onEditKeyDown.bind(this);
        this._onRemoveClick = this._onRemoveClick.bind(this);
        this._onSaveClick = this._onSaveClick.bind(this);
    }

    render() {
        const { avatarSrc, canEdit, canRemove, children, className, detailsPosition, isEditable, name, style, time } = this.props;
        const { isEditMode, updatedCommentText } = this.state;
        const containerClasses = ClassNames('ui', 'comment', className);

        return (
            <div className={containerClasses} style={style}>
                {name && time || avatarSrc && time ? (
                    <div
                        className="comment-details"
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: detailsPosition === 'right' ? 'row-reverse' : 'row',
                            justifyContent: 'flex-start'
                        }}
                    >
                        <div style={{ flex: 'none' }}>
                            <Image avatar name={name} size={44} src={avatarSrc} />
                        </div>

                        <div
                            style={{
                                flex: '1 0 auto',
                                margin: detailsPosition === 'right' ? '0 11px 0 0' : '0 0 0 11px',
                                textAlign: detailsPosition === 'right' ? 'right' : 'left'
                            }}
                        >
                            <span className="comment-name">{name}</span>
                            <span className="comment-time">{this._renderTime()}</span>
                        </div>
                        { isEditable && (canEdit || canRemove) ?
                            isEditMode ? (
                                <div
                                    style={{
                                        flex: '1 0 auto',
                                        margin: detailsPosition === 'right' ? '0 0 0 11px' : '0 11px 0 0',
                                        textAlign: detailsPosition === 'right' ? 'left' : 'right'
                                    }}
                                >
                                    <a
                                        className="cancel-link"
                                        onClick={this._onCancelEditClick}
                                        style={{ marginRight: '11px' }}
                                    >
                                        {'Cancel'}
                                    </a>
                                    <a
                                        className="save-link"
                                        disabled={!canEdit}
                                        onClick={this._onSaveClick}
                                        style={{ marginRight: '11px' }}
                                    >
                                        {'Save'}
                                    </a>
                                    <a
                                        className="remove-link"
                                        disabled={!canRemove}
                                        onClick={this._onRemoveClick}
                                    >
                                        {'Remove'}
                                    </a>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        flex: '1 0 auto',
                                        margin: detailsPosition === 'right' ? '0 0 0 11px' : '0 11px 0 0',
                                        textAlign: detailsPosition === 'right' ? 'left' : 'right'
                                    }}
                                >
                                    <a
                                        className="edit-link"
                                        onClick={this._onEditClick}
                                    >
                                        {'Edit'}
                                    </a>
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
        this.setState({ isEditMode: false });
    }

    _onCommentChange(value) {
        this.setState({ updatedCommentText: value });
    }

    _onEditClick() {
        this.setState({ isEditMode: true });
    }

    _onEditKeyDown(event) {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault();
            this._onSaveClick();
        }
    }

    _onRemoveClick() {
        const { onRemove } = this.props;
        if (_.isFunction(onRemove)) {
            onRemove();
        }

        this.setState({ isEditMode: false });
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
    canEdit: PropTypes.bool,
    canRemove: PropTypes.bool,
    className: PropTypes.string,
    detailsPosition: PropTypes.oneOf([ 'left', 'right' ]),
    isEditable: PropTypes.bool,
    name: PropTypes.string,
    onRemove: PropTypes.func,
    onSaveEdit: PropTypes.func,
    style: PropTypes.object,
    text: PropTypes.string,
    time: PropTypes.number
};

Comment.defaultProps = {
    canEdit: false,
    canRemove: false,
    detailsPosition: 'left',
    isEditable: false
}

export default Comment;
