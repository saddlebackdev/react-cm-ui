/* eslint-disable */

import React, { Component } from 'react';
import _ from 'lodash';
import { Portal } from 'react-portal';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';
import Button from '../inputs/button';
import Divider from '../dataDisplay/divider';
import domUtils from '../utils/domUtils';
import Header from '../atoms/header';
import Icon from '../dataDisplay/icon';

const DEFAULT_CONTAINER_PADDING_TOP = 27;
const colorEnums = [ 'dark-blue', 'grey', 'white' ];

class CloseButton extends Component {
    constructor() {
        super();
        this._onCloseClick = this._onCloseClick.bind(this);
    }

    render() {
        const { closeButton, inverse, onClose } = this.props;

        if (!onClose) {
            return false;
        }

        let closeButtonJSX;

        if (_.isObject(closeButton)) {
            closeButtonJSX = React.cloneElement(closeButton, {
                className: 'drawer-close-button',
            });
        } else {
            closeButtonJSX = (
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

        return (
            <div className="drawer-close-button-container">
                {closeButtonJSX}
            </div>
        );
    }

    _onCloseClick() {
        this.props.onClose();
    }
}

CloseButton.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
};

class DrawerDeprecatedWing extends Component {
    render() {
        const { children, className, color, width, style } = this.props;
        const containerClasses = ClassNames('drawer-wing', className, {
            'color-dark-blue': color === 'dark-blue',
            'color-grey': color === 'grey',
        });
        const defaultStyle = {
            width: width || null,
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

DrawerDeprecatedWing.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf(colorEnums),
    onOpenToggle: PropTypes.func,
    style: PropTypes.shape({}),
    width: PropTypes.number,
};

class DrawerDeprecatedHeader extends Component {
    constructor() {
        super();

        this._drawerContainerInnerPaddingTop = DEFAULT_CONTAINER_PADDING_TOP;
    }

    render() {
        const { children, closeButton, inverse, onClose, title, titleTruncate } = this.props;
        const titleClass = ClassNames('title', {
            'drawer-title-truncate': titleTruncate,
        });

        return (
            <header className="drawer-header" ref={ref => this._drawerHeaderRef = ref}>
                {_.isObject(title) ? (
                    title
                ) : title ? (
                    <Header as="h2" className={titleClass} title={title}>
                        {title}
                    </Header>
                ) : null}

                <CloseButton closeButton={closeButton} inverse={inverse} onClose={onClose} />

                {children ? (
                    <div className="drawer-header-children">{children}</div>
                ) : (
                    <Divider />
                )}
            </header>
        );
    }

    componentDidMount() {
        this._onHeaderUpdate();
    }

    _onHeaderUpdate(node) {
        const headerEl = ReactDOM.findDOMNode(this);
        if (headerEl) {
            const paddingTop = headerEl.offsetHeight;
            const drawerInnerContainer = headerEl.closest('.drawer-container-inner');
            if (drawerInnerContainer && paddingTop !== this._drawerContainerInnerPaddingTop) {
                this._drawerContainerInnerPaddingTop = `${paddingTop + DEFAULT_CONTAINER_PADDING_TOP}px`;
                drawerInnerContainer.style.paddingTop = this._drawerContainerInnerPaddingTop;
            }
        }
    }
}

DrawerDeprecatedHeader.propTypes = {
    closeButton: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    inverse: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    titleTruncate: PropTypes.bool,
};

class DrawerDeprecated extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen,
            isScrolled: false,
            transformValue: props.position === 'right' ?
                'translate(100%, 0)' :
                'translate(-100%, 0)',
            wing: null,
        };

        this._onClickOutside = this._onClickOutside.bind(this);
        this._onCloseAnimationComplete = this._onCloseAnimationComplete.bind(this);
        this._onCloseWingAnimationComplete = this._onCloseWingAnimationComplete.bind(this);
        this._onOpen = this._onOpen.bind(this);
        this._onOpenAnimationComplete = this._onOpenAnimationComplete.bind(this);
        this._onOpenWingToggle = this._onOpenWingToggle.bind(this);
        this._onClose = this._onClose.bind(this);
        this._onScrollStart = this._onScrollStart.bind(this);
        this._onScrollStop = this._onScrollStop.bind(this);

