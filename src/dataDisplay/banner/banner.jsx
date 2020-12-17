import {
    isUndefined,
    isFunction,
    forEachRight,
} from 'lodash';
import { Portal } from 'react-portal';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import withStyles from '../../styles/withStyles';
import BannerItem from './bannerItem';
import Typography from '../typography';
import Icon from '../icon';
import domUtils from '../../utils/domUtils';

const propTypes = {
    /**
     * Additional Content
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to Prompt.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
        bannerContainer: PropTypes.string,
        bannerLevelType: PropTypes.string,
        bannerMessage: PropTypes.string,
        bannerMessageContainer: PropTypes.string,
    }),
    /**
     * Assign additional class names to Banner.
     */
    className: PropTypes.string,
    /**
     * A Banner's Color (Overrides banner color provided by level prop).
     * enums:purple, teal,
     */
    color: PropTypes.oneOf([
        'purple',
        'teal',
    ]),
    /**
     * The `id` of the Banner.
     */
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    /**
     * Required: A boolean that is supplied the Banner for the animation..
     */
    isOpen: PropTypes.bool.isRequired,
    /**
     * A Banner's level.
     * enums:error, purple, secondary, success, teal, warning
     */
    level: PropTypes.oneOf([
        'error',
        'purple',
        'secondary',
        'success',
        'teal',
        'warning',
    ]),
    /**
     * A Banner's type of level icon.
     */
    levelIcon: PropTypes.string,
    /**
     * A Banner's custom message.
     */
    message: PropTypes.string,
    /**
     * Called after the Banner's close animation.
     */
    onAfterClose: PropTypes.func,
    /**
     * Required: Handler for closing the Banner.
     */
    onClose: PropTypes.func.isRequired,
    /**
     * Called before the Banner's animation.
     */
    onOpen: PropTypes.func,
    /**
     * Supply any inline styles to the Banner's container. Mainly used for padding and margins.
     */
    style: PropTypes.shape({}),
    /**
     * HC's theme.
     */
    theme: PropTypes.shape({
        zIndex: PropTypes.shape({
            banner: PropTypes.number,
        }),
    }).isRequired,
    /**
     * A Banner's title.
     */
    title: PropTypes.string,
    /**
     * Changes the Banner's top position relative to the top of the viewport.
     */
    topPosition: PropTypes.number,
    /**
     * A Banner's Type.
     * enums:alert, notification
     */
    type: PropTypes.oneOf([
        'alert',
        'notification',
    ]),
};

const defaultProps = {
    children: undefined,
    classes: null,
    className: undefined,
    color: undefined,
    level: undefined,
    levelIcon: undefined,
    message: undefined,
    onAfterClose: undefined,
    onOpen: undefined,
    style: undefined,
    title: undefined,
    topPosition: undefined,
    type: undefined,
};

const styles = (theme) => {
    const top = '88px';
    const borderRadius = '3px 0 0 3px';

    return {
        '@keyframes slideInBanner': {
            '0%': {
                transform: 'translate(100%, 0)',
            },
            '100%': {
                transform: 'translate(0, 0)',
            },
        },
        '@keyframes slideOutBanner': {
            '0%': {
                transform: 'translate(0, 0)',
            },
            '100%': {
                transform: 'translate(100%, 0)',
            },
        },
        bannerContainer: {
            alignItems: 'flex-start',
            animation: '$slideInBanner 150ms ease-out forwards',
            backfaceVisibility: 'hidden',
            borderRadius,
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.43)',
            color: theme.palette.common.white,
            display: 'flex',
            justifyContent: 'flex-start',
            overflowX: 'hidden',
            pointerEvents: 'auto',
            position: 'absolute',
            right: 0,
            top,
            transition: 'top 150ms ease-out',
            width: '282px',
            '&.animate-out': {
                animation: '$slideOutBanner 333ms forwards',
            },
        },
        bannerLevelType: {
            alignItems: 'center',
            alignSelf: 'stretch',
            display: 'inline-flex',
            flex: '0 1 1px',
            justifyContent: 'center',
            maxWidth: '44px',
            minWidth: '44px',
        },
        bannerMessage: {
            fontSize: '14px',
        },
        bannerMessageContainer: {
            alignSelf: 'stretch',
            backgroundColor: theme.palette.background.contrastPrimary,
            flex: '1 1 auto',
            padding: '18px 22px',
        },
        root: {
            backfaceVisibility: 'hidden',
            height: '100%',
            left: 0,
            minWidth: '320px',
            pointerEvents: 'none',
            position: 'fixed',
            top: 0,
            width: '100%',
            '&.banner-color-': {
                '&purple .banner-container': {
                    background: theme.palette.purple['500'],
                },
                '&teal .banner-container': {
                    background: theme.palette.teal['500'],
                },
            },
            '&.banner-level-': {
                '&error .banner-container': {
                    background: theme.palette.error.main,
                },
                '&secondary .banner-container': {
                    background: theme.palette.active.main,
                },
                '&success .banner-container': {
                    background: theme.palette.success.main,
                },
                '&warning .banner-container': {
                    background: theme.palette.warning.main,
                },
            },
        },
    };
};

