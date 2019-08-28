import _ from 'lodash';
import ClassNames from 'classnames';
import DOMUtils from '../utils/domUtils.js';
import DrawerActionBar from './drawerActionBar.js';
import DrawerContent from './drawerContent.js';
import DrawerDetails from './drawerDetails.js';
import DrawerFiltersDrawer from './drawerFiltersDrawer.js';
import DrawerGrid from './drawerGrid.js';
import DrawerNavigation from './drawerNavigation.js';
import DrawerTable from './drawerTable.js';
import DrawerTitleBar from './drawerTitleBar.js';
import DrawerWing from './drawerWing.js';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';

const BODY = document.body;
const TRANSLATE_X_END = 'translateX(0)';
const TRANSLATE_X_LEFT_START = 'translateX(-100%)';
const TRANSLATE_X_RIGHT_START = 'translateX(100%)';
const BOX_SHADOW_XSMALL = '0 0 3px 0 rgba(0, 0, 0, 0.30)';
const BOX_SHADOW_SMALL = '2px 0 7px 0 rgba(0, 0, 0, 0.17)';
const BOX_SHADOW_LARGE = '12px 0 19px 0 rgba(0, 0, 0, .22)';

class Drawer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen, // We put isOpen into state because when closing a drawer we return false in render before the closing animation is complete.
        };

        this._drawerContainer = null;
        this._useComponentWillUnmount = false;

        this._onClickOutside = this._onClickOutside.bind(this);
        this._onCloseAnimationComplete = this._onCloseAnimationComplete.bind(this);
        this._onOpenAnimationComplete = this._onOpenAnimationComplete.bind(this);
    }

    componentDidUpdate(prevProps) {
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
            if (BODY.classList.contains('drawer-open')) {
                BODY.classList.remove('drawer-open');
            }

            if (BODY.classList.contains('drawer-dimmers')) {
                BODY.classList.remove('drawer-dimmers');
            }

            if (BODY.classList.contains('drawer-open-layered')) {
                BODY.classList.remove('drawer-open-layered');
            }

            if (BODY.classList.contains('drawer-animate-out')) {
                BODY.classList.remove('drawer-animate-out');
            }
        }
    }

    render() {
        const {
            children,
            className,
            dimmer,
            positionYOffset,
            wing,
        } = this.props;
        const { isOpen } = this.state;

        if (!isOpen) {
            return false;
        }

        const drawerClasses = ClassNames('ui', 'drawer', className, {
            'left-position': this._isPositionX('left'),
        });

        return (
            <Portal>
                <div
                    className={drawerClasses}
                    ref={el => this._drawerRef = el}
                >
                    <div
                        className="drawer-container"
                        ref={el => this._drawerContainerRef = el}
                        style={{
                            height: _.isNumber(positionYOffset) ? `calc(100% - ${positionYOffset}px)` : null,
                            transform: this._getTransform(),
                        }}
                    >
                        <ScrollBar
                            autoHide
                        >
                            <div className="drawer-container-inner">
                                {children}
                            </div>
                        </ScrollBar>

                        {wing}

                        <div
                            className="shadow_container"
                            ref={el => this._shadowContainerRef = el}
                        >
                            <div ref={el => this._shadowRef = el} />
                        </div>
                    </div>

                    <div
                        className="drawer-dimmer"
                        ref={el => this._drawerDimmerRef = el}
                    />
                </div>
            </Portal>
        );
    }

    _getTransform() {
        const { positionYOffset } = this.props;
        const translateX = this._isPositionX('left') ? TRANSLATE_X_LEFT_START : TRANSLATE_X_RIGHT_START;

        return _.isNumber(positionYOffset) ? `${translateX} translateY(${positionYOffset}px)` : translateX;
    }

    _isPositionX(position) {
        const { positionX } = this.props;

        return positionX === position;
    }

    _onBeforeClose() {
        const animationEvent = this._transitionProps(this._drawerContainer);

        BODY.classList.add('drawer-animate-out');
        this._drawerContainer.classList.add('drawer-animate-out');
        this._drawerContainer.style.transform = this._getTransform();
        this._drawerContainer.addEventListener(animationEvent, this._onCloseAnimationComplete);
    }

    _onClickOutside(event) {
        const { onClickOutside } = this.props;

        if (this._drawerContainerRef.contains(event.target) || !onClickOutside) {
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
        const { onCloseComplete, onClickOutside } = this.props;
        const animationEvent = this._transitionProps(this._drawerContainerRef);
        const drawerLength = document.querySelectorAll('.ui.drawer').length;

        if (onClickOutside) {
            document.removeEventListener('click', this._onClickOutside);
        }

        this._drawerContainerRef.removeEventListener(animationEvent, this._onCloseAnimationComplete);

        if (drawerLength <= 2) {
            BODY.classList.remove('drawer-open-layered');
        }

        if (drawerLength <= 1) {
            const scrollPosition = parseInt(BODY.style.top, 10);

            BODY.classList.remove('drawer-open', 'drawer-dimmers');
            window.scroll(0, Math.abs(scrollPosition));
            BODY.style.top = null;
        }

        BODY.classList.remove('drawer-animate-out');

        this._drawerContainerRef.style.transform = this._getTransform();

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

        const nodePortal = ReactDOM.findDOMNode(this);
        this._drawerContainer = nodePortal.querySelector('.drawer-container');

        const { dimmer, maxWidth, onClickOutside, positionYOffset, shadowSize } = this.props;
        const animationEvent = this._transitionProps(this._drawerContainer);
        const boxShadowPositionX = this._isPositionX('right') ? '-' : '';
        const drawerLength = document.querySelectorAll('.ui.drawer').length;
        const layeredOffset = 11;
        const scrollPosition = window.pageYOffset;
        const zIndex = 10002; // adding 2 accounts for the frist .drawer and .drawer-dimmers- z-indexes

        this._drawerContainer.addEventListener(animationEvent, this._onOpenAnimationComplete);

        if (onClickOutside) {
            document.addEventListener('click', this._onClickOutside);
        }

        setTimeout(() => {
            if (this._isPositionX('left')) {
                this._shadowContainerRef.style.right = '-30px';
                this._shadowRef.style.marginRight = '30px';
            } else {
                this._shadowContainerRef.style.left = '-30px';
                this._shadowRef.style.marginLeft = '30px';
            }

            if (!dimmer || DOMUtils.hasClassName(BODY, 'drawer-open')) {
                this._drawerRef.style.pointerEvents = 'none';
                this._drawerContainer.style.pointerEvents = 'auto';
                this._drawerDimmerRef.style.display = 'none';
            }

            if (DOMUtils.hasClassName(BODY, 'drawer-open')) {
                const newZIndex = zIndex + drawerLength;
                let boxShadow = BOX_SHADOW_SMALL;

                switch (shadowSize) {
                    case 'large':
                        boxShadow = BOX_SHADOW_LARGE;

                        break;
                    case 'xsmall':
                        boxShadow = BOX_SHADOW_XSMALL;

                        break;
                }

                DOMUtils.addClassName(BODY, 'drawer-open-layered');

                nodePortal.style.zIndex = newZIndex;
                this._shadowRef.style.boxShadow = `${boxShadowPositionX}${boxShadow}`;
                this._drawerContainer.style.zIndex = newZIndex;
            } else {
                let boxShadow = BOX_SHADOW_LARGE;

                switch (shadowSize) {
                    case 'small':
                        boxShadow = BOX_SHADOW_SMALL;

                        break;
                    case 'xsmall':
                        boxShadow = BOX_SHADOW_XSMALL;

                        break;
                }

                BODY.style.top = `-${scrollPosition}px`;
                DOMUtils.addClassName(BODY, 'drawer-open');
                this._shadowRef.style.boxShadow = `${boxShadowPositionX}${boxShadow}`;
                nodePortal.style.zIndex = zIndex - 1;
                this._drawerContainer.style.zIndex = zIndex + drawerLength;
            }

            if (!_.isUndefined(maxWidth)) {
                this._drawerContainer.style.maxWidth = _.isNumber(maxWidth) ?
                    `${maxWidth}px` :
                    _.isString(maxWidth) ?
                        maxWidth :
                        '768px';
            } else {
                this._drawerContainer.style.maxWidth = 768 - (layeredOffset * (drawerLength - 1)) + 'px';
            }

            this._drawerContainer.style.transform = _.isNumber(positionYOffset) ?
                `${TRANSLATE_X_END} translateY(${positionYOffset}px)` :
                TRANSLATE_X_END;
        }, 30);
    }

    _onOpenAnimationComplete() {
        const { dimmer } = this.props;
        const animationEvent = this._transitionProps(this._drawerContainerRef);
        this._drawerContainerRef.removeEventListener(animationEvent, this._onOpenAnimationComplete);

        const { onOpenComplete } = this.props;

        if (typeof onOpenComplete === 'function') {
            onOpenComplete();
        }

        if (dimmer) {
            BODY.classList.add('drawer-dimmers');
        }
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

Drawer.ActionBar = DrawerActionBar;
Drawer.Content = DrawerContent;
Drawer.FiltersDrawer = DrawerFiltersDrawer;
Drawer.Details = DrawerDetails;
Drawer.Grid = DrawerGrid;
Drawer.Navigation = DrawerNavigation;
Drawer.Table = DrawerTable;
Drawer.TitleBar = DrawerTitleBar;
Drawer.Wing = DrawerWing;

Drawer.defaultProps = {
    dimmer: true,
    positionX: 'right',
};

Drawer.propTypes = {
    className: PropTypes.string,
    dimmer: PropTypes.bool,
    isOpen: PropTypes.bool,
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onClickOutside: PropTypes.bool,
    onClose: PropTypes.func,
    onCloseComplete: PropTypes.func,
    onOpenComplete: PropTypes.func,
    positionX: PropTypes.oneOf([ 'left', 'right' ]),
    positionYOffset: PropTypes.number,
    shadowSize: PropTypes.oneOf([ 'large', 'small', 'xsmall' ]),
    style: PropTypes.object,
    wing: PropTypes.object,
};

export default Drawer;
