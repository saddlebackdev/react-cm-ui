import _ from 'lodash';
import { Portal } from 'react-portal';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import domUtils from '../../utils/domUtils';
import DrawerActionBar from './drawerActionBar'; // eslint-disable-line import/no-cycle
import DrawerContainer from './drawerContainer';
import DrawerContent from './drawerContent';
import DrawerDataCards from './drawerDataCards';
import DrawerDataGrid from './drawerDataGrid';
import DrawerDataGroups from './drawerDataGroups';
import DrawerDeprecatedFiltersDrawer from '../drawerDeprecated/drawerDeprecatedFiltersDrawer'; // eslint-disable-line import/no-cycle
import DrawerDetailsWindow from './drawerDetailsWindow';
import DrawerFiltersDrawer from './drawerFiltersDrawer'; // eslint-disable-line import/no-cycle
import DrawerFiltersRail from './drawerFiltersRail'; // eslint-disable-line import/no-cycle
import DrawerNavigation from './drawerNavigation';
import DrawerTitleBar from './drawerTitleBar';
import DrawerWing from './drawerWing';
import withStyles from '../../styles/withStyles';

const propTypes = {
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to Drawer.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    container: PropTypes.shape({
        classList: PropTypes.shape({}),
    }),
    dimmer: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    isModal: PropTypes.bool,
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
    theme: PropTypes.shape({
        zIndex: PropTypes.shape({
            drawer: PropTypes.number,
        }),
    }),
    wing: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    classes: null,
    className: undefined,
    container: document.body,
    dimmer: true,
    isModal: true,
    maxHeight: undefined,
    maxWidth: undefined,
    onClickOutside: false,
    onClose: undefined,
    onCloseComplete: undefined,
    onOpenComplete: undefined,
    positionX: 'right',
    positionY: undefined,
    positionYOffset: undefined,
    shadowSize: undefined,
    style: {},
    theme: null,
    wing: undefined,
};

const TRANSLATE_X_END = 'translate3d(0, 0, 0)';
const TRANSLATE_X_LEFT_START = 'translate3d(-100%, 0, 0)';
const TRANSLATE_X_RIGHT_START = 'translate3d(100%, 0, 0)';
const BOX_SHADOW_XSMALL = '0 0 3px 0 rgba(0, 0, 0, 0.30)';
const BOX_SHADOW_SMALL = '2px 0 7px 0 rgba(0, 0, 0, 0.17)';
const BOX_SHADOW_LARGE = '12px 0 19px 0 rgba(0, 0, 0, .22)';
const DEFAULT_DRAWER_WIDTH = 768;

function toggleBodyStyle({ container, isOpen }) {
    const containerStyleTop = container.style.top;
    const newContainer = container.closest('body') || document.body;
    const scrollY = newContainer.scrollTop;

    newContainer.style.height = isOpen ? '100%' : '';
    newContainer.style.position = isOpen ? 'fixed' : '';
    newContainer.style.top = isOpen ? `-${scrollY}px` : '';
    newContainer.style.width = isOpen ? '100%' : '';

    if (!isOpen) {
        newContainer.classList.remove('drawer-open');

        // eslint-disable-next-line radix
        newContainer.scrollTo(0, parseInt(containerStyleTop || '0') * -1);
    } else {
        newContainer.classList.add('drawer-open');
    }
}

