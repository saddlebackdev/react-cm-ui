'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import Portal from 'react-portal';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ScrollBar from 'react-custom-scrollbars';

import Button from '../Elements/Button.react';
import Divider from '../Elements/Divider.react';
import Header from '../Elements/Header.react';
import Icon from '../Elements/Icon.react';

import DOMUtils from '../utils/DOMUtils.js';

class ModalHeader extends Component {

    constructor() {
        super();

        this._onCloseClick = this._onCloseClick.bind(this);
    }

    render() {
        const { children, closeButton, inverse, title, titleTruncate } = this.props;
        const titleClass = ClassNames('title', {
            'modal-title-truncate': titleTruncate
        });

        return (
            <header className="modal-header">
                <Header as="h2" className={titleClass} title={title}>{title}</Header>

                <div className="modal-close-button-container">
                    {_.isUndefined(closeButton) || _.isString(closeButton) ? (
                        <Button
                            className="modal-close-button"
                            color={inverse ? 'transparent' : 'alternate'}
                            onClick={this._onCloseClick}
                            icon={true}
                        >
                            <Icon inverse={true} type={_.isString(closeButton) ? closeButton : 'times'} />
                        </Button>
                    ) : _.isObject(closeButton) ? closeButton : null}
                </div>

                {children ? (
                    <div className="modal-header-children">{children}</div>
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

ModalHeader.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool
};

class Modal extends Component {
    constructor() {
        super();

        this._defaultDimensions = {
            autoHeightMax: null,
            height: '100%',
            maxHeight: '100%',
            maxWidth: 'none',
            minHeight: 'auto',
            minWidth: '320px',
            width: '100%'
        };

        this.state = {
            height: this._defaultDimensions.height,
            isScrolled: false,
            maxHeight: this._defaultDimensions.maxHeight,
            maxWidth: this._defaultDimensions.maxWidth,
            minHeight: this._defaultDimensions.minHeight,
            minWidth: this._defaultDimensions.minWidth,
            width: this._defaultDimensions.width
        };

        this._mounted = false;

        this._onBeforeClose = this._onBeforeClose.bind(this);
        this._onOpen = this._onOpen.bind(this);
        this._onResize = this._onResize.bind(this);
        this._onScrollStart = this._onScrollStart.bind(this);
        this._onScrollStop = this._onScrollStop.bind(this);
    }

    render() {
        const { autoHeight, className, closeButton, fluidContent, header, inverse, isOpen, onClickOutside, onClose, title, titleTruncate } = this.props;
        const { autoHeightMax, height, isScrolled, maxHeight, maxWidth, minHeight, minWidth, width } = this.state;
        const containerClasses = ClassNames('ui', 'modal', className);
        const containerInnerClasses = ClassNames('modal-container', {
            'modal-container-inverse': inverse,
            'modal-container-is-scrolled': isScrolled
        });
        const containerInnerStyles = {
            height: height,
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            minHeight: minHeight,
            minWidth: minWidth,
            width: width
        };
        const containerInnerScrollStyles = fluidContent ? { height: '100%' } : null;

        return (
            <Portal
                beforeClose={this._onBeforeClose}
                isOpened={isOpen}
                onOpen={this._onOpen}
            >
                <div className={containerClasses}>
                    <div className={containerInnerClasses} ref={el => this.mmodalContainer = el} style={containerInnerStyles}>
                        <ScrollBar
                            autoHeight={autoHeight}
                            autoHeightMax={autoHeightMax}
                            autoHide={true}
                            onScrollStart={this._onScrollStart}
                            onScrollStop={this._onScrollStop}
                        >
                            <div
                                className="modal-container-inner"
                                ref={el => this.modalContainerInner = el}
                                style={containerInnerScrollStyles}
                            >
                                {header ? React.Children.map(this.props.children, c => React.cloneElement(c, {
                                    closeButton: closeButton,
                                    inverse: inverse,
                                    onClose: onClose,
                                    title: title,
                                    titleTruncate: titleTruncate
                                })) : [
                                    <ModalHeader
                                        closeButton={closeButton}
                                        inverse={inverse}
                                        key={`modal-header-${_.kebabCase(title)}`}
                                        onClose={onClose}
                                        title={title}
                                        titleTruncate={titleTruncate}
                                    />,
                                    <div className="modal-children" key={`modal-children-${_.kebabCase(title)}`}>
                                        {this.props.children}
                                    </div>
                                ]}
                            </div>
                        </ScrollBar>
                    </div>

                    <div className="modal-dimmer" />
                </div>
            </Portal>
        );
    }

    componentDidMount() {
        this._mounted = true;

        window.addEventListener('resize', this._onResize);

        this._onResize();
    }

    componentWillUnmount() {
        this._mounted = false;

        window.removeEventListener('resize', this._onResize);
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

    _onAnimationComplete(animationEvent, modalContainer, removeFromDOM) {
        modalContainer.removeEventListener(animationEvent, this._onAnimationComplete.bind(this));

        removeFromDOM();

        const element = document.body;
        const modalLength = document.querySelectorAll('.ui.modal').length;

        if (modalLength <= 1) {
            DOMUtils.removeClassName(element, 'modal-open-layered');
        }

        if (modalLength === 0) {
            DOMUtils.removeClassName(element, 'modal-open');
        }

        DOMUtils.removeClassName(element, 'modal-animate-out');
    }

    _onBeforeClose(node, removeFromDOM) {
        const modal = node.querySelector('.ui.modal');
        const modalContainer = modal.querySelector('.modal-container');
        const animationEvent = this._animationProps(modalContainer);

        DOMUtils.addClassName(document.body, 'modal-animate-out');
        modal.className = 'ui modal modal-animate-out';

        modalContainer.addEventListener(animationEvent, this._onAnimationComplete.bind(this, animationEvent, modalContainer, removeFromDOM));
    }

    _onOpen(node) {
        const { autoHeight, maxWidth } = this.props;
        const body = document.body;
        const modalLength = document.querySelectorAll('.ui.modal').length;
        const modal = node.querySelector('.ui.modal');
        const modalContainer = node.querySelector('.modal-container');
        const modalDimmer = node.querySelector('.modal-dimmer');
        const layeredOffset = 11;
        let zIndex = 10002; // adding 2 accounts for the frist .modal and .modal-dimmers- z-indexes

        if (DOMUtils.hasClassName(body, 'modal-open')) {
            zIndex = zIndex + modalLength;
            DOMUtils.addClassName(body, 'modal-open-layered');

            modal.style.zIndex = zIndex;
            modalContainer.style.zIndex = zIndex;
            modalDimmer.style.display = 'none';
        } else {
            DOMUtils.addClassName(body, 'modal-open');
            modal.style.zIndex = zIndex - 1;
            modalContainer.style.zIndex = zIndex + modalLength;
        }

        if (!_.isUndefined(maxWidth)) {
            modalContainer.style.maxWidth = _.isNumber(maxWidth) ? `${maxWidth}px` : _.isString(maxWidth) ? maxWidth : null
        } else {
            modalContainer.style.maxWidth = 768 - (layeredOffset * (modalLength - 1)) + 'px';
        }

        if (autoHeight) {
            const modalPaddingBottom = parseInt(getComputedStyle(modal).paddingBottom);
            const modalPaddingTop = parseInt(getComputedStyle(modal).paddingTop);
            const modalHeight = modal.offsetHeight;
            const newAutoHeightMax = modalHeight - modalPaddingBottom - modalPaddingTop;

            this.setState({ autoHeightMax: newAutoHeightMax });
        }
    }

    _onResize() {
        if (this._mounted) {
            let dimensions = {};

            if (window.matchMedia('(min-width: 768px)').matches === true) {
                dimensions = {
                    height: this.props.height || '500px',
                    maxHeight: this.props.maxHeight || this._defaultDimensions.maxHeight,
                    maxWidth: this.props.maxWidth || this._defaultDimensions.maxWidth,
                    minHeight: this.props.minHeight || '305px',
                    minWidth: this.props.minWidth || this._defaultDimensions.minWidth,
                    width: this.props.width || '640px'
                };
            } else {
                dimensions = {
                    height: this._defaultDimensions.height,
                    maxHeight: this._defaultDimensions.maxHeight,
                    maxWidth: this._defaultDimensions.maxWidth,
                    minHeight: this._defaultDimensions.minHeight,
                    minWidth: this._defaultDimensions.minWidth,
                    width: this._defaultDimensions.width
                };
            }

            this.setState(dimensions);
        }
    }

    _onScrollStart() {
        const scrollContainerPos = this.modalContainerInner.parentNode.scrollTop;

        this.setState({ isScrolled: scrollContainerPos > 0 ? true : false });
    }

    _onScrollStop() {
        const scrollContainerPos = this.modalContainerInner.parentNode.scrollTop;

        this.setState({ isScrolled: scrollContainerPos > 0 ? true : false });
    }

}

Modal.propTypes = {
    autoHeight: PropTypes.bool,
    className: PropTypes.string,
    closeButton: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    fluidContent: PropTypes.bool,
    header: PropTypes.bool,
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    maxHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    minHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    minWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onClickOutside: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    style: PropTypes.object,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

export default Modal;
