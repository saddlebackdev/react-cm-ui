import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({}),
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    id: PropTypes.string,
    inline: PropTypes.bool,
    inlineHorizontalAlign: PropTypes.oneOf(['left', 'right']),
    inlineMessageColor: PropTypes.oneOf(['alert', 'success']),
    message: PropTypes.string,
    onClick: PropTypes.func,
    onNoClick: PropTypes.func,
    onYesClick: PropTypes.func,
    style: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
    show: PropTypes.bool,
};

const defaultProps = {
    className: undefined,
    children: null,
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
};

const noop = () => {};

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

        if (show) { return false; }

        if (!_.isUndefined(onClick)) {
            onClick(option);
        } else {
            this.setState({ show: true });
        }

        return false;
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
            className,
            id,
            inline,
            inlineHorizontalAlign,
            inlineMessageColor,
            message,
            style,
        } = this.props;

        const { show, inlineVerticalAlign } = this.state;
        const containerClasses = ClassNames('ui', 'prompt', className, {
            'prompt-show': show,
            'prompt-inline': inline,
        });

        const messageClasses = ClassNames('prompt-message', {
            'promp-message-alert': inlineMessageColor === 'alert' || children.props.color === 'alert' || children.props.buttonColor === 'alert',
            'promp-message-success': inlineMessageColor === 'success' || children.props.color === 'success' || children.props.buttonColor === 'success',
        });

        const promptActionsStyle = {
            left: !inlineHorizontalAlign || inlineHorizontalAlign === 'left' ? 0 : null,
            right: inlineHorizontalAlign === 'right' ? 0 : null,
            top: inlineVerticalAlign,
        };

        return (
            <div
                className={containerClasses}
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

                <div className="prompt-actions" style={promptActionsStyle}>
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

export default Prompt;