        this._drawerContainer = null;
        this._useComponentWillUnmount = false;
    }

    componentDidUpdate(prevProps) {
        // Open wing if there wasn't a previous wing open.
        if (!!this.props.wing && !!!prevProps.wing) {
            this.setState({ wing: this.props.wing });
        }

        // Open new wing and close old wing.
        if (!!this.props.wing && !!prevProps.wing && this.props.wing !== prevProps.wing) {
            this.setState({ wing: this.props.wing });
        }

        // Close wing if there is no other wing to open.
        if (!!!this.props.wing && !!prevProps.wing) {
            this._onCloseWingToggle(false);
        }

        if (this.props.isOpen && prevProps.maxWidth !== this.props.maxWidth) {
            const { maxWidth } = this.props;

            if (_.isNumber(maxWidth)) {
                this._drawerContainer.style.maxWidth = `${maxWidth}px`;
            } else if (_.isString(maxWidth)) {
                this._drawerContainer.style.maxWidth = maxWidth;
            } else {
                this._drawerContainer.style.maxWidth = '768px';
            }
        }

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
            children,
            className,
            closeButton,
            color,
            header,
            inverse,
            isModal,
            scrollBar,
            title,
            titleTruncate,
            position,
        } = this.props;
        const { isOpen } = this.state;

        if (!isOpen) {
            return false;
        }

