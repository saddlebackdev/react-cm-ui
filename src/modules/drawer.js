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

class Drawer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen, // We put isOpen into state because when closing a drawer we return false in render before the closing animation is complete.
            transformValue: props.position === 'right' ?
                'translate(100%, 0)' :
                'translate(-100%, 0)',
        };

        this._drawerContainer = null;
        this._useComponentWillUnmount = false;

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

    render() {
        const {
            children,
            className,
            position,
            wing,
        } = this.props;
        const { isOpen } = this.state;

        if (!isOpen) {
            return false;
        }

        const isPositionLeft = position === 'left';
        const drawerClasses = ClassNames('ui', 'drawer', className, {
            'left-position': isPositionLeft,
        });

        return (
            <Portal>
                <div className={drawerClasses}>
                    <div
                        className="drawer-container"
                        ref={el => this._drawerContainerRef = el}
                        style={{
                            transform: isPositionLeft ? 'translate(-100%, 0)' : 'translate(100%, 0)',
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
                    </div>

                    <div className="drawer-dimmer" />
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
            if (document.body.classList.contains('drawer-open')) {
                document.body.classList.remove('drawer-open');
            }

            if (document.body.classList.contains('drawer-dimmers')) {
                document.body.classList.remove('drawer-dimmers');
            }

            if (document.body.classList.contains('drawer-open-layered')) {
                document.body.classList.remove('drawer-open-layered');
            }

            if (document.body.classList.contains('drawer-animate-out')) {
                document.body.classList.remove('drawer-animate-out');
            }
        }
    }

    _onBeforeClose() {
        const { position } = this.props;

        const animationEvent = this._transitionProps(this._drawerContainer);
        const isPositionLeft = position === 'left';

        document.body.classList.add('drawer-animate-out');
        this._drawerContainer.classList.add('drawer-animate-out');
        this._drawerContainer.style.transform = isPositionLeft ?
            'translate(-100%, 0)' :
            'translate(100%, 0)';
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
        const { onCloseComplete, position, onClickOutside } = this.props;
        const animationEvent = this._transitionProps(this._drawerContainerRef);
        const body = document.body;
        const drawerLength = document.querySelectorAll('.ui.drawer').length;
        const isPositionLeft = position === 'left';

        if (onClickOutside) {
            document.removeEventListener('click', this._onClickOutside);
        }

        this._drawerContainerRef.removeEventListener(animationEvent, this._onCloseAnimationComplete);

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

        this._drawerContainerRef.style.transform = isPositionLeft ? 'translate(-100%, 0)' : 'translate(100%, 0)';

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
        const { maxWidth, onClickOutside, position } = this.props;
        const body = document.body;
        const nodePortal = ReactDOM.findDOMNode(this);
        const scrollPosition = window.pageYOffset;
        const drawerLength = document.querySelectorAll('.ui.drawer').length;
        this._drawerContainer = nodePortal.querySelector('.drawer-container');
        const drawerDimmer = nodePortal.querySelector('.drawer-dimmer');
        const layeredOffset = 11;
        const animationEvent = this._transitionProps(this._drawerContainer);
        let zIndex = 10002; // adding 2 accounts for the frist .drawer and .drawer-dimmers- z-indexes

        this._drawerContainer.addEventListener(animationEvent, this._onOpenAnimationComplete);

        if (onClickOutside) {
            document.addEventListener('click', this._onClickOutside);
        }

        setTimeout(() => {
            if (DOMUtils.hasClassName(body, 'drawer-open')) {
                zIndex = zIndex + drawerLength;
                DOMUtils.addClassName(body, 'drawer-open-layered');

                nodePortal.style.zIndex = zIndex;
                this._drawerContainer.style.boxShadow = `${position === 'right' ? '-' : ''}2px 0 7px 0 rgba(0, 0, 0, 0.17)`;
                this._drawerContainer.style.zIndex = zIndex;
                drawerDimmer.style.display = 'none';
            } else {
                body.style.top = `-${scrollPosition}px`;
                DOMUtils.addClassName(body, 'drawer-open');
                this._drawerContainer.style.boxShadow = `${position === 'right' ? '-' : ''}12px 0 19px 0 rgba(0, 0, 0, .22)`;
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

            this._drawerContainer.style.transform = 'translate(0, 0)';
        }, 30);
    }

    _onOpenAnimationComplete() {
        const animationEvent = this._transitionProps(this._drawerContainerRef);
        this._drawerContainerRef.removeEventListener(animationEvent, this._onOpenAnimationComplete);

        const { onOpenComplete } = this.props;

        if (typeof onOpenComplete === 'function') {
            onOpenComplete();
        }

        document.body.classList.add('drawer-dimmers');
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
    position: 'right',
};

Drawer.propTypes = {
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onClickOutside: PropTypes.bool,
    onClose: PropTypes.func,
    onCloseComplete: PropTypes.func,
    onOpenComplete: PropTypes.func,
    position: PropTypes.oneOf([ 'left', 'right' ]),
    style: PropTypes.object,
    wing: PropTypes.object,
};

export default Drawer;
