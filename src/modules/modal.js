'use strict';

import React, { Component } from 'react';
import _ from 'lodash';
import Button from '../elements/button';
import ClassNames from 'classnames';
import Divider from '../elements/divider';
import DOMUtils from '../utils/domUtils.js';
import Header from '../elements/header';
import Icon from '../elements/icon';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';

class ModalHeader extends Component {
    constructor() {
        super();

        this._onCloseClick = this._onCloseClick.bind(this);
    }

    render() {
        const { children, closeButton, inverse, title, titleTruncate } = this.props;
        const titleClass = ClassNames('title', {
            'modal-title-truncate': titleTruncate,
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
                            icon
                        >
                            <Icon inverse type={_.isString(closeButton) ? closeButton : 'times'} />
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
        PropTypes.string,
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
};

class Modal extends Component {
    constructor(props) {
        super(props);

        this._defaultDimensions = {
            autoHeightMax: null,
            height: '100%',
            maxHeight: '100%',
            maxWidth: 'none',
            minHeight: 'auto',
            minWidth: '320px',
            width: '100%',
        };

        this.state = {
            height: this._defaultDimensions.height,
            isOpen: props.isOpen,
            isScrolled: false,
            maxHeight: this._defaultDimensions.maxHeight,
            maxWidth: this._defaultDimensions.maxWidth,
            minHeight: this._defaultDimensions.minHeight,
            minWidth: this._defaultDimensions.minWidth,
            width: this._defaultDimensions.width,
        };

        this._mounted = false;
        this._modalContainer = null;

        this._onBeforeClose = this._onBeforeClose.bind(this);
        this._onClickOutside = this._onClickOutside.bind(this);
        this._onCloseAnimationComplete = this._onCloseAnimationComplete.bind(this);
        this._onClose = this._onClose.bind(this);
        this._onOpen = this._onOpen.bind(this);
        this._onOpenAnimationComplete = this._onOpenAnimationComplete.bind(this);
        this._onResize = this._onResize.bind(this);
        this._onScrollStart = this._onScrollStart.bind(this);
        this._onScrollStop = this._onScrollStop.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.isOpen && this.props.isOpen) {
            this.setState({
                isOpen: this.props.isOpen,
            }, () => {
                this._onOpen();
            });
        }

        if (prevProps.isOpen && !this.props.isOpen) {
            this._onBeforeClose();
        }
    }

    render() {
        const {
            autoHeight,
            className,
            closeButton,
            fluidContent,
            header,
            inverse,
            title,
            titleTruncate,
        } = this.props;
        const {
            autoHeightMax,
            height,
            isOpen,
            isScrolled,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,
            width,
        } = this.state;

        if (!isOpen) {
            return false;
        }

        const containerClasses = ClassNames('ui', 'modal', className);
        const containerInnerClasses = ClassNames('modal-container', {
            'modal-container-inverse': inverse,
            'modal-container-is-scrolled': isScrolled,
        });
        const containerInnerStyles = {
            height: height,
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            minHeight: minHeight,
            minWidth: minWidth,
            width: width,
        };
        const containerInnerScrollStyles = fluidContent ? { height: '100%' } : null;

        return (
            <Portal>
                <div className={containerClasses}>
                    <div
                        className={containerInnerClasses}
                        ref={ref => this._modalContainerRef = ref}
                        style={containerInnerStyles}
                    >
                        <ScrollBar
                            autoHeight={autoHeight}
                            autoHeightMax={autoHeightMax}
                            autoHide
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
                                    onClose: this._onClose,
                                    title: title,
                                    titleTruncate: titleTruncate,
                                })) : [
                                    <ModalHeader
                                        closeButton={closeButton}
                                        inverse={inverse}
                                        key={`modal-header-${_.kebabCase(title)}`}
                                        onClose={this._onClose}
                                        title={title}
                                        titleTruncate={titleTruncate}
                                    />,
                                    <div className="modal-children" key={`modal-children-${_.kebabCase(title)}`}>
                                        {this.props.children}
                                    </div>,
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
        const { isOpen } = this.props;
        this._mounted = true;

        window.addEventListener('resize', this._onResize);

        this._onResize();

        if (isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this._onOpen();
            });
        }
    }

    componentWillUnmount() {
        this._mounted = false;

        window.removeEventListener('resize', this._onResize);

        if (document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
        }

        if (document.body.classList.contains('modal-dimmer')) {
            document.body.classList.remove('modal-dimmer');
        }

        if (document.body.classList.contains('modal-open-layered')) {
            document.body.classList.remove('modal-open-layered');
        }

        if (document.body.classList.contains('modal-animate-out')) {
            document.body.classList.remove('modal-animate-out');
        }
    }

    _animationProps(el) {
        let a;
        let animations = {
            'animation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd',
        };

        for (a in animations) {
            if (el.style[a] !== undefined) {
                return animations[a];
            }
        }
    }

    _onBeforeClose() {
        const nodePortal = ReactDOM.findDOMNode(this);
        const modalContainer = nodePortal.querySelector('.modal-container');
        const animationEvent = this._animationProps(modalContainer);

        document.body.classList.add('modal-animate-out');
        nodePortal.classList.add('modal-animate-out');

        this._modalContainer.addEventListener(animationEvent, this._onCloseAnimationComplete);
    }

    _onClickOutside(event) {
        if (this._modalContainerRef.contains(event.target) || !this.props.onClickOutside) {
            return;
        }

        this._onClose();
    }

    _onClose() {
        const { onClickOutside, onClose } = this.props;

        if (onClickOutside) {
            document.removeEventListener('click', this._onClickOutside);
        }

        onClose();
    }

    _onCloseAnimationComplete() {
        const body = document.body;
        const animationEvent = this._animationProps(this._modalContainerRef);
        this._modalContainerRef.removeEventListener(animationEvent, this._onCloseAnimationComplete);

        const element = document.body;
        const modalLength = document.querySelectorAll('.ui.modal').length;

        if (modalLength <= 2) {
            body.classList.remove('modal-open-layered');
        }

        if (modalLength <= 1) {
            const scrollPosition = parseInt(element.style.top, 10);

            body.classList.remove('modal-open');
            window.scroll(0, Math.abs(scrollPosition));
            body.style.top = null;
        }

        body.classList.remove('modal-animate-out');

        this.setState({
            isOpen: false,
        });
    }

    _onOpen() {
        const { autoHeight, onClickOutside, maxWidth } = this.props;
        const body = document.body;
        const nodePortal = ReactDOM.findDOMNode(this);
        const scrollPosition = window.pageYOffset;
        const modalLength = document.querySelectorAll('.ui.modal').length;
        this._modalContainer = nodePortal.querySelector('.modal-container');
        const modalDimmer = nodePortal.querySelector('.modal-dimmer');
        const animationEvent = this._animationProps(this._modalContainer);
        let zIndex = 12002; // adding 2 accounts for the frist .modal and .modal-dimmers- z-indexes

        this._modalContainer.addEventListener(animationEvent, this._onOpenAnimationComplete);

        if (onClickOutside) {
            document.addEventListener('click', this._onClickOutside);
        }

        if (DOMUtils.hasClassName(body, 'modal-open')) {
            zIndex = zIndex + modalLength;
            DOMUtils.addClassName(body, 'modal-open-layered');

            nodePortal.style.zIndex = zIndex;
            this._modalContainer.style.zIndex = zIndex;
            modalDimmer.style.display = 'none';
        } else {
            body.style.top = `-${scrollPosition}px`;
            DOMUtils.addClassName(body, 'modal-open');
            nodePortal.style.zIndex = zIndex - 1;
            this._modalContainer.style.zIndex = zIndex + modalLength;
        }

        if (!_.isUndefined(maxWidth)) {
            this._modalContainer.style.maxWidth = _.isNumber(maxWidth) ?
                `${maxWidth}px` :
                _.isString(maxWidth) ?
                    maxWidth :
                    null;
        } else {
            this._modalContainer.style.maxWidth = '768px';
        }

        if (autoHeight) {
            const modalPaddingBottom = parseInt(getComputedStyle(nodePortal).paddingBottom);
            const modalPaddingTop = parseInt(getComputedStyle(nodePortal).paddingTop);
            const modalHeight = nodePortal.offsetHeight;
            const newAutoHeightMax = modalHeight - modalPaddingBottom - modalPaddingTop;

            this.setState({ autoHeightMax: newAutoHeightMax });
        }
    }

    _onOpenAnimationComplete() {
        const animationEvent = this._animationProps(this._modalContainerRef);
        this._modalContainer.removeEventListener(animationEvent, this._onOpenAnimationComplete);

        const { onOpenComplete } = this.props;

        if (typeof onOpenComplete === 'function') {
            onOpenComplete();
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
                    width: this.props.width || '640px',
                };
            } else {
                dimensions = {
                    height: this._defaultDimensions.height,
                    maxHeight: this._defaultDimensions.maxHeight,
                    maxWidth: this._defaultDimensions.maxWidth,
                    minHeight: this._defaultDimensions.minHeight,
                    minWidth: this._defaultDimensions.minWidth,
                    width: this._defaultDimensions.width,
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
        PropTypes.string,
    ]),
    fluidContent: PropTypes.bool,
    header: PropTypes.bool,
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    inverse: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    maxHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    minHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    minWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onClickOutside: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    style: PropTypes.object,
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export default Modal;
