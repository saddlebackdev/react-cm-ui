'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../Elements/Header.react';
import Icon from '../Elements/Icon.react';

class Card extends Component {

    constructor() {
        super();

        this.state = {
            contentHeight: null,
            isCollapsed: false
        };

        this._onClick = this._onClick.bind(this);
        this._onCollapseClick = this._onCollapseClick.bind(this);

        this._prevContentHeight = 0;
    }

    render() {
        const { active, className, collapsable, compact, onClick, nest, style, title } = this.props;
        const { contentHeight, isCollapsed } = this.state;
        const containerClasses = ClassNames('ui', 'card', className, {
            'card-active': active,
            'card-clickable': onClick,
            'card-collapsable': collapsable,
            'card-is-collapsed': isCollapsed,
            'card-compact': compact,
            'card-nest': nest
        });

        console.log('contentHeight', contentHeight);

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
                    ref={content => { this.content = content; }}
                    style={{ height: contentHeight }}
                >
                    {this.props.children}
                </div>
            </section>
        );
    }

    componentDidMount() {
        this.setState({
            contentHeight: this._getContentHeight()
        });
    }

    _getContentHeight() {
        const height = ReactDOM.findDOMNode(this.content).offsetHeight;

        if (height <= 0) {
            return this._prevContentHeight;
        } else {
            this._prevContentHeight = height;

            return height;
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
            isCollapsed: !isCollapsed
        });
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
