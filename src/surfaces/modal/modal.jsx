import { Portal } from 'react-portal';
import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';
import domUtils from '../../utils/domUtils';
import ModalHeader from './modalHeader';
import withStyles from '../../styles/withStyles';

const propTypes = {
    autoHeight: PropTypes.bool,
    /**
     * Override or extend the styles applied to Modal.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    closeButton: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    fluidContent: PropTypes.bool,
    header: PropTypes.bool,
    headerStyle: PropTypes.shape({}),
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    inverse: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    maxHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    minHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    minWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onClickOutside: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    style: PropTypes.shape({}),
    theme: PropTypes.shape({
        zIndex: PropTypes.shape({
            modal: PropTypes.number,
        }),
    }),
    title: PropTypes.string,
    titleTruncate: PropTypes.bool,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    classes: null,
    headerStyle: undefined,
    theme: null,
};

const styles = (theme) => ({
    root: {
        alignItems: 'center',
        backfaceVisibility: 'hidden',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        minWidth: 320,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: theme.zIndex.modal,
    },
});

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this._defaultDimensions = {
            autoHeightMax: null,
            height: '100%',
            maxHeight: '100%',
            maxWidth: 'none',
            minHeight: 'auto',
            minWidth: '320px',
            width: '100%',
        };

        this.state = {
            height: this._defaultDimensions.height,
            isOpen: props.isOpen,
            isScrolled: false,
            maxHeight: this._defaultDimensions.maxHeight,
            maxWidth: this._defaultDimensions.maxWidth,
            minHeight: this._defaultDimensions.minHeight,
            minWidth: this._defaultDimensions.minWidth,
            width: this._defaultDimensions.width,
        };

        this._mounted = false;
        this.modalContainer = null;

        this._onBeforeClose = this._onBeforeClose.bind(this);
        this._onClickOutside = this._onClickOutside.bind(this);
        this._onCloseAnimationComplete = this._onCloseAnimationComplete.bind(this);
        this._onClose = this._onClose.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onOpenAnimationComplete = this.onOpenAnimationComplete.bind(this);
        this._onResize = this._onResize.bind(this);
        this._onScrollStart = this._onScrollStart.bind(this);
        this._onScrollStop = this._onScrollStop.bind(this);
    }

    componentDidMount() {
        const { isOpen } = this.props;
        this._mounted = true;

        window.addEventListener('resize', this._onResize);

        this._onResize();

        if (isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this.onOpen();
            });
        }
    }

    componentDidUpdate(prevProps) {
        const {
            isOpen,
        } = this.props;

        if (!prevProps.isOpen && isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this.onOpen();
            });
        }

        if (prevProps.isOpen && !isOpen) {
            this._onBeforeClose();
        }
    }


    componentWillUnmount() {
        this._mounted = false;

        window.removeEventListener('resize', this._onResize);

        if (document.body.classList.contains('modal-open')) {
            document.body.classList.remove('modal-open');
        }

        if (document.body.classList.contains('modal-dimmer')) {
            document.body.classList.remove('modal-dimmer');
        }

        if (document.body.classList.contains('modal-open-layered')) {
            document.body.classList.remove('modal-open-layered');
        }

        if (document.body.classList.contains('modal-animate-out')) {
            document.body.classList.remove('modal-animate-out');
        }
    }

    animationProps(el) {
        let a;
        const animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'animationend',
            WebkitAnimation: 'webkitAnimationEnd',
        };

        for (a in animations) {
            if (el.style[a] !== undefined) {
                return animations[a];
            }
        }
    }

    _onBeforeClose() {
        const nodePortal = ReactDOM.findDOMNode(this);
        const modalContainer = nodePortal.querySelector('.modal-container');
        const animationEvent = this.animationProps(modalContainer);

        document.body.classList.add('modal-animate-out');
        nodePortal.classList.add('modal-animate-out');

        this.modalContainer.addEventListener(animationEvent, this._onCloseAnimationComplete);
    }

    _onClickOutside(event) {
        if (this.modalContainerRef.contains(event.target) || !this.props.onClickOutside) {
            return;
        }

        this._onClose();
    }

    _onClose() {
        const { onClickOutside, onClose } = this.props;

        if (onClickOutside) {
            document.removeEventListener('click', this._onClickOutside);
        }

        onClose();
    }

    _onCloseAnimationComplete() {
        const { body } = document;
        const animationEvent = this.animationProps(this.modalContainerRef);
        this.modalContainerRef.removeEventListener(animationEvent, this._onCloseAnimationComplete);

        const element = document.body;
        const modalLength = document.querySelectorAll('.ui.modal').length;

        if (modalLength <= 2) {
            body.classList.remove('modal-open-layered');
        }

        if (modalLength <= 1) {
            const scrollPosition = parseInt(element.style.top, 10);

            body.classList.remove('modal-open');
            window.scroll(0, Math.abs(scrollPosition));
            body.style.top = null;
        }

        body.classList.remove('modal-animate-out');

        this.setState({
            isOpen: false,
        });
    }

    onOpen() {
        const {
            autoHeight,
            onClickOutside,
            maxWidth,
            theme,
        } = this.props;

        const { body } = document;
        const nodePortal = ReactDOM.findDOMNode(this);
        const scrollPosition = window.pageYOffset;
        const modalLength = document.querySelectorAll('.ui.modal').length;
        this.modalContainer = nodePortal.querySelector('.modal-container');
        const modalDimmer = nodePortal.querySelector('.modal-dimmer');
        const animationEvent = this.animationProps(this.modalContainer);

        let newZIndex = theme.zIndex.modal + 2; // adding 2 accounts for the frist .modal and .modal-dimmers- z-indexes

        this.modalContainer.addEventListener(animationEvent, this.onOpenAnimationComplete);

        if (onClickOutside) {
            document.addEventListener('click', this._onClickOutside);
        }

        if (domUtils.hasClassName(body, 'modal-open')) {
            newZIndex += modalLength;
            domUtils.addClassName(body, 'modal-open-layered');

            nodePortal.style.zIndex = newZIndex;
            this.modalContainer.style.zIndex = newZIndex;
            modalDimmer.style.display = 'none';
        } else {
            body.style.top = `-${scrollPosition}px`;
            domUtils.addClassName(body, 'modal-open');
            nodePortal.style.zIndex = newZIndex - 1;
            this.modalContainer.style.zIndex = newZIndex + modalLength;
        }

        if (!_.isUndefined(maxWidth)) {
            this.modalContainer.style.maxWidth = _.isNumber(maxWidth) ?
                `${maxWidth}px` :
                _.isString(maxWidth) ?
                    maxWidth :
                    null;
        } else {
            this.modalContainer.style.maxWidth = '768px';
        }

        if (autoHeight) {
            const modalPaddingBottom = parseInt(getComputedStyle(nodePortal).paddingBottom);
            const modalPaddingTop = parseInt(getComputedStyle(nodePortal).paddingTop);
            const modalHeight = nodePortal.offsetHeight;
            const newAutoHeightMax = modalHeight - modalPaddingBottom - modalPaddingTop;

            this.setState({ autoHeightMax: newAutoHeightMax });
        }
    }

    onOpenAnimationComplete() {
        const animationEvent = this.animationProps(this.modalContainerRef);
        this.modalContainer.removeEventListener(animationEvent, this.onOpenAnimationComplete);

        const { onOpenComplete } = this.props;

        if (typeof onOpenComplete === 'function') {
            onOpenComplete();
        }
    }

    _onResize() {
        if (this._mounted) {
            let dimensions = {};

            if (window.matchMedia('(min-width: 768px)').matches === true) {
                dimensions = {
                    height: this.props.height || '500px',
                    maxHeight: this.props.maxHeight || this._defaultDimensions.maxHeight,
                    maxWidth: this.props.maxWidth || this._defaultDimensions.maxWidth,
                    minHeight: this.props.minHeight || '305px',
                    minWidth: this.props.minWidth || this._defaultDimensions.minWidth,
                    width: this.props.width || '640px',
                };
            } else {
                dimensions = {
                    height: this._defaultDimensions.height,
                    maxHeight: this._defaultDimensions.maxHeight,
                    maxWidth: this._defaultDimensions.maxWidth,
                    minHeight: this._defaultDimensions.minHeight,
                    minWidth: this._defaultDimensions.minWidth,
                    width: this._defaultDimensions.width,
                };
            }

            this.setState(dimensions);
        }
    }

    _onScrollStart() {
        const scrollContainerPos = this.modalContainerInner.parentNode.scrollTop;

        this.setState({ isScrolled: scrollContainerPos > 0 });
    }

    _onScrollStop() {
        const scrollContainerPos = this.modalContainerInner.parentNode.scrollTop;

        this.setState({ isScrolled: scrollContainerPos > 0 });
    }

    render() {
        const {
            autoHeight,
            classes,
            className,
            closeButton,
            fluidContent,
            headerStyle,
            inverse,
            title,
            titleTruncate,
            style,
        } = this.props;

        const {
            autoHeightMax,
            height,
            isOpen,
            isScrolled,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,
            width,
        } = this.state;

        if (!isOpen) {
            return false;
        }

        const rootClasses = ClassNames(
            'ui',
            'modal',
            classes.root,
            className,
        );

        const containerInnerClasses = ClassNames('modal-container', {
            'modal-container-inverse': inverse,
            'modal-container-is-scrolled': isScrolled,
        });

        const containerInnerStyles = {
            height,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,
            width,
            ...style,
        };

        const containerInnerScrollStyles = {
            ...(fluidContent && {
                height: '100%',
            }),
            ...((!title && !closeButton) && {
                paddingTop: 33,
            }),

        };

        return (
            <Portal>
                <div className={rootClasses}>
                    <div
                        className={containerInnerClasses}
                        ref={(ref) => this.modalContainerRef = ref}
                        style={containerInnerStyles}
                    >
                        <ScrollBar
                            autoHeight={autoHeight}
                            autoHeightMax={autoHeightMax}
                            autoHide
                            onScrollStart={this._onScrollStart}
                            onScrollStop={this._onScrollStop}
                        >
                            <div
                                className="modal-container-inner"
                                ref={(el) => this.modalContainerInner = el}
                                style={containerInnerScrollStyles}
                            >
                                {(title || closeButton) && (
                                    <ModalHeader
                                        closeButton={closeButton}
                                        inverse={inverse}
                                        key={`modal-header-${_.kebabCase(title)}`}
                                        onClose={this._onClose}
                                        title={title}
                                        titleTruncate={titleTruncate}
                                        style={headerStyle}
                                    />
                                )}
                                <div className="modal-children" key={`modal-children-${_.kebabCase(title)}`}>
                                    {this.props.children}
                                </div>
                            </div>
                        </ScrollBar>
                    </div>

                    <div className="modal-dimmer" />
                </div>
            </Portal>
        );
    }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(Modal);