const styles = (theme) => ({
    root: {
        backfaceVisibility: 'hidden',
        height: '100%',
        left: 0,
        minWidth: 320,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: theme.zIndex.drawer,
    },
});

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
        const {
            container,
        } = this.props;

        const { isOpen } = this.state;

        /**
         * We only want to clean up classes here if the drawer isOpen and the
         * closing animation never happens.
         */
        if (isOpen && this.useComponentWillUnmount) {
            toggleBodyStyle({ container, isOpen: false });

            if (container.classList.contains('drawer-nubbin-open')) {
                container.classList.remove('drawer-nubbin-open');
            }

            if (container.classList.contains('drawer-dimmers')) {
                container.classList.remove('drawer-dimmers');
            }

            if (container.classList.contains('drawer-open-layered')) {
                container.classList.remove('drawer-open-layered');
            }

            if (container.classList.contains('drawer-animate-out')) {
                container.classList.remove('drawer-animate-out');
            }
        }
    }

    onBeforeClose() {
        const {
            container,
        } = this.props;

        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);

        container.classList.add('drawer-animate-out');
        this.drawerContainerRef.classList.add('drawer-animate-out');
        this.drawerContainerRef.style.transform = this.setStartOfTransform();
        this.drawerContainerRef.addEventListener(animationEvent, this.onCloseAnimationComplete);
    }

    // eslint-disable-next-line consistent-return
    onClickOutside(event) {
        const { onClickOutside } = this.props;

        if (this.drawerContainerRef.contains(event.target) || !onClickOutside) {
            return null;
        }

        this.onClose();
    }

    onClose() {
        const {
            container,
            onClickOutside,
            onClose: onCloseProps,
        } = this.props;

        if (onClickOutside) {
            container.closest('html').removeEventListener('click', this.onClickOutside);
        }

        if (_.isFunction(onCloseProps)) {
            onCloseProps(...arguments); // eslint-disable-line prefer-rest-params
        } else {
            console.warning('Drawer\'s onClose prop is required when using the prop onClickOutside'); // eslint-disable-line no-console
        }
    }

    onCloseAnimationComplete() {
        const {
            container,
            onCloseComplete,
            onClickOutside,
        } = this.props;
        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);
        const numberOfModalDrawers = document.querySelectorAll('.ui.drawer-is_modal').length;

        if (onClickOutside) {
            container.closest('html').removeEventListener('click', this.onClickOutside);
        }

        this.drawerContainerRef.removeEventListener(animationEvent, this.onCloseAnimationComplete);

        if (numberOfModalDrawers <= 2) {
            container.classList.remove('drawer-open-layered');
        }

        if (numberOfModalDrawers <= 1 || (numberOfModalDrawers > 1 && container.classList.contains('drawer-nubbin-open'))) {
            const isOpen = false;

            toggleBodyStyle({ container, isOpen });

            if (container.classList.contains('drawer-dimmers')) {
                container.classList.remove('drawer-dimmers');
            }
        }

        if (numberOfModalDrawers <= 1 && container.classList.contains('drawer-nubbin-open')) {
            container.classList.remove('drawer-nubbin-open');
        }

        container.classList.remove('drawer-animate-out');

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
        const {
            container,
            dimmer,
            isModal,
            maxWidth,
            maxHeight,
            onClickOutside,
            positionYOffset,
            positionY,
            shadowSize,
            theme,
        } = this.props;

        this.useComponentWillUnmount = true;
        this.setStartOfTransform();

        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);
        const boxShadowPositionX = this.isPositionX('right') ? '-' : '';
        const numberOfModalDrawers = document.querySelectorAll('.ui.drawer-is_modal').length;
        const layeredOffset = 11;

        const zIndex = theme.zIndex.drawer + 2; // adding 2 accounts for the first .drawer and .drawer-dimmers- z-indexes

        this.drawerContainerRef.addEventListener(animationEvent, this.onOpenAnimationComplete);

        if (onClickOutside) {
            container.closest('html').addEventListener('click', this.onClickOutside);
        }

        if (!dimmer || !isModal || numberOfModalDrawers >= 2) {
            this.drawerRef.style.pointerEvents = 'none';
            this.drawerContainerRef.style.pointerEvents = 'auto';
            this.drawerDimmerRef.style.display = 'none';
        }

        setTimeout(() => {
            if (this.isPositionX('left')) {
                this.shadowContainerRef.style.right = '-30px';
                this.shadowRef.style.marginRight = '30px';
            } else {
                this.shadowContainerRef.style.left = '-30px';
                this.shadowRef.style.marginLeft = '30px';
            }

            if (numberOfModalDrawers >= 2) {
                const newZIndex = zIndex + numberOfModalDrawers;

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

                if (!positionY && !maxHeight) {
                    const isOpen = true;

                    toggleBodyStyle({ container, isOpen });
                } else {
                    container.classList.add('drawer-nubbin-open');
                }

                this.shadowRef.style.boxShadow = `${boxShadowPositionX}${boxShadow}`;
                this.drawerRef.style.zIndex = zIndex - 1;
                this.drawerContainerRef.style.zIndex = zIndex + numberOfModalDrawers;
            }

            if (!_.isUndefined(maxWidth)) {
                this.drawerContainerRef.style.maxWidth = _.isNumber(maxWidth) ? `${maxWidth}px` :
                    maxWidth || `${DEFAULT_DRAWER_WIDTH}px`;
            } else {
                this.drawerContainerRef.style.maxWidth =
                    `${DEFAULT_DRAWER_WIDTH - (layeredOffset * (numberOfModalDrawers - 1))}px`;
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
        const {
            container,
            dimmer,
            isModal,
        } = this.props;

        const animationEvent = domUtils.cssTransitionType(this.drawerContainerRef);

        this.drawerContainerRef.removeEventListener(animationEvent, this.onOpenAnimationComplete);

        const { onOpenComplete } = this.props;

        if (typeof onOpenComplete === 'function') {
            onOpenComplete();
        }

        if (dimmer && isModal) {
            container.classList.add('drawer-dimmers');
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
            classes,
            className,
            container,
            isModal,
            positionYOffset,
            style,
            wing,
        } = this.props;

        const { isOpen } = this.state;

        if (!isOpen) {
            return false;
        }

        const rootClasses = ClassNames(
            'ui',
            'drawer',
            classes.root,
            className,
            {
                'left-position': this.isPositionX('left'),
                'top-position': this.isPositionY('top'),
                'bottom-position': this.isPositionY('bottom'),
                'drawer-is_modal': isModal,
            },
        );

        return (
            <Portal
                node={container}
            >
                <div
                    className={rootClasses}
                    ref={(ref) => { this.drawerRef = ref; }}
                >
                    <div
                        className="drawer-container"
                        ref={(ref) => { this.drawerContainerRef = ref; }}
                        style={{
                            height: _.isNumber(positionYOffset) ? `calc(100% - ${positionYOffset}px)` : null,
                            ...style,
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

export default withStyles(styles, { withTheme: true })(Drawer);
