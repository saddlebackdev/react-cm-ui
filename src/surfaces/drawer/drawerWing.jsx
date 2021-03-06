import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import domUtils from '../../utils/domUtils';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(['blue', 'grey', 'white']),
    isOpen: PropTypes.bool,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']),
    style: PropTypes.shape({}),
    width: PropTypes.string,
};

const defaultProps = {
    children: undefined,
    className: undefined,
    color: 'white',
    dataTestId: `${UI_CLASS_NAME}-drawer_wing`,
    isOpen: undefined,
    position: 'right',
    style: {},
    width: '100%',
};

const hasClassName = 'drawer-has_wing';
const animateOutClassName = 'drawer--wing-animate-out';

class DrawerWing extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isOpen: false,
        };

        this.closestDrawerContainerEl = null;

        this.onCloseAnimationComplete = this.onCloseAnimationComplete.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { isOpen, width } = this.props;

        if (!prevProps.isOpen && isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this.onOpen();
            });
        }

        if (prevProps.isOpen && !isOpen) {
            this.onBeforeClose();
        }

        if (prevProps.width !== width && prevProps.isOpen && isOpen) {
            this.setWidth();
        }
    }

    onBeforeClose() {
        const animationEvent = domUtils.cssTransitionType(this.closestDrawerContainerEl);

        this.drawerWingRef.closest('.ui.drawer').classList.add(animateOutClassName);
        this.closestDrawerContainerEl.style.transform = 'translate3d(0, 0, 0)';
        this.closestDrawerContainerEl.addEventListener(
            animationEvent,
            this.onCloseAnimationComplete,
        );
    }

    onCloseAnimationComplete() {
        this.drawerWingRef.closest('.ui.drawer').classList.remove(hasClassName, animateOutClassName);

        this.setState({
            isOpen: false,
        }, () => {
            const animationEvent = domUtils.cssTransitionType(this.closestDrawerContainerEl);
            this.closestDrawerContainerEl.removeEventListener(
                animationEvent,
                this.onCloseAnimationComplete,
            );
        });
    }

    onOpen() {
        this.drawerWingRef.closest('.ui.drawer').classList.add(hasClassName);
        this.setWidth();
    }

    setWidth() {
        const { position, width } = this.props;
        const isPositionLeft = position === 'left';

        this.closestDrawerContainerEl = this.drawerWingRef.closest('.drawer-container');
        this.closestDrawerContainerEl.style.transform = `
            translate3d(${isPositionLeft ? width : `-${width}`}, 0, 0)
        `;
    }

    render() {
        const {
            children,
            className,
            color,
            dataTestId,
            position,
            style,
            width,
        } = this.props;

        const { isOpen } = this.state;

        if (!isOpen) {
            return false;
        }

        const isPositionLeft = position === 'left';

        const containerClasses = ClassNames('ui', 'drawer--wing', className, {
            'color-blue': color === 'blue',
            'color-grey': color === 'grey',
            'color-white': !color || color === 'grey',
            'left-position': isPositionLeft,
        });

        return (
            <div
                className={containerClasses}
                data-testid={dataTestId}
                ref={(ref) => { this.drawerWingRef = ref; }}
                style={style}
            >
                <div>
                    <div
                        className="drawer--wing-container"
                        style={{
                            width: width || null,
                        }}
                    >
                        <ScrollBar
                            autoHide
                        >
                            <div className="drawer--wing-container-inner">
                                {children}
                            </div>
                        </ScrollBar>
                    </div>
                </div>
            </div>
        );
    }
}

DrawerWing.propTypes = propTypes;
DrawerWing.defaultProps = defaultProps;

export default DrawerWing;
