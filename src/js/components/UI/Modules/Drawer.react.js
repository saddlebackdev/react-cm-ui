'use strict';

import 'components/UI/Modules/Drawer.scss';

import _ from 'lodash';
import ClassNames from 'classnames';
import Portal from 'react-portal';
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';

import DrawerHeader from 'components/UI/Modules/DrawerHeader.react';

import DOMUtils from 'utils/UI/DOMUtils.js';

export default class Drawer extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isScrolled: false };

        this._onClickOutsideRef = this._onClickOutside.bind(this);
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
                beforeClose={this._onBeforeClose.bind(this)}
                isOpened={isOpen}
                onClose={this._onPortalClose.bind(this)}
                onOpen={this._onOpen.bind(this)}
            >
                <div className={containerClasses}>
                    <div className={containerInnerClasses} ref="drawerContainer">
                        <ScrollBar
                            autoHide={true}
                            onScrollStart={this._onScrollStart.bind(this)}
                            onScrollStop={this._onScrollStop.bind(this)}
                        >
                            <div className="drawer-container-inner" ref="containerInner">
                                {header ? (
                                    <div className="drawer-children">
                                        {this.props.children}
                                    </div>
                                ) : (
                                    <div>
                                        <DrawerHeader
                                            closeButton={closeButton}
                                            inverse={inverse}
                                            onClose={onClose}
                                            title={title}
                                            titleTruncate={titleTruncate}
                                        />

                                        <div className="drawer-children">
                                            {this.props.children}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollBar>
                    </div>

                    <div className="drawer-dimmer" />
                </div>
            </Portal>
        );
    }

    componentWillMount() {
        // console.log('drawer componentWillMount');
    }

    componentWillUnmount() {
        // console.log('drawer componentWillUnmount');
    }

    _animationProps(el) {
        // console.log('_animationProps');
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
            DOMUtils.removeClassName(element, 'drawer-open');
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
        if (this.refs.drawerContainer.contains(event.target) || !this.props.onClickOutside) {
            return;
        }

        this.props.onClose();
    }

    _onPortalClose() {
        // console.log('_onPortalClose');
        if (this.props.onClickOutside) {
            document.removeEventListener('click', this._onClickOutsideRef);
        }
    }

    _onOpen(node) {
        // console.log('_onOpen');
        const { ignorePadding, maxWidth, onClickOutside } = this.props;
        const body = document.body;
        const drawerLength = document.querySelectorAll('.ui.drawer').length;
        const drawer = node.querySelector('.ui.drawer');
        const drawerContainer = node.querySelector('.drawer-container');
        const drawerDimmer = node.querySelector('.drawer-dimmer');
        const layeredOffset = 11;
        const containerInnerEl = this.refs.containerInner;
        const headerHeight = containerInnerEl.querySelector('header').offsetHeight;
        let zIndex = 9002; // adding 2 accounts for the frist .drawer and .drawer-dimmers- z-indexes

        !ignorePadding ? ReactDOM.findDOMNode(containerInnerEl).style.padding = `${(headerHeight + 33) + 'px'} 22px 22px` : null;

        if (onClickOutside) {
            document.addEventListener('click', this._onClickOutsideRef);
        }

        if (DOMUtils.hasClassName(body, 'drawer-open')) {
            zIndex = zIndex + drawerLength
            DOMUtils.addClassName(body, 'drawer-open-layered');

            drawer.style.zIndex = zIndex;
            drawerContainer.style.boxShadow = '-2px 0 7px 0 rgba(0, 0, 0, 0.17)';
            drawerContainer.style.zIndex = zIndex;
            drawerDimmer.style.display = 'none';
        } else {
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
        const scrollContainerPos = this.refs.containerInner.parentNode.scrollTop;

        this.setState({ isScrolled: scrollContainerPos > 0 ? true : false });
    }

    _onScrollStop() {
        const scrollContainerPos = this.refs.containerInner.parentNode.scrollTop;

        this.setState({ isScrolled: scrollContainerPos > 0 ? true : false });
    }

}

Drawer.Header = DrawerHeader;

Drawer.propTypes = {
    className: React.PropTypes.string,
    closeButton: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.string
    ]),
    header: React.PropTypes.bool,
    ignorePadding: React.PropTypes.bool,
    inverse: React.PropTypes.bool,
    isOpen: React.PropTypes.bool.isRequired,
    maxWidth: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    onClickOutside: React.PropTypes.bool,
    onClose: React.PropTypes.func,
    path: React.PropTypes.string,
    style: React.PropTypes.object,
    title: React.PropTypes.string,
    titleTruncate: React.PropTypes.bool
};

Drawer.contextTypes = {
    router: React.PropTypes.object
};
