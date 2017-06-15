'use strict';

import 'components/UI/Modules/Modal.scss';

import _ from 'lodash';
import ClassNames from 'classnames';
import Portal from 'react-portal';
import React from 'react';

import ModalContainer from 'components/UI/Modules/ModalContainer.react';

import DOMUtils from 'utils/UI/DOMUtils.js';

export default class Modal extends React.Component {

    render() {
        const { className, closeButton, height,
            maxHeight, maxWidth, minHeight,
            minWidth, isOpen, onClickOutside,
            onClose, title, width, fluidContent } = this.props;
        const containerClasses = ClassNames('ui', 'modal', className);

        return (
            <Portal
                beforeClose={this._onBeforeClose.bind(this)}
                isOpened={isOpen}
                onOpen={this._onOpen.bind(this)}
            >
                <div className={containerClasses}>
                    <ModalContainer
                        closeButton={closeButton}
                        height={height}
                        maxHeight={maxHeight}
                        maxWidth={maxWidth}
                        minHeight={minHeight}
                        minWidth={minWidth}
                        onClose={onClose}
                        onClickOutside={onClickOutside}
                        title={title}
                        width={width}
                        fluidContent={fluidContent}
                    >
                        {this.props.children}
                    </ModalContainer>

                    <div className="modal-dimmer" />
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
            const modalDimmerSaturation = document.querySelector('.modal-dimmer-saturation');
            modalDimmerSaturation.parentNode.removeChild(modalDimmerSaturation);
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
        const { maxWidth } = this.props;
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

            const modalDimmerSaturation = document.createElement('div');
            modalDimmerSaturation.classList.add('modal-dimmer-saturation');
            document.getElementById('coreApp').appendChild(modalDimmerSaturation);
        }

        if (!_.isUndefined(maxWidth)) {
            modalContainer.style.maxWidth = _.isNumber(maxWidth) ? `${maxWidth}px` : _.isString(maxWidth) ? maxWidth : null
        } else {
            modalContainer.style.maxWidth = 768 - (layeredOffset * (modalLength - 1)) + 'px';
        }
    }

}

Modal.propTypes = {
    className: React.PropTypes.string,
    closeButton: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.string
    ]),
    fluidContent: React.PropTypes.bool,
    height: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    isOpen: React.PropTypes.bool.isRequired,
    maxHeight: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    maxWidth: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    minHeight: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    minWidth: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    onClickOutside: React.PropTypes.bool,
    onClose: React.PropTypes.func.isRequired,
    style: React.PropTypes.object,
    title: React.PropTypes.string,
    width: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ])
};
