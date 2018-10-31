'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Prompt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: props.show || false,
            inlineVerticalAlign: 0
        };

        this._onClick = this._onClick.bind(this);
        this._onNoClick = this._onNoClick.bind(this);
        this._onYesClick = this._onYesClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.show !== nextProps.show) {
            this.setState({ show: nextProps.show });
        }
    }

    render() {
        const { children, className, inline, inlineHorizontalAlign, inlineMessageColor, message, style } = this.props;
        const { show, inlineVerticalAlign } = this.state;
        const containerClasses = ClassNames('ui', 'prompt', className, {
            'prompt-show': show,
            'prompt-inline': inline
        });
        const messageClasses = ClassNames('prompt-message', {
            'promp-message-alert': inlineMessageColor === 'alert' || children.props.color === 'alert' || children.props.buttonColor === 'alert',
            'promp-message-success': inlineMessageColor === 'success' || children.props.color === 'success' || children.props.buttonColor === 'success'
        });
        const promptActionsStyle = {
            left: !inlineHorizontalAlign || inlineHorizontalAlign === 'left' ? 0 : null,
            right: inlineHorizontalAlign === 'right' ? 0 : null,
            top: inlineVerticalAlign
        };

        return (
            <div className={containerClasses} style={style}>
                {this._renderAction()}

                <div className="prompt-actions" style={promptActionsStyle}>
                    <div className={messageClasses}>{message || 'Are you sure?'}</div>
                    <a className="prompt-yes-btn" onClick={this._onYesClick}>{'Yes'}</a>
                    <a className="prompt-no-btn" onClick={this._onNoClick}>{'No'}</a>
                </div>
            </div>
        );
    }

    componentDidMount() {
        if (this.props.inline) {
            this._findInlineVerticalPosition();
        }
    }

    _findInlineVerticalPosition() {
        const childHeight = ReactDOM.findDOMNode(this.promptAction).offsetHeight;
        const negativeSpace = 5;
        this.setState({ inlineVerticalAlign: childHeight + negativeSpace + 'px' });
    }

    _onClick(option) {
        const { onClick } = this.props;
        const { show } = this.state;

        if (show) { return false; }

        if (!_.isUndefined(onClick)) {
            onClick(option);
        } else {
            this.setState({ show: true });
        }
    }

    _onNoClick() {
        const { onNoClick } = this.props;

        if (!_.isUndefined(onNoClick)) {
            onNoClick();
        } else {
            this.setState({ show: false });
        }
    }

    _onYesClick() {
        const { onYesClick } = this.props;

        if (!_.isUndefined(onYesClick)) {
            onYesClick();
        } else {
            this.setState({ show: false });
        }
    }

    _renderAction() {
        const { children } = this.props;
        const { show } = this.state;
        const promptActionClasses = ClassNames('prompt-action', {
            'prompt-action-disable': show
        });

        if (children && children.type.name === 'Button') {
            return React.cloneElement(children, {
                className: promptActionClasses,
                color: show ? 'disable' : children.props.color,
                onClick: this._onClick.bind(this),
                ref: promptAction => { this.promptAction = promptAction }
            });
        } else if (children && children.type.name === 'Dropdown') {
            return React.cloneElement(children, {
                className: promptActionClasses,
                buttonColor: show && children.props.buttonColor !== 'transparent' ? 'disable' : children.props.buttonColor,
                onChange: this._onClick.bind(this),
                ref: promptAction => { this.promptAction = promptAction }
            });
        } else {
            return React.cloneElement(children, {
                className: `${promptActionClasses} ${show ? 'color-static' : null}`,
                onClick: this._onClick.bind(this),
                ref: promptAction => { this.promptAction = promptAction }
            });
        }
    }

}

const inlineHorizontalAlign = [ 'left', 'right' ];
const inlineMessageColor = [ 'alert', 'success' ];

Prompt.propTypes = {
    className: PropTypes.string,
    inline: PropTypes.bool,
    inlineHorizontalAlign: PropTypes.oneOf(inlineHorizontalAlign),
    inlineMessageColor: PropTypes.oneOf(inlineMessageColor),
    message: PropTypes.string,
    onClick: PropTypes.func,
    onNoClick: PropTypes.func,
    onYesClick: PropTypes.func,
    style: PropTypes.object
};

export default Prompt;
