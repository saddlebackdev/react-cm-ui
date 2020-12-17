import {
    isFunction,
    isUndefined,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ENTER_KEY_CODE } from '../../global/constants';
import withStyles from '../../styles/withStyles';
import Icon from '../../dataDisplay/icon';

const propTypes = {
    /**
     * Children(Button, Link) are used to initiate Prompt action.
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    /**
     * Override or extend the styles applied to Prompt.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
        actionBtn: PropTypes.string,
        actions: PropTypes.string,
        icon: PropTypes.string,
        message: PropTypes.string,
        noActionBtn: PropTypes.string,
    }),
    /**
     * Assign additional class names to Prompt.
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({}),
    ]),
    /**
     * Assign icon to Prompt message.
     */
    icon: PropTypes.string,
    /**
     * The `id` of the Prompt.
     */
    id: PropTypes.string,
    /**
     * Prompts will be handled inline with the action.
     */
    inline: PropTypes.bool,
    /**
     * Align inline Prompt horizontally to the left or the right.
     */
    inlineHorizontalAlign: PropTypes.oneOf(['left', 'right']),
    /**
     * Assign inline Prompt's action message a custom background color.
     */
    inlineMessageColor: PropTypes.oneOf(['alert', 'info', 'success', 'warning']),
    /**
     * Assign custom message to prompt
     */
    message: PropTypes.string,
    /**
     * Event for Prompt to handle `onCLick`.
     */
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    /**
     * Event for Prompt to handle `onNoClick`.
     */
    onNoClick: PropTypes.func,
    /**
     * Event for Prompt to handle `onYesClick`.
     */
    onYesClick: PropTypes.func,
    /**
     * Supply any inline styles to the Prompt\'s container.
     * Mainly used for padding and margins.
     */
    style: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
    /**
     * If `true`, Prompt message with `Yes` and `No` action button is shown.
     */
    show: PropTypes.bool,
    /**
     * HC's theme.
     */
    theme: PropTypes.shape({
        zIndex: PropTypes.shape({
            prompt: PropTypes.number,
        }),
    }),
};

const defaultProps = {
    children: null,
    classes: null,
    className: undefined,
    icon: undefined,
    id: undefined,
    inline: false,
    inlineHorizontalAlign: 'left',
    inlineMessageColor: undefined,
    message: 'Are you sure?',
    onClick: undefined,
    onNoClick: undefined,
    onKeyDown: undefined,
    onYesClick: undefined,
    style: undefined,
    show: undefined,
    theme: null,
};

const noop = () => {};

const styles = ({
    palette,
    spacing,
    typography,
    zIndex,
}) => ({
    actions: {},
    icon: {
        verticalAlign: 'middle',
    },
    message: {
        backgroundColor: palette.text.secondary,
        whiteSpace: 'nowrap',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3,
        lineHeight: '33px',
        padding: '0 11px',
        '&.prompt-message-alert': {
            backgroundColor: palette.error.main,
        },
        '&.prompt-message-info': {
            backgroundColor: palette.teal[500],
        },
        '&.prompt-message-success': {
            backgroundColor: palette.success.main,
        },
        '&.prompt-message-warning': {
            backgroundColor: palette.warning.main,
        },
    },
    noActionBtn: {
        borderLeft: `1px solid ${palette.primary.main}`,
        borderBottomRightRadius: 3,
        borderTopRightRadius: 3,
    },
    root: {
        position: 'relative',
        '&.prompt-action-disable': {
            cursor: 'default',
        },
        '&.prompt-inline': {
            display: 'inline-block',
            '&.prompt-show': {
                '& $actions': {
                    animation: '$animateInActions 200ms ease-out forwards',
                    display: 'inline-flex',
                },
            },
            '& $actions': {
                alignItems: 'center',
                borderRadius: 3,
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, .43)',
                color: palette.text.contrastText,
                display: 'none',
                flex: '0 1 auto',
                fontSize: typography.pxToRem(14),
                fontWeight: typography.fontWeightMedium,
                height: 33,
                position: 'absolute',
                zIndex: zIndex.prompt,
            },
            '& .prompt': {
                '&-no-btn, &-yes-btn': {
                    alignItems: 'center',
                    backgroundColor: palette.grey[500],
                    border: 0,
                    // boxShadow: `inset 0 0 0 1px ${palette.grey[600]}`,
                    color: palette.text.contrastText,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    height: 33,
                    letterSpacing: 1,
                    lineHeight: 1,
                    outline: 'none',
                    overflow: 'hidden',
                    padding: [[0, spacing(1)]],
                    position: 'relative',
                    textAlign: 'center',
                    textDecoration: 'none',
                    textTransform: 'capitalize',
                    transition: 'background-color 125ms linear, color 125ms linear, opacity 250ms ease-out',
                    verticalAlign: 'top',
                    '&:focus': {
                        boxShadow: `0 0 0 1px ${palette.active.main}`,
                    },
                    '&:hover': {
                        backgroundColor: palette.active.main,
                    },
                },
                '&-no-btn': {
                    borderTopRightRadius: 3,
                    borderBottomRightRadius: 3,
                    '&::before': {
                        backgroundColor: palette.grey[600],
                        content: '""',
                        height: 33,
                        left: 0,
                        position: 'absolute',
                        top: 0,
                        width: 1,
                    },
                },
            },
        },
    },
});

