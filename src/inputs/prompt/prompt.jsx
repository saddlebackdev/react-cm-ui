import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
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
    onNoClick: PropTypes.func,
    onYesClick: PropTypes.func,
    style: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
    show: PropTypes.bool,
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
    onNoClick: undefined,
    onYesClick: undefined,
    style: undefined,
    show: undefined,
    theme: null,
};

const noop = () => {};

const styles = (theme) => ({
    actions: {},
    root: {
        '&.prompt-inline': {
            display: 'inline-block',
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
                    <div className={messageClasses}>{message}</div>

                    <div
                        className="prompt-yes-btn"
                        onClick={this.onYesClick}
                        onKeyDown={noop}
                        role="button"
                        tabIndex={-1}
                    >
                        Yes
                    </div>

                    <div
                        className="prompt-no-btn"
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