        const { transformValue, wing } = this.state;
        const containerClasses = ClassNames(
            'ui',
            'drawer',
            'deprecated',
            className,
            {
                'drawer-is_modal': isModal,
            }
        );
        const containerInnerClasses = ClassNames('drawer-container', {
            'color-dark-blue': color === 'dark-blue',
            'drawer-container-inverse': inverse,
            'drawer-container-is-scrolled': this.state.isScrolled,
            'drawer-container-no-header': header === false,
            'left-position': position === 'left',
        });
        const wingClasses = ClassNames('drawer-wing-container', {
            'left-position': position === 'left',
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
                    onClose: this._onClose,
                    title: title,
                    titleTruncate: titleTruncate,
                });
            } else {
                return React.Children.map(child.props.children, secondaryChild => {
                    if (_.isFunction(secondaryChild.type) && secondaryChild.type.name === 'DrawerDeprecatedHeader') {
                        return (
                            <DrawerDeprecatedHeader
                                children={secondaryChild.props.children}
                                closeButton={closeButton}
                                inverse={inverse}
                                onClose={this._onClose}
                                title={title}
                                titleTruncate={titleTruncate}
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
                <DrawerDeprecatedHeader
                    closeButton={closeButton}
                    inverse={inverse}
                    key={`drawer-header-${_.kebabCase(title)}`}
                    onClose={this._onClose}
                    title={title}
                    titleTruncate={titleTruncate}
                />
            );
        }

        renderContent = [
            <div className="drawer-children" key={`drawer-children-${_.kebabCase(title)}`}>
                {renderContent}
            </div>,
        ];

        if (header === false) {
            renderContent.unshift(
                <CloseButton
                    closeButton={closeButton}
                    inverse={inverse}
                    key="drawer-close-button"
                    onClose={this._onClose}
                />
            );
        }

        return (
            <Portal>
                <div className={containerClasses}>
                    <div
                        className={containerInnerClasses}
                        ref={el => this.drawerContainerRef = el}
                        style={{ transform: transformValue }}
                    >
                        {position === 'left' && wing ? (
                            <div className={wingClasses}>
                                <div>
                                    {React.cloneElement(wing, { onOpenToggle: this._onOpenWingToggle })}
                                </div>
                            </div>
                        ) : null}

                        {scrollBar === true || _.isUndefined(scrollBar) ? (
                            <ScrollBar
                                autoHide
                                onScrollStart={this._onScrollStart}
                                onScrollStop={this._onScrollStop}
                            >
                                <div
                                    className="drawer-container-inner"
                                    ref={el => this._drawerContainerInnerRef = el}
                                    style={{
                                        paddingBottom: '33px',
                                        paddingLeft: '22px',
                                        paddingRight: '22px',
                                        paddingTop: header === false ? '22px' : null,
                                    }}
                                >
                                    {renderContent}
                                </div>
                            </ScrollBar>
                        ) : (
                            <div
                                className="drawer-container-inner"
                                ref={el => this._drawerContainerInnerRef = el}
                                style={{
                                    paddingBottom: '33px',
                                    paddingLeft: '22px',
                                    paddingRight: '22px',
                                    paddingTop: header === false ? '22px' : null,
                                }}
                            >
                                {renderContent}
                            </div>
                        )}

                        {position === 'right' && wing ? (
                            <div className={wingClasses}>
                                <div>
                                    {React.cloneElement(wing, { onOpenToggle: this._onOpenWingToggle })}
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="drawer-dimmer-deprecated" />
                </div>
            </Portal>
        );
    }

    componentDidMount() {
        const { isOpen } = this.props;

        if (isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this._onOpen();
            });
        }
    }

    componentWillUnmount() {
        const { isOpen } = this.state;

        if (isOpen && this._useComponentWillUnmount) { // We only want to clean up classes here if the closing animation never happens and the drawer isOpen.
            if (document.body.classList.contains('drawer-deprecated-open')) {
                document.body.classList.remove('drawer-deprecated-open');
            }

            if (document.body.classList.contains('drawer-dimmers')) {
                document.body.classList.remove('drawer-dimmers');
            }

            if (document.body.classList.contains('drawer-deprecated-open-layered')) {
                document.body.classList.remove('drawer-deprecated-open-layered');
            }

            if (document.body.classList.contains('drawer-animate-out')) {
                document.body.classList.remove('drawer-animate-out');
            }
        }
    }

    _onBeforeClose() {
        const animationEvent = this._transitionProps(this._drawerContainer);

        document.body.classList.add('drawer-animate-out');
        this._drawerContainer.classList.add('drawer-animate-out');
        this._drawerContainer.style.transform = this.props.position === 'right' ?
            'translate(100%, 0)' :
            'translate(-100%, 0)';
        this._drawerContainer.addEventListener(animationEvent, this._onCloseAnimationComplete);
    }

    _onClickOutside(event) {
        if (this.drawerContainerRef.contains(event.target) || !this.props.onClickOutside) {
            return;
        }

        this._onClose();
    }

    _onClose() {
        const { onClickOutside, onClose } = this.props;

        if (onClickOutside) {
            document.removeEventListener('click', this._onClickOutside);
        }

        onClose(...arguments);
    }

    _onCloseAnimationComplete() {
        const { onCloseComplete, position, onClickOutside } = this.props;
        const animationEvent = this._transitionProps(this.drawerContainerRef);
        const body = document.body;
        const numberOfModalDrawers = document.querySelectorAll('.ui.drawer-is_modal').length;
        const numberOfModalDeprecatedDrawers = document.querySelectorAll('.ui.drawer.deprecated.drawer-is_modal').length;

        if (onClickOutside) {
            document.removeEventListener('click', this._onClickOutside);
        }

        this.drawerContainerRef.removeEventListener(animationEvent, this._onCloseAnimationComplete);

        if (numberOfModalDrawers <= 2) {
            body.classList.remove('drawer-deprecated-open-layered');
        }

        if (numberOfModalDrawers <= 1 || numberOfModalDeprecatedDrawers <= 1) {
            const scrollPosition = parseInt(body.style.top, 10);

            body.classList.remove('drawer-deprecated-open', 'drawer-dimmers');
            window.scroll(0, Math.abs(scrollPosition));
            body.style.top = null;
        }

        body.classList.remove('drawer-animate-out');

        this.setState({ transformValue: position === 'right' ?
            'translate(100%, 0)' :
            'translate(-100%, 0)' });

        if (_.isFunction(onCloseComplete)) {
            onCloseComplete(true);
        }

        this._useComponentWillUnmount = false;

        this.setState({
            isOpen: false,
        });
    }

    _onOpen() {
        this._useComponentWillUnmount = true;
        const {
            isModal,
            maxWidth,
            onClickOutside,
            position,
        } = this.props;
        const body = document.body;
        const nodePortal = ReactDOM.findDOMNode(this);
        const scrollPosition = window.pageYOffset;
        const numberOfModalDrawers = document.querySelectorAll('.ui.drawer-is_modal').length;
        this._drawerContainer = nodePortal.querySelector('.drawer-container');
        const drawerDimmer = nodePortal.querySelector('.drawer-dimmer-deprecated');
        const layeredOffset = 11;
        const animationEvent = this._transitionProps(this._drawerContainer);
        let zIndex = 10002; // adding 2 accounts for the frist .drawer and .drawer-dimmers- z-indexes

        this._drawerContainer.addEventListener(animationEvent, this._onOpenAnimationComplete);

        if (onClickOutside) {
            document.addEventListener('click', this._onClickOutside);
        }

        setTimeout(() => {
            if (!isModal || numberOfModalDrawers >= 2) {
                drawerDimmer.style.display = 'none';
            }

            if (numberOfModalDrawers >= 2) {
                zIndex = zIndex + numberOfModalDrawers;

                if (isModal) {
                    domUtils.addClassName(body, 'drawer-deprecated-open-layered');
                }

                nodePortal.style.zIndex = zIndex;
                this._drawerContainer.style.boxShadow = `${position === 'right' ? '-' : ''}2px 0 7px 0 rgba(0, 0, 0, 0.17)`;
                this._drawerContainer.style.zIndex = zIndex;
            } else {
                body.style.top = `-${scrollPosition}px`;

                if (isModal) {
                    domUtils.addClassName(body, 'drawer-deprecated-open');
                }

                this._drawerContainer.style.boxShadow = `${position === 'right' ? '-' : ''}12px 0 19px 0 rgba(0, 0, 0, .22)`;
                nodePortal.style.zIndex = zIndex - 1;
                this._drawerContainer.style.zIndex = zIndex + numberOfModalDrawers;
            }

            if (!_.isUndefined(maxWidth)) {
                this._drawerContainer.style.maxWidth = _.isNumber(maxWidth) ?
                    `${maxWidth}px` :
                    _.isString(maxWidth) ?
                        maxWidth :
                        '768px';
            } else {
                this._drawerContainer.style.maxWidth = 768 - (layeredOffset * (numberOfModalDrawers - 1)) + 'px';
            }

            this._drawerContainer.style.transform = 'translate(0, 0)';
        }, 30);
    }

    _onOpenAnimationComplete() {
        const {
            isModal,
        } = this.props;
        const animationEvent = this._transitionProps(this.drawerContainerRef);
        this.drawerContainerRef.removeEventListener(animationEvent, this._onOpenAnimationComplete);

        const { onOpenComplete } = this.props;

        if (typeof onOpenComplete === 'function') {
            onOpenComplete();
        }

        if (isModal) {
            document.body.classList.add('drawer-dimmers');
        }
    }

    _onOpenWingToggle(width) {
        const { position } = this.props;

        this.setState({ transformValue: position === 'right' ? `translate(-${width}, 0)` : `translate(${width}, 0)` });
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
        const scrollContainerPos = this._drawerContainerInnerRef.parentNode.scrollTop;

        this.setState({ isScrolled: scrollContainerPos > 0 ? true : false });
    }

    _onScrollStop() {
        const scrollContainerPos = this._drawerContainerInnerRef.parentNode.scrollTop;

        this.setState({ isScrolled: scrollContainerPos > 0 ? true : false });
    }

    _transitionProps(el) {
        let t;
        let transitions = {
            'transition': 'transitionend',
            'oTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd',
        };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }
}

DrawerDeprecated.Header = DrawerDeprecatedHeader;
DrawerDeprecated.Wing = DrawerDeprecatedWing;

DrawerDeprecated.defaultProps = {
    isModal: true,
    isOpen: false,
    position: 'right',
};

DrawerDeprecated.propTypes = {
    className: PropTypes.string,
    closeButton: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    color: PropTypes.oneOf(colorEnums),
    header: PropTypes.bool,
    inverse: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    isModal: PropTypes.bool,
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onClickOutside: PropTypes.bool,
    onClose: PropTypes.func,
    onCloseComplete: PropTypes.func,
    onOpenComplete: PropTypes.func,
    path: PropTypes.string,
    position: PropTypes.oneOf([ 'left', 'right' ]),
    scrollBar: PropTypes.bool,
    style: PropTypes.shape({}),
    title: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    titleTruncate: PropTypes.bool,
    wing: PropTypes.shape({}),
};

DrawerDeprecated.contextTypes = {
    router: PropTypes.shape({}),
};

export default DrawerDeprecated;
