import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
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
    onYesClick: undefined,
    style: undefined,
    show: undefined,
    theme: null,
};

const noop = () => {};

const styles = (theme) => ({
    '@keyframes animateInActions': {
        '0%': {
            opacity: 0,
            transform: 'translateY(-11px)',
        },
        '50%': {
            opacity: 0,
            transform: 'translateY(0px)',
        },
        '100%': {
            opacity: 1,
        },
    },
    actionBtn: {
        '&:hover': {
            backgroundColor: theme.palette.active.primary,
        },
        alignItems: 'center',
        backgroundColor: theme.palette.grey['500'],
        border: 0,
        color: theme.palette.common.white,
        cursor: 'pointer',
        display: 'inline-flex',
        height: 33,
        letterSpacing: 1,
        lineHeight: '1px',
        outline: 'none',
        overflow: 'Hidden',
        padding: `0 ${theme.typography.pxToRem(11)}`,
        textAlign: 'center',
        textDecoration: 'none',
        textTransform: 'capitalize',
        transition: 'background-color 125ms linear, color 125ms linear, opacity 250ms ease-out',
        verticalAlign: 'top',
        whiteSpace: 'nowrap',
    },
    actions: {},
    icon: {
        verticalAlign: 'middle',
    },
    message: {
        backgroundColor: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3,
        lineHeight: '33px',
        padding: '0 11px',
        '&.prompt-message-alert': {
            backgroundColor: theme.palette.error.main,
        },
        '&.prompt-message-info': {
            backgroundColor: theme.palette.teal[500],
        },
        '&.prompt-message-success': {
            backgroundColor: theme.palette.success.main,
        },
        '&.prompt-message-warning': {
            backgroundColor: theme.palette.warning.main,
        },
    },
    noActionBtn: {
        borderLeft: `1px solid ${theme.palette.primary.main}`,
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
                color: theme.palette.text.contrastText,
                display: 'none',
                flex: '0 1 auto',
                fontSize: theme.typography.pxToRem(14),
                fontWeight: theme.typography.fontWeightMedium,
                height: 33,
                position: 'absolute',
                zIndex: theme.zIndex.prompt,
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
            if (!_.isUndefined(onClick)) {
                onClick(option);
            } else {
                this.setState({ show: true });
            }
        }
    }

    onNoClick(event) {
        const { onNoClick } = this.props;

        if (!_.isUndefined(onNoClick)) {
            onNoClick(event);
        } else {
            this.setState({ show: false });
        }
    }

    onYesClick(event) {
        const { onYesClick } = this.props;

        if (!_.isUndefined(onYesClick)) {
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
                        onKeyDown={noop}
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
                        role="button"
                        tabIndex={-1}
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
                        role="button"
                        tabIndex={-1}
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
