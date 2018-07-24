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

const colorEnums = [ 'dark-blue', 'white' ];

class CloseButton extends Component {
    constructor() {
        super();

        this._onCloseClick = this._onCloseClick.bind(this);
    }

    render() {
        const { closeButton, inverse, onClose } = this.props;

        if (!onClose) { return false; }

        if (_.isObject(closeButton)) {
            return React.cloneElement(closeButton, {
                className: 'drawer-close-button'
            });;
        } else {
            return (
                <Button
                    className="drawer-close-button"
                    color={inverse ? 'transparent' : 'alternate'}
                    onClick={this._onCloseClick}
                    icon
                    style={{ margin: 0 }}
                >
                    <Icon inverse type={_.isString(closeButton) ? closeButton : 'times'} />
                </Button>
            );
        }
    }

    _onCloseClick() {
        this.props.onClose();
    }
}

CloseButton.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
};

class DrawerWing extends Component {
    render() {
        const { children, className, color, width, style } = this.props;
        console.log('color', color);
        const containerClasses = ClassNames('drawer-wing', className, {
            'color-dark-blue': color === 'dark-blue'
        });
        const defaultStyle = {
            width: width || null
        };

        return (
            <div
                className={containerClasses}
                style={Object.assign({}, defaultStyle, style)}
            >
                {children}
            </div>
        );
    }

    componentDidMount() {
        const { onOpenToggle, width } = this.props;
        const newWidth = width ? `${width}px` : '100%';

        onOpenToggle(newWidth);
    }
}

DrawerWing.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(colorEnums),
    onOpenToggle: PropTypes.func,
    width: PropTypes.number,
    style: PropTypes.object
};

class DrawerHeader extends Component {
    render() {
        const { children, closeButton, inverse, onClose, title, titleTruncate } = this.props;
        const titleClass = ClassNames('title', {
            'drawer-title-truncate': titleTruncate
        });

        return (
            <header className="drawer-header">
                <Header as="h2" className={titleClass} title={title}>{title}</Header>

                <div className="drawer-close-button-container">
                    <CloseButton closeButton={closeButton} inverse={inverse} onClose={onClose}/>
                </div>

                {children ? (
                    <div className="drawer-header-children">{children}</div>
                ) : (
                    <Divider />
                )}
            </header>
        );
    }
}

DrawerHeader.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    titleTruncate: PropTypes.bool
};

