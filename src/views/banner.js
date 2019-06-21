'use strict';

import React, { Component } from 'react';
import BannerItem from './BannerItem';
import ClassNames from 'classnames';
import Header from '../elements/header';
import Icon from '../elements/icon';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen,
        };

        this._onAnimationComplete = this._onAnimationComplete.bind(this);
        this._onBeforeClose = this._onBeforeClose.bind(this);
        this._onOpen = this._onOpen.bind(this);
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
        const { children, className, id, level, levelIcon, message, title, type } = this.props;
        const { isOpen } = this.state;

        if (!isOpen) {
            return false; 
        }

        const containerClasses = ClassNames('ui', 'banner', className, {
            'banner-level-error': level === 'error',
            'banner-level-purple': level === 'purple', // Rename when better defined.
            'banner-level-secondary': !level || level === 'secondary',
            'banner-level-success': level === 'success',
            'banner-level-teal': level === 'teal', // Rename when better defined.
            'banner-level-warning': level === 'warning',
            'banner-type-alert': type === 'alert',
            'banner-type-notification': type === 'notification',
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
            <Portal>
                <div className={containerClasses} id={id} style={this.props.style}>
                    <div className={containerInnerClasses}>
                        <div className="banner-level-type">
                            <Icon compact inverse type={levelIcon || levelBasedIcon} />
                        </div>

                        <div className="banner-message-container">
                            <Header
                                size="small"
                                style={{
                                    marginBottom: '5px',
                                    paddingRight: hasCloseButton ? '16px' : null,
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
                                compact
                                id={`ui-button--close_banner_${id}`}
                                inverse
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

    componentDidMount() {
        if (this.state.isOpen) {
            this._onOpen();
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

    _onAnimationComplete() {
        const { id, isOpen, onAfterClose } = this.props;
        const nodePortal = ReactDOM.findDOMNode(this);
        const bannerContainer = nodePortal.querySelector('.banner-container');
        const animationEvent = this._animationProps(bannerContainer);
        bannerContainer.removeEventListener(animationEvent, this._onAnimationComplete);

        this.setState({
            isOpen: false,
        }, () => {
            this._bannerYPositions();

            if (!_.isUndefined(onAfterClose) && !isOpen) {
                onAfterClose(id);
            }
        });
    }

    _onBeforeClose() {
        const nodePortal = ReactDOM.findDOMNode(this);
        const bannerContainer = nodePortal.querySelector('.banner-container');
        const animationEvent = this._animationProps(bannerContainer);

        bannerContainer.className += ' animate-out';
        bannerContainer.addEventListener(animationEvent, this._onAnimationComplete);
    }

    _onClose() {
        this.props.onClose(this.props.id);
    }

    _onOpen() {
        const nodePortal = ReactDOM.findDOMNode(this);
        nodePortal.style.zIndex = 10000;
        this._bannerYPositions();

        if (!_.isUndefined(this.props.onOpen)) {
            this.props.onOpen();
        }
    }
}

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
    type: PropTypes.oneOf(typeEnums),
};

export default Banner;
