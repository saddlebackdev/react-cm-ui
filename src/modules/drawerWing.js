import ClassNames from 'classnames';
import DOMUtils from '../utils/domUtils.js';
import PropTypes from 'prop-types';
import React from 'react';

class DrawerWing extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isOpen: false,
        };

        this._closestDrawerContainerEl = null;

        this._onCloseAnimationComplete = this._onCloseAnimationComplete.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { isOpen, width } = this.props;

        if (!prevProps.isOpen && isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this._onOpen();
            });
        }

        if (prevProps.isOpen && !isOpen) {
            this._onBeforeClose();
        }

        if (prevProps.width !== width && prevProps.isOpen && isOpen) {
            this._setWidth();
        }
    }

    render() {
        const { children, className, color, position, style, width } = this.props;
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
                ref={ref => this._drawerWingRef = ref}
                style={style}
            >
                <div>
                    <div
                        className="drawer--wing-container"
                        style={{
                            width: width || null,
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    _onBeforeClose() {
        const { isOpen } = this.props;

        if (!isOpen) {
            const animationEvent = DOMUtils.cssTransitionType(this._closestDrawerContainerEl);

            this._closestDrawerContainerEl.style.transform = 'translate(0)';
            this._closestDrawerContainerEl.addEventListener(animationEvent, this._onCloseAnimationComplete);
        }
    }

    _onCloseAnimationComplete() {
        this.setState({
            isOpen: false,
        }, () => {
            const animationEvent = DOMUtils.cssTransitionType(this._closestDrawerContainerEl);
            this._closestDrawerContainerEl.removeEventListener(animationEvent, this._onCloseAnimationComplete);
        });
    }

    _onOpen() {
        this._setWidth();
    }

    _setWidth() {
        const { position, width } = this.props;
        const isPositionLeft = position === 'left';

        this._closestDrawerContainerEl = this._drawerWingRef.closest('.drawer-container');
        this._closestDrawerContainerEl.style.transform = `translate(${isPositionLeft ? width : '-' + width}, 0)`;
    }
}

DrawerWing.defaultProps = {
    color: 'white',
    position: 'right',
    width: '100%',
};

DrawerWing.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'blue', 'grey', 'white' ]),
    isOpen: PropTypes.bool,
    position: PropTypes.oneOf([ 'left', 'right' ]),
    style: PropTypes.object,
    width: PropTypes.string,
};

export default DrawerWing;