class Drawer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolled: false,
            transformValue: props.side === 'right'
                ? 'translate(100%, 0)' : 'translate(-100%, 0)',
            wing: null
        };

        this._drawerContainerInnerPaddingTop = 27;

        this._onBeforeClose = this._onBeforeClose.bind(this);
        this._onClickOutside = this._onClickOutside.bind(this);
        this._onCloseAnimationComplete = this._onCloseAnimationComplete.bind(this);
        this._onCloseWingAnimationComplete = this._onCloseWingAnimationComplete.bind(this);
        this._onOpen = this._onOpen.bind(this);
        this._onOpenAnimationComplete = this._onOpenAnimationComplete.bind(this);
        this._onOpenWingToggle = this._onOpenWingToggle.bind(this);
        this._onPortalClose = this._onPortalClose.bind(this);
        this._onScrollStart = this._onScrollStart.bind(this);
        this._onScrollStop = this._onScrollStop.bind(this);
        this._onUpdate = this._onUpdate.bind(this);

        this._removeFromDOM = null;
        this._drawer = null;
        this._drawerContainer = null;
    }

    componentDidUpdate(prevProps) {
        // Open wing if there wasn't a previous wing open.
        if (!!this.props.wing && !!!prevProps.wing) {
            console.log('Open wing if there wasn\'t a previous wing open.')
            this.setState({ wing: this.props.wing });
        }

        // Open new wing and close old wing.
        if (!!this.props.wing && !!prevProps.wing && this.props.wing !== prevProps.wing) {
            console.log('Open new wing and close old wing.');
            this.setState({ wing: this.props.wing });
        }

        // Close wing if there is no other wing to open.
        if (!!!this.props.wing && !!prevProps.wing) {
            console.log('Close wing if there is no other wing to open.');
            this._onCloseWingToggle(false);
        }
    }

    render() {
        const { children, className, closeButton, color, header,
            inverse, isOpen, onClose, title, titleTruncate, side } = this.props;
        const { transformValue, wing } = this.state;
        const containerClasses = ClassNames('ui', 'drawer', className);
        const containerInnerClasses = ClassNames('drawer-container', {
            'color-dark-blue': color === 'dark-blue',
            'drawer-container-inverse': inverse,
            'drawer-container-is-scrolled': this.state.isScrolled,
            'drawer-container-no-header': header === false,
            'left-side': side === 'left'
        });
        const wingClasses = ClassNames('drawer-wing-container', {
            'left-side': side === 'left'
        });
        let renderContent;

        if (_.isArray(children)) {
            console.error('Please wrap the Drawer\'s children in an enclosing tag');
            return false;
        }

        renderContent = React.Children.map(children, child => {
            if (_.isFunction(child.type)) {
                return React.cloneElement(child, {
                    closeButton: closeButton,
                    inverse: inverse,
                    onClose: onClose,
                    title: title,
                    titleTruncate: titleTruncate
                });
            } else {
                return React.Children.map(child.props.children, secondaryChild => {
                    if (_.isFunction(secondaryChild.type) && secondaryChild.type.name === 'DrawerHeader') {
                        return (
                            <DrawerHeader
                                children={secondaryChild.props.children}
                                closeButton={this.props.closeButton}
                                inverse={this.props.inverse}
                                onClose={this.props.onClose}
                                title={this.props.title}
                                titleTruncate={this.props.titleTruncat}
                            />
                        );
                    } else {
                        return secondaryChild;
                    }
                });
            }
        });

        if (_.isUndefined(header)) {
            renderContent.unshift(
                <DrawerHeader
                    closeButton={closeButton}
                    inverse={inverse}
                    key={`drawer-header-${_.kebabCase(title)}`}
                    onClose={onClose}
                    title={title}
                    titleTruncate={titleTruncate}
                />
            );
        }

        renderContent = [
            <div className="drawer-children" key={`drawer-children-${_.kebabCase(title)}`}>
                {renderContent}
            </div>
        ];

        if (header === false) {
            renderContent.unshift(
                <CloseButton
                    closeButton={closeButton}
                    inverse={inverse}
                    key="drawer-close-button"
                    onClose={onClose}
                />
            );
        }

        return (
            <Portal
                beforeClose={this._onBeforeClose}
                isOpened={isOpen}
                onClose={this._onPortalClose}
                onOpen={this._onOpen}
                onUpdate={this._onUpdate}
            >
                <div className={containerClasses}>
                    <div
                        className={containerInnerClasses}
                        ref={el => this.drawerContainer = el}
                        style={{ transform: transformValue }}
                    >
                        {side === 'left' && <div className={wingClasses}>
                            <div>
                                {wing ? React.cloneElement(wing, {
                                    onOpenToggle: this._onOpenWingToggle
                                }) : null}
                            </div>
                        </div>}

                        <ScrollBar
                            autoHide
                            onScrollStart={this._onScrollStart}
                            onScrollStop={this._onScrollStop}
                        >
                            <div
                                className="drawer-container-inner"
                                ref={el => this.drawerContainerInner = el}
                                style={{
                                    paddingBottom: '33px',
                                    paddingLeft: '22px',
                                    paddingRight: '22px',
                                    paddingTop: header === false ? '22px' : null
                                }}
                            >
                                {renderContent}
                            </div>
                        </ScrollBar>

                        {side === 'right' && <div className={wingClasses}>
                            <div>
                                {wing ? React.cloneElement(wing, {
                                    onOpenToggle: this._onOpenWingToggle
                                }) : null}
                            </div>
                        </div>}

                    </div>

                    <div className="drawer-dimmer" />
                </div>
            </Portal>
        );
    }

    _transitionProps(el) {
        let t;
        let transitions = {
            'transiton': 'transitonend',
            'oTransition': 'oTransitionEnd',
            'MozTransition': 'transitonend',
            'WebkitTransition': 'webkitTransitionEnd'
        }

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }

    _onCloseAnimationComplete() {
        const { onCloseComplete, side } = this.props;
        const animationEvent = this._transitionProps(this.drawerContainer);
        const body = document.body;
        const drawerLength = document.querySelectorAll('.ui.drawer').length;

        this.drawerContainer.removeEventListener(animationEvent, this._onCloseAnimationComplete);
        this._removeFromDOM();

        if (drawerLength <= 2) {
            body.classList.remove('drawer-open-layered');
        }

        if (drawerLength <= 1) {
            const scrollPosition = parseInt(body.style.top, 10);

            body.classList.remove('drawer-open', 'drawer-dimmers');
            window.scroll(0, Math.abs(scrollPosition));
            body.style.top = null;
        }

        body.classList.remove('drawer-animate-out');

        this.setState({ transformValue: side === 'right'
            ? 'translate(100%, 0)' : 'translate(-100%, 0)' });

        if (_.isFunction(onCloseComplete)) {
            onCloseComplete(true);
        }
    }

    _onOpenAnimationComplete() {
        const { onOpenComplete } = this.props;
        const animationEvent = this._transitionProps(this.drawerContainer);

        this.drawerContainer.removeEventListener(animationEvent, this._onOpenAnimationComplete);

        if (_.isFunction(onOpenComplete)) {
            onOpenComplete(true);
        }

        document.body.classList.add('drawer-dimmers');
    }

    _onBeforeClose(node, removeFromDOM) {
        if (!this.props.isOpen) {
            const animationEvent = this._transitionProps(this._drawerContainer);

            document.body.classList.add('drawer-animate-out');
            this._drawer.classList.add('drawer-animate-out');
            this._drawerContainer.style.transform = this.props.side === 'right'
                ? 'translate(100%, 0)' : 'translate(-100%, 0)';

            this._removeFromDOM = removeFromDOM;
            this._drawerContainer.addEventListener(animationEvent, this._onCloseAnimationComplete);
        } else {
            document.body.classList.remove('ddrawer-open', 'drawer-open-layered');

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
        const headerEl = this.drawerContainerInner.querySelector('.drawer-header');

        if (headerEl) {
            const paddingTop = headerEl.offsetHeight;

            if (paddingTop !== this._drawerContainerInnerPaddingTop) {
                this._drawerContainerInnerPaddingTop = paddingTop + 27 + 'px';
                this.drawerContainerInner.style.paddingTop = this._drawerContainerInnerPaddingTop;
            }
        }
    }

    _onPortalClose() {
        if (this.props.onClickOutside) {
            document.removeEventListener('click', this._onClickOutside);
        }
    }

    _onOpen(node) {
        const { maxWidth, onClickOutside, side } = this.props;
        const body = document.body;
        const scrollPosition = window.pageYOffset;
        const drawerLength = document.querySelectorAll('.ui.drawer').length;
        this._drawer = node.querySelector('.drawer-container');
        this._drawerContainer = node.querySelector('.drawer-container');
        const drawerDimmer = node.querySelector('.drawer-dimmer');
        const layeredOffset = 11;
        const containerInnerEl = ReactDOM.findDOMNode(this.drawerContainerInner);
        const animationEvent = this._transitionProps(this._drawerContainer);
        let zIndex = 9002; // adding 2 accounts for the frist .drawer and .drawer-dimmers- z-indexes

        this._drawerContainer.addEventListener(animationEvent, this._onOpenAnimationComplete);

        if (onClickOutside) {
            document.addEventListener('click', this._onClickOutside);
        }

        if (DOMUtils.hasClassName(body, 'drawer-open')) {
            zIndex = zIndex + drawerLength
            DOMUtils.addClassName(body, 'drawer-open-layered');

            this._drawer.style.zIndex = zIndex;
            this._drawerContainer.style.boxShadow = `${side === 'right' ? '-' : ''}2px 0 7px 0 rgba(0, 0, 0, 0.17)`;
            this._drawerContainer.style.zIndex = zIndex;
            drawerDimmer.style.display = 'none';
        } else {
            body.style.top = `-${scrollPosition}px`;
            DOMUtils.addClassName(body, 'drawer-open');
            this._drawer.style.zIndex = zIndex - 1;
            this._drawerContainer.style.zIndex = zIndex + drawerLength;
        }

        if (!_.isUndefined(maxWidth)) {
            this._drawerContainer.style.maxWidth = _.isNumber(maxWidth) ? `${maxWidth}px` : _.isString(maxWidth) ? maxWidth : null
        } else {
            this._drawerContainer.style.maxWidth = 768 - (layeredOffset * (drawerLength - 1)) + 'px';
        }

        this._drawerContainer.style.transform = 'translate(0, 0)';
    }

    _onOpenWingToggle(width) {
        const { side } = this.props;
        this.setState({ transformValue: side === 'right'
            ? `translate(-${width}, 0)` : `translate(${width}, 0)` });
    }

    _onCloseWingToggle() {
        const transitionEvent = this._transitionProps(this._drawerContainer);

        this._drawerContainer.addEventListener(transitionEvent, this._onCloseWingAnimationComplete);
        this.setState({ transformValue: 'translate(0, 0)' });
    }

    _onCloseWingAnimationComplete() {
        const transitionEvent = this._transitionProps(this._drawerContainer);

        this._drawerContainer.removeEventListener(transitionEvent, this._onCloseWingAnimationComplete);
        this.setState({ wing: null });
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
Drawer.Wing = DrawerWing;

Drawer.defaultProps = {
    side: 'right'
};

Drawer.propTypes = {
    className: PropTypes.string,
    closeButton: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    color: PropTypes.oneOf(colorEnums),
    header: PropTypes.bool,
    inverse: PropTypes.bool,
    onCloseComplete: PropTypes.func,
    isOpen: PropTypes.bool.isRequired,
    onOpenComplete: PropTypes.func,
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onClickOutside: PropTypes.bool,
    onClose: PropTypes.func,
    path: PropTypes.string,
    side: PropTypes.oneOf([ 'left', 'right' ]),
    style: PropTypes.object,
    title: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    titleTruncate: PropTypes.bool,
    wing: PropTypes.object
};

Drawer.contextTypes = {
    router: PropTypes.object
};

export default Drawer;
