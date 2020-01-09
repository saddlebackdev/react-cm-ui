import React, { Component } from 'react';
import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Prompt extends Component {
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

    onNoClick() {
        const { onNoClick } = this.props;

        if (!_.isUndefined(onNoClick)) {
            onNoClick();
        } else {
            this.setState({ show: false });
        }
    }

    onYesClick() {
        const { onYesClick } = this.props;

        if (!_.isUndefined(onYesClick)) {
            onYesClick();
        } else {
            this.setState({ show: false });
        }
    }

    findInlineVerticalPosition() {
        const childHeight = ReactDOM.findDOMNode(this.promptAction).offsetHeight; // eslint-disable-line max-len, react/no-find-dom-node
        const negativeSpace = 5;
        this.setState({ inlineVerticalAlign: `${childHeight + negativeSpace}px` });
    }

    renderAction() {
        const { children } = this.props;
        const { show } = this.state;

        const childClasses = (children && children.props.className) || null;
        const promptActionClasses = ClassNames('prompt-action', childClasses, {
            'prompt-action-disable': show,
        });

        if (children && children.type.name === 'Button') {
            return React.cloneElement(children, {
                className: promptActionClasses,
                color: show ? 'disable' : children.props.color,
                onClick: this.onClick,
                ref: (promptAction) => { this.promptAction = promptAction; },
            });
        }

        if (children && children.type.name === 'Dropdown') {
            return React.cloneElement(children, {
                className: promptActionClasses,
                buttonColor: show && children.props.buttonColor !== 'transparent' ? 'disable' : children.props.buttonColor,
                onChange: this.onClick,
                ref: (promptAction) => { this.promptAction = promptAction; },
            });
        }

        return React.cloneElement(children, {
            className: `${promptActionClasses} ${show ? 'color-static' : null}`,
            onClick: this.onClick,
            ref: (promptAction) => { this.promptAction = promptAction; },
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
            <div className={containerClasses} id={id} style={style}>
                {this.renderAction()}

                <div className="prompt-actions" style={promptActionsStyle}>
                    <div className={messageClasses}>{message}</div>
                    {/* eslint-disable max-len */}
                    {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */}
                    <a className="prompt-yes-btn" onClick={this.onYesClick}>Yes</a>
                    <a className="prompt-no-btn" onClick={this.onNoClick}>No</a>
                    {/* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */}
                    {/* eslint-enable max-len */}
                </div>
            </div>
        );
    }
}

const inlineHorizontalAlign = ['left', 'right'];
const inlineMessageColor = ['alert', 'success'];

Prompt.propTypes = {
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
    inlineHorizontalAlign: PropTypes.oneOf(inlineHorizontalAlign),
    inlineMessageColor: PropTypes.oneOf(inlineMessageColor),
    message: PropTypes.string,
    onClick: PropTypes.func,
    onNoClick: PropTypes.func,
    onYesClick: PropTypes.func,
    style: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
    show: PropTypes.bool,
};

Prompt.defaultProps = {
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

export default Prompt;
