'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import Portal from 'react-portal';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';

import Button from '../Elements/Button.react';
import Divider from '../Elements/Divider.react';
import Header from '../Elements/Header.react';
import Icon from '../Elements/Icon.react';

import DOMUtils from '../utils/DOMUtils.js';

class DrawerHeader extends Component {

    constructor() {
        super();

        this._onCloseClick = this._onCloseClick.bind(this);
    }

    render() {
        const { children, closeButton, inverse, title, titleTruncate } = this.props;
        const titleClass = ClassNames('title', {
            'drawer-title-truncate': titleTruncate
        });

        return (
            <header className="drawer-header">
                <Header as="h2" className={titleClass} title={title}>{title}</Header>

                <div className="drawer-close-button-container">
                    {!closeButton || _.isString(closeButton) ? (
                        <Button
                            className="drawer-close-button"
                            color={inverse ? 'transparent' : 'alternate'}
                            onClick={this._onCloseClick}
                            icon={true}
                        >
                            <Icon inverse={true} type={_.isString(closeButton) ? closeButton : 'times'} />
                        </Button>
                    ) : _.isObject(closeButton) ? closeButton : null}
                </div>

                {children ? (
                    <div className="drawer-header-children">{children}</div>
                ) : (
                    <Divider />
                )}
            </header>
        );
    }

    _onCloseClick() {
        this.props.onClose();
    }

}

DrawerHeader.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool
};

class Drawer extends Component {

    constructor() {
        super();

        this.state = { isScrolled: false };

        this._drawerContainerInnerPaddingTop = 27;

        this._onBeforeClose = this._onBeforeClose.bind(this);
        this._onClickOutside = this._onClickOutside.bind(this);
        this._onOpen = this._onOpen.bind(this);
        this._onPortalClose = this._onPortalClose.bind(this);
        this._onScrollStart = this._onScrollStart.bind(this);
        this._onScrollStop = this._onScrollStop.bind(this);
        this._onUpdate = this._onUpdate.bind(this);
    }

    render() {
        const { className, closeButton, header, inverse, isOpen, onClose, title, titleTruncate } = this.props;
        const containerClasses = ClassNames('ui', 'drawer', className);
        const containerInnerClasses = ClassNames('drawer-container', {
            'drawer-container-inverse': inverse,
            'drawer-container-is-scrolled': this.state.isScrolled
        });

        return (
            <Portal
                beforeClose={this._onBeforeClose}
                isOpened={isOpen}
                onClose={this._onPortalClose}
                onOpen={this._onOpen}
                onUpdate={this._onUpdate}
            >
                <div className={containerClasses}>
                    <div className={containerInnerClasses} ref={el => this.drawerContainer = el}>
                        <ScrollBar
                            autoHide={true}
                            onScrollStart={this._onScrollStart}
                            onScrollStop={this._onScrollStop}
                        >
                            <div
                                className="drawer-container-inner"
                                ref={el => this.drawerContainerInner = el}
                                style={{
                                    paddingBottom: '33px',
                                    paddingLeft: '22px',
                                    paddingRight: '22px'
                                }}
                            >
                                {header ? React.Children.map(this.props.children, c => React.cloneElement(c, {
                                    closeButton: closeButton,
                                    inverse: inverse,
                                    onClose: onClose,
                                    title: title,
                                    titleTruncate: titleTruncate
                                })) : [
                                    <DrawerHeader
                                        closeButton={closeButton}
                                        inverse={inverse}
                                        key={`drawer-header-${_.kebabCase(title)}`}
                                        onClose={onClose}
                                        title={title}
                                        titleTruncate={titleTruncate}
                                    />,
                                    <div className="drawer-children" key={`drawer-children-${_.kebabCase(title)}`}>
                                        {this.props.children}
                                    </div>
                                ]}
                            </div>
                        </ScrollBar>
                    </div>

                    <div className="drawer-dimmer" />
                </div>
            </Portal>
        );
    }

    _animationProps(el) {
        let a;
        let animations = {
            'animation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd'
        }

        for (a in animations) {
            if (el.style[a] !== undefined) {
                return animations[a];
            }
        }
    }

