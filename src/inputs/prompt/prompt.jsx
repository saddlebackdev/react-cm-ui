import {
    isFunction,
    isUndefined,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ENTER_KEY_CODE } from '../../global/constants';
import withStyles from '../../styles/withStyles';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    /**
     * Override or extend the styles applied to Prompt.
     */
    classes: PropTypes.shape({
        actions: PropTypes.string,
        root: PropTypes.string,
    }),
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({}),
    ]),
    id: PropTypes.string,
    inline: PropTypes.bool,
    inlineHorizontalAlign: PropTypes.oneOf(['left', 'right']),
    inlineMessageColor: PropTypes.oneOf(['alert', 'success', 'warning']),
    message: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onNoClick: PropTypes.func,
    onNoKeyDown: PropTypes.func,
    onYesClick: PropTypes.func,
    onYesKeyDown: PropTypes.func,
    show: PropTypes.bool,
    style: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
    theme: PropTypes.shape({
        zIndex: PropTypes.shape({
            modal: PropTypes.number,
        }),
    }),
};

const defaultProps = {
    children: null,
    classes: null,
    className: undefined,
    id: undefined,
    inline: false,
    inlineHorizontalAlign: 'left',
    inlineMessageColor: undefined,
    message: 'Are you sure?',
    onClick: undefined,
    onKeyDown: undefined,
    onNoClick: undefined,
    onNoKeyDown: undefined,
    onYesClick: undefined,
    onYesKeyDown: undefined,
    show: undefined,
    style: undefined,
    theme: null,
};

const styles = ({
    palette,
    spacing,
    typography,
    zIndex,
}) => ({
    actions: {},
    root: {
        '&.prompt-inline': {
            display: 'inline-block',
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
                        boxShadow: `0 0 0 1px ${palette.active.primary}`,
                    },
                    '&:hover': {
                        backgroundColor: palette.active.primary,
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
        this.onChildKeyDown = this.onChildKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onNoClick = this.onNoClick.bind(this);
        this.onNoKeyDown = this.onNoKeyDown.bind(this);
        this.onYesClick = this.onYesClick.bind(this);
        this.onYesKeyDown = this.onYesKeyDown.bind(this);

        this.noButtonRef = React.createRef();
    }

    componentDidMount() {
        const { inline } = this.props;

        if (inline) {
            this.findInlineVerticalPosition();
        }
    }

    componentDidUpdate(prevProps) {
        const {
            show: showProp,
        } = this.props;

        const {
            show: prevShowProp,
        } = prevProps;

        const {
            show: showState,
        } = this.state;

        const {
            show: prevShowState,
        } = prevProps;

        if (showProp !== prevShowProp) {
            this.setState({
                show: showProp,
            }, () => {
                this.focusNoButton();
            });
        }

        if (showState && !prevShowState) {
            this.focusNoButton();
        }
    }

    onClick(option) {
        const { onClick } = this.props;
        const { show } = this.state;

        if (show) { return; }

        if (!isUndefined(onClick)) {
            onClick(option);
        } else {
            this.setState({ show: true });
        }
    }

    onChildKeyDown(event) {
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

    onNoKeyDown(event) {
        const {
            onNoKeyDown,
        } = this.props;

        if (isFunction(onNoKeyDown)) {
            onNoKeyDown(event);
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

    onYesKeyDown(event) {
        const {
            onYesKeyDown,
        } = this.props;

        if (isFunction(onYesKeyDown)) {
            onYesKeyDown(event);
        }
    }

    findInlineVerticalPosition() {
        const childHeight = this.childrenRef.offsetHeight;
        const negativeSpace = 5;

        this.setState({
            inlineVerticalAlign: `${childHeight + negativeSpace}px`,
        });
    }

    focusNoButton() {
        if (this.noButtonRef && this.noButtonRef.current) {
            this.noButtonRef.current.focus();
        }
    }

    render() {
        const {
            children,
            classes,
            className,
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

        const messageClasses = ClassNames('prompt-message', {
            'promp-message-alert': inlineMessageColor === 'alert' || children.props.color === 'alert' || children.props.buttonColor === 'alert',
            'promp-message-success': inlineMessageColor === 'success' || children.props.color === 'success' || children.props.buttonColor === 'success',
            'promp-message-warning': inlineMessageColor === 'warning' || children.props.color === 'warning' || children.props.buttonColor === 'warning',
        });

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
                        onKeyDown={this.onChildKeyDown}
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
                    <div
                        className={messageClasses}
                    >
                        {message}
                    </div>

                    <div
                        className="prompt-yes-btn"
                        onClick={this.onYesClick}
                        onKeyDown={this.onYesKeyDown}
                        onMouseDown={this.onMouseDown}
                        role="button"
                        tabIndex={0}
                    >
                        Yes
                    </div>

                    <div
                        className="prompt-no-btn"
                        onClick={this.onNoClick}
                        onKeyDown={this.onNoKeyDown}
                        onMouseDown={this.onMouseDown}
                        ref={this.noButtonRef}
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
