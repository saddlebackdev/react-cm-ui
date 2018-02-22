'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../Elements/Header.react';
import Icon from '../Elements/Icon.react';

import DOMUtils from '../utils/DOMUtils.js';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contentHeight: null,
            isCollapsed: false,
            isCollapsing: false
        };

        this._onClick = this._onClick.bind(this);
        this._onCollapseClick = this._onCollapseClick.bind(this);
        this._removeIsCollapsing = this._removeIsCollapsing.bind(this);
        this._setContentHeightDebounce = _.debounce(() => this._setContentHeight(), 50);

        if (props.collapsable) {
            this._prevContentHeight = 0;

            this._observer = new MutationObserver(mutations => {
                _.forEach(mutations, m => {
                    this._setContentHeight();
                });
            });
        }
    }

    render() {
        const { active, className, collapsable, compact, onClick, nest, style, title } = this.props;
        const { contentHeight, isCollapsed, isCollapsing } = this.state;
        const containerClasses = ClassNames('ui', 'card', className, {
            'card-active': active,
            'card-clickable': onClick,
            'card-collapsable': collapsable,
            'card-is-collapsed': isCollapsed,
            'card-is-collapsing': isCollapsing,
            'card-compact': compact,
            'card-nest': nest
        });

        return (
            <section
                className={containerClasses}
                onClick={this._onClick}
                style={style}
            >
                {this._renderCollapsableButton()}

                {title ? (
                    <div className="card-title">
                        <Header size="large">{title}</Header>
                    </div>
                ) : null}

                <div
                    className="card-content"
                    ref={outerContent => { this.outerContent = outerContent; }}
                    style={{ height: contentHeight }}
                >
                    <div ref={innerContent => { this.innerContent = innerContent; }}>
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }

    componentDidMount() {
        const { collapsable } = this.props;

        if (collapsable) {
            const outerContent = ReactDOM.findDOMNode(this.outerContent);
            const innerContent = ReactDOM.findDOMNode(this.innerContent);

            window.addEventListener('resize', this._setContentHeightDebounce);
            outerContent.addEventListener(DOMUtils.cssTransitionType(outerContent), this._removeIsCollapsing);
            this._observer.observe(innerContent, {
                childList: true,
                characterData: true,
                subtree: true
            });

            this._setContentHeight();
        }
    }

    componentWillUnmount() {
        const { collapsable } = this.props;

        if (collapsable) {
            const outerContent = ReactDOM.findDOMNode(this.outerContent);

            window.removeEventListener('resize', this._setContentHeightDebounce);
            outerContent.removeEventListener(DOMUtils.cssTransitionType(outerContent), this._removeIsCollapsing);
            this._observer.disconnect();
        }
    }

    _getContentHeight() {
        const innerHeight = ReactDOM.findDOMNode(this.innerContent).offsetHeight;

        if (innerHeight <= 0) {
            return this._prevContentHeight;
        } else {
            this._prevContentHeight = innerHeight;

            return innerHeight;
        }
    }

    _onClick() {
        const { onClick } = this.props;

        if (_.isFunction(this.props.onClick)) {
            onClick();
        }
    }

    _onCollapseClick() {
        const { isCollapsed } = this.state;

        this.setState({
            contentHeight: !isCollapsed ? 0 : this._getContentHeight(),
            isCollapsed: !isCollapsed,
            isCollapsing: true
        });
    }

    _removeIsCollapsing() {
        this.setState({ isCollapsing: false });
    }

    _renderCollapsableButton() {
        const { collapsable } = this.props;
        const { isCollapsed } = this.state;
        const containerClasses = ClassNames('card-collapse-button');

        if (collapsable) {
            return (
                <div className={containerClasses}>
                    <Icon
                        compact
                        onClick={this._onCollapseClick}
                        rotate={isCollapsed ? 135 : 0}
                        type="plus"
                    />
                </div>
            );
        }
    }

    _setContentHeight() {
        this.setState({ contentHeight: this._getContentHeight() });
    }
};

Card.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    collapsable: PropTypes.bool,
    compact: PropTypes.bool,
    nest: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.string
};

export default Card;