class Prompt extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: props.show || false,
            inlineVerticalAlign: 0,
        };

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onNoClick = this.onNoClick.bind(this);
        this.onYesClick = this.onYesClick.bind(this);
    }

    componentDidMount() {
        const { inline } = this.props;

        if (inline) {
            this.findInlineVerticalPosition();
        }
    }

    componentDidUpdate(prevProps) {
        const { show: nextShowProp } = this.props;
        const { show: prevShowProp } = prevProps;

        if (nextShowProp !== prevShowProp) {
            this.setState({ show: nextShowProp });
        }
    }

    onClick(option) {
        const { onClick } = this.props;
        const { show } = this.state;

        if (!show) {
            if (!isUndefined(onClick)) {
                onClick(option);
            } else {
                this.setState({ show: true });
            }
        }
    }

    onKeyDown(event) {
        const {
            onKeyDown,
        } = this.props;

        if (isFunction(onKeyDown)) {
            onKeyDown(event);
        } else if (event.keyCode === ENTER_KEY_CODE) {
            this.onClick();
        }
    }

    onMouseDown(event) {
        event.preventDefault();
    }

    onNoClick(event) {
        const { onNoClick } = this.props;

        if (!isUndefined(onNoClick)) {
            onNoClick(event);
        } else {
            this.setState({ show: false });
        }
    }

    onYesClick(event) {
        const { onYesClick } = this.props;

        if (!isUndefined(onYesClick)) {
            onYesClick(event);
        } else {
            this.setState({ show: false });
        }
    }

    findInlineVerticalPosition() {
        const childHeight = this.childrenRef.offsetHeight;
        const negativeSpace = 5;

        this.setState({
            inlineVerticalAlign: `${childHeight + negativeSpace}px`,
        });
    }

    render() {
        const {
            children,
            classes,
            className,
            icon,
            id,
            inline,
            inlineHorizontalAlign,
            inlineMessageColor,
            message,
            style,
        } = this.props;

        const { show, inlineVerticalAlign } = this.state;

        const rootClasses = ClassNames(
            'ui',
            'prompt',
            classes.root,
            className,
            {
                'prompt-show': show,
                'prompt-inline': inline,
            },
        );

        const messageClasses = ClassNames(
            'prompt-message',
            classes.message,
            {
                'prompt-message-alert': inlineMessageColor === 'alert' || children.props.color === 'alert' || children.props.buttonColor === 'alert',
                'prompt-message-info': inlineMessageColor === 'info',
                'prompt-message-success': inlineMessageColor === 'success' || children.props.color === 'success' || children.props.buttonColor === 'success',
                'prompt-message-warning': inlineMessageColor === 'warning' || children.props.color === 'warning' || children.props.buttonColor === 'warning',
            },
        );

        const promptActionsStyle = {
            left: !inlineHorizontalAlign || inlineHorizontalAlign === 'left' ? 0 : null,
            right: inlineHorizontalAlign === 'right' ? 0 : null,
            top: inlineVerticalAlign,
        };

        return (
            <div
                className={rootClasses}
                id={id}
                style={style}
            >
                {/*
                 * NOTE: Remove this condition for 'Dropdown' when Dropdown is
                 * removed from the library.
                 */}
                {children && children.type.name === 'Dropdown' ? (
                    <div
                        ref={(ref) => { this.childrenRef = ref; }}
                    >
                        {React.cloneElement(children, {
                            className: ClassNames(
                                'prompt-action',
                                (children && children.props.className) || null,
                                {
                                    'prompt-action-disable': show,
                                },
                            ),
                            buttonColor: show && children.props.buttonColor !== 'transparent' ? 'disable' : children.props.buttonColor,
                            onChange: this.onClick,
                        })}
                    </div>
                ) : (
                    <div
                        onClick={this.onClick}
                        onKeyDown={this.onKeyDown}
                        ref={(ref) => { this.childrenRef = ref; }}
                        role="button"
                        tabIndex={-1}
                        style={{
                            outline: 'none',
                        }}
                    >
                        {children}
                    </div>
                )}

                <div
                    className={ClassNames(
                        'prompt-actions',
                        classes.actions,
                    )}
                    style={promptActionsStyle}
                >
                    <div className={messageClasses}>
                        {icon && (
                            <Icon
                                className={classes.icon}
                                color="primary"
                                inverse
                                type={icon}
                            />
                        )}
                        {message}
                    </div>

                    <div
                        className={ClassNames(
                            'prompt-yes-btn',
                            classes.actionBtn,
                        )}
                        onClick={this.onYesClick}
                        onKeyDown={noop}
                        onMouseDown={this.onMouseDown}
                        role="button"
                        tabIndex={0}
                    >
                        Yes
                    </div>

                    <div
                        className={ClassNames(
                            'prompt-no-btn',
                            classes.actionBtn,
                            classes.noActionBtn,
                        )}
                        onClick={this.onNoClick}
                        onKeyDown={noop}
                        onMouseDown={this.onMouseDown}
                        role="button"
                        tabIndex={0}
                    >
                        No
                    </div>
                </div>
            </div>
        );
    }
}

Prompt.propTypes = propTypes;
Prompt.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(Prompt);
