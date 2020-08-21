import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from '../../inputs/dropdown';
import Image from '../image';
import Prompt from '../../inputs/prompt';
import TextArea from '../../inputs/textArea';

class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false,
            showDeleteConfirmation: false,
            updatedCommentText: props.text || '',
        };

        this.onActionMenuClick = this.onActionMenuClick.bind(this);
        this.onCancelEditClick = this.onCancelEditClick.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
        this.onDeletePromptNoClick = this.onDeletePromptNoClick.bind(this);
        this.onDeletePromptYesClick = this.onDeletePromptYesClick.bind(this);
        this.onEditKeyDown = this.onEditKeyDown.bind(this);
        this.onEditOrDeletePromptClick = this.onEditOrDeletePromptClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onActionMenuClick(menuIsOpen) {
        const { onActionMenuClick } = this.props;

        if (_.isFunction(onActionMenuClick)) {
            onActionMenuClick(menuIsOpen);
        }
    }

    onCancelEditClick() {
        this.setState({
            isEditMode: false,
            updatedCommentText: this.props.text || '',
        });
    }

    onCommentChange(value) {
        this.setState({ updatedCommentText: value });
    }

    onDeletePromptNoClick() {
        this.setState({ showDeleteConfirmation: false });
    }

    onDeletePromptYesClick() {
        const { onDelete } = this.props;
        if (_.isFunction(onDelete)) {
            onDelete();
        }

        this.setState({ showDeleteConfirmation: false });
    }

    onEditOrDeletePromptClick(selectedOption) {
        switch (selectedOption.id) {
            case 'delete':
                this.setState({ showDeleteConfirmation: true });
                break;
            case 'edit':
                this.setState({ isEditMode: true });

                const { onActionMenuClick } = this.props;
                if (_.isFunction(onActionMenuClick)) {
                    onActionMenuClick(false);
                }

                break;
        }
    }

    onEditKeyDown(event) {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault();
            this.onSaveClick();
        }
    }

    onSaveClick() {
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
            sameElse: 'MMMM D, YYYY - h:mm a',
        });
    }

    render() {
        const {
            avatarSrc, canDelete, canEdit, children, className, detailsPosition, isEditable, name, style, time,
        } = this.props;
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
                            justifyContent: 'flex-start',
                        }}
                    >
                        <div style={{ flex: 'none' }}>
                            <Image type="user" name={name} size={44} src={avatarSrc} />
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
                                        textAlign: editActionMenuAlignment,
                                    }}
                                >
                                    <a
                                        className="cancel-link font-size-xsmall color-text"
                                        onClick={this.onCancelEditClick}
                                        style={{ display: 'inline-block' }}
                                    >
                                        Cancel
                                    </a>
                                    <a
                                        className="save-link font-size-xsmall"
                                        disabled={!canEdit}
                                        onClick={this.onSaveClick}
                                        style={{ display: 'inline-block', marginLeft: '22px' }}
                                    >
                                        Save
                                    </a>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        flex: '1 0 auto',
                                        margin: 0,
                                        textAlign: editActionMenuAlignment,
                                    }}
                                >
                                    <Prompt
                                        inline
                                        inlineHorizontalAlign={editActionMenuAlignment}
                                        inlineMessageColor="alert"
                                        message="Delete?"
                                        onClick={this.onEditOrDeletePromptClick}
                                        onNoClick={this.onDeletePromptNoClick}
                                        onYesClick={this.onDeletePromptYesClick}
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
                                            onClose={() => this.onActionMenuClick(false)}
                                            onOpen={() => this.onActionMenuClick(true)}
                                            style={{ margin: 0, padding: 0 }}
                                            theme="dark"
                                        >
                                            { canEdit ? (
                                                <Dropdown.Item
                                                    className="action-edit"
                                                    iconInverse
                                                    iconType="pencil"
                                                    id="edit"
                                                    label="Edit"
                                                />
                                            ) : null}
                                            { canDelete ? (
                                                <Dropdown.Item
                                                    className="action-delete"
                                                    iconInverse
                                                    iconType="trash"
                                                    id="delete"
                                                    label="Delete"
                                                />
                                            ) : null}
                                        </Dropdown>
                                    </Prompt>
                                </div>
                            ) :
                            null}
                    </div>
                ) : null}

                <div className="comment-bubble">
                    {isEditable && canEdit && isEditMode ? (
                        <TextArea
                            fluid
                            onChange={this.onCommentChange}
                            onKeyDown={this.onEditKeyDown}
                            ref={(ref) => this.editableCommentTextArea = ref}
                            value={updatedCommentText}
                        />
                    ) : children}
                </div>
            </div>
        );
    }
}

Comment.propTypes = {
    avatarSrc: PropTypes.string,
    canDelete: PropTypes.bool,
    canEdit: PropTypes.bool,
    className: PropTypes.string,
    detailsPosition: PropTypes.oneOf(['left', 'right']),
    isEditable: PropTypes.bool,
    name: PropTypes.string,
    onActionMenuClick: PropTypes.func,
    onDelete: PropTypes.func,
    onSaveEdit: PropTypes.func,
    style: PropTypes.shape({}),
    text: PropTypes.string,
    time: PropTypes.number,
};

Comment.defaultProps = {
    canDelete: false,
    canEdit: false,
    detailsPosition: 'left',
    isEditable: false,
};

export default Comment;