class Banner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen,
        };

        this.onAnimationComplete = this.onAnimationComplete.bind(this);
        this.onBeforeClose = this.onBeforeClose.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onOpen = this.onOpen.bind(this);
    }

    componentDidMount() {
        const {
            isOpen,
        } = this.state;

        if (isOpen) {
            this.onOpen();
        }
    }

    componentDidUpdate(prevProps) {
        const {
            isOpen: prevIsOpen,
        } = prevProps;
        const {
            isOpen,
        } = this.props;

        if (!prevIsOpen && isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this.onOpen();
            });
        }

        if (prevIsOpen && !isOpen) {
            this.onBeforeClose();
        }
    }

    onAnimationComplete() {
        const { id, isOpen, onAfterClose } = this.props;
        // eslint-disable-next-line react/no-find-dom-node
        const nodePortal = ReactDOM.findDOMNode(this);
        const bannerContainer = nodePortal.querySelector('.banner-container');
        const animationEvent = domUtils.cssAnimationType(bannerContainer);
        bannerContainer.removeEventListener(animationEvent, this.onAnimationComplete);

        this.setState({
            isOpen: false,
        }, () => {
            this.bannerYPositions();

            if (!isUndefined(onAfterClose) && !isOpen) {
                onAfterClose(id);
            }
        });
    }

    onBeforeClose() {
        // eslint-disable-next-line react/no-find-dom-node
        const nodePortal = ReactDOM.findDOMNode(this);
        const bannerContainer = nodePortal.querySelector('.banner-container');
        const animationEvent = domUtils.cssAnimationType(bannerContainer);

        bannerContainer.className += ' animate-out';
        bannerContainer.addEventListener(animationEvent, this.onAnimationComplete);
    }

    onClose() {
        const {
            id,
            onClose,
        } = this.props;

        onClose(id);
    }

    onOpen() {
        const {
            onOpen,
            theme: {
                zIndex,
            },
        } = this.props;
        // eslint-disable-next-line react/no-find-dom-node
        const nodePortal = ReactDOM.findDOMNode(this);
        nodePortal.style.zIndex = zIndex.banner;

        this.bannerYPositions();

        if (isFunction(onOpen)) {
            onOpen();
        }
    }

    bannerYPositions() {
        const { topPosition } = this.props;
        let bannersYPosition = topPosition || 22;
        const containersArray = document.querySelectorAll('.ui.banner .banner-container');
        const containersLength = containersArray.length - 1;

        forEachRight(containersArray, (element, index) => {
            const el = element;

            if (index !== containersLength) {
                bannersYPosition += el.offsetHeight + 11;
            }

            el.style.top = `${bannersYPosition}px`;
        });
    }

    render() {
        const {
            children,
            classes,
            className,
            color,
            id,
            level,
            levelIcon,
            message,
            style,
            title,
            type,
        } = this.props;

        const { isOpen } = this.state;

        if (!isOpen) {
            return false;
        }

        const containerClasses = ClassNames(
            'ui',
            'banner',
            classes.root,
            className,
            {
                'banner-level-error': level === 'error',
                'banner-level-secondary': !level || level === 'secondary',
                'banner-level-success': level === 'success',
                'banner-level-warning': level === 'warning',
                'banner-type-alert': type === 'alert',
                'banner-type-notification': type === 'notification',
                'banner-color-purple': color === 'purple',
                'banner-color-teal': color === 'teal',
            },
        );
        const containerInnerClasses = ClassNames(
            'banner-container',
            classes.bannerContainer,
            className,
        );
        const bannerLevelTypeClasses = ClassNames(
            'banner-level-type',
            classes.bannerLevelType,
        );
        const bannerMessageContainerClasses = ClassNames(
            'banner-message-container',
            classes.bannerMessageContainer,
        );
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
                <div className={containerClasses} id={id} style={style}>
                    <div className={containerInnerClasses}>
                        <div className={bannerLevelTypeClasses}>
                            <Icon compact inverse type={levelIcon || levelBasedIcon} />
                        </div>

                        <div className={bannerMessageContainerClasses}>
                            <Typography
                                style={{
                                    marginBottom: 5,
                                    paddingRight: hasCloseButton ? 16 : null,
                                }}
                                variant="h4"
                            >
                                {title}
                            </Typography>

                            {message ? (
                                <span className={classes.bannerMessage}>{message}</span>
                            ) : null}

                            {children}
                        </div>

                        {hasCloseButton ? (
                            <Icon
                                compact
                                id={`ui-button--close_banner_${id}`}
                                inverse
                                onClick={this.onClose}
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
}

Banner.Item = BannerItem;

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(Banner);
