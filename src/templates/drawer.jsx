import _ from 'lodash';
import { Portal } from 'react-portal';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import domUtils from '../global/utils/domUtils';
import DrawerActionBar from './drawerActionBar'; // eslint-disable-line import/no-cycle
import DrawerContainer from './drawerContainer';
import DrawerContent from './drawerContent';
import DrawerDataCards from './drawerDataCards';
import DrawerDataGrid from './drawerDataGrid';
import DrawerDataGroups from './drawerDataGroups';
import DrawerDeprecatedFiltersDrawer from './drawerDeprecatedFiltersDrawer'; // eslint-disable-line import/no-cycle
import DrawerDetailsWindow from './drawerDetailsWindow';
import DrawerFiltersDrawer from './drawerFiltersDrawer'; // eslint-disable-line import/no-cycle
import DrawerFiltersRail from './drawerFiltersRail'; // eslint-disable-line import/no-cycle
import DrawerNavigation from './drawerNavigation';
import DrawerTitleBar from './drawerTitleBar';
import DrawerWing from './drawerWing';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dimmer: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    maxHeight: PropTypes.number,
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onClickOutside: PropTypes.bool,
    onClose: PropTypes.func,
    onCloseComplete: PropTypes.func,
    onOpenComplete: PropTypes.func,
    positionX: PropTypes.oneOf(['left', 'right']),
    positionY: PropTypes.oneOf(['bottom', 'top']),
    positionYOffset: PropTypes.number,
    shadowSize: PropTypes.oneOf(['large', 'small', 'xsmall']),
    style: PropTypes.shape({}),
    wing: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    dimmer: true,
    maxHeight: undefined,
    maxWidth: undefined,
    onClickOutside: undefined,
    onClose: undefined,
    onCloseComplete: undefined,
    onOpenComplete: undefined,
    positionX: 'right',
    positionY: undefined,
    positionYOffset: undefined,
    shadowSize: undefined,
    style: {},
    wing: undefined,
};

