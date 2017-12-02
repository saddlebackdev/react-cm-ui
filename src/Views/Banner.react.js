'use strict';

import ClassNames from 'classnames';
import Portal from 'react-portal';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Header from '../Elements/Header.react';
import Icon from '../Elements/Icon.react';
import BannerItem from './BannerItem.react';

class Banner extends Component {

    render() {
        const { children, className, isOpen, level, levelIcon, message, title, type } = this.props;
        const containerClasses = ClassNames('ui', 'banner', className, {
            'banner-level-error': level === 'error',
            'banner-level-purple': level === 'purple', // Rename when better defined.
            'banner-level-secondary': !level || level === 'secondary',
            'banner-level-success': level === 'success',
            'banner-level-teal': level === 'teal', // Rename when better defined.
            'banner-level-warning': level === 'warning',
            'banner-type-alert': type === 'alert',
            'banner-type-notification': type === 'notification'
        });
        const containerInnerClasses = ClassNames('banner-container', className);
        const hasCloseButton = type === 'notification';
        let levelBasedIcon;

        switch (level) {
            case 'error':
                levelBasedIcon = 'times';
                break;
            case 'success':
                levelBasedIcon = 'check';
                break;
            case 'warning':
                levelBasedIcon = 'exclamation';
                break;
            case 'info':
            default:
                levelBasedIcon = 'circle';
        }

        return (
            <Portal
                beforeClose={this._onBeforeClose.bind(this)}
                isOpened={isOpen}
                onOpen={this._onOpen.bind(this)}
            >
                <div className={containerClasses} style={this.props.style}>
                    <div className={containerInnerClasses}>
                        <div className="banner-level-type">
                            <Icon compact={true} inverse={true} type={levelIcon || levelBasedIcon} />
                        </div>

                        <div className="banner-message-container">
                            <Header
                                size="small"
                                style={{
                                    marginBottom: '5px',
                                    paddingRight: hasCloseButton ? '16px' : null
                                }}
                            >
                                {title}
                            </Header>

                            {message ? (
                                <span className="font-size-xxsmall">{message}</span>
                            ) : null}

                            {children}
                        </div>

                        {hasCloseButton ? (
                            <Icon
                                compact={true}
                                inverse={true}
                                onClick={this._onClose.bind(this)}
                                type="times"
                                style={{
                                    position: 'absolute',
                                    right: '11px',
                                    top: '11px',
                                }}
                            />
                        ) : null}
                    </div>
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

    _onAnimationComplete(animationEvent, el, removeFromDOM) {
        const { id, isOpen, onAfterClose } = this.props;
        el.removeEventListener(animationEvent, this._onAnimationComplete.bind(this));

        removeFromDOM();

        this._bannerYPositions();

        if (!_.isUndefined(onAfterClose) && !isOpen) {
            onAfterClose(id);
        }
    }

    _onBeforeClose(node, removeFromDOM) {
        const banner = node.querySelector('.ui.banner');
        const bannerContainer = banner.querySelector('.banner-container');
        const animationEvent = this._animationProps(bannerContainer);

        bannerContainer.className += ' animate-out';
        bannerContainer.addEventListener(animationEvent, this._onAnimationComplete.bind(this, animationEvent, bannerContainer, removeFromDOM));
    }

    _onClose() {
        this.props.onClose(this.props.id);
    }

    _bannerYPositions() {
        const { topPosition } = this.props;
        let bannersYPosition = topPosition || 22;
        const containersArray = document.querySelectorAll('.ui.banner .banner-container');
        const containersLength = containersArray.length - 1;

        _.forEachRight(containersArray, (el, i) => {
            if (i !== containersLength) {
                bannersYPosition += el.offsetHeight + 11;
            }

            el.style.top = bannersYPosition + 'px';
        });
    }

    _onOpen(node) {
        node.querySelector('.ui.banner').style.zIndex = 10000;
        this._bannerYPositions();

        if (!_.isUndefined(this.props.onOpen)) {
            this.props.onOpen();
        }
    }

};

Banner.Item = BannerItem;

const levelEnums = [ 'error', 'purple', 'secondary', 'success', 'teal', 'warning' ];
const typeEnums = [ 'alert', 'notification' ];

Banner.propTypes = {
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    isOpen: PropTypes.bool.isRequired,
    level: PropTypes.oneOf(levelEnums),
    levelIcon: PropTypes.string,
    message: PropTypes.string,
    onAfterClose: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    onOpen: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.string,
    topPosition: PropTypes.number,
    type: PropTypes.oneOf(typeEnums)
};

export default Banner;
