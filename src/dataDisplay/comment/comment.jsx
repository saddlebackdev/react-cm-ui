import {
    isFunction,
    noop,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import A from '../../navigation/a';
import DropdownButton from '../../inputs/dropdownButton';
import Image from '../image';
import Prompt from '../../inputs/prompt';
import TextArea from '../../inputs/textArea';

const propTypes = {
    avatarSrc: PropTypes.string,
    canDelete: PropTypes.bool,
    canEdit: PropTypes.bool,
    children: PropTypes.node,
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

const defaultProps = {
    avatarSrc: null,
    canDelete: false,
    canEdit: false,
    children: null,
    className: null,
    detailsPosition: 'left',
    isEditable: false,
    name: null,
    onActionMenuClick: null,
    onDelete: null,
    onSaveEdit: null,
    style: null,
    text: null,
    time: null,
};

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

        if (isFunction(onActionMenuClick)) {
            onActionMenuClick(menuIsOpen);
        }
    }

    onCancelEditClick() {
        const {
            text,
        } = this.props;

        this.setState({
            isEditMode: false,
            updatedCommentText: text || '',
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
        if (isFunction(onDelete)) {
            onDelete();
        }

        this.setState({ showDeleteConfirmation: false });
    }

    onEditOrDeletePromptClick(selectedOption) {
        const { onActionMenuClick } = this.props;

        switch (selectedOption.id) {
            case 'delete':
                this.setState({ showDeleteConfirmation: true });
                break;
            case 'edit':
                this.setState({ isEditMode: true });

                if (isFunction(onActionMenuClick)) {
                    onActionMenuClick(false);
                }

                break;
            default:
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
        if (isFunction(onSaveEdit)) {
            onSaveEdit(this.editableCommentTextArea.textArea.value);
        }

        this.setState({ isEditMode: false });
    }

    renderTime() {
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
            avatarSrc,
            canDelete,
            canEdit,
            children,
            className,
            detailsPosition,
            isEditable,
            name,
            style,
            time,
        } = this.props;

        const {
            isEditMode,
            showDeleteConfirmation,
            updatedCommentText,
        } = this.state;

        const rootClasses = ClassNames(
            'ui',
            'comment',
            className,
        );

        const isRightAligned = detailsPosition === 'right';
        const editActionMenuAlignment = isRightAligned ? 'left' : 'right';

        let editMenuTitle = null;

        if (canDelete && canEdit) {
            editMenuTitle = 'Edit or Delete';
        } else if (canEdit) {
            editMenuTitle = 'Edit';
        } else if (canDelete) {
            editMenuTitle = 'Delete';
        }

        return (
            <div className={rootClasses} style={style}>
                {((name && time) || (avatarSrc && time)) && (
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
                            <span className="comment-time">{this.renderTime()}</span>
                        </div>

                        {isEditable && (canEdit || canDelete) && isEditMode && (
                            <div
                                style={{
                                    flex: '1 0 auto',
                                    margin: 0,
                                    paddingTop: '19px',
                                    textAlign: editActionMenuAlignment,
                                }}
                            >
                                <A
                                    className="cancel-link font-size-xsmall color-text"
                                    onClick={this.onCancelEditClick}
                                    onKeyDown={noop}
                                    style={{
                                        display: 'inline-block',
                                    }}
                                    tabIndex={0}
                                >
                                    Cancel
                                </A>

                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <A
                                    className="save-link font-size-xsmall"
                                    disabled={!canEdit}
                                    onKeyDown={noop}
                                    onClick={this.onSaveClick}
                                    style={{
                                        display: 'inline-block',
                                        marginLeft: 22,
                                    }}
                                    tabIndex={0}
                                >
                                    Save
                                </A>
                            </div>
                        )}

                        {isEditable && (canEdit || canDelete) && !isEditMode && (
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
                                    <DropdownButton
                                        button
                                        collapseMenuOnChange
                                        icon
                                        iconType="ellipsis-h"
                                        onClose={() => this.onActionMenuClick(false)}
                                        onOpen={() => this.onActionMenuClick(true)}
                                        style={{ margin: 0, padding: 0 }}
                                        text
                                        title={editMenuTitle}
                                    >
                                        {canEdit && (
                                            <DropdownButton.Option
                                                className="action-edit"
                                                iconInverse
                                                iconType="pencil"
                                                id="edit"
                                                label="Edit"
                                            />
                                        )}

                                        {canDelete && (
                                            <DropdownButton.Option
                                                className="action-delete"
                                                iconInverse
                                                iconType="trash"
                                                id="delete"
                                                label="Delete"
                                            />
                                        )}
                                    </DropdownButton>
                                </Prompt>
                            </div>
                        )}
                    </div>
                )}

                <div className="comment-bubble">
                    {isEditable && canEdit && isEditMode ? (
                        <TextArea
                            fluid
                            onChange={this.onCommentChange}
                            onKeyDown={this.onEditKeyDown}
                            ref={(ref) => { this.editableCommentTextArea = ref; }}
                            value={updatedCommentText}
                        />
                    ) : children}
                </div>
            </div>
        );
    }
}

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