const BODY = document.body;
const TRANSLATE_X_END = 'translateX(0)';
const TRANSLATE_X_LEFT_START = 'translateX(-100%)';
const TRANSLATE_X_RIGHT_START = 'translateX(100%)';
const BOX_SHADOW_XSMALL = '0 0 3px 0 rgba(0, 0, 0, 0.30)';
const BOX_SHADOW_SMALL = '2px 0 7px 0 rgba(0, 0, 0, 0.17)';
const BOX_SHADOW_LARGE = '12px 0 19px 0 rgba(0, 0, 0, .22)';
const DEFAULT_DRAWER_WIDTH = 768;
class Drawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen, // We put props.isOpen into state because when closing a drawer we return false in render before the closing animation is complete.
        };

        this.useComponentWillUnmount = false;

        this.onClickOutside = this.onClickOutside.bind(this);
        this.onCloseAnimationComplete = this.onCloseAnimationComplete.bind(this);
        this.onOpenAnimationComplete = this.onOpenAnimationComplete.bind(this);
    }

    componentDidMount() {
        const { isOpen } = this.props;

        if (isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this.onOpen();
            });
        }
    }

    componentDidUpdate(prevProps) {
        const { props: nextProps } = this;

        if (!prevProps.isOpen && nextProps.isOpen) {
            this.setState({
                isOpen: nextProps.isOpen,
            }, () => {
                this.onOpen();
            });
        }

        if (prevProps.isOpen && !nextProps.isOpen) {
            this.onBeforeClose();
        }

        if (
            prevProps.isOpen &&
            nextProps.isOpen &&
            prevProps.positionYOffset !== nextProps.positionYOffset
        ) {
            this.drawerContainerRef.style.transform = _.isNumber(nextProps.positionYOffset) ?
                `${TRANSLATE_X_END} translateY(${nextProps.positionYOffset}px)` :
                TRANSLATE_X_END;
        }
        
        if (
            prevProps.isOpen &&
            nextProps.isOpen &&
            prevProps.maxWidth !== nextProps.maxWidth
        ) {
            this.drawerContainerRef.style.maxWidth = _.isNumber(nextProps.maxWidth) ? `${nextProps.maxWidth}px` :
                nextProps.maxWidth || `${DEFAULT_DRAWER_WIDTH}px`;
        }
        
        if (
            prevProps.isOpen &&
            nextProps.isOpen &&
            prevProps.maxHeight !== nextProps.maxHeight
        ) {
            this.drawerContainerRef.style.maxHeight = nextProps.maxHeight ? `${nextProps.maxHeight}px` : 'none';
        }
    }

    componentWillUnmount() {
        const { isOpen } = this.state;

        /**
         * We only want to clean up classes here if the drawer isOpen and the
         * closing animation never happens.
         */
        if (isOpen && this.useComponentWillUnmount) {
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

    onBeforeClose() {
        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);

        BODY.classList.add('drawer-animate-out');
        this.drawerContainerRef.classList.add('drawer-animate-out');
        this.drawerContainerRef.style.transform = this.setStartOfTransform();
        this.drawerContainerRef.addEventListener(animationEvent, this.onCloseAnimationComplete);
    }

    onClickOutside(event) {
        const { onClickOutside } = this.props;

        if (this.drawerContainerRef.contains(event.target) || !onClickOutside) {
            return;
        }

        this.onClose();
    }

    onClose() {
        const { onClickOutside, onClose } = this.props;

        if (onClickOutside) {
            document.removeEventListener('click', this.onClickOutside);
        }

        if (_.isFunction(onClose)) {
            onClose(...arguments); // eslint-disable-line prefer-rest-params
        } else {
            console.warning('Drawer\'s onClose prop is required when using the prop onClickOutside'); // eslint-disable-line no-console
        }
    }

    onCloseAnimationComplete() {
        const { onCloseComplete, onClickOutside } = this.props;
        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);
        const drawerLength = document.querySelectorAll('.ui.drawer').length;

        if (onClickOutside) {
            document.removeEventListener('click', this.onClickOutside);
        }

        this.drawerContainerRef.removeEventListener(animationEvent, this.onCloseAnimationComplete);

        if (drawerLength <= 2) {
            BODY.classList.remove('drawer-open-layered');
        }

        if (drawerLength <= 1) {
            const scrollPosition = parseInt(BODY.style.top, 10);
            window.scroll(0, Math.abs(scrollPosition));
            BODY.classList.remove('drawer-open', 'drawer-dimmers');
            BODY.style.top = null;
        }

        BODY.style.position = null;
        BODY.classList.remove('drawer-animate-out');

        this.drawerContainerRef.style.transform = this.setStartOfTransform();

        if (_.isFunction(onCloseComplete)) {
            onCloseComplete(true);
        }

        this.useComponentWillUnmount = false;

        this.setState({
            isOpen: false,
        });
    }

    onOpen() {
        this.useComponentWillUnmount = true;
        this.setStartOfTransform();

        const {
            dimmer,
            maxWidth,
            maxHeight,
            onClickOutside,
            positionYOffset,
            positionY,
            shadowSize,
        } = this.props;
        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);
        const boxShadowPositionX = this.isPositionX('right') ? '-' : '';
        const drawerLength = document.querySelectorAll('.ui.drawer').length;
        const layeredOffset = 11;
        const scrollPosition = window.pageYOffset;
        const zIndex = 10002; // adding 2 accounts for the frist .drawer and .drawer-dimmers- z-indexes

        this.drawerContainerRef.addEventListener(animationEvent, this.onOpenAnimationComplete);

        if (onClickOutside) {
            document.addEventListener('click', this.onClickOutside);
        }

        setTimeout(() => {
            if (this.isPositionX('left')) {
                this.shadowContainerRef.style.right = '-30px';
                this.shadowRef.style.marginRight = '30px';
            } else {
                this.shadowContainerRef.style.left = '-30px';
                this.shadowRef.style.marginLeft = '30px';
            }

            if (!dimmer || domUtils.hasClassName(BODY, 'drawer-open')) {
                this.drawerRef.style.pointerEvents = 'none';
                this.drawerContainerRef.style.pointerEvents = 'auto';
                this.drawerDimmerRef.style.display = 'none';
            }

            if (domUtils.hasClassName(BODY, 'drawer-open')) {
                const newZIndex = zIndex + drawerLength;
                let boxShadow = BOX_SHADOW_SMALL;

                switch (shadowSize) {
                    case 'large':
                        boxShadow = BOX_SHADOW_LARGE;

                        break;
                    case 'xsmall':
                        boxShadow = BOX_SHADOW_XSMALL;

                        break;

                    default:
                }

                domUtils.addClassName(BODY, 'drawer-open-layered');
                this.drawerRef.style.zIndex = newZIndex;
                this.shadowRef.style.boxShadow = `${boxShadowPositionX}${boxShadow}`;
                this.drawerContainerRef.style.zIndex = newZIndex;
            } else {
                let boxShadow = BOX_SHADOW_LARGE;

                switch (shadowSize) {
                    case 'small':
                        boxShadow = BOX_SHADOW_SMALL;

                        break;
                    case 'xsmall':
                        boxShadow = BOX_SHADOW_XSMALL;

                        break;

                    default:
                }
                BODY.style.top = `-${scrollPosition}px`;

                domUtils.addClassName(BODY, 'drawer-open');

                if (positionY && maxHeight) {
                    BODY.style.position = 'inherit';
                }

                this.shadowRef.style.boxShadow = `${boxShadowPositionX}${boxShadow}`;
                this.drawerRef.style.zIndex = zIndex - 1;
                this.drawerContainerRef.style.zIndex = zIndex + drawerLength;
            }

            if (!_.isUndefined(maxWidth)) {
                this.drawerContainerRef.style.maxWidth = _.isNumber(maxWidth) ? `${maxWidth}px` :
                    maxWidth || `${DEFAULT_DRAWER_WIDTH}px`;
            } else {
                this.drawerContainerRef.style.maxWidth =
                    `${DEFAULT_DRAWER_WIDTH - (layeredOffset * (drawerLength - 1))}px`;
            }

            if (!_.isUndefined(maxHeight)) {
                this.drawerContainerRef.style.maxHeight = `${maxHeight}px`;
            }

            this.drawerContainerRef.style.transform = _.isNumber(positionYOffset) ?
                `${TRANSLATE_X_END} translateY(${positionYOffset}px)` :
                TRANSLATE_X_END;
        }, 30);
    }

    onOpenAnimationComplete() {
        const { dimmer } = this.props;
        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);
        this.drawerContainerRef.removeEventListener(animationEvent, this.onOpenAnimationComplete);

        const { onOpenComplete } = this.props;

        if (typeof onOpenComplete === 'function') {
            onOpenComplete();
        }

        if (dimmer) {
            BODY.classList.add('drawer-dimmers');
        }
    }

    setStartOfTransform() {
        const { positionYOffset } = this.props;
        const translateX = this.isPositionX('left') ? TRANSLATE_X_LEFT_START : TRANSLATE_X_RIGHT_START;

        this.drawerContainerRef.style.transform = _.isNumber(positionYOffset) ?
            `${translateX} translateY(${positionYOffset}px)` :
            translateX;
    }

    isPositionX(position) {
        const { positionX } = this.props;

        return positionX === position;
    }

    isPositionY(position) {
        const { positionY } = this.props;

        return positionY === position;
    }

    render() {
        const {
            children,
            className,
            positionYOffset,
            wing,
        } = this.props;
        const { isOpen } = this.state;

        if (!isOpen) {
            return false;
        }

        const drawerClasses = ClassNames('ui', 'drawer', className, {
            'left-position': this.isPositionX('left'),
            'top-position': this.isPositionY('top'),
            'bottom-position': this.isPositionY('bottom'),
        });

        return (
            <Portal>
                <div
                    className={drawerClasses}
                    ref={(ref) => { this.drawerRef = ref; }}
                >
                    <div
                        className="drawer-container"
                        ref={(ref) => { this.drawerContainerRef = ref; }}
                        style={{
                            height: _.isNumber(positionYOffset) ? `calc(100% - ${positionYOffset}px)` : null,
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
                            ref={(ref) => { this.shadowContainerRef = ref; }}
                        >
                            <div ref={(ref) => { this.shadowRef = ref; }} />
                        </div>
                    </div>

                    <div
                        className="drawer-dimmer"
                        ref={(ref) => { this.drawerDimmerRef = ref; }}
                    />
                </div>
            </Portal>
        );
    }
}

Drawer.ActionBar = DrawerActionBar;
Drawer.Container = DrawerContainer;
Drawer.Content = DrawerContent;
Drawer.DataCards = DrawerDataCards;
Drawer.DataGrid = DrawerDataGrid;
Drawer.DataGroups = DrawerDataGroups;
Drawer.DeprecatedFiltersDrawer = DrawerDeprecatedFiltersDrawer;
Drawer.Details = DrawerDetailsWindow; // TODO: Deprecated. Alias name for Drawer.DetailsWindow. Remove in a major release.
Drawer.DetailsWindow = DrawerDetailsWindow;
Drawer.FiltersDrawer = DrawerFiltersDrawer;
Drawer.FiltersRail = DrawerFiltersRail;
Drawer.Grid = DrawerDataCards; // TODO: Deprecated. Alias name for Drawer.DataGrid. Remove in a major release.
Drawer.Navigation = DrawerNavigation;
Drawer.Table = DrawerDataGrid; // TODO: Deprecated. Alias name for Drawer.DataGrid. Remove in a major release.
Drawer.TitleBar = DrawerTitleBar;
Drawer.Wing = DrawerWing;

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;

export default Drawer;