    _onAnimationComplete(animationEvent, drawerContainer, removeFromDOM) {
        drawerContainer.removeEventListener(animationEvent, this._onAnimationComplete.bind(this));

        removeFromDOM();

        const element = document.body;
        const drawerLength = document.querySelectorAll('.ui.drawer').length;

        if (drawerLength <= 1) {
            DOMUtils.removeClassName(element, 'drawer-open-layered');
        }

        if (drawerLength === 0) {
            const scrollPosition = parseInt(element.style.top, 10);

            DOMUtils.removeClassName(element, 'drawer-open');
            window.scroll(0, Math.abs(scrollPosition));
            document.body.style.top = null;
        }

        DOMUtils.removeClassName(element, 'drawer-animate-out');
    }

    _onBeforeClose(node, removeFromDOM) {
        if (!this.props.isOpen) {
            const drawer = node.querySelector('.ui.drawer');
            const drawerContainer = drawer.querySelector('.drawer-container');
            const animationEvent = this._animationProps(drawerContainer);

            DOMUtils.addClassName(document.body, 'drawer-animate-out');
            drawer.className = 'ui drawer drawer-animate-out';

            drawerContainer.addEventListener(animationEvent, this._onAnimationComplete.bind(this, animationEvent, drawerContainer, removeFromDOM));
        } else {
            const element = document.body;
            DOMUtils.removeClassName(element, 'drawer-open');
            DOMUtils.removeClassName(element, 'drawer-open-layered');

            removeFromDOM();
        }
    }

    _onClickOutside(event) {
        if (this.drawerContainer.contains(event.target) || !this.props.onClickOutside) {
            return;
        }

        this.props.onClose();
    }

    _onUpdate() {
        const paddingTop = this.drawerContainerInner.querySelector('.drawer-header').offsetHeight;

        if (paddingTop !== this._drawerContainerInnerPaddingTop) {
            this._drawerContainerInnerPaddingTop = paddingTop + 27 + 'px';
            this.drawerContainerInner.style.paddingTop = this._drawerContainerInnerPaddingTop;
        }
    }

    _onPortalClose() {
        if (this.props.onClickOutside) {
            document.removeEventListener('click', this._onClickOutside);
        }
    }

    _onOpen(node) {
        const { maxWidth, onClickOutside } = this.props;
        const body = document.body;
        const scrollPosition = window.pageYOffset;
        const drawerLength = document.querySelectorAll('.ui.drawer').length;
        const drawer = node.querySelector('.ui.drawer');
        const drawerContainer = node.querySelector('.drawer-container');
        const drawerDimmer = node.querySelector('.drawer-dimmer');
        const layeredOffset = 11;
        const containerInnerEl = ReactDOM.findDOMNode(this.drawerContainerInner);
        const headerEl = containerInnerEl.querySelector('header');
        const headerHeight = headerEl.offsetHeight;
        let zIndex = 9002; // adding 2 accounts for the frist .drawer and .drawer-dimmers- z-indexes

        if (onClickOutside) {
            document.addEventListener('click', this._onClickOutside);
        }

        if (DOMUtils.hasClassName(body, 'drawer-open')) {
            zIndex = zIndex + drawerLength
            DOMUtils.addClassName(body, 'drawer-open-layered');

            drawer.style.zIndex = zIndex;
            drawerContainer.style.boxShadow = '-2px 0 7px 0 rgba(0, 0, 0, 0.17)';
            drawerContainer.style.zIndex = zIndex;
            drawerDimmer.style.display = 'none';
        } else {
            body.style.top = `-${scrollPosition}px`;
            DOMUtils.addClassName(body, 'drawer-open');
            drawer.style.zIndex = zIndex - 1;
            drawerContainer.style.zIndex = zIndex + drawerLength;
        }

        if (!_.isUndefined(maxWidth)) {
            drawerContainer.style.maxWidth = _.isNumber(maxWidth) ? `${maxWidth}px` : _.isString(maxWidth) ? maxWidth : null
        } else {
            drawerContainer.style.maxWidth = 768 - (layeredOffset * (drawerLength - 1)) + 'px';
        }
    }

    _onScrollStart() {
        const scrollContainerPos = this.drawerContainerInner.parentNode.scrollTop;

        this.setState({ isScrolled: scrollContainerPos > 0 ? true : false });
    }

    _onScrollStop() {
        const scrollContainerPos = this.drawerContainerInner.parentNode.scrollTop;

        this.setState({ isScrolled: scrollContainerPos > 0 ? true : false });
    }

}

Drawer.Header = DrawerHeader;

Drawer.propTypes = {
    className: PropTypes.string,
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    header: PropTypes.bool,
    inverse: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onClickOutside: PropTypes.bool,
    onClose: PropTypes.func,
    path: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool
};

Drawer.contextTypes = {
    router: PropTypes.object
};

export default Drawer;
