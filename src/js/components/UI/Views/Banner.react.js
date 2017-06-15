'use strict';

import 'components/UI/Views/Banner.scss';

import ClassNames from 'classnames';
import Portal from 'react-portal';
import React from 'react';

import Header from 'components/UI/Elements/Header.react';
import Icon from 'components/UI/Elements/Icon.react';

export default class Banner extends React.Component {

    render() {
        const { children, className, isOpen, level, levelIcon, message, title, type } = this.props;
        const containerClasses = ClassNames('ui', 'banner', className, {
            'banner-level-error': level === 'error',
            'banner-level-secondary': !level || level === 'secondary',
            'banner-level-success': level === 'success',
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
        let bannersYPosition = 88;
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

const levelEnums = [ 'error', 'secondary', 'success', 'warning' ];
const typeEnums = [ 'alert', 'notification' ];

Banner.propTypes = {
    className: React.PropTypes.string,
    id: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
    ]).isRequired,
    isOpen: React.PropTypes.bool.isRequired,
    level: React.PropTypes.oneOf(levelEnums),
    levelIcon: React.PropTypes.string,
    message: React.PropTypes.string,
    onAfterClose: React.PropTypes.func,
    onClose: React.PropTypes.func.isRequired,
    onOpen: React.PropTypes.func,
    style: React.PropTypes.object,
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(typeEnums)
};
